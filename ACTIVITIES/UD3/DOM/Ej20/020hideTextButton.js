"use strict"

const divELEM = document.createElement("div")
divELEM.setAttribute("id","text");

const buttonELEM = document.createElement("button")
buttonELEM.innerHTML = "Haz click para desaparecer el texto"

const textELEM = document.createElement("p")
textELEM.innerHTML = "Texto"

divELEM.append(textELEM);
document.body.append(divELEM);
document.body.append(buttonELEM);


buttonELEM.onclick = () => {
    divELEM.remove();
}

