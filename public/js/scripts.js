// Scroll Reveal Animation
ScrollReveal().reveal('.feature-item', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    interval: 100
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

