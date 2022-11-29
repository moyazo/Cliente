"use strict";

let num1 = prompt("Escribe un número");
let num2 =  prompt("Escribe un número");

alert(pow(num1,num2));

function pow(n1 , n2){
  if(n1 || n2 < 0)
  return "Debes escoger un número positivo";

  n1 **= n1;
  return n1;

}


