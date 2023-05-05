// VARIABLES GENERALES
const inputnombre = document.querySelector("#mascota");
const inputpropietario = document.querySelector("#propietario");
const inputtelefono = document.querySelector("#telefono");
const inputfecha = document.querySelector("#fecha");
const inputhora = document.querySelector("#hora");
const inputsintomas = document.querySelector("#sintomas");
const formulario = document.querySelector("#nuevascita");
const citas = document.querySelector("#citas");

initapp();

//variables  globales

const citaobj = {
  // objeto de informacion
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

class Citas {
  constructor() {
    this.cita = [];
  }
}

class interfaz {
  mostarAlerta(mensaje, tipo) {
    const alerta = document.createElement("div");
    alerta.classList.add("text-center", "alert", "col-12", "d-block");

    if (tipo === "error") {
      alerta.classList.add("alert-danger");
    } else {
      alerta.classList.add("alert-success");
    }
    alerta.textContent = mensaje;
    document
      .querySelector("#contenido")
      .insertBefore(alerta, document.querySelector(".agregar-cita"));

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

const Agendarcita= new Citas()
const UIusers= new interfaz()
// funcion ejecutadora de eventos

function initapp() {
  inputnombre.addEventListener("input", datosCita);
  inputpropietario.addEventListener("input", datosCita);
  inputtelefono.addEventListener("input", datosCita);
  inputfecha.addEventListener("input", datosCita);
  inputhora.addEventListener("input", datosCita);
  inputsintomas.addEventListener("input", datosCita);

  //eventos formulario y boton

  formulario.addEventListener("submit", NuevaCita);
}

// funciones principales

function datosCita(e) {
  //para llenar objeto con  el atributo name
  citaobj[e.target.name] = e.target.value;
  console.log(citaobj);
}

function NuevaCita(e) {
  e.preventDefault();
  // se extrae infomacion del objeto citasobj

  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaobj;
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas === ""
  ) {
    UIusers.mostarAlerta("campos vacios", "error");

    return;
  }
}
