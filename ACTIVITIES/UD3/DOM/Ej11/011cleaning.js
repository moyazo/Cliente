"use strict"


  // borra la lista

window.addEventListener("click", () => { // Añadimos un eventListener de click
    const elem = document.getElementById("elem"); 
    const clear = () =>{
      elem.remove();  // remove elimina nodos del DOM
    }
    clear()

})



