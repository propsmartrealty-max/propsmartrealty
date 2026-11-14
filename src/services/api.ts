import { Project, Builder, ProjectConfiguration } from '../types';
import { mapProjectFromDb, mapBuilderFromDb } from '../utils/mapper';
import { PROJECTS, BUILDERS } from '../data/mockData';

const PAGE_SIZE = 10;

export interface ProjectFilters {
    location?: string;
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    status?: string;
    configurations?: string[];
    budget?: string[];
}

function filterProjectsLocally(page: number, filters: ProjectFilters = {}) {
    let list = [...PROJECTS];

    if (filters.location && filters.location.trim()) {
        const loc = filters.location.toLowerCase().trim();
        list = list.filter(p => 
            p.location.toLowerCase().includes(loc) || 
            p.title.toLowerCase().includes(loc) ||
            p.slug.toLowerCase().includes(loc)
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
        list: async (page = 1, filters: ProjectFilters = {}) => {
            try {
                // Call Cloudflare Edge API
                const params = new URLSearchParams();
                params.set('page', String(page));
                params.set('limit', String(PAGE_SIZE));
                if (filters.location) params.set('location', filters.location);
                if (filters.type) params.set('type', filters.type);
                if (filters.status) params.set('status', filters.status);
                if (filters.configurations && filters.configurations.length > 0) {
                    params.set('config', filters.configurations[0]);
                }

                const res = await fetch(`/api/projects?${params.toString()}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
            try {
                const res = await fetch(`/api/projects/${id}`);
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();

                if (!data || data.error) {
                    const local = PROJECTS.find(p => p.id === id || p.slug === id);
                    if (local) return local;
                    throw new Error('Project not found');
                }
                return mapProjectFromDb(data) as Project;
            } catch (err) {
                const local = PROJECTS.find(p => p.id === id || p.slug === id);
                if (local) return local;
                throw err;
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
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
