/* ============================================
   ENDEVERA MEMBER NAVIGATION COMPONENT
   Member-specific navigation functionality
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initMemberNavigation();
});

function initMemberNavigation() {
    const navMember = document.getElementById('navMember');
    const navToggleMember = document.getElementById('navToggleMember');
    const mobileNavMember = document.getElementById('mobileNavMember');
    const mobileNavOverlayMember = document.getElementById('mobileNavOverlayMember');
    const navLogout = document.getElementById('navLogout');
    const mobileNavLogout = document.getElementById('mobileNavLogout');
    const mobileNavLinks = document.querySelectorAll('#mobileNavMember .mobile-nav-links a');

    if (!navMember) return;

    // Set active page
    setActivePage();
    
    // Load user name in mobile nav
    loadUserName();

    // Mobile menu toggle
    if (navToggleMember) {
        navToggleMember.addEventListener('click', toggleMobileNav);
    }

    // Overlay click
    if (mobileNavOverlayMember) {
        mobileNavOverlayMember.addEventListener('click', closeMobileNav);
    }

    // Close on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMobileNav, 300);
        });
    });

    // Logout handlers
    if (navLogout) {
        navLogout.addEventListener('click', handleLogout);
    }
    
    if (mobileNavLogout) {
        mobileNavLogout.addEventListener('click', handleLogout);
    }

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navMember.classList.add('scrolled');
        } else {
            navMember.classList.remove('scrolled');
        }
    });

    // Close on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && mobileNavMember && mobileNavMember.classList.contains('active')) {
            closeMobileNav();
        }
    });

    function toggleMobileNav() {
        const isActive = mobileNavMember.classList.contains('active');
        
        if (isActive) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    }

    function openMobileNav() {
        if (mobileNavMember) mobileNavMember.classList.add('active');
        if (navToggleMember) navToggleMember.classList.add('active');
        if (mobileNavOverlayMember) mobileNavOverlayMember.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileNav() {
        if (mobileNavMember) mobileNavMember.classList.remove('active');
        if (navToggleMember) navToggleMember.classList.remove('active');
        if (mobileNavOverlayMember) mobileNavOverlayMember.classList.remove('active');
        document.body.style.overflow = '';
    }

    function setActivePage() {
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
        
        navLinks.forEach(link => {
            const linkPath = new URL(link.href).pathname;
            if (currentPath === linkPath) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    function loadUserName() {
        const mobileNavUserName = document.getElementById('mobileNavUserName');
        if (!mobileNavUserName) return;

        // Get user data
        let userData = null;
        
        // Try to get from PortalUtils
        if (typeof window.PortalUtils !== 'undefined' && window.PortalUtils.getMemberData) {
            userData = window.PortalUtils.getMemberData();
        } 
        // Try to get from MOCK_DATA
        else if (typeof MOCK_DATA !== 'undefined' && MOCK_DATA.currentUser) {
            userData = MOCK_DATA.currentUser;
        }

        // Set name
        if (userData) {
            mobileNavUserName.textContent = `${userData.firstName} ${userData.lastName}`;
        } else {
            mobileNavUserName.textContent = 'Member';
        }
    }

    function handleLogout() {
        if (confirm('Are you sure you want to logout?')) {
            // Clear authentication
            localStorage.removeItem('endevera_auth');
            localStorage.removeItem('endevera_role');
            localStorage.removeItem('endevera_user');
            
            // Redirect to login
            window.location.href = '/login.html';
        }
    }
}
