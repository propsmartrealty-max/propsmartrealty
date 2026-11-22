/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f0f4ff',
                    100: '#e0eaff',
                    200: '#c5d9ff',
                    300: '#9dbfff',
                    400: '#6e9bff',
                    500: '#4071ff',
                    600: '#1a4bff',  // Royal Blue (Vibrant but not dark)
                    700: '#0033d6',
                    800: '#002aa8',  // Deep Royal
                    900: '#002585',  // Classic Corporate Blue (Softer than Navy)
                    950: '#00154a',
                },
                ocean: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                    700: '#0369a1',
                    800: '#075985',
                    900: '#0c4a6e',
                },
                aqua: {
                    50: '#ecfeff',
                    100: '#cffafe',
                    200: '#a5f3fc',
                    300: '#67e8f9',
                    400: '#22d3ee',
                    500: '#06b6d4',
                    600: '#0891b2',
                    700: '#0e7490',
                },
                accent: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e',
                    600: '#16a34a',
                    700: '#15803d', // Dark Green (Primary "Green Signal")
                    800: '#166534',
                    900: '#14532d',
                    950: '#052e16',
                },
                // Refine custom tokens
                navy: {
                    DEFAULT: '#1e3a8a', // Blue 900
                    light: '#1e40af',   // Blue 800
                },
                gold: {
                    DEFAULT: '#C5A059', // Champagne Gold
                    light: '#E5C985',   // Soft Gold
                    dark: '#997B30',    // Antique Gold
                },
                dark: {
                    DEFAULT: '#0f172a', // Slate-900 (Rich Navy)
                    card: '#1e293b',    // Slate-800
                    surface: '#334155', // Slate-700
                },
                // Keep standard colors that might be used
                blue: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8', // Compatibility
                }
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.08)',
                'glass-sm': '0 2px 10px 0 rgba(31, 38, 135, 0.05)',
                'glass-md': '0 8px 32px 0 rgba(31, 38, 135, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
                'glass-lg': '0 16px 48px 0 rgba(14, 165, 233, 0.12), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
                'water-glow': '0 0 25px -5px rgba(6, 182, 212, 0.4)',
                'water-glow-lg': '0 0 45px -10px rgba(14, 165, 233, 0.45)',
                'premium': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                'premium-hover': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #4f46e5 0deg, #10b981 180deg, #4f46e5 360deg)',
                'water-gradient': 'linear-gradient(135deg, rgba(240, 249, 255, 0.8) 0%, rgba(224, 242, 254, 0.6) 50%, rgba(207, 250, 254, 0.8) 100%)',
                'water-shimmer': 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'water-flow': 'waterFlow 12s ease-in-out infinite',
                'water-wave': 'waterWave 8s ease-in-out infinite',
                'water-shimmer': 'waterShimmer 2.5s ease-in-out infinite',
                'water-ripple': 'waterRipple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                waterFlow: {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '33%': { transform: 'translate(30px, -20px) scale(1.08)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
                },
                waterWave: {
                    '0%, 100%': { transform: 'translateX(0)' },
                    '50%': { transform: 'translateX(-25%)' },
                },
                waterShimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(200%)' },
                },
                waterRipple: {
                    '0%': { transform: 'scale(0.8)', opacity: '1' },
                    '100%': { transform: 'scale(2.2)', opacity: '0' },
                }
            }
        },
    },
    plugins: [],
}
