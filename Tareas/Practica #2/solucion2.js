const {
    menu,
    plato,
} = require('../Practica #2/datos')

async function buscarMenubyBar(id) {	
	return new Promise((resolve, reject) => {		
		const menus = menu.filter((menus) => menus.id_bar === id)		
		if (!menus) {			
			const error = new Error()			
			error.message = `El Menu con id ${id} no pudo ser encontrado`			
			reject(error)		
		}		
		resolve(menus)
	})} async function buscarPlatobyId(id) {	
		return new Promise((resolve, reject) => {		
			const platos = plato.filter((platos) => platos.id === id)		
			if (!platos) {			
				const error = new Error()			
				error.message = `El plato con id ${id} no pudo ser encontrado`			
				reject(error)		
			}		
			resolve(platos)	
		})} ;
		(async () => {	
			try {		
				const menu = await buscarMenubyBar(1)		
				// const plato = await buscarPlatobyId(menu.id_plato)		
				// menu.id_plato = plato		
				console.log(menu)	
			} catch (error) {		
				console.log(error.message)	
			}
		})()