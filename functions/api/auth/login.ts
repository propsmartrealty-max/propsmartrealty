// Cloudflare Pages Function: /api/auth/login
import { Env, jsonResponse, ADMIN_SECRET_DEFAULT, bytesToHex, checkRateLimit } from '../_middleware';

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const clientIp = context.request.headers.get('CF-Connecting-IP') || context.request.headers.get('x-forwarded-for') || '127.0.0.1';
        
        // Cloudflare KV Edge Rate Limiter: Max 5 login attempts per IP per 15 minutes
        const rateCheck = await checkRateLimit(clientIp, 'admin_login', 5, 900, context.env);
        if (!rateCheck.allowed) {
            return jsonResponse({ error: 'Too many login attempts. Please wait 15 minutes before trying again.' }, 429);
        }

        const body: any = await context.request.json();
        const { email, password } = body;

        if (!email || !password) {
            return jsonResponse({ error: 'Email and password are required' }, 400);
        }

        const normalizedEmail = email.toLowerCase().trim();

        // 1. Query admin from D1
        let adminUser = await context.env.DB
            .prepare('SELECT * FROM admins WHERE LOWER(email) = LOWER(?) LIMIT 1')
            .bind(normalizedEmail)
            .first<any>();

        let isValid = false;

        if (adminUser) {
            // Verify hash: sha256(password + salt)
            const enc = new TextEncoder();
            const dataToHash = enc.encode(password + adminUser.salt);
            const digest = await crypto.subtle.digest('SHA-256', dataToHash);
            const calculatedHash = bytesToHex(new Uint8Array(digest));

            if (calculatedHash === adminUser.password_hash) {
                isValid = true;
            }
        }

        // 2. Allow fallback developer bootstrap credentials if database has no registered admin
        const bootstrapPassword = context.env.ADMIN_BOOTSTRAP_PASSWORD || 'Admin@Propsmart2026';
        if (!isValid && !adminUser && normalizedEmail === 'admin@propsmartrealty.com' && password === bootstrapPassword) {
            isValid = true;
            adminUser = {
                id: 'admin-bootstrap',
                email: 'admin@propsmartrealty.com',
                role: 'superadmin'
            };
        }

        if (!isValid) {
            return jsonResponse({ error: 'Invalid credentials. Please verify your email and password.' }, 401);
        }

        // 3. Issue HMAC-SHA256 Signed Session Token
        const secret = context.env.ADMIN_SECRET || ADMIN_SECRET_DEFAULT;
        const payload = {
            sub: adminUser.id,
            email: adminUser.email,
            role: adminUser.role || 'admin',
            iat: Date.now(),
            exp: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        };

        const payloadB64 = btoa(JSON.stringify(payload));
        const enc = new TextEncoder();
        const key = await crypto.subtle.importKey(
            'raw',
            enc.encode(secret),
            { name: 'HMAC', hash: 'SHA-256' },
            false,
            ['sign']
        );

        const sigBuffer = await crypto.subtle.sign('HMAC', key, enc.encode(payloadB64));
        const signature = bytesToHex(new Uint8Array(sigBuffer));
        const token = `${payloadB64}.${signature}`;

        return jsonResponse({
            success: true,
            session: {
                access_token: token,
                user: {
                    id: adminUser.id,
                    email: adminUser.email,
                    role: adminUser.role || 'admin'
                },
                expires_at: payload.exp
            }
        });
    } catch (err: any) {
        return jsonResponse({ error: 'Login verification failed', details: err.message }, 500);
    }
};
