"use strict"

let data = {
  "Fish": {
    "trout": {},
    "salmon": {}
  },

  "Tree": {
    "Huge": {
      "sequoia": {},
      "oak": {}
    },
    "Flowering": {
      "apple tree": {},
      "magnolia": {}
    }
  }
};

let container = document.getElementById('container'); // Obtenemos la referencia de #container
container.append(createTree(data));  // con append() añadimos dentro de #container


function createTree(obj) {
  

  if (obj && Object.keys(obj).length === 0) return;  // comprobamos si el objeto tiene propiedades
  // la primera parte de la condición nos comprueba si el objeto es null o undefinded
  let ulELEM = document.createElement('ul');  // Creamos el elementHTML ul con createElement("")

  for (let key in obj) { // con el for ... in recorremos el obeto y propiedades
    let liELEM = document.createElement('li');// Creamos el elementHTML li con createElement("")
    liELEM.innerHTML = key; // Añadimos con innerHTML el valor de la propiedad

    let childrenUlELEM = createTree(obj[key]); // Al tratar con propiedades que el value de la key es un objeto
                                                    //  necesitamos volver a llamar a la función para que funcione el ejercicio
    if (childrenUlELEM) { // comporueba que la propiedad del objeto  que sea un objeto no sea null o undefinded                       
      liELEM.append(childrenUlELEM); // si existe las propiedades crearemos una lista anidada
    }

    ulELEM.append(liELEM); // añadimos dentro de nuestra ul
  }

  return ulELEM; // devolvemos ul para poder añadilo en container
}

