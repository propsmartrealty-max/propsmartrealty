import React, { createContext, useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Project, Builder, Locality } from '../types';
import { api, ProjectFilters } from '../services/api';
import { FEATURED_PROJECTS } from '../data/featuredProjects';

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

    // Shortlist / Favorites Logic
    favorites: string[];
    toggleFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
    clearFavorites: () => void;

    refreshData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const queryClient = useQueryClient();

    // Compare Logic State
    const [compareList, setCompareList] = React.useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('propsmart_compare');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
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

    // Favorites / Shortlist State (LocalStorage Persisted)
    const [favorites, setFavorites] = React.useState<string[]>(() => {
        try {
            const saved = localStorage.getItem('propsmart_favorites');
            return saved ? JSON.parse(saved) : [];
        } catch {
            return [];
        }
    });

    const toggleFavorite = React.useCallback((id: string) => {
        setFavorites(prev => {
            const exists = prev.includes(id);
            const newList = exists ? prev.filter(item => item !== id) : [...prev, id];
            try {
                localStorage.setItem('propsmart_favorites', JSON.stringify(newList));
            } catch (e) {
                console.error(e);
            }
            return newList;
        });
    }, []);

    const isFavorite = React.useCallback((id: string) => favorites.includes(id), [favorites]);

    const clearFavorites = React.useCallback(() => {
        setFavorites([]);
        try {
            localStorage.removeItem('propsmart_favorites');
        } catch (e) {
            console.error(e);
        }
    }, []);

    // Fetch initial data (instant boot from FEATURED_PROJECTS with zero network payload & instant paint)
    const projectsQuery = useQuery({
        queryKey: ['projects', 'all'],
        queryFn: () => api.projects.all(),
        initialData: FEATURED_PROJECTS,
        staleTime: Infinity,
        refetchOnMount: false,
    });

    const buildersQuery = useQuery({
        queryKey: ['builders'],
        queryFn: () => api.builders.list(),
        staleTime: Infinity,
        refetchOnMount: false,
    });

    // Fetch Localities globally for Deal Engine
    const localitiesQuery = useQuery({
        queryKey: ['localities'],
        queryFn: async () => {
            try {
                const { cloudflare } = await import('../services/cloudflare');
                const { data, error } = await cloudflare.from('localities').select('*');
                if (error || !data || data.length === 0) {
                    const { LOCATIONS } = await import('../data/locationsData');
                    return LOCATIONS;
                }
                return data;
            } catch {
                const { LOCATIONS } = await import('../data/locationsData');
                return LOCATIONS;
            }
        },
        staleTime: Infinity,
        refetchOnMount: false,
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
        const resolvedProjects = (rawProjects && Array.isArray(rawProjects) && rawProjects.length > 0) ? rawProjects : FEATURED_PROJECTS;
        const rawBuilders = buildersQuery.data;
        const resolvedBuilders = (rawBuilders && Array.isArray(rawBuilders)) ? rawBuilders : [];
        const rawLocalities = localitiesQuery.data;
        const resolvedLocalities = (rawLocalities && Array.isArray(rawLocalities)) ? rawLocalities : [];

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

            favorites,
            toggleFavorite,
            isFavorite,
            clearFavorites,

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
        compareList,
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites
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
