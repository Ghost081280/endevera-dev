/* ============================================
   ENDEVERA MEMBER PORTAL - PROFILE
   Member profile page functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    if (!PortalUtils.checkMemberAuth()) return;
    loadProfile();
});

function loadProfile() {
    const userData = PortalUtils.getMemberData();

    // Populate fields that exist in the new layout
    document.getElementById('firstName').textContent = userData.firstName || 'N/A';
    document.getElementById('lastName').textContent = userData.lastName || 'N/A';
    document.getElementById('email').textContent = userData.email || 'N/A';
    document.getElementById('phone').textContent = userData.phone || 'N/A';
    document.getElementById('company').textContent = userData.company || 'N/A';
    document.getElementById('memberSince').textContent = userData.memberSince ? PortalUtils.formatDate(userData.memberSince) : 'N/A';
    document.getElementById('investmentTotal').textContent = PortalUtils.formatCurrency(userData.investmentTotal || 0);
    document.getElementById('activeDeals').textContent = userData.activeDeals || 0;
    document.getElementById('totalReturns').textContent = PortalUtils.formatCurrency(userData.totalReturns || 0);
}

function editProfile() {
    window.showComingSoon('Edit Profile');
}

function changePassword() {
    window.showComingSoon('Change Password');
}

function contactSupport() {
    window.showComingSoon('Contact Support');
}

// Auto-logout timer management
function updateInactivityTimeout() {
    const select = document.getElementById('inactivityTimeout');
    const timeout = parseInt(select.value);
    localStorage.setItem('endevera_inactivity_timeout', timeout);
    
    if (timeout === 0) {
        showSettingsSaved('Auto-logout disabled. You will remain logged in until you manually log out.');
    } else {
        showSettingsSaved(`Auto-logout enabled. You will be logged out after ${timeout} minutes of inactivity.`);
    }
}

// Settings saved confirmation modal
function showSettingsSaved(message) {
    const modal = window.createModal({
        title: 'Settings Updated',
        message: message,
        iconSvg: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>`,
        buttons: [
            {
                text: 'OK',
                style: 'primary',
                onClick: () => {
                    window.closeModal();
                    window.location.reload();
                }
            }
        ]
    });
    document.body.appendChild(modal);
}

// Load saved timeout preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTimeout = localStorage.getItem('endevera_inactivity_timeout') || '0';
    const select = document.getElementById('inactivityTimeout');
    if (select) {
        select.value = savedTimeout;
    }
});
