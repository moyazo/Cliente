"use strict";

 
console.log(5 > 4) // true compara dos enteros y es verdadero
console.log("apple" > "microsoft") // false está comparando cadenas, devuelve false
console.log("2" > "12") // true está comparando strings de numeros por lo que hace la conversión y los compara
console.log(undefined == null)  // true son iguales pero no identicos
console.log(undefined === null) // false son iguales pero no identicos
console.log(null == "\n0\n") // false
console.log(null === +"\n0\n") // false