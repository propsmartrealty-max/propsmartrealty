/**
 * Transparent All-Inclusive Pricing & Final Carpet Area Utilities
 * Conforms to MahaRERA transparency guidelines and eliminates hidden buyer fees.
 */

/**
 * Parses numeric price value in INR from strings like "₹81.00 L", "₹1.06 Cr", "85 Lacs", etc.
 */
export const parsePriceInLakhs = (priceStr?: string): number | null => {
    if (!priceStr || typeof priceStr !== 'string') return null;
    const clean = priceStr.replace(/,/g, '').trim();

    // Check Crore match
    const crMatch = clean.match(/([0-9.]+)\s*(?:Cr|Crore)/i);
    if (crMatch) {
        return parseFloat(crMatch[1]) * 100;
    }

    // Check Lakh match
    const lMatch = clean.match(/([0-9.]+)\s*(?:L|Lacs|Lakh|Lakhs)/i);
    if (lMatch) {
        return parseFloat(lMatch[1]);
    }

    // Check plain number
    const numMatch = clean.match(/([0-9.]+)/);
    if (numMatch) {
        const val = parseFloat(numMatch[1]);
        if (val < 100) return val; // Assume lakhs if small
        if (val >= 100000) return val / 100000; // Convert rupees to lakhs
    }

    return null;
};

/**
 * Formats a value in Lakhs back into standard Indian Real Estate currency ("₹81.00 L" or "₹1.06 Cr").
 */
export const formatLakhsToCurrency = (lakhs: number): string => {
    if (lakhs >= 100) {
        const cr = lakhs / 100;
        return `₹${cr.toFixed(2)} Cr`;
    }
    return `₹${lakhs.toFixed(2)} L`;
};

/**
 * In Maharashtra (Pune / Mumbai / MMR / Raigad):
 * Base Agreement Value excludes:
 * - Stamp Duty (6% to 7% with Metro Cess)
 * - Registration Charges (₹30,000 flat)
 * - GST (5% for standard residential, 1% affordable, 0% OC ready)
 * - Development & Society / Electrical Infra (~1.5% or ₹1.5L - ₹2.5L)
 * 
 * Total statutory government and possession add-ons = ~11.5% to 12.5%.
 * We compute a standardized 11.5% statutory add-on to present honest All-Inclusive Pricing.
 */
export const STATUTORY_ADDON_FACTOR = 1.115; // 11.5% transparent tax & duty buffer

export interface AllInclusivePriceResult {
    allInclusiveDisplay: string;
    allInclusiveRange: string;
    startingAllInclusive: string;
    isRange: boolean;
    breakdown: {
        agreementValue: string;
        stampDutyAndReg: string;
        gstAndInfra: string;
        totalAllInclusive: string;
    };
}

export const getAllInclusivePricing = (
    exactPrice?: string,
    priceRange?: string
): AllInclusivePriceResult => {
    const rawRange = priceRange || exactPrice || 'Price on Request';
    const isRange = Boolean(priceRange && priceRange.includes(' - '));

    if (rawRange.toLowerCase().includes('request') || rawRange.toLowerCase().includes('call')) {
        return {
            allInclusiveDisplay: 'Price on Request (All-Inclusive Terms)',
            allInclusiveRange: 'Price on Request',
            startingAllInclusive: 'Price on Request',
            isRange: false,
            breakdown: {
                agreementValue: 'On Request',
                stampDutyAndReg: 'Govt. Mandated (6-7%)',
                gstAndInfra: '5% GST Included',
                totalAllInclusive: 'Price on Request'
            }
        };
    }

    if (isRange && priceRange) {
        const parts = priceRange.split(' - ').map(s => s.trim());
        const minLakhs = parsePriceInLakhs(parts[0]);
        const maxLakhs = parsePriceInLakhs(parts[1]);

        if (minLakhs !== null && maxLakhs !== null) {
            const minAllIn = minLakhs * STATUTORY_ADDON_FACTOR;
            const maxAllIn = maxLakhs * STATUTORY_ADDON_FACTOR;
            const minFormatted = formatLakhsToCurrency(minAllIn);
            const maxFormatted = formatLakhsToCurrency(maxAllIn);

            return {
                allInclusiveDisplay: `${minFormatted} - ${maxFormatted} All-Inclusive`,
                allInclusiveRange: `${minFormatted} - ${maxFormatted}`,
                startingAllInclusive: `Starts from ${minFormatted} All-Inclusive`,
                isRange: true,
                breakdown: {
                    agreementValue: priceRange,
                    stampDutyAndReg: '6-7% Stamp Duty & ₹30k Reg Included',
                    gstAndInfra: 'GST + Society/Infra Included',
                    totalAllInclusive: `${minFormatted} - ${maxFormatted}`
                }
            };
        }
    }

    // Single exact price
    const baseLakhs = parsePriceInLakhs(exactPrice || priceRange);
    if (baseLakhs !== null) {
        const allIn = baseLakhs * STATUTORY_ADDON_FACTOR;
        const formatted = formatLakhsToCurrency(allIn);
        return {
            allInclusiveDisplay: `${formatted} All-Inclusive`,
            allInclusiveRange: formatted,
            startingAllInclusive: `${formatted} All-Inclusive`,
            isRange: false,
            breakdown: {
                agreementValue: exactPrice || priceRange || formatted,
                stampDutyAndReg: '6-7% Stamp Duty & Reg Included',
                gstAndInfra: 'GST & Infra Included',
                totalAllInclusive: formatted
            }
        };
    }

    return {
        allInclusiveDisplay: `${rawRange} (All-Inclusive)`,
        allInclusiveRange: rawRange,
        startingAllInclusive: rawRange,
        isRange: false,
        breakdown: {
            agreementValue: rawRange,
            stampDutyAndReg: 'Included',
            gstAndInfra: 'Included',
            totalAllInclusive: rawRange
        }
    };
};

/**
 * Returns strictly the Final Usable RERA Carpet Area.
 * Completely strips out and bans any inflated super-built-up / saleable area figures.
 */
export const getFinalCarpetAreaOnly = (
    configurationDetails?: { type: string; carpetArea: string; priceRange?: string }[]
): string | null => {
    if (!configurationDetails || configurationDetails.length === 0) return null;

    const areas = configurationDetails
        .map(c => {
            const match = c.carpetArea?.match(/([0-9,]+)/);
            return match ? parseInt(match[1].replace(/,/g, '')) : null;
        })
        .filter((a): a is number => a !== null && a > 0);

    if (areas.length === 0) return null;

    const min = Math.min(...areas);
    const max = Math.max(...areas);

    if (min === max) {
        return `${min.toLocaleString('en-IN')} sq.ft (Final RERA Usable)`;
    }
    return `${min.toLocaleString('en-IN')} - ${max.toLocaleString('en-IN')} sq.ft (Final RERA Usable)`;
};
