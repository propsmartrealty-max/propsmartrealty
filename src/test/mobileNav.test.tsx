import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MobileBottomNav from '../components/Portal/MobileBottomNav';
import * as DataContext from '../context/DataContext';

describe('MobileBottomNav Component', () => {
    // Mock DataContext hook
    vi.spyOn(DataContext, 'useData').mockReturnValue({
        compareList: ['p-1', 'p-2'],
        projects: [],
        builders: [],
        localities: [],
        banners: [],
        isLoading: false,
        error: null,
        refreshData: vi.fn(),
        addToCompare: vi.fn(),
        removeFromCompare: vi.fn(),
        clearCompare: vi.fn(),
    } as any);

    it('renders all 5 core mobile navigation tabs on buyer pages', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <MobileBottomNav />
            </MemoryRouter>
        );

        expect(screen.getByLabelText('Home')).toBeInTheDocument();
        expect(screen.getByLabelText('Search Properties')).toBeInTheDocument();
        expect(screen.getByLabelText('Compare Projects (2 selected)')).toBeInTheDocument();
        expect(screen.getByLabelText('Verify MahaRERA')).toBeInTheDocument();
        expect(screen.getByLabelText('Chat on WhatsApp')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument(); // Compare count badge
    });

    it('hides MobileBottomNav on Admin routes', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/admin/dashboard']}>
                <MobileBottomNav />
            </MemoryRouter>
        );

        expect(container.querySelector('aside')).toBeNull();
    });

    it('hides MobileBottomNav on Project Details page to avoid double sticky bars', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/project/godrej-emerald-waters']}>
                <MobileBottomNav />
            </MemoryRouter>
        );

        expect(container.querySelector('aside')).toBeNull();
    });

    it('highlights active tab on /search', () => {
        render(
            <MemoryRouter initialEntries={['/search?city=Pune']}>
                <MobileBottomNav />
            </MemoryRouter>
        );

        const exploreTab = screen.getByLabelText('Search Properties');
        expect(exploreTab.className).toContain('text-sky-600');
    });
});
