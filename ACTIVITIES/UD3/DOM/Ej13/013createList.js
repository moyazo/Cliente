"use strict"

let bool = true;


while(bool){
    let itemLIST = prompt("¿Desea añadir un elemnto a la lista");
    if(itemLIST === null)
        break;
    else{
        const ulELEM = document.createElement("ul");
        document.body.appendChild(ulELEM);
        let liELEM = document.createElement("li");
        ulELEM.appendChild(liELEM);
        liELEM.innerHTML = itemLIST;
    }
}
