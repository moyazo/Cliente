"use strict";

let date = new Date(2012, 0, 3); 

alert(getWeekDate(date));

function getWeekDate(d){

    let dayOptions = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    let day = "";

    switch(d.getDay()){

        case 1:
            day = dayOptions[0];

        break;

        case 2:
            day = dayOptions[1];

        break;

        case 3:
            day = dayOptions[2];

        break;

        case 4:
            day = dayOptions[3];

        break;

        case 5:
            day = dayOptions[4];

        break;


        case 6:
            day = dayOptions[5];

        break;

        case 7:
            day = dayOptions[6];

        break;

        default:
            day = "NO HAS INTRODUCIDO FECHAS"
            break;
    }
        return  day;

}