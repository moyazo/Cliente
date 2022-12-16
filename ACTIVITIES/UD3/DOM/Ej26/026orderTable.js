"use strict"

const thELEMS = document.querySelectorAll("th");
const tdELEMS = document.querySelectorAll("td");



thELEMS[0].onclick = () => {
        sortColumn(thELEMS[0].attributes[0].value)
}

thELEMS[1].onclick = () => {
        sortColumn(thELEMS[1].attributes[0].value)
}


const sortColumn = (dataType) => {
    const tdArray = Object.values(tdELEMS) 
    if(dataType === "number"){
        

  
    }else if(dataType === "string"){


        const tdSORTstring = tdArray.map(td => td.value === "string")

    }

}