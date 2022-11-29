"use strict";

let num = (prompt("Escribe un número mayor a 100"));

while(num <= 100){
    if(num == "" || num == null || num == undefined){
        break;
    };
    num = (parseInt(prompt("El número debe ser mayor a 100, escribe de nuevo")));
}