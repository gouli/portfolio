document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Enable smooth scrolling
            });

            // Close mobile menu if open
            const navLinks = document.getElementById('nav-links');
            const hamburger = document.getElementById('hamburger-menu');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Mobile Navigation Toggle (Hamburger Menu)
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) { // Ensure elements exist before adding listeners
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle 'active' class for showing/hiding menu
            hamburger.classList.toggle('active'); // Toggle 'active' class for animating hamburger icon
        });
    }

    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Advanced Parallax (if needed, this is a basic example)
    // This isn't strictly necessary with background-attachment: fixed,
    // but useful if you wanted more complex scroll effects.
    // window.addEventListener('scroll', function() {
    //     document.querySelectorAll('.parallax').forEach(parallax => {
    //         const speed = parseFloat(parallax.dataset.parallaxSpeed || 0.5);
    //         const yPos = -(window.scrollY * speed) + 'px';
    //         parallax.style.backgroundPositionY = yPos;
    //     });
    // });
});
