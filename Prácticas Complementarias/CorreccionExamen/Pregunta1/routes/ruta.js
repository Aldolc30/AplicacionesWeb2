const express = require('express');
const route = express.Router();

const parametro= process.env.parametro||'v1';


route.get('/prueba', (req, res)=>{
    if(parametro == 'v1'){
        return res.status(200).send({message: 'Ruta 1'})
    }
    if(parametro == 'v2'){
        return res.status(200).send({message: 'Ruta 2'})
    }
})




module.exports=route