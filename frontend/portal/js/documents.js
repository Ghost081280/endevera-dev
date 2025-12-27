/* ============================================
   ENDEVERA MEMBER PORTAL - DOCUMENTS
   Documents library page functionality
   ============================================ */

let currentCategory = 'all';

document.addEventListener('DOMContentLoaded', function() {
    if (!PortalUtils.checkMemberAuth()) return;
    setupCategoryFilters();
    loadDocuments();
});

function setupCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => {
                b.classList.remove('active');
                b.style.borderColor = 'var(--color-medium-gray)';
                b.style.color = 'var(--color-light-gray)';
                b.style.background = 'var(--color-dark-gray)';
            });
            
            btn.classList.add('active');
            btn.style.borderColor = 'var(--color-gold)';
            btn.style.color = 'var(--color-gold)';
            btn.style.background = 'rgba(201, 162, 39, 0.1)';
            
            currentCategory = btn.dataset.category;
            loadDocuments();
        });

        btn.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.borderColor = 'var(--color-gold)';
            }
        });

        btn.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.borderColor = 'var(--color-medium-gray)';
            }
        });
    });

    // Style active button
    const activeBtn = document.querySelector('.category-btn.active');
    if (activeBtn) {
        activeBtn.style.borderColor = 'var(--color-gold)';
        activeBtn.style.color = 'var(--color-gold)';
        activeBtn.style.background = 'rgba(201, 162, 39, 0.1)';
    }
}

function loadDocuments() {
    const container = document.getElementById('documentsContainer');
    if (!container) return;

    PortalUtils.showLoading('documentsContainer');

    setTimeout(() => {
        let documents = PortalUtils.getDocuments();

        // Filter by category
        if (currentCategory !== 'all') {
            documents = documents.filter(doc => doc.category === currentCategory);
        }

        // Filter accessible documents (assigned to member or assigned to all)
        const userData = PortalUtils.getMemberData();
        documents = documents.filter(doc => 
            doc.assignedToAll || 
            (doc.assignedMembers && doc.assignedMembers.includes(userData.id))
        );

        if (documents.length === 0) {
            PortalUtils.showEmpty('documentsContainer', 'No Documents Available', 'No documents in this category are available to you at this time.', 'file');
            return;
        }

        container.innerHTML = `<div class="document-list">${documents.map(doc => PortalUtils.renderDocumentItem(doc)).join('')}</div>`;
    }, 300);
}

// These functions are called from portal.js renderDocumentItem
window.viewDocument = function(docId) {
    const doc = PortalUtils.getDocuments().find(d => d.id === docId);
    if (doc) {
        alert(`Viewing: ${doc.displayName || doc.filename}\n\nIn production, this would open a document viewer or download the file.`);
    }
};

window.downloadDocument = function(docId) {
    const doc = PortalUtils.getDocuments().find(d => d.id === docId);
    if (doc) {
        alert(`Downloading: ${doc.displayName || doc.filename}\nSize: ${PortalUtils.formatFileSize(doc.fileSize)}\n\nIn production, this would trigger an actual download.`);
    }
};
