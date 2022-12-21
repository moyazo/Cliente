"use strict"


const links = document.querySelectorAll("a"); // Obtenemos todos las <a> del DOM



for (let link of links) {
   let enlace = link.getAttribute('href'); //con getAttribute obtenemos los links de cada <a>
    if (!enlace) continue; // Si no existe el link contiua
  
    if (!enlace.includes('://')) continue; // Si el link no usa el protocolo especificado continua
  
    if (enlace.startsWith('http://internal.com')) continue; // Si el link es un interno
  
    link.style.color = "purple";
  }


      

