/*
Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
*/
//let num = prompt("escreibe un numero")
//num = Number(num)
let n = 15
let residuo3 = n%3
let residuo5 = n%5

if (residuo3 === 0 && residuo5 === 0) {
  console.log("bingbong")
} else if (residuo3===0){
  console.log("bing")
}else if (residuo5 ===0) {
  console.log ("bong")
} else {
  console.log(n)
}