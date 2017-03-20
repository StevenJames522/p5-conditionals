var x = 0;
var speed = 15; 

function setup(){
    createCanvas(600,400);
}
//this funtion is to represent when I click the gameover concept will essentially take over
function draw(){
    background(14, 65, 147);
    if(mouseIsPressed){
        background(249, 154, 29);
    }

    //makes outline thick 6px, there is no fills aka no color and the stroke is 255 so the outline of it is white 
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(230, 249, 29);
    }
    else{
        noFill();
    }
        

    //aa circle
    ellipse(x,200,100,100);
    //this is going to allow this to move along the x-axiss//
  
    //aa circle 
     ellipse(x,200,100,100);
    //this is goign to allow this to movealong the y-axis
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN ! ! !")
        speed = speed* -1;
        }
        
      x = x + speed; 
      console.log(x);
}

  