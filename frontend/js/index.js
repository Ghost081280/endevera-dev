/* ============================================
   ENDEVERA INDEX PAGE SCRIPT
   Homepage-specific functionality
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initIndexPage();
});

function initIndexPage() {
    initInvestorModal();
    initContactForm();
    initAnimatedCounters();
}

// ============================================
// INVESTOR MODAL
// ============================================
function initInvestorModal() {
    const investorBtn = document.getElementById('investorBtn');
    const investorModal = document.getElementById('investorModal');
    const investorModalClose = document.getElementById('investorModalClose');
    const investorForm = document.getElementById('investorForm');
    
    if (!investorBtn || !investorModal) return;
    
    investorBtn.addEventListener('click', () => {
        investorModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    if (investorModalClose) {
        investorModalClose.addEventListener('click', () => {
            investorModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    investorModal.addEventListener('click', (e) => {
        if (e.target === investorModal) {
            investorModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    if (investorForm) {
        investorForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your application. Our team will review your information and contact you within 48 business hours.');
            investorModal.classList.remove('active');
            document.body.style.overflow = '';
            investorForm.reset();
        });
    }
}

// ============================================
// CONTACT FORM
// ============================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry. Our team will contact you within one business day.');
        contactForm.reset();
    });
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initAnimatedCounters() {
    const stats = document.querySelectorAll('.stat-value');
    if (stats.length === 0) return;
    
    const statsObserved = new Set();
    
    function animateCounter(el) {
        const text = el.textContent;
        const hasPlus = text.includes('+');
        const hasDollar = text.includes('$');
        const hasB = text.includes('B');
        const numericValue = parseFloat(text.replace(/[^0-9.]/g, ''));
        
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;
        let current = 0;
        
        const increment = numericValue / steps;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let display = '';
            if (hasDollar) display += '$';
            
            if (hasB) {
                display += current.toFixed(current === numericValue ? 1 : 1) + 'B';
            } else {
                display += Math.floor(current);
            }
            
            if (hasPlus) display += '+';
            
            el.textContent = display;
        }, stepDuration);
    }
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsObserved.has(entry.target)) {
                statsObserved.add(entry.target);
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}
