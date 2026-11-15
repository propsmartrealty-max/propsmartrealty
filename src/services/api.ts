import { Project, Builder, ProjectConfiguration } from '../types';
import { mapProjectFromDb, mapBuilderFromDb } from '../utils/mapper';
import { PROJECTS, BUILDERS } from '../data/mockData';

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
}

function filterProjectsLocally(page: number, filters: ProjectFilters = {}) {
    let list = [...PROJECTS];

    if (filters.city && filters.city.trim() && filters.city.toLowerCase() !== 'all') {
        list = list.filter(p => (p.city || 'Pune').toLowerCase() === filters.city!.toLowerCase().trim());
    }

    const searchKeyword = (filters.query || filters.location || '').toLowerCase().trim();
    if (searchKeyword) {
        list = list.filter(p => 
            p.location.toLowerCase().includes(searchKeyword) || 
            p.title.toLowerCase().includes(searchKeyword) ||
            p.slug.toLowerCase().includes(searchKeyword) ||
            p.builderId.toLowerCase().includes(searchKeyword) ||
            (p.description && p.description.toLowerCase().includes(searchKeyword))
        );
    }

    if (filters.type && filters.type.trim()) {
        const t = filters.type.toLowerCase().trim();
        if (t !== 'all') {
            list = list.filter(p => p.type.toLowerCase().includes(t));
        }
    }

    if (filters.status && filters.status.trim()) {
        list = list.filter(p => p.status.toLowerCase() === filters.status!.toLowerCase());
    }

    if (filters.configurations && filters.configurations.length > 0) {
        list = list.filter(p => filters.configurations!.some(c => p.configurations.includes(c)));
    }

    if (filters.budget && filters.budget.length > 0) {
        list = list.filter(p => {
            const price = p.priceRange;
            if (filters.budget!.includes('50L') && (price.includes('4') || price.includes('50L') || price.includes('45L') || price.includes('52L'))) return true;
            if (filters.budget!.includes('1Cr') && (price.includes('6') || price.includes('7') || price.includes('8') || price.includes('9') || price.includes('1Cr') || price.includes('1.2Cr') || price.includes('1.25Cr') || price.includes('1.35Cr'))) return true;
            if (filters.budget!.includes('1.5Cr') && (price.includes('1.1') || price.includes('1.2') || price.includes('1.3') || price.includes('1.4') || price.includes('1.5Cr'))) return true;
            if (filters.budget!.includes('2Cr+') && (price.includes('1.8Cr') || price.includes('1.95Cr') || price.includes('2.') || price.includes('3.') || price.includes('4.') || price.includes('5.'))) return true;
            return false;
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
            try {
                const res = await fetch('/api/projects?limit=250');
                const contentType = res.headers.get('content-type') || '';
                if (!res.ok || !contentType.includes('application/json')) {
                    throw new Error(`Invalid response (${res.status}): ${contentType}`);
                }
                const json = await res.json();
                if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
                    return PROJECTS;
                }
                const localBySlug = new Map(PROJECTS.map(p => [p.slug, p]));
                const mappedData = json.data.map((dbP: any) => {
                    const mapped = mapProjectFromDb(dbP) as Project;
                    const local = localBySlug.get(mapped.slug);
                    if (local && !mapped.city) {
                        mapped.city = local.city;
                    }
                    return mapped;
                }) as Project[];
                const dbSlugs = new Set(mappedData.map(p => p.slug));
                const missingLocal = PROJECTS.filter(p => !dbSlugs.has(p.slug));
                return [...mappedData, ...missingLocal];
            } catch (err) {
                console.warn('api.projects.all fallback to local dataset:', err);
                return PROJECTS;
            }
        },

        list: async (page = 1, filters: ProjectFilters = {}) => {
            // When filtering by city, use direct client dataset filter for 100% accurate city counts
            if (filters.city && filters.city !== 'All') {
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
            const findLocal = () => {
                if (!id) return undefined;
                const raw = id.trim();
                const norm = raw.toLowerCase().replace(/^(p-|project-)/, '');
                const cleanTokens = norm.split('-').filter(t => t.length > 2);

                let match = PROJECTS.find(p =>
                    p.slug === raw ||
                    p.slug.toLowerCase() === norm ||
                    p.id === raw ||
                    p.id.toLowerCase() === raw.toLowerCase() ||
                    p.id.toLowerCase() === norm ||
                    p.id.toLowerCase() === `p-${norm}` ||
                    p.id.toLowerCase() === `p-${norm.toLowerCase()}`
                );
                if (match) return match;

                match = PROJECTS.find(p => {
                    const titleSlug = p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                    return titleSlug === norm || titleSlug.replace(/-/g, '') === norm.replace(/-/g, '');
                });
                if (match) return match;

                match = PROJECTS.find(p =>
                    p.slug.toLowerCase().startsWith(norm) ||
                    norm.startsWith(p.slug.toLowerCase())
                );
                if (match) return match;

                if (cleanTokens.length > 0) {
                    match = PROJECTS.find(p => {
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
            try {
                const res = await fetch('/api/builders');
                const contentType = res.headers.get('content-type') || '';
                if (!res.ok || !contentType.includes('application/json')) {
                    throw new Error(`Invalid response (${res.status}): ${contentType}`);
                }
                const data = await res.json();

                if (!data || !Array.isArray(data) || data.length === 0) {
                    return BUILDERS;
                }
                const mapped = data.map(mapBuilderFromDb) as Builder[];
                return mapped.length > 0 ? mapped : BUILDERS;
            } catch (err) {
                console.warn('api.builders.list fallback to local dataset:', err);
                return BUILDERS;
            }
        },

        getById: async (id: string) => {
            try {
                const res = await fetch(`/api/builders/${id}`);
                const contentType = res.headers.get('content-type') || '';
                if (!res.ok || !contentType.includes('application/json')) {
                    throw new Error(`Invalid response (${res.status}): ${contentType}`);
                }
                const data = await res.json();

                if (!data || data.error) {
                    const local = BUILDERS.find(b => b.id === id || b.slug === id);
                    if (local) return local;
                    throw new Error('Builder not found');
                }
                return mapBuilderFromDb(data) as Builder;
            } catch (err) {
                const local = BUILDERS.find(b => b.id === id || b.slug === id);
                if (local) return local;
                throw err;
            }
        }
    }
};
