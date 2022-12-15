"use strict"


const ulDOM = document.getElementById("ul"); // Obtenemos la referencia del elemento UL 

const li1DOM = document.getElementById("one"); // Obtenemos la referencia de los LI que existen 
const li4DOM = document.getElementById("four");

const li2DOM = document.createElement("li"); // Creamos el segundo LI
  li2DOM.setAttribute("id","two"); // Seteamos el id
  li2DOM.innerHTML = "2"; // añadimos su contenido
  const li2DOMId = document.getElementById("two"); // Obtenemos su referencia

const li3DOM = document.createElement("li");
  li3DOM.setAttribute("id","three");  
  li3DOM.innerHTML = "3";


  li1DOM.insertAdjacentElement("beforeend",li2DOM); // insertAdjacentElement  inserta un elemento nodo dado en una posición dada con respecto al elemento sobre el que se invoca.
                                                    // Recibe 2 argumentos donde los inserta y qué inserta
    