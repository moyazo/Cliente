"use strict"

const button = document.createElement("button") // CREAMOS ELEMENTO <button>
button.innerHTML = "CLICK" // AÑADIMOS TEXTO
document.body.append(button); // AÑADIMOS AL BODY

button.addEventListener("click", () => alert("1")); // CREAMOS UN addEventListener
button.removeEventListener("click", () => alert("1")); // QUITAMOS EL addEventListener
button.onclick = () => alert(2); // FUNCION CON CALLBACK



//AL QUITAR EL addEventListener EL EVENTO DE click NO EXISTIRÍA POR LO QUE NO MOSTRARÍA EL alert