// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements that should fade in
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.feature-card, .step, .about-feature');

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (basic implementation)
const toggleMobileMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
};

// Track download button clicks (for analytics - optional)
const trackDownload = (platform) => {
    console.log(`Download clicked: ${platform}`);
    // Add your analytics tracking here (e.g., Google Analytics, Plausible, etc.)
    // Example: gtag('event', 'download_click', { platform: platform });
};

// Add click handlers to download buttons
document.addEventListener('DOMContentLoaded', () => {
    const appleBtn = document.querySelector('.download-btn.apple');
    const androidBtn = document.querySelector('.download-btn.android');

    if (appleBtn) {
        appleBtn.addEventListener('click', () => trackDownload('iOS'));
    }

    if (androidBtn && !androidBtn.classList.contains('disabled')) {
        androidBtn.addEventListener('click', () => trackDownload('Android'));
    }
});

// Add subtle parallax effect to hero gradient
window.addEventListener('scroll', () => {
    const heroGradient = document.querySelector('.hero-gradient');
    if (heroGradient && window.pageYOffset < window.innerHeight) {
        const scrolled = window.pageYOffset;
        heroGradient.style.transform = `translateX(-50%) translateY(${scrolled * 0.5}px)`;
    }
});

// Prevent disabled button clicks
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.download-btn.disabled').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            // Could show a tooltip or message here
            console.log('Android version coming soon!');
        });
    });
});
