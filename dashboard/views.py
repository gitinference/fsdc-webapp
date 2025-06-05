import logging

import requests
from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect, render
from django.views import View
from django.views.generic import TemplateView

from .forms import (
    CodebookForm,
    DatasetForm,
    ResearchEntryForm,
    ResearcherForm,
    SubdisciplineForm,
)

logger = logging.getLogger("default")
API_URL = settings.API_URL


def fetch_from_api(endpoint):
    res = requests.get(f"{API_URL}/{endpoint}/")
    if not res.ok:
        logger.error(
            f"Failed to fetch {endpoint} from {API_URL}: {res.status_code} {res.text}"
        )
        return []

    return res.json()


def upload_file_to_api(endpoint, uploaded_file):
    files = {"file": (uploaded_file.name, uploaded_file.read())}
    res = requests.post(f"{API_URL}/{endpoint}/", files=files)

    if not res.ok:
        raise ValueError(
            f"Failed to upload file to {API_URL}/{endpoint}/: {res.status_code} {res.text}"
        )

    return res.json()["id"] if res.ok else None


class CustomLoginView(LoginView):
    template_name = "dashboard/login.html"


class HomeView(TemplateView):
    template_name = "dashboard/home.html"


class ApprovalTeamRequiredMixin(UserPassesTestMixin):
    def test_func(self):
        return self.request.user.is_staff or self.request.user.username == "test_user"


class ApproveEntryView(ApprovalTeamRequiredMixin, View):
    template_name = "dashboard/approval_panel.html"

    def get(self, request):
        res = requests.get(f"{API_URL}/research-entries/?approved=false")

        unapproved = res.json() if res.ok else []
        if not unapproved:
            logger.error("Failed to fetch unapproved entries from API")

        context = {
            "unapproved_entries": unapproved,
        }
        return render(request, self.template_name, context)


class ListEntriesView(View):
    template_name = "dashboard/entry_list.html"

    def get(self, request):
        res = requests.get(f"{API_URL}/research-entries/approved=true")

        entries = res.json() if res.ok else []
        if not entries:
            logger.error("Failed to fetch research entries from API")

        context = {
            "records": entries,
        }
        return render(request, self.template_name, context)


class AddEntryView(ApprovalTeamRequiredMixin, View):
    template_name = "dashboard/add_entry.html"

    def get(self, request):
        sub_form = SubdisciplineForm()
        res_form = ResearcherForm()

        existing_subs = fetch_from_api("subdisciplines")
        existing_researchers = fetch_from_api("researchers")

        sub_form.fields["use_existing"].choices = [("", "-- Add New --")] + [
            (sub["id"], sub["name"]) for sub in existing_subs
        ]
        res_form.fields["use_existing"].choices = [("", "-- Add New --")] + [
            (res["id"], f"{res['fname']} {res['lname']}")
            for res in existing_researchers
        ]

        context = {
            "entry_form": ResearchEntryForm(),
            "sub_form": sub_form,
            "res_form": res_form,
            "codebook_form": CodebookForm(),
            "dataset_form": DatasetForm(),
        }
        return render(request, self.template_name, context)

    def post(self, request):
        entry_form = ResearchEntryForm(request.POST)
        sub_form = SubdisciplineForm(request.POST)
        res_form = ResearcherForm(request.POST)
        codebook_form = CodebookForm(request.POST, request.FILES)
        dataset_form = DatasetForm(request.POST, request.FILES)

        # Reassign choices to prevent validation errors on resubmission
        existing_subs = fetch_from_api("subdisciplines")
        existing_researchers = fetch_from_api("researchers")
        sub_form.fields["use_existing"].choices = [("", "-- Add New --")] + [
            (sub["id"], sub["name"]) for sub in existing_subs
        ]
        res_form.fields["use_existing"].choices = [("", "-- Add New --")] + [
            (res["id"], f"{res['fname']} {res['lname']}")
            for res in existing_researchers
        ]

        if all(
            [
                entry_form.is_valid(),
                sub_form.is_valid(),
                res_form.is_valid(),
                codebook_form.is_valid(),
                dataset_form.is_valid(),
            ]
        ):

            def resolve_related(form, kind, fields):
                payload = {
                    f: form.cleaned_data[f] for f in fields if form.cleaned_data.get(f)
                }
                r = requests.post(f"{API_URL}/{kind}s/", json=payload)
                return r.json()["id"] if r.ok else None

            sub_id = sub_form.cleaned_data.get("use_existing")
            if not sub_id:
                sub_id = resolve_related(
                    sub_form, "subdiscipline", ["name", "description"]
                )

            res_id = res_form.cleaned_data.get("use_existing")
            if not res_id:
                res_id = resolve_related(
                    res_form,
                    "researcher",
                    ["fname", "lname", "education", "phone", "email"],
                )

            codebook_id = None
            if codebook_form.cleaned_data.get("file"):
                codebook_id = upload_file_to_api(
                    "codebooks", codebook_form.cleaned_data["file"]
                )

            dataset_id = None
            if dataset_form.cleaned_data.get("file"):
                dataset_id = upload_file_to_api(
                    "datasets", dataset_form.cleaned_data["file"]
                )

            payload = {
                **entry_form.cleaned_data,
                "subdiscipline_id": sub_id,
                "researcher_id": res_id,
                "codebook_id": codebook_id,
                "dataset_id": dataset_id,
            }

            post_res = requests.post(f"{API_URL}/entries/", json=payload)
            if post_res.ok:
                return redirect("entry-list")

        context = {
            "entry_form": entry_form,
            "sub_form": sub_form,
            "res_form": res_form,
            "codebook_form": codebook_form,
            "dataset_form": dataset_form,
        }
        return render(request, self.template_name, context)
