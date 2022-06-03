const express = require('express');
const comida = require('../Persistence/arreglo');
const route = express.Router();
const {    
    Buscar,
    Guardar} 
= require('../Controllers/index')


route.get('/buscar',Buscar)

route.post('/agregar',Guardar)




module.exports=route