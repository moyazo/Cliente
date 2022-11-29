"use strict";

let date = getSecondsToAfterTomorrow(); 

alert(date + " segundos hasta pasado mañana");


function getSecondsToAfterTomorrow() {
        let hoy = new Date()
        
        let miliSegundos = 48 * 60 * 60 * 1000;
        let pasadoManana = new Date(hoy.getTime() + miliSegundos);

        let segundos = (pasadoManana - hoy) / 1000;

        return segundos;
}