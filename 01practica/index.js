let variable = 0
const constante = 12



const mostrarLista = (tope) =>
{
    for (let i=0; i<tope;i++)
    {
        console.log(i)
    }
}

function llamarFuncion(fn,parametro){
    console.log(fn(parametro))
}

llamarFuncion(mostrarLista,7);
