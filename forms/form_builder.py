import json
from pathlib import Path
from importlib import import_module
from django import forms

_choice_mod = import_module("forms.choices")
CHOICE_SETS = {k: getattr(_choice_mod, k) for k in dir(_choice_mod) if k.isupper()}

FIELD_MAP = {
    "choice": forms.ChoiceField,
    "char":   forms.CharField,
    "bool":   forms.BooleanField,
}

def load_definition(def_path: Path):
    spec = json.loads(def_path.read_text(encoding="utf-8"))
    spec["parts_by_step"] = {p["step"]: p for p in spec["parts"]}
    forms_list = []

    for part in spec["parts"]:
        attrs = {}
        for f in part["fields"]:
            field_cls = FIELD_MAP[f["type"]]
            kwargs = {"label": f["label"]}
            if f["type"] == "choice":
                kwargs["choices"] = (
                    CHOICE_SETS[f["choices"]]
                    if isinstance(f["choices"], str)
                    else f["choices"]
                )
                kwargs["widget"] = forms.RadioSelect
            if f.get("widget") == "hidden":
                kwargs["widget"] = forms.HiddenInput
            if f.get("required") is False:
                kwargs["required"] = False
            attrs[f["id"]] = field_cls(**kwargs)

        form_cls = type(
            f'{part["step"].title().replace("_", "")}Form',
            (forms.Form,),
            attrs,
        )
        forms_list.append((part["step"], form_cls))

    return spec, forms_list
