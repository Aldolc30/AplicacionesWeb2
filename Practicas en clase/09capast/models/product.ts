import mongoose from "mongoose";
import { Schema, model } from "mongoose";
import { IProducto } from "../interfaces/IProducto";


const ProductoSchema: mongoose.Schema = new Schema({
    nombre:{
        type: String,
        required: [true, `El nombre del producto es obligatorio`], 
        unique: true
    },
    estado:{
        type: Boolean,
        required: true,
        unique: true
    },
    precio:{
        type: Number,
        default: 0
    },
    costo:{
        type: Number,
        default: 0
    },
    minimo:{
        type: Number,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    }

})
const Product: mongoose.Model<IProducto> =  model<IProducto>('Producto', ProductoSchema);

export{
    Product
}