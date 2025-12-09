// AUTO-UPDATE COPYRIGHT YEAR
const copyrightYear = document.querySelector('#copyright-year');
if (copyrightYear) {
  copyrightYear.innerText = new Date().getFullYear();
}

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
(function() {
  // Get the modal
  var modal = document.getElementById('modal');
  var btn = document.getElementById("modalBtn");
  var closeModal = document.getElementById("closeModal");
  var overlayModal = document.getElementById("overlayModal");

  // Only set up modal handlers if modal elements exist
  if (modal && btn) {
    btn.onclick = function() {
      modal.style.display = "block";
    }
  }

  if (modal && closeModal) {
    closeModal.onclick = function() {
      modal.style.display = "none";
    }
  }

  if (modal && overlayModal) {
    overlayModal.onclick = function() {
      modal.style.display = "none";
    }
  }
})();

// DROPDOWN TOGGLE (CLICK INSTEAD OF HOVER)
(function() {
  function initDropdown() {
    const dropdown = document.querySelector('.dropdown');
    if (!dropdown) return;
    
    const dropdownLink = dropdown.querySelector('a.about__header');
    if (!dropdownLink) return;
    
    // Toggle dropdown on click
    dropdownLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking on a menu item
    const dropdownMenuItems = dropdown.querySelectorAll('.dropdownMenu a');
    dropdownMenuItems.forEach(function(item) {
      item.addEventListener('click', function() {
        dropdown.classList.remove('active');
      });
    });
    
    // Close dropdown when clicking outside (with a small delay to allow toggle to complete)
    setTimeout(function() {
      document.addEventListener('click', function(e) {
        if (dropdown && !dropdown.contains(e.target)) {
          dropdown.classList.remove('active');
        }
      });
    }, 0);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDropdown);
  } else {
    initDropdown();
  }
})();