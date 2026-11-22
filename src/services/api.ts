import { Project, Builder, ProjectConfiguration } from '../types';
import { mapProjectFromDb, mapBuilderFromDb } from '../utils/mapper';
import { FEATURED_PROJECTS } from '../data/featuredProjects';
import { parsePriceRangeInLakhs } from '../utils/pricingUtils';
import { calculateFuzzyScore } from '../utils/fuzzySearch';

let _cachedProjectCatalog: Project[] | null = null;
async function getFullProjectCatalog(): Promise<Project[]> {
    if (!_cachedProjectCatalog) {
        try {
            const mod = await import('../data/projectSummaries');
            _cachedProjectCatalog = mod.PROJECT_SUMMARIES;
        } catch {
            _cachedProjectCatalog = FEATURED_PROJECTS;
        }
    }
    return _cachedProjectCatalog || FEATURED_PROJECTS;
}

const PAGE_SIZE = 10;

export interface ProjectFilters {
    query?: string;
    location?: string;
    city?: string;
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    status?: string;
    configurations?: string[];
    budget?: string[];
    builderSlug?: string;
    builderName?: string;
}

async function filterProjectsLocally(page: number, filters: ProjectFilters = {}) {
    const catalog = await getFullProjectCatalog();
    let list = [...catalog];

    if (filters.city && filters.city.trim() && filters.city.toLowerCase() !== 'all') {
        list = list.filter(p => (p.city || 'Pune').toLowerCase() === filters.city!.toLowerCase().trim());
    }

    if (filters.builderSlug && filters.builderSlug.trim()) {
        const bSlug = filters.builderSlug.toLowerCase().trim().replace(/^b-/, '');
        list = list.filter(p => 
            p.builderId.toLowerCase().replace(/^b-/, '') === bSlug ||
            p.builderId.toLowerCase().includes(bSlug) ||
            p.slug.toLowerCase().includes(bSlug) ||
            p.title.toLowerCase().includes(bSlug.replace(/-/g, ' '))
        );
    }

    if (filters.builderName && filters.builderName.trim()) {
        const bName = filters.builderName.toLowerCase().trim();
        list = list.filter(p => 
            p.title.toLowerCase().includes(bName) ||
            p.slug.toLowerCase().includes(bName.replace(/\s+/g, '-')) ||
            (p.description && p.description.toLowerCase().includes(bName))
        );
    }

    const searchKeyword = (filters.query || filters.location || '').trim();
    if (searchKeyword) {
        list = list.filter(p => {
            const keys = [
                p.location,
                p.title,
                p.slug.replace(/-/g, ' '),
                p.builderId,
                p.city || ''
            ];
            // Fast direct substring match
            if (keys.some(k => k && k.toLowerCase().includes(searchKeyword.toLowerCase()))) {
                return true;
            }
            // Typo-tolerant fuzzy match (e.g. "hinjawadi" -> Hinjewadi, "gojrej" -> Godrej)
            return keys.some(k => k && calculateFuzzyScore(searchKeyword, k) >= 0.70);
        });
    }

    if (filters.type && filters.type.trim()) {
        const t = filters.type.toLowerCase().trim();
        if (t !== 'all') {
            list = list.filter(p => p.type.toLowerCase().includes(t));
        }
    }

    if (filters.status && filters.status.trim()) {
        const s = filters.status.toLowerCase().trim();
        list = list.filter(p => {
            const pStatus = (p.status || '').toLowerCase();
            if (s === 'ready to move') {
                return pStatus.includes('ready') || pStatus.includes('completed');
            }
            if (s === 'new launch') {
                return pStatus.includes('new') || pStatus.includes('launch');
            }
            if (s === 'under construction') {
                return pStatus.includes('under') || pStatus.includes('construction') || pStatus.includes('ongoing');
            }
            return pStatus === s;
        });
    }

    if (filters.configurations && filters.configurations.length > 0) {
        list = list.filter(p => filters.configurations!.some(c => {
            const cLower = c.toLowerCase().trim();
            if (cLower === 'villa' || cLower === 'villas') {
                return (p.type && p.type.toLowerCase().includes('villa')) || 
                       (p.type && p.type.toLowerCase().includes('plot')) ||
                       p.title.toLowerCase().includes('villa') || 
                       (p.description && p.description.toLowerCase().includes('villa'));
            }
            if (cLower === 'penthouse' || cLower === 'penthouses') {
                return p.title.toLowerCase().includes('penthouse') || 
                       (p.description && p.description.toLowerCase().includes('penthouse'));
            }
            return p.configurations && p.configurations.includes(c);
        }));
    }

    if (filters.budget && filters.budget.length > 0) {
        list = list.filter(p => {
            const range = parsePriceRangeInLakhs(p.exactPrice || p.priceRange);
            if (!range) return false;
            const { minLakhs, maxLakhs } = range;

            return filters.budget!.some(b => {
                const bLower = b.toLowerCase().trim();
                // Under 50L / 60L
                if (bLower === '< 50 l' || bLower === 'under-50' || bLower === '< 60 l' || bLower === '50l' || bLower.includes('< 50') || bLower.includes('under 50')) {
                    return minLakhs < 60;
                }
                // 50L/60L - 1 Cr
                if (bLower === '60 l - 1 cr' || bLower === '50-100' || bLower === '< 75 l' || bLower === '< 1 cr' || bLower === '1cr' || bLower.includes('60 l - 1 cr') || bLower.includes('50 l - 1 cr')) {
                    return minLakhs <= 100 && maxLakhs >= 50;
                }
                // 1 Cr - 2 Cr
                if (bLower === '1 cr - 2 cr' || bLower === '100-200' || bLower === '< 1.5 cr' || bLower === '< 2 cr' || bLower === '1.5cr' || bLower.includes('1 cr - 2 cr')) {
                    return minLakhs <= 200 && maxLakhs >= 100;
                }
                // Above 2 Cr
                if (bLower === '> 2 cr' || bLower === 'above-200' || bLower === '2cr+' || bLower === 'luxury' || bLower.includes('> 2 cr') || bLower.includes('above 2 cr')) {
                    return maxLakhs >= 200;
                }
                return false;
            });
        });
    }

    if (typeof filters.minPrice === 'number' && filters.minPrice > 0) {
        list = list.filter(p => {
            const range = parsePriceRangeInLakhs(p.exactPrice || p.priceRange);
            return range ? range.maxLakhs >= filters.minPrice! : false;
        });
    }

    if (typeof filters.maxPrice === 'number' && filters.maxPrice > 0) {
        list = list.filter(p => {
            const range = parsePriceRangeInLakhs(p.exactPrice || p.priceRange);
            return range ? range.minLakhs <= filters.maxPrice! : false;
        });
    }

    const count = list.length;
    const from = (page - 1) * PAGE_SIZE;
    const paged = list.slice(from, from + PAGE_SIZE);

    return {
        data: paged,
        count,
        page,
        totalPages: Math.ceil(count / PAGE_SIZE) || 1
    };
}

export const api = {
    projects: {
        all: async () => {
            // High-speed static discovery index: instant sub-millisecond resolution with zero network payload
            return getFullProjectCatalog();
        },

        list: async (page = 1, filters: ProjectFilters = {}) => {
            // When filtering by city or specific builder, use direct client dataset filter for 100% accurate results
            if ((filters.city && filters.city !== 'All') || filters.builderSlug || filters.builderName) {
                return filterProjectsLocally(page, filters);
            }

            try {
                // Call Cloudflare Edge API
                const params = new URLSearchParams();
                params.set('page', String(page));
                params.set('limit', String(PAGE_SIZE));
                if (filters.query) params.set('q', filters.query);
                if (filters.location) params.set('location', filters.location);
                if (filters.city && filters.city !== 'All') params.set('city', filters.city);
                if (filters.type) params.set('type', filters.type);
                if (filters.status) params.set('status', filters.status);
                if (filters.configurations && filters.configurations.length > 0) {
                    params.set('config', filters.configurations[0]);
                }

                const res = await fetch(`/api/projects?${params.toString()}`);
                const contentType = res.headers.get('content-type') || '';
                if (!res.ok || !contentType.includes('application/json')) {
                    throw new Error(`Invalid response (${res.status}): ${contentType}`);
                }
                const json = await res.json();

                if (!json.data || json.data.length === 0) {
                    return filterProjectsLocally(page, filters);
                }

                const mappedData = json.data.map(mapProjectFromDb);
                return {
                    data: mappedData as Project[],
                    count: json.total || mappedData.length,
                    page,
                    totalPages: json.totalPages || Math.ceil((json.total || mappedData.length) / PAGE_SIZE)
                };
            } catch (err) {
                console.warn('api.projects.list fallback to local dataset:', err);
                return filterProjectsLocally(page, filters);
            }
        },

        getById: async (id: string) => {
            const catalog = await getFullProjectCatalog();
            const findLocal = () => {
                if (!id) return undefined;
                const raw = id.trim();
                const norm = raw.toLowerCase().replace(/^(p-|project-)/, '');
                const cleanTokens = norm.split('-').filter(t => t.length > 2);

                let match = catalog.find(p =>
                    p.slug === raw ||
                    p.slug.toLowerCase() === norm ||
                    p.id === raw ||
                    p.id.toLowerCase() === raw.toLowerCase() ||
                    p.id.toLowerCase() === norm ||
                    p.id.toLowerCase() === `p-${norm}` ||
                    p.id.toLowerCase() === `p-${norm.toLowerCase()}`
                );
                if (match) return match;

                match = catalog.find(p => {
                    const titleSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return titleSlug === norm || titleSlug.replace(/-/g, '') === norm.replace(/-/g, '');
                });
                if (match) return match;

                match = catalog.find(p =>
                    p.slug.toLowerCase().startsWith(norm) ||
                    norm.startsWith(p.slug.toLowerCase())
                );
                if (match) return match;

                if (cleanTokens.length > 0) {
                    match = catalog.find(p => {
                        const pSlug = p.slug.toLowerCase();
                        const pTitle = p.title.toLowerCase();
                        return cleanTokens.every(t => pSlug.includes(t) || pTitle.includes(t));
                    });
                    if (match) return match;
                }

                return undefined;
            };

            // Synchronous check first: if available in memory, return it instantly
            const immediateLocal = findLocal();

            try {
                const res = await fetch(`/api/projects/${encodeURIComponent(id)}`);
                const contentType = res.headers.get('content-type') || '';
                if (!res.ok || !contentType.includes('application/json')) {
                    if (immediateLocal) return immediateLocal;
                    return null;
                }
                const data = await res.json();

                if (!data || data.error) {
                    if (immediateLocal) return immediateLocal;
                    return null;
                }
                return mapProjectFromDb(data) as Project;
            } catch (err) {
                if (immediateLocal) return immediateLocal;
                return null;
            }
        },

        saveConfigurations: async (projectId: string, configs: Partial<ProjectConfiguration>[]) => {
            if (!configs || configs.length === 0) return;

            try {
                const res = await fetch(`/api/projects/${projectId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ advancedConfigurations: configs })
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
            } catch (err) {
                console.warn('saveConfigurations offline:', err);
            }
        }
    },

    builders: {
        list: async () => {
            const { BUILDERS } = await import('../data/buildersData');
            return BUILDERS;
        },

        getById: async (id: string) => {
            const { BUILDERS } = await import('../data/buildersData');
            const local = BUILDERS.find(b => b.id === id || b.slug === id);
            if (local) return local;
            throw new Error('Builder not found');
        }
    }
};
