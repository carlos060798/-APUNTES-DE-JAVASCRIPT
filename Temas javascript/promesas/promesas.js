/*son funciones que ejecutan un parametro o funcion y que devuelve algo una vez se ejecute esperando su resultado y 
no  bloquean el flujo  normal de tabajo 
*/  

/* estructura de una promesa   recibe 
resolv=>  captura la ejecuion exitosa
reject=> captura el error de ejecuion fallida
*/

const promesauno=new Promise((resolve, reject) =>{
  let cumpli=false;

  if(cumpli){
    resolve("cumpli ")
  }else{
     reject("DEMALAS")
  }
}) 
/*
la promesa de vuelve tres valores 
<fulfilled> si se cumple
<rejected> si no se cumple
{<pending> si no  ha cumplido laejecucion o esta vacia*/ 

//  forma de obtener e resultado de ejecuion de promesa con then() respuesta  catch() error 
promesauno.then((resultado)=>{
console.log(resultado)
}).catch((err)=>{console.log(err)});  


//ejemeplo d eestucturacion de un callback hell con promesas

const paises = [];

const nuevopais=pais=> new Promise(resolve=>{

setTimeout(()=>{
paises.push(pais);
resolve("pais agregado");
},3000)


})

// anidamiento de promesas
nuevopais("colombia")
.then(resultado=>{
    console.log(resultado)
    console.log(paises)
    return nuevopais("india")
}).then(resultado=>{
    console.log(resultado)
    console.log(paises)
    return nuevopais("españa")
})