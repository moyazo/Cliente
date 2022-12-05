"use strict"

    // Obtener la referencia del primer elemento del body
    let body = document.getElementsByTagName("body")[0];
  
    // Crea <table> y <tbody>
    let tabla   = document.createElement("table");
    let tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (let i = 0; i < 5; i++) { // 5 iteraciones para 5 filas
      // Crea las celdas
      let hilera = document.createElement("tr");
  
      for (let j = 0; j < 5; j++) { // 5 iteraciones para 5 columnas

        let celda = document.createElement("td");
        if(i === j){  // cuando i y j sean iguales 
            celda.style.background = "red";
        }
        var textoCelda = document.createTextNode((i+1) + "  :  " + (j+1)); // document.createTextNode sirve para generar texto dentro del nodo correspondiente
        celda.appendChild(textoCelda); // generamos el texto
        hilera.appendChild(celda); // generamos la columna
      }
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera); // generamos la fila
    }
  

    tabla.appendChild(tblBody); // primero se inserta el tbody

    body.appendChild(tabla); // segundo la table

    tabla.setAttribute("border", "1"); // añadimos bordes
  