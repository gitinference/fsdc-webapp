from django.urls import path
from .views import (
    CustomLoginView,
    HomeView,
    AddEntryView,
    ListEntriesView,
    NoNavBarListEntriesView,
    ApproveEntryView,
)
from django.contrib.auth.views import LogoutView

app_name = "dashboard"

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path("login/", CustomLoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("entries/add/", AddEntryView.as_view(), name="add-entry"),
    path("entries/", ListEntriesView.as_view(), name="entry-list"),
    path("entries/approve", ApproveEntryView.as_view(), name="approve-entry"),
    path(
        "entries/no-nav/", NoNavBarListEntriesView.as_view(), name="entry-list-no-nav"
    ),
]
