"use strict";

const USERNAME = prompt("Nombre de Usuario");
const PASSWORD = "";

let message = USERNAME == "Admin" ? prompt("Contraseña de Usuario")

: USERNAME == "" ||  USERNAME == undefined? "Cancelado" : "No te conozco";





message = message == "TheBoss"? "Bienvenido a tu reino, jefe" : (message == "" || message == undefined || USERNAME == null? "Cancelado": "Contraseña Incorrecta");


alert(message);