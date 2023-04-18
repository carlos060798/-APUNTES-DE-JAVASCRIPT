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
//verificar si un elemento esta en una array  de objetos
let existesome=carro.some(producto=>{return producto.name==="fcoca"})
console.log(existesome)



