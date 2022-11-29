"use strict";

 random(1, 5); // 1.2345623452
 random(1, 5); // 3.7894332423
 random(1, 5); // 4.3435234525



function random(a,b){

  alert (Math.random() * (b - a) + a); // la forma de Math.Random() * (max - min) * + max nos devuelve un número aleatorio entre el min y max(excluido)

}
       
