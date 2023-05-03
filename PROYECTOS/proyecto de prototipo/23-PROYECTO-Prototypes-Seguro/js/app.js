
//generador de eventos

document.addEventListener('DOMContentLoaded',()=>{
prototipo.Generaryear()
formEvent()
})



//  funciones constructora de prototipo de seguro y de año


function seguroPrototipo(marca, year, tipo){
this.marca = marca;
this.year=year;
this.tipo = tipo;
} 

seguroPrototipo.prototype.cuantovale=function(){ 
console.log(this.marca,this.year);
  let cantidad;
  let base=2000;

  switch(this.marca){


     case'1': cantidad=base*1.15
     break;
     case'2': cantidad=base*1.05
     break;

      case'3':  cantidad=base*1.35
     break;
     default:
          break
  }


  // cada año que el año sea mayor se reduce 3% el valor

  const diferencia=new Date().getFullYear()- this.year 
  console.log(diferencia)

  cantidad-=((diferencia*3)*cantidad) /100

  /**
   * si el tipo de seguro es basico se multiplica por 30% mas
   * si el tipo de seguro es completo se multiplica por 50% mas
   */
  if(this.tipo ==="b"){
   cantidad *= 1.30
  }else{
     cantidad *= 1.50
  }
  console.log(cantidad) 
 return cantidad;
}

//intancia de prototipo
function prototipos(){

}

prototipos.prototype.Generaryear=()=>{
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

prototipos.prototype.mostarAlertas=(mensaje,tipo)=>{
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

prototipos.prototype.Mostarresultado=(total,seguro)=>{
const {marca,year,tipo}=seguro

let textMarca;
switch(marca) {
case "1":
     textMarca="Americano"
     break
     case "2":
          textMarca="Asiatico"
     break

     case "3":
          textMarca="Europeo"
     break





}
const div = document.createElement("div") 

div.classList.add("mt-10")

div.innerHTML=`<p class="header">Tu resumen</p>
<p class="font-bold">Marca:${textMarca}</p>
<p class="font-bold">Año:${year}</p>
<p class="font-bold">Tipo:${tipo}</p>
<p class="font-bold">Total:<spam>${total}</spam></p>`

const resultado=document.getElementById("resultado")




// mostar spiners 

 const spinners = document.querySelector("#cargando")
 spinners.style.display="block"


setTimeout(()=>{spinners.style.display="none"
     resultado.appendChild(div)},3000)

}
const prototipo=new prototipos() 






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
     prototipo.mostarAlertas("campos no pasaron validacion","error")
return
}
prototipo.mostarAlertas("Cotizando","correcto") 


//ocultar cotizaciones previas

const resultados=document.querySelector("#resultado div")
if(resultados != null){resultados.remove()}
// intanciado el prototipo de seguro


 const seguro= new seguroPrototipo(marca,year,tipo)
 const total=seguro.cuantovale(); 

 prototipo.Mostarresultado(total,seguro)
}