// Cloudflare Pages Function: /api/auth/verify
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const isAuthorized = await verifyAdminToken(context.request, context.env);
    if (!isAuthorized) {
        return jsonResponse({ authenticated: false, error: 'Session expired or invalid' }, 401);
    }

    try {
        const authHeader = context.request.headers.get('Authorization') || '';
        const token = authHeader.replace('Bearer ', '').trim();
        const [payloadB64] = token.split('.');
        const payload = JSON.parse(atob(payloadB64));

        return jsonResponse({
            authenticated: true,
            user: {
                id: payload.sub,
                email: payload.email,
                role: payload.role
            },
            expiresAt: payload.exp
        });
    } catch {
        return jsonResponse({ authenticated: false }, 401);
    }
};
