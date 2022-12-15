"use strict"

const divDOM = document.getElementById("div")
const divTEXT = document.getElementById("textDIV")
divTEXT.hidden = true;

const iconDOM = document.getElementById("icon")


const buttonDOM = document.getElementById("button")


    


buttonDOM.onclick = () =>{
    if(divTEXT.hidden === false){
        iconDOM.innerHTML = "▶";
        divTEXT.hidden = true
    }
    else{
        iconDOM.innerHTML = "▼";
         divTEXT.hidden = false;
    }
}



