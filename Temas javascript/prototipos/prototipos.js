//creacion de prototipos

function cliente(nombre,saldo){
  this.nombre = nombre;
  this.salod = saldo;
} 

cliente.prototype.tipocliente=function(){
    let tipo
    if(this.saldo>5000){
    tipo="gold"
    }else if(this.saldo>3000){
     tipo="PlATA"
    }else{
      tipo="BRONCE"
    }

return tipo
}


//heredar de prototipos

function persona(nombre,saldo,cargo){
cliente.call(this,nombre,saldo) 
this.cargo=cargo
}
 
persona.prototype=Object.create(cliente.prototype) // copia prototype de objeto a objeto


const pedro= new cliente("simon",2000) 
console.log(pedro.tipocliente())
console.log(pedro)