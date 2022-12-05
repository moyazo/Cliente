"use strict"

const liArray = document.querySelectorAll("li");


liArray.forEach(element => {
    alert(element.textContent);
});

alert(liArray.length);