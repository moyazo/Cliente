"use strict"

const liArray = document.querySelectorAll("li"); // Obtenemos todos los <li> del DOM


liArray.forEach(element => {
    alert(element.textContent); // Con textContent obtenemos el contenido de cada <li>
});

alert(liArray.length);