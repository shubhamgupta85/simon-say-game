// let gameSeq=[];
// let userSeq=[];

// let btns=["yellow","red","purple","green"];

// let started=false;
// let level=0;
// let h2=document.querySelector("h2");

// document.addEventListener("keypress", function(){
//     if(started==false){
//         console.log("game started");
//         started=true;
//     }
//     levelUp();
    
// });
// function btnFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");

//     }, 250);
// }

// function levelUp(){
//     level++;
//     h2.innerText= `Level ${level}`;

//     let randIdx= Math.floor(Math.random()*4);
//     let randColor=btns[randIdx];
//     let randBtn=document.querySelector(`.${randColor}`);
//     console.log(randIdx);
//     console.log(randColor);
//     console.log(randBtn);
//     btnFlash(randBtn);
// }

// function btnPress(){
//     console.log(this);
// }

// let allBtn =document.querySelectorAll(".btn");
// for(btn of allBtn){
//     btn.document.addEventListener("click",btnPress);
// }

let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let allBtns = document.querySelectorAll(".btn");


// Start Game
document.addEventListener("keypress", function(){
    if(!started){
        console.log("Game Started");
        started = true;
        levelUp();
    }
});


// Flash for Game Sequence
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}


// Flash for User Click
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}


// Level Up Logic
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);

    console.log("Game Sequence:", gameSeq);

    btnFlash(randBtn);
}


// Check Answer
function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}


// Button Click Event
function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("class").split(" ")[1];
    userSeq.push(userColor);

    console.log("User Sequence:", userSeq);

    checkAns(userSeq.length - 1);
}


// Add Click Event to All Buttons
for(let btn of allBtns){
    btn.addEventListener("click", btnPress);
}


// Reset Game
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}