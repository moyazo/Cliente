"use strict"

const buttonELEM = document.createElement("button")
buttonELEM.innerHTML = "Haz click para ocultar el botón"


document.body.append(buttonELEM);


buttonELEM.onclick = () => {
    buttonELEM.setAttribute("hidden","true");
}

