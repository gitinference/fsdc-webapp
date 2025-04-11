from django.shortcuts import render, redirect
from .forms import (
    Part1Consentimiento,
    Part2Consentimiento,
    Part3Consentimiento,
    Part4Consentimiento,
)
from .forms import EscalaPart1Form, EscalaPart2Form, EscalaPart3Form, EscalaPart4Form
from .models import SurveySubmission
from formtools.wizard.views import SessionWizardView



escala_forms = [
    ("escala1", EscalaPart1Form),
    ("escala2", EscalaPart2Form),
    ("escala3", EscalaPart3Form),
    ("escala4", EscalaPart4Form),
]


consentimiento_forms = [
    ("consentimiento1", Part1Consentimiento),
    ("consentimiento2", Part2Consentimiento),
    ("consentimiento3", Part3Consentimiento),
    ("consentimiento4", Part4Consentimiento),
]

class ConsentimientoWizard(SessionWizardView):
    template_name = "forms/wizard_step.html"  # we'll create this next
    def done(self, form_list, **kwargs):
        final_data = {}
        for form in form_list:
            final_data.update(form.cleaned_data)
        SurveySubmission.objects.create(data=final_data)
        return redirect("gracias")  # this should already exist

class EscalaWizard(SessionWizardView):
    template_name = 'forms/wizard_step.html'

    def done(self, form_list, **kwargs):
        final_data = {}
        for form in form_list:
            final_data.update(form.cleaned_data)
        SurveySubmission.objects.create(data=final_data)
        return redirect('gracias')

def part1_view(request):
    if request.method == "POST":
        form = Part1Consentimiento(request.POST)
        if form.is_valid():
            request.session["part1"] = form.cleaned_data
            return redirect("parte2")
    else:
        form = Part1Consentimiento()
    return render(request, "forms/part1.html", {"form": form})


def part2_view(request):
    if request.method == "POST":
        form = Part2Consentimiento(request.POST)
        if form.is_valid():
            request.session["part2"] = form.cleaned_data
            return redirect("parte3")
    else:
        form = Part2Consentimiento()
    return render(request, "forms/part2.html", {"form": form})


def part3_view(request):
    if request.method == "POST":
        form = Part3Consentimiento(request.POST)
        if form.is_valid():
            request.session["part3"] = form.cleaned_data
            return redirect("parte4")
    else:
        form = Part3Consentimiento()
    return render(request, "forms/part3.html", {"form": form})


def part4_view(request):
    if request.method == "POST":
        form = Part4Consentimiento(request.POST)
        if form.is_valid():
            request.session["part4"] = form.cleaned_data
            # Aquí podrías guardar todas las respuestas combinadas
            full_data = {
                **request.session.get("part1", {}),
                **request.session.get("part2", {}),
                **request.session.get("part3", {}),
                **form.cleaned_data,
            }
            request.session["final_data"] = full_data
            return redirect("gracias")
    else:
        form = Part4Consentimiento()
    return render(request, "forms/part4.html", {"form": form})


def gracias_view(request):
    return render(request, "forms/gracias.html")


def escala_part1_view(request):
    if request.method == "POST":
        form = EscalaPart1Form(request.POST)
        if form.is_valid():
            request.session["escala_part1"] = form.cleaned_data
            return redirect("escala_part2")
    else:
        form = EscalaPart1Form()
    return render(request, "forms/escala_part1.html", {"form": form})


def escala_part2_view(request):
    if request.method == "POST":
        form = EscalaPart2Form(request.POST)
        print("Form submitted.")  # ✅ Check if POST is happening

        if form.is_valid():
            print("Form is valid.")  # ✅ Confirm validation
            request.session["parte2"] = form.cleaned_data
            has_kids = form.cleaned_data.get("a10")
            print("User selected:", has_kids)

            if has_kids == "SI":
                return redirect("escala_part3")
            else:
                return redirect("escala_part4")
        else:
            print("Form is NOT valid.")
            print(form.errors)  # 🔥 Print the actual validation errors

    else:
        form = EscalaPart2Form()

    return render(request, "forms/escala_part2.html", {"form": form})


def escala_part3_view(request):
    if request.method == "POST":
        form = EscalaPart3Form(request.POST)
        if form.is_valid():
            request.session["escala_part3"] = form.cleaned_data
            return redirect("escala_part4")
    else:
        form = EscalaPart3Form()
    return render(request, "forms/escala_part3.html", {"form": form})


def escala_part4_view(request):
    if request.method == "POST":
        form = EscalaPart4Form(request.POST)
        if form.is_valid():
            request.session["pr_part4"] = form.cleaned_data
            final_data = {
                **request.session.get("pr_part1", {}),
                **request.session.get("pr_part2", {}),
                **request.session.get("pr_part3", {}),
                **request.session.get("pr_part4", {}),
            }
            SurveySubmission.objects.create(data=final_data)
            return redirect("gracias")
    else:
        form = EscalaPart4Form()
    return render(request, "forms/escala_part4.html", {"form": form})
