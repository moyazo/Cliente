"use strict";

let message;
let login = "afafaw";


message = login == "Alumno" ? "Hola estudiante, tiene 10 tareas pendientes" 
: login == "Profesor" ? "'Buenos días, tiene que calificar 1000 actividades" 
: login == "" ? "Sin sesión, estudie algo" : "";

alert(message);
