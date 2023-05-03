
//generador de eventos

document.addEventListener('DOMContentLoaded',()=>{
seguro.Generaryear()
formEvent()
})



//  funciones constructora de prototipo de seguro y de año


function seguroPrototipo(marca, year, tipo){
this.marca = marca;
this.year=year;
this.tipo = tipo;
} 



function Protopipos(){

}

Protopipos.prototype.Generaryear=()=>{
const max= new Date().getFullYear()
const min= max-20

const selectYear = document.querySelector("#year") 

for(let i=max; i>min; i--){

 const option = document.createElement("option")
 option.value =i
 option.textContent =i    
 selectYear.appendChild(option)
}


} 

Protopipos.prototype.mostarAlertas=(mensaje,tipo)=>{
const form=document.getElementById("cotizar-seguro")

 const div=document.createElement("div")
 div.classList.add("mensaje","mt-10")
 if(tipo==="error"){
 div.classList.add("error")
 }else{
  div.classList.add("correcto")
 }
 div.textContent=mensaje
 form.insertBefore(div,document.getElementById("resultado")) 

 setTimeout(()=>{div.remove()},3000)


}
//intancia de prototipo
const seguro=new Protopipos() 



















//funciones genericas
function formEvent(){
 const form=document.getElementById("cotizar-seguro")

 form.addEventListener("submit",cotizarSeguro)
} 

function cotizarSeguro(e){
     e.preventDefault()

//validacion de datos

const marca=document.getElementById("marca").value
const year=document.getElementById("year").value
const tipo=document.querySelector('input[name="tipo"]:checked').value

if(marca===""||tipo===""||year===""){
seguro.mostarAlertas("campos no pasaron validacion","error")
return
}
seguro.mostarAlertas("campos validados","correcto")







 console.log(tipo)
}