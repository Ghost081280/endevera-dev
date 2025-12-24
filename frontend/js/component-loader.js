/* ============================================
   ENDEVERA COMPONENT LOADER
   Dynamically loads HTML components into pages
   ============================================ */

(function() {
    'use strict';

    // Component configuration
    const components = [
        { name: 'scroll-progress', path: 'frontend/components/scroll-progress.html', target: 'body', position: 'afterbegin' },
        { name: 'nav', path: 'frontend/components/nav.html', target: 'body', position: 'afterbegin' },
        { name: 'footer', path: 'frontend/components/footer.html', target: 'body', position: 'beforeend' },
        { name: 'back-to-top', path: 'frontend/components/back-to-top.html', target: 'body', position: 'beforeend' },
        { name: 'cookie-banner', path: 'frontend/components/cookie-banner.html', target: 'body', position: 'beforeend' }
    ];

    // Track loaded components
    let loadedCount = 0;
    const totalComponents = components.length;

    // Load all components
    async function loadComponents() {
        for (const component of components) {
            try {
                const response = await fetch(component.path);
                if (!response.ok) {
                    throw new Error(`Failed to load ${component.name}: ${response.status}`);
                }
                
                const html = await response.text();
                const target = document.querySelector(component.target);
                
                if (target) {
                    target.insertAdjacentHTML(component.position, html);
                    console.log(`✓ Loaded component: ${component.name}`);
                } else {
                    console.error(`✗ Target not found for ${component.name}: ${component.target}`);
                }
                
                loadedCount++;
            } catch (error) {
                console.error(`✗ Error loading ${component.name}:`, error);
                loadedCount++;
            }
        }

        // Once all components are loaded, dispatch event
        if (loadedCount === totalComponents) {
            document.dispatchEvent(new CustomEvent('endevera:components-loaded'));
            console.log('✓ All components loaded');
        }
    }

    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }
})();
