// npm init --y
// npm i mongoose

const mongoose = require('mongoose');
const conexion = "mongodb+srv://Aldo:Aldo123@cluster0.p6xsj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Caso de relación de uno a muchos
// (async () => {
//     const estadoConexion = await mongoose.connect(conexion);

//     const Grupo = mongoose.model("Grupo", { nombre: String });
//     const Usuario = mongoose.model("Usuario",
//         {
//             nombre: String,
//             idgrupo: { type: mongoose.Types.ObjectId, ref: "Grupo" }
//         }
//     );

//     const grupo1 = new Grupo({ nombre: "Administradores" });
//     const guardoGrupo = await grupo1.save();

//     const usuario1 = new Usuario(
//         {
//             nombre: "Aldo",
//             // Colocar el id del usuario en el grupo
//             idgrupo: guardoGrupo._id
//         }
//     );
//     const guardado = await usuario1.save();
//     const resultado = await Usuario.find();
//     console.log(resultado)
// })();


// --------- Relación muchos a muchos, cuando se tiene más datos en la tabla intermedia ----------------------


