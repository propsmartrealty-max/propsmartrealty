// Cloudflare Edge Middleware: Security, CORS & Auth Utilities

export interface Env {
    DB: D1Database;
    ASSETS_BUCKET: R2Bucket;
    ENVIRONMENT?: string;
    ADMIN_SECRET?: string;
    TURNSTILE_SECRET_KEY?: string;
    CORS_ALLOW_ORIGIN?: string;
}

export const ADMIN_SECRET_DEFAULT = 'propsmart_realty_cf_edge_secret_key_2026';

// Helper: JSON response with standard security headers
export function jsonResponse(data: any, status = 200, extraHeaders: Record<string, string> = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, cf-turnstile-token',
            'X-Content-Type-Options': 'nosniff',
            ...extraHeaders
        }
    });
}

// Helper: Verify HMAC-SHA256 Admin Bearer Token
export async function verifyAdminToken(request: Request, env: Env): Promise<boolean> {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) return false;

    const token = authHeader.substring(7).trim();
    if (!token) return false;

    try {
        const parts = token.split('.');
        if (parts.length !== 2) return false;

        const [payloadB64, signature] = parts;
        const secret = env.ADMIN_SECRET || ADMIN_SECRET_DEFAULT;

        const enc = new TextEncoder();
        const key = await crypto.subtle.importKey(
            'raw',
            enc.encode(secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['verify']
        );

        const isValid = await crypto.subtle.verify(
            'HMAC',
            key,
            hexToBytes(signature),
            enc.encode(payloadB64)
        );

        if (!isValid) return false;

        const payloadStr = atob(payloadB64);
        const payload = JSON.parse(payloadStr);

        // Check token expiration (24h)
        if (payload.exp && Date.now() > payload.exp) {
            return false;
        }

        return payload.role === 'admin' || payload.role === 'superadmin';
    } catch {
        return false;
    }
}

// Helper: Verify Cloudflare Turnstile token for Bot Defense
export async function verifyTurnstile(token: string | null, ip: string | null, env: Env): Promise<boolean> {
    if (!token) return false;
    const secretKey = env.TURNSTILE_SECRET_KEY;
    if (!secretKey) return true; // Pass if Turnstile is not configured in dev

    try {
        const formData = new FormData();
        formData.append('secret', secretKey);
        formData.append('response', token);
        if (ip) formData.append('remoteip', ip);

        const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            body: formData
        });
        const outcome: any = await res.json();
        return outcome.success === true;
    } catch {
        return false;
    }
}

export function bytesToHex(bytes: Uint8Array): string {
    return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

export function hexToBytes(hex: string): Uint8Array {
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return bytes;
}

// Global Edge Middleware: CORS, Security Headers & Pipeline chaining
export const onRequest: PagesFunction<Env> = async (context) => {
    // 1. Handle pre-flight CORS
    if (context.request.method === 'OPTIONS') {
        return new Response(null, {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization, cf-turnstile-token',
                'Access-Control-Max-Age': '86400'
            }
        });
    }

    try {
        // 2. Chain to endpoint
        const response = await context.next();

        // 3. Ensure CORS and security headers are attached to every response
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Access-Control-Allow-Origin', '*');
        newHeaders.set('X-Content-Type-Options', 'nosniff');

        return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: newHeaders
        });
    } catch (err: any) {
        return jsonResponse({ error: 'Edge function error', details: err.message }, 500);
    }
};
