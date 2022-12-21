"use strict"

const divELEM = document.createElement("div") // Creamos nuestro div
divELEM.setAttribute("id","text"); // Lea añadimos un id

const buttonELEM = document.createElement("button") // Creamos nuestro botón
buttonELEM.innerHTML = "Haz click para desaparecer el texto" // Añadimos texto al botón

const textELEM = document.createElement("p") // creamos nuestro párrafo
textELEM.innerHTML = "Texto"

divELEM.append(textELEM);
document.body.append(divELEM);
document.body.append(buttonELEM); // Añadimos al DOM



buttonELEM.onclick = () => { // Evento de click que eliminará nuestro div
    divELEM.remove();
}

