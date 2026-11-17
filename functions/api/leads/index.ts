// Cloudflare Pages Function: /api/leads
import { Env, jsonResponse, verifyAdminToken, verifyTurnstile, checkRateLimit } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ error: 'Unauthorized: Admin authentication required' }, 401);
    }

    try {
        const sql = `
            SELECT l.*, p.title as project_title, p.location as project_location
            FROM leads l
            LEFT JOIN projects p ON l.project_id = p.id OR l.project_id = p.slug
            ORDER BY l.created_at DESC
            LIMIT 200
        `;

        const { results } = await context.env.DB.prepare(sql).all();

        const formatted = (results || []).map((item: any) => ({
            id: item.id,
            name: item.name,
            mobile: item.mobile,
            email: item.email,
            type: item.type,
            propertyType: item.property_type || 'General',
            location: item.location || item.project_location || 'Pune',
            price: item.price || '-',
            message: item.message || '',
            status: item.status || 'New',
            projectId: item.project_id,
            projectTitle: item.project_title,
            createdAt: item.created_at,
            metadata: typeof item.metadata === 'string' ? safeJsonParse(item.metadata, {}) : item.metadata
        }));

        return jsonResponse(formatted);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to fetch leads', details: err.message }, 500);
    }
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const body: any = await context.request.json();
        const clientIp = context.request.headers.get('CF-Connecting-IP') || context.request.headers.get('x-forwarded-for') || '127.0.0.1';
        const userAgent = context.request.headers.get('User-Agent') || '';
        const turnstileToken = context.request.headers.get('cf-turnstile-token') || body.turnstileToken;

        // Cloudflare KV Edge Rate Limiter: Max 5 leads per IP per 10 minutes
        const rateCheck = await checkRateLimit(clientIp, 'lead_submit', 5, 600, context.env);
        if (!rateCheck.allowed) {
            return jsonResponse({ error: 'Too many submissions. Please wait a few minutes before submitting another inquiry.' }, 429);
        }

        // If Turnstile secret is configured, enforce bot defense
        if (context.env.TURNSTILE_SECRET_KEY) {
            if (!turnstileToken) {
                return jsonResponse({ error: 'Security verification token required. Please refresh.' }, 403);
            }
            const isHuman = await verifyTurnstile(turnstileToken, clientIp, context.env);
            if (!isHuman) {
                return jsonResponse({ error: 'Security challenge failed. Please refresh and try again.' }, 403);
            }
        }

        const rawMobile = (body.mobile || '').toString().trim().replace(/[\s-]/g, '');
        const rawName = (body.name || '').toString().trim();

        if (!rawName || !rawMobile) {
            return jsonResponse({ error: 'Name and valid mobile number are required.' }, 400);
        }

        // Indian 10-digit mobile number validation (+91 / 91 / 0 optional prefix)
        const isIndianMobile = /^(?:\+91|91|0)?[6-9]\d{9}$/.test(rawMobile);
        if (!isIndianMobile) {
            return jsonResponse({ error: 'Please enter a valid 10-digit mobile number.' }, 400);
        }

        const id = `lead-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
        const sql = `
            INSERT INTO leads (
                id, name, mobile, email, type, property_type,
                location, price, message, status, project_id,
                metadata, ip_address, user_agent
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        await context.env.DB.prepare(sql).bind(
            id,
            body.name.trim(),
            body.mobile.trim(),
            body.email ? body.email.trim() : null,
            body.type || 'Inquiry',
            body.propertyType || body.property_type || null,
            body.location || null,
            body.price || null,
            body.message || (body.metadata?.message || null),
            body.status || 'New',
            body.projectId || body.project_id || null,
            JSON.stringify(body.metadata || {}),
            clientIp,
            userAgent
        ).run();

        // Dispatch instant sales alert if webhook is configured
        if (context.env.LEAD_NOTIFICATION_WEBHOOK && typeof (context as any).waitUntil === 'function') {
            (context as any).waitUntil(
                fetch(context.env.LEAD_NOTIFICATION_WEBHOOK, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        event: 'NEW_LEAD',
                        id,
                        name: body.name.trim(),
                        mobile: body.mobile.trim(),
                        email: body.email ? body.email.trim() : null,
                        project: body.projectId || body.location || 'General Inquiry',
                        source: 'PROPSMART_PORTAL',
                        timestamp: new Date().toISOString()
                    })
                }).catch(() => {})
            );
        }

        return jsonResponse({
            success: true,
            id,
            message: 'Inquiry received. Our verified mandate specialist will connect with you.'
        }, 201);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to submit inquiry', details: err.message }, 500);
    }
};

function safeJsonParse(val: string, fallback: any) {
    try {
        return JSON.parse(val);
    } catch {
        return fallback;
    }
}
