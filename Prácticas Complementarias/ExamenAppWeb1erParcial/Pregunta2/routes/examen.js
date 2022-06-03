const express = require('express');
const route = express.Router();
const traerdatos = require('../datos_user/traerdatos');

let total = [];

route.post('/registrar', (req, res) =>{
    const datos = req.body;
    traerdatos(datos, total)
    res.json(datos);
    //console.log(datos);
})


route.get('/consultar', (req, res) =>{
    res.status(200).send(total);
})
module.exports = route;