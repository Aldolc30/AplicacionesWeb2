// 3.	Definir un arreglo con sus comidas favoritas, teniendo como base el objeto del punto anterior. 


const Comida= [
    {
        nombre: "Ceviche",
        ingredientes: {
            Ing: "Pescado",
            Ing1: "Cebolla",
            Ing2: "Tomate",
            Ing3: "Pepino",
        },
        tipo: "Plato fuerte",
        precio: 5.00
    },
    {
        nombre: "Encebollado",
        ingredientes: {
            Ing: "Pescado",
            Ing1: "Cebolla",
            Ing2: "Yuca",
        },
        tipo: "Plato fuerte",
        precio: 2.50
    },
    {
        nombre: "Yapingacho",
        ingredientes: {
            Ing: "Arroz",
            Ing1: "Chorizo",
            Ing2: "Papa",
            Ing3: "Huevo",
            Ing4: "Maní"
        },
        tipo: "Plato fuerte",
        precio: 2.00
    },
    {
        nombre: "Lasagna",
        ingredientes: {
            Ing: "Fideo",
            Ing1: "Carne molida",
            Ing2: "Queso",
            Ing3: "Tomate",
        },
        tipo: "Plato fuerte",
        precio: 4.50
    }
]

// function mostrarDatos({nombre, ingredientes:{ Ing, Ing1, Ing2, Ing3 }, tipo, precio})
// {
//     console.log(nombre)
//     console.log(Ing)
//     console.log(Ing1)
//     console.log(Ing2)
//     console.log(Ing3)
//     console.log(tipo)
//     console.log(precio)
// }

// mostrarDatos(Comida);

console.log(Comida);