/* ============================================
   ENDEVERA MEMBER PORTAL - SUPPORT
   Support page functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    if (!PortalUtils.checkMemberAuth()) return;
});

function toggleFAQ(button) {
    const answer = button.nextElementSibling;
    const icon = button.querySelector('.faq-icon');
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        icon.style.transform = 'rotate(180deg)';
    } else {
        answer.style.display = 'none';
        icon.style.transform = 'rotate(0deg)';
    }
}

function scheduleCall() {
    alert('Schedule a Call\n\nIn production, this would open a calendar booking system where you can:\n- Choose an available time slot\n- Select the type of consultation\n- Provide meeting details\n\nFor now, please email support@endevera.com to schedule.');
}
