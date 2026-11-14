import { supabase } from './supabase';
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
                let query = supabase
                    .from('projects')
                    .select('*, project_configurations!inner(basePrice)', { count: 'exact' });

                if (filters.budget && filters.budget.length > 0) {
                    query = supabase.from('projects').select('*, project_configurations!inner(basePrice)', { count: 'exact' });
                } else {
                    query = supabase.from('projects').select('*', { count: 'exact' });
                }

                // Apply filters (Server-side)
                if (filters.location) {
                    query = query.ilike('location', `%${filters.location}%`);
                }
                if (filters.type) {
                    query = query.ilike('type', `%${filters.type}%`);
                }
                if (filters.status) {
                    query = query.eq('status', filters.status);
                }
                if (filters.configurations && filters.configurations.length > 0) {
                    query = query.overlaps('configurations', filters.configurations);
                }

                // Budget Filtering Logic using project_configurations
                if (filters.budget && filters.budget.length > 0) {
                    const conditions: string[] = [];
                    if (filters.budget.includes('50L')) conditions.push('basePrice.lt.5000000');
                    if (filters.budget.includes('1Cr')) conditions.push('and(basePrice.gte.5000000,basePrice.lt.10000000)');
                    if (filters.budget.includes('1.5Cr')) conditions.push('and(basePrice.gte.10000000,basePrice.lt.15000000)');
                    if (filters.budget.includes('2Cr+')) conditions.push('basePrice.gte.20000000');

                    if (conditions.length > 0) {
                        query = query.or(conditions.join(','), { foreignTable: 'project_configurations' });
                    }
                }

                const from = (page - 1) * PAGE_SIZE;
                const to = from + PAGE_SIZE - 1;

                const { data, error, count } = await query
                    .order('created_at', { ascending: false })
                    .range(from, to);

                if (error || !data || data.length === 0) {
                    return filterProjectsLocally(page, filters);
                }

                const mappedData = data.map(mapProjectFromDb);
                return { 
                    data: mappedData as Project[], 
                    count: count || mappedData.length, 
                    page, 
                    totalPages: Math.ceil((count || mappedData.length) / PAGE_SIZE) 
                };
            } catch (err) {
                console.warn('api.projects.list fallback to local data:', err);
                return filterProjectsLocally(page, filters);
            }
        },

        getById: async (id: string) => {
            try {
                const { data, error } = await supabase
                    .from('projects')
                    .select('*, advancedConfigurations:project_configurations(*)')
                    .eq('id', id)
                    .single();

                if (error || !data) {
                    const local = PROJECTS.find(p => p.id === id || p.slug === id);
                    if (local) return local;
                    throw error || new Error('Project not found');
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

            const records = configs.map(c => ({
                ...c,
                projectId,
            }));

            try {
                const { error } = await supabase
                    .from('project_configurations')
                    .upsert(records, { onConflict: 'id' });

                if (error) throw error;
            } catch (err) {
                console.warn('saveConfigurations offline:', err);
            }
        }
    },

    builders: {
        list: async () => {
            try {
                const { data, error } = await supabase.from('builders').select('*');
                if (error || !data || data.length === 0) {
                    return BUILDERS;
                }
                const mapped = data.map(mapBuilderFromDb) as Builder[];
                return mapped.length > 0 ? mapped : BUILDERS;
            } catch (err) {
                console.warn('api.builders.list fallback to local data:', err);
                return BUILDERS;
            }
        },

        getById: async (id: string) => {
            try {
                const { data, error } = await supabase.from('builders').select('*').eq('id', id).single();
                if (error || !data) {
                    const local = BUILDERS.find(b => b.id === id || b.slug === id);
                    if (local) return local;
                    throw error || new Error('Builder not found');
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
