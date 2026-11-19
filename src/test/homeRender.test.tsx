import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from '../context/DataContext';

global.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
};

global.IntersectionObserver = class IntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
} as any;

window.scrollTo = vi.fn();

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { retry: false }
    }
});

describe('Home Render Test', () => {
    it('renders Home page without throwing', () => {
        const { container } = render(
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <DataProvider>
                        <MemoryRouter initialEntries={['/']}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </MemoryRouter>
                    </DataProvider>
                </HelmetProvider>
            </QueryClientProvider>
        );
        expect(container).toBeTruthy();
    });
});
