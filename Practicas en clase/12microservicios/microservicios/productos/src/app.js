const express = require('express')
const app = express();

const respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Microservicio de productos',
}

app.use((req,res,next) =>{
    respuesta.data=[]
    next()
})


app.get('/api/v2/productos', (req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Hamburguesa", "Papasfritas", "Hot-Dog")
    console.log(`Microservicio de productos`);
    return res.send(respuesta)
})

module.exports=app