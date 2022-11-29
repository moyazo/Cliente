"use strict";

function Accumulator(startingValue){  //Declaramos nuestra funcion constructora
         
 this.value = startingValue; // Declaramos las variables. Utilizamos : this.variable

 this.read = () =>{   //Declaramos las funciones de el constructor : this.fn = () =>{}
   this.value = this.value + parseInt(prompt("Escribe un número"));  // Cada vez que llamen a la función reescribirá el valor de la variable
 }

}

let accumulator = new Accumulator(1); // valor inicial 1
accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario
alert(accumulator.value); // muestra la suma de estos valores

