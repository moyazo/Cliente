"use strict";

let num = prompt("Escribe un número"); //Pedimos al usuario un número

console.log(num);


    if(num == "" || num == null || num == undefined){  // Comprobamos si ha introducido una linea vacia o ha usado "CANCELAR"
        alert("NO HAS INTRODUCIDO NADA");
    }else{
            parseInt(num); // Convertimos la variable a tipo entero
        while(isNaN(num)){ // isNaN() devuelve true si la variable no es numérico, hasta que no sea númerico volverá a preguntar o haya introducido una linea vacia o a usado "CANCELAR"
            alert("No has introducido un número");
            num =  prompt("Vuelve a escribir un número");
            if(num == "" || num == null || num == undefined){
                alert("NO HAS INTRODUCIDO NADA");
                break;
            }
        }
    }
       
