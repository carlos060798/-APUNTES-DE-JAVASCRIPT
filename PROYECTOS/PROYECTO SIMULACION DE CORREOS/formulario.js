// proyecto de validacion de formulario

document.addEventListener("DOMContentLoaded", () => {


  const datos = {
    email: "",
    asunto: " ",
    mensaje: ""
  }

  // seleccionar elemetos del form

    const email = document.getElementById("email"),
    asunto = document.getElementById("asunto"),
    mensaje = document.getElementById("mensaje"),
    formulario = document.getElementById("formulario"),
    buttonSubmit = document.querySelector("#formulario button[type=submit]");
    buttonSubmit = document.querySelector("#formulario button[type=reset]");


  //eventos del formulario

  email.addEventListener("input", validar);
  asunto.addEventListener("input", validar);
  mensaje.addEventListener("input", validar);




  //funciones principales



  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `el campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
       // para habilitar o desabilitar nuevamnete el boton  de enviar si  se borran los campos 
     datos[e.target.name] ="";
      comprobarDatosObj()
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("email no es valido", e.target.parentElement) 
    // para habilitar o desabilitar nuevamnete el boton  de enviar si  se borran los campos 
      datos[e.target.name] ="";
      comprobarDatosObj()
      return;
    }

    ElimanrAlerta(e.target.parentElement)
    // alacenar datos  desde el formulario en el objeto datos

    datos[e.target.name] = e.target.value.trim().toLowerCase();
    // COMPROBAR DATOS

    comprobarDatosObj()
  }



  // funciones auxiliares

  /**
   *
   * @param {mensaje de alerta} mensaje
   * @param {referencia de documento ha seleccionar} referencia
   */
  function mostrarAlerta(mensaje, referencia) {
    console.log("hubo un error ");

    ElimanrAlerta(referencia)
    /*let existealerta = referencia.querySelector(".bg-red-600");
    if (existealerta) {
      existealerta.remove();
    }*/

    // crea una  alerta
    let alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add("bg-red-600", "text-white", "p-2", "text-center");
    // incrustar error al formulario
    referencia.appendChild(alerta);
  }


  function ElimanrAlerta(referencia) {
    // elimina la alerta si ya fue copiada
    let existealerta = referencia.querySelector(".bg-red-600");
    if (existealerta) {
      existealerta.remove();
    }


  }

  function validarEmail(email) {
    //validacion si el email esta correctamente
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    resultado = regex.test(email);
    console.log(resultado);
    return resultado;
  }


  function comprobarDatosObj() {
    // comprueba si el formulario recibio datos
    if (Object.values(datos).includes("")) {
      buttonSubmit.classList.add("opacity-50")
      buttonSubmit.disabled = true
      return;
    } 
      buttonSubmit.classList.remove("opacity-50")
      buttonSubmit.disabled = false
  
  }

}); 