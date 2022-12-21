"use strict"

const buttonELEM = document.createElement("button") // Creamos nuestro botón
buttonELEM.innerHTML = "Haz click para ocultar el botón" // Añadimos texto


document.body.append(buttonELEM); // Añadimos al DOM


buttonELEM.onclick = () => {
    buttonELEM.setAttribute("hidden","true"); // Evento de click con el que añadiremos el atributo anuestro botoón de hidden
}

