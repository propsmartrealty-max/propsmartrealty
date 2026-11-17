/**
 * Ultra-Fast Typo-Tolerant Fuzzy Search & Real Estate Intent Matcher
 * Zero external dependencies. Sub-millisecond evaluation across thousands of entities.
 */

// Common phonetic and spelling variations in Pune & Maharashtra Real Estate
const REAL_ESTATE_ALIASES: Record<string, string> = {
    'hinjawadi': 'hinjewadi',
    'hinjwadi': 'hinjewadi',
    'hinjewdi': 'hinjewadi',
    'wakad': 'wakad',
    'baner annex': 'baner',
    'baner balewadi': 'baner',
    'balewadi high street': 'balewadi',
    'viman nagar': 'vimannagar',
    'vimannagar': 'viman nagar',
    'kharadi it park': 'kharadi',
    'magarpatta city': 'hadapsar',
    'magarpatta': 'hadapsar',
    'gojrej': 'godrej',
    'godrez': 'godrej',
    'lodha': 'lodha',
    'loda': 'lodha',
    'panchshil': 'panchshil',
    'panchsil': 'panchshil',
    'kolte patil': 'kolte-patil',
    'kolte': 'kolte-patil',
    'vtp': 'vtp realty',
    'paranjpe': 'paranjape',
    'paranjape schemes': 'paranjape',
    'rohan': 'rohan builders',
    'gera': 'gera developments',
    'kalptaru': 'kalpataru',
    'shapoorji': 'shapoorji pallonji',
    'joyville': 'shapoorji pallonji',
    '1bhk': '1 bhk',
    '2bhk': '2 bhk',
    '3bhk': '3 bhk',
    '4bhk': '4 bhk',
    '5bhk': '5 bhk',
};

/**
 * Compute Damerau-Levenshtein distance (handles insertions, deletions, substitutions, and transpositions)
 */
export function damerauLevenshtein(a: string, b: string): number {
    const al = a.length;
    const bl = b.length;
    if (al === 0) return bl;
    if (bl === 0) return al;

    const matrix: number[][] = [];
    for (let i = 0; i <= al; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= bl; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= al; i++) {
        for (let j = 1; j <= bl; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,       // deletion
                matrix[i][j - 1] + 1,       // insertion
                matrix[i - 1][j - 1] + cost // substitution
            );

            // Transposition check
            if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
                matrix[i][j] = Math.min(matrix[i][j], matrix[i - 2][j - 2] + 1);
            }
        }
    }

    return matrix[al][bl];
}

/**
 * Normalize query string with alias resolution
 */
export function normalizeQuery(query: string): string {
    let q = query.toLowerCase().trim().replace(/[-_/]/g, ' ').replace(/\s+/g, ' ');
    for (const [alias, canonical] of Object.entries(REAL_ESTATE_ALIASES)) {
        if (q.includes(alias)) {
            q = q.replace(alias, canonical);
        }
    }
    return q;
}

/**
 * Fuzzy score between 0 (no match) and 1 (exact match)
 */
export function calculateFuzzyScore(query: string, target: string): number {
    const q = normalizeQuery(query);
    const t = normalizeQuery(target);

    // Exact match
    if (q === t) return 1.0;

    // Substring / prefix matches
    if (t.startsWith(q)) return 0.95;
    if (t.includes(q)) return 0.85;

    // Multi-token match (e.g. "godrej hinjewadi")
    const qTokens = q.split(' ').filter(Boolean);
    const tTokens = t.split(' ').filter(Boolean);
    let matchedTokens = 0;

    for (const qt of qTokens) {
        if (tTokens.some(tt => tt.startsWith(qt) || tt.includes(qt))) {
            matchedTokens++;
        }
    }

    if (qTokens.length > 0 && matchedTokens === qTokens.length) {
        return 0.80;
    }

    // Levenshtein fuzzy distance comparison
    const maxLen = Math.max(q.length, t.length);
    if (maxLen === 0) return 1.0;

    const distance = damerauLevenshtein(q, t);
    // Allow up to 2 typos for medium strings, 3 for long strings
    const maxAllowedDistance = maxLen <= 5 ? 1 : maxLen <= 10 ? 2 : 3;

    if (distance <= maxAllowedDistance) {
        return Math.max(0, 1 - distance / maxLen);
    }

    return 0;
}

/**
 * Filter and sort items with typo-tolerant fuzzy matching
 */
export function fuzzyFilter<T>(
    items: T[],
    query: string,
    extractKey: (item: T) => string[],
    threshold: number = 0.65
): T[] {
    const trimmed = query.trim();
    if (!trimmed) return items;

    const scoredItems: { item: T; score: number }[] = [];

    for (const item of items) {
        const keys = extractKey(item);
        let maxScore = 0;

        for (const key of keys) {
            if (!key) continue;
            const score = calculateFuzzyScore(trimmed, key);
            if (score > maxScore) {
                maxScore = score;
            }
        }

        if (maxScore >= threshold) {
            scoredItems.push({ item, score: maxScore });
        }
    }

    // Sort descending by score
    scoredItems.sort((a, b) => b.score - a.score);
    return scoredItems.map(s => s.item);
}

// -------------------------------------------------------------
// Search History / Recents Management (LocalStorage)
// -------------------------------------------------------------

const RECENT_SEARCHES_KEY = 'propsmart_recent_searches';
const MAX_RECENT_SEARCHES = 6;

export function getRecentSearches(): string[] {
    if (typeof window === 'undefined') return [];
    try {
        const data = localStorage.getItem(RECENT_SEARCHES_KEY);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

export function saveRecentSearch(query: string): void {
    if (typeof window === 'undefined') return;
    const trimmed = query.trim();
    if (!trimmed || trimmed.length < 2) return;

    try {
        const current = getRecentSearches().filter(q => q.toLowerCase() !== trimmed.toLowerCase());
        const updated = [trimmed, ...current].slice(0, MAX_RECENT_SEARCHES);
        localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch (e) {
        console.error(e);
    }
}

export function clearRecentSearches(): void {
    if (typeof window === 'undefined') return;
    try {
        localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch (e) {
        console.error(e);
    }
}
