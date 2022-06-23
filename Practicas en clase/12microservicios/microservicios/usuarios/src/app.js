const express = require('express')
const app = express();

const respuesta = {
    data:[],
    arquitectura:'Microservicio',
    descripcion:'Microservicio de usuarios',
}

app.use((req,res,next) =>{
    respuesta.data=[]
    next()
})


app.get('/api/v2/usuarios', (req,res)=>{
    respuesta.data=[]
    respuesta.data.push("Administrador, SuperAdministrador")
    console.log(`Microservicio de usuarios`);
    return res.send(respuesta)
})

module.exports=app