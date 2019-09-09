var bigCircleRadius = 50;
var smallCircleRadius = 25;

function setup() {
  var canvas = createCanvas(400,400);
}

function draw() {
  background(0);
  
  ellipse(width/2,height/2,bigCircleRadius*2,bigCircleRadius*2);
  

  if (dist(mouseX,mouseY,width/2,height/2)<bigCircleRadius+smallCircleRadius){
    fill(255,0,0);
  }
  else{
    fill(255,255,255);
  }

  ellipse(mouseX,mouseY,smallCircleRadius*2,smallCircleRadius*2);
}