from django import forms


class SubdisciplineForm(forms.Form):
    use_existing_subdiscipline = forms.ChoiceField(
        label="Subdiscipline",
        widget=forms.Select(attrs={"id": "id_use_existing_subdiscipline"}),
        required=False,
    )
    name = forms.CharField(required=False)
    sub_description = forms.CharField(required=False, label="Description")


class ResearcherForm(forms.Form):
    use_existing_researcher = forms.ChoiceField(
        label="Researcher",
        widget=forms.Select(attrs={"id": "id_use_existing_researcher"}),
        required=False,
    )
    fname = forms.CharField(label="First Name", required=False)
    lname = forms.CharField(label="Last Name", required=False)
    education = forms.CharField(label="Education", required=False)
    phone = forms.CharField(label="Phone Number", required=False)
    email = forms.EmailField(label="E-mail Address", required=False)


class CodebookForm(forms.Form):
    file = forms.FileField(required=True)


class DatasetForm(forms.Form):
    file = forms.FileField(required=True)


class ResearchEntryForm(forms.Form):
    date_started = forms.DateField(widget=forms.DateInput(attrs={"type": "date"}))
    date_ended = forms.DateField(widget=forms.DateInput(attrs={"type": "date"}))
    res_entry_description = forms.CharField(
        widget=forms.Textarea,
        required=True,
        error_messages={
            "required": "This field is required.",
        },
        label="Description",
    )
    bibliography = forms.CharField(
        required=True,
        error_messages={
            "required": "This field is required.",
        },
    )
