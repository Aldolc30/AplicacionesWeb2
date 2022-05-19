// npm i dotenv
// npm i nodemon -D


// Trae la configuración del .env
require('dotenv').config();
const Server = require('./server');
const server = new Server();
server.listen();