FROM python:3.10-slim

WORKDIR /app

# Copiar y instalar dependencias
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código fuente de la app
COPY . .

EXPOSE 5000

CMD ["python", "app.py"]