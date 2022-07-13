const express = require('express');
const router = express.Router();
const axios = require('axios');
const { route } = require('.');

const httpAxios = axios.create({
    baseURL: `http://localhost:2500/v1/sextoa/api`
})

router.post('/producto/operar',(req, res, next)=>{
    if(req.body._id === ""){
        httpAxios.post('productos',{
            nombre: req.body.nombre,
            estado: req.body.estado, 
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo,
            stock: req.body.stock,
        }),then(respuesta=>{
            res.redirect('/')
        })
    }else{
        httpAxios.put(`productos/${req, res, next}`,{
            nombre: req.body.nombre,
            estado: req.body.estado, 
            precio: req.body.precio,
            costo: req.body.costo,
            minimo: req.body.minimo,
            stock: req.body.stock,
        }),then(respuesta=>{
            res.redirect('/')
        })
    }
})

module.exports = router