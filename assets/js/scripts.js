var pageTop, yPos;

function yScroll() {
  yPos = window.pageYOffset;
  if(yPos > 0){
  	document.getElementById("header").classList.add("fixed");
  } else {
  	document.getElementById("header").classList.remove("fixed");
  }
}

window.addEventListener("scroll", yScroll);

// Starting the fun
var bubbles = [];

function setup() {
    var cnv = createCanvas(innerWidth, innerHeight-100);
    cnv.id('heroShowcase');
    cnv.class('hero');
    // cnv.style('position','absolute'); 
    // cnv.style('top', '0');
    // cnv.style('right', '0');
    // cnv.style('left', '0');
    cnv.parent('heroStand');
    for (var i = 0; i<30; i++){
      bubbles.push(new Bubbles());
    }
}
function draw() {
  background(255);
  for (var i=0; i<20; i++){
    bubbles[i].shape1();
    bubbles[i].move();
  }
}

function Bubbles() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.speed = 0.2;

  this.move = function() {
    this.x += random(-this.speed*1.4, this.speed);
    this.y += random(-this.speed*0.4, this.speed);
  };

  this.shape1 = function() {
    push();
      translate(100,100);
      stroke(0,0,0,40);
      strokeWeight(1);
      fill(0,0,0,0);
      ellipse(this.x, this.y, 80, 80);
    pop();
    
    push();
      translate(50,50);
      stroke(0,0,0,30);
      strokeWeight(1);
      fill(0,0,0,0);
      rect(this.x, this.y, 40, 40);
    pop();
    
    stroke(0,0,0,20);
    strokeWeight(1);
    fill(0,0,0,0);
    rect(this.x, this.y, 20, 20);
  };
}
