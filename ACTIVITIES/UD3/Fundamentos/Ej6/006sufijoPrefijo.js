"use strict";

let a = 1, b = 1; // ?
let c = ++a; // ?
let d = b++; // ?

alert("a = " + a); // a = 2 cuando c lo igualamos a ++a estamos rescribiendo el valor de a +1
alert("b = " + b); // b = 2 cuando d lo igualamos a b++ estamos rescribiendo el valor de b +1, solo afecta a partir de esa linea de código
alert("c = " + c); // c = 2
alert("d = " + d); // d = 1