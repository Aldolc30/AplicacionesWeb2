const servidor = require('./src/app')

servidor.listen(process.env.PORT, ()=>{
    console.log(`Microservicio productos funcionando 
    en puerto ${process.env.PORT}`);
})