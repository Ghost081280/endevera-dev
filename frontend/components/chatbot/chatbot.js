/* AI CHATBOT - MEMBER PORTAL VERSION */
(function() {
    'use strict';

    let isOpen = false;

    function initChatbot() {
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const window = document.getElementById('chatbotWindow');
        const input = document.getElementById('chatbotInput');
        const send = document.getElementById('chatbotSend');
        const messages = document.getElementById('chatbotMessages');

        if (!toggle || !window) return;

        // Get user info from localStorage
        const userData = JSON.parse(localStorage.getItem('endevera_user') || '{}');
        const userName = userData.firstName || 'Member';

        // Show custom welcome message for members
        addBotMessage(`Welcome back, ${userName}! 👋 I'm your Endevera investment assistant. I can help you with:\n\n• Portfolio insights and performance\n• Investment opportunity details\n• Document access and reports\n• Account questions\n\nHow can I assist you today?`);

        // Toggle chatbot
        toggle.addEventListener('click', () => {
            isOpen = !isOpen;
            window.classList.toggle('active');
            
            // Toggle icons
            const icon = toggle.querySelector('.chatbot-icon');
            const closeIcon = toggle.querySelector('.chatbot-close');
            if (isOpen) {
                icon.style.display = 'none';
                closeIcon.style.display = 'block';
                input.focus();
            } else {
                icon.style.display = 'block';
                closeIcon.style.display = 'none';
            }
        });

        // Close button
        if (close) {
            close.addEventListener('click', () => {
                toggle.click();
            });
        }

        // Send message
        function sendMessage() {
            const message = input.value.trim();
            if (!message) return;

            addUserMessage(message);
            input.value = '';

            // Show typing indicator
            showTyping();

            // Simulate AI response (replace with actual API call later)
            setTimeout(() => {
                hideTyping();
                const response = generateResponse(message);
                addBotMessage(response);
            }, 1500);
        }

        send.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
    }

    function addUserMessage(text) {
        const messages = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message user';
        messageDiv.innerHTML = `
            <div class="chatbot-message-content">
                <div class="chatbot-message-text">${escapeHtml(text)}</div>
                <div class="chatbot-message-time">${getTime()}</div>
            </div>
        `;
        messages.appendChild(messageDiv);
        scrollToBottom();
    }

    function addBotMessage(text) {
        const messages = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chatbot-message bot';
        messageDiv.innerHTML = `
            <div class="chatbot-message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="8" r="5"/>
                    <path d="M20 21a8 8 0 1 0-16 0"/>
                </svg>
            </div>
            <div class="chatbot-message-content">
                <div class="chatbot-message-text">${escapeHtml(text).replace(/\n/g, '<br>')}</div>
                <div class="chatbot-message-time">${getTime()}</div>
            </div>
        `;
        messages.appendChild(messageDiv);
        scrollToBottom();
    }

    function showTyping() {
        const messages = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="chatbot-message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="8" r="5"/>
                    <path d="M20 21a8 8 0 1 0-16 0"/>
                </svg>
            </div>
            <div class="chatbot-message-content">
                <div class="chatbot-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messages.appendChild(typingDiv);
        scrollToBottom();
    }

    function hideTyping() {
        const typing = document.getElementById('typingIndicator');
        if (typing) typing.remove();
    }

    function generateResponse(message) {
        const msg = message.toLowerCase();

        // Portfolio-related
        if (msg.includes('portfolio') || msg.includes('performance') || msg.includes('return')) {
            return "Your portfolio is currently showing strong performance. You can view detailed analytics on your Dashboard. Would you like me to highlight any specific investments?";
        }
        
        // Investment opportunities
        if (msg.includes('opportunity') || msg.includes('opportunities') || msg.includes('invest') || msg.includes('deal')) {
            return "We have several active investment opportunities available. You can explore them on the Investment Opportunities page. Would you like me to recommend opportunities based on your investment profile?";
        }
        
        // Documents
        if (msg.includes('document') || msg.includes('report') || msg.includes('prospectus')) {
            return "All your investment documents, reports, and prospectuses are available in the Documents section. Is there a specific document you're looking for?";
        }
        
        // Account/profile
        if (msg.includes('account') || msg.includes('profile') || msg.includes('settings')) {
            return "You can manage your account settings and view your investor profile in the Profile section. Need help with anything specific?";
        }

        // Default response
        return "I'm here to help! You can ask me about your portfolio performance, available investment opportunities, accessing documents, or managing your account. What would you like to know?";
    }

    function scrollToBottom() {
        const messages = document.getElementById('chatbotMessages');
        messages.scrollTop = messages.scrollHeight;
    }

    function getTime() {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initChatbot);
    } else {
        initChatbot();
    }
})();
