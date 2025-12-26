/* ============================================
   ENDEVERA DEVELOP PAGE SCRIPT
   Page-specific functionality
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initDevelopPage();
});

function initDevelopPage() {
    initAnimatedCounters();
}

// ============================================
// ANIMATED COUNTERS
// ============================================
function initAnimatedCounters() {
    const stats = document.querySelectorAll('.cta-stat-value');
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
