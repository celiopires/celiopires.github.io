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


/*function setup() {
	var w = document.getElementById('intro__header').offsetWidth;
	var h = document.getElementById('intro__header').offsetHeight;

	var c = createCanvas(w, h);
	c.parent('intro__header');
	
	var letters = [];
	var word = "A";

	for (var i = 0; i<30; i++){
		letters.push(new Letters());
	}
}
function draw() {
  background(0);
  for (var i=0; i<letters.length; i++){
    letters[i].display();
    letters[i].move();
  }
}

function Letters() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.speed = 1;
  
  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };
  
  this.display = function() {
    fill(255);
    text(word, this.x, this.y, 100, 100);
  };
}*/