document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Menu Toggle ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li a");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // --- 2. Active Page Highlight Logic ---
    let currentUrl = window.location.pathname.split('/').pop();

    if (currentUrl === '' || currentUrl === '/') {
        currentUrl = 'index.html';
    }

    links.forEach(link => {
        let linkHref = link.getAttribute('href');
        if (linkHref === currentUrl) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });

    // --- 3. Hero Background Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000); // Crossfades every 3 seconds
    }
});