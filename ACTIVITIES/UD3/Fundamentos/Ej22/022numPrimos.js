"use strict";

let n = 20;

for (let i = 1; i <= n-1; i++) { // por cada i...

  for (let j = 2; j < i; j++) { // buscar un divisor..
    if (i % j == 0) i++; // no es primo, ir al próximo i
  }

  alert( i ); // primo
}

