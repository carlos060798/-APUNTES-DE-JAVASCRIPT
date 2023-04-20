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
  carrito.addEventListener("click",Eliminarcursos)
  limpiarcarrito.addEventListener("click",limpiarCarrito)

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


function Eliminarcursos(e){
  if(e.target.classList.contains("borrar-curso")){
  let cursoId=e.target.getAttribute("data-id")
   // para eliminar los cursos del carrito por data-id
  carritodecompras=carritodecompras.filter(curso=> curso.id !==cursoId) 

  mostarArticulos()





  }
}

function  limpiarCarrito(){
  carritodecompras=[] // para formaterar el array de carritodecompras
  Limpiarhtml()
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
    // ver si el elemeto ya existe en el carrito para  no agregar si no aumentar  la cantidad
    let cursoExiste=carritodecompras.some(curso=>curso.id===infocurso.id);
    if(cursoExiste){
      // actualizamos cantidad
      let cursos=carritodecompras.map(curso=>{
        if(curso.id===infocurso.id){
          curso.cantidad++;
          return curso; // retorna cursos actulizados en cantidad
        }else{
          return curso;
        }
      })
      carritodecompras=[...cursos] // retona cursos en la cantidad de uno 
    }else{
      
    //agregar al carrito
     carritodecompras=[...carritodecompras,infocurso]
    }

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
       const {image,titulo,precio,cantidad,id}= curso;
          let articulo=document.createElement("tr")
          articulo.innerHTML=`
          <img src="${image}" width="100">
          <td>${titulo}</td> 
          <td>${precio}</td> 
          <td>${cantidad}<td>
          <a class="borrar-curso" data-id="${id}">x</a>`
      
        contendorcarrito.appendChild(articulo); //agrega al carrito
      })
  } 
  

function Limpiarhtml(){
 // contendorcarrito.innerHTML=""
  while(contendorcarrito.firstChild){
    contendorcarrito.removeChild(contendorcarrito.firstChild)
  }
}