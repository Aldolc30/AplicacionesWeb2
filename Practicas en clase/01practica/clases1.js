// --------- OBJETO LITERAL ------------
const persona ={
    nombre:"Aldair",
    apellido:"Lino",
    esEstudiante:true,
    geolocalizacion:{
        lat:12.23424,
        lng:12.234234
    },
    getNombreCompleto(){
        return this.nombre+this.apellido
    }
}

function mostrarDatos({nombre, apellido, geolocalizacion:{ lat, lng }, getNombreCompleto})
{
    console.log(nombre)
    console.log(apellido)
    console.log(lat)
    console.log(lng)
}

mostrarDatos(persona)