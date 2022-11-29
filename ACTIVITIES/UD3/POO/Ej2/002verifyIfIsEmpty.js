"use strict";

let schedule = {}; // Objeto vacio
alert( Object.keys(schedule).length === 0  ); //  Object.keys(schedule).length verifica si el objeto tiene propiedades mirando cuantas propiedades tiene, en este caso devuelve true
schedule["8:30"] = "Hora de levantarse";
alert( Object.keys(schedule).length === 0  ); // en este caso devuelve false 
