"use strict";

let now = new Date();


alert(formatDate(now - new Date));

function formatDate(date) {
    let diff = new Date() - date; // la diferencia entre ambas, representada en milisegundos
  
    if (diff < 1000) { // menos de 1 segundo
      return 'ahora mismo';
    }
  
    let sec = Math.floor(diff / 1000); // convierte el resultado en segundos
  
    if (sec < 60) {
      return 'hace '+ sec + ' seg.';
    }
  
    let min = Math.floor(diff / 60000); // convierte el resultado en minutos
    if (min < 60) {
      return 'hace ' + min + ' min.';
    }
  
    // cambia le formato de la fecha
    // se le agrega un dígito 0 al día/mes/horas/minutos que contenga un único digito.
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // toma los últimos 2 dígitos de cada componente
  
    // une los componentes para formar una única fecha
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }