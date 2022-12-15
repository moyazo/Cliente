"use strict"



let intervalId;

let clock = document.getElementById('clock');
const red = clock.firstElementChild.setAttribute("class","hour");
const green = clock.children[1].setAttribute("class","min");
const blue = clock.lastElementChild.setAttribute("class","sec");


function Start() {
     // Cuando le demos click al button si intervalId está undefined, iniciará el setInterval
  if (intervalId === undefined) intervalId = setInterval(timeControl, 1000); 
    // Si intervalId no es undefined, llamará al controlador pero retomará el contador por la fecha actual no en la que se paró
  timeControl();
}

function Stop() {
  clearInterval(intervalId); // Usamos clearInterval() para parar el setInterval()
  intervalId = null; // Si volvemos a clickear start volveremos al proceso incial
}

    function timeControl() {
      


      let date = new Date(); // Obtenemos la fecha con hora minuto y segundo exacto
      let hour = date.getHours(); // Obtenemos solo las horas
      let minute = date.getMinutes(); // Obtenemos solo los minutos
      let second = date.getSeconds(); // Obtenemos solo los segundos

// Si los horas/minutos/segundos son de una cifra añadiremos un 0 delante para ser más estéticos

      if (hour < 10) 
       hour = `0${hour}`;

      clock.children[0].innerHTML = hour; //usamos children[i] para referirnos al hijo especifico y innerHTML para añadir un valor

      if (minute < 10)
       minute = `0${minute}`;

      clock.children[1].innerHTML = minute;

      if (second < 10)
       second = `0${second}`;

      clock.children[2].innerHTML = second;
    }

    