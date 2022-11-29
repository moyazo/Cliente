"use strict";

let a = 2;
let x = 1 + (a *= 2); // 5, primero hace el parentesis. Dentro del parentesis hace el producto concatenado del valor de a por 2

alert(x);