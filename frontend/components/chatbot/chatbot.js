/* AI CHATBOT */
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

        // Check if user is logged in (portal) or public
        const userData = JSON.parse(localStorage.getItem('endevera_user') || '{}');
        const isLoggedIn = localStorage.getItem('endevera_auth') === 'true';
        const userName = userData.firstName || 'there';

        // Show appropriate welcome message
        if (isLoggedIn && userName !== 'there') {
            // Member portal welcome
            addBotMessage(`Welcome back, ${userName}! 👋 I'm your Endevera investment assistant. I can help you with portfolio insights, investment opportunities, documents, and account questions. How can I assist you today?`);
        } else {
            // Public page welcome
            addBotMessage(`Hello! 👋 I'm your Endevera assistant. I can help you learn about our investment opportunities, answer questions about infrastructure investments, or connect you with our team. How can I help you today?`);
        }

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

            // Simulate AI response
            setTimeout(() => {
                hideTyping();
                const response = generateResponse(message, isLoggedIn);
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

    function generateResponse(message, isLoggedIn) {
        const msg = message.toLowerCase();

        if (isLoggedIn) {
            // Member portal responses
            if (msg.includes('portfolio') || msg.includes('performance') || msg.includes('return')) {
                return "Your portfolio is performing well. You can view detailed analytics on your Dashboard. Would you like me to highlight any specific investments?";
            }
            if (msg.includes('opportunity') || msg.includes('opportunities') || msg.includes('invest') || msg.includes('deal')) {
                return "We have several active investment opportunities available. Check the Investment Opportunities page to explore them. Would you like recommendations based on your profile?";
            }
            if (msg.includes('document') || msg.includes('report') || msg.includes('prospectus')) {
                return "All your investment documents and reports are in the Documents section. Is there a specific document you're looking for?";
            }
            if (msg.includes('account') || msg.includes('profile') || msg.includes('settings')) {
                return "You can manage your account in the Profile section. Need help with anything specific?";
            }
        } else {
            // Public page responses
            if (msg.includes('invest') || msg.includes('opportunity') || msg.includes('opportunities')) {
                return "Endevera offers exclusive infrastructure investment opportunities in renewable energy, transportation, and utilities. Would you like to learn more about becoming an investor?";
            }
            if (msg.includes('accredited') || msg.includes('qualify') || msg.includes('eligible')) {
                return "To invest with Endevera, you need to be an accredited investor. This typically means having a net worth over $1M (excluding primary residence) or annual income over $200K. Would you like to apply?";
            }
            if (msg.includes('contact') || msg.includes('team') || msg.includes('speak')) {
                return "You can reach our team at info@endevera.com or call us at (561) 555-0100. Would you like to schedule a call with one of our investment advisors?";
            }
            if (msg.includes('how') || msg.includes('work') || msg.includes('process')) {
                return "Our process is simple: 1) Apply as an accredited investor, 2) Get approved and access exclusive opportunities, 3) Choose investments that match your goals, 4) Monitor performance through your member portal. Would you like to get started?";
            }
        }

        // Default response
        return "I'm here to help! You can ask me about investment opportunities, our process, eligibility requirements, or how to get started. What would you like to know?";
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
