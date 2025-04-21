from pathlib import Path
from django.shortcuts import redirect, render
from formtools.wizard.views import SessionWizardView
from .form_builder import load_definition
from .models import SurveySubmission

BASE_DIR = Path(__file__).resolve().parent

consentimiento_spec, consentimiento_forms = load_definition(
    BASE_DIR / "definitions" / "consentimiento.json"
)
escala_spec, escala_forms = load_definition(
    BASE_DIR / "definitions" / "escala.json"
)

class BaseSurveyWizard(SessionWizardView):
    template_name = "forms/wizard_step.html"
    survey_spec = None         # se asigna en la subclase
    form_list_cfg = None

    def get_form_list(self):
        return dict(self.form_list_cfg)

    def get_context_data(self, form, **kwargs):
        ctx = super().get_context_data(form=form, **kwargs)
        part = self.survey_spec["parts_by_step"][self.steps.current]
        ctx["part_title"] = part["title"]
        return ctx

    def get_next_step(self):
        current_step = self.steps.current
        cleaned_data = self.get_cleaned_data_for_step(current_step)

        part = self.survey_spec["parts_by_step"].get(current_step, {})
        for rule in part.get("routing", []):
            actual_value = str(cleaned_data.get(rule["trigger"], "")).strip().upper()
            expected_value = str(rule["value"]).strip().upper()
            if actual_value == expected_value:
                return rule["next"]

        return super().get_next_step()



    def done(self, form_list, **kwargs):
        data = {}
        for frm in form_list:
            data.update(frm.cleaned_data)
        SurveySubmission.objects.create(data=data)
        return redirect("gracias")

class ConsentimientoWizard(BaseSurveyWizard):
    survey_spec = consentimiento_spec
    form_list_cfg = consentimiento_forms

class EscalaWizard(BaseSurveyWizard):
    survey_spec = escala_spec
    form_list_cfg = escala_forms

def gracias_view(request):
    return render(request, "forms/gracias.html")
