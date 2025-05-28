from django.contrib.auth.views   import LoginView
from django.views.generic        import TemplateView
from django.contrib.auth.mixins  import LoginRequiredMixin

class CustomLoginView(LoginView):
    template_name = "login.html"           

class DashboardHome(LoginRequiredMixin, TemplateView):
    template_name = "home.html"         
