from django.urls import path
from .views import record_list_view

urlpatterns = [
    path(
        "all/",
        record_list_view,
        name="record_list_view",
    ),
]
