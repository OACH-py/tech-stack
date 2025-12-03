/**
 * Portfolio Scripts
 * Handles interactions, animations, and terminal effects.
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log("%c System Online ", "background: #2ea043; color: #fff; padding: 4px; border-radius: 4px;");

    // Initialize functions
    initMobileMenu();
    initTerminalEffect();
    initScrollReveal();
});

function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });

        // Close menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            });
        });
    }
}

function initTerminalEffect() {
    // Select elements to animate
    const elementsToType = [
        { selector: '.terminal-output.text-secondary', text: '"Estructurador de Ideas & Analista de Viabilidad/Rentabilidad."' },
        // We can add more if needed, but for now let's just animate the main role description
    ];

    // Simple typing effect for the role description
    const roleElement = document.querySelector('.terminal-output.text-secondary');
    if (roleElement) {
        const text = roleElement.textContent.trim().replace(/"/g, ''); // Remove quotes for typing
        roleElement.textContent = '"'; // Start with opening quote

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                roleElement.textContent = '"' + text.substring(0, i + 1);
                i++;
                setTimeout(typeWriter, 30); // Typing speed
            } else {
                roleElement.textContent = '"' + text + '"'; // Ensure closing quote
            }
        };

        // Start typing after a small delay
        setTimeout(typeWriter, 1000);
    }
}

function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    // Add fade-in class to sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add fade-in to cards with stagger
    document.querySelectorAll('.card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 100}ms`; // Stagger effect
        observer.observe(card);
    });
}
