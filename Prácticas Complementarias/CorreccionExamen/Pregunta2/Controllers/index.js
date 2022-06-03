const express = require('express');
const comida = require('../Persistence/arreglo')



const Buscar = async(req, res) => {
    res.status(200).send({
        datos: comida,
        message: 'Funcionando correctamente'
    });
}

const Guardar = async(req, res) => {
    const {...body} = req.body;
    const save = comida.push(body)
    if(save === 1){
        res.status(200).json(body)
    }else{
        res.status(400).send({message: 'Error'})
    }

}



module.exports={
    Buscar,
    Guardar
}