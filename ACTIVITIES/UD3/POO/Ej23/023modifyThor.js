"use strict";

let thor = "Thor es el hijo de Odín"

//  LARGO DE LA CADENA 

alert(thor.length); // String.length devuelve la longitud de una cadena

//  Encontrar la letra " o " 

alert(thor.indexOf("o")+1); // Con indexOf busco la posición del la letra "o" en la cadena

//Encontrar el carácter que ocupa la posición 3

alert(thor[2]); //String[i] nos devuelve el carácter que se encuentre en esa pósicion

//¿Qué carácter ocupa la posición 1?

alert(thor.charAt(0)); //String.charAt(i) nos devuelve el carácter que se encuentre en esa pósicion


//Trocea la cadena usando los espacios en blanco

alert(thor.split(" ")); // Trocemas usando split() y el separador será " "

//Reemplaza Thor por Loki
thor = thor.replace("Thor","Loki"); // Replace() reemplaza un string por otro
alert(thor);
//Recorta la cadena para que devuelva la palabra Odín

alert(thor.slice(thor.indexOf("Odín",0)));
//¿Puedes encontrar la letra a? Demuéstralo

alert(thor.slice(thor.indexOf("a",0))); // Si buscamos la posición de la cadena en la que se encuntra el carácter "a" nos devolverá "n" de null por lo que no se encunetra en ensa cadena


//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11)

alert(thor.slice(0,(thor.length/2)).toLowerCase() + (thor.slice((thor.length/2), thor.length)));








       
