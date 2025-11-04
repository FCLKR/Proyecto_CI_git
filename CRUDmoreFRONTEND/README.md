Paso 1: Crear Backend con Flask (API CRUD)

Primero, vamos a crear la API en Flask para manejar las operaciones CRUD en la base de datos MySQL.

1.1. Backend - app.py

En el directorio backend/, crea el archivo app.py:

Explicación del código:

Conexión a MySQL: La función conectar_db() maneja la conexión con la base de datos MySQL. El host de la base de datos se establece como db, que es el nombre del servicio de MySQL en Docker Compose.

Operaciones CRUD:

POST /users: Crea un nuevo usuario con los datos proporcionados.

GET /users: Obtiene todos los usuarios de la base de datos.

PUT /users/<id>: Actualiza un usuario existente con el id dado.

DELETE /users/<id>: Elimina un usuario por su id.

1.2. Backend - requirements.txt

Crea el archivo requirements.txt en el directorio backend/ para las dependencias de Python:

1.3. Backend - Dockerfile

Crea un Dockerfile en el directorio backend/ para construir la imagen Docker del backend:

Paso 2: Crear el Frontend (HTML/CSS/JavaScript)

El frontend será una página HTML con un formulario para agregar usuarios y una lista para mostrar todos los usuarios.

2.1. Frontend - index.html

En el directorio frontend/, crea el archivo index.html:

2.2. Frontend - style.css

Crea un archivo style.css para darle estilo a la página:

2.3. Frontend - app.js

Crea un archivo app.js para manejar la interacción con la API de backend:

Paso 3: Configuración de Docker Compose

Ahora vamos a usar Docker Compose para orquestar los contenedores de la base de datos MySQL, el backend en Flask, y el frontend.

3.1. Archivo docker-compose.yml

En el directorio raíz de tu proyecto (my-crud-app/), crea el archivo docker-compose.yml:

Paso 1: Crear el Dockerfile para el frontend

Dentro del directorio frontend/, crea un archivo llamado Dockerfile con el siguiente contenido:

Este Dockerfile realiza lo siguiente:

Imagen base: Utiliza la imagen nginx:alpine, que es una versión ligera de Nginx.

Copiar archivos: Copia todos los archivos del frontend (HTML, CSS, JS) al directorio por defecto de Nginx (/usr/share/nginx/html).

Exponer puerto 80: Exponemos el puerto 80 para acceder a la aplicación desde un navegador.