"use strict"


function createCalendar(elem, year, month) {

  let mon = month - 1;  // Los meses se cuentan del 0 al 11
  let day = new Date(year, mon);
  const DAYS = ["MO","TU","WE","TH","FR","SA","SU"]; // Días de la semana

  let table = "<table><tr>";

  for(let i = 0; i < 7; i++){
    
      if(i === 6){
        table+=`<th>${DAYS[i]}</th></tr><tr>`;
        break;
      }
      table+=`<th>${DAYS[i]}</th>`;
  }
  // espacios en la primera línea
  // desde lunes hasta el primer día del mes
  // * * * 1  2  3  4
  // for (let i = 0; i < getDay(day); i++) {
  //   table += '<td></td>';
  // }

  // <td> con el día  (1 - 31)
  while (day.getMonth() == mon) {
    table += '<td>' + day.getDate() + '</td>';

    if (getDay(day) % 7 == 6) { // domingo, último dia de la semana --> nueva línea
      table += '</tr><tr>';
    }

     day.setDate(day.getDate() + 1);
   }

  // espacios después del último día del mes hasta completar la última línea
  // 29 30 31 * * * *
  // if (getDay(day) != 0) {
  //   for (let i = getDay(day); i < 7; i++) {
  //     table += '<td></td>';
  //   }
  // }

  // cerrar la tabla
  table += '</tr></table>';

  elem.innerHTML = table;
}

function getDay(date) { 
  let day = date.getDate()
  if (day == 0) day = 7; 
  return day - 1;
}

createCalendar(calendar, 2012, 9);