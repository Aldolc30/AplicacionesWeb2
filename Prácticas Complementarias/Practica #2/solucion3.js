const { bares } = require('../Practica #2/datos')

// Funcion que permite buscar los bares/restaurantes con Almuerzos o Desayunos con la callbacks

function buscarSoloAlmuerzo(almuerzo, callback) {
	//Buscar los bares que tengan almuerzo
	const bar = bares.filter((bar) => bar.almuerzo === almuerzo)
	//Evaluar si el almuerzo es undefined
	if (!bar) {
		const error = new Error()
		error.message = `No se encontro ningun restaruante con Almuerzo`
		return callback(error)
	}
	return callback(null, bar)
}

function buscarSoloDesayuno(desayuno, callback) {
	//Buscar los bares que tengan desayuno
	const bar = bares.filter((bar) => bar.desayuno === desayuno)
	//Evaluar si el desayuno es undefined
	if (!bar) {
		const error = new Error()
		error.message = `No se encontro ningun restaruante con Almuerzo`
		return callback(error)
	}
	return callback(null, bar)
}

//-------Llamar a la funciones

// buscarSoloDesayuno(true,(err,bares)=>{
// 	if(err)
//     {
//         console.log(err.message);
//         return;
//     }
// 	console.log(bares);
// })

buscarSoloAlmuerzo(true, (err, bares) => {
	if (err) {
		console.log(err.message)
		return
	}
	console.log(bares)
})
