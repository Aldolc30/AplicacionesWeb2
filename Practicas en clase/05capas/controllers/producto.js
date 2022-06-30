// logica de validaciones que se enviaran al modelo 
const { response } = require('express');
const { Producto } = require('../models')

const obtenerProductos = async (req, res = response ) => {
    const { limite=10, desde=0 } = req.query;
    const query = { estado: true};

    // arreglo de promesas
    const [ total, productos] = await Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
    ])
    res.json({
        total,
        productos
    })
    console.log(productos);
}

const obtenerProducto = async (req, res = response) => {
    const {id} = req.params;
    const producto = await Producto.findById(id);
    res.json(producto)
}
const crearProducto = async (req, res = response ) => {
    // sacar el estado del body 
    const { estado, ...body} = req.body;
    try {
        const productoExiste = await Producto.findOne({nombre:body.nombre});
    if(productoExiste)
    {
        return res.status(400).send({
            message: `El producto con ese nombre ya existe ${productoExiste.nombre}`
        })
    }

    const producto = new Producto(body);
    const productoNuevo = await producto.save();
    res.status(201).json(productoNuevo);
    } catch (error) {
        console.log(error);
    }
    // Se valida que no existe
    

}
const actualizarProducto = async (req, res = response) => {
    const {id} = req.params;
    const { estado, ...data} = req.body
    const productoModificado = await Producto.findByIdAndUpdate(id, data, { new: true })
    res.json(productoModificado)
}

const borrarProducto = async (req, res = response) => {
    const {id} = req.params
    const productoEliminado = await Producto.findByIdAndUpdate(id,{estado: false}, {new:true});
    res.json(productoEliminado)
}

module.exports = {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
}