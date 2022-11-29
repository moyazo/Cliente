"use strict";

let i = 0; // Declaramos variable
while (i != 10) { // Hasta que i no sea igual a 10
  i += 0.2;  // 0.2 realmente no vale 0.2. Es un decimal periódico por lo que puede valer 0.2000000000234. Nunca será 10 exacto
}
       
