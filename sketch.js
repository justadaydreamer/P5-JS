let i = 0
let c = color(0,255,0);

function setup() {
  createCanvas(400, 400); 
}

function draw() {
  background(0);
  for (let i = 1; i < 400; i+= 5) {
    colorMode(HSB);
    stroke(i++); 
    noFill();
    ellipseMode(CENTER);
    ellipse(i,i,i,i);
  }
}
