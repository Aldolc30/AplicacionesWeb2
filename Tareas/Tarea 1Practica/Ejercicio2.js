//2. Crear un objeto Comida que tenga como parámetros: nombre, ingredientes, 
//tipo(ensalada, plata fuerte, entrada, etc) y cualquier otro atributo 
//que considere importante para su diseño.

const Comida= {
    nombre: "Ceviche",
    ingredientes: {
        Ing: "Pescado",
        Ing1: "Cebolla",
        Ing2: "Tomate",
        Ing3: "Pepino",
    },
    tipo: "Plato fuerte",
    precio: 5.00
}

function mostrarDatos({nombre, ingredientes:{ Ing, Ing1, Ing2, Ing3 }, tipo, precio})
{
    console.log(nombre)
    console.log(Ing)
    console.log(Ing1)
    console.log(Ing2)
    console.log(Ing3)
    console.log(tipo)
    console.log(precio)
}

mostrarDatos(Comida);

