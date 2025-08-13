let firstchoice=0;
let button=document.querySelectorAll(".buttons");
let turn0=true;
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");
let resetbtn=document.querySelector("#reset-btn");
let count=0;
let newbtn=document.querySelector("#new-btn");

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const disableboxes=()=>{
    for(let box of button){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of button){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(value)=>{
    msg.innerText=`Congratulations.Winner is ${value}`;
    msgContainer.classList.remove("hide");
    disableboxes();

}
const checkWinner=()=>{
    for(pattern of winPatterns){
        let value1=button[pattern[0]].innerText;
        let value2=button[pattern[1]].innerText;
        let value3=button[pattern[2]].innerText;
        if(value1 !="" && value2 !="" && value3 !=""){
            if(value1==value2 && value2==value3){
                showWinner(value1);
            }
        }
    }
}
const gameDraw=()=>{
    msg.innerText="Game was Draw.";
    msgContainer.classList.remove("hide");
}

button.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText='0';
            turn0=false;
        }else{
            box.innerText='X';
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count==9 && !isWinner){
            gameDraw();
        }
        
    })
})
const resetGame=()=>{
    turn0=true;
    count=0;
    msgContainer.classList.add("hide");
    enableboxes();
}
resetbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);

