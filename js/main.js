const hamburgerToggle = document.getElementById("hamburger-toggle");
const navCollapse = document.getElementById("nav-collapse");
const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburgerToggle.addEventListener("click", () => {
  navCollapse.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
});

// Smooth scroll + close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      const offsetTop = target.offsetTop - 10; // Scroll to 10px above the section
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }

    // Close mobile nav
    if (navCollapse.classList.contains('open')) {
      navCollapse.classList.remove('open');
      hamburgerIcon.classList.remove('open');
    }
  });
});
