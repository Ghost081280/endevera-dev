/* ============================================
   ENDEVERA MEMBER PORTAL - REPORTS
   Reports list page functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    if (!PortalUtils.checkMemberAuth()) return;
    loadReports();
});

function loadReports() {
    const container = document.getElementById('reportsContainer');
    if (!container) return;

    const reports = PortalUtils.getReports();

    if (reports.length === 0) {
        PortalUtils.showEmpty('reportsContainer', 'No Reports Available', 'Portfolio reports will appear here once published.', 'file');
        return;
    }

    container.innerHTML = `
        <div style="display: grid; gap: 25px;">
            ${reports.map(report => `
                <div style="background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray); padding: 35px; cursor: pointer; transition: var(--transition-smooth);" onclick="window.location.href='/frontend/portal/report-detail.html?id=${report.id}'" onmouseover="this.style.borderColor='rgba(201, 162, 39, 0.3)'; this.style.transform='translateY(-5px)'" onmouseout="this.style.borderColor='var(--color-medium-gray)'; this.style.transform='translateY(0)'">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">
                        <div style="flex: 1;">
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-gold); margin-bottom: 12px;">${report.type}</div>
                            <h2 style="font-family: var(--font-serif); font-size: 28px; font-weight: 400; color: var(--color-white); margin-bottom: 12px;">${report.title}</h2>
                            <p style="font-size: 15px; color: var(--color-light-gray); line-height: 1.7;">${report.excerpt}</p>
                        </div>
                        <div style="display: flex; align-items: center; gap: 30px;">
                            <div style="text-align: right;">
                                <div style="font-size: 11px; color: var(--color-light-gray); margin-bottom: 5px;">Published</div>
                                <div style="font-size: 14px; color: var(--color-white);">${PortalUtils.formatDate(report.publishedAt)}</div>
                            </div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 30px; padding-top: 20px; border-top: 1px solid var(--color-medium-gray);">
                        <div>
                            <div style="font-size: 11px; color: var(--color-light-gray);">Views</div>
                            <div style="font-size: 16px; font-weight: 500; color: var(--color-white); margin-top: 5px;">${PortalUtils.formatNumber(report.viewCount)}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; color: var(--color-light-gray);">Downloads</div>
                            <div style="font-size: 16px; font-weight: 500; color: var(--color-white); margin-top: 5px;">${PortalUtils.formatNumber(report.downloadCount)}</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
