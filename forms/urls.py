from django.urls import path
from .views import ConsentimientoWizard, EscalaWizard, gracias_view
from .views import consentimiento_forms, escala_forms

urlpatterns = [
    path("consentimiento/", ConsentimientoWizard.as_view(consentimiento_forms), name="consentimiento_wizard"),
    path("escala/", EscalaWizard.as_view(escala_forms), name="escala_wizard"),
    path("gracias/", gracias_view, name="gracias"),
]
