"use strict"

const showNotification = () => {
  const divDOM = document.createElement("div") // Creamos un div
  divDOM.setAttribute("class","notification welcome") // Le añadimos las clases correspondiantes
  const divText = document.createTextNode("Hello")
  divDOM.append(divText) // Añadimos al nodo padre
  document.body.append(divDOM) // Añadimos al DOM
}

const removeNotification = () => {
    const divDOM = document.querySelector("div") // Obtenemos nuestro div
    divDOM.remove(); // Lo eleminamos con remove
}



showNotification();

let aux = 0; // variable auxiliar para controlar el intervalo
const intervalID = setInterval(()=>{
  aux++ // incrementamos 
    if(aux == 15){ // Cuando llegue a 15 seg detendremos el intervalo con clearInterval y llamaremos a nuestra función
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