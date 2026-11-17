import { describe, it, expect, vi } from 'vitest';
import { calculateFuzzyScore, normalizeQuery, damerauLevenshtein } from '../utils/fuzzySearch';
import { getImageSrcSet, getLqipPlaceholder } from '../utils/imageUtils';

describe('Advanced Tech Upgrades Suite', () => {
    describe('Typo-Tolerant Fuzzy Search (Feature 2A)', () => {
        it('normalizes common real estate spelling variations and phonetics', () => {
            expect(normalizeQuery('3bhk flats in Hinjawadi')).toContain('hinjewadi');
            expect(normalizeQuery('3bhk flats in Hinjawadi')).toContain('3 bhk');
            expect(normalizeQuery('Gojrej property')).toContain('godrej');
            expect(normalizeQuery('Panchsil towers')).toContain('panchshil');
        });

        it('calculates accurate fuzzy distance for typos', () => {
            // Hinjawadi vs Hinjewadi (1 substitution distance)
            const distance = damerauLevenshtein('hinjawadi', 'hinjewadi');
            expect(distance).toBe(1);

            // Fuzzy score for close typo should be high (>= 0.8)
            const score1 = calculateFuzzyScore('hinjawadi', 'Hinjewadi IT Park');
            expect(score1).toBeGreaterThanOrEqual(0.8);

            // Gojrej vs Godrej (1 typo)
            const score2 = calculateFuzzyScore('gojrej', 'Godrej Emerald Waters');
            expect(score2).toBeGreaterThanOrEqual(0.75);

            // Completely unrelated string should have score 0
            const score3 = calculateFuzzyScore('randomqueryxyz', 'Lodha Belmondo');
            expect(score3).toBe(0);
        });
    });

    describe('Responsive Image Delivery & LQIP Placeholders (Feature 3B)', () => {
        it('generates proper multi-resolution srcSet', () => {
            const url = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00';
            const srcSet = getImageSrcSet(url);
            expect(srcSet).toContain('400w');
            expect(srcSet).toContain('800w');
            expect(srcSet).toContain('1200w');
            expect(srcSet).toContain('w=400');
            expect(srcSet).toContain('w=800');
            expect(srcSet).toContain('w=1200');
        });

        it('generates valid SVG data URI placeholder for LQIP zero CLS', () => {
            const lqip = getLqipPlaceholder('Godrej River Royale');
            expect(lqip.startsWith('data:image/svg+xml')).toBe(true);
            expect(lqip).toContain('%3Csvg');
        });
    });
});
