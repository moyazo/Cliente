"use strict";

let salaries = {
    Harry: 100,
    Ron: 160,
    Hermione: 130
  }

  let suma = 0; // Necesitamos inicializar "suma" para darle el tipo de valor de entero
    if(Object.keys(salaries).length === 0 )    //  Object.keys(schedule).length verifica si el objeto tiene propiedades mirando cuantas propiedades tiene, en este caso devuelve true
        alert(0 + " no hay salarios que sumar");
    else{
        for ( let salary in salaries)   // FOR .. IN recorre cada propiedad de un objeto. Si queremos acceder al valor, utilizamos obj[keyName]
            suma += salaries[salary];

        alert("La suma de todos los salarios es: " + suma);
    }
