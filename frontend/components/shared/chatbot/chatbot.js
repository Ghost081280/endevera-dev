/* ============================================
   ENDEVERA CHATBOT COMPONENT - OPTIMIZED v2.0
   Mobile-first with keyboard handling and scroll isolation
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
    
    if (!chatbotBtn || !chatWindow) {
        console.warn('WARNING: Chatbot elements not found');
        return;
    }
    
    console.log('Chatbot initializing with mobile optimization...');
    
    // ============================================
    // TOGGLE CHATBOT
    // ============================================
    function toggleChatbot() {
        const isActive = chatWindow.classList.contains('active');
        
        if (isActive) {
            closeChatbot();
        } else {
            openChatbot();
        }
    }
    
    function openChatbot() {
        chatWindow.classList.add('active');
        
        if (chatInput) {
            setTimeout(() => {
                chatInput.focus();
            }, 300); // Wait for animation
        }
        
        console.log('Chatbot opened');
    }
    
    function closeChatbot() {
        chatWindow.classList.remove('active');
        chatWindow.classList.remove('keyboard-visible');
        
        // Force blur to close keyboard
        if (chatInput) {
            chatInput.blur();
        }
        
        console.log('Chatbot closed');
    }
    
    // ============================================
    // EVENT LISTENERS - BUTTON
    // ============================================
    chatbotBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleChatbot();
    });
    
    chatbotBtn.addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleChatbot();
    }, { passive: false });
    
    // ============================================
    // EVENT LISTENERS - CLOSE
    // ============================================
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeChatbot();
        });
        
        chatbotClose.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeChatbot();
        }, { passive: false });
    }
    
    // ============================================
    // KEYBOARD HANDLING - MOBILE OPTIMIZATION
    // ============================================
    if (chatInput) {
        // Detect when keyboard appears (input focused)
        chatInput.addEventListener('focus', function() {
            // Only shift on mobile landscape
            if (window.innerWidth <= 926 && window.innerHeight <= 500 && window.matchMedia('(orientation: landscape)').matches) {
                chatWindow.classList.add('keyboard-visible');
                console.log('Keyboard visible (landscape) - shifting chat up');
            }
        });
        
        // Detect when keyboard disappears (input blurred)
        chatInput.addEventListener('blur', function() {
            setTimeout(() => {
                chatWindow.classList.remove('keyboard-visible');
                console.log('Keyboard hidden - restoring chat position');
            }, 100);
        });
    }
    
    // ============================================
    // ORIENTATION CHANGE HANDLER
    // ============================================
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            chatWindow.classList.remove('keyboard-visible');
            
            // Close keyboard if input is focused
            if (chatInput && document.activeElement === chatInput) {
                chatInput.blur();
            }
            
            console.log('Orientation changed - keyboard closed');
        }, 300);
    });
    
    // ============================================
    // RESIZE HANDLER - KEYBOARD DETECTION
    // ============================================
    let lastHeight = window.innerHeight;
    let lastWidth = window.innerWidth;
    let lastOrientation = window.matchMedia('(orientation: landscape)').matches;
    
    window.addEventListener('resize', function() {
        const currentHeight = window.innerHeight;
        const currentWidth = window.innerWidth;
        const currentOrientation = window.matchMedia('(orientation: landscape)').matches;
        const isLandscape = currentOrientation;
        
        // Clean up on orientation change
        if (currentOrientation !== lastOrientation) {
            chatWindow.classList.remove('keyboard-visible');
            if (chatInput && document.activeElement === chatInput) {
                chatInput.blur();
            }
            console.log('Orientation change detected - cleaned up');
        }
        // Only handle keyboard on mobile landscape
        else if (currentWidth <= 926 && currentHeight <= 500 && isLandscape) {
            // Keyboard appeared
            if (lastHeight - currentHeight > 100) {
                if (document.activeElement === chatInput) {
                    chatWindow.classList.add('keyboard-visible');
                }
            }
            // Keyboard disappeared
            else if (currentHeight - lastHeight > 100) {
                chatWindow.classList.remove('keyboard-visible');
            }
        } else {
            chatWindow.classList.remove('keyboard-visible');
        }
        
        lastHeight = currentHeight;
        lastWidth = currentWidth;
        lastOrientation = currentOrientation;
    }, { passive: true });
    
    // ============================================
    // SCROLL ISOLATION - PREVENT PAGE SCROLL
    // ============================================
    if (chatMessages) {
        chatMessages.addEventListener('wheel', function(e) {
            const scrollTop = chatMessages.scrollTop;
            const scrollHeight = chatMessages.scrollHeight;
            const clientHeight = chatMessages.clientHeight;
            const delta = e.deltaY || -e.wheelDelta || e.detail;
            
            // At top or bottom, prevent page scroll
            if ((delta < 0 && scrollTop <= 0) || (delta > 0 && scrollTop + clientHeight >= scrollHeight)) {
                e.preventDefault();
            }
        }, { passive: false });
        
        chatMessages.addEventListener('touchmove', function(e) {
            e.stopPropagation();
        }, { passive: true });
    }
    
    // ============================================
    // SEND MESSAGE
    // ============================================
    function sendMessage() {
        if (!chatInput || !chatMessages) return;
        
        const message = chatInput.value.trim();
        
        // Blink border if empty
        if (!message) {
            chatInput.classList.add('blink-empty');
            setTimeout(() => {
                chatInput.classList.remove('blink-empty');
            }, 1200);
            return;
        }
        
        // Add user message
        addUserMessage(message);
        chatInput.value = '';
        
        // Auto-resize textarea
        chatInput.style.height = 'auto';
        
        // Simulate bot response (replace with actual API call)
        setTimeout(() => {
            addBotMessage("Thank you for your message. One of our team members will follow up with you shortly. In the meantime, feel free to explore our services or contact us directly.");
        }, 1000);
    }
    
    function addUserMessage(text) {
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message user';
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        scrollToBottom();
    }
    
    function addBotMessage(text) {
        if (!chatMessages) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message bot';
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        
        scrollToBottom();
    }
    
    function scrollToBottom() {
        if (!chatMessages) return;
        
        requestAnimationFrame(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        });
    }
    
    // ============================================
    // EVENT LISTENERS - SEND
    // ============================================
    if (chatSend) {
        chatSend.addEventListener('click', function(e) {
            e.preventDefault();
            sendMessage();
        });
        
        chatSend.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            sendMessage();
        }, { passive: false });
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });
        
        // Auto-resize textarea
        chatInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
    }
    
    // ============================================
    // ESC KEY CLOSE
    // ============================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (chatWindow.classList.contains('active')) {
                closeChatbot();
            }
        }
    });
    
    console.log('Chatbot initialized with mobile optimization');
}

// ============================================
// SHOW CHATBOT AFTER COOKIE CONSENT
// ============================================
function showChatbotButton() {
    const chatbotContainer = document.querySelector('.chatbot-container');
    if (chatbotContainer) {
        chatbotContainer.classList.add('ready');
        console.log('Chatbot button shown');
    }
}

// Export for external use
window.showChatbotButton = showChatbotButton;
window.initChatbot = initChatbot;
