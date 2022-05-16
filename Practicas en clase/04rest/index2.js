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

app.use('/prueba', (req, res, next) =>{
    req.body.nombre = req.body.nombre.toUpperCase();
    next();
})

app.post('/prueba', (req, res, next) =>{
    res.status(201).send(req.body)
    next();
})

// app.use('/prueba', (req, res, next) =>{
//     console.log(`Después de Middleware`);
// });

app.listen(port, (err)=>{
    console.log(`Servidor ejecutandose en puerto ${port}`);
    // if(err){
    //     console.log(err);
    // }
})