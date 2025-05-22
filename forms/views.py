from pathlib import Path
from django.shortcuts import redirect, render
from django.http import HttpResponseRedirect
from formtools.wizard.views import SessionWizardView
from .form_builder import load_definition
from .models import AnswerRecord
import uuid

BASE_DIR = Path(__file__).resolve().parent
consentimiento_spec, consentimiento_forms = load_definition(
    BASE_DIR / "definitions" / "consentimiento.json"
)
escala_spec, escala_forms = load_definition(
    BASE_DIR / "definitions" / "escala.json"
)

# ----------  BASE WIZARD  ----------
class BaseSurveyWizard(SessionWizardView):
    template_name = "forms/wizard_step.html"
    survey_spec   = None         
    form_list_cfg = None

    def get_form_list(self):
        return dict(self.form_list_cfg)
    
    def get_context_data(self, form, **kwargs):
        ctx = super().get_context_data(form=form, **kwargs)
        part = self.survey_spec["parts_by_step"][self.steps.current]
        ctx["part_title"] = part["title"]
        ctx["part_intro"] = part.get("intro", "")   # new line
        return ctx

    # Guarda todo al final
    def done(self, form_list, **kwargs):
        sid = str(uuid.uuid4())
        for frm in form_list:
            for qid, ans in frm.cleaned_data.items():
                AnswerRecord.objects.create(
                    survey_type = self.survey_spec["wizard_name"],
                    session_id  = sid,
                    question_id = qid,
                    answer      = str(ans),
                )
        return redirect("gracias")
# ----------  CONSENTIMIENTO ----------
class ConsentimientoWizard(BaseSurveyWizard):
    survey_spec   = consentimiento_spec
    form_list_cfg = consentimiento_forms

# ----------  ESCALA ----------
class EscalaWizard(BaseSurveyWizard):
    survey_spec   = escala_spec
    form_list_cfg = escala_forms

    def post(self, request, *args, **kwargs):
        #Si estamos en escala2 y marcaron NO: cerrar
        if self.steps.current == "escala2":
            form = self.get_form(data=request.POST, files=request.FILES)
            if form.is_valid() and form.cleaned_data.get("a10") == "NO":
                #guarda el step en el storage, igual que el wizard normal
                self.storage.set_step_data("escala2", self.process_step(form))
                self.storage.set_step_files("escala2", self.process_step_files(form))

                # recoge TODAS las respuestas
                answers = self.get_all_cleaned_data()  # dict {campo: valor}

                # guárdalas
                sid = str(uuid.uuid4())
                for qid, ans in answers.items():
                    AnswerRecord.objects.create(
                        survey_type = self.survey_spec["wizard_name"],
                        session_id  = sid,
                        question_id = qid,
                        answer      = str(ans),
                    )

                # redirige al “gracias”
                return redirect("gracias")

        # (A10 == “SI” o cualquier otro paso)
        return super().post(request, *args, **kwargs)

# ----------  PÁGINA DE GRACIAS ----------
def gracias_view(request):
    return render(request, "forms/gracias.html")
