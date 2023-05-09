export const Empresa={
 nombre:"wwe",
 Dueño:"ufc"
}

export function  empresas(empresa){
    console.log(`la  empresa ${empresa.nombre} es de ${empresa.Dueño}`)
   } 


// ecportando una clase  para heredar en otro archivo


export class cliente {
 constructor(nombre,saldo,tipo){
this.nombre = nombre
this.saldo = saldo
this.tipo = tipo
 }
}