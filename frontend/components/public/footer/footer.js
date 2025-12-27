/* ============================================
   ENDEVERA FOOTER COMPONENT
   Smart path detection for footer links
   ============================================ */

document.addEventListener('endevera:components-loaded', function() {
    initFooter();
});

function initFooter() {
    // Detect if we're on index.html or a pillar page
    const currentPath = window.location.pathname;
    const isOnIndex = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '';
    const isInPublicFolder = currentPath.includes('/public/');
    
    // Determine the base path to index.html
    let indexPath = 'index.html';
    if (isInPublicFolder) {
        indexPath = '../../index.html';
    }
    
    console.log('Footer Detection:', { currentPath, isOnIndex, isInPublicFolder, indexPath });

    // Set up all footer links
    setupFooterLinks(isOnIndex, indexPath);

    function setupFooterLinks(isOnIndex, indexPath) {
        // Logo link
        const footerLogo = document.getElementById('footerLogo');
        if (footerLogo) {
            footerLogo.href = isOnIndex ? '#' : indexPath;
        }

        // Footer section links (About, Team, Contact)
        const footerLinks = document.querySelectorAll('.footer-link');
        footerLinks.forEach(link => {
            const target = link.getAttribute('data-target');
            if (target) {
                if (isOnIndex) {
                    link.href = `#${target}`;
                } else {
                    link.href = `${indexPath}#${target}`;
                }
            }
        });

        console.log('Footer links configured for:', isOnIndex ? 'index page' : 'pillar page');
    }
}
