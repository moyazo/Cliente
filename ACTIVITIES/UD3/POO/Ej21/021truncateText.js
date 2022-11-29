"use strict";


let string = "Hola a todos! po n la cfrase q quiera XULOOOOOOOOOOOOOOOOOO"; //string que prefiramos

truncate(string,120); // llamada a la funcion con parametros el string y una cifra

function truncate(str, maxlength){
//maxLength representa a la longitud máxima que debería tener la cadena
  let aux = ""; // Con ayuda de una variable auxiliar vacia resolveremos el ejercicio

  if(str.length > maxlength){

    aux = str.substring(0,maxlength); // Si la cadena sobrepasa la longitud máxima desde maxLength hasta el final de la cadena se convertirá en ...
    alert(aux + "...");

  }else{
    alert(str);
  }

}









       
