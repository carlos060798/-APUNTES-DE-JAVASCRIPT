// CREACION DE  HTML DESDE JAVACRIPT 
let navegacion =document.querySelector('.navegacion');


let  crear1=document.createElement("a");
crear1.textContent = "soy nuevo";
crear1.href="/soynuevo"


navegacion.appendChild(crear1); // agrgar elemento al final
navegacion.insertBefore(crear1, navegacion.children[1]) // agregar elemento en una posicion determianda 


// creando el elemento card
let img=document.createElement("img")
img.src="./img/lupa.png"


let p1=document.createElement("p");
p1.textContent = "soy chido"
p1.classList.add("categoria","concierto"); 

let p2=document.createElement("p");
p2.textContent = "chigese perro"
p2.classList.add("precio"); 

let p3=document.createElement("p");
p3.textContent = "la calaca "
p3.classList.add("titulo"); 


let contendor=document.createElement("div");
contendor.classList.add("info");
contendor.appendChild(p1)
contendor.appendChild(p2)
contendor.appendChild(p3)

// crea card para agregar elemetos

let card = document.createElement("div");
card.classList.add("card");
card.appendChild(img);
card.appendChild(contendor); 

console.log(card);

// se agrega al html

let  divcards= document.querySelector(".hacer .contenedor-cards");
divcards.insertBefore(card,divcards.children[0]);