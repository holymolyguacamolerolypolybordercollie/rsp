const image = document.querySelector(".image");
const imageUrl = `rsp.png`
const coordinates = {

    rock : `-266px`,
    scissors : '0px',
    paper : `-515px`,

}


//뺑뺑이 돌리기
    //바위 -266px
    //보자기 -515px
let computersChoice = `rock`

image.style.backgroundImage = `url(${imageUrl})`
image.style.backgroundPositionX = `${coordinates[computersChoice]}`
image.style.backgroundSize = `auto 230px`



let setIntervalID = setInterval(roll, 50);

function roll(){

    switch(computersChoice){

        case 'rock':
            image.style.backgroundPositionX = `${coordinates[computersChoice]}`
            computersChoice=`scissors`
            break;
        case 'scissors':
            image.style.backgroundPositionX = `${coordinates[computersChoice]}`
            computersChoice='paper'
            break;
        case 'paper':
            image.style.backgroundPositionX = `${coordinates[computersChoice]}`
            computersChoice = 'rock'
            break;
    }

}

//클릭시 멈춤
const btn = document.querySelectorAll("button");

for(i=0; i<btn.length; i++){
    btn[i].addEventListener("click",btnClick);
}

function btnClick(){
    clearInterval(setIntervalID);
    setTimeout(()=>{
        clearInterval(setIntervalID);
        setIntervalID = setInterval(roll,50);
        
    },2000);
    printResult();


}

printResult(){

    const result 
 

}

