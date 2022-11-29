"use strict";

let personajes = [{id:0,nombre:"Peter Parker",pelicula:"Spider-Man"},{id:0,nombre:"Peter Pan",pelicula:"Peter Pan"}];  

let personaje = [];

for (let i = 0; i < personajes.length; i++) {
     personaje = groupById(personajes,i);  
     alert(personaje[i].nombre) ;
}

function groupById(arr,n){
  
            arr[n].id = n+1;
        return arr;

}