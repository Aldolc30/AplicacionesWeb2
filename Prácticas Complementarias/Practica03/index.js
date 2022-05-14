const mongoose = require('mongoose');
const { Menu, Plato, Bar, Cliente, Reservacion } = require('./esquemas');
const {
	añadirBar1,
	añadirBar2,
	añadirBar3,
	añadirBar4,
	añadirBar5,
	añadirPlato1,
	añadirPlato2,
	añadirPlato3,
	añadirPlato4,
	añadirPlato5,
	añadirPlato6,
	añadirPlato7,
	añadirPlato8,
	añadirPlato9,
	añadirPlato10,
	añadirCliente1,
	añadirCliente2,
	añadirCliente3,
	añadirCliente4,
	añadirCliente5,
	añadirCliente6,
	añadirCliente7,
	añadirCliente8,
} = require('./addDatos');

const conexion = "mongodb+srv://Aldo:Aldo123@cluster0.p6xsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

(async () => {
	const estadoConexion = await mongoose.connect(conexion);

	// Creacion de nuevo dato en la tabla Bar
	const bar1 = new Bar(añadirBar1);
	const bar2 = new Bar(añadirBar2);
	const bar3 = new Bar(añadirBar3);
	const bar4 = new Bar(añadirBar4);
	const bar5 = new Bar(añadirBar5);

	// Guardado de datos en la Base de Datos
	const guardarBar1 = await bar1.save();
	const guardarBar2 = await bar2.save();
	const guardarBar3 = await bar3.save();
	const guardarBar4 = await bar4.save();
	const guardarBar5 = await bar5.save();

	// Creacion de nuevo dato en la tabla Plato
	const Plato1 = new Plato(añadirPlato1);
	const Plato2 = new Plato(añadirPlato2);
	const Plato3 = new Plato(añadirPlato3);
	const Plato4 = new Plato(añadirPlato4);
	const Plato5 = new Plato(añadirPlato5);
	const Plato6 = new Plato(añadirPlato6);
	const Plato7 = new Plato(añadirPlato7);
	const Plato8 = new Plato(añadirPlato8);
	const Plato9 = new Plato(añadirPlato9);
	const Plato10 = new Plato(añadirPlato10);

	// Guardado de datos en la Base de Datos
	const guardarPlato1 = await Plato1.save();
	const guardarPlato2 = await Plato2.save();
	const guardarPlato3 = await Plato3.save();
	const guardarPlato4 = await Plato4.save();
	const guardarPlato5 = await Plato5.save();
	const guardarPlato6 = await Plato6.save();
	const guardarPlato7 = await Plato7.save();
	const guardarPlato8 = await Plato8.save();
	const guardarPlato9 = await Plato9.save();
	const guardarPlato10 = await Plato10.save();

	// Creacion de nuevo dato en la tabla Menu
	const Menu1 = new Menu({
		idbar: guardarBar1._id,
		idplato: guardarPlato1._id,
		precio: 2.25,
	});
	const Menu2 = new Menu({
		idbar: guardarBar1._id,
		idplato: guardarPlato2._id,
		precio: 5.0,
	});
	const Menu3 = new Menu({
		idbar: guardarBar2._id,
		idplato: guardarPlato3._id,
		precio: 2.5,
	});
	const Menu4 = new Menu({
		idbar: guardarBar2._id,
		idplato: guardarPlato4._id,
		precio: 2.5,
	});
	const Menu5 = new Menu({
		idbar: guardarBar3._id,
		idplato: guardarPlato5._id,
		precio: 3.0,
	});
	const Menu6 = new Menu({
		idbar: guardarBar3._id,
		idplato: guardarPlato6._id,
		precio: 2.0,
	});
	const Menu7 = new Menu({
		idbar: guardarBar4._id,
		idplato: guardarPlato7._id,
		precio: 3.0,
	});
	const Menu8 = new Menu({
		idbar: guardarBar4._id,
		idplato: guardarPlato8._id,
		precio: 4.0,
	});
	const Menu9 = new Menu({
		idbar: guardarBar5._id,
		idplato: guardarPlato9._id,
		precio: 2.5,
	});
	const Menu10 = new Menu({
		idbar: guardarBar1._id,
		idplato: guardarPlato10._id,
		precio: 3.0,
	});

	// Guardado de datos en la Base de Datos
	const guardarMenu1 = await Menu1.save();
	const guardarMenu2 = await Menu2.save();
	const guardarMenu3 = await Menu3.save();
	const guardarMenu4 = await Menu4.save();
	const guardarMenu5 = await Menu5.save();
	const guardarMenu6 = await Menu6.save();
	const guardarMenu7 = await Menu7.save();
	const guardarMenu8 = await Menu8.save();
	const guardarMenu9 = await Menu9.save();
	const guardarMenu10 = await Menu10.save();

	// Creacion de nuevo dato en la tabla Cliente
	const Cliente1 = new Cliente(añadirCliente1);
	const Cliente2 = new Cliente(añadirCliente2);
	const Cliente3 = new Cliente(añadirCliente3);
	const Cliente4 = new Cliente(añadirCliente4);
	const Cliente5 = new Cliente(añadirCliente5);
	const Cliente6 = new Cliente(añadirCliente6);
	const Cliente7 = new Cliente(añadirCliente7);
	const Cliente8 = new Cliente(añadirCliente8);

	// Guardado de datos en la Base de Datos
	const guardarCliente1 = await Cliente1.save();
	const guardarCliente2 = await Cliente2.save();
	const guardarCliente3 = await Cliente3.save();
	const guardarCliente4 = await Cliente4.save();
	const guardarCliente5 = await Cliente5.save();
	const guardarCliente6 = await Cliente6.save();
	const guardarCliente7 = await Cliente7.save();
	const guardarCliente8 = await Cliente8.save();

	// Creacion de nuevo dato en la tabla Reservacion
	const Reservacion1 = new Reservacion({
		idcliente: guardarCliente1._id,
		idmenu: guardarMenu1._id,
		fecha: '2022/04/28',
		hora: '10:00:00',
		descripcion: 'encebollado, chifle y jugo',
	});
	const Reservacion2 = new Reservacion({
		idcliente: guardarCliente1._id,
		idmenu: guardarMenu3._id,
		fecha: '2022/04/27',
		hora: '12:00:00',
		descripcion: 'ceviche, chifle y cola',
	});
	const Reservacion3 = new Reservacion({
		idcliente: guardarCliente2._id,
		idmenu: guardarMenu4._id,
		fecha: '2022/04/28',
		hora: '14:00:00',
		descripcion: 'ceviche, chifle y cola',
	});
	const Reservacion4 = new Reservacion({
		idcliente: guardarCliente3._id,
		idmenu: guardarMenu1._id,
		fecha: '2022/04/29',
		hora: '11:00:00',
		descripcion: 'Café y bolón',
	});

	// Guardado de datos en la Base de Datos
	const guardarReservacion1 = await Reservacion1.save();
	const guardarReservacion2 = await Reservacion2.save();
	const guardarReservacion3 = await Reservacion3.save();
	const guardarReservacion4 = await Reservacion4.save();

	// Muestra de los datos de la coleccion Bar guardados en nuestra Base de Datos
	const resultado = await Menu.find();
	console.log(resultado);
})();
