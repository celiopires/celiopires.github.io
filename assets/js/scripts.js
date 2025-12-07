// AUTO-UPDATE COPYRIGHT YEAR
document.querySelector('#copyright-year').innerText = new Date().getFullYear();

// HEADER SHOW/HIDE ON SCROLL
(function() {
  let lastScrollTop = 0;
  const header = document.querySelector('header');
  let ticking = false;

  function updateHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) { // Only hide/show after scrolling past 100px
      if (scrollTop > lastScrollTop) {
        // Scrolling down - hide header
        header.classList.add('header-hidden');
      } else {
        // Scrolling up - show header
        header.classList.remove('header-hidden');
      }
    } else {
      // Always show header at the top
      header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(updateHeader);
      ticking = true;
    }
  });
})();

// MODAL 

// Get the modal
var modal = document.getElementById('modal');

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the div that closes the modal
var closeModal = document.getElementById("closeModal");

// Get the div that closes the modal
var overlayModal = document.getElementById("overlayModal");

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
overlayModal.onclick = function() {
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