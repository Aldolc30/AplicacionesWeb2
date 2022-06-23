"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers");
const validarCampos_1 = require("../middlewares/validarCampos");
const { crearProducto, obtenerProductos, obtenerProducto } = controllers_1.Producto;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerProductos);
router.get('/:id', (0, express_validator_1.check)('id', 'Debe ser un ID de mongo válido').isMongoId(), validarCampos_1.validarCampos, obtenerProducto);
router.post('/', (0, express_validator_1.check)('El nombre es obligatorio').not().isEmpty(), validarCampos_1.validarCampos, crearProducto);