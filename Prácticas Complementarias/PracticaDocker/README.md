## Pasos para la realización de esta práctica con Docker

Una vez que teníamos todo el código transpilado a TypeScript, procedemos a: 

**1.-** Crear un archivo en la carpeta principal, el cual se llamará: **Dockerfile**, el cual contiene todos los comandos que un usuario podría llamar en la línea de comando para ensamblar una imagen 

**2.-** Además también creamos un archivo, con el nombre de: `docker-compose.yml`. El cuál es un archivo que sirve para definir servicios, redes y volúmenes necesarios para la aplicación  del Docker. Cabe destacar que en caso de no tener la imagen ya descargada, no habrá problema alguno ya que lo descargará automáticamente.

**3.-** Una vez creado esos dos archivos, nos dirigimos a la terminal, nos ubicamos dentro de la carpeta y ejecutamos el comando: `docker-compose up --build` Se descargarán las imagenes correspondientes(en el caso de que no estén ya instaladas) y comenzará a levantar el docker dentro de la base de datos de MongoDB Atlas

**4.-** Probamos en el navegador o en el postman para comprobar que esté funcionando correctamente, escribiendo la ruta correspondiente.
