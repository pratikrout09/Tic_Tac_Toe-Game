//1st thing
let boxes=document.querySelectorAll(".box");  //Acess the all boxes
let resetBtn=document.querySelector("#reset");  //For acess the reset button
let newGameBtn=document.querySelector("#new_btn"); //For acess the newgame button
let msgContainer=document.querySelector(".msg_container"); //for acess the msgcontainer
let msg=document.querySelector("#msg"); 


//2nd thing
let turnO=true ;      //playerX,playerO
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


//8th thing
const resetGame=()=>{
    turnO=true;
    enableBoxes();  //call the enableboxes function
    msgContainer.classList.add("hide");
}


//3rd thing
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
   // console.log("Box was clicked");
    if(turnO){
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
     box.disabled=true;
     checkwinner();       //call the checkwinner function
   });
});


//6th thing
const disableBoxes=()=>{  //this is used for disabled the all boxes after find the winner
    for(box of boxes){
        box.disabled=true;
    }
}


//7th thing
const enableBoxes=()=>{     //this is used for enabled the all boxes after clicking the reset btn or newgame btn
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
} 


//5th thing
const showWinner=(winner)=>{     //this is used for show the winner
  msg.innerText=`Congratulation the winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();     //call the desableboxes function
}


//4th thing
 const checkwinner=()=>{         //this is used for check the winner
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);   //call the  showwinner function
        }
    }
 }
}


//9th thing
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);