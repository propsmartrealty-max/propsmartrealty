// Cloudflare Pages Function: /api/projects/[id]
import { Env, jsonResponse, verifyAdminToken } from '../_middleware';

export const onRequestGet: PagesFunction<Env> = async (context) => {
    try {
        const id = context.params.id as string;

        // Query project by ID or slug
        const project = await context.env.DB
            .prepare('SELECT * FROM projects WHERE id = ? OR slug = ? LIMIT 1')
            .bind(id, id)
            .first<any>();

        if (!project) {
            return jsonResponse({ error: 'Project not found' }, 404);
        }

        // Query configurations for this project
        const { results: configs } = await context.env.DB
            .prepare('SELECT * FROM project_configurations WHERE project_id = ?')
            .bind(project.id)
            .all();

        const formatted = {
            ...project,
            builderId: project.builder_id,
            priceRange: project.price_range,
            exactPrice: project.exact_price,
            possessionDate: project.possession_date,
            heroImage: project.hero_image,
            masterLayout: project.master_layout,
            pricePerSqft: project.price_per_sqft,
            reraId: project.rera_id,
            verificationStatus: project.verification_status,
            verificationSource: project.verification_source,
            seoKeywords: typeof project.seo_keywords === 'string' ? safeJsonParse(project.seo_keywords, []) : project.seo_keywords,
            metaDescription: project.meta_description,
            configurations: typeof project.configurations === 'string' ? safeJsonParse(project.configurations, []) : project.configurations,
            features: typeof project.features === 'string' ? safeJsonParse(project.features, []) : project.features,
            specs: typeof project.specs === 'string' ? safeJsonParse(project.specs, {}) : project.specs,
            highlights: typeof project.highlights === 'string' ? safeJsonParse(project.highlights, []) : project.highlights,
            floorPlans: typeof project.floor_plans === 'string' ? safeJsonParse(project.floor_plans, []) : project.floor_plans,
            advancedConfigurations: (configs || []).map((c: any) => ({
                id: c.id,
                projectId: c.project_id,
                name: c.name,
                carpetArea: c.carpet_area,
                balconyArea: c.balcony_area,
                bathrooms: c.bathrooms,
                basePrice: c.base_price,
                pricePerSqft: c.price_per_sqft,
                infraCharges: c.infra_charges,
                clubhouseCharges: c.clubhouse_charges,
                gstRate: c.gst_rate,
                stampDutyRate: c.stamp_duty_rate,
                registrationCharges: c.registration_charges,
                layoutImage: c.layout_image
            }))
        };

        return jsonResponse(formatted);
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to retrieve project', details: err.message }, 500);
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
            UPDATE projects SET
                title = COALESCE(?, title),
                slug = COALESCE(?, slug),
                builder_id = COALESCE(?, builder_id),
                location = COALESCE(?, location),
                price_range = COALESCE(?, price_range),
                exact_price = COALESCE(?, exact_price),
                configurations = COALESCE(?, configurations),
                status = COALESCE(?, status),
                type = COALESCE(?, type),
                possession_date = COALESCE(?, possession_date),
                image = COALESCE(?, image),
                hero_image = COALESCE(?, hero_image),
                master_layout = COALESCE(?, master_layout),
                floor_plans = COALESCE(?, floor_plans),
                description = COALESCE(?, description),
                features = COALESCE(?, features),
                specs = COALESCE(?, specs),
                highlights = COALESCE(?, highlights),
                rera_id = COALESCE(?, rera_id),
                price_per_sqft = COALESCE(?, price_per_sqft),
                verification_status = COALESCE(?, verification_status),
                verification_source = COALESCE(?, verification_source),
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ? OR slug = ?
        `;

        await context.env.DB.prepare(sql).bind(
            body.title ?? null,
            body.slug ?? null,
            body.builderId ?? body.builder_id ?? null,
            body.location ?? null,
            body.priceRange ?? body.price_range ?? null,
            body.exactPrice ?? body.exact_price ?? null,
            body.configurations ? JSON.stringify(body.configurations) : null,
            body.status ?? null,
            body.type ?? null,
            body.possessionDate ?? body.possession_date ?? null,
            body.image ?? null,
            body.heroImage ?? body.hero_image ?? null,
            body.masterLayout ?? body.master_layout ?? null,
            body.floorPlans ? JSON.stringify(body.floorPlans) : null,
            body.description ?? null,
            body.features ? JSON.stringify(body.features) : null,
            body.specs ? JSON.stringify(body.specs) : null,
            body.highlights ? JSON.stringify(body.highlights) : null,
            body.reraId ?? body.rera_id ?? null,
            body.pricePerSqft ?? body.price_per_sqft ?? null,
            body.verificationStatus ?? body.verification_status ?? null,
            body.verificationSource ?? body.verification_source ?? null,
            id,
            id
        ).run();

        // If advancedConfigurations are provided, upsert them
        if (Array.isArray(body.advancedConfigurations) && body.advancedConfigurations.length > 0) {
            for (const cfg of body.advancedConfigurations) {
                const cfgId = cfg.id || `cfg-${Date.now().toString(36)}`;
                await context.env.DB.prepare(`
                    INSERT INTO project_configurations (
                        id, project_id, name, carpet_area, balcony_area, bathrooms,
                        base_price, price_per_sqft, infra_charges, clubhouse_charges
                    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON CONFLICT(id) DO UPDATE SET
                        name = excluded.name,
                        carpet_area = excluded.carpet_area,
                        balcony_area = excluded.balcony_area,
                        bathrooms = excluded.bathrooms,
                        base_price = excluded.base_price,
                        price_per_sqft = excluded.price_per_sqft,
                        infra_charges = excluded.infra_charges,
                        clubhouse_charges = excluded.clubhouse_charges
                `).bind(
                    cfgId,
                    id,
                    cfg.name,
                    cfg.carpetArea || cfg.carpet_area || 0,
                    cfg.balconyArea || cfg.balcony_area || 0,
                    cfg.bathrooms || 1,
                    cfg.basePrice || cfg.base_price || 0,
                    cfg.pricePerSqft || cfg.price_per_sqft || 0,
                    cfg.infraCharges || cfg.infra_charges || 0,
                    cfg.clubhouseCharges || cfg.clubhouse_charges || 0
                ).run();
            }
        }

        return jsonResponse({ success: true, message: 'Project updated successfully' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to update project', details: err.message }, 500);
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
            .prepare('DELETE FROM projects WHERE id = ? OR slug = ?')
            .bind(id, id)
            .run();

        return jsonResponse({ success: true, message: 'Project deleted' });
    } catch (err: any) {
        return jsonResponse({ error: 'Failed to delete project', details: err.message }, 500);
    }
};

function safeJsonParse(val: string, fallback: any) {
    try {
        return JSON.parse(val);
    } catch {
        return fallback;
    }
}
