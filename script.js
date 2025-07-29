document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var text = document.querySelector('#cu-esports-overlay h1');
    var subText = document.querySelector('#cu-esports-overlay p');
    text.style.transition = "opacity 1s";
    subText.style.transition = "opacity 1s";
    text.style.opacity = 0;
    subText.style.opacity = 0;

    var overlay = document.getElementById('cu-esports-overlay');
    overlay.style.transition = "opacity 1s";
    overlay.style.opacity = 0;

    overlay.addEventListener('transitionend', function() {
      overlay.parentNode.removeChild(overlay);
    });

  }, 2000);
});

// Smooth scrolling to sections when navbar links are clicked
document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior

      // Get the target section id from the href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Smoothly scroll to the target section
      window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
      });
  });
});

// Smooth scrolling to sections when navbar links are clicked
document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor click behavior

      // Get the target section id from the href attribute
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Smoothly scroll to the target section
      window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight,
          behavior: 'smooth'
      });

      // Collapse the navbar on mobile after clicking a link
      document.querySelector('.nav-list').classList.remove('active');
      document.querySelector('.hamburger').classList.remove('active');
  });
});

// Toggle the visibility of the navbar when the hamburger menu is clicked
document.querySelector('.hamburger').addEventListener('click', function() {
  document.querySelector('.nav-list').classList.toggle('active');
  this.classList.toggle('active');
});