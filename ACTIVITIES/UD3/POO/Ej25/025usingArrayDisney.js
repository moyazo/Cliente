"use strict";

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];

//Meter a Peter Pan al final del array disney.

    // disney.push({nombre: "Peter Pan", pelicula: "Peter Pan"});

//Pintar el array

// for (const character of disney) {
//     alert("NAME : " + character.nombre + " FILM : " + character.pelicula);
// }


//Meter a El capitán Garfio al principio del array, no olvides la película


// disney.unshift({nombre: "Capitán Garfio", pelicula: "Peter Pan"});


//Meter al cocodrilo detrás del capitán, no olvides la película

// disney.splice(1,0,{nombre: "Capitán Garfio", pelicula: "Peter Pan"});

//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.


    // let peterPan = disney.filter(item => item.pelicula == "Peter Pan");

    // for (let i = 0; i < peterPan.length; i++) {
    //     alert("NAME : " + peterPan[i].nombre + " FILM : " + peterPan[i].pelicula);
    // }
   

//Encontrar el índice de Campanilla.

// alert(disney.indexOf(disney.name == "Campanilla"));

//Buscar al cocodrilo.
//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los 
// elementos del array.

// let aleatorio = shuffle(disney);

// for (const iterator of aleatorio) {
//     alert(iterator.nombre)
// }




// function shuffle(array){
//     array.sort(() => {return Math.random() - 0.5 })  //Math.random() generea un número aleatorio entra 0 y 1 por lo que si le restamos 0.5 el resultado será positivo o negativo.                                                   
//     return array;                                    // sort() nos ordenará todo según el resultado
// }
    








       
