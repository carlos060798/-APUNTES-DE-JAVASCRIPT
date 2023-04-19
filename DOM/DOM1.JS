// formas de seleccionar elemtos

let elemto1=document.getElementsByClassName("contenedor")
let elemto2=document.getElementById("formulario")
let elemto3=document.querySelector(".card")
let elemto4=document.querySelectorAll(".card")



/// modificacion de html con javascript

// textos
//let mensaje= prompt("que quieres colocar como mensaje")

let text=document.querySelector("h1")
//text.textContent=mensaje


// imagen

let img=document.querySelector(".card img")
img.src="./img/logo.png" 

// cambiar  el css 

text.style.backgroundColor="red" 

// eliminar elemtos del doom

let enlace=document.querySelector(".navegacion")
console.log(enlace.children) 

enlace.remove() // elimina elemnto  sin referencia
enlace.removeChild(enlace.children[2])  // elimina elemto  con referncia
