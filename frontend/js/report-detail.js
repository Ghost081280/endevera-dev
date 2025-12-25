/* ============================================
   ENDEVERA MEMBER PORTAL - REPORT DETAIL
   Individual report detail page functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    if (!PortalUtils.checkMemberAuth()) return;

    const urlParams = new URLSearchParams(window.location.search);
    const reportId = urlParams.get('id');

    if (!reportId) {
        PortalUtils.showError('reportDetailContainer', 'No report ID provided');
        return;
    }

    loadReportDetail(reportId);
});

function loadReportDetail(reportId) {
    const container = document.getElementById('reportDetailContainer');
    if (!container) return;

    PortalUtils.showLoading('reportDetailContainer');

    setTimeout(() => {
        const reports = PortalUtils.getReports();
        const report = reports.find(r => r.id === parseInt(reportId));

        if (!report) {
            PortalUtils.showError('reportDetailContainer', 'Report not found');
            return;
        }

        renderReportDetail(report);
    }, 300);
}

function renderReportDetail(report) {
    const container = document.getElementById('reportDetailContainer');
    if (!container) return;

    container.innerHTML = `
        <article>
            <header style="margin-bottom: 50px; padding-bottom: 40px; border-bottom: 1px solid var(--color-medium-gray);">
                <div style="font-size: 12px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-gold); margin-bottom: 20px;">${report.type}</div>
                <h1 style="font-family: var(--font-serif); font-size: clamp(32px, 5vw, 48px); font-weight: 400; color: var(--color-white); margin-bottom: 20px; line-height: 1.2;">${report.title}</h1>
                <div style="display: flex; gap: 30px; flex-wrap: wrap; color: var(--color-light-gray); font-size: 14px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${PortalUtils.formatDate(report.publishedAt)}
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                        ${PortalUtils.formatNumber(report.viewCount)} views
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        ${PortalUtils.formatNumber(report.downloadCount)} downloads
                    </div>
                </div>
            </header>

            <div style="margin-bottom: 40px;">
                ${report.fileUrl ? `
                    <a href="${report.fileUrl}" download class="btn-primary" style="display: inline-flex;">
                        Download Full Report (PDF)
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                            <polyline points="7 10 12 15 17 10"/>
                            <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                    </a>
                ` : ''}
            </div>

            <div class="report-content" style="font-size: 17px; color: var(--color-off-white); line-height: 1.9;">
                ${report.content}
            </div>

            <footer style="margin-top: 60px; padding-top: 40px; border-top: 1px solid var(--color-medium-gray);">
                <div style="background: rgba(201, 162, 39, 0.1); border: 1px solid rgba(201, 162, 39, 0.3); padding: 25px;">
                    <p style="font-size: 14px; color: var(--color-light-gray); line-height: 1.7; margin: 0;">
                        <strong style="color: var(--color-white);">Disclaimer:</strong> This report is provided for informational purposes only and should not be construed as investment advice. Past performance does not guarantee future results. Please consult with your financial advisor before making investment decisions.
                    </p>
                </div>
            </footer>
        </article>
    `;

    // Style the report content
    styleReportContent();
}

function styleReportContent() {
    const content = document.querySelector('.report-content');
    if (!content) return;

    // Style headings
    content.querySelectorAll('h2').forEach(h => {
        h.style.fontFamily = 'var(--font-serif)';
        h.style.fontSize = '32px';
        h.style.fontWeight = '400';
        h.style.color = 'var(--color-white)';
        h.style.marginTop = '50px';
        h.style.marginBottom = '20px';
    });

    content.querySelectorAll('h3').forEach(h => {
        h.style.fontFamily = 'var(--font-sans)';
        h.style.fontSize = '20px';
        h.style.fontWeight = '500';
        h.style.color = 'var(--color-white)';
        h.style.marginTop = '35px';
        h.style.marginBottom = '15px';
    });

    // Style paragraphs
    content.querySelectorAll('p').forEach(p => {
        p.style.marginBottom = '25px';
    });

    // Style lists
    content.querySelectorAll('ul').forEach(ul => {
        ul.style.marginBottom = '25px';
        ul.style.paddingLeft = '30px';
    });

    content.querySelectorAll('li').forEach(li => {
        li.style.marginBottom = '12px';
    });
}
