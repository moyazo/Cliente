"use strict"

const showNotification = () => {
  const divDOM = document.createElement("div")
  divDOM.setAttribute("class","notification welcome")
  const divText = document.createTextNode("Hello")
  divDOM.append(divText)
  document.body.append(divDOM)
}

const removeNotification = () => {
    const divDOM = document.querySelector("div")
    divDOM.remove();
}



showNotification();

let aux = 0;
const intervalID = setInterval(()=>{
  aux++
  console.log(aux)
    if(aux == 15){
     removeNotification()
     clearInterval(intervalID)
    }
}, 1000)



// Usar posicionamiento CSS para mostrar el elemento en las coordenadas (top/right) 
// dadas.
// .notification {
//   position: fixed; z-index: 1000;
//   padding: 5px; border: 1px solid black;
//   font-size: 20px;  background: white;
//   text-align: center;
// }
// .welcome {
//   background: #b80000;
//   color: yellow;
// }