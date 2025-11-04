# Usamos una imagen base de Nginx para servir los archivos estáticos
FROM nginx:alpine

# Copiamos los archivos del frontend al directorio por defecto de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80 para acceder a la aplicación frontend
EXPOSE 80