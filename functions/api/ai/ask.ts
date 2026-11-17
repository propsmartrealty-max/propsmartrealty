// Cloudflare Pages Function: /api/ai/ask
// Edge Real Estate AI Assistant powered by Cloudflare Workers AI (Llama 3.1)
import { Env, jsonResponse } from '../_middleware';

export const onRequestPost: PagesFunction<Env> = async (context) => {
    try {
        const body: any = await context.request.json();
        const query = (body.query || body.question || '').toString().trim();
        const projectTitle = body.projectTitle || '';

        if (!query) {
            return jsonResponse({ error: 'Question is required' }, 400);
        }

        // If Workers AI is bound, execute Llama 3.1 model directly at Cloudflare Edge
        if (context.env.AI) {
            const systemPrompt = `You are the PROPSMART REALTY verified real estate advisor for Pune and Maharashtra, India.
You provide concise, factual, and helpful real estate guidance.
Zero brokerage policy: PROPSMART REALTY charges 0% brokerage and connects buyers directly with certified developers.
Focus on authentic MahaRERA verification, usable carpet areas (not super built-up), and transparent all-inclusive pricing.
Keep responses under 3 paragraphs with bullet points for key facts.`;

            const prompt = projectTitle
                ? `Context: User is asking about "${projectTitle}". User question: "${query}"`
                : query;

            const aiResponse: any = await context.env.AI.run('@cf/meta/llama-3.1-8b-instruct-fp8', {
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: prompt }
                ],
                max_tokens: 512,
                temperature: 0.3
            });

            const answer = aiResponse?.response || 'PROPSMART REALTY advisor is ready to assist you. Please connect with our team on WhatsApp for dedicated project documentation.';

            return jsonResponse({
                answer,
                provider: 'Cloudflare Workers AI Llama-3.1',
                edgeColo: context.request.cf?.colo || 'BOM'
            });
        }

        // Fallback response if AI binding is pending
        return jsonResponse({
            answer: `Thank you for your question regarding ${projectTitle || 'Pune properties'}. All properties on PROPSMART REALTY are 100% MahaRERA certified with zero brokerage. Our relationship managers can provide floor plans, latest unit availability, and site visit arrangements via WhatsApp.`,
            provider: 'PROPSMART Real Estate Intelligence Engine'
        });

    } catch (err: any) {
        return jsonResponse({ error: 'AI processing error', details: err.message }, 500);
    }
};
