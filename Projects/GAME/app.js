let userScore=0;
let compScore=0;
let choices = document.querySelectorAll(".choice");
let  msg =document.querySelector(".counter");
let userpara =document.querySelector(".user");
let computerpara =document.querySelector(".computer");

 const genComChoice= () => {
    const options=["rock","pepar","scessior"];
    const randome=Math.floor(Math.random() * 3);
     return options[randome];
};
const drawGame=()=>{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="rgb(34, 19, 47)";
};
const showWinner=(userWin,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userpara.innerText=userScore;
        msg.innerText=`You win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        computerpara.innerText=compScore;
        msg.innerText=`You loss ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
     }

};
const playgame=(userchoice)=>{
   console.log("user choice:",userchoice);
   const compchoice=genComChoice()
   console.log("comp choice:",compchoice);  

   if(userchoice===compchoice){
     drawGame();
   }
   else{
    
    let userWin=true;
    if(userchoice==="rock")
    {
        userWin=compchoice==="pepar"? false :true;
    }
    else if(userchoice==="pepar")
    {
        userWin=compchoice==="scessior"?false:true;

    }
    else
    {
        userWin= compchoice==="rock"?false :true;
    }
       showWinner(userWin,userchoice,compchoice);
   }

   }; 
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);
    });
});