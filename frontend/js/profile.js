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

    // Populate fields
    document.getElementById('firstName').textContent = userData.firstName || 'N/A';
    document.getElementById('lastName').textContent = userData.lastName || 'N/A';
    document.getElementById('email').textContent = userData.email || 'N/A';
    document.getElementById('phone').textContent = userData.phone || 'N/A';
    document.getElementById('company').textContent = userData.company || 'N/A';
    document.getElementById('city').textContent = userData.city || 'N/A';
    document.getElementById('state').textContent = userData.state || 'N/A';
    document.getElementById('accreditationStatus').textContent = userData.accreditationStatus || 'N/A';
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
        alert('Auto-logout disabled. You will remain logged in until you manually log out.');
    } else {
        alert(`Auto-logout enabled. You will be logged out after ${timeout} minutes of inactivity.`);
    }
    
    // Reload page to reinitialize timer
    window.location.reload();
}

// Load saved timeout preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTimeout = localStorage.getItem('endevera_inactivity_timeout') || '0';
    const select = document.getElementById('inactivityTimeout');
    if (select) {
        select.value = savedTimeout;
    }
});
