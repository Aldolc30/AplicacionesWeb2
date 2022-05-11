const { menu, plato } = require('./datos')

// Funcion que permite buscar los menus por medio del bar/restaurante solicitado

async function buscarMenubyBar(id) {
	return new Promise((resolve, reject) => {
		const menus = menu.filter((menus) => menus.id_bar === id)
		if (!menus) {
			const error = new Error()
			error.message = `El Menu con id ${id} no pudo ser encontrado`
			reject(error)
		}
		resolve(menus)
	})
}

// Funcion que permite buscar los platos por medio del id

async function buscarPlatobyId(id) {
	return new Promise((resolve, reject) => {
		const platos = plato.filter((platos) => platos.id === id)
		if (!platos) {
			const error = new Error()
			error.message = `El plato con id ${id} no pudo ser encontrado`
			reject(error)
		}
		resolve(platos)
	})
}

//Lamamos a la funcion expecificando el id del bar/restaurante

;(async () => {
	try {
		const menu = await buscarMenubyBar(1)
		console.log(menu)
	} catch (error) {
		console.log(error.message)
	}
})()
