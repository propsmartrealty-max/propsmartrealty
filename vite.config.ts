import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 1. Load env from .env files (for local dev)
  const envFile = loadEnv(mode, '.', '');

  // 2. Merge with system env vars (for Vercel/CI) which might not be in a file
  // We prioritize system vars (process.env) over .env file vars
  const env = { ...envFile, ...process.env };

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    define: {
      // Expose Cloudflare & App Env Vars
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || ''),
      'import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY': JSON.stringify(env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || ''),

      // Polyfill process.env for older libraries if needed
      'process.env': JSON.stringify(env)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      chunkSizeWarningLimit: 1000, // Increase limit to suppress warnings
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor code into separate chunks for better caching
            vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
            maps: ['leaflet', 'react-leaflet', 'react-leaflet-cluster'],
            ui: ['lucide-react', 'clsx', 'tailwind-merge']
          }
        }
      }
    }
  };
});
