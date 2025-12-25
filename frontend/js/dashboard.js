/* ============================================
   ENDEVERA MEMBER PORTAL - DASHBOARD
   Dashboard page functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!PortalUtils.checkMemberAuth()) return;

    // Load dashboard data
    loadDashboard();
});

function loadDashboard() {
    const userData = PortalUtils.getMemberData();
    
    // Set welcome message
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        welcomeMessage.textContent = `Welcome back, ${userData.firstName}`;
    }

    // Load stats
    loadStats(userData);

    // Load active investments
    loadActiveDeals();

    // Load available opportunities
    loadAvailableDeals();

    // Load recent activity
    loadRecentActivity();
}

function loadStats(userData) {
    const statsGrid = document.getElementById('statsGrid');
    if (!statsGrid) return;

    const stats = [
        {
            icon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
            label: 'Total Invested',
            value: PortalUtils.formatCurrency(userData.investmentTotal || 0)
        },
        {
            icon: '<line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>',
            label: 'Total Returns',
            value: PortalUtils.formatCurrency(userData.totalReturns || 0),
            change: '+7.4%',
            positive: true
        },
        {
            icon: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
            label: 'Active Investments',
            value: userData.activeDeals || 0
        },
        {
            icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
            label: 'Opportunities',
            value: PortalUtils.getDeals().filter(d => d.status === 'active' && !d.userInvested).length
        }
    ];

    statsGrid.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <div class="stat-card-header">
                <div class="stat-card-icon">
                    <svg viewBox="0 0 24 24">${stat.icon}</svg>
                </div>
            </div>
            <div class="stat-card-label">${stat.label}</div>
            <div class="stat-card-value">${stat.value}</div>
            ${stat.change ? `<div class="stat-card-change ${stat.positive ? 'positive' : 'negative'}">${stat.change} this quarter</div>` : ''}
        </div>
    `).join('');
}

function loadActiveDeals() {
    const container = document.getElementById('activeDealsContainer');
    if (!container) return;

    const activeDeals = PortalUtils.getUserDeals();

    if (activeDeals.length === 0) {
        PortalUtils.showEmpty('activeDealsContainer', 'No Active Investments', 'You haven\'t invested in any deals yet. Browse available opportunities to get started.', 'briefcase');
        return;
    }

    container.innerHTML = activeDeals.slice(0, 2).map(deal => PortalUtils.renderDealCard(deal)).join('');
}

function loadAvailableDeals() {
    const container = document.getElementById('availableDealsContainer');
    if (!container) return;

    const availableDeals = PortalUtils.getDeals()
        .filter(deal => deal.status === 'active' && !deal.userInvested)
        .slice(0, 2);

    if (availableDeals.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-light-gray); padding: 40px 20px;">No new opportunities available at this time.</p>';
        return;
    }

    container.innerHTML = availableDeals.map(deal => PortalUtils.renderDealCard(deal)).join('');
}

function loadRecentActivity() {
    const container = document.getElementById('activityList');
    if (!container) return;

    const activities = PortalUtils.getActivityLog().slice(0, 5);

    if (activities.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--color-light-gray); padding: 40px 20px;">No recent activity</p>';
        return;
    }

    container.innerHTML = activities.map(activity => PortalUtils.renderActivityItem(activity)).join('');
}
