"use strict";

let num = 0; // Inicializamos la variable num
let limite = 20; // Establecemos el limite de nuemeros de la serie de fibonnacci que queremos obtener

fibonnacci(num,limite); // Llamada a la funciónpasando como argumentos el numero y su limite

 function fibonnacci(n,l){

            let firstFibo = 1; // declaramos el primer número que no esel cero

            let array_fibo = [n,firstFibo] // añadimos el 0 y el 1en un array

        for(let i=2; i <= l; i++){//Gracias a este for establecemos el limite de iteraciones 

            array_fibo.push(array_fibo[i-1] + array_fibo[i-2]); //Cada iteración sumaremos el número de la iteración-1 y el número de la iteración-2
                                                                // Ese resultado lo añadimos con push() a nuestro array obteniendo así todos los numeros
            document.write(array_fibo[i]+"<br/>");	
        }
    }


    