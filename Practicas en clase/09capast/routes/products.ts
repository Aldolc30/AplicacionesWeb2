import { Router } from "express";
import { check } from "express-validator";
import { Producto } from "../controllers";
import { validarCampos } from "../middlewares/validarCampos";

const { crearProducto, obtenerProductos, obtenerProducto } = Producto
const router = Router()

router.get('/', obtenerProducto)
router.get('/:id', check('id', 'Debe ser un ID de mongo válido').isMongoId(),
validarCampos, 
obtenerProductos)
router.post('/', check('El nombre es obligatorio').not().isEmpty(), 
validarCampos, 
crearProducto)


export {
    router
}