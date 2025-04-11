from django.shortcuts import render, redirect
from .forms import Part1Consentimiento, Part2Consentimiento, Part3Consentimiento, Part4Consentimiento
from .forms import PRPart1Form, PRPart2Form, PRPart3Form, PRPart4Form
from .models import SurveySubmission
def part1_view(request):
    if request.method == 'POST':
        form = Part1Consentimiento(request.POST)
        if form.is_valid():
            request.session['part1'] = form.cleaned_data
            return redirect('parte2')
    else:
        form = Part1Consentimiento()
    return render(request, 'forms/part1.html', {'form': form})


def part2_view(request):
    if request.method == 'POST':
        form = Part2Consentimiento(request.POST)
        if form.is_valid():
            request.session['part2'] = form.cleaned_data
            return redirect('parte3')
    else:
        form = Part2Consentimiento()
    return render(request, 'forms/part2.html', {'form': form})


def part3_view(request):
    if request.method == 'POST':
        form = Part3Consentimiento(request.POST)
        if form.is_valid():
            request.session['part3'] = form.cleaned_data
            return redirect('parte4')
    else:
        form = Part3Consentimiento()
    return render(request, 'forms/part3.html', {'form': form})


def part4_view(request):
    if request.method == 'POST':
        form = Part4Consentimiento(request.POST)
        if form.is_valid():
            request.session['part4'] = form.cleaned_data
            # Aquí podrías guardar todas las respuestas combinadas
            full_data = {
                **request.session.get('part1', {}),
                **request.session.get('part2', {}),
                **request.session.get('part3', {}),
                **form.cleaned_data,
            }
            request.session['final_data'] = full_data
            return redirect('gracias')
    else:
        form = Part4Consentimiento()
    return render(request, 'forms/part4.html', {'form': form})


def gracias_view(request):
    return render(request, 'forms/gracias.html')


def escala_part1_view(request):
    if request.method == 'POST':
        form = PRPart1Form(request.POST)
        if form.is_valid():
            request.session['escala_part1'] = form.cleaned_data
            return redirect('escala_part2')
    else:
        form = PRPart1Form()
    return render(request, 'forms/escala_part1.html', {'form': form})


def escala_part2_view(request):
    if request.method == 'POST':
        form = PRPart2Form(request.POST)
        print("Form submitted.")  # ✅ Check if POST is happening

        if form.is_valid():
            print("Form is valid.")  # ✅ Confirm validation
            request.session['parte2'] = form.cleaned_data
            has_kids = form.cleaned_data.get('a10')
            print("User selected:", has_kids)

            if has_kids == 'SI':
                return redirect('escala_part3')
            else:
                return redirect('escala_part4')
        else:
            print("Form is NOT valid.")
            print(form.errors)  # 🔥 Print the actual validation errors

    else:
        form = PRPart2Form()

    return render(request, 'forms/escala_part2.html', {'form': form})


def escala_part3_view(request):
    if request.method == 'POST':
        form = PRPart3Form(request.POST)
        if form.is_valid():
            request.session['escala_part3'] = form.cleaned_data
            return redirect('escala_part4')
    else:
        form = PRPart3Form()
    return render(request, 'forms/pr_part3.html', {'form': form})


def escala_part4_view(request):
    if request.method == 'POST':
        form = PRPart4Form(request.POST)
        if form.is_valid():
            request.session['pr_part4'] = form.cleaned_data
            final_data = {
                **request.session.get('pr_part1', {}),
                **request.session.get('pr_part2', {}),
                **request.session.get('pr_part3', {}),
                **request.session.get('pr_part4', {}),
            }
            SurveySubmission.objects.create(data=final_data)
            return redirect('gracias')
    else:
        form = PRPart4Form()
    return render(request, 'forms/pr_part4.html', {'form': form})
