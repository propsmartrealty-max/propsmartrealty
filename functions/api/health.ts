// Cloudflare Pages Function: /api/health (Enterprise Diagnostics)
import { Env, jsonResponse } from './_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const startTime = Date.now();
    let dbStatus = 'unconfigured';
    let stats = {
        projects: 0,
        builders: 0,
        localities: 0,
        ftsEngines: ['projects_fts', 'builders_fts', 'localities_fts'],
        engine: 'Cloudflare-D1-Enterprise-FTS5-BM25'
    };

    try {
        if (context.env.DB) {
            const [pRow, bRow, lRow] = await Promise.all([
                context.env.DB.prepare('SELECT COUNT(*) as count FROM projects').first<{ count: number }>(),
                context.env.DB.prepare('SELECT COUNT(*) as count FROM builders').first<{ count: number }>(),
                context.env.DB.prepare('SELECT COUNT(*) as count FROM localities').first<{ count: number }>()
            ]);

            dbStatus = 'healthy';
            stats.projects = pRow?.count || 0;
            stats.builders = bRow?.count || 0;
            stats.localities = lRow?.count || 0;
        }
    } catch (err: any) {
        dbStatus = `error: ${err.message}`;
    }

    const latencyMs = Date.now() - startTime;

    return jsonResponse({
        status: 'online',
        grade: 'Enterprise',
        provider: 'Cloudflare Global Edge Network',
        database: {
            service: 'Cloudflare D1 Enterprise',
            status: dbStatus,
            engine: stats.engine,
            totalProjects: stats.projects,
            totalBuilders: stats.builders,
            totalLocalities: stats.localities,
            ftsSearchEngines: stats.ftsEngines,
            compositeIndexes: [
                'idx_projects_city_status',
                'idx_projects_builder_status',
                'idx_projects_price_per_sqft',
                'idx_builders_slug_verified',
                'idx_localities_city'
            ]
        },
        storage: {
            service: 'Cloudflare R2 Direct Storage',
            status: context.env.ASSETS_BUCKET ? 'connected' : 'not_bound'
        },
        security: {
            turnstile: Boolean(context.env.TURNSTILE_SECRET_KEY),
            hardenedHeaders: true,
            zeroBrokerageMandate: true
        },
        edgeColo: context.request.cf?.colo || 'LOCAL_DEV',
        latencyMs,
        timestamp: new Date().toISOString()
    }, 200, {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Database-Grade': 'Cloudflare-D1-Enterprise'
    });
};
