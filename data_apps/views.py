from django.http import HttpResponse
import requests
from django.shortcuts import render
from django.views.decorators.clickjacking import xframe_options_exempt

from env import get_db_credentials

# Set up logger
import logging

logger = logging.getLogger(__name__)


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


creds = get_db_credentials()
# API_URL = creds[10]  # JP API URL
API_URL = "https://api.econlabs.net"


@xframe_options_exempt
def web_app_imports_exports(request):
    # IMPORTS GRAPH

    if request.method == "POST":
        frequency = request.POST.get("frequency")
        second_dropdown = request.POST.get("second_dropdown")
        third_dropdown = request.POST.get("third_dropdown")
        level_filter = request.POST.get("hts_codes")

        if frequency is None and second_dropdown is None:
            frequency = "yearly"
            second_dropdown = 2024
            level_filter = "0101"

        imports_graph = requests.get(
            f"{API_URL}/graph/import-export/?level=country&time_frame={frequency}&datetime={second_dropdown}&group=false&frequency={frequency}&second_dropdown={second_dropdown}&third_dropdown={third_dropdown}&type=imports&level_filter={level_filter}"
        )
    else:
        frequency = "yearly"
        second_dropdown = 2024
        third_dropdown = 1
        level_filter = "0101"
        imports_graph = requests.get(
            f"{API_URL}/graph/import-export/?level=country&time_frame={frequency}&group=false&frequency={frequency}&second_dropdown={second_dropdown}&datetime={second_dropdown}&type=imports"
        )

    imports, hts_codes = imports_graph.json()

    # Filter HTS codes up to 2299
    filtered_codes = [code for code in hts_codes["hts_codes"] if int(code) <= 2299]
    print("Filtered HTS Codes:", filtered_codes, "Count: ", len(filtered_codes))
    hts_codes["hts_codes"] = filtered_codes

    # ------------------------------------------------------------------------------------------------------------------------------------------------------------

    # EXPORTS GRAPH

    if request.method == "POST":
        frequency_2 = request.POST.get("frequency_2")
        second_dropdown_2 = request.POST.get("second_dropdown_2")
        third_dropdown_2 = request.POST.get("third_dropdown_2")
        level_filter_2 = request.POST.get("hts_codes_2")
        print(second_dropdown_2, third_dropdown_2)

        if frequency_2 is None and second_dropdown_2 is None:
            frequency_2 = "Yearly"
            second_dropdown_2 = 2024
            level_filter_2 = "0101"

        exports_graph = requests.get(
            f"{API_URL}/graph/import-export/?level=country&time_frame=yearly&datetime=2009&group=false&frequency={frequency_2}&second_dropdown={second_dropdown_2}&third_dropdown={third_dropdown_2}&type=exports&level_filter={level_filter_2}"
        )
    else:
        frequency_2 = "yearly"
        second_dropdown_2 = 2024
        third_dropdown_2 = 1
        level_filter_2 = "0101"
        exports_graph = requests.get(
            f"{API_URL}/graph/import-export/?level=country&time_frame={frequency_2}&group=false&frequency={frequency_2}&second_dropdown={second_dropdown_2}&datetime={second_dropdown_2}&type=exports"
        )

    exports, hts_codes_2 = exports_graph.json()

    # ------------------------------------------------------------------------------------------------------------------------------------------------------------

    context = {
        "imports": imports,
        "exports": exports,
        "api": API_URL,
        **hts_codes,
        "selected_frequency": frequency,
        "selected_second_dropdown": second_dropdown,
        "selected_third_dropdown": third_dropdown,
        "selected_level_filter": level_filter,
        "selected_frequency_2": frequency_2,
        "selected_second_dropdown_2": second_dropdown_2,
        "selected_third_dropdown_2": third_dropdown_2,
        "selected_level_filter_2": level_filter_2,
    }

    return render(request, "imports_exports.html", context)


@xframe_options_exempt
def web_app_consumer_indices(request):
    # Indices Consumidor
    # -----------------------------------------------------------------#
    if request.method == "POST":
        frequency = request.POST.get("frequency").lower()
        frequency_2 = request.POST.get("frequency_2").lower()
        frequency_3 = request.POST.get("frequency_3").lower()
        column = request.POST.get("columns")
        column_2 = request.POST.get("columns_2")
        column_3 = request.POST.get("columns_3")
    else:
        frequency = "yearly"
        frequency_2 = "yearly"
        frequency_3 = "yearly"
        column = "agua_alcantarillados_y_limpieza_de_pozos_septicos"
        column_2 = "agua_alcantarillados_y_limpieza_de_pozos_septicos"
        column_3 = "agua_alcantarillados_y_limpieza_de_pozos_septicos"

    # Fetch graph from the API
    response = requests.get(
        f"{API_URL}/graph/consumer/?time_frame={frequency}&data_type=indices_precio&column={column}"
    ).json()
    indice_consumidor_html, context = response

    response = requests.get(
        f"{API_URL}/graph/consumer/?time_frame={frequency_2}&data_type=cambio_porcentual&column={column_2}"
    ).json()
    cambio_porcentual_html, context = response

    response = requests.get(
        f"{API_URL}/graph/consumer/?time_frame={frequency_3}&data_type=primera_diferencia&column={column_3}"
    ).json()
    primera_diferencia_html, context = response

    # Keywords to identify agriculture-related items
    agriculture_keywords = [
        "carne",
        "frutas",
        "vegetales",
        "huevos",
        "lacteos",
        "pescados",
        "mariscos",
        "cereales",
        "azucares",
        "grasas",
        "aderezos",
        "jugos",
        "alimentos",
        "bebidas",
        "productos",
        "horneados",
    ]

    # Convert keywords to lowercase for case-insensitive matching
    agriculture_keywords = [kw.lower() for kw in agriculture_keywords]

    # Filter the list
    agriculture_related = [
        item
        for item in context["columns"]
        if any(kw in item["label"].lower() for kw in agriculture_keywords)
    ]

    context["columns"] = agriculture_related

    return render(
        request,
        "indice_consumidor.html",
        {
            "consumer": indice_consumidor_html,
            "api": API_URL,
            "cambio_porcentual": cambio_porcentual_html,
            "primera_diferencia": primera_diferencia_html,
            **context,
            "selected_frequency": frequency,
            "selected_frequency_2": frequency_2,
            "selected_frequency_3": frequency_3,
            "selected_column": column,
            "selected_column_2": column_2,
            "selected_column_3": column_3,
        },
    )


@xframe_options_exempt
def web_app_awards(request):
    # CATEGORY GRAPH
    if request.method == "POST":
        frequency = request.POST.get("frequency").lower()
        category = request.POST.get("categories")
        second_dropdown = request.POST.get("second_dropdown")
        third_dropdown = request.POST.get("third_dropdown")

        if frequency is None and second_dropdown is None:
            frequency = "yearly"
            second_dropdown = 2024

        if category is None:
            category = "awarding_agency_name"

        if frequency == "yearly" or frequency == "fiscal":
            year = second_dropdown
            period = 1
        else:
            year = third_dropdown
            period = second_dropdown

        category_graph, categories = requests.get(
            f"{API_URL}/graph/awards/category/?dropdown={year}&second_dropdown={period}&third_dropdown={category}&time_frame={frequency}"
        ).json()

    else:
        frequency = "yearly"
        second_dropdown = 2024
        third_dropdown = 1
        category = "awarding_agency_name"
        category_graph, categories = requests.get(
            f"{API_URL}/graph/awards/category/?dropdown={second_dropdown}&second_dropdown={third_dropdown}&third_dropdown={category}&time_frame={frequency}"
        ).json()

    # SECTER GRAPH
    if request.method == "POST":
        frequency_2 = request.POST.get("frequency_2").lower()
        dropdown_2 = request.POST.get("agencies")

        if frequency_2 is None and dropdown_2 is None:
            frequency_2 = "yearly"
            dropdown_2 = "total"

        temp_dropdown_2 = dropdown_2.lower().replace(" ", "_")

        secter_graph, agencies = requests.get(
            f"{API_URL}/graph/awards/secter/?dropdown={temp_dropdown_2}&time_frame={frequency_2}"
        ).json()
    else:
        frequency_2 = "yearly"
        dropdown_2 = "total"
        secter_graph, agencies = requests.get(
            f"{API_URL}/graph/awards/secter/?dropdown={dropdown_2}&time_frame={frequency_2}"
        ).json()

    secter_graph = f"<div style='overflow-x: auto; white-space: nowrap; width: 100%; padding-bottom: 20px;'>{secter_graph}</div>"

    # Validate required columns
    return render(
        request,
        "awards.html",
        {
            "sectergraph": secter_graph,
            "categorygraph": category_graph,
            **agencies,
            **categories,
            "api": API_URL,
            "selected_frequency": frequency,
            "selected_second_dropdown": second_dropdown,
            "selected_third_dropdown": third_dropdown,
            "selected_category": category,
            "selected_frequency_2": frequency_2,
            "selected_dropdown_2": dropdown_2,
        },
    )
