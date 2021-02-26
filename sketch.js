function setup() {
  createCanvas(800, 800);
}

function draw() {
  
  background(63, 89, 89);
  // grid
  noStroke();
  fill(color(0, 0, 0, 150));
  for(k=1; k<=9; k++){
    rect((k*(800/10))-3/2, 0, 3, 800);
    rect(0, (k*(800/10))-3/2, 800, 3);
  }
  // line dash's
  for(k=1; k<50; k++){
    rect(400-9, ((800/(50))*k)-3/2, 18, 3)
    rect(((800/(50))*k)-3/2, 400-9, 3, 18)
  }
  
}
