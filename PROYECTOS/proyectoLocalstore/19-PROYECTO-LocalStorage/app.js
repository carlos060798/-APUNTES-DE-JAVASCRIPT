/// variables
const formulario = document.querySelector("#formulario");
listaTues = document.querySelector("#lista-tweets");

let arraydeTues = [];



/// funcion ejecutora
initApp();

/// funciones  principales
function initApp() {
 //para agregar al documento el mensaje
  formulario.addEventListener("submit", agregaTue);

  // para persistir el mensaje del formualrio del Localstrore 
  document.addEventListener("DOMContentLoaded",()=>{
    // DEVUELVE EL VALOR DEL LOCALSTORAGE SI EXISTE SI NO ASIGANA UN [] PARA EVIATAR EL NULL
    arraydeTues=JSON.parse(localStorage.getItem("mensaje")) || []; 
    console.log(arraydeTues
    ) 
    MostarHtmlmesajes()
  })



}

// funcion segundaria

function agregaTue(e) {
  e.preventDefault();

  //agregar mensaje creado

  const mensaje = document.querySelector("#tweet").value;

  if (mensaje === "") {
    mostarError("que pasa papa estoy vacio");
    return;
  }
  // creador de id mediante fecha de creacion para el mensaje

  const tweetsObj = {
    id: Date.now(),
    tweet: mensaje,
  };

  // agregar los mensajes ala fila de mensajes en arrar

  arraydeTues = [...arraydeTues, tweetsObj];

  MostarHtmlmesajes();
  console.log(arraydeTues);

  formulario.reset();
}

function mostarError(error) {
  //creacion de html dianmico de error

  const errorMsg = document.createElement("p");
  errorMsg.classList.add("error");
  errorMsg.textContent = error;

  // agregar el errorMsg  en el html

  const contenidos = document.querySelector("#contenido");

  contenidos.appendChild(errorMsg);

  setTimeout(() => {
    errorMsg.remove();
  }, 3000);
}

function MostarHtmlmesajes() {
  limpiarHTML();
  if (arraydeTues.length > 0) {
    arraydeTues.forEach((tweet) => { 

      // creando boton de eliminar
      const btnelminar=document.createElement("a");
      btnelminar.classList.add("borrar-tweet") 
      btnelminar.textContent="x"
     // añadiendo la funcion de eliminar 

      btnelminar.onclick=()=>{
        borrarLocalStoreMensaje(tweet.id)
      }



      // agregar mensajes al li y el boton
      const li = document.createElement("li");
      li.innerText = tweet.tweet;
      li.appendChild(btnelminar)
      listaTues.appendChild(li);
    });
  }
  GuardarStorage()
}

function limpiarHTML() {
  while (listaTues.firstChild) {
    listaTues.removeChild(listaTues.firstChild);
  }
}

// persistencia del localstorage

function GuardarStorage() {
  localStorage.setItem("mensaje", JSON.stringify(arraydeTues));

}

// elimianr mensaje de html y localstorage
function borrarLocalStoreMensaje(id){
  arraydeTues=arraydeTues.filter(tweet=>tweet.id !== id)
  console.log("borrarando localstorage",id)
  MostarHtmlmesajes()
}