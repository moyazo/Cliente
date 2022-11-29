"use strict";

let string = "john"; // Declaramos variable

alert(ucFirst(string)); // alert llamada auna función

function ucFirst(str){  // declaramos función con un argumento
  str = str[0].toUpperCase() + str.substring(1);  // String.toUpperCase() devuelve el string en Mayúsculas y le concatenamos el resto de el string con String.substring(1)
  return str;                                       // String.substring(1) lo que hace es dividir desde la posicion String[1] hasta el final del string
}






       
