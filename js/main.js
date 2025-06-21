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
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close nav if open
    if (navCollapse.classList.contains('open')) {
      navCollapse.classList.remove('open');
      hamburgerIcon.classList.remove('open');
    }
  });
});
