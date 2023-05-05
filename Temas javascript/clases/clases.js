// creacion de classes  


class Cliente{
constructor(nombre,saldo){
 this.nombre = nombre;
 this.saldo=saldo; 


} 

//METODOS

imprimir(){
 return `cliente ${this.nombre} tiene un saldo de ${this.saldo}`
}
// los metodos estaticos son propios de la clase original y no pueden ser  acecdidos desde la intancia
static Bienvenido(){
return console.log("bienvenido")
}
}

const juan = new Cliente("juanito alimañe",15000)
Cliente.Bienvenido()
console.log(juan.imprimir())


class Persona extends Cliente {

    constructor(nombre,saldo,ubicacion){
     super(nombre,saldo);
     this.ubicacion = ubicacion;
    }
  imprimir(){
    return `cliente ${this.nombre} tiene un saldo de ${this.saldo}, ubicada en ${this.ubicacion}`

  }
    static Bienvenido(){ // rescribe el metodo
        return console.log("bienvenida empresas")
        }
}

const empresas = new Persona("juanito alimañe",15000,"cucuta")
Persona.Bienvenido()
console.log(empresas.imprimir())