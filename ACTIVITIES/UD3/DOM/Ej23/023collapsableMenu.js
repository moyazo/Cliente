"use strict"

const divDOM = document.getElementById("div") // obtenemos la referancia de nuestro div
const divTEXT = document.getElementById("textDIV")
divTEXT.hidden = true; // Forzamos a el texto del div a estar hidden

const iconDOM = document.getElementById("icon")


const buttonDOM = document.getElementById("button") // referancia del botón


    


buttonDOM.onclick = () =>{ // evento de click que controla nuestro desplegable
    if(divTEXT.hidden === false){ 
        iconDOM.innerHTML = "▶";
        divTEXT.hidden = true
    }
    else{
        iconDOM.innerHTML = "▼";
         divTEXT.hidden = false;
    }
}



