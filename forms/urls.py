from django.urls import path
from .views import (
    part1_view, part2_view, part3_view, part4_view, gracias_view
)
from .views import (
    escala_part1_view, escala_part2_view, escala_part3_view, escala_part4_view
)

urlpatterns = [
    path('parte1/', part1_view, name='parte1'),
    path('parte2/', part2_view, name='parte2'),
    path('parte3/', part3_view, name='parte3'),
    path('parte4/', part4_view, name='parte4'),
    path('gracias/', gracias_view, name='gracias'),
    path('escala_part1/', escala_part1_view, name='escala_part1'),
    path('escala_part2/', escala_part2_view, name='escala_part2'),
    path('escala_part3/', escala_part3_view, name='escala_part3'),
    path('escala_part4/', escala_part4_view, name='escala_part4'),
]
