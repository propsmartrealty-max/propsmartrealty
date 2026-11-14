// Cloudflare Pages Function: /api/leads/[id]
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestPatch: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const id = context.params.id as string;
        const body: any = await context.request.json();

        if (!body.status) {
            return jsonResponse({ error: 'Status is required' }, 400);
        }

        await context.env.DB
            .prepare('UPDATE leads SET status = ? WHERE id = ?')
            .bind(body.status, id)
            .run();

        return jsonResponse({ success: true, message: 'Lead status updated' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to update lead', details: err.message }, 500);
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
            .prepare('DELETE FROM leads WHERE id = ?')
            .bind(id)
            .run();

        return jsonResponse({ success: true, message: 'Lead deleted' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to delete lead', details: err.message }, 500);
    }
};
