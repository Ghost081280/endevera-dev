/* ============================================
   ENDEVERA COOKIE CONSENT BANNER
   Cookie consent management
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initCookieBanner();
});

function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieReject = document.getElementById('cookieReject');

    if (!cookieBanner || !cookieAccept || !cookieReject) return;

    // Show cookie banner after a short delay if no consent stored
    setTimeout(() => {
        if (!localStorage.getItem('cookieConsent')) {
            cookieBanner.classList.add('active');
        }
    }, 1500);

    // Accept cookies
    cookieAccept.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('active');
    });

    // Reject cookies
    cookieReject.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieBanner.classList.remove('active');
    });
}
