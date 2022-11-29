"use strict";

alert( null || 2 || undefined ); // muestra el 2 
alert( alert(1) || 2 || alert(3) ); // muestra 1 y 2
alert( 1 && null && 2 );// muestra null
alert( alert(1) && alert(2) ); // muestra 1 y undefined
alert( null || 2 && 3 || 4 ); // muestra 3