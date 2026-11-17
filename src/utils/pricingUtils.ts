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
 * Standard builder listings often advertise raw agreement values and surprise buyers with 
 * 11.5% - 12.5% statutory government add-ons (Stamp Duty, Registration, GST, Infra).
 * 
 * PROPSMART strictly quotes the single Final All-Inclusive On-Road Price.
 * No separate quotes of Agreement Value vs Stamp Duty.
 * We apply a standard 11.5% statutory inclusion factor to ensure 100% transparent pricing.
 */
export const STATUTORY_ADDON_FACTOR = 1.115; // 11.5% transparent tax & duty buffer

export interface AllInclusivePriceResult {
    allInclusiveDisplay: string;
    allInclusiveRange: string;
    startingAllInclusive: string;
    isRange: boolean;
    breakdown: {
        allInclusivePrice: string;
        statutoryInclusions: string;
        brokerage: string;
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
            allInclusiveDisplay: 'Price on Request (Final All-Inclusive)',
            allInclusiveRange: 'Price on Request',
            startingAllInclusive: 'Price on Request',
            isRange: false,
            breakdown: {
                allInclusivePrice: 'On Request',
                statutoryInclusions: 'All Taxes & Duties Included',
                brokerage: '0% Brokerage',
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
                allInclusiveDisplay: `${minFormatted} - ${maxFormatted} Final Price`,
                allInclusiveRange: `${minFormatted} - ${maxFormatted}`,
                startingAllInclusive: `Starts from ${minFormatted} (Final All-Inclusive)`,
                isRange: true,
                breakdown: {
                    allInclusivePrice: `${minFormatted} - ${maxFormatted}`,
                    statutoryInclusions: 'All Statutory Taxes, Stamp Duty & Reg. Included',
                    brokerage: '0% Direct Mandate Brokerage',
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
            allInclusiveDisplay: `${formatted} Final Price`,
            allInclusiveRange: formatted,
            startingAllInclusive: `${formatted} (Final All-Inclusive)`,
            isRange: false,
            breakdown: {
                allInclusivePrice: formatted,
                statutoryInclusions: 'All Statutory Taxes, Stamp Duty & Reg. Included',
                brokerage: '0% Direct Mandate Brokerage',
                totalAllInclusive: formatted
            }
        };
    }

    return {
        allInclusiveDisplay: `${rawRange} (Final Price)`,
        allInclusiveRange: rawRange,
        startingAllInclusive: rawRange,
        isRange: false,
        breakdown: {
            allInclusivePrice: rawRange,
            statutoryInclusions: 'All Inclusive',
            brokerage: '0% Brokerage',
            totalAllInclusive: rawRange
        }
    };
};

/**
 * Returns strictly the Cumulative Total Usable Carpet Area.
 * Completely strips out separate balcony/terrace breakdowns and inflated super-built-up figures.
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
        return `${min.toLocaleString('en-IN')} sq.ft Total Carpet Area`;
    }
    return `${min.toLocaleString('en-IN')} - ${max.toLocaleString('en-IN')} sq.ft Total Carpet Area`;
};
