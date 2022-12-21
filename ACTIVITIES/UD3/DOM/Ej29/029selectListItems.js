"use strict"

const LiList = document.querySelectorAll("li")



LiList.forEach(li => {
        li.addEventListener("mouseup", (e) => {
                let liSelected = document.querySelectorAll(".selected")
                liSelected.forEach(selected => selected.removeAttribute("class"))
                li.setAttribute("class","selected")

                window.addEventListener("click", (e) =>{
                        if(e.ctrlKey){
                                 li.setAttribute("class","selected") 
                                
                        }
                        
                 })
       })
       
});