var triangleX = 500;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
}

function draw() {
  //triangle1 will be controlled by movement of mouse
  fill(200, 0, 255, 20);
  triangle (50, 25, mouseX, mouseY, 200, 200);
  
  //triangle2 will move and change color without the mouse
  // var r = random(0,100);
  // var g = random(100,255);
  // var b = random(150,220); 
  // fill (r, g, b, 500);
  // triangle (50, 200, triangleX, 200, 500, 500);
  // triangleX = triangleX + 1.2;
  
  // fill(255)
  // textSize(40)
  // text("click the screen", 200, 100, 600, 600);
  
}

function mousePressed() {
  var r2 = random(100,250);
  var g2 = random(200,255);
  var b2 = random(200,255);
  background(r2,g2,b2);
  noStroke();
  fill (b2,r2,g2);
  ellipse (mouseX, mouseY, 70, 70);
  
  // fill(0);
  // textSize(70);
  // text("keep clicking", 200, 100, 600, 600);
 
}