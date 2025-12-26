/* ============================================
   ENDEVERA PUBLIC COMPONENT LOADER
   Dynamically loads HTML components and their CSS
   ============================================ */

(function() {
    'use strict';

    // Component configuration with reorganized folder structure
    const components = [
        { 
            name: 'nav', 
            html: 'frontend/components/public/nav/nav.html',
            css: 'frontend/components/public/nav/nav.css',
            target: 'body', 
            position: 'afterbegin' 
        },
        { 
            name: 'scroll-progress', 
            html: 'frontend/components/public/scroll-progress/scroll-progress.html',
            css: 'frontend/components/public/scroll-progress/scroll-progress.css',
            target: 'body', 
            position: 'afterbegin' 
        },
        { 
            name: 'footer', 
            html: 'frontend/components/public/footer/footer.html',
            css: 'frontend/components/public/footer/footer.css',
            target: 'body', 
            position: 'beforeend' 
        },
        { 
            name: 'chatbot', 
            html: 'frontend/components/shared/chatbot/chatbot.html',
            css: null, // CSS already loaded in page head
            target: 'body', 
            position: 'beforeend' 
        },
        { 
            name: 'back-to-top', 
            html: 'frontend/components/shared/back-to-top/back-to-top.html',
            css: 'frontend/components/shared/back-to-top/back-to-top.css',
            target: 'body', 
            position: 'beforeend' 
        },
        { 
            name: 'cookie-banner', 
            html: 'frontend/components/public/cookie-banner/cookie-banner.html',
            css: 'frontend/components/public/cookie-banner/cookie-banner.css',
            target: 'body', 
            position: 'beforeend' 
        }
    ];

    // Track loaded components
    let loadedCount = 0;
    const totalComponents = components.length;

    // Load CSS file
    function loadCSS(href) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = () => resolve();
            link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
            document.head.appendChild(link);
        });
    }

    // Load all components
    async function loadComponents() {
        for (const component of components) {
            try {
                // Load CSS first if it exists
                if (component.css) {
                    await loadCSS(component.css);
                    console.log(`✓ Loaded CSS: ${component.name}`);
                }

                // Then load HTML
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
            console.log('✓ All public components loaded');
        }
    }

    // Start loading when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadComponents);
    } else {
        loadComponents();
    }
})();
