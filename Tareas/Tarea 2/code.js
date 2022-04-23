const form = document.getElementById("form");
window.onload = () => {
    document
      .querySelector(".send-button")
      .addEventListener("click", e => validateForm(e));
  };

  form.addEventListener("send-button", (e) => {
    e.preventDefault();
    let condicion = validateForm();
    if (condicion) {
        form.reset();
    }
});

function validateForm(e) {
    e.preventDefault();
    const nombres = document.getElementById("nombres");
    if (nombres.value.length < 1 || nombres.value.trim() == "") {
      document.getElementById("n-error").innerHTML = "Nombre no válido";
      condicion = false;
    }
    const apellidos = document.getElementById("apellidos");
    if (apellidos.value.length < 1 || apellidos.value.trim() == "") {
        document.getElementById("a-error").innerHTML = "Apellido no válido";
        condicion = false;
    }
    const correo = document.getElementById("correo");
    if (correo.value.length < 1 || correo.value.trim() == "") {
        document.getElementById("c-error").innerHTML =  "Correo electrónico no válido";
        condicion = false;
    }
    const contrasena = document.getElementById("contrasena");
    if (contrasena.value.length < 1 || contrasena.value.trim() == "") {
        document.getElementById("p-error").innerHTML =  "Contraseña no válida";
        condicion = false;
      }
    const contrasena2 = document.getElementById("contrasena2");
      if (contrasena2.value != contrasena.value) {
        document.getElementById("p2-error").innerHTML =  "La contraseña ingresada no coincide";
        condicion = false;
    }
    const direccion = document.getElementById("direccion");
      if (direccion.value.length < 1 || direccion.value.trim() == "") {
        document.getElementById("d-error").innerHTML =  "Ingrese una dirección valida";
        condicion = false;
    }
    const terminos = document.getElementById("terminos");
    if (!terminos.checked) {
        document.getElementById("t-error").innerHTML =  "Por favor, acepte los términos y condiciones";
        condicion = false;
    } else {
        document.getElementById("t-error").innerHTML = "";
    }
    return condicion;
    
}


