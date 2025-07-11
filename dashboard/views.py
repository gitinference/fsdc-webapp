import logging

import requests
from django.conf import settings
from django.contrib.auth.mixins import UserPassesTestMixin
from django.contrib.auth.views import LoginView
from django.core.files.uploadedfile import UploadedFile
from django.shortcuts import redirect, render
from django.views import View
from django.views.generic import TemplateView

from django.views.decorators.clickjacking import xframe_options_exempt

from .forms import (
    CodebookForm,
    DatasetForm,
    ResearchEntryForm,
    ResearcherForm,
    SubdisciplineForm,
)

# Logging setup
logger = logging.getLogger("default")
FORMAT = "[%(filename)s:%(lineno)s - %(funcName)20s() ] %(message)s"
logging.basicConfig(format=FORMAT)
logger.setLevel(logging.DEBUG)

API_URL = settings.API_URL


def fetch_from_api(endpoint) -> dict:
    """
    Fetch data from the API endpoint and return the JSON response.
    Logs errors if the request fails.
    Args:
        endpoint (str): The API endpoint to fetch data from.
    Returns:
        dict: The JSON response from the API, or an empty dict if the request fails.
    """
    res = requests.get(f"{API_URL}/{endpoint}/")
    if not res.ok:
        logger.error(
            f"Failed to fetch {endpoint} from {API_URL}: {res.status_code} {res.text}"
        )
        return {}

    return res.json()


def upload_file_to_api(endpoint, uploaded_file: UploadedFile):
    """
    Upload a file to the API endpoint.
    Args:
        endpoint (str): The API endpoint to upload the file to.
        uploaded_file (UploadedFile): The file to upload.
    Returns:
        dict: The JSON response from the API, or raises ValueError if the upload fails.
    """

    # Have to use a tuple for the file upload
    # HTTP requires a tuple of (filename, fileobj, content_type)
    file_tuple = (
        uploaded_file.name,
        uploaded_file.file,
        uploaded_file.content_type or "application/octet-stream",
    )
    files = {"file": file_tuple}

    res = requests.post(f"{API_URL}/{endpoint}/", files=files)

    if not res.ok:
        raise ValueError(f"File upload failed: {res.status_code} {res.text}")

    return res.json()


class CustomLoginView(LoginView):
    template_name = "dashboard/login.html"


class HomeView(TemplateView):
    template_name = "dashboard/home.html"


class ApprovalTeamRequiredMixin(UserPassesTestMixin):
    """
    Mixin to ensure that only users with the approval team role can access
    views that require approval permissions.
    This is a placeholder for role-based access control.
    """

    # TODO: Add roles or permissions check here
    def test_func(self):
        return self.request.user.is_staff or self.request.user.username == "test_user"


class ApproveEntryView(ApprovalTeamRequiredMixin, View):
    """View to handle the approval of research entries.
    This view fetches unapproved research entries from the API and allows
    the approval team to review and approve them.
    """

    template_name = "dashboard/approval_panel.html"

    def get(self, request):
        logger.info(f"Fetching unapproved research entries from {API_URL}")
        res = requests.get(f"{API_URL}/research-entries/?approved=false")

        unapproved = res.json() if res.ok else []
        if not unapproved:
            logger.error("Failed to fetch unapproved entries from API")

        context = {"unapproved_entries": unapproved, "API_URL": API_URL}
        return render(request, self.template_name, context)


class ListEntriesView(View):
    """View to list all approved research entries.
    This view fetches all approved research entries from the API and displays them.
    It is accessible to all users, including those without approval permissions.
    """

    template_name = "dashboard/entry_list.html"

    def get(self, request):
        res = requests.get(f"{API_URL}/research-entries/?approved=true")

        entries = res.json() if res.ok else []
        if not res.ok:
            logger.error(
                "Failed to fetch research entries from API",
                exc_info=True,
            )

        if not entries:
            logger.warning("No approved research entries found.")

        context = {
            "records": entries,
            "API_URL": API_URL,
        }
        return render(request, self.template_name, context)


class NoNavBarListEntriesView(ListEntriesView):
    """View to list all approved research entries without a navigation bar.
    This view is similar to ListEntriesView but does not include the navigation bar.
    It is useful for embedding in other pages where a full dashboard is not needed.
    """

    template_name = "dashboard/entry_list_no_nav.html"

    @xframe_options_exempt
    def get(self, request):
        """
        Overrides the get method to allow this view to be embedded in an iframe.
        This is useful for embedding the entry list in other pages without a full dashboard.
        """
        return super().get(request)


class AddEntryView(ApprovalTeamRequiredMixin, View):
    """View to add a new research entry.
    This view allows users to create a new research entry by filling out
    a form that includes subdiscipline, researcher, codebook, and dataset
    information. It fetches existing subdisciplines and researchers from the API
    to allow users to select from existing entries or create new ones.
    If the form is valid, it sends the data to the API to create a new research entry.
    """

    template_name = "dashboard/add_entry.html"

    def get(self, request):
        sub_form = SubdisciplineForm()
        res_form = ResearcherForm()

        # Fetch existing subdisciplines and researchers from the API
        logger.info(f"Fetching existing subdisciplines and researchers from {API_URL}")

        existing_subs = fetch_from_api("subdisciplines")
        existing_researchers = fetch_from_api("researchers")

        if not existing_subs:
            logger.warning("No existing subdisciplines found.")
        if not existing_researchers:
            logger.warning("No existing researchers found.")

        # Set choices for existing subdisciplines and researchers
        sub_form.fields["use_existing_subdiscipline"].choices = [
            ("", "-- Add New --")
        ] + [(sub["id"], sub["name"]) for sub in existing_subs]
        res_form.fields["use_existing_researcher"].choices = [("", "-- Add New --")] + [
            (res["id"], f"{res['fname']} {res['lname']}")
            for res in existing_researchers
        ]

        context = {
            "entry_form": ResearchEntryForm(),
            "sub_form": sub_form,
            "res_form": res_form,
            "codebook_form": CodebookForm(),
            "dataset_form": DatasetForm(),
            "API_URL": API_URL,
        }
        return render(request, self.template_name, context)

    def post(self, request):
        # Reassign choices to prevent validation errors
        existing_subs = fetch_from_api("subdisciplines")
        existing_researchers = fetch_from_api("researchers")

        if not existing_subs:
            logger.warning("No existing subdisciplines found.")
        if not existing_researchers:
            logger.warning("No existing researchers found.")

        # Reassign choices for existing subdisciplines and researchers
        sub_choices = [("", "-- Add New --")] + [
            (sub["id"], sub["name"]) for sub in existing_subs
        ]
        res_choices = [("", "-- Add New --")] + [
            (res["id"], f"{res['fname']} {res['lname']}")
            for res in existing_researchers
        ]

        sub_form = SubdisciplineForm(request.POST)
        res_form = ResearcherForm(request.POST)
        entry_form = ResearchEntryForm(request.POST)
        codebook_form = CodebookForm(request.POST, request.FILES)
        dataset_form = DatasetForm(request.POST, request.FILES)

        sub_form.fields["use_existing_subdiscipline"].choices = sub_choices
        res_form.fields["use_existing_researcher"].choices = res_choices

        if all(
            [
                entry_form.is_valid(),
                sub_form.is_valid(),
                res_form.is_valid(),
                codebook_form.is_valid(),
                dataset_form.is_valid(),
            ]
        ):
            # Resolves related subdiscipline and researcher
            # by checking if an existing one is selected or creating a new one
            # using the API
            def resolve_related(form, kind, fields):
                payload = {
                    f: form.cleaned_data[f] for f in fields if form.cleaned_data.get(f)
                }
                r = requests.post(f"{API_URL}/{kind}s/", json=payload)
                return r.json()["id"] if r.ok else None

            sub_id = sub_form.cleaned_data.get("use_existing_subdiscipline")
            if not sub_id:
                # If no existing subdiscipline is selected, create a new one
                # Note: The API expects 'name' and 'description' fields
                # 'sub_description' is used in the form to avoid conflicts with Django's field name
                # and to match the API's expected field name

                sub_form.cleaned_data["description"] = sub_form.cleaned_data.pop(
                    "sub_description", ""
                )
                sub_id = resolve_related(
                    sub_form, "subdiscipline", ["name", "description"]
                )

            res_id = res_form.cleaned_data.get("use_existing_researcher")
            if not res_id:
                # If no existing researcher is selected, create a new one
                # Note: The API expects 'fname', 'lname', 'education', 'phone', and 'email'

                res_id = resolve_related(
                    res_form,
                    "researcher",
                    ["fname", "lname", "education", "phone", "email"],
                )

            # Handle file uploads for codebook and dataset
            codebook_id = None
            if codebook_form.cleaned_data.get("file"):
                codebook_id = upload_file_to_api(
                    "codebooks", codebook_form.cleaned_data["file"]
                )["id"]

            dataset_id = None
            if dataset_form.cleaned_data.get("file"):
                dataset_id = upload_file_to_api(
                    "datasets", dataset_form.cleaned_data["file"]
                )["id"]

            payload = {
                **entry_form.cleaned_data,  # Python magic to unpack the form data
                "subdiscipline_id": sub_id,
                "researcher_id": res_id,
                "codebook_id": codebook_id,
                "dataset_id": dataset_id,
            }

            # Rename description field to match API expectations
            payload["description"] = payload.pop("res_entry_description", "")

            # Serialize dates manually, as Django's DateField does not serialize to string by default
            payload["date_started"] = str(payload["date_started"])
            payload["date_ended"] = str(payload["date_ended"])

            post_res = requests.post(f"{API_URL}/research-entries/", json=payload)
            if post_res.ok:
                logger.info("Research entry created successfully.")
                return redirect("dashboard:entry-list")
            else:
                logger.error(
                    f"Failed to create research entry: {post_res.status_code} {post_res.text}"
                )
                entry_form.add_error(
                    None, f"Failed to create research entry: {post_res.text}"
                )

        context = {
            "entry_form": entry_form,
            "sub_form": sub_form,
            "res_form": res_form,
            "codebook_form": codebook_form,
            "dataset_form": dataset_form,
            "form_errors": {
                "entry": entry_form.errors,
                "sub": sub_form.errors,
                "res": res_form.errors,
                "codebook": codebook_form.errors,
                "dataset": dataset_form.errors,
            },
            "API_URL": API_URL,
        }

        return render(request, self.template_name, context)
