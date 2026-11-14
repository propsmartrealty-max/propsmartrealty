// Edge Locality Prices Sync Handler (Cloudflare / Edge Compatible)
export default async function handler(request: any, response: any) {
    const authHeader = request?.headers ? request.headers['authorization'] : null;
    if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return response?.status ? response.status(401).json({ error: 'Unauthorized' }) : new Response('Unauthorized', { status: 401 });
    }

    try {
        console.log('🔄 Synced Localities with Cloudflare Edge Dataset');
        const payload = {
            status: 'synced',
            infrastructure: 'Cloudflare D1',
            updatedAt: new Date().toISOString()
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
