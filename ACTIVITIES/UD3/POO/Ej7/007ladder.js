"use strict";

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // muestra el peldaño actual
//     alert( this.step );
//   }
// };

// ladder.up().up().down().showStep().down().showStep();


// "use strict"
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // muestra el peldaño actual
//       alert( this.step );
//       return this
//     }
//   };
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0
// ladder.up().up().down().showStep().down().showStep(); 