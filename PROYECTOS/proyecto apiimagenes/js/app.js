const resultado = document.querySelector("#resultado");
const paginacionDiv = document.querySelector("#paginacion");
const formulario = document.querySelector("#form");
console.log(resultado);

//EVENTOS DE PAGINA

window.onload = () => {
  formulario.addEventListener("submit", cosultarApi);
};

function cosultarApi(e) {
  e.preventDefault();
  console.log("cosultar");
  const termino = document.querySelector("#term").value;
  console.log(termino);
  if (termino === "") {
    mensajealerta("campos vacios");
    return;
  }
  Buscarimagenes(termino);
}

//funcion de consultar API

function Buscarimagenes(palabra) {
  const key = "36463902-f0804003049f9d54a40d1596b";
  const url = `https://pixabay.com/api/?key=${key}&q=${palabra}&per_page=100`;

  fetch(url)
    .then((respusta) => respusta.json())
    .then((respuesta) => mostraimagen(respuesta.hits));
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
}
