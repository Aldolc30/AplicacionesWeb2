const express = require('express');
const cors = require('cors')

const app = express();
const port = 2500;

app.use(cors()).use(express.json());

app.get('/prueba', (req, res, next)=>{
    next();
}, (req, res, next)=>{
    // res.status(200).send('Prueba exitosa :3')
    res.status(200).send({ mensaje: 'hola' })
});

app.listen(port, (err)=>{
    console.log(`Servidor ejecutandose en puerto ${port}`);
    // if(err){
    //     console.log(err);
    // }
})