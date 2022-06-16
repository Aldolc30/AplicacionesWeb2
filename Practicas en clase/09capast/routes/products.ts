import { Router } from "express";
import { check } from "express-validator";
import { Producto } from "../controllers";
import { validarCampos } from "../middlewares/validarCampos";

const { crearProducto, obtenerProductos, obtenerProducto } = Producto
const router = Router()

router.get('/', obtenerProductos)
router.get('/:id', check('id', 'Debe ser un ID de mongo válido').isMongoId(),
validarCampos, 
obtenerProducto)
router.post('/', check('El nombre es obligatorio').not().isEmpty(), 
validarCampos, 
crearProducto)


export {
    router
}