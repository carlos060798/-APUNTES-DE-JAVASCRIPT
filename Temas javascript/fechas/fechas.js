// crear un objeto Date
console.log("en linea")
let hoy = new Date() 


/*metodos 
console.log([
hoy.getFullYear(), // año
hoy.getMonth(), //mes
hoy.getDate(), //DIA
hoy.getHours(), //HORAS
hoy.getMinutes(), //MINUTOS
hoy.getTime(), //milisegundos
])*/  
//moment.js

moment.locale('es')
console.log(moment().format("MM do YYYY h:mm:ss"))