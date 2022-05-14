const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Ceacion de un nuevo esquema
var barSchema = new Schema({
	nombre: String,
	ubicacion: String,
	vende_desayuno: Boolean,
	vende_almuerzo: Boolean,
	horario: String,
	capacidad: Number,
});

var MenuSchema = new Schema({
	idbar: { type: mongoose.Types.ObjectId, ref: 'Bar' },
	idplato: { type: mongoose.Types.ObjectId, ref: 'Plato' },
	precio: Number,
});

var ReservacionSchema = new Schema({
	idcliente: { type: mongoose.Types.ObjectId, ref: 'Cliente' },
	idmenu: { type: mongoose.Types.ObjectId, ref: 'Menu' },
	fecha: Date,
	hora: String,
	descripcion: String,
});

var PlatoSchema = new Schema({
	nombre_plato: String,
});

var ClienteSchema = new Schema({
	nombre_cliente: String,
});

// Creacion del nuevo modelo
const Bar = mongoose.model('Bar', barSchema);
const Plato = mongoose.model('Plato', PlatoSchema);
const Menu = mongoose.model('Menu', MenuSchema);
const Reservacion = mongoose.model('Reservacion', ReservacionSchema);
const Cliente = mongoose.model('Cliente', ClienteSchema);

// Exportacion de los modelos creados
module.exports = { Bar, Menu, Reservacion, Plato, Cliente };
