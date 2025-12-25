/* ============================================
   ENDEVERA POLICY PAGE SCRIPT
   Page-specific functionality
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initPage();
});

function initPage() {
    initScrollAnimations();
    initStatCounters();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.capability-card, .process-step, .service-card, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}


// ============================================
// ANIMATED STAT COUNTERS (UNIVERSAL)
// ============================================
function initStatCounters() {
    // Target all stat number elements
    const stats = document.querySelectorAll(".stat-number, .intro-stat-number, .impact-stat-number, .stat-value");
    if (stats.length === 0) return;
    
    const statsObserved = new Set();
    
    function animateCounter(el) {
        const text = el.textContent.trim();
        const hasPlus = text.includes("+");
        const hasDollar = text.includes("$");
        const hasB = text.includes("B");
        const hasM = text.includes("M");
        const hasK = text.includes("K");
        
        const numericValue = parseFloat(text.replace(/[^0-9.]/g, ""));
        if (isNaN(numericValue) || numericValue === 0) return;
        
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
            
            let display = "";
            if (hasDollar) display += "$";
            
            if (hasB && numericValue >= 1) {
                display += current.toFixed(1);
            } else {
                display += Math.floor(current);
            }
            
            if (hasB) display += "B";
            if (hasM) display += "M";
            if (hasK) display += "K";
            if (hasPlus) display += "+";
            
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
