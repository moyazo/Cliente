"use strict";


let string = "'xxxxx grati";
alert(string);
alert(checkSpan(string));

function checkSpan (str){ 

  let bool = false;

  str = str.toLowerCase(); //Pasamos toda la cadena a lowercase

  bool = str.includes("viagra")? true : str.includes("xxx")? true : false;  // Con ayuda de un ternario devolvemos true o false en función de si detecta span o no

return bool; // devolvemos un booleano
}






       
