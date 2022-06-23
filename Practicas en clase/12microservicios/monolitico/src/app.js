const express = require('express')
const app = express()
const respuesta = {
    data:[],
    arquitectura:'Monolitico',
    descripcion:'Acceso a todas las rutas en un solo enpoint',
}

app.use((req,res,next) =>{
    respuesta.data=[]
    next()
})

app.get('/api/v1/usuarios', (req,res)=>{
    respuesta.data.push("Administrador","SuperAdministrdor")
    return res.send(respuesta.data)
})
app.get('/api/v1/productos', (req,res)=>{
    respuesta.data.push("pizza","hamburguesa","papas fritas")
    return res.send(respuesta.data)
})
app.get('/api/v1/clientes', (req,res)=>{
    respuesta.data.push("Consumidor final","Geovanny Ponce")
    return res.send(respuesta.data)
})

module.exports=app