//Nombre: Sergio Aldair Lino Canales

// 1.	Crear una función que reciba N como parámetro y genere la tabla de multiplicar por consola de este parámetro

process.stdout.write("Ingrese un numero por favor ");
process.stdin.on('data', function(data){
    for(let i=1;i<13;i++)
    {
        process.stdout.write(`\n ${data.toString().trim()} x ${i} = ` + (data*i) );
    }
    process.exit();
});
 
 