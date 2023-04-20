// proyecto de validacion de formulario

document.addEventListener('DOMContentLoaded',()=>{
// seleccionar elemetos del form

const email = document.getElementById('email'),
asunto = document.getElementById('asunto'),
mensaje = document.getElementById('mensaje');

console.log([email, asunto,mensaje])
 //eventos del formulario

 email.addEventListener('blur',validar);
 asunto.addEventListener('blur',validar);

 mensaje.addEventListener('blur',validar);


 function validar(e){
    if(e.target.value.trim() ===""){
    console.log("esta vacio cabrono: ")
    } else{
     console.log("hay algo")
    }
 }
})