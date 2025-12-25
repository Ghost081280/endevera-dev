/* ============================================
   ENDEVERA LOGIN PAGE
   Authentication functionality
   Future: 2FA, OAuth, Token-based auth
   ============================================ */

// Tab Switching
function initLoginTabs() {
    const tabs = document.querySelectorAll('.login-tab');
    const formContainers = document.querySelectorAll('.login-form-container');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTab = tab.dataset.tab;
            
            // Update active states
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show corresponding form
            formContainers.forEach(container => {
                container.classList.remove('active');
            });
            document.getElementById(`${targetTab}FormContainer`).classList.add('active');
            
            // Clear error messages
            document.getElementById('loginError').classList.remove('active');
            document.getElementById('applyError').classList.remove('active');
            document.getElementById('applySuccess').classList.remove('active');
        });
    });
}

// Password Toggle
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const eyeOpen = button.querySelector('.eye-open');
    const eyeClosed = button.querySelector('.eye-closed');
    
    if (input.type === 'password') {
        input.type = 'text';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = 'block';
    } else {
        input.type = 'password';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = 'none';
    }
}

// Login Form Handler
function initLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    if (!loginForm) return;

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(loginForm);
        const email = formData.get('email');
        const password = formData.get('password');
        
        const submitBtn = loginForm.querySelector('[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'LOGGING IN...';
        loginError.classList.remove('active');

        // Simulate authentication delay
        // TODO: Replace with actual API call when backend is ready
        // TODO: Add 2FA verification step
        // TODO: Add token-based authentication
        setTimeout(() => {
            // Check demo credentials (will be replaced with API call)
            if (email === DEMO_CREDENTIALS.member.email && password === DEMO_CREDENTIALS.member.password) {
                // Set authentication
                // TODO: Store JWT token instead of basic auth flag
                localStorage.setItem('endevera_auth', 'true');
                localStorage.setItem('endevera_role', 'investor');
                localStorage.setItem('endevera_user', JSON.stringify(MOCK_DATA.currentUser));
                
                // TODO: Redirect after 2FA verification
                window.location.href = '/frontend/portal/dashboard.html';
            } else {
                // Show error
                loginError.textContent = 'Invalid email or password. Please use demo credentials.';
                loginError.classList.add('active');
                submitBtn.disabled = false;
                submitBtn.textContent = 'LOGIN TO PORTAL';
            }
        }, 800);
    });
}

// Apply Form Handler (Accredited Investor Application)
function initApplyForm() {
    const applyForm = document.getElementById('applyForm');
    const applyError = document.getElementById('applyError');
    const applySuccess = document.getElementById('applySuccess');

    if (!applyForm) return;

    applyForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(applyForm);
        const data = Object.fromEntries(formData.entries());
        
        const submitBtn = applyForm.querySelector('[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'SUBMITTING...';
        applyError.classList.remove('active');
        applySuccess.classList.remove('active');

        // Simulate application submission
        // TODO: Replace with actual API call when backend is ready
        setTimeout(() => {
            // Show success message (SAME AS INDEX.HTML INVESTOR APPLICATION)
            applySuccess.innerHTML = '<strong>Application Received!</strong><br>Thank you for your interest in Endevera. Our team will review your application and contact you within 48 business hours.';
            applySuccess.classList.add('active');
            applyForm.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'SUBMIT APPLICATION';
            
            // Scroll to success message
            applySuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // TODO: Send application data to backend API
            // TODO: Generate application tracking token
        }, 800);
    });
}

// Check if user is already authenticated
function checkExistingAuth() {
    const isAuthenticated = localStorage.getItem('endevera_auth');
    const userRole = localStorage.getItem('endevera_role');
    
    // TODO: Validate JWT token instead of basic flag
    // TODO: Check token expiration
    if (isAuthenticated && userRole === 'investor') {
        // Already logged in, redirect to portal
        window.location.href = '/frontend/portal/dashboard.html';
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    checkExistingAuth();
    initLoginTabs();
    initLoginForm();
    initApplyForm();
});

// Make togglePassword available globally for inline onclick
window.togglePassword = togglePassword;
