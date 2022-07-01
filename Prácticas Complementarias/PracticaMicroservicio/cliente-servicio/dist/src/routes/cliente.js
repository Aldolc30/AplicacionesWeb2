"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cliente_1 = require("../controllers/cliente");
const router = (0, express_1.Router)();
router.get('/ver/:id', cliente_1.obtenerClienteById);
router.get('/', cliente_1.obtenerClientes); // Obtener todos los clientes
router.post('/', cliente_1.crearCliente); // Crear un nuevo cliente
exports.default = router;
