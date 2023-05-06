// VARIABLES GENERALES
const inputnombre = document.querySelector("#mascota");
const inputpropietario = document.querySelector("#propietario");
const inputtelefono = document.querySelector("#telefono");
const inputfecha = document.querySelector("#fecha");
const inputhora = document.querySelector("#hora");
const inputsintomas = document.querySelector("#sintomas");
const formulario = document.querySelector("#nuevascita");
const contenedordecitas = document.querySelector("#citas");

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
    this.citas = [];
  }
  agregarCitas(cita) {
    this.citas = [...this.citas, cita];
  }
  eliminarCitas(id) {
    this.citas= this.citas.filter(cita => cita.id!==id)
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
  mostarcita({citas}){

  console.log(citas)
  this.limpiarHtml()
    citas.forEach(cita => {
      const {mascota, propietario, telefono, fecha, hora, sintomas,id }=cita 
      const divCita=document.createElement("div")
      divCita.classList.add("cita","p-3")
      divCita.dataset.id = id 

      //agregar eleemtos a una card
      const mascotaCard=`<div class="card" style="width: 18rem;">
      <div class="card-header">
         <h2>${mascota}<h2>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${propietario}</li>
        <li class="list-group-item">${telefono}</li>
        <li class="list-group-item">${fecha}</li>
        <li class="list-group-item">${hora}</li>
        <li class="list-group-item">${sintomas}</li>
        <li class="list-group-item"><button class="btn btn-danger text-center  h3" onclick="eliminarCard(${id})">x</button><button class="btn btn-success text-center h3 mx-5">➕</button></li>
      </ul>
     
    </div>`

      divCita.innerHTML=mascotaCard
      contenedordecitas.appendChild(divCita);

    });
  
  } 
  limpiarHtml(){
    while( contenedordecitas.firstChild){
      contenedordecitas.removeChild(contenedordecitas.firstChild);
    }
  }
}

const Agendarcita = new Citas();
const UIusers = new interfaz();
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

  //generar un id
  citaobj.id = Date.now();
  // agregar una cita a la clase agendarcita
  Agendarcita.agregarCitas({ ...citaobj });
  reinicarObjeto();
  formulario.reset();

  UIusers.mostarcita(Agendarcita)
}

function reinicarObjeto() {
  citaobj.mascota = "";
  citaobj.propietario = "";
  citaobj.telefono = "";
  citaobj.fecha = "";
  citaobj.hora = "";
  citaobj.sintomas = "";
}

function eliminarCard(id){

 //eliminar cita
 Agendarcita.eliminarCitas(id);
// MOSTRAR MESAJE DE ELIMINACION
 UIusers.mostarAlerta("Cita eliminada");
// LISTAR NUEVAMENTE EL ARRAY
  UIusers.mostarcita( Agendarcita)
}