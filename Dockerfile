FROM python:3.12

COPY requirements.txt /app/requirements.txt

WORKDIR /app

RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY . /app

EXPOSE 8000


