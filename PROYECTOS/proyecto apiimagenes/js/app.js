const resultado = document.querySelector("#resultado");
const paginacionDiv = document.querySelector("#paginacion");
const formulario = document.querySelector("#form");
console.log(resultado);

//variables para la paginacion 

const registrosPagina=40 
let  totalPaginas;
let iterador;
let paginainicial=1;
//EVENTOS DE PAGINA

window.onload = () => {
  formulario.addEventListener("submit", validarformulario);
};

function validarformulario(e) {
  e.preventDefault();
  console.log("cosultar");
  const termino = document.querySelector("#term").value;
  console.log(termino);
  if (termino === "") {
    mensajealerta("campos vacios");
    return;
  }
  Buscarimagenes();
}

//funcion de consultar API

function Buscarimagenes() {
  const key = "36463902-f0804003049f9d54a40d1596b";
  const palabra = document.querySelector("#term").value;
  const url = `https://pixabay.com/api/?key=${key}&q=${palabra}&per_page=${registrosPagina}&page=${paginainicial}`;

  fetch(url)
    .then((respusta) => respusta.json())
    .then((respuesta) => {
      console.log(respuesta)
      totalPaginas =  PaginacionImg( respuesta.totalHits) // muestra las imagenes
      console.log(totalPaginas)
      mostraimagen(respuesta.hits)
      
    });
} 
//generrador de paginacion que determina cuando dar el salto ala siguinete


function *crearpaginador(total) {
  for(let i=1; i<=total; i++) {
    yield i; //para registrar el valor del iterador
  }
}

// funcion para hacer la paginacion  
function PaginacionImg(total) {
return parseInt(Math.ceil(total/registrosPagina))

}
//funciones auxilirares

function mensajealerta(mensaje) {
  const alerta = document.querySelector(".bg-red-100");
  if (!alerta) {
    const alerta = document.createElement("p");

    alerta.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );

    alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

    formulario.appendChild(alerta);
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

function mostraimagen(imagenes) {
  console.log(imagenes);

  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
  //iterar arrglo de imagenes
  imagenes.forEach((img) => {
    const { previewURL, views, likes, largeImageURL } = img;  // desestructuracion del objeto imagen

    resultado.innerHTML += `
    <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
    <div class="bg-white">
    <img class="w-full" src="${previewURL}"/>
    <div class="">  
    <p class="font-bold">${likes} <span class="font-bold">me gusta</span></p>
    <p class="font-bold">${views} <span class="font-bold">vistas</span></p>

    <a href=${largeImageURL} 
    rel="noopener noreferrer" 
    target="_blank" 
    class="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase 
    hover:bg-blue-500 text-white">Ver Imagen</a>
    </div>

    </div>
    </div>
    `;
  }); 
//limpiando el html de paginadores anteriores en nueva consulta

 while(paginacionDiv.firstChild){
  paginacionDiv.removeChild(paginacionDiv.firstChild);
 }

 //para crear la paginacion de imagenes una vez creadas en el htl

 imprimiriterador()
}


function imprimiriterador(){
  iterador=crearpaginador(totalPaginas)
 // forma de activar el iterador
 while(true) {
 // activa el iterador
 const {value,done}=iterador.next()
 if(done) return; // evalua si se llego al final del carge de documentos
 // si no se esta en el final se genera un boton por cada paginacion 

 const buton=document.createElement("a")
 buton.href="#"
 buton.dataset.pagina=value 
 buton.textContent=value 
 buton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'mx-auto', 'mb-10', 'font-bold', 'uppercase', 'rounded')
 buton.onclick=()=>{
  paginainicial=value
  // se vuele a consultar la api nueavemente con la pagina actual

  Buscarimagenes()
 }
 
 paginacionDiv.appendChild(buton)
}
}