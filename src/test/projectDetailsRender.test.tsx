import { describe, it, expect, vi } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProjectDetails from '../pages/ProjectDetails';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from '../context/DataContext';

// Polyfill browser globals
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

describe('ProjectDetails Render Test', () => {
    it('renders paranjape-aspire-andheri without throwing', () => {
        const { container } = render(
            <QueryClientProvider client={queryClient}>
                <HelmetProvider>
                    <DataProvider>
                        <MemoryRouter initialEntries={['/project/paranjape-aspire-andheri']}>
                            <Routes>
                                <Route path="/project/:slug" element={<ProjectDetails />} />
                            </Routes>
                        </MemoryRouter>
                    </DataProvider>
                </HelmetProvider>
            </QueryClientProvider>
        );
        expect(container).toBeTruthy();
    });
});

