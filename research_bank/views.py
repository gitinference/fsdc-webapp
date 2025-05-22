from django.shortcuts import render
from env import get_api_endpoint
import requests

# Create your views here.


def record_list_view(request):
    endpoint_url = get_api_endpoint()

    try:
        response = requests.get(endpoint_url, timeout=5)
        response.raise_for_status()
        records = response.json()
    except requests.RequestException:
        records = []

    return render(request, "entry_list.html", {"records": records})
