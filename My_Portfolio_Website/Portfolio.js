document.addEventListener('DOMContentLoaded', function() {

    // --- 1. INITIALIZE ICONS & ANIMATIONS ---
    lucide.createIcons();
    AOS.init({
        duration: 800,
        once: true,
        offset: 50,
    });

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
    
    // --- 4. HEADER SCROLL EFFECT ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // --- 5. MOBILE MENU ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.remove('active'));
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
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) { 
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});