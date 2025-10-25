let boxes =document.querySelectorAll(".box");
let turn=true;
let Reset=document.querySelector(".Reset-btn");
let newBtn=document.querySelector(".new");
let messageContainer=document.querySelector(".msg");
let msg=document.querySelector("p")
let winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]]


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("button was clicked!");
        if(turn){
            box.innerText="O"
            turn=false;
        }
        else{
            box.innerText="X"
            turn=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const resetGame=()=>{
    turn=true;
    enableBox();
    messageContainer.classList.add("hide");

}

const disableBox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }  
}
const enableBox = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
}


let showWinner = (Winner)=>{
    msg.innerText=`Congratulations the winner is ${Winner}`;
    messageContainer.classList.remove("hide");
    disableBox()
}

const checkwinner= () =>{
    for(pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1va= boxes[pattern[0]].innerText;
        let pos2va= boxes[pattern[1]].innerText;
        let pos3va= boxes[pattern[2]].innerText;

        if(pos1va !=="" && pos2va !=="" && pos3va !=="")
        {
             if(pos1va === pos2va && pos2va === pos3va){
                console.log("Winner",pos1va)
                showWinner(pos1va);
             }
        }
    }
}


newBtn.addEventListener("click",resetGame)
Reset.addEventListener("click",resetGame)