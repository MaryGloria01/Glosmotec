document.addEventListener('DOMContentLoaded', function() {

    // --- 1. INITIALIZE ICONS & ANIMATIONS ---
    lucide.createIcons();
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

    // --- PRELOADER ---
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    });
    // Fallback if load event already fired
    if (document.readyState === 'complete') {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    }

    // --- TYPING ANIMATION ---
    const typedTextElement = document.querySelector('.typed-text');
    const words = ['Software Engineer', 'Web Developer', 'UI/UX Designer', 'Graphic Designer', 'Creative Technologist'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(typeEffect, typeSpeed);
    }

    if (typedTextElement) {
        setTimeout(typeEffect, 1000);
    }

    // --- STATS COUNTER ANIMATION ---
    const statNumbers = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCount = () => {
                current += increment;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCount);
                } else {
                    stat.textContent = target;
                }
            };
            updateCount();
        });
    }

    // Trigger stats animation when section is in view
    const statsSection = document.getElementById('stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !statsAnimated) {
                    animateStats();
                    statsAnimated = true;
                }
            });
        }, { threshold: 0.5 });
        statsObserver.observe(statsSection);
    }

    // --- FAQ ACCORDION ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // --- CONTACT FORM HANDLING ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const service = formData.get('service');
            const message = formData.get('message');

            // Create mailto link with form data
            const mailtoLink = `mailto:ogochukwunwanochiri@gmail.com?subject=New Inquiry: ${service}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AService: ${service}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;

            window.location.href = mailtoLink;

            // Reset form
            contactForm.reset();
        });
    }

    // --- 2. THEME TOGGLE ---
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // --- 3. CUSTOM CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    document.querySelectorAll('a, button, .project-card, .service-card, .testimonial-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('cursor-interact'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('cursor-interact'));
    });

    // Change cursor color on dark backgrounds
    document.querySelectorAll('.btn-primary, .stats-section, .mobile-nav a.active').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-on-dark'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-on-dark'));
    });
    
    // --- 4. HEADER SCROLL EFFECT ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- 5. MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');
        const icon = mobileMenuButton.querySelector('i');
        icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuButton.querySelector('i').className = 'fas fa-bars';
        });
    });

    // --- 6. MODAL HANDLING ---
    const setupModal = (buttonId, modalId) => {
        const viewBtn = document.getElementById(buttonId);
        const modal = document.getElementById(modalId);

        if (!viewBtn || !modal) return;

        const closeModalBtn = modal.querySelector('.modal-close-btn');

        const openModal = () => modal.classList.add('active');
        const closeModal = () => modal.classList.remove('active');

        viewBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    };

    setupModal('view-project-one-btn', 'project-one-modal');
    setupModal('view-designs-btn', 'design-modal');
    setupModal('view-project-three-btn', 'project-three-modal');

    // --- 7. SCROLL-TO-TOP BUTTON ---
    const scrollToTopBtn = document.getElementById('scroll-to-top');
    window.addEventListener('scroll', () => {
        scrollToTopBtn.classList.toggle('visible', window.scrollY > 300);
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 8. ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        // Check if at bottom of page
        const isAtBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50;

        if (isAtBottom) {
            // Set last section as active when at bottom
            current = 'contact';
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});