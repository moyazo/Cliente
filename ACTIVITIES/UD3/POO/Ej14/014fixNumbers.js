"use strict";

let num = 6.25;

num = num.toFixed(1);

alert(num); // toFixed() no redondea al número más cercano si no que muestra
// tantos decimales como argumento numérico entero reciba.
// Si el decimal más cerca a la parte entera es >= 5, entonces es redondeado al siguiente número

//Para redondear al más cercano debemos utilizar Math.round()

num = Math.round(num);

alert(num)// 6