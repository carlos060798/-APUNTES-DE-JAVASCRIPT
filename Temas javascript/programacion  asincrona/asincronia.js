console.log("sdds")
function descargarclinete(){

return new Promise((resolve,reject)=>{const  err=false;

setTimeout(()=>{
if(!err){
  resolve("lista descargada")
}else{
 reject("no descargada")
}

},3000)})
 
}
// asincronismo

 async function ejecutar(){

    try{
        console.log( 1,2,3)
      const respuesta= await descargarclinete()  // bloquea el codigo mientras se ejecuta  la funcion
      console.log(respuesta)
      console.log( 2*2)
    } catch(e){
        console.log(e)
    }
 }



// ejemplo consumir una api con multiples promesas 

function descargarClientes(){ // USAR  EN CASO QUE SE REQUIERA UNA  DOS PROMESAS QUE SE REQUIERAN UNA DE LA OTRA
    console.log("consultando .....")
    return new Promise((resolve,reject)=>{const  err=false;
    
    setTimeout(()=>{
    if(!err){
      resolve("lista  CLIENTES descargada")
    }else{
     reject("no descargada")
    }
    
    },5000)})
     
    }

function descargarProductos(){ // SE USA SOLO EN DOS PROMESAS QUE NO TIENEN RELACION ALGUNA
    console.log("consultando dos .....")
        return new Promise((resolve,reject)=>{const  err=false;
        
        setTimeout(()=>{
        if(!err){
          resolve("lista PRODUCTO descargada")
        }else{
         reject("no descargada")
        }
        
        },3000)})
         
        } 


        async function EjecutarConsulta(){

            try{
              const respuesta= await Promise.all([descargarClientes(),descargarProductos()])
              console.log(respuesta)
            } catch(e){
                console.log(e)
            }
         } 


// EJEMPLO DE CO SUMIR UNA API CON ASync 
const url = "https://picsum.photos/list";

document.addEventListener("DOMContentLoaded",obtenerdatos); 

async function obtenerdatos(){
     try{
     const respuesta =  await fetch(url) 
     const resultado=await respuesta.json(); 
     console.log(resultado)
     }catch(err){ console.log(err); }
}