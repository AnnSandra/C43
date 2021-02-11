
var hr,mn,sc;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background("#43BAB8");

  
  hr= hour();
  mn=minute();
  sc=second();

  console.log(hr);
  console.log(mn);
  angleMode(DEGREES);
  

  translate(windowWidth/2,windowHeight/2)
  rotate(-90)
  stroke("#F9C714");
  fill("white");
  strokeWeight(20);
  circle(0,0,350);
  fill("black");


  
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn,0,60,0,360)
  hrAngle = map(hr % 12,0,12,0,360)

  
  push();
  rotate(scAngle); 
  stroke("#FFC983");
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  
  push();
  rotate(mnAngle);
  stroke(0,0,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  
  push();
  rotate(hrAngle);
  stroke(0,0,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop()

  stroke(0,0,0);
  point(0,0)


  strokeWeight(10);
  noFill();
  

  
  
  

  drawSprites();
  
}