"use strict";

let date = new Date(2012, 0, 2); 

alert(getLocalDay(date));

function getLocalDay(d){

    let day = "";

    switch(d.getDay()){

        case 0:
            day = 7;

        break;

        case 1:
            day = d.getDay();

        break;

        case 2:
            day = d.getDay();

        break;

        case 3:
            day = d.getDay();

        break;

        case 4:
            day = d.getDay();

        break;


        case 5:
            day = d.getDay();

        break;

        case 6:
            day = d.getDay();

        break;

        default:
            day = "NO HAS INTRODUCIDO FECHAS"
            break;
    }
        return  day;

}