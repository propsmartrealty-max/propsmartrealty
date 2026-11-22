// Google GenAI SDK Enterprise Client
import { GoogleGenAI } from "@google/genai";
import { Project, Builder } from "../types";

// Initialize Enterprise Gemini
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || '';
const client = new GoogleGenAI({ apiKey });

// Enterprise-Grade Model Hierarchy: Flagship reasoning pro model with high-speed fallback
export const GEMINI_ENTERPRISE_MODEL = import.meta.env.VITE_GEMINI_MODEL || "gemini-2.5-pro";
export const GEMINI_ENTERPRISE_FALLBACK = "gemini-1.5-pro";

export type AIProjectDetails = Omit<Project, 'id'>;
export type AIBuilderDetails = Omit<Builder, 'id' | 'locations'>;

async function generateWithEnterpriseModel(prompt: string, systemInstruction?: string): Promise<string> {
    const modelsToTry = [GEMINI_ENTERPRISE_MODEL, GEMINI_ENTERPRISE_FALLBACK, "gemini-2.5-flash", "gemini-1.5-flash"];
    let lastError: any = null;

    for (const model of modelsToTry) {
        try {
            const config: any = {};
            if (systemInstruction) {
                config.systemInstruction = systemInstruction;
            }
            const response = await client.models.generateContent({
                model,
                contents: [{ parts: [{ text: prompt }] }],
                config
            });

            if (response.text) {
                return response.text;
            }
        } catch (err: any) {
            lastError = err;
            console.warn(`Gemini Enterprise model ${model} failed, trying next in fallback chain...`, err?.message || err);
        }
    }

    throw lastError || new Error("Failed to generate content with Enterprise Gemini models.");
}

export const fetchProjectDetailsFromAI = async (query: string): Promise<Partial<AIProjectDetails>> => {


    // Debug API Key presence (do not log full key)
    if (!apiKey) console.error("API Key is missing/empty");

    if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
        throw new Error('Gemini API Key is missing. Please check .env.local and restart server.');
    }

    try {
        const prompt = `
        You are an SEO Expert & Real Estate Analyst for Pune, India.
        Your job is to generate highly optimized, factual data for the project: "${query}"

        RULES:
        1. **ACCURACY PARAMOUNT**: If RERA ID or exact specs are unknown, return null for those fields.
        2. **LONG-TAIL DESCRIPTIONS**: 
           - The 'description' MUST be written for SEO. 
           - Pattern: "Premium {configuration} apartments in {location} Pune near {landmark} starting at {price}."
           - Include "buy", "sale", "price", "possession" naturally.
        3. **STRICT JSON ONLY**: You MUST return a single, valid JSON object. Do NOT wrap it in backticks, code blocks, or markdown. Do NOT add any conversational text before or after the JSON.

        Return this exact JSON structure:
        {
            "title": "Official Project Name",
            "builderId": "Builder Name",
            "location": "Specific Area (e.g. Baner, Kharadi)",
            "priceRange": "e.g. ₹95L - ₹1.5Cr (Current Market Price)",
            "exactPrice": "Starting Price e.g. ₹95 Lakhs",
            "configurations": ["2 BHK", "3 BHK"], 
            "status": "Under Construction / New Launch",
            "possessionDate": "e.g. December 2027",
            "type": "Residential",
            "reraId": "P521....",
            "description": "2-paragraph SEO description. Paragraph 1: Key configurations, location advantages, and price. Paragraph 2: Amenities and why it is a good investment. Use keywords like 'flats in Pune', 'luxury homes'.",
            "metaDescription": "Click-inducing summary (max 160 chars). E.g. 'Buy 2/3 BHK in Godrej Rivergreens, Manjari. Price starts ₹55L. Zero Brokerage. Verified RERA P521000.... Check Floor Plans now!'",
            "seoKeywords": ["2 BHK in {location}", "3 BHK in {location}", "{project_name} price", "{project_name} floor plan", "{project_name} review", "flats near {landmark}"],
            "features": ["Swimming Pool", "Gym", "Clubhouse", "24x7 Security"],
            "slug": "{project-name}-{location}-pune-official",
            "advancedConfigurations": []
        }
        `;


        const text = await generateWithEnterpriseModel(
            prompt,
            "You are an Enterprise Real Estate Intelligence Specialist & MahaRERA Compliance Analyst for Maharashtra, Pune, and Mumbai. Return strictly accurate, verified data formatted as valid JSON."
        );
        if (!text) throw new Error("Empty response from AI");

        // Cleanup potential markdown
        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();

        try {
            const data = JSON.parse(cleanJson);
            // Normalize type if AI returns something weird
            const validTypes = ['Residential', 'Commercial', 'Plot'];
            if (!validTypes.includes(data.type)) data.type = 'Residential';

            return data;
        } catch (jsonError) {
            console.error("JSON Parse Error:", jsonError);
            throw new Error("AI returned invalid data format. Please try again.");
        }
    } catch (error: any) {
        console.error("AI Fetch Error:", error);
        throw new Error(error.message || "Failed to fetch details from AI.");
    }
};

export const fetchBuilderDetailsFromAI = async (builderName: string): Promise<Partial<AIBuilderDetails>> => {
    if (!apiKey) throw new Error('Gemini API Key is missing.');

    try {
        const prompt = `
        Search for the real estate developer "${builderName}" in India/Pune.
        Return a STRICT JSON object:
        {
            "name": "${builderName}",
            "slug": "builder-slug",
            "logo": "URL to a high quality logo image (from reliable source or placeholder)",
            "heroImage": "URL to a banner image of their office or flagship project",
            "description": "2-sentence company profile (year established, reputation).",
            "establishedYear": 1990,
            "totalProjects": 0,    // Estimate
            "ongoingProjects": 0   // Estimate
        }
        Do not include markdown.
        `;

        const text = await generateWithEnterpriseModel(
            prompt,
            "You are an Enterprise Real Estate Intelligence Specialist & MahaRERA Compliance Analyst for Maharashtra, Pune, and Mumbai. Return strictly accurate, verified data formatted as valid JSON."
        );
        if (!text) throw new Error("Empty response from AI");

        const cleanJson = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanJson);

    } catch (error: any) {
        console.error("AI Builder Fetch Error:", error);
        throw new Error(error.message || "Failed to fetch builder details.");
    }
};
