import './style.css'
import { registrar, editar, consultar, eliminar, limpiar } from './controllers/cliente';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Ruta Cliente</h1>
`
const etiqueta = document.createElement("label")!;
etiqueta.textContent=`ID`
const input = document.createElement("input")!;
input.id="id"

etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);

app.innerHTML += `
  <br><br>
  <label for='nombre_cliente'> Nombre </label> <input id = 'nombre_cliente' /> <br><br>
  <label for='cedula'> Cedula </label> <input id = 'cedula' /> <br><br>
  <label for='edad'> Edad </label> <input id = 'edad' /> <br><br>
  <label for='telefono'> Telefono </label> <input id = 'telefono' /> <br><br>
  <label for='facultad'> Facultad </label> <input id = 'facultad' /> <br><br>
  <label for='user'> User </label> <input id = 'user' /> <br><br>
  <label for='password'> Password </label> <input id = 'password' /> <br><br>

  <button id="limpiar"> Limpiar </button>
  <button id="crear"> Crear </button>
  <button id="consultar"> Consultar </button>
  <button id="editar"> Editar </button>
  <button id="eliminar"> Eliminar </button>


  <div id="cuerpo"/>

`

const clear = document.querySelector<HTMLButtonElement>("#limpiar")!;
const create = document.querySelector<HTMLButtonElement>("#crear")!;
const consult = document.querySelector<HTMLButtonElement>("#consultar")!;
const edit= document.querySelector<HTMLButtonElement>("#editar")!;
const eliminate = document.querySelector<HTMLButtonElement>("#eliminar")!;

const id = document.querySelector<HTMLButtonElement>("#id")!;
const nombre_cliente = document.querySelector<HTMLButtonElement>("#nombre_cliente")!;
const cedula = document.querySelector<HTMLButtonElement>("#cedula")!;
const edad = document.querySelector<HTMLButtonElement>("#edad")!;
const telefono = document.querySelector<HTMLButtonElement>("#telefono")!;
const facultad = document.querySelector<HTMLButtonElement>("#facultad")!;
const user = document.querySelector<HTMLButtonElement>("#user")!;
const password = document.querySelector<HTMLButtonElement>("#password")!;
const cuerpo = document.querySelector<HTMLDivElement>("#cuerpo")!;


create.addEventListener('click', ()=>{
  registrar(
    nombre_cliente,
    cedula,
    edad,
    telefono,
    facultad,
    user,
    password
  )
})

edit.addEventListener('click', ()=>{
  editar(
    id,
    nombre_cliente,
    cedula,
    edad,
    telefono,
    facultad,
    user,
    password
  )
})

consult.addEventListener('click', ()=>{
  consultar(
    id,
    nombre_cliente,
    cedula,
    edad,
    telefono,
    facultad,
    user,
    password,
    cuerpo
  )
})

eliminate.addEventListener('click', ()=>{
  eliminar(
    id
  )
})

clear.addEventListener('click', ()=>{
  limpiar(
    id,
    nombre_cliente,
    cedula,
    edad,
    telefono,
    facultad,
    user,
    password
  )
})