"use strict";

let num1 = prompt("Escribe un número");
let num2 =  prompt("Escribe un número");

let min = num1;
let seg = num2;

if(seg == 0){
  min = min - 1;
  seg = 60;
}

let contador = setInterval(function (){

  if(min < 0)
    clearInterval(contador)
  else{ 
    seg = --seg;
    if(seg == 0){
      
      min = min - 1;
      seg = 60;
      if(min < 0){
        console.log("Se acabo el tiempo");
        
      }else{
        console.log("Quedan " + min +" minutos y " + seg + " segundos");
      }
      
    }else{

      console.log("Quedan " + min +" minutos y " + seg + " segundos");
    }
  }

},1000,min,seg);









