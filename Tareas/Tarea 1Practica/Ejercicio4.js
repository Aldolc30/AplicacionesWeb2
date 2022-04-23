// 4.	Recorrer el arreglo definido en la opción anterior y mostrarlo aplicando 4 estructuras de repetición.

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
        recio: 5.00
    },
    {
        nombre: "Encebollado",
        ingredientes: {
            Ing: "Pescado",
            Ing1: "Cebolla",
            Ing2: "Yuca",
        },
        tipo: "Plato fuerte",
        recio: 2.50
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
        recio: 2.00
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
        recio: 4.50
    }
]

// Descomentar cada estructura repetitiva 

// ------------- ESTRUCTURA REPETITIVA FOR ---------------

for(let i=0; i < Comida.length; i++){
    const comidafav = Comida[i];
    console.log(comidafav);
}

// -------------------------------------------------------

// ------------- ESTRUCTURA REPETITIVA DO - WHILE  ---------------

// let i = 0
// do {
//     i= i+1;
//     const comidafav = Comida[i];
//     console.log(comidafav)
// } while (i < Comida.length);

// ----------------------------------------------------------

// ------------- ESTRUCTURA REPETITIVA WHILE -------------

// let c = 0;
// while (c < Comida.length) {
//     c= c+1;
//     const comidafav = Comida[c];
//     console.log(comidafav)
// }

// --------------------------------------------------

// ------------- ESTRUCTURA REPETITIVA FOREACH ------------
// Comida.forEach(comidafav => {
//     console.log(comidafav)
// });

// ------------------------

