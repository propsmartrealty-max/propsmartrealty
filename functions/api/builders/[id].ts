// Cloudflare Pages Function: /api/builders/[id]
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const id = context.params.id as string;
        const builder = await context.env.DB
            .prepare('SELECT * FROM builders WHERE id = ? OR slug = ? LIMIT 1')
            .bind(id, id)
            .first<any>();

        if (!builder) {
            return jsonResponse({ error: 'Builder not found' }, 404);
        }

        return jsonResponse({
            ...builder,
            heroImage: builder.hero_image,
            establishedYear: builder.established_year,
            totalProjects: builder.total_projects,
            ongoingProjects: builder.ongoing_projects,
            trustScore: builder.trust_score,
            isVerified: Boolean(builder.is_verified),
            locations: typeof builder.locations === 'string' ? safeJsonParse(builder.locations, []) : builder.locations
        });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to retrieve builder', details: err.message }, 500);
    }
};

export const onRequestPut: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const id = context.params.id as string;
        const body: any = await context.request.json();

        const sql = `
            UPDATE builders SET
                name = COALESCE(?, name),
                slug = COALESCE(?, slug),
                logo = COALESCE(?, logo),
                hero_image = COALESCE(?, hero_image),
                description = COALESCE(?, description),
                established_year = COALESCE(?, established_year),
                total_projects = COALESCE(?, total_projects),
                ongoing_projects = COALESCE(?, ongoing_projects),
                trust_score = COALESCE(?, trust_score),
                is_verified = COALESCE(?, is_verified),
                mobile = COALESCE(?, mobile),
                experience = COALESCE(?, experience),
                locations = COALESCE(?, locations),
                website = COALESCE(?, website)
            WHERE id = ? OR slug = ?
        `;

        await context.env.DB.prepare(sql).bind(
            body.name ?? null,
            body.slug ?? null,
            body.logo ?? null,
            body.heroImage ?? body.hero_image ?? null,
            body.description ?? null,
            body.establishedYear ?? body.established_year ?? null,
            body.totalProjects ?? body.total_projects ?? null,
            body.ongoingProjects ?? body.ongoing_projects ?? null,
            body.trustScore ?? body.trust_score ?? null,
            body.isVerified !== undefined ? (body.isVerified ? 1 : 0) : null,
            body.mobile ?? null,
            body.experience ?? null,
            body.locations ? JSON.stringify(body.locations) : null,
            body.website ?? null,
            id,
            id
        ).run();

        return jsonResponse({ success: true, message: 'Builder updated' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to update builder', details: err.message }, 500);
    }
};

export const onRequestDelete: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const id = context.params.id as string;
        await context.env.DB
            .prepare('DELETE FROM builders WHERE id = ? OR slug = ?')
            .bind(id, id)
            .run();

        return jsonResponse({ success: true, message: 'Builder deleted' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to delete builder', details: err.message }, 500);
    }
};

function safeJsonParse(val: string, fallback: any) {
    try {
        return JSON.parse(val);
    } catch {
        return fallback;
    }
}
