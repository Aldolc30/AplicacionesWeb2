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