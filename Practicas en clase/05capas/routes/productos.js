const { Router } = require('express');
const { check } = require('express-validator');

const {
    obtenerProductos,
    obtenerProducto,
    crearProducto,
    actualizarProducto,
    borrarProducto
} = require('../controllers').Producto;

const { ValidarCampos } = require('../middlewares')

const router = Router();

router.get('/', obtenerProductos)
router.get('/:id', [check('id', 'El id no es válido').isMongoId()],
obtenerProducto)
router.post('/', [check('nombre', 'El nombre es obligatorio'). isEmpty(), ValidarCampos]
,crearProducto)
router.put('/:id', [check('id', 'El id no es válido').isMongoId()],
actualizarProducto)
router.delete('/:id',[check('id', 'El id no es válido').isMongoId()], 
borrarProducto)

module.exports = router;