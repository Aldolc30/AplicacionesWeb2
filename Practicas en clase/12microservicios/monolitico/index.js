const servidor = require('./src/app')

servidor.listen(process.env.PORT, ()=>{
    console.log(`Servidor monolitico funcionando 
    en puerto ${process.env.PORT}`);
})