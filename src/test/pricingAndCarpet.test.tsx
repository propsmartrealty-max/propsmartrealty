import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { getAllInclusivePricing, getFinalCarpetAreaOnly } from '../utils/pricingUtils';
import CarpetAreaInfographic from '../components/Portal/Infographics/CarpetAreaInfographic';

describe('Pricing and Carpet Area Audit Tests', () => {
    describe('All-Inclusive Pricing Logic', () => {
        it('returns direct catalog price without 1.115 multiplier', () => {
            const pricing = getAllInclusivePricing('₹81.00 L');
            expect(pricing.allInclusiveDisplay).toBe('₹81.00 L (All-Inclusive)');
            expect(pricing.allInclusiveRange).toBe('₹81.00 L');
            expect(pricing.isRange).toBe(false);
        });

        it('handles price ranges accurately without artificial tax inflation', () => {
            const pricing = getAllInclusivePricing(undefined, '₹81.00 L - ₹1.06 Cr');
            expect(pricing.allInclusiveDisplay).toBe('₹81.00 L - ₹1.06 Cr (All-Inclusive)');
            expect(pricing.startingAllInclusive).toBe('Starts from ₹81.00 L (All-Inclusive)');
            expect(pricing.isRange).toBe(true);
        });

        it('handles crore pricing accurately', () => {
            const pricing = getAllInclusivePricing('₹1.85 Cr');
            expect(pricing.allInclusiveDisplay).toBe('₹1.85 Cr (All-Inclusive)');
            expect(pricing.allInclusiveRange).toBe('₹1.85 Cr');
        });
    });

    describe('Sanctioned MahaRERA Carpet Area Logic', () => {
        it('calculates exact carpet range from configurationDetails', () => {
            const details = [
                { type: '2 BHK Luxury Unit', carpetArea: '665 sq.ft', priceRange: '₹81.00 L' },
                { type: '2 BHK Luxury Unit', carpetArea: '680 sq.ft', priceRange: '₹83.00 L' },
                { type: '3 BHK Luxury Unit', carpetArea: '902 sq.ft', priceRange: '₹1.06 Cr' }
            ];

            const carpetStr = getFinalCarpetAreaOnly(details);
            expect(carpetStr).toBe('665 - 902 sq.ft Carpet Area');
        });

        it('handles single configuration carpet area', () => {
            const details = [
                { type: '3 BHK Elite', carpetArea: '1,120 sq.ft', priceRange: '₹1.45 Cr' }
            ];

            const carpetStr = getFinalCarpetAreaOnly(details);
            expect(carpetStr).toBe('1,120 sq.ft Carpet Area');
        });
    });

    describe('CarpetAreaInfographic Dynamic Sizing', () => {
        it('renders exact carpet area from configurationDetails instead of static 915/1305', () => {
            const details = [
                { type: '2 BHK Premium', carpetArea: '725 sq.ft', priceRange: '₹75 L' },
                { type: '3 BHK Royale', carpetArea: '1040 sq.ft', priceRange: '₹1.15 Cr' }
            ];

            render(
                <CarpetAreaInfographic
                    configurations={['2 BHK', '3 BHK']}
                    configurationDetails={details}
                    projectTitle="Test Project"
                    reraId="P52100099999"
                />
            );

            // Should display 725 sq.ft
            expect(screen.getAllByText(/725 Sq\. Ft\./i).length).toBeGreaterThanOrEqual(1);
            // Should NOT display dummy 915 or 1305 sq.ft
            expect(screen.queryByText(/915 Sq\. Ft\./i)).not.toBeInTheDocument();
            expect(screen.queryByText(/1305 Sq\. Ft\./i)).not.toBeInTheDocument();
        });
    });
});
