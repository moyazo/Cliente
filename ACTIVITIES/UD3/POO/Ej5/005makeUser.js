"use strict";

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // ¿Cuál es el resultado?. 

//En este caso no tendría ninguna respuesta. Principalmente, para acceder a la propiedad "ref"
// usaremos Obj.ref. Si quitamos ".name" nos devolverá "undefined" ya que no le hemos dado nigún valor

 
