// variables globales

const carrito= document.querySelector('#carrito');
const listacursos= document.querySelector('#lista-cursos');
const contendorcarrito= document.querySelector('#lista-carrito tbody');
const limpiarcarrito= document.querySelector('#vaciar-carrito');

let carritodecompras=[]
// funcion iniciadora

Carritoinit()


// funcion ejercurtadora de eventos

function Carritoinit(){
  listacursos.addEventListener("click", agregarcursos)

} 


// funciones principáles  por eventos

function agregarcursos(e){
  e.preventDefault()
    if(e.target.classList.contains("agregar-carrito")){
     let cursoselecionado=e.target.parentElement.parentElement     
    leerDatosCursos(cursoselecionado)
    console.log("agregado al carrito ........")
    }
}





// Funciones auxiliares
/*
   leerDatosCursos (cursolecionado) => retorna datos del curso seleccionado  en el carrito
*/ 
function leerDatosCursos(curso){
    console.log(curso) 
  
    //objeto con contenido de informacio del curso
      const infocurso={
  
       image: curso.querySelector("img").src,
       titulo: curso.querySelector("h4").textContent,
       precio:curso.querySelector(".precio span").textContent,
       id:curso.querySelector("a").getAttribute("data-id"),
       cantidad:1
      }
    //agregar al carrito
     carritodecompras=[...carritodecompras,infocurso]
      
     console.log(carritodecompras)
     mostarArticulos();
  }  
  
  
  /*
    mostarArticulos(carritodecompras)=> retorna los elementos en el html visibles
  */
  
  function mostarArticulos(){
  
   // limpia el html visible
    Limpiarhtml()
    // recorre el arreglo y genera el html
      carritodecompras.forEach((curso)=>{
          let articulo=document.createElement("tr")
          articulo.innerHTML=`<td>${curso.titulo}</td>`
      
        contendorcarrito.appendChild(articulo); //agrega al carrito
      })
  } 
  

function Limpiarhtml(){
 // contendorcarrito.innerHTML=""
  while(contendorcarrito.firstChild){
    contendorcarrito.removeChild(contendorcarrito.firstChild)
  }
}