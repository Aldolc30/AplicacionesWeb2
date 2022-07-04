## Pasos para la realización de la Practica Complementaria 2 - Microservicios

En este caso al trabajar con Microservicios separaremos cada ruta y no las tendremos todas juntas. Sin embargo solo se visualizará una carpeta ya que solo se trabajará con una ruta, en este caso la ruta de Cliente

***

**1.-** Creamos una carpeta la cual le asignaremos **cliente-servicio**, dentro de esta carpeta es donde traeremos todo lo que hicimos en la practica pasada. La diferencia es que solo crearemos dentro de ella el archivo llamado **Dockerfile**, el cual contiene todos los comandos que el usuario podría llamar en la línea de comando para ensamblar una imagen 

***

**2.-** Dentro de la carpeta principal, es decir afuera de cliente-servicio creamos un archivo, con el nombre de: **docker-compose.yml**. El cuál es un archivo que sirve para definir servicios, redes y volúmenes necesarios para la aplicación  del Docker. Cabe destacar que en caso de no tener la imagen ya descargada, no habrá problema alguno ya que lo descargará automáticamente.

***

**3.-** También dentro de la carpeta principal debemos crear un archivo **nginx.conf** el cual tendrá especificado el puerto donde se aplicará, además del ProxyPass el cual define la dirección de destino para los reenvíos. Es decir que reenviará todas las peticiones dirigidas a la dirección depositada bajo la etiqueta Server, el cual fue la que se le asignó dentro del archivo.

***

**4.-** Luego nos dirigimos a la terminal, nos ubicamos dentro de la carpeta y ejecutamos el comando: `docker-compose up --build` Se descargarán las imagenes correspondientes(en el caso de que no estén ya instaladas) y comenzará a levantar el docker dentro de la base de datos de MongoDB Atlas. Muy importante que a diferencia de la práctica anterior, aquí debemos agregar la imagen de nginx, con nginx:latest, especificando que queremos la versión más reciente, y usaremos el puerto "8080".

***

**5.-** Como último paso, probamos en el navegador o en el postman para comprobar que esté funcionando correctamente, escribiendo la ruta correspondiente, en este caso: http://localhost:8080/v1/sextoA/api/cliente

