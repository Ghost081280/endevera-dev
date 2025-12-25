/* ============================================
   ENDEVERA MEMBER PORTAL - DEALS
   Deals list page functionality
   ============================================ */

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!PortalUtils.checkMemberAuth()) return;

    // Set up filter tabs
    setupFilterTabs();

    // Load deals
    loadDeals();
});

function setupFilterTabs() {
    const tabs = document.querySelectorAll('.filter-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active state
            tabs.forEach(t => {
                t.classList.remove('active');
                t.style.color = 'var(--color-light-gray)';
                t.style.borderBottomColor = 'transparent';
            });
            tab.classList.add('active');
            tab.style.color = 'var(--color-gold)';
            tab.style.borderBottomColor = 'var(--color-gold)';
            
            // Update filter and reload
            currentFilter = tab.dataset.filter;
            loadDeals();
        });
    });

    // Style active tab
    const activeTab = document.querySelector('.filter-tab.active');
    if (activeTab) {
        activeTab.style.color = 'var(--color-gold)';
        activeTab.style.borderBottomColor = 'var(--color-gold)';
    }
}

function loadDeals() {
    const container = document.getElementById('dealsContainer');
    if (!container) return;

    PortalUtils.showLoading('dealsContainer');

    setTimeout(() => {
        let deals = PortalUtils.getDeals();

        // Apply filter
        switch(currentFilter) {
            case 'active':
                deals = deals.filter(d => d.status === 'active');
                break;
            case 'my-investments':
                deals = deals.filter(d => d.userInvested);
                break;
            case 'upcoming':
                deals = deals.filter(d => d.status === 'upcoming');
                break;
            case 'funded':
                deals = deals.filter(d => d.status === 'funded');
                break;
            case 'all':
            default:
                // Show all deals
                break;
        }

        if (deals.length === 0) {
            const emptyMessages = {
                'active': 'No active investment opportunities at this time.',
                'my-investments': 'You haven\'t invested in any deals yet. Browse available opportunities to get started.',
                'upcoming': 'No upcoming opportunities at this time. Check back soon!',
                'funded': 'No fully funded deals to display.',
                'all': 'No investment opportunities available.'
            };
            
            PortalUtils.showEmpty('dealsContainer', 'No Deals Found', emptyMessages[currentFilter] || emptyMessages['all'], 'briefcase');
            return;
        }

        // Render deals
        container.innerHTML = deals.map(deal => PortalUtils.renderDealCard(deal)).join('');
    }, 300);
}
