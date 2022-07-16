//getting the box element with it's ID.
const square = document.getElementById('square');

// initializing primary variables

// box height is 100 and for not going out of screen we need to add another 100 that's why we subtract 200 here"
const height = screen.height -200;

const width = screen.width -100;
let topValue = 50; //first time box is set to the 50px;
let leftValue = 0;
let roundTop = 0;
let roundLeft = 0;

//Function for increasing or decreasing height and with value;
const findValue =(value) =>{
    if(value == 'top'){
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
        return topValue;
    }
    else{
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
        return leftValue;
    }
}
const moveBoxAnimation = ()=>{
    //value checker for top and left 
    topValue = findValue('top')
    leftValue = findValue('left')
    
    //set box position
    square.style.top = `${topValue}px`;
    square.style.left = `${leftValue}px`;
}

// Calling the animation function in every second
setInterval(moveBoxAnimation,1000);
