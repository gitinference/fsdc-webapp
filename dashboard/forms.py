from django import forms


class SubdisciplineForm(forms.Form):
    use_existing = forms.ChoiceField(label="Subdiscipline", required=False)
    name = forms.CharField(required=False)
    description = forms.CharField(required=False)


class ResearcherForm(forms.Form):
    use_existing = forms.ChoiceField(label="Researcher", required=False)
    fname = forms.CharField(required=False)
    lname = forms.CharField(required=False)
    education = forms.CharField(required=False)
    phone = forms.CharField(required=False)
    email = forms.EmailField(required=False)


class CodebookForm(forms.Form):
    file = forms.FileField(required=True)


class DatasetForm(forms.Form):
    file = forms.FileField(required=True)


class ResearchEntryForm(forms.Form):
    date_started = forms.DateField(widget=forms.DateInput(attrs={"type": "date"}))
    date_ended = forms.DateField(widget=forms.DateInput(attrs={"type": "date"}))
    description = forms.CharField(widget=forms.Textarea)
    bibliography = forms.CharField()
