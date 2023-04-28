// Local storage espacio de memoria en los navegadores   en su espacio de memoria

const Memoriacorta =localStorage
//funcionan con llave valor  almacenando datos


let productos = {
    nombre:"churro",
    precio:15,
    tipo:"pan"
} 
let producto=JSON.stringify(productos)

Memoriacorta.setItem("producto1",producto)  
/*let productos2 = {
    nombre:"gato",
    precio:15,
    tipo:"carne"
}
let producto2=JSON.stringify(productos2)

Memoriacorta.setItem("producto2",producto2)  
*/ 

// como obtener los datos del  localstorage 

const  producto1=Memoriacorta.getItem("producto1")  
const convertidorobj=JSON.parse(producto1)
console.log(convertidorobj)  


// como eliminar  elementos de local storage
Memoriacorta.removeItem("producto1")



//actualizar el elemento 

let productos2=Memoriacorta.getItem("producto2")  
const convertidor=JSON.parse(productos2) 
productos2.descuento=15
Memoriacorta.setItem("producto2",JSON.stringify(productos2))

