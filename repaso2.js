/*
La primera con mayúscula
Escribir una función llamada capitalizar que 
reciba una cadena y capitalice cada palabra de la cadena 
(cambie a mayúscula la letra inicial).
Nota: puedes asumir que cada palabra está separada por espacio.

Casos para probar tu programa
console.log(capitalize("pedro perez")); // "Pedro Perez"
console.log(capitalize("make it real")); // "Make It Real"
*/

function capitalizar (string){
    let array = string.toLowerCase().split(" ")
    //console.log(array)

    for(let i =0; i<array.length; i++){
      let array2 = array[i].split("")
      //console.log(array2) 
      array2[0]= array2[0].toUpperCase();
      //console.log(array2) 
  
      array[i]=array2.join("")
      //console.log(array[i])
  
    }
     return finalString=array.join(" ")
  
  
  }
  
  console.log(capitalizar("alEjo cueLlar"))