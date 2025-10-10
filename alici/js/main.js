document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector(".navbar");
  const scrollThreshold = 50;

  // Scroll-Effekt für die Navbar
  if (nav) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > scrollThreshold) {
        nav.classList.add("header-scrolled");
      } else {
        nav.classList.remove("header-scrolled");
      }
    });
  }

  // Schließt das mobile Menü nach Klick auf einen Link
  const navLinks = document.querySelectorAll('.nav-link');
  const navCollapse = document.querySelector('.navbar-collapse');
  
  if (navLinks && navCollapse) {
      navLinks.forEach(link => {
          link.addEventListener('click', () => {
              if (navCollapse.classList.contains('show')) {
                 
                  new bootstrap.Collapse(navCollapse).hide();
              }
          });
      });
  }
});
