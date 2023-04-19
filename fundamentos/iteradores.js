// ciclo for

let  base=[1,2,3,4,5,6,7,8,9,10,11,12]

for(let i=0; i<base.length; i++){
 // console.log(base[i])
}
for(let i=0; i<base.length; i++){
    if(i==5){
    //continue corta la ejecucion del ciclo
     console.log("SOY EL INDICE CINCOS") 
     continue
    } else if(i==6){
        console.log("SOY EL INDICE seis") 
      //break corta la ejecucion del ciclo
      break
    }
    console.log(base[i])
  }