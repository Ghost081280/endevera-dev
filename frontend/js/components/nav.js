/* ============================================
   ENDEVERA NAVIGATION COMPONENT
   Mobile menu toggle and scroll effects
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initNavigation();
});

function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a, .mobile-nav-login, .mobile-nav-cta');

    if (!nav) return;

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', toggleMobileNav);
    }

    // Overlay click
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', closeMobileNav);
    }

    // Close on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMobileNav, 300);
        });
    });

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Close on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && mobileNav && mobileNav.classList.contains('active')) {
            closeMobileNav();
        }
    });

    function toggleMobileNav() {
        const isActive = mobileNav.classList.contains('active');
        
        if (isActive) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    }

    function openMobileNav() {
        if (mobileNav) mobileNav.classList.add('active');
        if (navToggle) navToggle.classList.add('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        if (mobileNav) mobileNav.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
        if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}
