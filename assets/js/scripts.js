// HEADER
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

// PROJETCS DROPDOWN
var selectBtn = document.getElementsByClassName('dropdown'),
    dropdownMenu = document.getElementsByClassName('dropdownMenu');

for (i = 0; i < selectBtn.length; i++) {
    selectBtn[i].onclick = function() {
        if(this.className.indexOf('active') > -1){
            for (j = 0; j < selectBtn.length; j++) {
                removeClass(selectBtn[j], 'active')
            }
        } else {
            addClass(this, 'active');            
        }               
    };
}

window.addEventListener('click', function(event){
    for (i = 0; i < selectBtn.length; i++) {
        if (event.target != selectBtn[i].children[0]){
            removeClass(selectBtn[i], 'active');
        }
    }
});
function addClass(el, classToToggle) {
    var classN = el.className
    if(classN.indexOf(classToToggle) < 1){
        el.className = classN + " " + classToToggle;
    }
}
function removeClass(el, classToToggle) {
    var classN = el.className;
    if(classN.indexOf(classToToggle) > -1){
        el.className =  classN.replace(" " + classToToggle, '');
	}
}




// Starting the fun
/*
var bubbles = [];

function setup() {
    colorMode(RGB);
    var cnv = createCanvas(innerWidth, innerHeight-100);
    cnv.id('heroShowcase');
    cnv.class('hero');
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
      stroke(0,0,0,20);
      strokeWeight(1);
      fill(255,255,255);
      ellipse(this.x, this.y, 100, 100);
    pop();
    
    push();
      translate(50,50);
      stroke(0,0,0,10);
      strokeWeight(1);
      fill(255,255,255);
      rect(this.x*0.2, this.y, 40, 40);
    pop();
    
    stroke(0,0,0,40);
    strokeWeight(1);
    fill(255,255,255);
    rect(this.x, this.y, 20, 20);
  };
} */