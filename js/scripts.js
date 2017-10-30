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