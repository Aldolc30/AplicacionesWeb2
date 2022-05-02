const {
    reservacion,
    estudiantes,
} = require('./datos')

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
