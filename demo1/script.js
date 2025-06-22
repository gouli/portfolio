document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');
  const nav = document.querySelector('nav');
  const burgerBtn = document.createElement('div');
  burgerBtn.classList.add('hamburger');
  burgerBtn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(burgerBtn);

  burgerBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Header background toggle on scroll
  const checkHeader = () => {
    if (window.scrollY > 80) {
      header.classList.remove('transparent');
      header.classList.add('solid');
    } else {
      header.classList.add('transparent');
      header.classList.remove('solid');
    }
  };
  checkHeader();
  window.addEventListener('scroll', checkHeader);

  // Reveal sections on scroll
  const sections = document.querySelectorAll('.section');
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => revealObserver.observe(sec));
});
