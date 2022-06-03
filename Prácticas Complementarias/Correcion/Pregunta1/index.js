const express = require('express');
const app = express();
const port=4000;

const parametro = process.env.parametro || 'v1';

app.get('/api/prueba', (req, res)=>{
    if(parametro == 'v1'){
        return res.status(200).send({message:"Ruta 1"})
    }
    if(parametro == 'v2'){
        return res.status(200).send({message:"Ruta 2"})
    }
})


app.listen(port, ()=>{
    console.log('Servidor ejecutandose en puerto ' + port)
})

