"use strict";


let navegador = prompt("Indica tu navegador");

if(navegador == "Edge")
  alert( "¡Tienes Edge!" );
else if(navegador == "Explorer")
  alert('Vuelve a primero, no hemos conseguido enseñarte nada');
else if(navegador == "Chrome" || navegador == "Firefox" || navegador == "Safari" || navegador == "Firefox" || navegador =="Opera"){
  alert( 'Está bien, soportamos  estos navegadores también' );
}else{
  alert( '¡Esperamos que esta página se vea bien!' );
}

