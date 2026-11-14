// Edge Health Check Handler (Cloudflare / Edge Compatible)
export default async function handler(request: any, response: any) {
    const authHeader = request?.headers ? request.headers['authorization'] : null;
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return response?.status ? response.status(401).json({ error: 'Unauthorized' }) : new Response('Unauthorized', { status: 401 });
    }

    try {
        console.log('🔄 Checking Edge Asset Health...');
        const payload = {
            status: 'healthy',
            infrastructure: 'Cloudflare D1 & R2',
            timestamp: new Date().toISOString()
        };

        if (response?.status) {
            return response.status(200).json(payload);
        }
        return new Response(JSON.stringify(payload), { status: 200 });
    } catch (err: any) {
        if (response?.status) {
            return response.status(500).json({ error: err.message });
        }
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
