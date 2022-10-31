function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20,20,200);
  if (mouseIsPressed){
    rectMode(CENTER);
    rect(200,200,400,200);
    fill(0,200,0);
    textAlign(CENTER,CENTER);
    text("KEY",200,200);
    textSize(width/3);
  } else {
    ellipse(200,200,200,200);
    fill(256);
  }
}
