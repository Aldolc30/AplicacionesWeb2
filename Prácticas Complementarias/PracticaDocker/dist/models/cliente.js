"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClienteSchema = new mongoose_1.Schema({
    nombre_cliente: String,
    cedula: String,
    edad: Number,
    telefono: Number,
    facultad: String,
    user: String,
    password: String,
});
exports.default = (0, mongoose_1.model)('Cliente', ClienteSchema);
