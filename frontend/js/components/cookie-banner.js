/* ============================================
   ENDEVERA COOKIE BANNER COMPONENT
   Cookie consent banner functionality
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initCookieBanner();
});

function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieReject = document.getElementById('cookieReject');
    
    if (!cookieBanner) return;
    
    // Show cookie banner after a short delay
    setTimeout(() => {
        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.classList.add('active');
        }
    }, 1500);
    
    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('active');
        });
    }
    
    if (cookieReject) {
        cookieReject.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieBanner.classList.remove('active');
        });
    }
}
