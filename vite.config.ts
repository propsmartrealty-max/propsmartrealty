import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { PROJECTS, BUILDERS, LOCATIONS } from './src/data/mockData';

// Cloudflare Dev API Plugin: Serves real JSON responses for all /api/* requests during local dev
function cloudflareDevApiPlugin(): Plugin {
  return {
    name: 'cloudflare-dev-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/')) return next();

        const url = new URL(req.url, 'http://localhost:3000');
        const pathname = url.pathname;

        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, cf-turnstile-token');

        if (req.method === 'OPTIONS') {
          res.statusCode = 204;
          res.end();
          return;
        }

        // 1. Health Endpoint
        if (pathname === '/api/health') {
          res.end(JSON.stringify({
            status: 'online',
            provider: 'Cloudflare Edge (Local Dev Simulator)',
            database: { service: 'Cloudflare D1', status: 'ready', projects: PROJECTS.length },
            storage: { service: 'Cloudflare R2', status: 'ready' },
            security: { turnstile: true, hardenedHeaders: true },
            timestamp: new Date().toISOString()
          }));
          return;
        }

        // 2. Projects List Endpoint
        if (pathname === '/api/projects' && req.method === 'GET') {
          const page = Math.max(1, parseInt(url.searchParams.get('page') || '1'));
          const limit = Math.min(100, Math.max(1, parseInt(url.searchParams.get('limit') || '10')));
          const location = url.searchParams.get('location')?.toLowerCase().trim();
          const q = (url.searchParams.get('q') || url.searchParams.get('query'))?.toLowerCase().trim();
          const type = url.searchParams.get('type')?.toLowerCase().trim();
          const status = url.searchParams.get('status')?.toLowerCase().trim();

          let filtered = [...PROJECTS];
          const searchKeyword = q || location;
          if (searchKeyword) {
            filtered = filtered.filter(p =>
              p.location.toLowerCase().includes(searchKeyword) ||
              p.title.toLowerCase().includes(searchKeyword) ||
              p.slug.toLowerCase().includes(searchKeyword) ||
              p.builderId?.toLowerCase().includes(searchKeyword) ||
              (p.description && p.description.toLowerCase().includes(searchKeyword))
            );
          }
          if (type && type !== 'all') {
            filtered = filtered.filter(p => p.type.toLowerCase().includes(type));
          }
          if (status) {
            filtered = filtered.filter(p => p.status.toLowerCase() === status);
          }

          const total = filtered.length;
          const from = (page - 1) * limit;
          const paged = filtered.slice(from, from + limit);

          res.end(JSON.stringify({
            data: paged,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit) || 1
          }));
          return;
        }

        // 3. Single Project Details Endpoint
        if (pathname.startsWith('/api/projects/') && req.method === 'GET') {
          const rawId = decodeURIComponent(pathname.replace('/api/projects/', ''));
          const idOrSlug = rawId.toLowerCase().trim();
          const project = PROJECTS.find(p => 
            p.id === rawId || 
            p.slug === idOrSlug ||
            p.slug.toLowerCase() === idOrSlug ||
            (idOrSlug && p.slug.startsWith(idOrSlug)) ||
            (idOrSlug && idOrSlug.startsWith(p.slug.split('-').slice(0, 3).join('-')))
          );
          if (project) {
            res.end(JSON.stringify(project));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Project not found' }));
          }
          return;
        }

        // 4. Builders List Endpoint
        if (pathname === '/api/builders' && req.method === 'GET') {
          res.end(JSON.stringify(BUILDERS));
          return;
        }

        // 5. Single Builder Endpoint
        if (pathname.startsWith('/api/builders/') && req.method === 'GET') {
          const idOrSlug = pathname.replace('/api/builders/', '');
          const builder = BUILDERS.find(b => b.id === idOrSlug || b.slug === idOrSlug);
          if (builder) {
            res.end(JSON.stringify(builder));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Builder not found' }));
          }
          return;
        }

        // 6. Localities Endpoint
        if (pathname === '/api/localities') {
          res.end(JSON.stringify(LOCATIONS));
          return;
        }

        // 7. Banners Endpoint
        if (pathname === '/api/banners') {
          const defaultBanners = [
            { id: 'b1', title: 'Buy Directly with Builder', imageUrl: '/images/projects/kolte-patil-life-republic.jpg', link: '/project/kolte-patil-life-republic', isActive: true, sortOrder: 0 },
            { id: 'b2', title: '100% Brokerage Free Pune Properties', imageUrl: '/images/projects/kolte-patil-clubhouse.jpg', link: '/search', isActive: true, sortOrder: 1 }
          ];
          res.end(JSON.stringify(defaultBanners));
          return;
        }

        // 8. Leads Submission Endpoint
        if (pathname === '/api/leads') {
          res.statusCode = 201;
          res.end(JSON.stringify({
            success: true,
            id: `lead-dev-${Date.now()}`,
            message: 'Inquiry received. Our verified mandate specialist will connect with you.'
          }));
          return;
        }

        // 9. Auth Login Endpoint
        if (pathname === '/api/auth/login' && req.method === 'POST') {
          let bodyStr = '';
          req.on('data', chunk => { bodyStr += chunk; });
          req.on('end', () => {
            try {
              const { email, password } = JSON.parse(bodyStr || '{}');
              if (email?.toLowerCase().trim() === 'admin@propsmartrealty.com' && password === 'Admin@Propsmart2026') {
                res.end(JSON.stringify({
                  success: true,
                  session: {
                    access_token: 'cf_edge_dev_token_propsmart_2026',
                    user: { id: 'admin-dev', email, role: 'superadmin' },
                    expires_at: Date.now() + 86400000
                  }
                }));
              } else {
                res.statusCode = 401;
                res.end(JSON.stringify({ error: 'Invalid credentials. Please verify your email and password.' }));
              }
            } catch {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
            }
          });
          return;
        }

        // 10. Fallback for any other /api/* route: ALWAYS return JSON, NEVER HTML!
        res.statusCode = 200;
        res.end(JSON.stringify({ success: true, message: 'Cloudflare Edge API' }));
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const envFile = loadEnv(mode, '.', '');
  const env = { ...envFile, ...process.env };

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [
      react(),
      cloudflareDevApiPlugin()
    ],
    define: {
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY || env.GEMINI_API_KEY || ''),
      'import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY': JSON.stringify(env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || ''),
      'process.env': JSON.stringify(env)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
            maps: ['leaflet', 'react-leaflet', 'react-leaflet-cluster'],
            ui: ['lucide-react', 'clsx', 'tailwind-merge']
          }
        }
      }
    }
  };
});
