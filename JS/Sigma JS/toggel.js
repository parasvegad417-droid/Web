let button = document.querySelector("button")
let currmode="light";

button.addEventListener("click",()=>{
    if(currmode=="light"){
        currmode="dark"
        document.querySelector("body").style.background="black";
    }
    else{
        document.querySelector("body").style.background="white";
        currmode="light"
    }
});