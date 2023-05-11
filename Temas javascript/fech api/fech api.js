// fech api

const cargardatos=document.querySelector("#cargarTxt") 

const cargarJson=document.querySelector("#cargarJSON") 
const cargarJsonarr=document.querySelector("#cargarJSONArray")
const muestras=document.querySelector(".muestra")
const btnapi = document.getElementById("cargarAPI") 

// ejemplo del consumo basico de datos por fech api

cargardatos.addEventListener( "click", () => {
  // se usa  fech para hacer la consulta recibe una url de donde provienen los datos
 let url="data/datos.txt"
  fetch(url)
  .then(respond=>{console.log(respond);
     return respond.text()}) // devuelve la respuesta de  la consulta
    .then(datos=>console.log(datos)) // muestra la respuesta de la consulta
  //manejo de error
  .catch(err=>{console.log(err)}); //
  }) 



// EJEMPLO DE CONSULTAR LOS JSON POR fetch 

cargarJson.addEventListener( "click", () => {
  // se usa  fech para hacer la consulta recibe una url de donde provienen los datos
 let url="data/empleado.json"
  fetch(url)
  .then(respond=>{console.log(respond);
     return respond.json()}) // devuelve la respuesta de  la consulta
    .then(datos=>mostrar (datos)) // muestra la respuesta de la consulta
  //manejo de error
  .catch(err=>{console.log(err)}); //
  }) 
  

function mostrar ({nombre,empresa,trabajo}) {
 const lista= document.createElement('ul');

 const li=`<li>
 <h2>${nombre}</h2>
 <p>${empresa}</p>
 <p>${trabajo}</P>
 </li>`

 lista.innerHTML=li

 muestras.appendChild(lista)
} 


//CARGAR  UN JSON EN formto array 

cargarJsonarr.addEventListener("click", ()=>{
    // se usa  fech para hacer la consulta recibe una url de donde provienen los datos
 let url="data/empleados.json"
 fetch(url)
 .then(respond=>{ return respond.json()}) // devuelve la respuesta de  la consulta
   .then(repuesta=> mostraARRay(repuesta)) // muestra la respuesta de la consulta
 //manejo de error
 .catch(err=>{console.log(err)}); //
 }) 


 function mostraARRay(empleados) {
  empleados.forEach(empleado=>{
 const {id,nombre,empresa,trabajo} = empleado
 const lista= document.createElement('ul');
 const li=`<li>
 <p>${id}</p>
 <h2>${nombre}</h2>
 <p>${empresa}</p>
 <p>${trabajo}</P>
 </li>`

 lista.innerHTML=li

 muestras.appendChild(lista)
  })
 } 


 btnapi.addEventListener("click", mostardatosapi)
 function mostardatosapi() {
  const url = "https://picsum.photos/list"
  fetch(url).then(resolve=> resolve.json()).then(respuesta=> {listrardatos(respuesta)})
  
  }
  //ejemplo de consumo de api externa 

  function listrardatos(Datos){
      Datos.forEach(datos=>{
          const {author,post_url} =datos
          const lista= document.createElement('ul');
          const li=`<li>
          <h4>${author}</h4>
          <a href="${post_url}">ver Imagen </a>  
           
          </li>`
         
          lista.innerHTML=li
         
          muestras.appendChild(lista)  })
  }