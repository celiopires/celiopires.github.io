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
var letters = [];
var letter = "A";

function setup() {
    var cnv = createCanvas(innerWidth, innerHeight-100);
    cnv.id('heroShowcase');
    cnv.class('hero');
    cnv.style('position','absolute'); 
    cnv.style('top', '0');
    cnv.style('right', '0');
    cnv.style('left', '0');
    cnv.parent('heroStand');
  for (var i = 0; i<30; i++){
    letters.push(new Letters());
  }
}
function draw() {
  background(255);
  for (var i=0; i<letters.length; i++){
    letters[i].display();
    letters[i].move();
  }
}

function Letters() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.speed = 0.5;
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  
  this.display = function() {
    fill(150);
    text(letter, this.x, this.y, 100, 100);
  };
}