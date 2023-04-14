// string

const producto=" camara 12 pixeles "
const precio="12 pesos"
console.log(producto) 
// temple String
console.log(`la ${producto} cuesta ${precio}`)
//metodos de string basicos
//  devuelve longitud del string
console.log(producto.length) 

 // devuelve true si  contine el valor la cadena o false si no
 console.log(producto.includes("12"))
//une dos  string
console.log(producto.concat(precio)) 

// elimina espacios en tre el inico y fin de la cadena 
console.log(producto.trim())

// metodos avanzados


let producto1="portatil Acer"

// dos parametros parte remplazada, nueva parte
console.log(producto1.replace("acer","hp")) 

// corta un string desde unas posiciones de referencia de 0 hasta el indice a cortar

console.log(producto1.slice(0,5))
// repetir un  string multiples veces

console.log(producto1.repeat(3)) 

//  divide un string  en un array recibe un ceparador

let  libros= "el hobbit,red,rayo dos , concha de tu madre , veneco"
console.log(libros.split(",")) 

// trasformar el string en mayusculas 
console.log(producto1.toUpperCase()) 
//trasformar en minusculas
console.log(producto1.toLowerCase()) 