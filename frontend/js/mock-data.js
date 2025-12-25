/* ============================================
   ENDEVERA MOCK DATA
   Comprehensive mock data for member and admin portals
   DELETE THIS FILE BEFORE PRODUCTION DEPLOYMENT
   ============================================ */

const MOCK_DATA = {
    // Current logged-in user (for member portal)
    currentUser: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'demo@demo.com',
        role: 'investor',
        status: 'active',
        phone: '(555) 123-4567',
        company: 'Demo Capital Partners',
        city: 'Miami',
        state: 'FL',
        accreditationStatus: 'Individual - Net worth exceeds $1M',
        memberSince: '2024-01-15T00:00:00Z',
        lastLogin: '2024-12-24T09:30:00Z',
        profileImage: null,
        investmentTotal: 2500000,
        activeDeals: 2,
        totalReturns: 185000
    },

    // 6 investment deals
    deals: [
        {
            id: 1,
            title: 'Regional Fiber Network Expansion',
            category: 'Infrastructure',
            status: 'active',
            fundingGoal: 15000000,
            fundingRaised: 12750000,
            fundingProgress: 85,
            minimumInvestment: 100000,
            expectedReturn: '12-15%',
            term: '7 years',
            location: 'Southeast Region',
            description: 'Deployment of high-speed fiber optic network across underserved rural communities in the Southeast. Project includes 500+ miles of fiber infrastructure connecting 25,000 homes and businesses.',
            highlights: [
                'USDA ReConnect Grant Match secured',
                'Municipal partnerships in place',
                'Experienced ISP operator committed',
                'Projected ROI: 14% annually'
            ],
            timeline: {
                planningComplete: true,
                permitsPending: false,
                constructionStart: '2025-Q1',
                operationalDate: '2026-Q3'
            },
            documents: ['prospectus.pdf', 'financial-model.xlsx', 'site-maps.pdf'],
            investorCount: 23,
            createdAt: '2024-09-15T00:00:00Z',
            updatedAt: '2024-12-20T00:00:00Z',
            createdBy: 'Scott Cunningham',
            userInvested: true,
            userInvestmentAmount: 250000,
            userInvestmentDate: '2024-10-01T00:00:00Z'
        },
        {
            id: 2,
            title: 'Smart City IoT Platform',
            category: 'Technology',
            status: 'active',
            fundingGoal: 8500000,
            fundingRaised: 6375000,
            fundingProgress: 75,
            minimumInvestment: 50000,
            expectedReturn: '18-22%',
            term: '5 years',
            location: 'Multiple Cities',
            description: 'Comprehensive IoT platform for municipal services including smart parking, waste management, environmental monitoring, and public safety integration.',
            highlights: [
                '3 pilot cities confirmed',
                'Proprietary AI analytics engine',
                'Recurring SaaS revenue model',
                'Contracts with 8 municipalities signed'
            ],
            timeline: {
                planningComplete: true,
                permitsPending: false,
                constructionStart: '2025-Q1',
                operationalDate: '2025-Q4'
            },
            documents: ['executive-summary.pdf', 'technical-specs.pdf', 'revenue-projections.xlsx'],
            investorCount: 18,
            createdAt: '2024-10-01T00:00:00Z',
            updatedAt: '2024-12-18T00:00:00Z',
            createdBy: 'Andrew Couch',
            userInvested: true,
            userInvestmentAmount: 150000,
            userInvestmentDate: '2024-11-15T00:00:00Z'
        },
        {
            id: 3,
            title: 'Cybersecurity Operations Center',
            category: 'Cybersecurity',
            status: 'active',
            fundingGoal: 5000000,
            fundingRaised: 4250000,
            fundingProgress: 85,
            minimumInvestment: 75000,
            expectedReturn: '15-20%',
            term: '6 years',
            location: 'National',
            description: '24/7 Security Operations Center providing managed cybersecurity services to government agencies and critical infrastructure organizations.',
            highlights: [
                'FedRAMP certification in progress',
                'Experienced security team assembled',
                'Government contracts pipeline: $12M',
                'Recurring revenue model'
            ],
            timeline: {
                planningComplete: true,
                permitsPending: false,
                constructionStart: '2024-Q4',
                operationalDate: '2025-Q2'
            },
            documents: ['soc-overview.pdf', 'certification-roadmap.pdf', 'contracts-pipeline.xlsx'],
            investorCount: 15,
            createdAt: '2024-11-01T00:00:00Z',
            updatedAt: '2024-12-22T00:00:00Z',
            createdBy: 'Scott Scheidt',
            userInvested: false,
            userInvestmentAmount: 0,
            userInvestmentDate: null
        },
        {
            id: 4,
            title: 'Midwest Broadband Consortium',
            category: 'Infrastructure',
            status: 'closing_soon',
            fundingGoal: 22000000,
            fundingRaised: 19800000,
            fundingProgress: 90,
            minimumInvestment: 100000,
            expectedReturn: '10-14%',
            term: '8 years',
            location: 'Midwest Region',
            description: 'Coalition of 12 rural communities deploying shared broadband infrastructure. BEAD funding matched with private capital for sustainable network operations.',
            highlights: [
                'BEAD funding: $18M secured',
                '12 municipalities committed',
                'Open-access network model',
                'Local workforce development program'
            ],
            timeline: {
                planningComplete: true,
                permitsPending: false,
                constructionStart: '2025-Q2',
                operationalDate: '2027-Q1'
            },
            documents: ['consortium-agreement.pdf', 'bead-application.pdf', 'engineering-report.pdf'],
            investorCount: 28,
            createdAt: '2024-08-01T00:00:00Z',
            updatedAt: '2024-12-23T00:00:00Z',
            createdBy: 'Scott Cunningham',
            userInvested: false,
            userInvestmentAmount: 0,
            userInvestmentDate: null
        },
        {
            id: 5,
            title: 'Public Safety Communications Upgrade',
            category: 'Technology',
            status: 'upcoming',
            fundingGoal: 12000000,
            fundingRaised: 0,
            fundingProgress: 0,
            minimumInvestment: 100000,
            expectedReturn: '13-16%',
            term: '7 years',
            location: 'Pacific Northwest',
            description: 'Next-generation 911 and emergency communications system serving regional public safety agencies. Includes CAD integration, mobile data, and interoperability platform.',
            highlights: [
                'State funding commitment: $8M',
                '15 agencies participating',
                'FirstNet integration included',
                'Mission-critical infrastructure'
            ],
            timeline: {
                planningComplete: true,
                permitsPending: true,
                constructionStart: '2025-Q3',
                operationalDate: '2026-Q4'
            },
            documents: ['needs-assessment.pdf', 'system-design.pdf'],
            investorCount: 0,
            createdAt: '2024-12-01T00:00:00Z',
            updatedAt: '2024-12-15T00:00:00Z',
            createdBy: 'Steve Sebestyen',
            userInvested: false,
            userInvestmentAmount: 0,
            userInvestmentDate: null
        },
        {
            id: 6,
            title: 'Data Center Modernization Fund',
            category: 'Infrastructure',
            status: 'funded',
            fundingGoal: 18000000,
            fundingRaised: 18000000,
            fundingProgress: 100,
            minimumInvestment: 150000,
            expectedReturn: '16-19%',
            term: '5 years',
            location: 'Multiple Locations',
            description: 'Portfolio of edge data centers supporting government and enterprise cloud services. Energy-efficient facilities with renewable power commitments.',
            highlights: [
                'Fully funded - construction underway',
                '4 tier-3 facilities',
                'Long-term anchor tenants secured',
                'Green energy certified'
            ],
            timeline: {
                planningComplete: true,
                permitsPending: false,
                constructionStart: '2024-Q4',
                operationalDate: '2025-Q3'
            },
            documents: ['facility-specs.pdf', 'tenant-agreements.pdf', 'energy-analysis.pdf'],
            investorCount: 32,
            createdAt: '2024-07-01T00:00:00Z',
            updatedAt: '2024-12-10T00:00:00Z',
            createdBy: 'Greg Mazza',
            userInvested: false,
            userInvestmentAmount: 0,
            userInvestmentDate: null
        }
    ],

    // 47 users (members + admins)
    users: [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            email: 'demo@demo.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 123-4567',
            company: 'Demo Capital Partners',
            city: 'Miami',
            state: 'FL',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-01-15T00:00:00Z',
            lastLogin: '2024-12-24T09:30:00Z',
            investmentTotal: 2500000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 2,
            firstName: 'Sarah',
            lastName: 'Martinez',
            email: 'sarah.martinez@capitalgroup.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 234-5678',
            company: 'Martinez Capital Group',
            city: 'Austin',
            state: 'TX',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-02-01T00:00:00Z',
            lastLogin: '2024-12-23T14:20:00Z',
            investmentTotal: 1800000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 3,
            firstName: 'Michael',
            lastName: 'Chen',
            email: 'mchen@techventures.io',
            role: 'investor',
            status: 'active',
            phone: '(555) 345-6789',
            company: 'Tech Ventures LLC',
            city: 'San Francisco',
            state: 'CA',
            accreditationStatus: 'Individual - Income exceeds $200K for past 2 years',
            memberSince: '2024-02-15T00:00:00Z',
            lastLogin: '2024-12-22T11:45:00Z',
            investmentTotal: 950000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 4,
            firstName: 'Emily',
            lastName: 'Thompson',
            email: 'ethompson@broadband-equity.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 456-7890',
            company: 'Broadband Equity Partners',
            city: 'Denver',
            state: 'CO',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-03-01T00:00:00Z',
            lastLogin: '2024-12-24T08:15:00Z',
            investmentTotal: 3200000,
            activeDeals: 4,
            totalDeals: 4
        },
        {
            id: 5,
            firstName: 'David',
            lastName: 'Roberts',
            email: 'droberts@infrastructure-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 567-8901',
            company: 'Infrastructure Growth Fund',
            city: 'Chicago',
            state: 'IL',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-03-15T00:00:00Z',
            lastLogin: '2024-12-21T16:30:00Z',
            investmentTotal: 5500000,
            activeDeals: 5,
            totalDeals: 5
        },
        {
            id: 6,
            firstName: 'Jennifer',
            lastName: 'Wilson',
            email: 'jwilson@wilsonholdings.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 678-9012',
            company: 'Wilson Family Holdings',
            city: 'Seattle',
            state: 'WA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-04-01T00:00:00Z',
            lastLogin: '2024-12-23T10:00:00Z',
            investmentTotal: 1250000,
            activeDeals: 1,
            totalDeals: 2
        },
        {
            id: 7,
            firstName: 'Robert',
            lastName: 'Anderson',
            email: 'randerson@digitalinfra.io',
            role: 'investor',
            status: 'active',
            phone: '(555) 789-0123',
            company: 'Digital Infrastructure Partners',
            city: 'Boston',
            state: 'MA',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-04-15T00:00:00Z',
            lastLogin: '2024-12-24T07:45:00Z',
            investmentTotal: 4100000,
            activeDeals: 3,
            totalDeals: 4
        },
        {
            id: 8,
            firstName: 'Lisa',
            lastName: 'Garcia',
            email: 'lgarcia@smartcities-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 890-1234',
            company: 'Smart Cities Investment Fund',
            city: 'Phoenix',
            state: 'AZ',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-05-01T00:00:00Z',
            lastLogin: '2024-12-22T13:20:00Z',
            investmentTotal: 2800000,
            activeDeals: 2,
            totalDeals: 3
        },
        {
            id: 9,
            firstName: 'James',
            lastName: 'Taylor',
            email: 'jtaylor@connectivity-capital.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 901-2345',
            company: 'Connectivity Capital',
            city: 'Atlanta',
            state: 'GA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-05-15T00:00:00Z',
            lastLogin: '2024-12-23T09:30:00Z',
            investmentTotal: 1650000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 10,
            firstName: 'Maria',
            lastName: 'Rodriguez',
            email: 'mrodriguez@tech-infrastructure.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 012-3456',
            company: 'Tech Infrastructure Group',
            city: 'Dallas',
            state: 'TX',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-06-01T00:00:00Z',
            lastLogin: '2024-12-24T06:50:00Z',
            investmentTotal: 3750000,
            activeDeals: 4,
            totalDeals: 4
        },
        {
            id: 11,
            firstName: 'William',
            lastName: 'Brown',
            email: 'wbrown@broadband-ventures.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 123-4568',
            company: 'Broadband Ventures',
            city: 'Portland',
            state: 'OR',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-06-15T00:00:00Z',
            lastLogin: '2024-12-20T15:10:00Z',
            investmentTotal: 875000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 12,
            firstName: 'Patricia',
            lastName: 'Davis',
            email: 'pdavis@municipal-tech.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 234-5679',
            company: 'Municipal Tech Investors',
            city: 'Nashville',
            state: 'TN',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-07-01T00:00:00Z',
            lastLogin: '2024-12-23T12:40:00Z',
            investmentTotal: 2100000,
            activeDeals: 2,
            totalDeals: 3
        },
        {
            id: 13,
            firstName: 'Richard',
            lastName: 'Miller',
            email: 'rmiller@fiber-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 345-6780',
            company: 'Fiber Investment Fund',
            city: 'Minneapolis',
            state: 'MN',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-07-15T00:00:00Z',
            lastLogin: '2024-12-22T14:25:00Z',
            investmentTotal: 1450000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 14,
            firstName: 'Barbara',
            lastName: 'Wilson',
            email: 'bwilson@digital-equity.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 456-7891',
            company: 'Digital Equity Partners',
            city: 'Charlotte',
            state: 'NC',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-08-01T00:00:00Z',
            lastLogin: '2024-12-24T11:15:00Z',
            investmentTotal: 3950000,
            activeDeals: 3,
            totalDeals: 4
        },
        {
            id: 15,
            firstName: 'Thomas',
            lastName: 'Moore',
            email: 'tmoore@infrastructure-holdings.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 567-8902',
            company: 'Infrastructure Holdings LLC',
            city: 'Salt Lake City',
            state: 'UT',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-08-15T00:00:00Z',
            lastLogin: '2024-12-21T09:50:00Z',
            investmentTotal: 1125000,
            activeDeals: 1,
            totalDeals: 2
        },
        {
            id: 16,
            firstName: 'Scott',
            lastName: 'Cunningham',
            email: 'admin@demo.com',
            role: 'admin',
            status: 'active',
            phone: '(561) 555-0100',
            company: 'Endevera Technologies',
            city: 'Palm Beach',
            state: 'FL',
            accreditationStatus: null,
            memberSince: '2024-01-01T00:00:00Z',
            lastLogin: '2024-12-24T09:00:00Z',
            investmentTotal: 0,
            activeDeals: 0,
            totalDeals: 0
        },
        {
            id: 17,
            firstName: 'Andrew',
            lastName: 'Couch',
            email: 'andrew@endevera.com',
            role: 'admin',
            status: 'active',
            phone: '(561) 555-0101',
            company: 'Endevera Technologies',
            city: 'Palm Beach',
            state: 'FL',
            accreditationStatus: null,
            memberSince: '2024-01-01T00:00:00Z',
            lastLogin: '2024-12-23T17:30:00Z',
            investmentTotal: 0,
            activeDeals: 0,
            totalDeals: 0
        },
        // Additional investors 18-47
        {
            id: 18,
            firstName: 'Christopher',
            lastName: 'Lee',
            email: 'clee@connectivity-partners.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 678-9013',
            company: 'Connectivity Partners',
            city: 'San Diego',
            state: 'CA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-09-01T00:00:00Z',
            lastLogin: '2024-12-19T10:30:00Z',
            investmentTotal: 725000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 19,
            firstName: 'Nancy',
            lastName: 'White',
            email: 'nwhite@municipal-investments.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 789-0124',
            company: 'Municipal Investment Group',
            city: 'Columbus',
            state: 'OH',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-09-15T00:00:00Z',
            lastLogin: '2024-12-23T08:20:00Z',
            investmentTotal: 2650000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 20,
            firstName: 'Daniel',
            lastName: 'Harris',
            email: 'dharris@broadband-capital.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 890-1235',
            company: 'Broadband Capital LLC',
            city: 'Indianapolis',
            state: 'IN',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-10-01T00:00:00Z',
            lastLogin: '2024-12-24T07:10:00Z',
            investmentTotal: 1575000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 21,
            firstName: 'Karen',
            lastName: 'Martin',
            email: 'kmartin@tech-equity.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 901-2346',
            company: 'Tech Equity Fund',
            city: 'Raleigh',
            state: 'NC',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-10-15T00:00:00Z',
            lastLogin: '2024-12-22T16:45:00Z',
            investmentTotal: 3350000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 22,
            firstName: 'Matthew',
            lastName: 'Jackson',
            email: 'mjackson@infrastructure-ventures.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 012-3457',
            company: 'Infrastructure Ventures',
            city: 'Milwaukee',
            state: 'WI',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-11-01T00:00:00Z',
            lastLogin: '2024-12-21T11:20:00Z',
            investmentTotal: 980000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 23,
            firstName: 'Betty',
            lastName: 'Thompson',
            email: 'bthompson@digital-infrastructure.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 123-4569',
            company: 'Digital Infrastructure Co',
            city: 'Kansas City',
            state: 'MO',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-11-15T00:00:00Z',
            lastLogin: '2024-12-23T13:55:00Z',
            investmentTotal: 4200000,
            activeDeals: 4,
            totalDeals: 4
        },
        {
            id: 24,
            firstName: 'Anthony',
            lastName: 'Garcia',
            email: 'agarcia@broadband-holdings.com',
            role: 'investor',
            status: 'inactive',
            phone: '(555) 234-5680',
            company: 'Broadband Holdings',
            city: 'Tampa',
            state: 'FL',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-03-01T00:00:00Z',
            lastLogin: '2024-08-15T14:20:00Z',
            investmentTotal: 500000,
            activeDeals: 0,
            totalDeals: 1
        },
        {
            id: 25,
            firstName: 'Sandra',
            lastName: 'Martinez',
            email: 'smartinez@connectivity-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 345-6781',
            company: 'Connectivity Investment Fund',
            city: 'Las Vegas',
            state: 'NV',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-12-01T00:00:00Z',
            lastLogin: '2024-12-24T06:30:00Z',
            investmentTotal: 1850000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 26,
            firstName: 'Mark',
            lastName: 'Robinson',
            email: 'mrobinson@municipal-tech-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 456-7892',
            company: 'Municipal Tech Fund',
            city: 'Louisville',
            state: 'KY',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-12-15T00:00:00Z',
            lastLogin: '2024-12-23T09:15:00Z',
            investmentTotal: 625000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 27,
            firstName: 'Donna',
            lastName: 'Clark',
            email: 'dclark@infrastructure-equity.com',
            role: 'investor',
            status: 'pending',
            phone: '(555) 567-8903',
            company: 'Infrastructure Equity Group',
            city: 'Baltimore',
            state: 'MD',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-12-20T00:00:00Z',
            lastLogin: null,
            investmentTotal: 0,
            activeDeals: 0,
            totalDeals: 0
        },
        {
            id: 28,
            firstName: 'Paul',
            lastName: 'Rodriguez',
            email: 'prodriguez@fiber-ventures.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 678-9014',
            company: 'Fiber Ventures LLC',
            city: 'Richmond',
            state: 'VA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-05-20T00:00:00Z',
            lastLogin: '2024-12-22T10:40:00Z',
            investmentTotal: 1300000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 29,
            firstName: 'Carol',
            lastName: 'Lewis',
            email: 'clewis@digital-equity-partners.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 789-0125',
            company: 'Digital Equity Partners II',
            city: 'Oklahoma City',
            state: 'OK',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-06-10T00:00:00Z',
            lastLogin: '2024-12-24T08:05:00Z',
            investmentTotal: 2950000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 30,
            firstName: 'Steven',
            lastName: 'Walker',
            email: 'swalker@connectivity-holdings.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 890-1236',
            company: 'Connectivity Holdings',
            city: 'Memphis',
            state: 'TN',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-07-05T00:00:00Z',
            lastLogin: '2024-12-21T15:50:00Z',
            investmentTotal: 1075000,
            activeDeals: 1,
            totalDeals: 2
        },
        {
            id: 31,
            firstName: 'Helen',
            lastName: 'Hall',
            email: 'hhall@broadband-investors.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 901-2347',
            company: 'Broadband Investors Group',
            city: 'New Orleans',
            state: 'LA',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-08-20T00:00:00Z',
            lastLogin: '2024-12-23T12:10:00Z',
            investmentTotal: 3575000,
            activeDeals: 4,
            totalDeals: 4
        },
        {
            id: 32,
            firstName: 'Kevin',
            lastName: 'Allen',
            email: 'kallen@tech-infrastructure-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 012-3458',
            company: 'Tech Infrastructure Fund',
            city: 'Providence',
            state: 'RI',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-09-10T00:00:00Z',
            lastLogin: '2024-12-20T14:35:00Z',
            investmentTotal: 850000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 33,
            firstName: 'Michelle',
            lastName: 'Young',
            email: 'myoung@municipal-broadband.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 123-4570',
            company: 'Municipal Broadband Partners',
            city: 'Hartford',
            state: 'CT',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-10-05T00:00:00Z',
            lastLogin: '2024-12-24T07:25:00Z',
            investmentTotal: 2450000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 34,
            firstName: 'Larry',
            lastName: 'King',
            email: 'lking@infrastructure-capital.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 234-5681',
            company: 'Infrastructure Capital Group',
            city: 'Boise',
            state: 'ID',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-11-10T00:00:00Z',
            lastLogin: '2024-12-22T09:45:00Z',
            investmentTotal: 1200000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 35,
            firstName: 'Jessica',
            lastName: 'Wright',
            email: 'jwright@digital-ventures.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 345-6782',
            company: 'Digital Ventures Fund',
            city: 'Des Moines',
            state: 'IA',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-04-25T00:00:00Z',
            lastLogin: '2024-12-23T11:30:00Z',
            investmentTotal: 3850000,
            activeDeals: 3,
            totalDeals: 4
        },
        {
            id: 36,
            firstName: 'Brian',
            lastName: 'Lopez',
            email: 'blopez@connectivity-equity.com',
            role: 'investor',
            status: 'inactive',
            phone: '(555) 456-7893',
            company: 'Connectivity Equity Partners',
            city: 'Little Rock',
            state: 'AR',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-02-28T00:00:00Z',
            lastLogin: '2024-09-10T13:20:00Z',
            investmentTotal: 450000,
            activeDeals: 0,
            totalDeals: 1
        },
        {
            id: 37,
            firstName: 'Deborah',
            lastName: 'Hill',
            email: 'dhill@broadband-equity-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 567-8904',
            company: 'Broadband Equity Fund II',
            city: 'Albuquerque',
            state: 'NM',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-05-30T00:00:00Z',
            lastLogin: '2024-12-24T06:55:00Z',
            investmentTotal: 2750000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 38,
            firstName: 'Ronald',
            lastName: 'Scott',
            email: 'rscott@municipal-infrastructure.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 678-9015',
            company: 'Municipal Infrastructure Group',
            city: 'Tucson',
            state: 'AZ',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-07-20T00:00:00Z',
            lastLogin: '2024-12-21T10:15:00Z',
            investmentTotal: 1425000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 39,
            firstName: 'Amy',
            lastName: 'Green',
            email: 'agreen@fiber-equity.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 789-0126',
            company: 'Fiber Equity Partners',
            city: 'Fresno',
            state: 'CA',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-08-15T00:00:00Z',
            lastLogin: '2024-12-23T14:40:00Z',
            investmentTotal: 3100000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 40,
            firstName: 'Raymond',
            lastName: 'Adams',
            email: 'radams@tech-capital.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 890-1237',
            company: 'Tech Capital Ventures',
            city: 'Sacramento',
            state: 'CA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-09-25T00:00:00Z',
            lastLogin: '2024-12-22T08:50:00Z',
            investmentTotal: 975000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 41,
            firstName: 'Kathleen',
            lastName: 'Baker',
            email: 'kbaker@connectivity-investments.com',
            role: 'investor',
            status: 'pending',
            phone: '(555) 901-2348',
            company: 'Connectivity Investments LLC',
            city: 'Mesa',
            state: 'AZ',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-12-18T00:00:00Z',
            lastLogin: null,
            investmentTotal: 0,
            activeDeals: 0,
            totalDeals: 0
        },
        {
            id: 42,
            firstName: 'Jack',
            lastName: 'Nelson',
            email: 'jnelson@broadband-growth.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 012-3459',
            company: 'Broadband Growth Fund',
            city: 'Long Beach',
            state: 'CA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-03-20T00:00:00Z',
            lastLogin: '2024-12-24T09:20:00Z',
            investmentTotal: 1550000,
            activeDeals: 2,
            totalDeals: 2
        },
        {
            id: 43,
            firstName: 'Judy',
            lastName: 'Carter',
            email: 'jcarter@infrastructure-investors.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 123-4571',
            company: 'Infrastructure Investors Group',
            city: 'Oakland',
            state: 'CA',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-06-25T00:00:00Z',
            lastLogin: '2024-12-23T15:10:00Z',
            investmentTotal: 4450000,
            activeDeals: 4,
            totalDeals: 5
        },
        {
            id: 44,
            firstName: 'Terry',
            lastName: 'Mitchell',
            email: 'tmitchell@digital-capital.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 234-5682',
            company: 'Digital Capital Partners',
            city: 'Omaha',
            state: 'NE',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-08-05T00:00:00Z',
            lastLogin: '2024-12-20T12:25:00Z',
            investmentTotal: 1125000,
            activeDeals: 1,
            totalDeals: 2
        },
        {
            id: 45,
            firstName: 'Alice',
            lastName: 'Perez',
            email: 'aperez@municipal-equity.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 345-6783',
            company: 'Municipal Equity Fund',
            city: 'Tulsa',
            state: 'OK',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-10-20T00:00:00Z',
            lastLogin: '2024-12-24T08:40:00Z',
            investmentTotal: 2850000,
            activeDeals: 3,
            totalDeals: 3
        },
        {
            id: 46,
            firstName: 'Willie',
            lastName: 'Roberts',
            email: 'wroberts@fiber-investments.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 456-7894',
            company: 'Fiber Investment Partners',
            city: 'Arlington',
            state: 'TX',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            memberSince: '2024-11-25T00:00:00Z',
            lastLogin: '2024-12-22T11:05:00Z',
            investmentTotal: 775000,
            activeDeals: 1,
            totalDeals: 1
        },
        {
            id: 47,
            firstName: 'Gloria',
            lastName: 'Turner',
            email: 'gturner@connectivity-capital-fund.com',
            role: 'investor',
            status: 'active',
            phone: '(555) 567-8905',
            company: 'Connectivity Capital Fund',
            city: 'Wichita',
            state: 'KS',
            accreditationStatus: 'Entity - Assets exceed $5M',
            memberSince: '2024-12-10T00:00:00Z',
            lastLogin: '2024-12-23T16:20:00Z',
            investmentTotal: 1950000,
            activeDeals: 2,
            totalDeals: 2
        }
    ],

    // 5 reports
    reports: [
        {
            id: 1,
            title: 'Q4 2024 Portfolio Performance Review',
            type: 'Quarterly Review',
            excerpt: 'Comprehensive analysis of portfolio performance, market trends, and strategic outlook for infrastructure investments.',
            content: `
                <h2>Executive Summary</h2>
                <p>The fourth quarter of 2024 marked exceptional growth across our infrastructure investment portfolio. Total portfolio value increased 18% year-over-year, driven by successful deployments in broadband infrastructure and smart city technologies.</p>
                
                <h3>Key Highlights</h3>
                <ul>
                    <li>Portfolio valuation: $142.5M (+18% YoY)</li>
                    <li>6 active projects across 4 states</li>
                    <li>Average ROI: 15.2% across all investments</li>
                    <li>3 new municipal partnerships secured</li>
                    <li>$22M in new capital commitments</li>
                </ul>
                
                <h3>Market Analysis</h3>
                <p>The infrastructure investment landscape continues to evolve rapidly. Federal BEAD funding allocation has accelerated deployment timelines, creating favorable conditions for private capital participation. Our strategic positioning in underserved markets has proven highly advantageous.</p>
                
                <h3>Project Performance</h3>
                <p>Regional Fiber Network Expansion exceeded deployment milestones, connecting 12,500 homes ahead of schedule. Smart City IoT Platform secured contracts with three additional municipalities. Cybersecurity Operations Center achieved FedRAMP authorization, opening government contract pipeline.</p>
                
                <h3>Looking Forward</h3>
                <p>We anticipate continued strong performance in Q1 2025 as construction seasons commence and federal funding flows accelerate. Two new opportunities in public safety communications are under evaluation.</p>
            `,
            fileUrl: '/documents/Q4-2024-Portfolio-Review.pdf',
            status: 'published',
            publishedAt: '2024-12-15T09:00:00Z',
            createdAt: '2024-12-10T00:00:00Z',
            createdBy: 16, // Scott Cunningham
            viewCount: 142,
            downloadCount: 87
        },
        {
            id: 2,
            title: 'Broadband Infrastructure Investment Thesis',
            type: 'Market Analysis',
            excerpt: 'Deep dive into broadband infrastructure opportunities, regulatory landscape, and investment strategies for 2025.',
            content: `
                <h2>Investment Opportunity</h2>
                <p>The broadband infrastructure sector presents unprecedented investment opportunities driven by federal policy, technological advancement, and persistent digital divide challenges. Our analysis identifies key market segments poised for substantial growth.</p>
                
                <h3>Market Dynamics</h3>
                <ul>
                    <li>$42.5B BEAD program deployment underway</li>
                    <li>80M+ Americans lack adequate broadband access</li>
                    <li>Rural markets underserved by traditional providers</li>
                    <li>Increasing demand for gigabit-capable networks</li>
                </ul>
                
                <h3>Strategic Approach</h3>
                <p>Our investment strategy focuses on public-private partnerships in underserved markets, leveraging federal grant programs to de-risk deployment costs while maintaining attractive returns for private capital.</p>
                
                <h3>Risk Mitigation</h3>
                <p>Comprehensive risk management through municipal partnerships, grant matching strategies, and experienced operational partners ensures sustainable long-term performance.</p>
            `,
            fileUrl: '/documents/Broadband-Investment-Thesis-2025.pdf',
            status: 'published',
            publishedAt: '2024-11-20T09:00:00Z',
            createdAt: '2024-11-15T00:00:00Z',
            createdBy: 17, // Andrew Couch
            viewCount: 98,
            downloadCount: 64
        },
        {
            id: 3,
            title: 'Smart Cities Technology Trends 2025',
            type: 'Industry Report',
            excerpt: 'Analysis of emerging smart city technologies and their impact on municipal infrastructure investments.',
            content: `
                <h2>Overview</h2>
                <p>Smart city technology deployment accelerated significantly in 2024, with municipalities increasingly adopting IoT platforms, AI-powered analytics, and integrated management systems.</p>
                
                <h3>Key Technology Trends</h3>
                <ul>
                    <li>AI-powered traffic management systems</li>
                    <li>Environmental monitoring networks</li>
                    <li>Smart waste management solutions</li>
                    <li>Public safety integration platforms</li>
                    <li>Citizen engagement applications</li>
                </ul>
                
                <h3>Investment Implications</h3>
                <p>Growing municipal budgets for technology modernization create substantial opportunities for private capital participation. SaaS-based revenue models provide predictable returns with strong margin profiles.</p>
            `,
            fileUrl: '/documents/Smart-Cities-Trends-2025.pdf',
            status: 'published',
            publishedAt: '2024-10-10T09:00:00Z',
            createdAt: '2024-10-05T00:00:00Z',
            createdBy: 17, // Andrew Couch
            viewCount: 76,
            downloadCount: 52
        },
        {
            id: 4,
            title: 'Cybersecurity Infrastructure Investment Guide',
            type: 'Investment Guide',
            excerpt: 'Comprehensive guide to cybersecurity infrastructure investments for critical infrastructure protection.',
            content: `
                <h2>Market Opportunity</h2>
                <p>Cybersecurity infrastructure represents a critical and growing investment category as municipalities and utilities face increasing threat landscapes and regulatory requirements.</p>
                
                <h3>Regulatory Drivers</h3>
                <ul>
                    <li>CISA critical infrastructure guidelines</li>
                    <li>State-level cybersecurity mandates</li>
                    <li>Insurance requirements driving investment</li>
                    <li>Federal funding for security improvements</li>
                </ul>
                
                <h3>Investment Vehicles</h3>
                <p>Security Operations Centers (SOCs), managed security services, and security infrastructure deployment all offer attractive risk-adjusted returns with strong regulatory tailwinds.</p>
            `,
            fileUrl: '/documents/Cybersecurity-Investment-Guide.pdf',
            status: 'published',
            publishedAt: '2024-09-15T09:00:00Z',
            createdAt: '2024-09-10T00:00:00Z',
            createdBy: 16, // Scott Cunningham
            viewCount: 64,
            downloadCount: 41
        },
        {
            id: 5,
            title: 'Data Center Modernization Opportunities',
            type: 'Sector Analysis',
            excerpt: 'Analysis of edge data center deployment opportunities supporting government and enterprise cloud adoption.',
            content: `
                <h2>Edge Computing Growth</h2>
                <p>Edge data center deployment accelerates as government agencies and enterprises migrate to hybrid cloud architectures requiring low-latency, secure local computing resources.</p>
                
                <h3>Market Drivers</h3>
                <ul>
                    <li>Government cloud-first policies</li>
                    <li>5G network deployment</li>
                    <li>IoT data processing requirements</li>
                    <li>Data sovereignty concerns</li>
                    <li>Latency-sensitive applications</li>
                </ul>
                
                <h3>Investment Strategy</h3>
                <p>Tier-3 facilities in strategic locations with renewable energy commitments and long-term anchor tenants provide stable cash flows and strong appreciation potential.</p>
            `,
            fileUrl: '/documents/Data-Center-Opportunities.pdf',
            status: 'published',
            publishedAt: '2024-08-20T09:00:00Z',
            createdAt: '2024-08-15T00:00:00Z',
            createdBy: 16, // Scott Cunningham
            viewCount: 58,
            downloadCount: 39
        }
    ],

    // 10 investor applications
    investorApplications: [
        {
            id: 1,
            firstName: 'Robert',
            lastName: 'Sullivan',
            email: 'rsullivan@tech-capital.io',
            phone: '(555) 111-2222',
            company: 'Sullivan Tech Capital',
            city: 'San Jose',
            state: 'CA',
            accreditationStatus: 'Entity - Assets exceed $5M',
            additionalInfo: 'Managing partner of $250M technology-focused fund. Interested in smart city and IoT infrastructure opportunities.',
            status: 'pending',
            submittedAt: '2024-12-23T14:30:00Z',
            reviewedAt: null,
            approvalToken: null,
            notes: null
        },
        {
            id: 2,
            firstName: 'Margaret',
            lastName: 'Foster',
            email: 'mfoster@broadband-investors.net',
            phone: '(555) 222-3333',
            company: 'Foster Broadband Investors',
            city: 'Raleigh',
            state: 'NC',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            additionalInfo: 'Former telecom executive with deep broadband deployment experience. Seeking fiber infrastructure investments.',
            status: 'pending',
            submittedAt: '2024-12-22T10:15:00Z',
            reviewedAt: null,
            approvalToken: null,
            notes: null
        },
        {
            id: 3,
            firstName: 'Timothy',
            lastName: 'Barnes',
            email: 'tbarnes@municipal-infrastructure.com',
            phone: '(555) 333-4444',
            company: 'Barnes Municipal Infrastructure Fund',
            city: 'Columbus',
            state: 'OH',
            accreditationStatus: 'Entity - Assets exceed $5M',
            additionalInfo: 'Focused on public-private partnerships in municipal infrastructure. 20+ years experience.',
            status: 'approved',
            submittedAt: '2024-12-20T09:00:00Z',
            reviewedAt: '2024-12-21T11:30:00Z',
            approvalToken: 'APP-2024-003-BARNES',
            notes: 'Approved - excellent background in municipal partnerships'
        },
        {
            id: 4,
            firstName: 'Angela',
            lastName: 'Hughes',
            email: 'ahughes@connectivity-partners.io',
            phone: '(555) 444-5555',
            company: 'Hughes Connectivity Partners',
            city: 'Portland',
            state: 'OR',
            accreditationStatus: 'Individual - Income exceeds $200K for past 2 years',
            additionalInfo: 'Technology entrepreneur with successful exits. Looking to diversify into infrastructure.',
            status: 'pending',
            submittedAt: '2024-12-21T16:45:00Z',
            reviewedAt: null,
            approvalToken: null,
            notes: null
        },
        {
            id: 5,
            firstName: 'Charles',
            lastName: 'Peterson',
            email: 'cpeterson@infrastructure-equity.net',
            phone: '(555) 555-6666',
            company: 'Peterson Infrastructure Equity',
            city: 'Minneapolis',
            state: 'MN',
            accreditationStatus: 'Entity - Assets exceed $5M',
            additionalInfo: 'Family office managing $400M across various infrastructure sectors.',
            status: 'approved',
            submittedAt: '2024-12-19T13:20:00Z',
            reviewedAt: '2024-12-20T09:15:00Z',
            approvalToken: 'APP-2024-005-PETERSON',
            notes: 'Approved - significant infrastructure experience'
        },
        {
            id: 6,
            firstName: 'Dorothy',
            lastName: 'Russell',
            email: 'drussell@fiber-ventures.com',
            phone: '(555) 666-7777',
            company: 'Russell Fiber Ventures',
            city: 'Salt Lake City',
            state: 'UT',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            additionalInfo: 'Former fiber optic network executive seeking investment opportunities in rural broadband.',
            status: 'rejected',
            submittedAt: '2024-12-18T11:00:00Z',
            reviewedAt: '2024-12-19T14:30:00Z',
            approvalToken: null,
            notes: 'Declined - minimum investment requirements not met'
        },
        {
            id: 7,
            firstName: 'Frank',
            lastName: 'Coleman',
            email: 'fcoleman@digital-infrastructure.io',
            phone: '(555) 777-8888',
            company: 'Coleman Digital Infrastructure',
            city: 'Nashville',
            state: 'TN',
            accreditationStatus: 'Entity - Assets exceed $5M',
            additionalInfo: 'Data center and cloud infrastructure investor. Interested in edge computing opportunities.',
            status: 'pending',
            submittedAt: '2024-12-24T08:30:00Z',
            reviewedAt: null,
            approvalToken: null,
            notes: null
        },
        {
            id: 8,
            firstName: 'Evelyn',
            lastName: 'Butler',
            email: 'ebutler@smart-city-fund.com',
            phone: '(555) 888-9999',
            company: 'Butler Smart City Fund',
            city: 'Denver',
            state: 'CO',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            additionalInfo: 'Urban planning consultant interested in smart city technology investments.',
            status: 'pending',
            submittedAt: '2024-12-23T15:45:00Z',
            reviewedAt: null,
            approvalToken: null,
            notes: null
        },
        {
            id: 9,
            firstName: 'Howard',
            lastName: 'Jenkins',
            email: 'hjenkins@connectivity-capital.net',
            phone: '(555) 999-0000',
            company: 'Jenkins Connectivity Capital',
            city: 'Phoenix',
            state: 'AZ',
            accreditationStatus: 'Entity - Assets exceed $5M',
            additionalInfo: 'Telecommunications infrastructure fund with $180M AUM. Seeking co-investment opportunities.',
            status: 'approved',
            submittedAt: '2024-12-17T10:00:00Z',
            reviewedAt: '2024-12-18T09:30:00Z',
            approvalToken: 'APP-2024-009-JENKINS',
            notes: 'Approved - strong telecommunications background'
        },
        {
            id: 10,
            firstName: 'Janice',
            lastName: 'Powell',
            email: 'jpowell@municipal-tech.io',
            phone: '(555) 000-1111',
            company: 'Powell Municipal Tech Investors',
            city: 'Sacramento',
            state: 'CA',
            accreditationStatus: 'Individual - Net worth exceeds $1M',
            additionalInfo: 'Former city CIO with expertise in municipal technology procurement and deployment.',
            status: 'pending',
            submittedAt: '2024-12-24T09:15:00Z',
            reviewedAt: null,
            approvalToken: null,
            notes: null
        }
    ],

    // 15 documents
    documents: [
        {
            id: 1,
            filename: 'Regional-Fiber-Prospectus.pdf',
            displayName: 'Regional Fiber Network - Investment Prospectus',
            fileUrl: '/documents/regional-fiber-prospectus.pdf',
            fileSize: 2457600, // 2.4 MB
            fileType: 'PDF',
            category: 'Deal Documents',
            description: 'Complete investment prospectus for Regional Fiber Network Expansion project including financial projections, technical specifications, and regulatory approvals.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-09-15T09:00:00Z',
            assignedToAll: false,
            assignedMembers: [1, 2, 3, 4, 5, 7, 9, 10],
            assignedDeal: 1,
            viewCount: 87,
            downloadCount: 52
        },
        {
            id: 2,
            filename: 'Smart-City-IoT-Technical-Specs.pdf',
            displayName: 'Smart City IoT Platform - Technical Specifications',
            fileUrl: '/documents/smart-city-technical-specs.pdf',
            fileSize: 1843200, // 1.8 MB
            fileType: 'PDF',
            category: 'Deal Documents',
            description: 'Detailed technical specifications for IoT platform including architecture diagrams, integration capabilities, and security protocols.',
            uploadedBy: 17, // Andrew Couch
            uploadedAt: '2024-10-01T10:30:00Z',
            assignedToAll: false,
            assignedMembers: [1, 2, 3, 5, 8, 10],
            assignedDeal: 2,
            viewCount: 64,
            downloadCount: 38
        },
        {
            id: 3,
            filename: 'Cybersecurity-SOC-Overview.pdf',
            displayName: 'Cybersecurity Operations Center - Project Overview',
            fileUrl: '/documents/cybersecurity-soc-overview.pdf',
            fileSize: 3145728, // 3 MB
            fileType: 'PDF',
            category: 'Deal Documents',
            description: 'Comprehensive overview of SOC capabilities, service offerings, certification roadmap, and government contracts pipeline.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-11-01T08:45:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: 3,
            viewCount: 102,
            downloadCount: 67
        },
        {
            id: 4,
            filename: 'Q4-2024-Portfolio-Review.pdf',
            displayName: 'Q4 2024 Portfolio Performance Review',
            fileUrl: '/documents/Q4-2024-Portfolio-Review.pdf',
            fileSize: 4194304, // 4 MB
            fileType: 'PDF',
            category: 'Reports',
            description: 'Quarterly portfolio performance analysis including deal updates, financial metrics, and market outlook.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-12-15T09:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 142,
            downloadCount: 87
        },
        {
            id: 5,
            filename: 'Investment-Terms-Template.pdf',
            displayName: 'Standard Investment Terms & Conditions',
            fileUrl: '/documents/investment-terms-template.pdf',
            fileSize: 1048576, // 1 MB
            fileType: 'PDF',
            category: 'Legal',
            description: 'Template investment agreement outlining standard terms, conditions, and investor rights.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-08-01T00:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 156,
            downloadCount: 93
        },
        {
            id: 6,
            filename: 'Accredited-Investor-Verification.pdf',
            displayName: 'Accredited Investor Verification Form',
            fileUrl: '/documents/accredited-investor-verification.pdf',
            fileSize: 524288, // 512 KB
            fileType: 'PDF',
            category: 'Legal',
            description: 'SEC-compliant accredited investor verification documentation and instructions.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-08-01T00:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 134,
            downloadCount: 89
        },
        {
            id: 7,
            filename: 'Midwest-Broadband-Consortium-Agreement.pdf',
            displayName: 'Midwest Broadband Consortium - Partnership Agreement',
            fileUrl: '/documents/midwest-consortium-agreement.pdf',
            fileSize: 2097152, // 2 MB
            fileType: 'PDF',
            category: 'Deal Documents',
            description: 'Municipal consortium partnership agreement outlining governance, revenue sharing, and operational responsibilities.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-08-01T10:00:00Z',
            assignedToAll: false,
            assignedMembers: [4, 5, 7, 10, 12, 14],
            assignedDeal: 4,
            viewCount: 78,
            downloadCount: 45
        },
        {
            id: 8,
            filename: 'Public-Safety-Communications-Needs-Assessment.pdf',
            displayName: 'Public Safety Communications - Regional Needs Assessment',
            fileUrl: '/documents/public-safety-needs-assessment.pdf',
            fileSize: 2621440, // 2.5 MB
            fileType: 'PDF',
            category: 'Deal Documents',
            description: 'Comprehensive assessment of public safety communications requirements across 15 participating agencies.',
            uploadedBy: 17, // Andrew Couch
            uploadedAt: '2024-12-01T11:30:00Z',
            assignedToAll: false,
            assignedMembers: [5, 7, 10, 14],
            assignedDeal: 5,
            viewCount: 43,
            downloadCount: 28
        },
        {
            id: 9,
            filename: 'Data-Center-Facility-Specifications.pdf',
            displayName: 'Data Center Modernization - Facility Specifications',
            fileUrl: '/documents/data-center-facility-specs.pdf',
            fileSize: 3670016, // 3.5 MB
            fileType: 'PDF',
            category: 'Deal Documents',
            description: 'Technical specifications for four tier-3 edge data center facilities including power, cooling, and connectivity infrastructure.',
            uploadedBy: 17, // Andrew Couch
            uploadedAt: '2024-07-01T09:15:00Z',
            assignedToAll: false,
            assignedMembers: [5, 7, 10, 14, 19, 21],
            assignedDeal: 6,
            viewCount: 91,
            downloadCount: 58
        },
        {
            id: 10,
            filename: 'Broadband-Investment-Thesis-2025.pdf',
            displayName: 'Broadband Infrastructure Investment Thesis 2025',
            fileUrl: '/documents/Broadband-Investment-Thesis-2025.pdf',
            fileSize: 3145728, // 3 MB
            fileType: 'PDF',
            category: 'Reports',
            description: 'Market analysis and investment thesis for broadband infrastructure opportunities in 2025.',
            uploadedBy: 17, // Andrew Couch
            uploadedAt: '2024-11-20T09:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 98,
            downloadCount: 64
        },
        {
            id: 11,
            filename: 'Smart-Cities-Trends-2025.pdf',
            displayName: 'Smart Cities Technology Trends 2025',
            fileUrl: '/documents/Smart-Cities-Trends-2025.pdf',
            fileSize: 2621440, // 2.5 MB
            fileType: 'PDF',
            category: 'Reports',
            description: 'Industry analysis of emerging smart city technologies and municipal investment trends.',
            uploadedBy: 17, // Andrew Couch
            uploadedAt: '2024-10-10T09:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 76,
            downloadCount: 52
        },
        {
            id: 12,
            filename: 'Risk-Disclosure-Statement.pdf',
            displayName: 'Investment Risk Disclosure Statement',
            fileUrl: '/documents/risk-disclosure-statement.pdf',
            fileSize: 786432, // 768 KB
            fileType: 'PDF',
            category: 'Legal',
            description: 'Comprehensive disclosure of investment risks, market factors, and regulatory considerations.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-08-01T00:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 167,
            downloadCount: 98
        },
        {
            id: 13,
            filename: 'Privacy-Policy.pdf',
            displayName: 'Endevera Member Privacy Policy',
            fileUrl: '/documents/privacy-policy.pdf',
            fileSize: 524288, // 512 KB
            fileType: 'PDF',
            category: 'Legal',
            description: 'Member data privacy policy and information security practices.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-08-01T00:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 145,
            downloadCount: 76
        },
        {
            id: 14,
            filename: 'Platform-User-Guide.pdf',
            displayName: 'Member Portal User Guide',
            fileUrl: '/documents/platform-user-guide.pdf',
            fileSize: 1572864, // 1.5 MB
            fileType: 'PDF',
            category: 'Resources',
            description: 'Comprehensive guide to using the Endevera member portal including features, navigation, and support resources.',
            uploadedBy: 17, // Andrew Couch
            uploadedAt: '2024-08-15T00:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 112,
            downloadCount: 67
        },
        {
            id: 15,
            filename: 'Investment-Process-Overview.pdf',
            displayName: 'Investment Process & Timeline Overview',
            fileUrl: '/documents/investment-process-overview.pdf',
            fileSize: 1048576, // 1 MB
            fileType: 'PDF',
            category: 'Resources',
            description: 'Step-by-step guide to the investment process from application through funding and ongoing reporting.',
            uploadedBy: 16, // Scott Cunningham
            uploadedAt: '2024-08-01T00:00:00Z',
            assignedToAll: true,
            assignedMembers: [],
            assignedDeal: null,
            viewCount: 128,
            downloadCount: 82
        }
    ],

    // 20 activity log entries
    activityLog: [
        {
            id: 1,
            type: 'investor_application',
            user: 'Janice Powell',
            action: 'New investor application submitted',
            timestamp: '2024-12-24T09:15:00Z',
            details: { applicationId: 10, email: 'jpowell@municipal-tech.io' }
        },
        {
            id: 2,
            type: 'investor_application',
            user: 'Frank Coleman',
            action: 'New investor application submitted',
            timestamp: '2024-12-24T08:30:00Z',
            details: { applicationId: 7, email: 'fcoleman@digital-infrastructure.io' }
        },
        {
            id: 3,
            type: 'deal_update',
            user: 'Scott Cunningham',
            action: 'Updated deal "Midwest Broadband Consortium"',
            timestamp: '2024-12-23T16:45:00Z',
            details: { dealId: 4, field: 'fundingRaised', oldValue: 19600000, newValue: 19800000 }
        },
        {
            id: 4,
            type: 'investor_application',
            user: 'Evelyn Butler',
            action: 'New investor application submitted',
            timestamp: '2024-12-23T15:45:00Z',
            details: { applicationId: 8, email: 'ebutler@smart-city-fund.com' }
        },
        {
            id: 5,
            type: 'investor_application',
            user: 'Robert Sullivan',
            action: 'New investor application submitted',
            timestamp: '2024-12-23T14:30:00Z',
            details: { applicationId: 1, email: 'rsullivan@tech-capital.io' }
        },
        {
            id: 6,
            type: 'user_login',
            user: 'John Doe',
            action: 'Member logged in',
            timestamp: '2024-12-24T09:30:00Z',
            details: { userId: 1, ipAddress: '192.168.1.100' }
        },
        {
            id: 7,
            type: 'document_download',
            user: 'Emily Thompson',
            action: 'Downloaded "Q4 2024 Portfolio Review"',
            timestamp: '2024-12-23T14:20:00Z',
            details: { documentId: 4, userId: 4 }
        },
        {
            id: 8,
            type: 'deal_investment',
            user: 'David Roberts',
            action: 'Invested $500,000 in "Smart City IoT Platform"',
            timestamp: '2024-12-23T11:15:00Z',
            details: { dealId: 2, userId: 5, amount: 500000 }
        },
        {
            id: 9,
            type: 'investor_application',
            user: 'Margaret Foster',
            action: 'New investor application submitted',
            timestamp: '2024-12-22T10:15:00Z',
            details: { applicationId: 2, email: 'mfoter@broadband-investors.net' }
        },
        {
            id: 10,
            type: 'deal_update',
            user: 'Andrew Couch',
            action: 'Updated deal "Smart City IoT Platform"',
            timestamp: '2024-12-22T09:30:00Z',
            details: { dealId: 2, field: 'fundingRaised', oldValue: 6000000, newValue: 6375000 }
        },
        {
            id: 11,
            type: 'investor_application',
            user: 'Angela Hughes',
            action: 'New investor application submitted',
            timestamp: '2024-12-21T16:45:00Z',
            details: { applicationId: 4, email: 'ahughes@connectivity-partners.io' }
        },
        {
            id: 12,
            type: 'investor_approved',
            user: 'Scott Cunningham',
            action: 'Approved investor application for Timothy Barnes',
            timestamp: '2024-12-21T11:30:00Z',
            details: { applicationId: 3, approvalToken: 'APP-2024-003-BARNES' }
        },
        {
            id: 13,
            type: 'investor_application',
            user: 'Timothy Barnes',
            action: 'New investor application submitted',
            timestamp: '2024-12-20T09:00:00Z',
            details: { applicationId: 3, email: 'tbarnes@municipal-infrastructure.com' }
        },
        {
            id: 14,
            type: 'deal_update',
            user: 'Scott Cunningham',
            action: 'Updated deal "Regional Fiber Network"',
            timestamp: '2024-12-20T14:15:00Z',
            details: { dealId: 1, field: 'fundingRaised', oldValue: 12500000, newValue: 12750000 }
        },
        {
            id: 15,
            type: 'investor_approved',
            user: 'Scott Cunningham',
            action: 'Approved investor application for Charles Peterson',
            timestamp: '2024-12-20T09:15:00Z',
            details: { applicationId: 5, approvalToken: 'APP-2024-005-PETERSON' }
        },
        {
            id: 16,
            type: 'investor_application',
            user: 'Charles Peterson',
            action: 'New investor application submitted',
            timestamp: '2024-12-19T13:20:00Z',
            details: { applicationId: 5, email: 'cpeterson@infrastructure-equity.net' }
        },
        {
            id: 17,
            type: 'investor_rejected',
            user: 'Scott Cunningham',
            action: 'Rejected investor application for Dorothy Russell',
            timestamp: '2024-12-19T14:30:00Z',
            details: { applicationId: 6, reason: 'Minimum investment requirements not met' }
        },
        {
            id: 18,
            type: 'investor_application',
            user: 'Dorothy Russell',
            action: 'New investor application submitted',
            timestamp: '2024-12-18T11:00:00Z',
            details: { applicationId: 6, email: 'drussell@fiber-ventures.com' }
        },
        {
            id: 19,
            type: 'investor_approved',
            user: 'Scott Cunningham',
            action: 'Approved investor application for Howard Jenkins',
            timestamp: '2024-12-18T09:30:00Z',
            details: { applicationId: 9, approvalToken: 'APP-2024-009-JENKINS' }
        },
        {
            id: 20,
            type: 'report_published',
            user: 'Scott Cunningham',
            action: 'Published report "Q4 2024 Portfolio Performance Review"',
            timestamp: '2024-12-15T09:00:00Z',
            details: { reportId: 1 }
        }
    ],

    // Messages for member portal
    messages: [
        {
            id: 1,
            from: 'Scott Cunningham',
            fromEmail: 'scott@endevera.com',
            subject: 'Q4 Portfolio Update Available',
            preview: 'The Q4 2024 Portfolio Performance Review is now available in your documents section...',
            body: 'Dear Members,\n\nWe are pleased to share our Q4 2024 Portfolio Performance Review, which is now available in your documents section.\n\nHighlights include:\n- 18% year-over-year portfolio growth\n- Strong performance across all active deals\n- Two new opportunities in evaluation\n\nPlease review the full report and feel free to reach out with any questions.\n\nBest regards,\nScott Cunningham',
            timestamp: '2024-12-15T10:00:00Z',
            read: true,
            starred: false,
            category: 'updates'
        },
        {
            id: 2,
            from: 'Andrew Couch',
            fromEmail: 'andrew@endevera.com',
            subject: 'Smart City IoT Platform - Contract Announcement',
            preview: 'Great news! The Smart City IoT Platform has secured three additional municipal contracts...',
            body: 'Dear Investors,\n\nExcellent progress on the Smart City IoT Platform deal. We have secured contracts with three additional municipalities:\n\n- Phoenix, AZ\n- Raleigh, NC  \n- Sacramento, CA\n\nThese contracts represent $4.2M in annual recurring revenue and strengthen our market position significantly.\n\nDetailed project updates will be included in the next quarterly report.\n\nBest regards,\nAndrew Couch',
            timestamp: '2024-12-10T14:30:00Z',
            read: true,
            starred: true,
            category: 'updates'
        },
        {
            id: 3,
            from: 'Endevera Support',
            fromEmail: 'support@endevera.com',
            subject: 'Platform Maintenance Scheduled',
            preview: 'The member portal will undergo scheduled maintenance on December 28th from 2-4 AM EST...',
            body: 'Dear Members,\n\nThis is a reminder that the member portal will undergo scheduled maintenance:\n\nDate: December 28, 2024\nTime: 2:00 AM - 4:00 AM EST\n\nDuring this time, the portal will be temporarily unavailable. We apologize for any inconvenience.\n\nThank you,\nEndevera Support Team',
            timestamp: '2024-12-22T09:00:00Z',
            read: false,
            starred: false,
            category: 'system'
        }
    ],

    // Email settings
    emailSettings: {
        fromEmail: 'info@endevera.com',
        fromName: 'Endevera Technologies',
        replyTo: 'info@endevera.com',
        signature: 'Best regards,\n\nThe Endevera Team\nEndevera Technologies, LLC\nPalm Beach, Florida\nwww.endevera.com',
        supportEmail: 'support@endevera.com'
    },

    // System settings
    systemSettings: {
        companyName: 'Endevera Technologies, LLC',
        companyWebsite: 'www.endevera.com',
        companyPhone: '+1 (561) 555-0100',
        companyAddress: 'Palm Beach, Florida',
        companyEmail: 'info@endevera.com',
        apiStatus: 'active',
        claudeApiConfigured: false,
        twilioConfigured: false,
        maintenanceMode: false,
        registrationEnabled: true,
        minInvestment: 50000,
        platformVersion: '1.0.0'
    }
};

// Demo login credentials
const DEMO_CREDENTIALS = {
    member: {
        email: 'demo@demo.com',
        password: 'demo',
        role: 'investor',
        userId: 1
    },
    admin: {
        email: 'admin@demo.com',
        password: 'demo',
        role: 'admin',
        userId: 16
    }
};

// Export for use in both member and admin portals
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MOCK_DATA, DEMO_CREDENTIALS };
}
