from django import forms

FREQUENCY_CHOICES = [
    ("muchas_veces", "Muchas veces"),
    ("algunas_veces", "Algunas veces"),
    ("nunca", "Nunca"),
]


class Part1Consentimiento(forms.Form):
    p1_q1 = forms.ChoiceField(
        label="La comida que compro simplemente no me da y no tengo dinero adicional para comprar más alimentos.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_q2 = forms.ChoiceField(
        label="No tengo el dinero suficiente para que la mayor parte de mis comidas sean unas saludables y balanceadas.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_q3 = forms.ChoiceField(
        label="Me preocupa que se me acabe la comida antes de volver a tener dinero para comprar más.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_q4 = forms.ChoiceField(
        label="¿Ha tenido que reducir la cantidad de alimentos que consume o saltar comidas por que el dinero no le es suficiente?",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_q5 = forms.ChoiceField(
        label="¿Alguna vez no comió durante un día entero porque no tenía suficiente dinero para comida?",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_q6 = forms.ChoiceField(
        label="¿Comiste menos de lo que sientes que deberías porque no tenías suficiente dinero para comida?",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_q7 = forms.ChoiceField(
        label="¿Hubo ocasiones en las cuales tenías hambre, pero no comiste porque no tenías suficiente dinero para comida?",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_child_a = forms.ChoiceField(
        label="En mi familia, la comida que compraban simplemente no daba y no tenían dinero adicional para comprar más alimentos.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_child_b = forms.ChoiceField(
        label="En mi familia, no tenían el dinero suficiente para que la mayor parte de las comidas fuesen unas saludables y balanceadas.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p1_child_c = forms.ChoiceField(
        label="En mi familia, siempre nos preocupaba que la comida se acabara antes de que tuviéramos dinero adicional para comprar más.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )


class Part2Consentimiento(forms.Form):
    p2_hospedaje = forms.ChoiceField(
        label="Gastó dinero en gastos de hospedaje en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_universitarios = forms.ChoiceField(
        label="Gastó dinero en gastos universitarios en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_alcohol = forms.ChoiceField(
        label="Compró alcohol en lugar de usar dinero para comprar comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_drogas = forms.ChoiceField(
        label="Compró drogas recreativas en lugar de usar dinero para comprar comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_reparaciones_auto = forms.ChoiceField(
        label="Gastó dinero en reparaciones de automóviles en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_gasolina = forms.ChoiceField(
        label="Gastó dinero en gasolina en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_transporte_publico = forms.ChoiceField(
        label="Gastó dinero en transporte público en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_cuidado_mascotas = forms.ChoiceField(
        label="Gastó dinero en el cuidado de mascotas en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p2_tatuajes = forms.ChoiceField(
        label="Gastó dinero en tatuajes en lugar de usar dinero para comprar comida.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )


FREQUENCY_CHOICES = [
    ("muchas_veces", "Muchas veces"),
    ("algunas_veces", "Algunas veces"),
    ("nunca", "Nunca"),
]


class Part3Consentimiento(forms.Form):
    p3_1 = forms.ChoiceField(
        label="Vendí posesiones personales para obtener dinero para comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_2 = forms.ChoiceField(
        label="Tomé menos clases para ahorrar dinero en matrícula y poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_3 = forms.ChoiceField(
        label="Comparto el alquiler con otras personas para economizar y poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_4 = forms.ChoiceField(
        label="Tengo uno o más trabajos de medio tiempo o tiempo completo para poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_5 = forms.ChoiceField(
        label="Usó una tarjeta de crédito para comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_6 = forms.ChoiceField(
        label="Participé en un estudio de investigación o ensayo clínico para poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_7 = forms.ChoiceField(
        label="Tomé dinero prestado de familiares o amigos para poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_8 = forms.ChoiceField(
        label="Asistí a eventos en el campus o en la comunidad donde había comida gratis",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_9 = forms.ChoiceField(
        label="Obtuve comida de un banco de alimentos o despensa de alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_10 = forms.ChoiceField(
        label="Intercambié servicios o artículos para obtener comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_11 = forms.ChoiceField(
        label="Participo de algún programa federal o estatal de asistencia alimentaria (por ejemplo, cupones, WIC, etc.)",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_12 = forms.ChoiceField(
        label="No compré medicamentos para ahorrar dinero y poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_13 = forms.ChoiceField(
        label="No asistí a citas médicas para ahorrar dinero y poder comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_14 = forms.ChoiceField(
        label="Comparto comestibles y/o comidas con compañeros de hospedaje",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_15 = forms.ChoiceField(
        label="Obtuve comida de un basurero o de la basura",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_16 = forms.ChoiceField(
        label="Comí más de lo normal cuando había abundancia de comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_17 = forms.ChoiceField(
        label="Me uní a una iglesia u otro grupo organizacional donde proporcionan comidas gratis",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_18 = forms.ChoiceField(
        label="Comí comidas menos saludables para poder comer más cantidad",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_19 = forms.ChoiceField(
        label="Compro comida barata y procesada (por ejemplo, fideos ramen, pizza congelada, dulces, etc.) porque no tengo dinero suficiente",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_20 = forms.ChoiceField(
        label="Visito a mi familia en fines de semana para llevarme comida de regreso al hospedaje",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_21 = forms.ChoiceField(
        label="Tuve que recurrir a robar alimentos en supermercados o tiendas de conveniencia para poder comer.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_22 = forms.ChoiceField(
        label="Tuve que recurrir a robar alimentos de mi lugar de trabajo para poder comer",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_23 = forms.ChoiceField(
        label="Tuve que escoger entre utilizar mi dinero para comprar comida o pagar gastos de hospedaje.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_24 = forms.ChoiceField(
        label="Tuve que escoger entre utilizar mi dinero para comprar comida o pagar gastos universitarios.",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_25 = forms.ChoiceField(
        label="No visité a mi familia para tener dinero para comprar comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_26 = forms.ChoiceField(
        label="No participé de actividades recreativas para economizar dinero para la compra de comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    p3_27 = forms.ChoiceField(
        label="No participé de actividades deportivas para economizar dinero para la compra de comida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )


class Part4Consentimiento(forms.Form):
    FREQUENCY_CHOICES = [
        ("muchas_veces", "Muchas veces"),
        ("algunas_veces", "Algunas veces"),
        ("nunca", "Nunca"),
    ]

    cafeteria_universidad = forms.ChoiceField(
        label="Cafetería de la universidad",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    restaurantes_foodtrucks = forms.ChoiceField(
        label="Otros restaurantes de comida en la universidad tales como “foodtrucks”",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    comida_rapida = forms.ChoiceField(
        label="Restaurantes de comida rápida",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    restaurantes = forms.ChoiceField(
        label="Restaurantes", choices=FREQUENCY_CHOICES, widget=forms.RadioSelect
    )
    asistencia_universidad = forms.ChoiceField(
        label="Programa de asistencia de alimentos en la universidad",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    asistencia_municipio = forms.ChoiceField(
        label="Programa de asistencia de alimentos del municipio",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    asistencia_privadas = forms.ChoiceField(
        label="Programa de asistencia de alimentos de entidades privadas",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    supermercados = forms.ChoiceField(
        label="Supermercados", choices=FREQUENCY_CHOICES, widget=forms.RadioSelect
    )
    megatiendas = forms.ChoiceField(
        label="Megatiendas (Walmart, Sam’s Club, Costco)",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    tiendas_conveniencia = forms.ChoiceField(
        label="Tiendas de conveniencia",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    plaza_mercado = forms.ChoiceField(
        label="Plaza del Mercado", choices=FREQUENCY_CHOICES, widget=forms.RadioSelect
    )
    casa_padres = forms.ChoiceField(
        label="Casa de los padres o familiares",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    casa_amistades = forms.ChoiceField(
        label="Casa de amistades", choices=FREQUENCY_CHOICES, widget=forms.RadioSelect
    )
    eventos_gratuitos = forms.ChoiceField(
        label="Eventos donde ofrezcan comida gratuita",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    falta_tiempo_comprar = forms.ChoiceField(
        label="Falta de tiempo para comprar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    falta_tiempo_preparar = forms.ChoiceField(
        label="Falta de tiempo para preparar alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    falta_facilidades_cocina = forms.ChoiceField(
        label="Falta de facilidades (cocina) para cocinar sus alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    falta_metodos_transportacion = forms.ChoiceField(
        label="Falta de métodos de transportación",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    falta_dinero_gas = forms.ChoiceField(
        label="Falta de dinero para comprar gas propano",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    costos_alimentos = forms.ChoiceField(
        label="Costos de los alimentos",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    localizacion_sucursales = forms.ChoiceField(
        label="Localización de sucursales de comida en la universidad",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    horario_sucursales = forms.ChoiceField(
        label="Horas de operación de sucursales de comida en la universidad",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    localizacion_supermercados = forms.ChoiceField(
        label="Localización de supermercados, tiendas de conveniencia o megatiendas",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    horario_supermercados = forms.ChoiceField(
        label="Horas de operación de supermercados, tiendas de conveniencia o megatiendas",
        choices=FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )


PR_FREQUENCY_CHOICES = [
    ("ocurrio_frecuencia", "Ocurrió con frecuencia (muchas veces)"),
    ("ocurrio_veces", "Ocurrió a veces"),
    ("nunca_ocurrio", "Nunca ocurrió"),
    ("no_recuerdo", "No recuerdo"),
    ("no_contestar", "Prefiero no contestar"),
]

YES_NO_NORECUERDO_CHOICES = [
    ("si", "Sí"),
    ("no", "No"),
    ("no_recuerdo", "No recuerdo"),
]


# Part 1: A1, A2, A3
class EscalaPart1Form(forms.Form):
    a1 = forms.ChoiceField(
        label="A1. En algún momento durante los pasados 3 meses, ¿Le preocupó que se acabara la compra y no poder ir a comprar más alimentos, por falta de dinero?",
        choices=PR_FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    a2 = forms.ChoiceField(
        label="A2. En algún momento durante los pasados 3 meses, ¿Se acabó la compra antes del mes y no pudo comprar más alimentos por falta de dinero?",
        choices=PR_FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )
    a3 = forms.ChoiceField(
        label="A3. En algún momento durante los pasados 3 meses, ¿No pudo comer saludablemente/nutritivamente por falta de dinero?",
        choices=PR_FREQUENCY_CHOICES,
        widget=forms.RadioSelect,
    )


# Part 2: A4 - A10
class EscalaPart2Form(forms.Form):
    A10_CHOICES = [
        ("SI", "SI (Pase a Parte 3)"),
        ("NO", "NO (Pase a la Parte 4)"),
    ]

    a4 = forms.ChoiceField(
        label="A4. ¿En algún momento durante los pasados 3 meses, usted o algún otro adulto en la casa, se sirvió menos cantidad de alimentos de lo que debía comer, por falta de dinero para comprar más?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    a5 = forms.ChoiceField(
        label="A5. ¿En algún momento durante los pasados 3 meses, Usted o algún otro adulto en la casa, no pudo hacer o comer alguna de las comidas principales del día (desayuno, almuerzo o cena) por falta de dinero?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    a6 = forms.ChoiceField(
        label="A6. ¿En algún momento durante los pasados 3 meses, usted o algún otro adulto en la casa, tuvo hambre pero no comió por falta de dinero para comprar alimentos/comida?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    a7 = forms.ChoiceField(
        label="A7. ¿En algún momento durante los pasados 3 meses, usted o algún otro adulto en la casa, bajó de peso por falta de dinero para comprar alimentos/comida?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    a8 = forms.ChoiceField(
        label="A8. ¿En algún momento durante los pasados 3 meses, usted o algún otro adulto en la casa, no comió durante todo un día por falta de dinero para comprar alimentos/comida?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    a9 = forms.ChoiceField(
        label="A9. ¿En algún momento durante los pasados 3 meses, usted o algún otro adulto en la casa, tuvo que ir a comer a casa de algún familiar por falta de dinero para comprar alimentos/comida?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    a10 = forms.ChoiceField(
        label="A10. ¿En su hogar viven niños o jóvenes menores de 18 años?",
        choices=A10_CHOICES,
        widget=forms.RadioSelect,
        required=True,
    )


# Part 3: N1 - N7
class EscalaPart3Form(forms.Form):
    # Some have the same 5-choice set as Part 1
    PR_FREQUENCY_5_CHOICES = [
        ("ocurrio_frecuencia", "Ocurrió con frecuencia (muchas veces)"),
        ("ocurrio_veces", "Ocurrió a veces"),
        ("nunca_ocurrio", "Nunca ocurrió"),
        ("no_recuerdo", "No recuerdo"),
        ("no_contestar", "Prefiero no contestar"),
    ]

    n1 = forms.ChoiceField(
        label="N1. ¿En algún momento durante los pasados 3 meses, tuvo que darle a sus hijos un menú poco variado (el mismo tipo de comida) por falta de dinero?",
        choices=PR_FREQUENCY_5_CHOICES,
        widget=forms.RadioSelect,
    )
    n2 = forms.ChoiceField(
        label="N2. ¿En algún momento durante los pasados 3 meses, tuvo que prepararle a sus hijos comidas no balanceadas/no nutritivas por falta de dinero?",
        choices=PR_FREQUENCY_5_CHOICES,
        widget=forms.RadioSelect,
    )
    n3 = forms.ChoiceField(
        label="N3. ¿En algún momento durante los pasados 3 meses, tuvo que servirle menos cantidad de comida a sus hijos porque no había suficiente comida en la casa y no había dinero para comprar más alimentos/comida?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    n4 = forms.ChoiceField(
        label="N4. ¿En algún momento durante los pasados 3 meses, no le pudo dar alguna de las comidas principales del día (desayuno, almuerzo o cena) a sus hijos por falta de dinero?",
        choices=[
            ("si", "Si (Pase a la pregunta N4a)"),
            ("no", "No"),
            ("no_recuerdo", "No recuerdo"),
        ],
        widget=forms.RadioSelect,
    )
    n5 = forms.ChoiceField(
        label="N5. ¿En algún momento durante los pasados 3 meses, tuvo que llevar a sus hijos a comer a casa de algún familiar por falta de dinero para comprar alimentos/comidas?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    n6 = forms.ChoiceField(
        label="N6. ¿En algún momento durante los pasados 3 meses, sus hijos tuvieron hambre y no tenía dinero para comprar algo de comer?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )
    n7 = forms.ChoiceField(
        label="N7. ¿En algún momento durante los pasados 3 meses, sus hijos no comieron por todo un día porque no hubo dinero para comprar alimentos/comida?",
        choices=YES_NO_NORECUERDO_CHOICES,
        widget=forms.RadioSelect,
    )


# Part 4: The document only says "Fin del Cuestionario." We'll keep a simple form:
class EscalaPart4Form(forms.Form):
    fin = forms.CharField(
        label="Fin del Cuestionario", required=False, widget=forms.HiddenInput
    )
