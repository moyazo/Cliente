"use strict";

let coste = "$120"; // Variable 

alert(extractCurrencyValue(coste)); // Llamada a la función


function extractCurrencyValue(str){
    let partes = str.split("$"); // Con split obtenemos un array con un tamaño en función de las veces que se haya encontrado el separador

    return parseInt(partes[1]); // Solo queremos la cifra por lo que accedemos a la segunda posición
}







       
