import './style.css'

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
  <br>
  <label for='nombre_cliente'> Nombre </label> <input id = 'nombre_cliente' /> <br>
  <label for='cedula'> Cedula </label> <input id = 'cedula' /> <br>
  <label for='edad'> Edad </label> <input id = 'edad' /> <br>
  <label for='telefono'> Telefono </label> <input id = 'telefono' /> <br>
  <label for='facultad'> Facultad </label> <input id = 'facultad' /> <br>
  <label for='user'> User </label> <input id = 'user' /> <br>
  <label for='password'> Password </label> <input id = 'password' /> <br>

  <button id="clear"> Limpiar </button>
  <button id="crear"> Crear </button>
  <button id="consultar"> Consultar </button>

  <div id="cuerpo"/>

`

const clear = document.querySelector<HTMLButtonElement>("#clear")!;
const crear = document.querySelector<HTMLButtonElement>("#crear")!;
const consultar = document.querySelector<HTMLButtonElement>("#consultar")!;