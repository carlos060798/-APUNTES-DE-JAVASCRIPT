// proyecto de validacion de formulario

document.addEventListener("DOMContentLoaded", () => {
  // seleccionar elemetos del form

  const email = document.getElementById("email"),
    asunto = document.getElementById("asunto"),
    mensaje = document.getElementById("mensaje");
  formulario = document.getElementById("formulario");

  //eventos del formulario

  email.addEventListener("blur", validar);
  asunto.addEventListener("blur", validar);

  mensaje.addEventListener("blur", validar);

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `el campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      return;
    } 
   
    if(e.target.id === "email" && !validarEmail(e.target.value)){
      mostrarAlerta("email no es valido", e.target.parentElement)
      return;
   }
    
   ElimanrAlerta( e.target.parentElement)

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
}); 


function ElimanrAlerta(referencia){
   // elimina la alerta si ya fue copiada
   let existealerta = referencia.querySelector(".bg-red-600");
   if (existealerta) {
     existealerta.remove();
   }


}
 
function validarEmail(email) {
//validacion si el email esta correctamente
  const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
  resultado=regex.test(email);
  console.log(resultado);
  return resultado;
}
