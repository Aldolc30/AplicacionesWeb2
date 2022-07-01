FROM node
## Copiamos en la carpeta
COPY . /app
## Trabajamos en la carpeta
WORKDIR /app
COPY package*.json ./
## Se ejecutará la siguiente instrucción
RUN npm install
## Especificando que será en el puerto 3000
EXPOSE 3000
CMD ["node", "dist/index.js"]
