from django.db import models
from django.contrib.postgres.fields import JSONField  # or models.JSONField for Django 3.1+

class SurveySubmission(models.Model):
    submitted_at = models.DateTimeField(auto_now_add=True)
    data = models.JSONField()  # to store all answers

    def __str__(self):
        return f"SurveySubmission #{self.id} at {self.submitted_at}"
