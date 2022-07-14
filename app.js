//getting the box element with it's ID.
const square = document.getElementById('square');

// initializing primary variables
const height = screen.height -250;
const width = screen.width -100;
let topValue = 50; //first time box is set to the 50px;
let leftValue = 0;
let roundTop = 0;
let roundLeft = 0;

const moveBoxAnimation = ()=>{
    //topValue checker
    if(topValue >= height){
        roundTop++;
    }
    if(roundTop % 2 == 0){
            topValue += 10;
    }
    else{
        topValue -= 10;
    }
    if(topValue <= 0){
        roundTop++;
    }


    //left value checker
    if(leftValue >= width){
        roundLeft++;
    }
    if(roundLeft % 2 == 0){
            leftValue += 10;
    }
    else{
        leftValue -= 10;
    }
    if(leftValue <= 0){
        roundLeft++;
    }
    square.style.top = `${topValue}px`;
    square.style.left = `${leftValue}px`;
}

setInterval(moveBoxAnimation,1000);
