document.addEventListener('endevera:components-loaded', function() {
    initChatbot();
});
function initChatbot() {
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotWindow = document.getElementById('chatbotWindow');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatMessages = document.getElementById('chatMessages');
    if (!chatbotBtn || !chatbotWindow) return;
    function toggleChatbot() {
        chatbotWindow.classList.toggle('active');
        if (chatbotWindow.classList.contains('active')) {
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
            chatbotWindow.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            const userMsg = document.createElement('div');
            userMsg.className = 'chat-message';
            userMsg.textContent = message;
            chatMessages.appendChild(userMsg);
            chatInput.value = '';
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
