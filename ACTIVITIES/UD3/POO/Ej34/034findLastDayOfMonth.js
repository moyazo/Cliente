"use strict";

let date = new Date(2012, 1); 
let month = getLastDayOfMonth(date);

if(month == 29){
    alert(month + " Febrero, año bisiesto");
}else{
    alert(month);
}



function getLastDayOfMonth(d){

    let lastDays = [28, 29, 30, 31];
    let lastDay = 0;

    lastDay = d.getMonth() % 2 != 0 && d.getFullYear() % 4 == 0 && d.getMonth() == 1? lastDay = lastDays[1] : 
    d.getMonth() % 2 != 0 && d.getMonth() == 1? lastDay = lastDays[0] : 
    d.getMonth() % 2 == 0? lastDay = lastDays[3] : 
    d.getMonth() % 2 != 0? lastDay = lastDays[2] : lastDay = 0;

    return lastDay;
}