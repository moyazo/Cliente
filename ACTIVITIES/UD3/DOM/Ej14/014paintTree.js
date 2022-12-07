"use strict"

let data = {
    "Fish": {
      "trout": "hola",
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


  
  let container = document.getElementById('container');
  createTree(container, data); // crea el árbol en el contenedor



  function createTree(container, data){    

    

    let titleELEM = document.createElement("ul");
    let subtitleELEM = document.createElement("ul");

    container.appendChild(titleELEM);
    titleELEM.appendChild(subtitleELEM);


    for (const key in data) {
            let liELEM = document.createElement("li");
            titleELEM.appendChild(liELEM);
            liELEM.innerHTML = key;            
    }

    // for (const iterator of keyArray) {
             
    //     // let subliELEM = document.createElement("li");
    //     // subtitleELEM.appendChild(subliELEM);

    //     let subKeys = keyArray[iterator]
    //     iterator++;
        
    // }
    
  }