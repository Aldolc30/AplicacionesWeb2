FROM node
## Copiamos en la carpeta
COPY . /app
## Trabajamos en la carpeta
WORKDIR /app
## Se ejecutará la siguiente instrucción
RUN npm install
## Especificando que será en el puerto 3000
ENV PORT 3000
EXPOSE 3000
ENTRYPOINT ["npm", "start"]
