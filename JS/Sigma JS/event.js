let button = document.querySelector("button");

// button.onclick = (evt) =>{
//     console.log("hi the button was clicked successfully ");
//     console.log(evt.type);
//     console.log(evt.target);
// };


let div=document.querySelector("div");

// div.onmouseover = ()=>{
//     console.log("you are in the div");
// };


button.addEventListener("click",(evt) => {
    console.log("button one was clicked :");})

let e =(evt) => {
    console.log("div was clicked :");
};

div.addEventListener("click",e);
div.removeEventListener("click",e)
