// variables de  globales
const contenedor = document.querySelector(".container");
const respuesta = document.querySelector("#respuesta");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
  formulario.addEventListener("submit", buscarclima);
});

// funciones principales
function buscarclima(e) {
  e.preventDefault();
  //validacion de datos
  const cuidad = document.querySelector("#ciudad").value;
  const pais = document.querySelector("#pais").value;

  if (cuidad === "" || pais === "") {
    mostarError("Ambos campos son obligatorios"); 
  } 
  // consultar api

  consultaApi(cuidad,pais)
}
function consultaApi(ciudad,pais){
  // llamados dl api
  const appId="fbe02affa6fae184698b24480915c66a" // llave para aceder por id
  const url=`http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}` // url del api
  fetch(url).then(response => response.json())
  .then(datos => {
  limpiarHtml()
  if(datos.cod ==="404"){
    mostarError("cuidad no encontrada");
  }
  // mostar en el html
  MostrarResultado(datos)
  });
}
// funciones segundarias

function mostarError(mensaje) {
  const alerta = document.querySelector(".alerta");
  if (!alerta) {
  //crar alerta
    const alerta = document.createElement("div");
    alerta.classList.add(
      "alerta",
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-md",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    alerta.innerHTML = `
<strong class="font-bold">Error</strong>
<strong class="block">${mensaje}</strong>`;
    contenedor.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function MostrarResultado(datos){
  console.log(datos)

  // desestruturacion del obejto main del objeto datos

  const  {name,main:{ temp,temp_max,temp_min}}=datos
 
 //convertir temperaturas
 const tempActual=convertirGrados(temp)
 const tempMinima=convertirGrados(temp_min) 
 const tempMaxima=convertirGrados(temp_max)
  //mostar en html
  const cuidad=document.createElement('p')
  cuidad.innerHTML=`Clima en ${name}` 
  cuidad.classList.add('font-bold','text-2xl')

  const p=document.createElement('p')
  p.innerHTML=`Temperatura ${tempActual} °C` 
  p.classList.add('font-bold','text-3xl')
  const p3=document.createElement('p')
  p3.innerHTML=`Temperatura Minima ${tempMinima} °C` 
  p3.classList.add('font-bold','text-3x')

  const p2=document.createElement('p')
  p2.innerHTML=`Temperatura Maxima ${tempMaxima} °C` 
  p2.classList.add('font-bold','text-3x') 



  const div = document.createElement('div')
  div.classList.add('text-center','text-white')

  div.appendChild(cuidad) 
  div.appendChild(p) 
  div.appendChild(p3) 
  div.appendChild(p2) 

  
 
 respuesta.appendChild(div)
} 

function limpiarHtml(){
  while(respuesta.firstChild){
    respuesta.removeChild(respuesta.firstChild)
  }
}

function convertirGrados(grados){
 return parseInt(grados-273.15)
}