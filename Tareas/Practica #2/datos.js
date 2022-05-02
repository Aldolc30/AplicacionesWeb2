// Este arreglo tendrá la información de todos los bares disponibles en la ULEAM 
// Con información pertinente, tales como el nombre del bar, su ubicación,
// información del tipo de comida que ofrece(desayunos o almuerzos), su horario 
// y la capacidad de personas que caben en el establecimiento.
const bares = [
	{
		id: 1,
		nombre: 'Bar Facci',
		ubicacion: 'Facci',
		// tipo: 'desayuno',
		// tipo booleano - preguntas : desayuno-true
		desayuno: true,
		almuerzo: false,
		horario: 'Lunes-Viernes 06:00 - 12:00',
		capacidad: 8,
	},
	{
		id: 2,
		nombre: 'Bar Rincón del sabor',
		ubicacion: 'Facco',
		// tipo: 'almuerzos',
		desayuno: false,
		almuerzo: true,
		horario: 'Lunes, Martes y Viernes 11:30 - 15:00',
		capacidad: 15,
	},
	{
		id: 3,
		nombre: 'Bar Arquitectura',
		ubicacion: 'Arquitectura',
		// tipo: 'almuerzos',
		desayuno: false,
		almuerzo: true,
		horario: 'Lunes - Viernes 11:30 - 15:00',
		capacidad: 40,
	},
	{
		id: 4,
		nombre: 'Bar Ciencias Médicas',
		ubicacion: 'Facultad de Medicina',
		// tipo: 'almuerzos',
		desayuno: false,
		almuerzo: true,
		horario: 'Lunes - Viernes 11:30 - 15:00',
		capacidad: 45,
	},
	{
		id: 5,
		nombre: 'Bar de Ingeniería',
		ubicacion: 'Facultad de Ingeniería',
		// tipo: 'almuerzos',
		desayuno: false,
		almuerzo: true,
		horario: 'Lunes - Viernes 11:30 - 15:00',
		capacidad: 60,
	},
	

]

// Este arreglo tendrá la información del menú el cual estará asociado a los 
// diferentes platos y a la vez también a los bares. De igual manera se muestra
// el precio de cada comida.
const menu = [
	{
		id: 1,
		id_bar: 1,
		id_plato: 1,
		precio: 2.25,
	},
	{
		id: 2,
		id_bar: 1,
		id_plato: 2,
		precio: 5.00,
	},
	{
		id: 3,
		id_bar: 2,
		id_plato: 3,
		precio: 2.50,
	},
	{
		id: 4,
		id_bar: 2,
		id_plato: 4,
		precio: 2.50,
	},
	{
		id: 5,
		id_bar: 3,
		id_plato: 5,
		precio: 3.00,
	},
	{
		id: 6,
		id_bar: 3,
		id_plato: 6,
		precio: 2.00,
	},
	{
		id: 7,
		id_bar: 4,
		id_plato: 7,
		precio: 3.00,
	},
	{
		id: 8,
		id_bar: 4,
		id_plato: 8,
		precio: 4.00,
	},
	{
		id: 9,
		id_bar: 1,
		id_plato: 9,
		precio: 2.50,
	},
	{
		id: 10,
		id_bar: 2,
		id_plato: 10,
		precio: 3.00,
	},
]

// Arreglo es bastante sencillo, ya que al estar relacionado con el arreglo menu
// solo se necesitará especificar el nombre del plato a degustar.
const plato = [
	{
		id: 1,
		nombre_plato: 'Encebollado',
	},
	{
		id: 2,
		nombre_plato: 'Ceviche',
	},
	{
		id: 3,
		nombre_plato: 'Arroz con menestra y carne',
	},
	{
		id: 4,
		nombre_plato: 'Pescado apanado',
	},
	{
		id: 5,
		nombre_plato: 'Arroz con puré y carne',
	},
	{
		id: 6,
		nombre_plato: 'LLapingacho',
	},
	{
		id: 7,
		nombre_plato: 'Guatita',
	},
	{
		id: 8,
		nombre_plato: 'Milanesa',
	},
	{
		id: 9,
		nombre_plato: 'Chaulafán',
	},
	{
		id: 10,
		nombre_plato: 'Caldo de gallina',
	},
	
]

// Los estudiantes podrán hacer reservaciones, y mediante este arreglo se guardará
// la información de esa reserva mostrando información, tal como: la fecha en la que 
// hizo la reservación, la hora, y una pequeña descripción
const reservacion = [
	{
		id: 1,
		id_estudiante: 1,
		id_bar: 1,
		fecha: '28/04/2022',
		hora: '10:00:00',
		descripcion: 'encebollado, chifle y jugo',
	},
	{
		id: 2,
		id_estudiante: 1,
		id_bar: 3,
		fecha: '27/04/2022',
		hora: '12:00:00',
		descripcion: 'ceviche, chifle y cola',
	},
	{
		id: 3,
		id_estudiante: 2,
		id_bar: 4,
		fecha: '28/04/2022',
		hora: '14:00:00',
		descripcion: 'ceviche, chifle y cola',
	},
	{
		id: 4,
		id_estudiante: 3,
		id_bar: 1,
		fecha: '29/04/2022',
		hora: '11:00:00',
		descripcion: 'Café y bolón',
	},
]

// Este arreglo al igual que plato es bastante sencillo, solo guarda el nombre del
// estudiante
const estudiantes = [
	{
		id: 1,
		nombre: 'Pedro Vera',
	},
	{
		id: 2,
		nombre: 'Juan Cedeño',
	},
	{
		id: 3,
		nombre: 'Jordy Pico',
	},
	{
		id: 4,
		nombre: 'Sergio Lino',
	},
	{
		id: 5,
		nombre: 'Kevin Ponce',
	},
	{
		id: 6,
		nombre: 'Karla Acosta',
	},
	{
		id: 7,
		nombre: 'Doménica Vinces',
	},
	{
		id: 8,
		nombre: 'Cristhopher Alcívar',
	},
]

// Función que permitirá buscar la reservación cuando le pasemos por parametro una id en específico
function buscarReservacionPorId(id)
{
    return new Promise((resolve, reject)=>{
    	const reserva =  reservacion.find((reserva)=> reserva.id=== id);
        if (!reserva)
        {
            const error= new Error();
            error.message=`La reservación con id ${id} no pudo ser encontrada, intente con otro id`;
            reject(error);
        }
        resolve(reserva);
    })
}

// Función que permitirá asociar el estudiante con la correspondiente reservación que posteriormente hizo

function asociarReservacionAEstudiante(reserva)
{
    return new Promise((resolve,reject)=>{
        const estudiante =  estudiantes.find((estudiante)=> estudiante.id===reserva.id_estudiante);
        if (!estudiante)
        {
            const error= new Error();
            error.message=`El estudiante con id ${id} no pudo ser encontrado`;
            reject(error)
        }
        reserva.estudiante = estudiante;
        delete reserva.id_estudiante;
        resolve(reserva);
    })
}

// Llamamos la funcion especificando el id, y le anexamos el estudiante que hizo dicha reservación

buscarReservacionPorId(4)
.then((reserva)=>{
    return asociarReservacionAEstudiante(reserva)
})
.then((reserva)=>{
    console.log(reserva)
})

// Capturemos el error en caso de que no haya encontrado un id

.catch((motivo)=>{
    console.log(motivo.message)
})


