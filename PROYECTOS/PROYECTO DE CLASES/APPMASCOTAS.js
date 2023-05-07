// VARIABLES GENERALES
const inputnombre = document.querySelector("#mascota");
const inputpropietario = document.querySelector("#propietario");
const inputtelefono = document.querySelector("#telefono");
const inputfecha = document.querySelector("#fecha");
const inputhora = document.querySelector("#hora");
const inputsintomas = document.querySelector("#sintomas");
const formulario = document.querySelector("#nuevascita");
const contenedordecitas = document.querySelector("#citas");
let editando;
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
    this.citas = this.citas.filter((cita) => cita.id !== id);
  } 
  editarCita(citaEdit){
  this.citas = this.citas.map(cita => cita.id === citaEdit.id ? citaEdit:cita);
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
  mostarcita({ citas }) {
    // Se puede aplicar destructuring desde la función...

    this.limpiarHtml();

    citas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;

      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      // scRIPTING DE LOS ELEMENTOS...
      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-title", "font-weight-bolder");
      mascotaParrafo.innerHTML = `${mascota}`;

      const propietarioParrafo = document.createElement("p");
      propietarioParrafo.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}`;

      const telefonoParrafo = document.createElement("p");
      telefonoParrafo.innerHTML = `<span class="font-weight-bolder">Teléfono: </span> ${telefono}`;

      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}`;

      const horaParrafo = document.createElement("p");
      horaParrafo.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}`;

      const sintomasParrafo = document.createElement("p");
      sintomasParrafo.innerHTML = `<span class="font-weight-bolder">Síntomas: </span> ${sintomas}`;

      // Agregar un botón de eliminar...
      const btnEliminar = document.createElement("button");
      btnEliminar.onclick = () => eliminarCard(id); // añade la opción de eliminar
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.innerHTML =
        'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';

      // Añade un botón de editar...
      const btnEditar = document.createElement("button");
      btnEditar.onclick = () => editarCard(cita);

      btnEditar.classList.add("btn", "btn-info");
      btnEditar.innerHTML =
        'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

      // Agregar al HTML
      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);

      contenedordecitas.appendChild(divCita);
    });
  }

  limpiarHtml() {
    while (contenedordecitas.firstChild) {
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
  if(editando){
    UIusers.mostarAlerta("Cita actualizada") 
    formulario.querySelector('button[type="submit"]').textContent =
    "Crear Cita";
    // se pasan los datos de la cita editados
    Agendarcita.editarCita({ ...citaobj })




    //quitar modo de edicion
    editando=false

  }else{
  //generar un id
  citaobj.id = Date.now();
  // agregar una cita a la clase agendarcita
  Agendarcita.agregarCitas({ ...citaobj });
  //mostar alerta de actualiado
  UIusers.mostarAlerta("Cita creada con exito")
  }


  reinicarObjeto();
  formulario.reset();

  UIusers.mostarcita(Agendarcita);
}

function reinicarObjeto() {
  citaobj.mascota = "";
  citaobj.propietario = "";
  citaobj.telefono = "";
  citaobj.fecha = "";
  citaobj.hora = "";
  citaobj.sintomas = "";
}

function eliminarCard(id) {
  //eliminar cita
  Agendarcita.eliminarCitas(id);
  // MOSTRAR MESAJE DE ELIMINACION
  UIusers.mostarAlerta("Cita eliminada");
  // LISTAR NUEVAMENTE EL ARRAY
  UIusers.mostarcita(Agendarcita);
}

function editarCard(cita) {
  // para listar  los datos  a  editar en el form
  const { mascota, propietario, telefono, fecha, hora, sintomas,id } = cita;
  inputnombre.value = mascota;
  inputpropietario.value = propietario;
  inputtelefono.value = telefono;
  inputfecha.value = fecha;
  inputhora.value = hora;
  inputsintomas.value = sintomas; 

  // llenar daros editados
  citaobj.mascota=mascota
  citaobj.propietario=propietario
  citaobj.telefono=telefono
  citaobj.fecha=fecha
  citaobj.hora=hora
  citaobj.sintomas=sintomas
  citaobj.id=id

  //cambiar texto del boton
  formulario.querySelector('button[type="submit"]').textContent =
    "Guardar cambios";
  //para conocer si  es una edicion o un nuevo ingreso
  editando = true;
}
