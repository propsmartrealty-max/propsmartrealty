import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GlobalErrorBoundary from '../components/Error/GlobalErrorBoundary';
import { getProjectWhatsAppMessage, getWhatsAppUrl } from '../utils/whatsappUtils';

// Mock components that might cause issues in testing environment
vi.mock('../services/api', () => ({
    default: {
        getProjects: vi.fn(),
    }
}));

describe('App Smoke Test', () => {
    it('GlobalErrorBoundary renders children when no error', () => {
        render(
            <GlobalErrorBoundary>
                <div>Safe Content</div>
            </GlobalErrorBoundary>
        );
        expect(screen.getByText('Safe Content')).toBeInTheDocument();
    });

    it('generates accurate WhatsApp inquiry message and URL', () => {
        const msg = getProjectWhatsAppMessage('Godrej Emerald Waters', 'Pimpri', '3 BHK');
        expect(msg).toContain('Godrej Emerald Waters');
        expect(msg).toContain('(3 BHK)');
        expect(msg).toContain('Pimpri');

        const url = getWhatsAppUrl(msg);
        expect(url).toContain('https://wa.me/917744009295?text=');
    });
});
