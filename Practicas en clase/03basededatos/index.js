// npm init --y
// npm i mongoose

const mongoose = require('mongoose');
const conexion = "mongodb+srv://Aldo:Aldo123@cluster0.p6xsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

(async ()=>{
    const estadoConexion = await mongoose.connect(conexion); 
    const Usuario = mongoose.model("Usuario", {nombre: String});
    const usuario1 = new Usuario({nombre:"Prueba sexto A"});
    const guardado  = await usuario1.save();
    const resultado = await Usuario.find();
    console.log(resultado)
})();

