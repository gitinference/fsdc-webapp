from django.urls import path
from .views import (
    gracias_view
)
from .views import (
    escala_part1_view, escala_part2_view, escala_part3_view, escala_part4_view
)
from .views import EscalaWizard, escala_forms

from .views import ConsentimientoWizard, consentimiento_forms


urlpatterns = [
    path('consentimiento/', ConsentimientoWizard.as_view(consentimiento_forms), name='consentimiento_wizard'),
    path('gracias/', gracias_view, name='gracias'),
    path('escala/', EscalaWizard.as_view(escala_forms), name='escala_wizard'),

]
