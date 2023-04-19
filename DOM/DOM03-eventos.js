//eventos de DOM

let doc= document

//DOMContentLoaded se ejecuta cuando se descarga el html y los evetos de javascript
document.addEventListener("DOMContentLoaded",()=>{
    console.log(2)
}) 


//eventos del Mouse
let div=doc.querySelector(".navegacion")

//div.addEventListener("click",(e)=>{console.log(`soy un ${e}`)})
//div.addEventListener("mouseenter",(e)=>{console.log(`soy  en la navegacion`)})
//div.addEventListener("dblclick",()=>console.log("soy un doble click")) 


// eventos del formulario 
let busqueda= doc.querySelector(".busqueda");
// para cactar los caracteres del teclado
busqueda.addEventListener("keydown",(e)=>{ console.log("escribiendo")})
//para determinar que el usuario no sigue oprimiendo la tecla
busqueda.addEventListener("keyup",(e)=>{ console.log("soltaste la teclado")})
//para cuando se sale de un  elemeto o se le da el focus a otro
busqueda.addEventListener("blur",(e)=>{ console.log("me activo cuando me quitan el click o el foco")}) 
//para eventos de input en general
busqueda.addEventListener("input",(e)=>{ console.log(e)}) 

// EVENTO SUBMIT

let formulario =doc.querySelector("#formulario");


formulario.addEventListener("submit",(e)=>{
    event.preventDefault();
    alert('buscando')
    console.log(e)
});


// eventos de scroll con el mouse

window.addEventListener("scroll",(e)=>{ 
    let scroll = window.scrollY;
    console.log(scroll);})