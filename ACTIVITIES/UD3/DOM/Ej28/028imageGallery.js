"use strict"

const principalIMG = document.getElementById("principal")
const divPrincipal = document.getElementById("principalImage")
const othersIMG = document.getElementsByClassName("otherImage")



const changePrincipal1 = () => {
        let srcAttr = principalIMG.getAttribute("src")
        const firstImage = othersIMG[0];
        let srcAttrFirst = firstImage.getAttribute("src")
        firstImage.removeAttribute("src")
        firstImage.setAttribute("scr",srcAttr)
        principalIMG.removeAttribute("src")
        principalIMG.setAttribute("scr",srcAttrFirst)
}
const changePrincipal2 = () => {
        let srcAttr = principalIMG.getAttribute("src")
        const secondImage = othersIMG[1];
        let srcAttrSecond = secondImage.getAttribute("src")
        secondImage.removeAttribute("src")
        secondImage.setAttribute("scr",srcAttr)
        secondImage.setAttribute("scr",srcAttr)
        principalIMG.setAttribute("scr",srcAttrSecond)
}
const changePrincipal3 = () => {
        let srcAttr = principalIMG.getAttribute("src")
        const thirdImage = othersIMG[2];
        let srcAttrThird = thirdImage.getAttribute("src")
        thirdImage.removeAttribute("src")
        thirdImage.setAttribute("scr",srcAttr)
        thirdImage.setAttribute("scr",srcAttr)
        principalIMG.setAttribute("scr",srcAttrThird)
}


