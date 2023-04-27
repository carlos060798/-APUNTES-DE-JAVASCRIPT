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
   })
   precioMax.addEventListener('change',(e)=>{
    datosBusqueda.precioMax=e.target.value
 
   })
   puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas=e.target.value
  
   })
   transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision=e.target.value
   
   })
   color.addEventListener('change',(e)=>{
    datosBusqueda.color=e.target.value
    
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
    const resultado=autos.filter(fiLtrarMarca).filter(filtarYear)
    console.log(resultado) 
    mostarAutos(resultado)
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
