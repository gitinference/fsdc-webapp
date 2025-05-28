from django.urls import path
from .views import CustomLoginView, DashboardHome
from django.contrib.auth.views import LogoutView
app_name = 'dashboard'

urlpatterns = [
    path("login/", CustomLoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("", DashboardHome.as_view(), name="home"),
]
