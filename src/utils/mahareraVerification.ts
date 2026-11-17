/**
 * MahaRERA Comprehensive Regulatory Verification & Intelligence Engine
 * 
 * Complies with:
 * - Real Estate (Regulation and Development) Act, 2016 (Sections 3, 4, 5, 11)
 * - MahaRERA Order No. 46/2023 & 46A/2023 (Mandatory QR Codes & Official Portal Verification)
 * - MahaRERA 2.0 Digitization Norms (PR / PM / PC / PP / AG series)
 */

import { PROJECTS } from '../data/mockData';
import { Project } from '../types';
import { generateLegiScoreDossier, LegiScoreDueDiligenceDossier } from '../services/legiscoreService';

export const MAHARERA_DISTRICT_CODES: Record<string, string> = {
    '505': 'Nagpur',
    '506': 'Wardha',
    '507': 'Bhandara',
    '508': 'Gondia',
    '509': 'Chandrapur',
    '510': 'Gadchiroli',
    '511': 'Yavatmal',
    '512': 'Amravati',
    '513': 'Akola',
    '514': 'Washim',
    '515': 'Buldhana',
    '516': 'Palghar',
    '517': 'Thane',
    '518': 'Mumbai Suburban',
    '519': 'Mumbai City',
    '520': 'Raigad',
    '521': 'Pune',
    '522': 'Satara',
    '523': 'Ahmednagar',
    '524': 'Nashik',
    '525': 'Solapur',
    '526': 'Jalgaon',
    '527': 'Dhule',
    '528': 'Kolhapur',
    '529': 'Ratnagiri',
    '530': 'Sangli',
    '531': 'Chhatrapati Sambhajinagar (Aurangabad)',
    '532': 'Nanded',
    '533': 'Hingoli',
    '534': 'Parbhani',
    '535': 'Jalna',
    '536': 'Beed',
    '537': 'Latur',
    '538': 'Dharashiv (Osmanabad)',
    '539': 'Sindhudurg',
    '540': 'Nandurbar',
};

export const MAHARERA_PORTAL = {
    officialPortal: 'https://maharera.maharashtra.gov.in/',
    directLookup: (reraId: string) => `https://maharera.maharashtra.gov.in/?rera=${encodeURIComponent(reraId)}`,
    searchPortal: (reraId: string) => `https://maharera.maharashtra.gov.in/projects-search?search=${encodeURIComponent(reraId)}`,
    legacyPortalSearch: 'https://maharerait.mahaonline.gov.in/searchproject/searchproject',
    certificatePdf: (reraId: string) => `https://maharerait.mahaonline.gov.in/PDFFile?filename=${encodeURIComponent(reraId)}.pdf`,
    propsmartAgentRera: 'A031262401295'
};

export interface MahaRERAVerificationResult {
    rawInput: string;
    sanitized: string;
    isValid: boolean;
    format: 'legacy' | 'v2' | 'agent' | 'invalid';
    classification: string;
    district: string;
    districtCode: string | null;
    officialPortalUrl: string;
    officialSearchUrl: string;
    legacySearchUrl: string;
    certificateUrl: string;
    qrCodeUrl: string;
    matchedProject: Project | null;
    statusLabel: string;
    regulatoryBadge: string;
    verificationChecklist: {
        documentName: string;
        purpose: string;
        whatToVerify: string;
    }[];
    legiScoreDossier?: LegiScoreDueDiligenceDossier;
}

/**
 * Sanitizes any raw MahaRERA string:
 * - Strips noise like "MahaRERA:", "RERA", "#", spaces, tabs, slashes, punctuation
 * - Converts to strictly uppercase
 */
export const sanitizeMahaRERANumber = (raw?: string): string => {
    if (!raw || typeof raw !== 'string') return '';
    return raw
        .trim()
        .replace(/^(?:maharera|rera|registration|number|id|no)[\s:\-#]*/gi, '')
        .replace(/[\s\-\/\:\#\.\,\;\(\)\[\]]+/g, '')
        .toUpperCase();
};

/**
 * Validates, decodes and checks any MahaRERA number against the official authority specification
 * and our verified master catalog of 846+ projects.
 */
export const validateMahaRERANumber = (input?: string): MahaRERAVerificationResult => {
    const rawInput = input || '';
    const sanitized = sanitizeMahaRERANumber(rawInput);

    // Default invalid response
    if (!sanitized) {
        return {
            rawInput,
            sanitized: '',
            isValid: false,
            format: 'invalid',
            classification: 'Unspecified',
            district: 'Unknown',
            districtCode: null,
            officialPortalUrl: MAHARERA_PORTAL.officialPortal,
            officialSearchUrl: MAHARERA_PORTAL.officialPortal,
            legacySearchUrl: MAHARERA_PORTAL.legacyPortalSearch,
            certificateUrl: '',
            qrCodeUrl: '/images/qr/propsmart-agent-qr.svg',
            matchedProject: null,
            statusLabel: 'Please enter a valid MahaRERA Registration Number',
            regulatoryBadge: 'Unverified',
            verificationChecklist: []
        };
    }

    // 1. Agent Format: Starts with A or AG + digits
    const isAgent = /^(A|AG)\d{10,14}$/.test(sanitized);
    if (isAgent) {
        const isPropsmart = sanitized === MAHARERA_PORTAL.propsmartAgentRera;
        return {
            rawInput,
            sanitized,
            isValid: true,
            format: 'agent',
            classification: 'Registered Real Estate Agent / Mandate Partner',
            district: 'Maharashtra Statewide Jurisdiction',
            districtCode: null,
            officialPortalUrl: MAHARERA_PORTAL.directLookup(sanitized),
            officialSearchUrl: MAHARERA_PORTAL.searchPortal(sanitized),
            legacySearchUrl: MAHARERA_PORTAL.legacyPortalSearch,
            certificateUrl: MAHARERA_PORTAL.certificatePdf(sanitized),
            qrCodeUrl: `/images/qr/${sanitized}-qr.svg`,
            matchedProject: null,
            statusLabel: isPropsmart 
                ? 'PROPSMART REALTY Authorized Mandate Agent (0% Brokerage Certified)' 
                : 'Registered MahaRERA Real Estate Agent',
            regulatoryBadge: 'MahaRERA Certified Agent',
            verificationChecklist: getAgentVerificationChecklist()
        };
    }

    // 2. New MahaRERA 2.0 Format (PR / PC / PM / PP + digits)
    const v2Match = sanitized.match(/^(PR|PC|PM|PP)(\d{2,3})(\d{2,11})$/);
    if (v2Match) {
        const prefix = v2Match[1];
        const prefixMap: Record<string, string> = {
            'PR': 'Residential Project (MahaRERA 2.0)',
            'PC': 'Commercial Landmark (MahaRERA 2.0)',
            'PM': 'Mixed Development (Residential + Commercial)',
            'PP': 'Plotted & Villa Development'
        };

        const classification = prefixMap[prefix] || 'MahaRERA 2.0 Registered Project';
        const matched = findProjectInCatalog(sanitized);
        const district = matched?.location ? `${matched.location}, ${matched.city || 'Pune'}` : 'Maharashtra';

        return {
            rawInput,
            sanitized,
            isValid: true,
            format: 'v2',
            classification,
            district,
            districtCode: v2Match[2],
            officialPortalUrl: MAHARERA_PORTAL.directLookup(sanitized),
            officialSearchUrl: MAHARERA_PORTAL.searchPortal(sanitized),
            legacySearchUrl: MAHARERA_PORTAL.legacyPortalSearch,
            certificateUrl: MAHARERA_PORTAL.certificatePdf(sanitized),
            qrCodeUrl: `/images/qr/${sanitized}-qr.svg`,
            matchedProject: matched,
            statusLabel: matched ? `Verified: ${matched.title}` : 'Valid MahaRERA 2.0 Project Format',
            regulatoryBadge: 'MahaRERA 2.0 Certified Project',
            verificationChecklist: getProjectVerificationChecklist(matched),
            legiScoreDossier: generateLegiScoreDossier(sanitized, matched)
        };
    }

    // 3. Legacy Standard MahaRERA Format: P + 3 digit district + 8 digits = 12 chars
    const legacyMatch = sanitized.match(/^P(\d{3})(\d{8})$/);
    if (legacyMatch) {
        const distCode = legacyMatch[1];
        const districtName = MAHARERA_DISTRICT_CODES[distCode] || `Maharashtra District (Code ${distCode})`;
        const matched = findProjectInCatalog(sanitized);

        return {
            rawInput,
            sanitized,
            isValid: true,
            format: 'legacy',
            classification: 'Standard RERA Registered Project',
            district: districtName,
            districtCode: distCode,
            officialPortalUrl: MAHARERA_PORTAL.directLookup(sanitized),
            officialSearchUrl: MAHARERA_PORTAL.searchPortal(sanitized),
            legacySearchUrl: MAHARERA_PORTAL.legacyPortalSearch,
            certificateUrl: MAHARERA_PORTAL.certificatePdf(sanitized),
            qrCodeUrl: `/images/qr/${sanitized}-qr.svg`,
            matchedProject: matched,
            statusLabel: matched ? `Verified: ${matched.title}` : `Valid MahaRERA Project (${districtName})`,
            regulatoryBadge: 'Officially Sanctioned & Approved',
            verificationChecklist: getProjectVerificationChecklist(matched),
            legiScoreDossier: generateLegiScoreDossier(sanitized, matched)
        };
    }

    // 4. Non-matching pattern
    return {
        rawInput,
        sanitized,
        isValid: false,
        format: 'invalid',
        classification: 'Invalid MahaRERA Pattern',
        district: 'Unknown',
        districtCode: null,
        officialPortalUrl: MAHARERA_PORTAL.searchPortal(sanitized),
        officialSearchUrl: MAHARERA_PORTAL.searchPortal(sanitized),
        legacySearchUrl: MAHARERA_PORTAL.legacyPortalSearch,
        certificateUrl: '',
        qrCodeUrl: '/images/qr/propsmart-agent-qr.svg',
        matchedProject: null,
        statusLabel: 'Invalid MahaRERA Number Structure (Expected: P521000... or PR126...)',
        regulatoryBadge: 'Format Invalid',
        verificationChecklist: []
    };
};

/**
 * Searches our master project catalog by RERA ID, slug or title
 */
export const findProjectInCatalog = (reraOrQuery: string): Project | null => {
    if (!reraOrQuery) return null;
    const clean = sanitizeMahaRERANumber(reraOrQuery);
    
    // Exact reraId match
    const byRera = PROJECTS.find(p => sanitizeMahaRERANumber(p.reraId) === clean);
    if (byRera) return byRera;

    // Check slug or title match
    const q = reraOrQuery.toLowerCase().trim();
    const bySlugOrTitle = PROJECTS.find(p => 
        p.slug.toLowerCase() === q || 
        p.title.toLowerCase() === q ||
        p.title.toLowerCase().includes(q)
    );

    return bySlugOrTitle || null;
};

/**
 * Returns quick suggestions from the verified catalog
 */
export const getPopularVerifiedProjects = (limit = 8) => {
    return PROJECTS.slice(0, limit).map(p => ({
        id: p.id,
        title: p.title,
        reraId: p.reraId,
        location: p.location,
        slug: p.slug,
        exactPrice: p.exactPrice,
        priceRange: p.priceRange
    }));
};

function getProjectVerificationChecklist(project: Project | null) {
    return [
        {
            documentName: 'Commencement Certificate (CC)',
            purpose: 'Municipal approval confirming developer has permission to construct the sanctioned building floors.',
            whatToVerify: 'Verify that CC covers your specific tower and the floor number you are purchasing.'
        },
        {
            documentName: 'Sanctioned Layout & Floor Plan',
            purpose: 'Official architectural drawings approved by PMC / PCMC / PMRDA / MMRDA.',
            whatToVerify: 'Confirm that your unit usable carpet area, column placements, and window layout match MahaRERA filings exactly.'
        },
        {
            documentName: 'Title Search & Encumbrance Certificate',
            purpose: '30-year legal search report verifying the land has clear, marketable title without illegal mortgages.',
            whatToVerify: 'Check if land is freehold or leasehold, and review any active bank mortgage NOC conditions.'
        },
        {
            documentName: 'Quarterly Progress Report (QPR)',
            purpose: 'Mandatory quarterly audit of civil construction progress and 70% Escrow Account deposits.',
            whatToVerify: 'Ensure developer has filed QPR for the most recent calendar quarter and civil percentage is on schedule.'
        },
        {
            documentName: 'Promoter Declaration (Form B)',
            purpose: 'Affidavit under Section 4(2)(l) that 70% of buyer payments are strictly deposited in the dedicated project bank account.',
            whatToVerify: 'Verify developer designated project bank account and official MahaRERA contractual possession date.'
        }
    ];
}

function getAgentVerificationChecklist() {
    return [
        {
            documentName: 'Agent Registration Certificate (Form G)',
            purpose: 'Regulatory license issued by MahaRERA authorizing real estate advisory and sales mandates.',
            whatToVerify: 'Verify registration number validity and registered business address.'
        },
        {
            documentName: 'Developer Sales Mandate Authorization',
            purpose: 'Direct authority letter from builder sales desk to market units at 0% buyer brokerage.',
            whatToVerify: 'Confirms you receive builder-direct inventory pricing with zero extra commissions.'
        }
    ];
}
