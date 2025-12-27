/* ============================================
   ENDEVERA NAVIGATION COMPONENT
   Mobile menu toggle, scroll effects, and smart path detection
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

    // Detect if we're on index.html or a pillar page
    const currentPath = window.location.pathname;
    const isOnIndex = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
    const isInPublicFolder = currentPath.includes('/public/');
    
    // Determine the base path to index.html
    let indexPath = 'index.html';
    if (isInPublicFolder) {
        indexPath = '../../index.html';
    }
    
    console.log('Nav Detection:', { currentPath, isOnIndex, isInPublicFolder, indexPath });

    // Set up all navigation links
    setupNavLinks(isOnIndex, indexPath);

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

    function setupNavLinks(isOnIndex, indexPath) {
        // Logo link
        const navLogo = document.getElementById('navLogo');
        if (navLogo) {
            navLogo.href = isOnIndex ? '#' : indexPath;
        }

        // Desktop nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const target = link.getAttribute('data-target');
            if (isOnIndex) {
                link.href = `#${target}`;
            } else {
                link.href = `${indexPath}#${target}`;
            }
        });

        // Mobile nav links
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            const target = link.getAttribute('data-target');
            if (isOnIndex) {
                link.href = `#${target}`;
            } else {
                link.href = `${indexPath}#${target}`;
            }
        });

        // Login links
        const navLogin = document.getElementById('navLogin');
        const mobileNavLogin = document.getElementById('mobileNavLogin');
        const loginPath = isInPublicFolder ? '../../login.html' : 'login.html';
        if (navLogin) navLogin.href = loginPath;
        if (mobileNavLogin) mobileNavLogin.href = loginPath;

        // Contact CTA links
        const navCta = document.getElementById('navCta');
        const mobileNavCta = document.getElementById('mobileNavCta');
        if (isOnIndex) {
            if (navCta) navCta.href = '#contact';
            if (mobileNavCta) mobileNavCta.href = '#contact';
        } else {
            if (navCta) navCta.href = `${indexPath}#contact`;
            if (mobileNavCta) mobileNavCta.href = `${indexPath}#contact`;
        }

        console.log('Nav links configured for:', isOnIndex ? 'index page' : 'pillar page');
    }

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
