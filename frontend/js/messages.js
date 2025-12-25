/* ============================================
   ENDEVERA MEMBER PORTAL - MESSAGES
   Messages inbox page functionality
   ============================================ */

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', function() {
    if (!PortalUtils.checkMemberAuth()) return;
    setupFilters();
    loadMessages();
});

function setupFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.style.borderColor = 'var(--color-medium-gray)';
                b.style.color = 'var(--color-light-gray)';
                b.style.background = 'var(--color-dark-gray)';
            });
            
            btn.classList.add('active');
            btn.style.borderColor = 'var(--color-gold)';
            btn.style.color = 'var(--color-gold)';
            btn.style.background = 'rgba(201, 162, 39, 0.1)';
            
            currentFilter = btn.dataset.filter;
            loadMessages();
        });

        btn.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.borderColor = 'var(--color-gold)';
            }
        });

        btn.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.borderColor = 'var(--color-medium-gray)';
            }
        });
    });

    // Style active button
    const activeBtn = document.querySelector('.filter-btn.active');
    if (activeBtn) {
        activeBtn.style.borderColor = 'var(--color-gold)';
        activeBtn.style.color = 'var(--color-gold)';
        activeBtn.style.background = 'rgba(201, 162, 39, 0.1)';
    }
}

function loadMessages() {
    const container = document.getElementById('messagesContainer');
    if (!container) return;

    let messages = PortalUtils.getMessages();

    // Apply filter
    switch(currentFilter) {
        case 'unread':
            messages = messages.filter(m => !m.read);
            break;
        case 'updates':
            messages = messages.filter(m => m.category === 'updates');
            break;
        case 'system':
            messages = messages.filter(m => m.category === 'system');
            break;
    }

    if (messages.length === 0) {
        const emptyMessages = {
            'all': 'No messages yet. Communications from the Endevera team will appear here.',
            'unread': 'No unread messages. You\'re all caught up!',
            'updates': 'No deal updates at this time.',
            'system': 'No system notifications.'
        };
        PortalUtils.showEmpty('messagesContainer', 'No Messages', emptyMessages[currentFilter] || emptyMessages['all']);
        return;
    }

    container.innerHTML = `
        <div class="message-list">
            ${messages.map(msg => renderMessageItem(msg)).join('')}
        </div>
    `;
}

function renderMessageItem(msg) {
    return `
        <div class="message-item ${msg.read ? '' : 'unread'}" onclick="viewMessage(${msg.id})">
            <div class="message-content">
                <div class="message-header">
                    <span class="message-from">${msg.from}</span>
                    <span class="message-time">${PortalUtils.formatRelativeTime(msg.timestamp)}</span>
                </div>
                <div class="message-subject">${msg.subject}</div>
                <div class="message-preview">${msg.preview}</div>
            </div>
        </div>
    `;
}

function viewMessage(messageId) {
    const messages = PortalUtils.getMessages();
    const message = messages.find(m => m.id === messageId);
    
    if (!message) return;

    // Mark as read
    message.read = true;

    // Show message in styled modal
    window.showMessageDetail({
        subject: message.subject,
        from: message.from,
        date: message.date,
        message: message.body
    });

    // Reload to update read status
    loadMessages();
}
