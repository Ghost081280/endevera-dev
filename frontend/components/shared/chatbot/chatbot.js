/* ============================================
   ENDEVERA CHATBOT COMPONENT
   AI assistant chatbot functionality
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initChatbot();
});

function initChatbot() {
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    
    if (!chatbotBtn || !chatWindow) return;
    
    function toggleChatbot() {
        chatWindow.classList.toggle('active');
        if (chatWindow.classList.contains('active')) {
            chatInput.focus();
            if (window.innerWidth <= 768) {
                document.body.style.overflow = 'hidden';
            }
        } else {
            document.body.style.overflow = '';
        }
    }
    
    chatbotBtn.addEventListener('click', toggleChatbot);
    
    if (chatbotClose) {
        chatbotClose.addEventListener('click', () => {
            chatWindow.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-message';
            userMsg.textContent = message;
            chatMessages.appendChild(userMsg);
            chatInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                const botMsg = document.createElement('div');
                botMsg.className = 'chat-message bot';
                botMsg.textContent = "Thank you for your message. One of our team members will follow up with you shortly. In the meantime, feel free to explore our services or contact us directly.";
                chatMessages.appendChild(botMsg);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
            
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }
    
    if (chatSend) {
        chatSend.addEventListener('click', sendMessage);
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}
