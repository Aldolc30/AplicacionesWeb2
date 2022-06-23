const express = require('express')
const app = express();

const respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Microservicio de cliente',
}

app.use((req,res,next) =>{
    respuesta.data=[]
    next()
})


app.get('/api/v2/clientes', (req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Consumidor final","Geovanny Ponce", "Aldair Lino")
    console.log(`Microservicio de clientes`);
    return res.send(respuesta)
})

module.exports=app