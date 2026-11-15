
import React, { useMemo } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { Filter, MapPin, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import PropertyCard from '../components/Portal/PropertyCard';
import { PropertyCardSkeleton, ErrorState } from '../components/UI/LoadingSkeleton';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import { PROJECTS } from '../data/mockData';
import PriceTrendChart from '../components/Portal/MarketIntelligence/PriceTrendChart';
import { getLocalityImageUrl, PROPSMART_LOCALITIES } from '../utils/localityUtils';

interface SearchResultsProps {
    forcedLocationSlug?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ forcedLocationSlug }) => {
    const { search } = useLocation();
    const routeParams = useParams<{ locationSlug: string }>();
    const effectiveLocationSlug = forcedLocationSlug || routeParams.locationSlug;
    const queryParams = new URLSearchParams(search);

    const rawQuery = queryParams.get('q') || queryParams.get('query') || '';
    const rawLocationParam = queryParams.get('location') || '';
    const rawCityParam = queryParams.get('city') || '';

    // Parse location from slug (e.g. 'baner-annex' -> 'Baner Annex') or param
    const derivedLocation = effectiveLocationSlug
        ? effectiveLocationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : rawLocationParam;

    const filterLoc = derivedLocation;
    const filterQuery = rawQuery;
    const filterType = queryParams.get('type') || '';

    // Phase 5: Get Locality Data for Market Intelligence
    const { localities } = useData();
    const currentLocality = localities.find(l => 
        l.name.toLowerCase() === filterLoc.toLowerCase() ||
        (filterLoc && l.name.toLowerCase().includes(filterLoc.toLowerCase()))
    );

    // Page state
    const [page, setPage] = React.useState(1);

    // Local State for filters
    const [selectedCity, setSelectedCity] = React.useState<string>(rawCityParam || 'All');
    const [selectedBudgets, setSelectedBudgets] = React.useState<string[]>([]);
    const [selectedTypes, setSelectedTypes] = React.useState<string[]>([]);
    const [selectedConfigs, setSelectedConfigs] = React.useState<string[]>([]);
    const [showFilters, setShowFilters] = React.useState(false);
    const [viewMode, setViewMode] = React.useState<'list' | 'map'>('list');

    // Sync selectedCity when URL city param changes
    React.useEffect(() => {
        if (rawCityParam) {
            setSelectedCity(rawCityParam);
        }
    }, [rawCityParam]);

    // Reset page to 1 when search or location changes
    React.useEffect(() => {
        setPage(1);
    }, [filterLoc, filterQuery, filterType]);

    // Lazy load map
    const ProjectMap = React.useMemo(() => React.lazy(() => import('../components/Map/ProjectMap')), []);

    // Calculate derived filters
    const typeFilter = selectedTypes.length > 0
        ? selectedTypes.join(',')
        : filterType === 'commercial' ? 'Commercial'
            : filterType === 'plots' ? 'Plot'
                : (filterType === 'buy' || filterType === 'rent') ? 'Residential'
                    : '';

    const statusFilter = filterType === 'new-launch' ? 'New Launch' : '';

    // React Query for Server-Side Search
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['projects', 'search', page, filterLoc, filterQuery, typeFilter, statusFilter, selectedBudgets.join(','), selectedConfigs.join(',')],
        queryFn: () => api.projects.list(page, {
            query: filterQuery,
            location: filterLoc,
            type: typeFilter,
            status: statusFilter,
            budget: selectedBudgets,
            configurations: selectedConfigs
        }),
        placeholderData: (previousData) => previousData,
    });

    const baseProjects = (data?.data && data.data.length > 0)
        ? data.data
        : (isLoading ? [] : (error ? PROJECTS : (data?.data || [])));

    const projects = React.useMemo(() => {
        if (!selectedCity || selectedCity === 'All') return baseProjects;
        return baseProjects.filter((p: any) => (p.city || 'Pune').toLowerCase() === selectedCity.toLowerCase());
    }, [baseProjects, selectedCity]);
    const totalPages = data?.totalPages || 1;

    const toggleFilter = (item: string, current: string[], setter: (val: string[]) => void) => {
        if (current.includes(item)) {
            setter(current.filter(i => i !== item));
        } else {
            setter([...current, item]);
        }
        setPage(1);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <SEO
                title={effectiveLocationSlug ? `Flats in ${filterLoc} Pune | New Projects & Prices` : `Properties in ${filterLoc || 'Pune'} - Search Results`}
                description={effectiveLocationSlug
                    ? `Looking for flats in ${filterLoc}? Explore top verified new launch projects, pricing, and floor plans in ${filterLoc}, Pune.`
                    : "Browse verified real estate listings in Pune."}
                canonical={effectiveLocationSlug ? `https://propsmart.co.in/flats-in-${effectiveLocationSlug}` : undefined}
            />
            <PortalNavbar variant="colored" />

            <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 flex-1 w-full">
                {/* 100% Brokerage Free & Buy Direct with Builder Banner */}
                <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-emerald-500/25">
                    <div className="flex items-center gap-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                        <div>
                            <span className="font-black text-sm text-emerald-300 uppercase tracking-wide">100% Brokerage Free:</span>
                            <span className="text-xs text-slate-200 ml-2">Direct developer inventory with zero buyer commission & authorized MahaRERA partnerships.</span>
                        </div>
                    </div>
                    <span className="text-xs font-black bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1 rounded-full shrink-0 uppercase tracking-wider">
                        Buy Directly with Builder
                    </span>
                </div>

                {/* PropertyTech Quick Filter Pills */}
                <div className="bg-white p-3 rounded-2xl border border-slate-200/90 shadow-2xs mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">City:</span>
                        {[
                            { id: 'All', label: 'All Cities' },
                            { id: 'Pune', label: 'Pune' },
                            { id: 'Mumbai', label: 'Mumbai' },
                            { id: 'Lonavala', label: 'Lonavala' },
                            { id: 'Alibaug', label: 'Alibaug' }
                        ].map((c) => {
                            const active = selectedCity === c.id;
                            return (
                                <button
                                    key={c.id}
                                    onClick={() => setSelectedCity(c.id)}
                                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 ${
                                        active
                                            ? 'bg-slate-900 text-white shadow-xs'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {c.label}
                                </button>
                            );
                        })}

                        <div className="h-4 w-[1px] bg-slate-200 mx-1 shrink-0" />

                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">BHK:</span>
                        {['1 BHK', '2 BHK', '3 BHK', '4 BHK'].map((bhk) => {
                            const active = selectedConfigs.includes(bhk);
                            return (
                                <button
                                    key={bhk}
                                    onClick={() => toggleFilter(bhk, selectedConfigs, setSelectedConfigs)}
                                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 ${
                                        active
                                            ? 'bg-brand-600 text-white shadow-xs'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {bhk}
                                </button>
                            );
                        })}

                        <div className="h-4 w-[1px] bg-slate-200 mx-1 shrink-0" />

                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">Budget:</span>
                        {[
                            { label: '< ₹60L', val: '< 60 L' },
                            { label: '₹60L - ₹1Cr', val: '60 L - 1 Cr' },
                            { label: '₹1Cr - ₹2Cr', val: '1 Cr - 2 Cr' },
                            { label: '₹2Cr+', val: '> 2 Cr' }
                        ].map(({ label, val }) => {
                            const active = selectedBudgets.includes(val);
                            return (
                                <button
                                    key={val}
                                    onClick={() => toggleFilter(val, selectedBudgets, setSelectedBudgets)}
                                    className={`px-3 py-1 rounded-xl text-xs font-bold transition-all shrink-0 ${
                                        active
                                            ? 'bg-brand-600 text-white shadow-xs'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                    }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    {(selectedConfigs.length > 0 || selectedBudgets.length > 0) && (
                        <button
                            onClick={() => {
                                setSelectedConfigs([]);
                                setSelectedBudgets([]);
                                setPage(1);
                            }}
                            className="text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-xl transition-colors shrink-0"
                        >
                            Reset Filters
                        </button>
                    )}
                </div>

                {/* View Toggles & Filters */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <button
                        className="md:hidden w-full flex items-center justify-center gap-2 bg-white p-3 rounded-lg shadow-sm font-semibold text-slate-700 border border-slate-200"
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        <Filter className="w-5 h-5" /> {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </button>

                    <div className="hidden md:flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm ml-auto">
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${viewMode === 'list' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                            List View
                        </button>
                        <button
                            onClick={() => setViewMode('map')}
                            className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${viewMode === 'map' ? 'bg-brand-600 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}
                        >
                            Map View
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className={`w-full md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden md:block'}`}>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
                            <div className="flex items-center gap-2 mb-6 text-slate-800">
                                <Filter className="w-5 h-5" />
                                <h3 className="font-bold text-lg">Filters</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-3">Configuration</label>
                                    <div className="space-y-2">
                                        {['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Row House'].map(c => (
                                            <label key={c} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-600 transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-gray-300"
                                                    checked={selectedConfigs.includes(c)}
                                                    onChange={() => toggleFilter(c, selectedConfigs, setSelectedConfigs)}
                                                />
                                                {c}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 my-4"></div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-3">Budget</label>
                                    <div className="space-y-2">
                                        {['50L', '1Cr', '1.5Cr', '2Cr+'].map(b => (
                                            <label key={b} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-600 transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-gray-300"
                                                    checked={selectedBudgets.includes(b)}
                                                    onChange={() => toggleFilter(b, selectedBudgets, setSelectedBudgets)}
                                                />
                                                {b === '50L' ? 'Under 50 Lacs' :
                                                    b === '1Cr' ? '50L - 1 Cr' :
                                                        b === '1.5Cr' ? '1 Cr - 1.5 Cr' : 'Above 2 Cr'}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 my-4"></div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-3">Asset Type</label>
                                    <div className="space-y-2">
                                        {['Apartment', 'Villa', 'Plot', 'Office'].map(t => (
                                            <label key={t} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer hover:text-blue-600 transition-colors">
                                                <input
                                                    type="checkbox"
                                                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-gray-300"
                                                    checked={selectedTypes.includes(t)}
                                                    onChange={() => toggleFilter(t, selectedTypes, setSelectedTypes)}
                                                />
                                                {t}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Phase 5: Market Intelligence Chart (Sidebar) */}
                        {currentLocality && currentLocality.avgPriceSqft ? (
                            <div className="mt-6">
                                <PriceTrendChart
                                    locationName={currentLocality.name}
                                    currentPrice={currentLocality.avgPriceSqft}
                                    appreciationRate={currentLocality.appreciation_rate}
                                />
                            </div>
                        ) : null}

                    </aside>

                    {/* Results Grid */}
                    <div className="flex-1">
                        {/* Highlighted Locality Header Banner if location filter active */}
                        {filterLoc ? (
                            <div className="relative rounded-2xl overflow-hidden mb-6 shadow-md border border-slate-200/80 bg-slate-900 h-44 sm:h-52 flex items-end">
                                <img
                                    src={getLocalityImageUrl(filterLoc)}
                                    alt={filterLoc}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                                <div className="relative z-10 p-5 sm:p-6 text-white w-full flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span className="inline-flex items-center gap-1 bg-amber-400 text-slate-950 font-sans font-extrabold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                                <MapPin className="w-3 h-3 text-slate-950" /> Highlighted Location
                                            </span>
                                            {currentLocality && (
                                                <span className="inline-flex items-center gap-1 bg-emerald-500/90 text-white font-sans font-bold text-[11px] px-2.5 py-0.5 rounded-full">
                                                    <TrendingUp className="w-3 h-3" /> +{currentLocality.appreciation_rate || 7.5}% / yr
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-md">
                                            {filterLoc}
                                        </h2>
                                        <p className="font-sans text-xs text-white/80 mt-1">
                                            Showing {data?.count || projects.length} verified MahaRERA developments
                                        </p>
                                    </div>
                                    {currentLocality?.avgPriceSqft && (
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-xl text-right shrink-0">
                                            <span className="text-[10px] text-white/70 block font-semibold uppercase tracking-wider">Avg Property Rate</span>
                                            <span className="font-sans font-extrabold text-lg text-amber-300">₹{currentLocality.avgPriceSqft.toLocaleString()}/sq.ft</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            /* Trending Localities Quick Filter Bar */
                            <div className="mb-6 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                                <div className="flex items-center gap-2 mb-2 text-xs font-sans font-extrabold text-slate-400 uppercase tracking-wider">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                    Explore Top Localities
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {['Baner', 'Hinjewadi', 'Wakad', 'Kharadi', 'Balewadi', 'Viman Nagar'].map(loc => (
                                        <Link
                                            key={loc}
                                            to={`/search?location=${encodeURIComponent(loc)}`}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:bg-brand-50 hover:border-brand-300 transition-all shadow-xs group"
                                        >
                                            <img
                                                src={getLocalityImageUrl(loc)}
                                                alt=""
                                                className="w-4 h-4 rounded-full object-cover"
                                            />
                                            <span className="font-sans font-bold text-sm tracking-tight text-slate-700 group-hover:text-brand-600 transition-colors">
                                                {loc}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="mb-6 flex items-center justify-between">
                            <h1 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
                                {isLoading 
                                    ? 'Searching verified projects...' 
                                    : `${data?.count ?? projects.length} Properties found ${filterLoc ? `in ${filterLoc}` : (filterQuery ? `for "${filterQuery}"` : 'in Pune')}`
                                }
                            </h1>
                        </div>

                        {viewMode === 'map' ? (
                            <div className="w-full h-full min-h-[500px]">
                                <React.Suspense fallback={<div className="h-96 bg-slate-100 rounded-2xl animate-pulse"></div>}>
                                    <ProjectMap projects={projects} />
                                </React.Suspense>
                            </div>
                        ) : (
                            isLoading ? (
                                <div className="grid grid-cols-1 gap-6">
                                    {Array(3).fill(0).map((_, i) => (
                                        <div key={i} className="h-full">
                                            <PropertyCardSkeleton />
                                        </div>
                                    ))}
                                </div>
                            ) : projects.length > 0 ? (
                                <>
                                    <div className="grid grid-cols-1 gap-6">
                                        {projects.map(project => (
                                            <div key={project.id} className="h-full">
                                                <PropertyCard project={project} />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Simple Pagination */}
                                    {totalPages > 1 && (
                                        <div className="flex justify-center gap-2 mt-8">
                                            <button
                                                disabled={page === 1}
                                                onClick={() => {
                                                    setPage(p => Math.max(1, p - 1));
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50"
                                            >
                                                Previous
                                            </button>
                                            <span className="px-4 py-2">Page {page} of {totalPages}</span>
                                            <button
                                                disabled={page === totalPages}
                                                onClick={() => {
                                                    setPage(p => p + 1);
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="px-4 py-2 bg-white border border-gray-300 rounded-lg disabled:opacity-50"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div className="bg-white rounded-xl p-12 text-center border border-gray-100 shadow-sm">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">No properties found</h3>
                                    <p className="text-slate-500">Try adjusting your filters or search criteria.</p>
                                    <button
                                        onClick={() => {
                                            setSelectedBudgets([]);
                                            setSelectedTypes([]);
                                        }}
                                        className="mt-4 text-blue-600 font-semibold hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
};


export default SearchResults;
