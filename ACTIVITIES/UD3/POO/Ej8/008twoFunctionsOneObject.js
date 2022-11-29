"use strict";

function A() { 

 }
function B() {  
  
}

let a = new A();
let b = new B();
alert( a == b ); // true

// Dentro de JS, existen diferentes tipos de variables, entre ellas los objetos. Un objeto de por si no puede ser igual a otro aunque tenga el mismo contenido, porque su referencia es diferente.