"use strict"

const divDOM = document.getElementById("div") // Referencias de los divs
const horseDOM = document.getElementById("horse");
const donkeyDOM = document.getElementById("donkey");
const catDOM = document.getElementById("cat");
const bHorseDOM = document.getElementById("bhorse");
const bDonkeyDOM = document.getElementById("bdonkey");
const bCatDOM = document.getElementById("bcat");

 // eventos de click para eliminar los divs
bHorseDOM.onclick = () => {
    horseDOM.remove()
}
bDonkeyDOM.onclick = () => {
    donkeyDOM.remove()
}
bCatDOM.onclick =  () => {
    catDOM.remove()
}