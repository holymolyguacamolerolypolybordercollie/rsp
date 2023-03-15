const image = document.querySelector(".image");
const imageUrl = `rsp.png`
const coordinates = {

    rock : `-266px`,
    scissors : '0px',
    paper : `-515px`,

}

const result = document.querySelector(".result");
const scorespan = document.querySelector(".currentscore");

//뺑뺑이 돌리기
    //바위 -266px
    //보자기 -515px
let computersChoice = `rock`
let currentComputersChoice;
image.style.backgroundImage = `url(${imageUrl})`
image.style.backgroundPositionX = `${coordinates[computersChoice]}`
image.style.backgroundSize = `auto 230px`



let setIntervalID = setInterval(roll, 50);

function roll(){

    switch(computersChoice){

        case 'rock':
            image.style.backgroundPositionX = `${coordinates[computersChoice]}`
            currentComputersChoice = 0;
            computersChoice=`scissors`
            break;
        case 'scissors':
            image.style.backgroundPositionX = `${coordinates[computersChoice]}`
            currentComputersChoice = 1;
            computersChoice='paper'

            break;
        case 'paper':
            image.style.backgroundPositionX = `${coordinates[computersChoice]}`
            currentComputersChoice = -1;
            computersChoice = 'rock'

            break;
    }

}

//클릭시 멈춤
const btn = document.querySelectorAll("button");

for(i=0; i<btn.length; i++){
    btn[i].addEventListener("click",btnClick);
}

function btnClick(event){
    clearInterval(setIntervalID);
    setTimeout(()=>{
        clearInterval(setIntervalID);
        setIntervalID = setInterval(roll,50);
        
    },2000);
    printResult(event);


}

printResult(eventHappened){

    const clickedButton = eventHappened.target.textContent
    let clickedButtonValue;
    let score = 0 ;
    let message = scorespan.innerText;
    
    switch(clickedButton){
        case '가위':
            clickedButtonValue = 1
            break;
        case '바위':
            clickedButtonValue = 0;
            break;
        case '보':
            clickedButtonValue = -1
            break;
    }

        let diff = clickedButtonValue - currentComputersChoice

        if ([2, -1].includes(diff)) {
            score += 1;
            message = '승리';
        } else if ([-2, 1].includes(diff)) {
            score -= 1;
            message = '패배';
        } else {
            message = '무승부';
        }

 

}

