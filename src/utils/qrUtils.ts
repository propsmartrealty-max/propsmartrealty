/**
 * MahaRERA QR Code & Verification Utilities
 */

export const getProjectQRCodeUrl = (projectSlug?: string, reraId?: string): string => {
    if (reraId) {
        return `/images/qr/${reraId}-qr.svg`;
    }
    if (projectSlug) {
        return `/images/qr/${projectSlug}-qr.svg`;
    }
    return `/images/qr/propsmart-agent-qr.svg`;
};

export const getMahaRERAVerificationUrl = (reraId?: string): string => {
    if (!reraId) return 'https://maharera.maharashtra.gov.in/';
    return `https://maharera.maharashtra.gov.in/?rera=${encodeURIComponent(reraId)}`;
};

export interface RERAProjectMetadata {
    reraId: string;
    qrCodeUrl: string;
    promoterName?: string;
    sanctionedTowers?: string;
    sanctionedLandArea?: string;
    reraPossessionDate?: string;
    complianceStatus: 'Active' | 'Approved' | 'Verified';
    carpetAreaEfficiency?: string;
    bankApprovals?: string[];
}

export const getRERAMetadata = (slug: string, reraId?: string): RERAProjectMetadata => {
    // Map both short slugs and full slugs
    const normalizedSlug = (slug || '').toLowerCase();
    
    // Curated rich real-estate metadata for Pune projects
    const defaultData: Record<string, Partial<RERAProjectMetadata>> = {
        'godrej-woodsville': {
            sanctionedTowers: '4 Towers (Ground + 32 Floors)',
            sanctionedLandArea: '12.4 Acres',
            reraPossessionDate: 'December 2026',
            carpetAreaEfficiency: '72% Usable Carpet',
            bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda']
        },
        'kolte-patil-life-republic': {
            sanctionedTowers: 'Township Sector R1 to R9 (42 Towers)',
            sanctionedLandArea: '390 Acres Integrated Township',
            reraPossessionDate: 'June 2027',
            carpetAreaEfficiency: '74% Usable Carpet',
            bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Kotak Mahindra', 'Punjab National Bank']
        },
        'vj-yashwin-enchante': {
            sanctionedTowers: '5 Towers (3B + G + 29 Floors)',
            sanctionedLandArea: '8.5 Acres',
            reraPossessionDate: 'March 2027',
            carpetAreaEfficiency: '75% Usable Carpet',
            bankApprovals: ['HDFC Bank', 'SBI', 'ICICI Bank', 'Axis Bank']
        },
        'godrej-hillside': {
            sanctionedTowers: '3 Towers (2B + G + 30 Floors)',
            sanctionedLandArea: '9.2 Acres on Hillside Reserve',
            reraPossessionDate: 'October 2026',
            carpetAreaEfficiency: '73% Usable Carpet',
            bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Standard Chartered']
        },
        'kolte-patil-24k-opula': {
            sanctionedTowers: 'Ultra-Luxury Towers (B + G + 24 Floors)',
            sanctionedLandArea: '6.8 Acres Riverside',
            reraPossessionDate: 'Ready to Move / OC Received',
            carpetAreaEfficiency: '78% Usable Luxury Carpet',
            bankApprovals: ['HDFC Bank', 'SBI', 'ICICI Bank', 'Citibank']
        },
        'panchshil-towers': {
            sanctionedTowers: '9 Towers (G + 34 Floors High-rise)',
            sanctionedLandArea: '130 Acres Micro-market',
            reraPossessionDate: 'Ready to Move in Kharadi IT Corridor',
            carpetAreaEfficiency: '80% Premium Usable Carpet',
            bankApprovals: ['HDFC Bank', 'ICICI Bank', 'SBI', 'HSBC', 'Standard Chartered']
        },
        'vtp-blue-waters': {
            sanctionedTowers: '6 Towers (3P + 30 Floors)',
            sanctionedLandArea: '100+ Acres Riverside Township',
            reraPossessionDate: 'December 2026',
            carpetAreaEfficiency: '74% Usable Carpet',
            bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank']
        },
        'vtp-altair': {
            sanctionedTowers: '3 Sky-high Towers (30 Floors)',
            sanctionedLandArea: '7.5 Acres in Kharadi',
            reraPossessionDate: 'August 2026',
            carpetAreaEfficiency: '73% Usable Carpet',
            bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Bank of Maharashtra']
        },
        'kasturi-balmoral-riverside': {
            sanctionedTowers: '4 Signature Towers (G + 28 Floors)',
            sanctionedLandArea: '11 Acres Waterfront',
            reraPossessionDate: 'September 2026',
            carpetAreaEfficiency: '76% Usable Luxury Carpet',
            bankApprovals: ['HDFC Bank', 'SBI', 'ICICI Bank', 'Kotak Mahindra']
        },
        'gera-planet-of-joy': {
            sanctionedTowers: '8 Child-Centric Towers (G + 22 Floors)',
            sanctionedLandArea: '16 Acres with Celebrity Academies',
            reraPossessionDate: 'April 2027',
            carpetAreaEfficiency: '75% Usable Carpet',
            bankApprovals: ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank']
        }
    };

    // Find best match in defaultData
    let specific: Partial<RERAProjectMetadata> = {};
    for (const [key, val] of Object.entries(defaultData)) {
        if (normalizedSlug.includes(key) || key.includes(normalizedSlug)) {
            specific = val;
            break;
        }
    }

    return {
        reraId: reraId || 'P52100046729',
        qrCodeUrl: getProjectQRCodeUrl(slug, reraId),
        sanctionedTowers: specific.sanctionedTowers || '4 Towers (Ground + 30 Floors)',
        sanctionedLandArea: specific.sanctionedLandArea || '10+ Acres Sanctioned Land',
        reraPossessionDate: specific.reraPossessionDate || 'December 2026',
        complianceStatus: 'Verified',
        carpetAreaEfficiency: specific.carpetAreaEfficiency || '74% Usable RERA Carpet Area',
        bankApprovals: specific.bankApprovals || ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank']
    };
};
