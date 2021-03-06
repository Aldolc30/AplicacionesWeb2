
// configuración necesaria para conectar la base de datos
const mongoose = require('mongoose');

const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CNN)
        console.log(`Base de datos conectada correctamente... `);
    } catch (error) {
        console.log(`No se pudo conectar a la base de datos`);
        throw new Error(`Error al conectarse a la base de datos`);
    }
}

module.exports = {
    dbConnection
}