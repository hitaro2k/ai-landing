"use strict"

let formBtn = document.querySelectorAll(".whitelist-button")
let form  = document.querySelector(".popup")
let formClose = document.querySelector(".popup__close")
let doc = document.querySelector("html")


var arrowWrappers = document.getElementsByClassName('arrow-wrapper');


for (var i = 0; i < arrowWrappers.length; i++) {
    arrowWrappers[i].addEventListener('click', toggleListTextDisplay);
}


function toggleListTextDisplay(event) {
   
    var listItemHeader = this.closest('.list-item__header');
    
    var listText = listItemHeader.nextElementSibling;
    var arrowWrapper = this;

    if (listText.style.display === 'none' || listText.style.display === '') {
        listText.style.display = 'block';
        arrowWrapper.style.transform = 'rotate(180deg)';
    } else {
        listText.style.display = 'none';
        arrowWrapper.style.transform = 'rotate(0deg)';
    }
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


openForm()

