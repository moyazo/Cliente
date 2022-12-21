"use strict"

let bool = true; // Booleano para controlar el while


while(bool){
    let itemLIST = prompt("¿Desea añadir un elemnto a la lista"); // Preguntamos al user
    if(itemLIST === null) // Si no responde sale del while
        break;
    else{
        const ulELEM = document.createElement("ul"); // creamos la lista usando createElement y appendChild
        document.body.appendChild(ulELEM);
        let liELEM = document.createElement("li");
        ulELEM.appendChild(liELEM);
        liELEM.innerHTML = itemLIST; // Usamos innerHTML para añadir texto
    }
}
