const express = require('express');
const cors = require('cors');
const rutas= require('./routes/ruta');

const app = express();
const port= 4000;

app.use(cors());
app.use(express.json());
app.use('/api', rutas);

app.listen(port, ()=>console.log(`Servidor corriendo en puerto ${port}`));