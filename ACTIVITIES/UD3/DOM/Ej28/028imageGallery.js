"use strict"

const principalIMG = document.getElementById("principal")
const divPrincipal = document.getElementById("principalImage")
const othersIMG = document.getElementsByClassName("otherImage")
let srcArray = []



const changePrincipal1 = () => {
        srcArray[0] = principalIMG.getAttribute("src")
        srcArray[1] = othersIMG[0].getAttribute("src")
        console.log(srcArray)
        principalIMG.setAttribute("src",srcArray[1])
        othersIMG[0].setAttribute("src",srcArray[0])
}
const changePrincipal2 = () => {
        srcArray[0] = principalIMG.getAttribute("src")
        srcArray[1] = othersIMG[1].getAttribute("src")
        console.log(srcArray)
        principalIMG.setAttribute("src",srcArray[1])
        othersIMG[1].setAttribute("src",srcArray[0])
        
}
const changePrincipal3 = () => {
        srcArray[0] = principalIMG.getAttribute("src")
        srcArray[1] = othersIMG[2].getAttribute("src")
        console.log(srcArray)
        principalIMG.setAttribute("src",srcArray[1])
        othersIMG[2].setAttribute("src",srcArray[0])
}


