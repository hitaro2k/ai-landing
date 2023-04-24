"use strict"

let whiteList = document.querySelectorAll("#whitelist")
let faqList = document.querySelectorAll("#faqlist")
let whiteListText = document.querySelectorAll(".list-text")
let formBtn = document.querySelectorAll(".whitelist-button")
let form  = document.querySelector(".popup")
let formClose = document.querySelector(".popup__close")
let doc = document.querySelector("html")


function openList(){

    whiteList.forEach((item) =>{
        item.addEventListener("click",() => {
           
        })
    })
    faqList.forEach((item)=>{
        item.addEventListener("click", ()=>{

        })
    })

}

function openForm(){
    formBtn.forEach((item) =>{
        item.addEventListener("click", ()=>{
            form.style.display = "flex"
            doc.style.position = "fixed"
        })
    })
    formClose.addEventListener("click", ()=>{
        form.style.display = "none"
        doc.style.position = "static"
    })
   
}
openList()
openForm()
function whiteListForm(){

}
