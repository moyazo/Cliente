"use strict"
// function handler() {
//     alert( "..." );
//     return false;
//   }


// La siquiente función al hacer click no funciona por lo que para arreglarlo debemos utilizar e.preventeDefault que cancela cualquier tipo de evento 


function handler(e) {
        alert( "..." )
        e.preventDefault()
}