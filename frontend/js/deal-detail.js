/* ============================================
   ENDEVERA MEMBER PORTAL - DEAL DETAIL
   Individual deal detail page functionality
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!PortalUtils.checkMemberAuth()) return;

    // Get deal ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const dealId = urlParams.get('id');

    if (!dealId) {
        showError('No deal ID provided');
        return;
    }

    loadDealDetail(dealId);
});

function loadDealDetail(dealId) {
    const container = document.getElementById('dealDetailContainer');
    if (!container) return;

    PortalUtils.showLoading('dealDetailContainer');

    setTimeout(() => {
        const deal = PortalUtils.getDealById(dealId);

        if (!deal) {
            PortalUtils.showError('dealDetailContainer', 'Deal not found');
            return;
        }

        renderDealDetail(deal);
    }, 300);
}

function renderDealDetail(deal) {
    const container = document.getElementById('dealDetailContainer');
    if (!container) return;

    const statusBadges = {
        active: 'Active',
        closing_soon: 'Closing Soon',
        funded: 'Fully Funded',
        upcoming: 'Coming Soon'
    };

    container.innerHTML = `
        <!-- Deal Header -->
        <div style="margin-bottom: 40px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 20px;">
                <div>
                    <span class="deal-badge ${deal.status}" style="margin-bottom: 15px; display: inline-block;">${statusBadges[deal.status]}</span>
                    <h1 class="portal-title" style="margin-bottom: 10px;">${deal.title}</h1>
                    <p style="font-size: 14px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-gold);">${deal.category}</p>
                </div>
                ${deal.status === 'active' && !deal.userInvested ? `
                    <button class="btn-primary" onclick="expressInterest(${deal.id})">
                        Express Interest
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                ` : ''}
                ${deal.userInvested ? `
                    <div style="padding: 15px 25px; background: rgba(201, 162, 39, 0.1); border: 1px solid rgba(201, 162, 39, 0.3);">
                        <div style="font-size: 12px; color: var(--color-light-gray); margin-bottom: 5px;">Your Investment</div>
                        <div style="font-size: 24px; font-weight: 500; color: var(--color-gold);">${PortalUtils.formatCurrency(deal.userInvestmentAmount)}</div>
                    </div>
                ` : ''}
            </div>
        </div>

        <!-- Deal Stats Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 50px;">
            <div style="padding: 25px; background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray);">
                <div style="font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 10px;">Funding Goal</div>
                <div style="font-size: 28px; font-weight: 500; color: var(--color-white);">${PortalUtils.formatCurrency(deal.fundingGoal)}</div>
            </div>
            <div style="padding: 25px; background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray);">
                <div style="font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 10px;">Raised</div>
                <div style="font-size: 28px; font-weight: 500; color: var(--color-gold);">${PortalUtils.formatCurrency(deal.fundingRaised)}</div>
            </div>
            <div style="padding: 25px; background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray);">
                <div style="font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 10px;">Expected Return</div>
                <div style="font-size: 28px; font-weight: 500; color: var(--color-white);">${deal.expectedReturn}</div>
            </div>
            <div style="padding: 25px; background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray);">
                <div style="font-size: 11px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 10px;">Term</div>
                <div style="font-size: 28px; font-weight: 500; color: var(--color-white);">${deal.term}</div>
            </div>
        </div>

        <!-- Funding Progress -->
        <div style="margin-bottom: 50px;">
            <div style="background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray); padding: 30px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 15px;">
                    <span style="font-size: 14px; font-weight: 500; color: var(--color-white);">Funding Progress</span>
                    <span style="font-size: 14px; font-weight: 500; color: var(--color-gold);">${deal.fundingProgress}%</span>
                </div>
                <div style="width: 100%; height: 8px; background: var(--color-medium-gray); overflow: hidden;">
                    <div style="height: 100%; background: linear-gradient(90deg, var(--color-gold), var(--color-gold-light)); width: ${deal.fundingProgress}%;"></div>
                </div>
                <div style="display: flex; justify-content: space-between; margin-top: 15px;">
                    <span style="font-size: 13px; color: var(--color-light-gray);">${deal.investorCount} investors</span>
                    <span style="font-size: 13px; color: var(--color-light-gray);">Min: ${PortalUtils.formatCurrency(deal.minimumInvestment)}</span>
                </div>
            </div>
        </div>

        <!-- Content Grid -->
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px;">
            <!-- Main Content -->
            <div>
                <!-- Description -->
                <div style="margin-bottom: 40px;">
                    <h2 style="font-family: var(--font-sans); font-size: 20px; font-weight: 500; color: var(--color-white); margin-bottom: 20px;">Overview</h2>
                    <p style="font-size: 16px; color: var(--color-off-white); line-height: 1.8;">${deal.description}</p>
                </div>

                <!-- Highlights -->
                ${deal.highlights ? `
                    <div style="margin-bottom: 40px;">
                        <h2 style="font-family: var(--font-sans); font-size: 20px; font-weight: 500; color: var(--color-white); margin-bottom: 20px;">Key Highlights</h2>
                        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 15px;">
                            ${deal.highlights.map(h => `
                                <li style="display: flex; gap: 12px; align-items: flex-start;">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="2" style="flex-shrink: 0; margin-top: 2px;">
                                        <polyline points="20 6 9 17 4 12"/>
                                    </svg>
                                    <span style="font-size: 15px; color: var(--color-off-white); line-height: 1.6;">${h}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                ` : ''}

                <!-- Timeline -->
                ${deal.timeline ? `
                    <div style="margin-bottom: 40px;">
                        <h2 style="font-family: var(--font-sans); font-size: 20px; font-weight: 500; color: var(--color-white); margin-bottom: 20px;">Project Timeline</h2>
                        <div style="background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray); padding: 30px;">
                            <div style="display: grid; gap: 20px;">
                                <div style="display: flex; gap: 15px; align-items: center;">
                                    <div style="width: 30px; height: 30px; border-radius: 50%; background: ${deal.timeline.planningComplete ? 'var(--color-gold)' : 'var(--color-medium-gray)'}; border: 2px solid ${deal.timeline.planningComplete ? 'var(--color-gold)' : 'var(--color-medium-gray)'}; flex-shrink: 0;"></div>
                                    <div style="flex: 1;">
                                        <div style="font-size: 14px; font-weight: 500; color: var(--color-white); margin-bottom: 4px;">Planning Complete</div>
                                        <div style="font-size: 13px; color: var(--color-light-gray);">${deal.timeline.planningComplete ? 'Completed' : 'In Progress'}</div>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 15px; align-items: center;">
                                    <div style="width: 30px; height: 30px; border-radius: 50%; background: ${!deal.timeline.permitsPending ? 'var(--color-gold)' : 'var(--color-medium-gray)'}; border: 2px solid ${!deal.timeline.permitsPending ? 'var(--color-gold)' : 'var(--color-medium-gray)'}; flex-shrink: 0;"></div>
                                    <div style="flex: 1;">
                                        <div style="font-size: 14px; font-weight: 500; color: var(--color-white); margin-bottom: 4px;">Permits & Approvals</div>
                                        <div style="font-size: 13px; color: var(--color-light-gray);">${!deal.timeline.permitsPending ? 'Obtained' : 'Pending'}</div>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 15px; align-items: center;">
                                    <div style="width: 30px; height: 30px; border-radius: 50%; background: var(--color-medium-gray); border: 2px solid var(--color-medium-gray); flex-shrink: 0;"></div>
                                    <div style="flex: 1;">
                                        <div style="font-size: 14px; font-weight: 500; color: var(--color-white); margin-bottom: 4px;">Construction Start</div>
                                        <div style="font-size: 13px; color: var(--color-light-gray);">${deal.timeline.constructionStart}</div>
                                    </div>
                                </div>
                                <div style="display: flex; gap: 15px; align-items: center;">
                                    <div style="width: 30px; height: 30px; border-radius: 50%; background: var(--color-medium-gray); border: 2px solid var(--color-medium-gray); flex-shrink: 0;"></div>
                                    <div style="flex: 1;">
                                        <div style="font-size: 14px; font-weight: 500; color: var(--color-white); margin-bottom: 4px;">Operations Begin</div>
                                        <div style="font-size: 13px; color: var(--color-light-gray);">${deal.timeline.operationalDate}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ` : ''}
            </div>

            <!-- Sidebar -->
            <div>
                <!-- Deal Info -->
                <div style="background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray); padding: 30px; margin-bottom: 30px;">
                    <h3 style="font-family: var(--font-sans); font-size: 16px; font-weight: 500; color: var(--color-white); margin-bottom: 25px;">Deal Information</h3>
                    <div style="display: flex; flex-direction: column; gap: 20px;">
                        <div>
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 6px;">Location</div>
                            <div style="font-size: 14px; color: var(--color-white);">${deal.location}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 6px;">Category</div>
                            <div style="font-size: 14px; color: var(--color-white);">${deal.category}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 6px;">Minimum Investment</div>
                            <div style="font-size: 14px; color: var(--color-white);">${PortalUtils.formatCurrency(deal.minimumInvestment)}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 6px;">Total Investors</div>
                            <div style="font-size: 14px; color: var(--color-white);">${deal.investorCount}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 6px;">Created</div>
                            <div style="font-size: 14px; color: var(--color-white);">${PortalUtils.formatDate(deal.createdAt)}</div>
                        </div>
                        <div>
                            <div style="font-size: 11px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: var(--color-light-gray); margin-bottom: 6px;">Last Updated</div>
                            <div style="font-size: 14px; color: var(--color-white);">${PortalUtils.formatDate(deal.updatedAt)}</div>
                        </div>
                    </div>
                </div>

                <!-- Documents -->
                ${deal.documents && deal.documents.length > 0 ? `
                    <div style="background: var(--color-dark-gray); border: 1px solid var(--color-medium-gray); padding: 30px;">
                        <h3 style="font-family: var(--font-sans); font-size: 16px; font-weight: 500; color: var(--color-white); margin-bottom: 25px;">Related Documents</h3>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            ${deal.documents.map(doc => `
                                <a href="#" onclick="alert('Document: ${doc}'); return false;" style="display: flex; align-items: center; gap: 12px; padding: 12px; background: var(--color-charcoal); border: 1px solid var(--color-medium-gray); text-decoration: none; transition: var(--transition-fast);" onmouseover="this.style.borderColor='var(--color-gold)'" onmouseout="this.style.borderColor='var(--color-medium-gray)'">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a227" stroke-width="1.5">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                        <polyline points="14 2 14 8 20 8"/>
                                    </svg>
                                    <span style="font-size: 13px; color: var(--color-white); flex: 1;">${doc}</span>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function expressInterest(dealId) {
    alert('Thank you for your interest!\n\nIn production, this would:\n1. Send a notification to the Endevera team\n2. Open a communication channel\n3. Provide next steps for investment\n\nFor now, please contact support@endevera.com');
}
