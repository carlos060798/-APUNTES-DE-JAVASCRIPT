// variables de document
const marca=document.querySelector("#marca"),
 year=document.querySelector("#year"),
 precioMin=document.querySelector("#minimo"),
 precioMax=document.querySelector("#maximo"), 
 puertas=document.querySelector("#puertas"),
 transmision=document.querySelector("#transmision"),
 color=document.querySelector("#color");

const resultado= document.querySelector("#resultado");


const max=new Date().getUTCFullYear()
const min=max-10
console.log(max, min)

//variables de manejo de datos

const datosBusqueda={
        marca: "",    
        year: "", 
        precioMin:"", 
        precioMax:"", 
        puertas: "", 
        color:"", 
        transmision:""
}

// eventos globales

document.addEventListener("DOMContentLoaded",()=>{
   
   
    mostarAutos (autos) // cargar los datos de carros del array de autos
    generarYear() // generar AÑO del select
    
    
    
    
    
}) 
//eventos por componete


    marca.addEventListener('change',(e)=>{
    datosBusqueda.marca=e.target.value
    filtarAuto()
   })
   year.addEventListener('change',(e)=>{
    datosBusqueda.year=e.target.value
    filtarAuto()
   
   })
   precioMin.addEventListener('change',(e)=>{
    datosBusqueda.precioMin=e.target.value
    filtarAuto()
   })
   precioMax.addEventListener('change',(e)=>{
    datosBusqueda.precioMax=e.target.value
    filtarAuto()
   })
   puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas=e.target.value
    filtarAuto()
   })
   transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision=e.target.value
    filtarAuto()
   })
   color.addEventListener('change',(e)=>{
    datosBusqueda.color=e.target.value
    filtarAuto()
   }) 

console.log(datosBusqueda)
//funciones

function mostarAutos(autos){

limpiarHtml()
autos.forEach( auto=>{
    const autohtml= document.createElement("p");
    
    autohtml.textContent=`
    ${auto.marca}
    ${auto.modelo}
    ${auto.precio}
    ${auto.puertas}   
    ${auto.transmision}   
    ${auto.year}

    
    `;

    resultado.appendChild(autohtml)
})
}

 function generarYear(){
  for(let i=max;i>min;i--){
    const option=document.createElement("option")
    option.textContent=i
    year.appendChild(option)
 }
}
function filtarAuto(){
    // funcion de criterios de busqueda por item
    const resultado=autos.filter(fiLtrarMarca).filter(filtarYear).filter(filtarPreciomin).filter(filtarPreciomax).filter(filtarNpuertas).filter(fiLtrarTrasmision).filter(fiLtrarCOLOR)
    console.log(resultado) 
   if(resultado.length){
    mostarAutos(resultado)
   }else{
   noResultado()
   }
    
   } 


//funciones auxilaires



function fiLtrarMarca(auto){ 
// funcion par afiltrar autos por marca
   const {marca}= datosBusqueda
  if(marca){
    return auto.marca === marca
  }
  return auto;
}

function filtarYear(auto){
// recordar convertir los datos del input a un entero siempre para poder comparar
    const {year}= datosBusqueda
    if(year){
      return auto.year === Number(year)
    }
    return auto;
}  

function limpiarHtml(){
  while(resultado.firstChild){
     resultado.removeChild(resultado.firstChild);
  }
}

function filtarPreciomin(auto){
  const {precioMin}= datosBusqueda
  if(precioMin){
    return auto.precio >= precioMin
  }
  return auto;
} 


function filtarPreciomax(auto){
  const {precioMax}= datosBusqueda
  if(precioMax){
    return auto.precio >= precioMax
  }
  return auto;
}  
function filtarNpuertas(auto){
  // recordar convertir los datos del input a un entero siempre para poder comparar
      const {puertas}= datosBusqueda
      if(puertas){
        return auto.puertas === Number(puertas)
      }
      return auto;
  }  

function fiLtrarTrasmision(auto){ 
  // funcion par afiltrar autos por marca
     const {transmision}= datosBusqueda
    if(transmision){
      return auto.transmision === transmision
    }
    return auto;
  }
function fiLtrarCOLOR(auto){ 
  // funcion par afiltrar autos por marca
     const {color}= datosBusqueda
    if(color){
      return auto.color === color
    }
    return auto;
  } 

function noResultado(){
limpiarHtml()
// estas lineas crean la alarta y la asingnan despues del resultado
  const noResultado=document.createElement("div");
  resultado.classList.add("alert","error","Text-center")
  noResultado.textContent="No hay resultados por esos para metros ingrese nuevos"
  resultado.appendChild(noResultado)
}
