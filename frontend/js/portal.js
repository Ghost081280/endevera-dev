/* ============================================
   ENDEVERA MEMBER PORTAL SCRIPT
   Member portal functionality and data handling
   ============================================ */

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    checkMemberAuth();
});

// ============================================
// AUTHENTICATION
// ============================================
function checkMemberAuth() {
    const isAuthenticated = localStorage.getItem('endevera_auth');
    const userRole = localStorage.getItem('endevera_role');
    
    // If not authenticated or not a member, redirect to login
    if (!isAuthenticated || userRole !== 'investor') {
        window.location.href = '/endevera-dev/login.html';
        return false;
    }
    
    return true;
}

function getMemberData() {
    // In production, this would fetch from API
    // For demo, use mock data
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.currentUser;
    }
    
    // Fallback data
    return {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        role: 'investor',
        company: 'Demo Capital Partners',
        investmentTotal: 2500000,
        activeDeals: 2,
        totalReturns: 185000
    };
}

function logoutMember() {
    localStorage.removeItem('endevera_auth');
    localStorage.removeItem('endevera_role');
    localStorage.removeItem('endevera_user');
    localStorage.removeItem('endevera_inactivity_timeout'); // Clear inactivity preference
    // Use replace() to prevent back button from accessing cached pages
    window.location.replace('/endevera-dev/login.html');
}

// ============================================
// DATA FETCHING
// ============================================
function getDeals() {
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.deals;
    }
    return [];
}

function getDealById(dealId) {
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.deals.find(deal => deal.id === parseInt(dealId));
    }
    return null;
}

function getUserDeals() {
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.deals.filter(deal => deal.userInvested);
    }
    return [];
}

function getDocuments() {
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.documents;
    }
    return [];
}

function getReports() {
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.reports;
    }
    return [];
}

function getMessages() {
    if (typeof MOCK_DATA !== 'undefined') {
        return MOCK_DATA.messages || [];
    }
    return [];
}

function getActivityLog() {
    if (typeof MOCK_DATA !== 'undefined') {
        // Filter activity relevant to current user
        return MOCK_DATA.activityLog.slice(0, 10);
    }
    return [];
}

// ============================================
// FORMATTING UTILITIES
// ============================================
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    }).format(date);
}

function formatDateTime(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).format(date);
}

function formatRelativeTime(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    
    return formatDate(dateString);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function formatPercent(value) {
    return `${Math.round(value)}%`;
}

// ============================================
// UI RENDERING HELPERS
// ============================================
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading-state">
            <div class="loading-spinner"></div>
            <p class="loading-text">Loading...</p>
        </div>
    `;
}

function showEmpty(containerId, title, message, icon = 'inbox') {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const iconSVG = {
        inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
        file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
        briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
    };
    
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">
                <svg viewBox="0 0 24 24">${iconSVG[icon] || iconSVG.inbox}</svg>
            </div>
            <h3 class="empty-state-title">${title}</h3>
            <p class="empty-state-text">${message}</p>
        </div>
    `;
}

function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = `
        <div class="empty-state">
            <div class="empty-state-icon">
                <svg viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
            </div>
            <h3 class="empty-state-title">Error</h3>
            <p class="empty-state-text">${message}</p>
        </div>
    `;
}

// ============================================
// RENDER FUNCTIONS
// ============================================
function renderDealCard(deal, containerClass = 'deal-card') {
    const statusBadges = {
        active: 'Active',
        closing_soon: 'Closing Soon',
        funded: 'Fully Funded',
        upcoming: 'Coming Soon'
    };
    
    return `
        <div class="${containerClass}" data-deal-id="${deal.id}">
            <div class="deal-card-header">
                <div>
                    <h3 class="deal-title">${deal.title}</h3>
                    <p class="deal-category">${deal.category}</p>
                </div>
                <span class="deal-badge ${deal.status}">${statusBadges[deal.status]}</span>
            </div>
            ${deal.description ? `<p class="deal-description">${deal.description.substring(0, 200)}${deal.description.length > 200 ? '...' : ''}</p>` : ''}
            <div class="deal-progress">
                <div class="deal-progress-header">
                    <span class="deal-progress-label">Funding Progress</span>
                    <span class="deal-progress-value">${formatCurrency(deal.fundingRaised)} / ${formatCurrency(deal.fundingGoal)}</span>
                </div>
                <div class="deal-progress-bar">
                    <div class="deal-progress-fill" style="width: ${deal.fundingProgress}%"></div>
                </div>
            </div>
            <div class="deal-meta">
                <div class="deal-meta-item">
                    <div class="deal-meta-label">Expected Return</div>
                    <div class="deal-meta-value">${deal.expectedReturn}</div>
                </div>
                <div class="deal-meta-item">
                    <div class="deal-meta-label">Minimum Investment</div>
                    <div class="deal-meta-value">${formatCurrency(deal.minimumInvestment)}</div>
                </div>
                <div class="deal-meta-item">
                    <div class="deal-meta-label">Term</div>
                    <div class="deal-meta-value">${deal.term}</div>
                </div>
            </div>
            ${deal.userInvested ? `
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--color-medium-gray);">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-size: 12px; color: var(--color-light-gray);">Your Investment</span>
                        <span style="font-size: 16px; font-weight: 500; color: var(--color-gold);">${formatCurrency(deal.userInvestmentAmount)}</span>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

function renderDocumentItem(doc) {
    return `
        <div class="document-item" data-document-id="${doc.id}">
            <div class="document-icon">
                <svg viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                </svg>
            </div>
            <div class="document-info">
                <div class="document-title">${doc.displayName || doc.filename}</div>
                <div class="document-meta">${doc.fileType} • ${formatFileSize(doc.fileSize)} • ${formatDate(doc.uploadedAt)}</div>
            </div>
            <div class="document-actions">
                <button class="document-action-btn" onclick="viewDocument(${doc.id})" title="View">
                    <svg viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
                <button class="document-action-btn" onclick="downloadDocument(${doc.id})" title="Download">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                </button>
            </div>
        </div>
    `;
}

function renderActivityItem(activity) {
    const activityIcons = {
        deal_update: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
        document_download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
        investment: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
        message: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
        default: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'
    };
    
    return `
        <div class="activity-item">
            <div class="activity-icon">
                <svg viewBox="0 0 24 24">${activityIcons[activity.type] || activityIcons.default}</svg>
            </div>
            <div class="activity-content">
                <div class="activity-title">${activity.action}</div>
                <div class="activity-time">${formatRelativeTime(activity.timestamp)}</div>
            </div>
        </div>
    `;
}

function renderMessageItem(message) {
    return `
        <div class="message-item ${message.read ? '' : 'unread'}" data-message-id="${message.id}" onclick="viewMessage(${message.id})">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-from">${message.from}</span>
                    <span class="message-time">${formatRelativeTime(message.timestamp)}</span>
                </div>
                <div class="message-subject">${message.subject}</div>
                <div class="message-preview">${message.preview}</div>
            </div>
        </div>
    `;
}

// ============================================
// DOCUMENT ACTIONS
// ============================================
function viewDocument(docId) {
    console.log('Viewing document:', docId);
    const doc = getDocuments().find(d => d.id === docId);
    if (doc) {
        // In production, this would open a document viewer
        alert(`Viewing: ${doc.displayName || doc.filename}\n\nIn production, this would open a document viewer.`);
    }
}

function downloadDocument(docId) {
    console.log('Downloading document:', docId);
    const doc = getDocuments().find(d => d.id === docId);
    if (doc) {
        // In production, this would trigger actual download
        alert(`Downloading: ${doc.displayName || doc.filename}\n\nIn production, this would download the file.`);
    }
}

// ============================================
// MESSAGE ACTIONS
// ============================================
function viewMessage(messageId) {
    console.log('Viewing message:', messageId);
    const message = getMessages().find(m => m.id === messageId);
    if (message) {
        // Mark as read
        message.read = true;
        // In production, navigate to message detail page
        window.location.href = `/frontend/portal/message-detail.html?id=${messageId}`;
    }
}

// ============================================
// DEAL ACTIONS
// ============================================
function viewDealDetails(dealId) {
    window.location.href = `/frontend/portal/deal-detail.html?id=${dealId}`;
}

// Make deal cards clickable
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', function(e) {
        const dealCard = e.target.closest('.deal-card');
        if (dealCard && !e.target.closest('button')) {
            const dealId = dealCard.dataset.dealId;
            if (dealId) {
                viewDealDetails(dealId);
            }
        }
    });
});

// ============================================
// EXPORT FOR USE
// ============================================
if (typeof window !== 'undefined') {
    window.PortalUtils = {
        checkMemberAuth,
        getMemberData,
        logoutMember,
        getDeals,
        getDealById,
        getUserDeals,
        getDocuments,
        getReports,
        getMessages,
        getActivityLog,
        formatCurrency,
        formatNumber,
        formatDate,
        formatDateTime,
        formatRelativeTime,
        formatFileSize,
        formatPercent,
        showLoading,
        showEmpty,
        showError,
        renderDealCard,
        renderDocumentItem,
        renderActivityItem,
        renderMessageItem,
        viewDocument,
        downloadDocument,
        viewMessage,
        viewDealDetails
    };
}

// ============================================
// STYLED MODALS
// ============================================

// Logout Confirmation Modal
function showLogoutConfirmation() {
    const modal = createModal({
        title: 'Confirm Logout',
        message: 'Are you sure you want to logout?',
        buttons: [
            {
                text: 'Cancel',
                style: 'secondary',
                onClick: () => closeModal()
            },
            {
                text: 'Logout',
                style: 'primary',
                onClick: () => {
                    closeModal();
                    logoutMember();
                }
            }
        ]
    });
    document.body.appendChild(modal);
}

// Message Detail Modal
function showMessageDetail(message) {
    const modal = createModal({
        title: message.subject,
        message: message.message,
        subtitle: `From: ${message.from} • ${message.date}`,
        wide: true,
        buttons: [
            {
                text: 'Close',
                style: 'primary',
                onClick: () => closeModal()
            }
        ]
    });
    document.body.appendChild(modal);
}

// Coming Soon Modal
function showComingSoon(feature) {
    const modal = createModal({
        title: 'Coming Soon',
        message: `${feature} will be available once we launch on our production server. We're working hard to bring you this feature!`,
        iconSvg: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
        </svg>`,
        buttons: [
            {
                text: 'Got it',
                style: 'primary',
                onClick: () => closeModal()
            }
        ]
    });
    document.body.appendChild(modal);
}

// Generic Modal Creator
function createModal({ title, message, subtitle, icon, iconSvg, wide, buttons }) {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    modalOverlay.id = 'portalModal';
    
    const modalWidth = wide ? 'max-width: 600px;' : 'max-width: 450px;';
    
    modalOverlay.innerHTML = `
        <div class="modal-content" style="${modalWidth}">
            ${icon ? `<div class="modal-icon">${icon}</div>` : ''}
            ${iconSvg ? `<div class="modal-icon">${iconSvg}</div>` : ''}
            <h2 class="modal-title">${title}</h2>
            ${subtitle ? `<p class="modal-subtitle">${subtitle}</p>` : ''}
            <p class="modal-message">${message}</p>
            <div class="modal-buttons">
                ${buttons.map(btn => `
                    <button class="modal-btn modal-btn-${btn.style}" data-action="${btn.text}">
                        ${btn.text}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    // Add click handlers with stopPropagation to prevent flash
    buttons.forEach(btn => {
        const buttonEl = modalOverlay.querySelector(`[data-action="${btn.text}"]`);
        if (buttonEl) {
            buttonEl.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event bubbling that causes flash
                btn.onClick();
            });
        }
    });
    
    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    return modalOverlay;
}

function closeModal() {
    const modal = document.getElementById('portalModal');
    if (modal) {
        modal.classList.add('modal-closing');
        setTimeout(() => modal.remove(), 300);
    }
}

// ============================================
// AUTO-LOGOUT / INACTIVITY TIMER
// ============================================

let inactivityTimer;
let inactivityTimeout = parseInt(localStorage.getItem('endevera_inactivity_timeout')) || 0; // 0 = disabled

function initInactivityTimer() {
    if (inactivityTimeout === 0) return; // Disabled
    
    resetInactivityTimer();
    
    // Reset timer on user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
        document.addEventListener(event, resetInactivityTimer, true);
    });
}

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    
    if (inactivityTimeout > 0) {
        inactivityTimer = setTimeout(() => {
            alert('You have been logged out due to inactivity.');
            logoutMember();
        }, inactivityTimeout * 60 * 1000); // Convert minutes to milliseconds
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initInactivityTimer();
});

// Make functions globally available
window.showLogoutConfirmation = showLogoutConfirmation;
window.showMessageDetail = showMessageDetail;
window.showComingSoon = showComingSoon;
window.closeModal = closeModal;
