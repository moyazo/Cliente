"use strict";

let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };

  multiplyNumeric(menu); // Llamada a función

  function multiplyNumeric(menu){
    for(let numeric in menu){                     // Usando la funcion IsNaN() comoprobamos si la propiedad es un número o no
        if(isNaN(Object.keys(menu[numeric])))     // FOR .. IN recorre cada propiedad de un objeto. Si queremos acceder al valor, utilizamos obj[keyName]
            alert("La propiedad " + menu[numeric]+" no es un número, no se puede multiplicar") 
        else
            menu[numeric] =  menu[numeric]*2;  // Cambiamos el valor de la propiedad * 2
    }
  }

 
