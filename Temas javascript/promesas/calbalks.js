//los colbacks funciones que ejecutan otras funciones 

const paises= ["colombia", "venezuela","ecuador","peru"] 



function nuevopais(pais,calback) {

    setTimeout(() => {
     paises.push(pais)   
     calback()
    }, 3000 );
 


}

function mostar(){
console.log(Paises)
}

mostar();

nuevopais("italia",mostar); 


//colback hell anidamientos de calbacks


const Paises= [] 



function nuevopais(pais,calback) {

  
     paises.push(pais)  
     console.log(Paises) 
     calback()

 



}




function calbackhell(){
 setTimeout(() => {   
 nuevopais("italia",mostar); 
 setTimeout(() => {   
    nuevopais("francia",mostar); 
    setTimeout(() => {   
        nuevopais("ecuador",mostar); 
        setTimeout(() => {   
            nuevopais("italia",mostar); 
           },1000) 
       },1000) 
   },1000) 
   

},2000) 
}