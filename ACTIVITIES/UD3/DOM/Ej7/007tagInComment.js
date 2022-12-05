"use strict"

let body = document.body; // Recogemos la referencia a la etiqueta body
body.innerHTML = "<!--" + body.tagName + "-->"; // Insertamos texto con innerHTML. En este caso el nombre de la etiqueta body
alert( body.firstChild.data ); // ¿qué hay aquí? Al haber insertado texto, usando firstChild.data accedemos al contenido