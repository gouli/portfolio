document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    // Close the mobile menu if open
    const navCollapse = document.getElementById('nav-collapse');
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    if (navCollapse.classList.contains('open')) {
      navCollapse.classList.remove('open');
    }
  });
});
