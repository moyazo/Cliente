"use strict"

// La tabla con id="age-table".

const tableDOM = document.getElementById("age-table");
alert(tableDOM.nodeName);

// Todos los elementos labeldentro de la tabla (debería haber 3).
const labelDOM = tableDOM.querySelectorAll("label");
labelDOM.forEach(element => {
  alert(element.nodeName);
});
// El primer td en la tabla (con la palabra “Age”).



// El form con name="search".
// El primer input en ese formulario.
// El último input en ese formulario
  