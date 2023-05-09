import Citas from "../CLASES/Citas.js"

import interfaz from "../CLASES/interfaz.js";

import {inputnombre, inputpropietario, inputtelefono,inputfecha,inputhora,inputsintomas,formulario} from "../selectores/selectores.js";

// intancias de clase
const Agendarcita = new Citas();
const UIusers = new interfaz();
let editando;
const citaobj = {
    // objeto de informacion
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: "",
  };
  

// funciones principales

 export function datosCita(e) {
    //para llenar objeto con  el atributo name
    citaobj[e.target.name] = e.target.value;
  }
  
  export  function NuevaCita(e) {
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
  
  export   function reinicarObjeto() {
    citaobj.mascota = "";
    citaobj.propietario = "";
    citaobj.telefono = "";
    citaobj.fecha = "";
    citaobj.hora = "";
    citaobj.sintomas = "";
  }
  
  export  function eliminarCard(id) {
    //eliminar cita
    Agendarcita.eliminarCitas(id);
    // MOSTRAR MESAJE DE ELIMINACION
    UIusers.mostarAlerta("Cita eliminada");
    // LISTAR NUEVAMENTE EL ARRAY
    UIusers.mostarcita(Agendarcita);
  }
  
  export  function editarCard(cita) {
    console.log(cita)
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