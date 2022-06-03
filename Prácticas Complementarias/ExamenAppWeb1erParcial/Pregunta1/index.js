const express = require('express');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors()).use(express.json());

app.get('/prueba', (req, res, next)=>{
    next();
}, (req, res, next)=>{
    // res.status(200).send('Prueba exitosa :3')
    res.status(200).send({ mensaje: 'Ruta 1' })
});

// app.get('/prueba', (req, res, next)=>{
//     next();
// }, (req, res, next)=>{
//     // res.status(200).send('Prueba exitosa :3')
//     res.status(200).send({ mensaje: 'Ruta 2' })
// });

app.listen(port)
console.log(`Servidor ejecutandose en puerto ${port}`);
