from django import forms


class SubdisciplineForm(forms.Form):
    """
    Form for creating or updating a subdiscipline.
    This form allows the user to either select an existing subdiscipline
    or create a new one by providing a name and description.
    """

    # Choices for the dropdown to select an existing subdiscipline
    # Will be populated dynamically from the database
    use_existing_subdiscipline = forms.ChoiceField(
        label="Subdiscipline",
        widget=forms.Select(attrs={"id": "id_use_existing_subdiscipline"}),
        required=False,
    )
    name = forms.CharField(required=False)
    sub_description = forms.CharField(required=False, label="Description")


class ResearcherForm(forms.Form):
    """
    Form for creating or updating a researcher.
    This form allows the user to either select an existing researcher
    or create a new one by providing their first name, last name,
    education, phone number, and email address.
    """

    # Choices for the dropdown to select an existing researcher
    # Will be populated dynamically from the database
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
    """
    Form for uploading a codebook file.
    This form requires the user to upload a file that contains the codebook.
    """

    file = forms.FileField(required=True)


class DatasetForm(forms.Form):
    """
    Form for uploading a dataset file.
    This form requires the user to upload a file that contains the dataset.
    """

    file = forms.FileField(required=True)


class ResearchEntryForm(forms.Form):
    """
    Form for creating or updating a research entry.
    This form allows the user to provide details about a research entry,
    including the title, date started, date ended, description, and bibliography.
    These fields are "metadata" for the entry, and have no relation to
    the subdiscipline or researcher forms.
    """

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
    title = forms.CharField(required=True)
    project_summary = forms.CharField(widget=forms.Textarea, required=True)
    time_period = forms.CharField(required=True)
    thesis_advisor_name = forms.CharField(required=False)
    thesis_advisor_email = forms.EmailField(required=False)
    thesis_advisor_phone = forms.CharField(required=False)
    postal_address = forms.CharField(required=False)
    department_and_faculty = forms.CharField(required=False)
    orcid = forms.CharField(required=False)
    main_keyword = forms.CharField(required=True)
    alternate_keywords = forms.CharField(required=False)
