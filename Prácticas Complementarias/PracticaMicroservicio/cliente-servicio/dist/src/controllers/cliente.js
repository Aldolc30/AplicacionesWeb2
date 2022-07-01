"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearCliente = exports.obtenerClienteById = exports.obtenerClientes = void 0;
const models_1 = require("../models");
const obtenerClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const { limite = 10, desde = 0 } = req.query;
    const [client] = yield Promise.all([models_1.Cliente.find()]);
    if (client)
        return res.status(200).json({ client });
    return res.status(200).send('No hay clientes');
});
exports.obtenerClientes = obtenerClientes;
const obtenerClienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield models_1.Cliente.findById(id);
    if (cliente)
        return res.status(200).send({ cliente: cliente });
    return res.status(200).send({
        message: 'No hay cliente',
    });
});
exports.obtenerClienteById = obtenerClienteById;
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    // const clienteExiste = await Cliente.findOne({ user: body.user });
    // if ( clienteExiste ) {
    //     const { user } = clienteExiste;
    //     res.status(200).json({
    //         message: `El cliente con este usuario ya existe ${ user }`
    //     });
    // }
    const cliente = new models_1.Cliente(body);
    yield cliente.save();
    res.status(200).send({
        message: 'Usuario registrado',
    });
});
exports.crearCliente = crearCliente;
// const actualizarCliente = async (req, res = response) => {
// 	const { id } = req.params;
// 	const { body } = req.body;
// 	const clienteActualizado = await Cliente.findByIdAndUpdate(id, body, {
// 		new: true,
// 	});
// 	res.json(clienteActualizado);
// };
// const borrarCliente = async (req, res = response) => {
// 	const { id } = req.params;
// 	const clienteBorrado = await Cliente.findByIdAndDelete(
// 		id,
// 		{ estado: false },
// 		{ new: true }
// 	);
// 	res.json(clienteBorrado);
// };
