// son iterables como arrays se diferencia en que no permievalores repetidos y son mas rapidos

const carrito=new Set(); 
//METODOS DELOS SET
carrito.add("pantalon"),
carrito.add("pantalon"),
carrito.add("camisa"),//AGREGAR ,
carrito.size,//TAMAÑO DEL SET
carrito.has("camisa"),//PARA VALIDAR SI CONTINE PARAMETO
carrito.delete("camisa"),// eliminar un parameto del set
carrito.clear() // vaciar el set 


// itearndon un set

carrito.forEach((producto,index)=>{
 console.log(producto)
})
