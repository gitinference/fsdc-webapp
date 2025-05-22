from django.db import models

class AnswerRecord(models.Model):
    survey_type  = models.CharField(max_length=50)
    session_id   = models.CharField(max_length=100)
    question_id  = models.CharField(max_length=100)
    answer       = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.survey_type} – {self.session_id} – {self.question_id}"
