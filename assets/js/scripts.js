// get the full URL
var pathArray = window.location.pathname;

// var newPathname = "";
// for (i = 0; i < pathArray.length; i++) {
//   newPathname += "/";
//   newPathname += pathArray[i];
// }

if(pathArray === '/telefonica.html'){
	window.scrollTo({
		top: 500,
		behavior: 'smooth'
	});
} else {
	console.log("😢😢😢😢");
}



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