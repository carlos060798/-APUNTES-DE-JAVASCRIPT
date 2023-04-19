// ARRAYS

let numeros=[10,20,30,40,50]
// aceder a elementos
console.log(numeros[3]) 

//operaciones para recorrer arreglos

for (let i=0; i<numeros.length; i++){
    console.log(numeros[i])
}

//  manejo de  elemntos de de un array

//agregar
numeros.push(15,16,20) // agregar elemetos al final del array
numeros.unshift(8) // agrega el elemeto al inico del array

console.log(numeros) 
//eliminar
numeros.pop() //elimina ultimo elemeto del array
numeros.shift() //elimina  elemtos del inico del array
console.log(numeros.splice(1,1))//elimina  elementos desde un indice hasta una cantidad de referencia
console.log(numeros) 

// desestructuracionde un array

let array = [20,30,40,60]

let[veinte]=array;
console.log(veinte) 

//metodos para recorar los array

const carrito=[
    {name:'coca',precio:100},
    {name:'mota',precio:150},
    {name:'maricachafa',precio:200},
]
carrito.forEach(elemt=> console.log(elemt))  // para recorrer un array
let nuevoarray=carrito.map(elemt=> console.log(elemt))  // para recorrer un array creando uno nuevo con las iteraciones 
//metodos d elos array para manicular
let  mesees=["enero","febrero","marzo","febrero"]
let carro=[
    {name:'coca',precio:100},
    {name:'mota',precio:150},
    {name:'maricachafa',precio:200},
]
// verificar si un elemto  esta dentro de un array
let existeINCLUIDES=mesees.includes("enero") 
console.log(existeINCLUIDES)

// Some verificar si un elemento  del array cumple con la condicion dada 
let existesome=carro.some(producto=>{return producto.name==="fcoca"})
console.log(existesome)

//devuelve  el indice del elemto que se busca por referencia
let existe2=mesees.findIndex(producto=>  producto==="marzo") 
existe2=carro.findIndex(producto=>{return  producto.name==="coca"})
console.log(existe2)

//reduce  para  reducir un array aun solo valor

let  reducion=carro.reduce((total,producto)=> total+producto.precio,0)
console.log(reducion)


//filter  devuelve un array con los elemetos que cumplan con los valores de referencia
let productos=[
    {name:'coca',precio:100},
    {name:'mota',precio:150},
    {name:'maricachafa',precio:200},
    {name:'poper',precio:300},
    {name:'tusi',precio:150},
    {name:'lsd',precio:250},
]

let filtro1= productos.filter(product=> product.precio<200)
 console.log(filtro1) 


 // find devuelve  un nuevo array con  elemento de referencia
 let filtro2= productos.find(product=> product.precio<200)
 console.log(filtro2) 

 //every devuelve un nuevo array con elementos que cumplan la condicion dada como referencia
 let filtro3= productos.every(product=> product.precio<200)
 console.log(filtro3) 

 // concat para unir dos  arraglos
 let filtro4= productos.concat(carrito)
 console.log(filtro4) 
