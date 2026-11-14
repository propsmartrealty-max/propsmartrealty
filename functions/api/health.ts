// Cloudflare Pages Function: /api/health
import { Env, jsonResponse } from './_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const startTime = Date.now();
    let dbStatus = 'unconfigured';
    let projectCount = 0;

    try {
        if (context.env.DB) {
            const row = await context.env.DB
                .prepare('SELECT COUNT(*) as count FROM projects')
                .first<{ count: number }>();
            dbStatus = 'healthy';
            projectCount = row?.count || 0;
        }
    } catch (err: any) {
        dbStatus = `error: ${err.message}`;
    }

    const latencyMs = Date.now() - startTime;

    return jsonResponse({
        status: 'online',
        provider: 'Cloudflare Edge Network',
        database: {
            service: 'Cloudflare D1',
            status: dbStatus,
            projects: projectCount
        },
        storage: {
            service: 'Cloudflare R2',
            status: context.env.ASSETS_BUCKET ? 'connected' : 'not_bound'
        },
        security: {
            turnstile: Boolean(context.env.TURNSTILE_SECRET_KEY),
            hardenedHeaders: true
        },
        region: context.request.cf?.colo || 'LOCAL_DEV',
        latencyMs,
        timestamp: new Date().toISOString()
    });
};
