"use strict";

let edad = (parseInt(prompt("Escribe tu edad")));

if(!(edad >= 18 && edad <= 99)){ // Operador lógico ! niega una condición
    alert("Esta fuera del rango")
}else{
    alert("Esta dentro del rango")
}