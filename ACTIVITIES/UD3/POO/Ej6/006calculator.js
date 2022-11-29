"use strict";

let calculator = { // declaramos objecto

  a: 0, // declaramos propiedades
  b: 0,

  read: () => {  // declaramos funcion
     this.a = parseInt(prompt("Escribe un número")); // pedimos al usuario dos numeros y los almacenamos en las propiedadese del objecto con "this"
     this.b = parseInt(prompt("Escribe otro número"));
    let nums = [this.a,this.b]; // Alacenamos las propiedades en un array 

    return nums; // Devolvemos el array
  },

  sum: () => { return this.a + this.b}, // delcaramos la funcion sum(). Devuelve la suma de las propiedades
  mul: () => { return this.a * this.b}  // delcaramos la funcion res(). Devuelve la resta de las propiedades
}

  calculator.read(); //LLamada a la funcion de un objeto : Obj.fn()
  alert(calculator.sum());
  alert(calculator.mul());
