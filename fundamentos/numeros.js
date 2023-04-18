

let numero=15;
let numbero2=5
console.log(numero);


//operadores matematicas

let suma= numbero2+numero;

let resta=numero-numbero2;

let division=numero/resta;


let multiplicacion= suma*resta;

let reciduo=numero%numbero2 

console.table({
suma,
resta,
multiplicacion,
division,
reciduo
})  

//  objeto Math con numeros

numero=Math.round(2.1)  // redondear numero
let numero3=Math.ceil(2.2) // redondear numero mas proximo
let numero4=Math.floor(2.5) // rendondear al numero menor mas proximo
let numero5=Math.abs(-200) // valor absoluto
let numerorandon=Math.random() // numero aletorio
console.log([
 numero,
 numero3,
 numero4,
 numero5,
 numerorandon
]) 

// Metodos de los numeros 
let num1="20"
let num2="21.5"
let num3="uno"
let num4=20

console.log(Number.parseInt(num1)) //  devuelve entero
console.log(Number.parseFloat(num2)) // devuelve flotante
console.log(Number.isInteger(num4)) // devuelve true si es entero
