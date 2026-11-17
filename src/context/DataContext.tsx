import React, { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Project, Builder, Locality } from '../types';
import { api, ProjectFilters } from '../services/api';
import { BUILDERS, LOCATIONS } from '../data/mockData';
import { PROJECT_SUMMARIES } from '../data/projectSummaries';

interface DataContextType {
    projects: Project[];
    builders: Builder[];
    localities: Locality[];
    isLoading: boolean;
    error: Error | null;

    // CRUD
    addProject: (project: Project) => Promise<void>;
    updateProject: (id: string, updates: Partial<Project>) => Promise<void>;
    deleteProject: (id: string) => Promise<void>;
    addBuilder: (builder: Builder) => Promise<void>;
    updateBuilder: (id: string, updates: Partial<Builder>) => Promise<void>;
    deleteBuilder: (id: string) => Promise<void>;

    // Compare Logic
    compareList: string[];
    addToCompare: (id: string) => void;
    removeFromCompare: (id: string) => void;
    clearCompare: () => void;

    refreshData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = useQueryClient();

    // Compare Logic State
    const [compareList, setCompareList] = React.useState<string[]>(() => {
        const saved = localStorage.getItem('propsmart_compare');
        return saved ? JSON.parse(saved) : [];
    });

    const addToCompare = (id: string) => {
        setCompareList(prev => {
            if (prev.includes(id)) return prev;
            if (prev.length >= 3) {
                return prev;
            }
            const newList = [...prev, id];
            localStorage.setItem('propsmart_compare', JSON.stringify(newList));
            return newList;
        });
    };

    const removeFromCompare = (id: string) => {
        setCompareList(prev => {
            const newList = prev.filter(item => item !== id);
            localStorage.setItem('propsmart_compare', JSON.stringify(newList));
            return newList;
        });
    };

    const clearCompare = () => {
        setCompareList([]);
        localStorage.removeItem('propsmart_compare');
    };

    // Fetch initial data (load full inventory so all project cards, detail routes, and rails resolve instantly)
    const projectsQuery = useQuery({
        queryKey: ['projects', 'all'],
        queryFn: () => api.projects.all(),
    });

    const buildersQuery = useQuery({
        queryKey: ['builders'],
        queryFn: () => api.builders.list(),
    });

    // Fetch Localities globally for Deal Engine
    const localitiesQuery = useQuery({
        queryKey: ['localities'],
        queryFn: async () => {
            try {
                const { cloudflare } = await import('../services/cloudflare');
                const { data, error } = await cloudflare.from('localities').select('*');
                if (error || !data || data.length === 0) return LOCATIONS;
                return data;
            } catch {
                return LOCATIONS;
            }
        }
    });

    // Mutations
    const addProjectMutation = useMutation({
        mutationFn: async (project: Project) => {
            const { cloudflare } = await import('../services/cloudflare');
            const { mapProjectToDb } = await import('../utils/mapper');
            const { id, advancedConfigurations, ...data } = project;
            const payload = id.startsWith('p') || id === '' ? data : { ...data, id };
            const dbPayload = mapProjectToDb(payload);

            const { data: inserted, error } = await cloudflare.from('projects').insert([dbPayload]);
            if (error) throw error;
            if (advancedConfigurations && advancedConfigurations.length > 0) {
                await api.projects.saveConfigurations(inserted.id || id, advancedConfigurations);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
        }
    });

    const updateProjectMutation = useMutation({
        mutationFn: async ({ id, updates }: { id: string; updates: Partial<Project> }) => {
            const { cloudflare } = await import('../services/cloudflare');
            const { mapProjectToDb } = await import('../utils/mapper');
            const { advancedConfigurations, ...data } = updates;
            const dbPayload = mapProjectToDb(data);

            const { error } = await cloudflare.from('projects').update(dbPayload).eq('id', id);
            if (error) throw error;
            if (advancedConfigurations) {
                await api.projects.saveConfigurations(id, advancedConfigurations);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
        }
    });

    const deleteProjectMutation = useMutation({
        mutationFn: async (id: string) => {
            const { cloudflare } = await import('../services/cloudflare');
            const { error } = await cloudflare.from('projects').delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['projects'] });
        }
    });

    // Builders Mutations
    const addBuilderMutation = useMutation({
        mutationFn: async (builder: Builder) => {
            const { cloudflare } = await import('../services/cloudflare');
            const { mapBuilderToDb } = await import('../utils/mapper');
            const { id, ...data } = builder;
            const payload = id.startsWith('b') || id === '' ? data : builder;
            const dbPayload = mapBuilderToDb(payload);

            const { error } = await cloudflare.from('builders').insert([dbPayload]);
            if (error) throw error;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['builders'] })
    });

    const updateBuilderMutation = useMutation({
        mutationFn: async ({ id, updates }: { id: string; updates: Partial<Builder> }) => {
            const { cloudflare } = await import('../services/cloudflare');
            const { mapBuilderToDb } = await import('../utils/mapper');
            const dbPayload = mapBuilderToDb(updates);

            const { error } = await cloudflare.from('builders').update(dbPayload).eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['builders'] })
    });

    const deleteBuilderMutation = useMutation({
        mutationFn: async (id: string) => {
            const { cloudflare } = await import('../services/cloudflare');
            const { error } = await cloudflare.from('builders').delete().eq('id', id);
            if (error) throw error;
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['builders'] })
    });

    const contextValue = React.useMemo(() => {
        const rawProjects = projectsQuery.data;
        const resolvedProjects = (rawProjects && Array.isArray(rawProjects) && rawProjects.length > 0) ? rawProjects : PROJECT_SUMMARIES;
        const rawBuilders = buildersQuery.data;
        const resolvedBuilders = (rawBuilders && rawBuilders.length > 0) ? rawBuilders : BUILDERS;
        const rawLocalities = localitiesQuery.data;
        const resolvedLocalities = (rawLocalities && rawLocalities.length > 0) ? rawLocalities : LOCATIONS;

        return {
            projects: resolvedProjects,
            builders: resolvedBuilders,
            localities: resolvedLocalities,
            isLoading: projectsQuery.isLoading && !projectsQuery.data,
            error: null, // Gracefully resolved so pages never crash on network/Supabase errors

            compareList,
            addToCompare,
            removeFromCompare,
            clearCompare,

            addProject: (p: Project) => addProjectMutation.mutateAsync(p),
            updateProject: (id: string, u: Partial<Project>) => updateProjectMutation.mutateAsync({ id, updates: u }),
            deleteProject: (id: string) => deleteProjectMutation.mutateAsync(id),

            addBuilder: (b: Builder) => addBuilderMutation.mutateAsync(b),
            updateBuilder: (id: string, u: Partial<Builder>) => updateBuilderMutation.mutateAsync({ id, updates: u }),
            deleteBuilder: (id: string) => deleteBuilderMutation.mutateAsync(id),

            refreshData: () => {
                queryClient.invalidateQueries();
            }
        };
    }, [
        projectsQuery.data,
        buildersQuery.data,
        localitiesQuery.data,
        projectsQuery.isLoading,
        compareList
    ]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
