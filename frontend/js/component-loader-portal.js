/* ============================================
   ENDEVERA PORTAL COMPONENT LOADER
   Loads member navigation and portal components
   ============================================ */

(function() {
    'use strict';

    // Component configuration for portal pages
    const components = [
        { 
            name: 'nav-member', 
            html: '/frontend/components/nav-member/nav-member.html',
            css: null, // CSS already loaded in page head
            target: 'body', 
            position: 'afterbegin' 
        }
    ];

    // Track loaded components
    let loadedCount = 0;
    const totalComponents = components.length;

    // Load all components
    async function loadComponents() {
        for (const component of components) {
            try {
                // Load HTML
                const response = await fetch(component.html);
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
            console.log('✓ All portal components loaded');
        }
    }

    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }
})();
