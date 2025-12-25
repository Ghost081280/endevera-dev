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
    alert('Edit Profile\n\nIn production, this would open a form to edit:\n- Contact information\n- Company details\n- Communication preferences');
}

function changePassword() {
    alert('Change Password\n\nIn production, this would open a secure form to:\n- Verify current password\n- Set new password\n- Confirm new password');
}

function contactSupport() {
    alert('Contact Support\n\nEmail: support@endevera.com\nPhone: +1 (561) 555-0100\n\nIn production, this would open a support ticket form or live chat.');
}
