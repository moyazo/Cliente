"use strict";

let string =   prompt("una cadena cani como esta");
let sentence = "";
string = string.split("");
let letras = ["h","h","h"];
let conversor = 1;

for (let i = 0; i < string.length; i++) {
    
    if(string[i] == "c" || string[i] == "C"){
      string[i] = "K";
      
    }

    sentence +=  toLowerUpper(string[i]);
}
for(let i = 0; i < letras.length; i++)
  sentence +=  toLowerUpper(letras[i]);

console.log(sentence);


function toLowerUpper(letter){
  if(conversor == 0){
   letter = letter.toLowerCase();
   conversor = 1;
  }else{
    letter = letter.toUpperCase();
    conversor = 0;
  }


  return letter;

} 