from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path(
        "foreign-transactions/",
        views.web_app_imports_exports,
        name="web_app_imports",
    ),
    path("consumer-indices/", views.web_app_consumer_indices, name="consumer_indices"),
    path("awards/", views.web_app_awards, name="awards"),
]
