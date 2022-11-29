"use strict";

var fruits = ["Banana", "Manzana", "Fresa"];


//Añadimos cereza al principio

    fruits.unshift("Cereza");
    alert(fruits);

//Añadimos melocotón al final

    fruits.push("Cereza");
    alert(fruits);

//Mostrar el array elemento a elemento con for clásico

    for (let i = 0; i < fruits.length; i++) 
        alert(fruits[i]);
    


//Eliminamos el primer elemento.

    fruits.shift("Cereza");
    alert(fruits);

//Eliminamos el último elemento.

    fruits.pop("Cereza");
    alert(fruits);

//Mostrar cada elemento con for of o for in, lo que considere más adecuado.

    for (const fruit of fruits)
        alert(fruit);
    








       
