"use strict"


const links = document.querySelectorAll("a");



for (let link of links) {
   let enlace = link.getAttribute('href');
    if (!enlace) continue; // no atributo
  
    if (!enlace.includes('://')) continue; // no protocolo
  
    if (enlace.startsWith('http://internal.com')) continue; // interno
  
    link.style.color = "purple";
  }


      

