"use strict";

function Calculator(){  //Declaramos nuestra funcion constructora
   

       this.a = 0; // Declaramos las variables. Utilizamos : this.variable
       this.b = 0;
      
        this.read = () => {    //Declaramos las funciones de el constructor : this.fn = () =>{}
           this.a = parseInt(prompt("Escribe un número"));// pedimos al usuario dos numeros y los almacenamos en las propiedadese del objecto con "this"
           this.b = parseInt(prompt("Escribe otro número"));
          let nums = [this.a,this.b];// Alacenamos las propiedades en un array 
      
          return nums;// Devolvemos el array
        };
      
        this.sum = () => { return this.a + this.b}; // delcaramos la funcion sum(). Devuelve la suma de las propiedades
        this.mul = () => { return this.a * this.b} // delcaramos la funcion res(). Devuelve la resta de las propiedades
      

}

let calculator = new Calculator();  //creamos un nuevo objeto con la llamada a la funcion constructora de la siguinete forma: let obj = new fn()
calculator.read();
alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );