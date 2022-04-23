// 5.	Crear una función flecha que reciba un arreglo de comidas 
// y lo devuelva en mayúsculas y mejoras en su formato de presentación.

const comida = [
    "encebollado",
    "ceviche",
    "seco de pollo",
    "lasagna",
    "guatita",
    "caldo de pata",
    "viche",
    "arroz con huevo",
    "arroz marinero",
    
]

let variable = (comida) => {
    for(let i=0; i<comida.length; i++)
    {
        comida[i] = comida[i].toUpperCase();
        
    }
    return (comida)
}

let variableNew = variable(comida);
console.log("\n----------- LISTA DE COMIDAS -----------");
for (let x=0; x< variableNew.length; x++){
    console.log("PLATO " +(x+1) + ": " + variableNew[x])
}
console.log("------------------------------------------");








