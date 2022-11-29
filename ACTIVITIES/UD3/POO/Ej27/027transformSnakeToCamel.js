"use strict";

let string = "list_style_image";

while(string.includes("_")){ // controlamos que el string no tenga "_"
    if(string.includes("_")){
     let partes = toCamelCase(string); // guardamos en "partes" el array que devuelve toCamelCase(str)

        for(let i = 0; i < partes.length;i++){
                if( partes[i] == "")
                    partes[i] = " "
   // Al haber usado split() tenemos un array de las palabra que iban detrás de una "_" por lo que debemos usar toUpperCase() en la primera letra de cada elemento del array             
                    partes[i] = partes[i][0].toUpperCase() + partes[i].slice(1);
                
           
        }
    
     string = partes.join("");
    }else{
        break;
    }
}



 console.log(string);


function toCamelCase(str){
    
    return str.split("_");

    
}





