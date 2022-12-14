// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var closeModal = document.getElementById("closeModal");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}




// get the full URL
// var pathArray = window.location.pathname;

// var newPathname = "";
// for (i = 0; i < pathArray.length; i++) {
//   newPathname += "/";
//   newPathname += pathArray[i];
// }

// if(pathArray === '/telefonica.html'){
// 	window.scrollTo({
// 		top: 500,
// 		behavior: 'smooth'
// 	});
// } else {
// 	console.log("Not working");
// }



// var anchor = document.querySelector('#intro__header');

// setTimeout(function () {
//   // anchor.scrollTo(500, 0);
// 	anchor.scrollTo({
// 		top: 500,
// 		left: 100,
// 		behavior: 'smooth'
// 	});
// }, 300);

// window.scrollTo({
//   top: 500,
//   left: 100,
//   behavior: 'smooth'
// });