// sintaxis

const producto={
    name:"avena",
    precio:254,
    cantidad:12
}



// metodos de los objetos 

producto.categoria="grano"  // agrega una nueva propiedad
delete producto.cantidad;  // elimina una propiedad
console.log(producto)    

//objetos dentro de otro objeto

const productos={
 azucar:{
    precio:15,
    peso:"libra"
 },
 sal:{
    precio:4,
    peso:"libra"
 },
 azucarblanco:{
    precio:15,
    peso:"libra"
 },
 cafe:{
    precio:150,
    peso:"libra"
 }
}


console.log(productos.cafe)

//obtener los valores del objeto
console.log(Object.keys(producto)) // llaves
console.log(Object.values(producto)) //VALORES
console.log(Object.entries(producto)) //VALORES EN PARES CON UN ARRAY

// desestrucracion de objetos 

const {precio,name,categoria}=producto; 

console.log([precio,name,categoria])  
// metodos de los objetos
const product={
    name:"pepas",
    precio:254,
    cantidad:12
} 
// volver constante las propiedades de un objeto
Object.freeze(product); 
product.referencia="buena"
delete product.name;

console.log(product) 
// para  cambiar los valores de un objeto constante

Object.seal(product)
product.name="buena"
console.log(product)


// copiar un objeto
console.log("copiar un objeto")
let objetocopia=Object.assign(product)
 console.log(objetocopia) 

let objetocopia2={...producto}
console.log(objetocopia2)

//creacion de objetos  por funcion

function CreayteProduct (name, precio, categoria) {
      this.name = name,
         this.precio = precio,
         this.categoria = categoria
   }


let producto3= new CreayteProduct("chema",24,5)
console.log(` soy el producto3: ${producto3}`)