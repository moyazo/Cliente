"use strict";

let edad = prompt("Escribe una edad");

alert(checkAge(edad));

function checkAge(age) {
    if (age > 18) {
      return true;
     } //else {
    //   
    // }
    return confirm('¿Tus padres te permitieron?');
  }

  // El else no es requerido, ya que cuando entramos en el if devuelve true y se sale de la función. 
  // Si no entra en el else simplemente sigue ejecutando el c´digo que en este caso es lo que estaba en el else