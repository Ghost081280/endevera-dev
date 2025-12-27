/* ============================================
   ENDEVERA COOKIE BANNER COMPONENT
   Cookie consent banner functionality
   Shows chatbot button after user gives consent
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initCookieBanner();
});

function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccept = document.getElementById('cookieAccept');
    const cookieReject = document.getElementById('cookieReject');
    
    if (!cookieBanner) return;
    
    // Check if consent already given
    const existingConsent = localStorage.getItem('cookieConsent');
    
    if (existingConsent) {
        // Consent already given - show chatbot immediately
        if (typeof window.showChatbotButton === 'function') {
            window.showChatbotButton();
        }
    } else {
        // Show cookie banner after a short delay
        setTimeout(() => {
            cookieBanner.classList.add('active');
        }, 1500);
    }
    
    if (cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieBanner.classList.remove('active');
            
            // Show chatbot button after banner slides away
            setTimeout(() => {
                if (typeof window.showChatbotButton === 'function') {
                    window.showChatbotButton();
                }
            }, 400);
        });
    }
    
    if (cookieReject) {
        cookieReject.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieBanner.classList.remove('active');
            
            // Show chatbot button even on reject (they still get the service)
            setTimeout(() => {
                if (typeof window.showChatbotButton === 'function') {
                    window.showChatbotButton();
                }
            }, 400);
        });
    }
}
