"use strict"

// La tabla con id="age-table".

// const tableDOM = document.getElementById("age-table");
// alert(tableDOM.nodeName);

// Todos los elementos labeldentro de la tabla (debería haber 3).
// const labelDOM = tableDOM.querySelectorAll("label");
// labelDOM.forEach(element => {
//   alert(element.nodeName);
// });
// El primer td en la tabla (con la palabra "Edad").


// const tdAgeDOM = document.querySelector("td");

// alert(tdAgeDOM.textContent);



// El form con name="search".


// const searchDOM = document.getElementsByName("search");
// alert(searchDOM);


// El primer input en ese formulario.


// const inputDOM = document.querySelector("input").nodeName;
// alert(inputDOM);


// El último input en ese formulario
  
const inputsDOM = document.querySelectorAll("input");
alert(inputsDOM[inputsDOM.length - 1].nodeName);