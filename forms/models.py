from django.db import models

class SurveySubmission(models.Model):
    submitted_at = models.DateTimeField(auto_now_add=True)
    data = models.JSONField()

    def __str__(self):
        return f"SurveySubmission {self.id}"
