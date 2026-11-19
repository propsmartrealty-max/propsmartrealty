
import React, { useMemo } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { Filter, MapPin, TrendingUp, Sparkles, Building2, LayoutGrid, List, Map, ArrowUpDown, X, Check } from 'lucide-react';
import PropertyCard from '../components/Portal/PropertyCard';
import { PropertyCardSkeleton, ErrorState } from '../components/UI/LoadingSkeleton';
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';
import PriceTrendChart from '../components/Portal/MarketIntelligence/PriceTrendChart';
import { getLocalityImageUrl, PROPSMART_LOCALITIES } from '../utils/localityUtils';
import { parseNaturalLanguageQuery } from '../utils/aiSearchUtils';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';
import PSeoMarketGuide from '../components/Portal/MarketIntelligence/PSeoMarketGuide';

export interface SearchResultsProps {
    forcedLocationSlug?: string;
    forcedCity?: string;
    forcedConfig?: string;
    forcedStatus?: string;
    forcedBudgetLabel?: string;
    forcedMaxBudget?: number;
    forcedMinBudget?: number;
    forcedBuilderSlug?: string;
    forcedBuilderName?: string;
    forcedType?: string;
    pSeoTitle?: string;
    pSeoDesc?: string;
    canonicalPath?: string;
}

const SearchResults: React.FC<SearchResultsProps> = ({ 
    forcedLocationSlug, 
    forcedCity,
    forcedConfig,
    forcedStatus,
    forcedBudgetLabel,
    forcedMaxBudget,
    forcedMinBudget,
    forcedBuilderSlug,
    forcedBuilderName,
    forcedType,
    pSeoTitle,
    pSeoDesc,
    canonicalPath
}) => {
    const { search } = useLocation();
    const routeParams = useParams<{ locationSlug: string }>();
    const effectiveLocationSlug = forcedLocationSlug || routeParams.locationSlug;
    const queryParams = new URLSearchParams(search);

    const rawQuery = queryParams.get('q') || queryParams.get('query') || '';
    const rawLocationParam = queryParams.get('location') || '';
    const rawCityParam = queryParams.get('city') || forcedCity || '';

    // Smart AI Natural Language Query Parser
    const aiParsed = useMemo(() => {
        return parseNaturalLanguageQuery(rawQuery);
    }, [rawQuery]);

    // Parse location from slug (e.g. 'baner-annex' -> 'Baner Annex'), param, or AI parsed intent
    const derivedLocation = effectiveLocationSlug
        ? effectiveLocationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : (rawLocationParam || aiParsed.location || '');

    const filterLoc = derivedLocation;
    const filterQuery = aiParsed.query || (aiParsed.location ? '' : rawQuery);
    const filterType = forcedType || queryParams.get('type') || aiParsed.type || '';

    // Phase 5: Get Locality Data for Market Intelligence
    const { localities, projects: fallbackProjects } = useData();
    const currentLocality = localities.find(l => 
        l.name.toLowerCase() === filterLoc.toLowerCase() ||
        (filterLoc && l.name.toLowerCase().includes(filterLoc.toLowerCase()))
    );

    // Page state
    const [page, setPage] = React.useState(1);

    // Local State for filters
    const [selectedCity, setSelectedCity] = React.useState<string>(forcedCity || rawCityParam || 'All');
    const [selectedBudgets, setSelectedBudgets] = React.useState<string[]>(forcedBudgetLabel ? [forcedBudgetLabel] : []);
    const [selectedTypes, setSelectedTypes] = React.useState<string[]>(forcedType ? [forcedType] : []);
    const [selectedConfigs, setSelectedConfigs] = React.useState<string[]>(forcedConfig ? [forcedConfig] : []);
    const [showFilters, setShowFilters] = React.useState(false);
    const [viewMode, setViewMode] = React.useState<'grid' | 'list' | 'map'>('grid');
    const [sortBy, setSortBy] = React.useState<'featured' | 'price-asc' | 'price-desc' | 'newest'>('featured');

    // Sync selectedCity when URL city param or forcedCity changes
    React.useEffect(() => {
        if (forcedCity) {
            setSelectedCity(forcedCity);
        } else if (rawCityParam) {
            setSelectedCity(rawCityParam);
        }
    }, [forcedCity, rawCityParam]);

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

    const effectiveStatus = forcedStatus || aiParsed.status || (filterType === 'new-launch' ? 'New Launch' : '');
    const effectiveConfigs = selectedConfigs.length > 0 ? selectedConfigs : (forcedConfig ? [forcedConfig] : (aiParsed.configurations || undefined));
    const effectiveBuilderSlug = forcedBuilderSlug || aiParsed.builderSlug;
    const effectiveMaxPrice = forcedMaxBudget || aiParsed.maxPrice;
    const effectiveMinPrice = forcedMinBudget || aiParsed.minPrice;

    // React Query for Server-Side Search
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['projects', 'search', page, filterLoc, filterQuery, selectedCity, typeFilter, effectiveStatus, selectedBudgets.join(','), (effectiveConfigs || []).join(','), effectiveBuilderSlug, effectiveMaxPrice, effectiveMinPrice],
        queryFn: () => api.projects.list(page, {
            query: filterQuery,
            location: filterLoc,
            city: selectedCity !== 'All' ? selectedCity : undefined,
            type: typeFilter,
            status: effectiveStatus,
            budget: selectedBudgets,
            configurations: effectiveConfigs,
            builderSlug: effectiveBuilderSlug,
            builderName: forcedBuilderName,
            maxPrice: effectiveMaxPrice,
            minPrice: effectiveMinPrice
        }),
        placeholderData: (previousData) => previousData,
    });

    const projects = (data?.data && data.data.length > 0)
        ? data.data
        : (isLoading ? [] : (error ? fallbackProjects : (data?.data || [])));
    const totalPages = data?.totalPages || 1;

    const sortedProjects = React.useMemo(() => {
        const list = [...projects];
        if (sortBy === 'price-asc') {
            return list.sort((a, b) => (a.pricePerSqft || 0) - (b.pricePerSqft || 0));
        }
        if (sortBy === 'price-desc') {
            return list.sort((a, b) => (b.pricePerSqft || 0) - (a.pricePerSqft || 0));
        }
        if (sortBy === 'newest' || effectiveStatus === 'New Launch') {
            const prioritySlugs = [
                'kolte-patil-life-republic-canvas',
                'kolte-patil-life-republic-echoes',
                'hiranandani-krisala-township',
                'godrej-elanor',
                'shapoorji-vyomora-hinjewadi'
            ];
            return list.sort((a, b) => {
                const aIdx = prioritySlugs.indexOf(a.slug);
                const bIdx = prioritySlugs.indexOf(b.slug);
                if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
                if (aIdx !== -1) return -1;
                if (bIdx !== -1) return 1;
                return (b.status === 'New Launch' ? 1 : 0) - (a.status === 'New Launch' ? 1 : 0);
            });
        }
        return list;
    }, [projects, sortBy]);

    const toggleFilter = (item: string, current: string[], setter: (val: string[]) => void) => {
        if (current.includes(item)) {
            setter(current.filter(i => i !== item));
        } else {
            setter([...current, item]);
        }
        setPage(1);
    };

    const activeFilterCount = (selectedCity && selectedCity !== 'All' ? 1 : 0) + selectedConfigs.length + selectedBudgets.length + selectedTypes.length;

    const activeCity = selectedCity !== 'All' ? selectedCity : 'Pune';
    const activeCityOrLoc = filterLoc || activeCity;
    const isCityLanding = !filterLoc && selectedCity !== 'All';

    // Formatted builder name
    const builderDisplayName = React.useMemo(() => {
        if (forcedBuilderName) return forcedBuilderName;
        if (!forcedBuilderSlug) return '';
        return forcedBuilderSlug
            .replace(/^b-/, '')
            .split('-')
            .map(w => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ');
    }, [forcedBuilderName, forcedBuilderSlug]);

    const seoTitle = pSeoTitle || (
        forcedConfig
            ? (filterLoc 
                ? `${forcedConfig} Flats in ${filterLoc}, ${activeCity} - 100% Brokerage Free | PROPSMART REALTY`
                : `${forcedConfig} Flats in ${activeCity} | Verified Direct Builder Projects - 100% Brokerage Free`)
            : forcedStatus
                ? (filterLoc
                    ? `${forcedStatus} Flats in ${filterLoc}, ${activeCity} - 0% Brokerage | PROPSMART REALTY`
                    : `${forcedStatus} Projects in ${activeCity} | Direct Builder Sales - 100% Brokerage Free`)
                : forcedBudgetLabel
                    ? `Flats Under ${forcedBudgetLabel.replace('< ', '₹')} in ${activeCityOrLoc} - 100% Brokerage Free | PROPSMART REALTY`
                    : forcedBuilderSlug
                        ? `${builderDisplayName} Projects in ${activeCityOrLoc} - Direct Builder Sales | PROPSMART REALTY`
                        : effectiveLocationSlug
                            ? `Flats in ${filterLoc} Pune | 100% Brokerage Free | Buy Directly with Builder`
                            : isCityLanding
                                ? `Properties in ${selectedCity} | Luxury Apartments & Flats | 100% Brokerage Free`
                                : `Properties in ${activeCityOrLoc} - Search Results | PROPSMART REALTY`
    );

    const seoDesc = pSeoDesc || (
        forcedConfig
            ? `Explore verified ${forcedConfig} flats in ${filterLoc || activeCityOrLoc}. Direct developer inventory with 100% zero brokerage, sanctioned MahaRERA floor plans & transparent pricing.`
            : forcedStatus
                ? `Looking for ${forcedStatus.toLowerCase()} flats in ${filterLoc || activeCityOrLoc}? Direct builder rates, ready possession options, sanctioned floor plans, 100% zero brokerage.`
                : forcedBudgetLabel
                    ? `Find premium flats under ${forcedBudgetLabel} in ${filterLoc || activeCityOrLoc}. Direct builder mandates, zero buyer commission, verified MahaRERA certifications.`
                    : forcedBuilderSlug
                        ? `Explore residential projects by ${builderDisplayName} in ${filterLoc || activeCityOrLoc}. Direct developer sales partnership, 100% zero brokerage, guaranteed price schemes.`
                        : effectiveLocationSlug
                            ? `Looking for flats in ${filterLoc}, Pune? Explore top verified new launch projects, developer pricing, and RERA floor plans. 100% Zero Brokerage on PROPSMART REALTY.`
                            : isCityLanding
                                ? `Explore luxury residential properties and flats in ${selectedCity}, Maharashtra. Direct builder pricing, verified floor plans, 100% zero brokerage.`
                                : `Browse verified real estate listings in ${activeCityOrLoc} with zero brokerage and direct builder pricing.`
    );

    const seoCanonical = canonicalPath
        ? `https://propsmart.co.in${canonicalPath}`
        : effectiveLocationSlug
            ? `https://propsmart.co.in/flats-in-${effectiveLocationSlug}`
            : isCityLanding
                ? `https://propsmart.co.in/properties-in-${selectedCity.toLowerCase()}`
                : 'https://propsmart.co.in/search';

    const searchJsonLd = React.useMemo(() => {
        const breadcrumb = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://propsmart.co.in"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Properties",
                    "item": "https://propsmart.co.in/directory"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": seoTitle.split(' - ')[0].split(' | ')[0],
                    "item": seoCanonical
                }
            ]
        };

        const itemList = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": `Properties in ${filterLoc || activeCityOrLoc}`,
            "numberOfItems": sortedProjects.length,
            "itemListElement": sortedProjects.slice(0, 10).map((p, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "url": `https://propsmart.co.in/project/${p.slug}`,
                "name": p.title,
                "image": p.image || p.heroImage
            }))
        };

        const faq = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": `Are properties in ${filterLoc || activeCityOrLoc} 100% brokerage free on PROPSMART REALTY?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `Yes, all properties listed in ${filterLoc || activeCityOrLoc} are offered with 100% zero brokerage. Homebuyers purchase directly through official authorized developer sales partnerships under MahaRERA registration A031262401295.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `What is the average price range for ${forcedConfig ? `${forcedConfig} flats` : 'properties'} in ${filterLoc || activeCityOrLoc}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `Properties in ${filterLoc || activeCityOrLoc} range from modern apartments starting around ₹45 Lac to premium luxury residences exceeding ₹2.5 Cr+, depending on configuration, developer prestige, and carpet area.`
                    }
                },
                {
                    "@type": "Question",
                    "name": `How can I arrange a direct developer site visit in ${filterLoc || activeCityOrLoc}?`,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `You can schedule an authorized direct builder site visit with complimentary cab pickup through PROPSMART REALTY via WhatsApp or instant lead submission.`
                    }
                }
            ]
        };

        return [breadcrumb, itemList, faq];
    }, [filterLoc, activeCityOrLoc, effectiveLocationSlug, seoCanonical, sortedProjects, seoTitle, forcedConfig]);

    const isGenericSearch = !canonicalPath && !effectiveLocationSlug && !isCityLanding;
    const shouldNoIndex = isGenericSearch && Boolean(rawQuery || queryParams.get('sort') || queryParams.get('filter'));

    return (
        <div className="min-h-screen bg-slate-50/70 flex flex-col relative pb-20 md:pb-0">
            <WaterAmbientBackground />
            <SEO
                title={seoTitle}
                description={seoDesc}
                canonical={seoCanonical}
                jsonLd={searchJsonLd}
                noIndex={shouldNoIndex}
            />
            <PortalNavbar variant="colored" />

            <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 flex-1 w-full">
                {/* 100% Brokerage Free & Buy Direct with Builder Banner */}
                <div className="mb-6 p-4 rounded-3xl bg-gradient-to-r from-slate-950/95 via-sky-950/90 to-slate-950/95 backdrop-blur-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-sky-400/25">
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
                <div className="glass-panel p-3.5 rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(14,165,233,0.06)] mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 shrink-0">City:</span>
                        {[
                            { id: 'All', label: 'All Cities' },
                            { id: 'Pune', label: 'Pune' },
                            { id: 'Mumbai', label: 'Mumbai' },
                            { id: 'Thane', label: 'Thane' },
                            { id: 'Navi Mumbai', label: 'Navi Mumbai' },
                            { id: 'Lonavala', label: 'Lonavala' },
                            { id: 'Alibaug', label: 'Alibaug' },
                            { id: 'Karjat', label: 'Karjat' }
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
                <div className="flex items-center justify-between gap-3 mb-6">
                    {/* Mobile Filter Button */}
                    <button
                        type="button"
                        className="md:hidden flex-1 flex items-center justify-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-xs font-bold text-xs text-slate-800 border border-slate-200/90 active:scale-95 transition-all"
                        onClick={() => setShowFilters(true)}
                    >
                        <Filter className="w-4 h-4 text-sky-600" />
                        <span>Filters</span>
                        {activeFilterCount > 0 && (
                            <span className="bg-sky-600 text-white text-[10px] font-black px-1.5 py-0.5 rounded-full ml-1">
                                {activeFilterCount}
                            </span>
                        )}
                    </button>

                    {/* View Mode Switcher (Visible on BOTH mobile and desktop) */}
                    <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1 rounded-xl border border-slate-200/90 shadow-xs ml-auto">
                        <button
                            type="button"
                            onClick={() => setViewMode('list')}
                            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs font-black transition-all ${
                                viewMode === 'list' || viewMode === 'grid'
                                    ? 'bg-slate-900 text-white shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <List className="w-3.5 h-3.5" />
                            <span>List</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setViewMode('map')}
                            className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-lg text-xs font-black transition-all ${
                                viewMode === 'map'
                                    ? 'bg-sky-600 text-white shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            <Map className="w-3.5 h-3.5" />
                            <span>Map</span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Desktop Sidebar Filters */}
                    <aside className="hidden md:block w-64 flex-shrink-0">
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

                    {/* Mobile Filter Drawer (Bottom Sheet) */}
                    {showFilters && (
                        <div className="md:hidden fixed inset-0 z-50 flex flex-col justify-end">
                            {/* Backdrop */}
                            <div 
                                className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
                                onClick={() => setShowFilters(false)}
                            />

                            {/* Drawer Panel */}
                            <div className="relative bg-white rounded-t-3xl shadow-2xl max-h-[85vh] flex flex-col w-full z-10 animate-in slide-in-from-bottom duration-300">
                                {/* Drawer Header */}
                                <div className="px-5 pt-3 pb-3 border-b border-slate-100 flex flex-col">
                                    <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-3" />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Filter className="w-4 h-4 text-sky-600" />
                                            <h3 className="font-extrabold text-base text-slate-900">Filters</h3>
                                            {activeFilterCount > 0 && (
                                                <span className="bg-sky-100 text-sky-700 text-xs font-black px-2 py-0.5 rounded-full">
                                                    {activeFilterCount} active
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setShowFilters(false)}
                                            className="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-500 transition-colors"
                                            aria-label="Close filters"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>

                                {/* Drawer Body (Scrollable) */}
                                <div className="p-5 overflow-y-auto space-y-6 flex-1 touch-momentum">
                                    {/* City Selection */}
                                    <div>
                                        <label className="block text-xs font-black text-sky-700 uppercase tracking-wider mb-2.5">City / Region</label>
                                        <div className="flex flex-wrap gap-2">
                                            {['All', 'Pune', 'Mumbai', 'Thane', 'Navi Mumbai', 'Lonavala', 'Alibaug', 'Karjat'].map(c => (
                                                <button
                                                    key={c}
                                                    type="button"
                                                    onClick={() => setSelectedCity(c)}
                                                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                                        selectedCity === c
                                                            ? 'bg-slate-900 text-white shadow-xs'
                                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                                    }`}
                                                >
                                                    {c === 'All' ? 'All Cities' : c}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Configurations */}
                                    <div className="border-t border-slate-100 pt-4">
                                        <label className="block text-xs font-black text-sky-700 uppercase tracking-wider mb-2.5">BHK Configuration</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['1 BHK', '2 BHK', '3 BHK', '4 BHK', 'Row House'].map(c => {
                                                const checked = selectedConfigs.includes(c);
                                                return (
                                                    <button
                                                        key={c}
                                                        type="button"
                                                        onClick={() => toggleFilter(c, selectedConfigs, setSelectedConfigs)}
                                                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                                                            checked
                                                                ? 'bg-sky-50 border-sky-300 text-sky-800'
                                                                : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100'
                                                        }`}
                                                    >
                                                        <span>{c}</span>
                                                        {checked && <Check className="w-3.5 h-3.5 text-sky-600" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Budget */}
                                    <div className="border-t border-slate-100 pt-4">
                                        <label className="block text-xs font-black text-sky-700 uppercase tracking-wider mb-2.5">Budget Range</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {[
                                                { label: 'Under ₹60 Lacs', val: '< 60 L' },
                                                { label: '₹60L - ₹1 Crore', val: '60 L - 1 Cr' },
                                                { label: '₹1Cr - ₹2 Crore', val: '1 Cr - 2 Cr' },
                                                { label: 'Above ₹2 Crore', val: '> 2 Cr' }
                                            ].map(({ label, val }) => {
                                                const checked = selectedBudgets.includes(val);
                                                return (
                                                    <button
                                                        key={val}
                                                        type="button"
                                                        onClick={() => toggleFilter(val, selectedBudgets, setSelectedBudgets)}
                                                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                                                            checked
                                                                ? 'bg-sky-50 border-sky-300 text-sky-800'
                                                                : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100'
                                                        }`}
                                                    >
                                                        <span>{label}</span>
                                                        {checked && <Check className="w-3.5 h-3.5 text-sky-600" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* Asset Type */}
                                    <div className="border-t border-slate-100 pt-4">
                                        <label className="block text-xs font-black text-sky-700 uppercase tracking-wider mb-2.5">Property Type</label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {['Apartment', 'Villa', 'Plot', 'Office'].map(t => {
                                                const checked = selectedTypes.includes(t);
                                                return (
                                                    <button
                                                        key={t}
                                                        type="button"
                                                        onClick={() => toggleFilter(t, selectedTypes, setSelectedTypes)}
                                                        className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center justify-between border transition-all ${
                                                            checked
                                                                ? 'bg-sky-50 border-sky-300 text-sky-800'
                                                                : 'bg-slate-50/80 border-slate-200 text-slate-700 hover:bg-slate-100'
                                                        }`}
                                                    >
                                                        <span>{t}</span>
                                                        {checked && <Check className="w-3.5 h-3.5 text-sky-600" />}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Drawer Sticky Footer */}
                                <div className="p-4 border-t border-slate-100 bg-white flex items-center gap-3 pb-safe">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setSelectedCity('All');
                                            setSelectedConfigs([]);
                                            setSelectedBudgets([]);
                                            setSelectedTypes([]);
                                            setPage(1);
                                        }}
                                        className="px-4 py-3 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors"
                                    >
                                        Reset All
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowFilters(false);
                                            setPage(1);
                                        }}
                                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-black text-xs uppercase tracking-wider shadow-md shadow-sky-600/25 transition-all active:scale-98 text-center"
                                    >
                                        Show {data?.count || projects.length} Properties
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Floating Mobile Filter & Map Pill (Sticky while scrolling results on mobile) */}
                    <div className="md:hidden fixed bottom-16 inset-x-0 z-30 flex justify-center pointer-events-none pb-2">
                        <div className="glass-dock rounded-full p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] border border-white/80 pointer-events-auto flex items-center gap-1 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            <button
                                type="button"
                                onClick={() => setShowFilters(true)}
                                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-black bg-white text-slate-800 shadow-xs hover:bg-slate-50 transition-all active:scale-95"
                            >
                                <Filter className="w-3.5 h-3.5 text-sky-600" />
                                <span>Filters</span>
                                {activeFilterCount > 0 && (
                                    <span className="bg-sky-600 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full">
                                        {activeFilterCount}
                                    </span>
                                )}
                            </button>
                            <div className="w-[1px] h-4 bg-slate-200" />
                            <button
                                type="button"
                                onClick={() => setViewMode(viewMode === 'map' ? 'list' : 'map')}
                                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-black transition-all active:scale-95 ${
                                    viewMode === 'map'
                                        ? 'bg-sky-600 text-white shadow-xs'
                                        : 'bg-slate-900 text-white shadow-xs'
                                }`}
                            >
                                {viewMode === 'map' ? (
                                    <>
                                        <List className="w-3.5 h-3.5" />
                                        <span>Show List</span>
                                    </>
                                ) : (
                                    <>
                                        <Map className="w-3.5 h-3.5 text-sky-300" />
                                        <span>Map View</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

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
                            /* Featured Prime Localities Quick Filter Bar */
                            <div className="mb-6 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
                                <div className="flex items-center gap-2 mb-2 text-xs font-sans font-extrabold text-slate-400 uppercase tracking-wider">
                                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                    Explore Prime Featured {selectedCity !== 'All' ? selectedCity : 'Maharashtra'} Corridors
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {(selectedCity === 'All' 
                                        ? PROPSMART_LOCALITIES.filter(l => l.isFeatured).slice(0, 14)
                                        : (() => {
                                            const list = PROPSMART_LOCALITIES.filter(l => l.city.toLowerCase() === selectedCity.toLowerCase());
                                            const feat = list.filter(l => l.isFeatured);
                                            return (feat.length > 0 ? feat : list).slice(0, 14);
                                        })()
                                    ).map(loc => (
                                        <Link
                                            key={loc.name}
                                            to={`/search?city=${encodeURIComponent(loc.city)}&location=${encodeURIComponent(loc.name)}`}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 hover:bg-brand-50 hover:border-brand-300 transition-all shadow-xs group"
                                        >
                                            <img
                                                src={getLocalityImageUrl(loc.name)}
                                                alt=""
                                                className="w-4 h-4 rounded-full object-cover shrink-0"
                                            />
                                            <span className="font-sans font-bold text-xs md:text-sm tracking-tight text-slate-700 group-hover:text-brand-600 transition-colors">
                                                {loc.name}
                                            </span>
                                            <span className="text-[10px] text-amber-500 font-bold">★</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Results Header: Title, Controls (View Mode Toggle & Sort Dropdown) */}
                        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight">
                                    {isLoading 
                                        ? 'Searching verified projects...' 
                                        : `${data?.count ?? sortedProjects.length} Properties found ${filterLoc ? `in ${filterLoc}` : (filterQuery ? `for "${filterQuery}"` : (selectedCity !== 'All' ? `in ${selectedCity}` : 'in Pune'))}`
                                    }
                                </h1>
                                <p className="text-xs text-slate-500 font-medium mt-0.5">
                                    0% Brokerage • MahaRERA Sanctioned Direct Builder Sales
                                </p>
                            </div>

                            <div className="flex items-center gap-3 self-end md:self-auto flex-wrap">
                                {/* Sort Dropdown */}
                                <div className="relative inline-flex items-center">
                                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs text-xs font-bold text-slate-700">
                                        <ArrowUpDown className="w-3.5 h-3.5 text-sky-600" />
                                        <span className="text-slate-400 font-medium">Sort:</span>
                                        <select
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value as any)}
                                            className="bg-transparent font-bold text-slate-800 cursor-pointer focus:outline-none pr-1"
                                        >
                                            <option value="featured">Featured / Recommended</option>
                                            <option value="price-asc">Price: Low to High</option>
                                            <option value="price-desc">Price: High to Low</option>
                                            <option value="newest">Newest Launches First</option>
                                        </select>
                                    </div>
                                </div>

                                {/* View Mode Switcher */}
                                <div className="inline-flex items-center bg-white border border-slate-200/90 rounded-xl p-1 shadow-2xs">
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('grid')}
                                        className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                                            viewMode === 'grid'
                                                ? 'bg-sky-600 text-white shadow-xs'
                                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                        title="Grid View"
                                    >
                                        <LayoutGrid className="w-4 h-4" />
                                        <span className="hidden sm:inline">Grid</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('list')}
                                        className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                                            viewMode === 'list'
                                                ? 'bg-sky-600 text-white shadow-xs'
                                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                        title="List View"
                                    >
                                        <List className="w-4 h-4" />
                                        <span className="hidden sm:inline">List</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setViewMode('map')}
                                        className={`p-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${
                                            viewMode === 'map'
                                                ? 'bg-sky-600 text-white shadow-xs'
                                                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                                        }`}
                                        title="Map View"
                                    >
                                        <Map className="w-4 h-4" />
                                        <span className="hidden sm:inline">Map</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Filter Chips Bar */}
                        <div className="mb-6 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                            {[
                                { label: 'Under ₹50 L', action: () => toggleFilter('under-50', selectedBudgets, setSelectedBudgets), active: selectedBudgets.includes('under-50') },
                                { label: '₹50 L - ₹1 Cr', action: () => toggleFilter('50-100', selectedBudgets, setSelectedBudgets), active: selectedBudgets.includes('50-100') },
                                { label: '₹1 Cr - ₹2 Cr', action: () => toggleFilter('100-200', selectedBudgets, setSelectedBudgets), active: selectedBudgets.includes('100-200') },
                                { label: 'Above ₹2 Cr', action: () => toggleFilter('above-200', selectedBudgets, setSelectedBudgets), active: selectedBudgets.includes('above-200') },
                                { label: '2 BHK', action: () => toggleFilter('2 BHK', selectedConfigs, setSelectedConfigs), active: selectedConfigs.includes('2 BHK') },
                                { label: '3 BHK', action: () => toggleFilter('3 BHK', selectedConfigs, setSelectedConfigs), active: selectedConfigs.includes('3 BHK') },
                                { label: 'New Launch', action: () => toggleFilter('new-launch', selectedTypes, setSelectedTypes), active: selectedTypes.includes('new-launch') },
                            ].map((chip, idx) => (
                                <button
                                    key={idx}
                                    onClick={chip.action}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-tight whitespace-nowrap transition-all border shrink-0 ${
                                        chip.active
                                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                                            : 'bg-white hover:bg-sky-50 text-slate-700 border-slate-200 hover:border-sky-300'
                                    }`}
                                >
                                    {chip.label}
                                </button>
                            ))}
                            {(selectedBudgets.length > 0 || selectedConfigs.length > 0 || selectedTypes.length > 0) && (
                                <button
                                    onClick={() => {
                                        setSelectedBudgets([]);
                                        setSelectedConfigs([]);
                                        setSelectedTypes([]);
                                    }}
                                    className="px-2.5 py-1.5 rounded-full text-xs font-bold text-rose-600 hover:bg-rose-50 transition-colors shrink-0 flex items-center gap-1"
                                >
                                    <X className="w-3.5 h-3.5" /> Clear All
                                </button>
                            )}
                        </div>

                        {/* AI Natural Language Search Intent Banner */}
                        {rawQuery && (aiParsed.location || aiParsed.configurations || aiParsed.status || aiParsed.maxPrice || aiParsed.builderSlug) && (
                            <div className="mb-5 p-3.5 rounded-2xl bg-gradient-to-r from-sky-50 via-indigo-50/70 to-emerald-50 border border-sky-200/80 flex items-center justify-between gap-3 text-xs shadow-xs">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="font-extrabold text-sky-900 flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-lg border border-sky-200/80 shadow-2xs">
                                        <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
                                        <span>AI Search Parsed:</span>
                                    </span>
                                    {aiParsed.location && (
                                        <span className="bg-sky-100 text-sky-800 font-bold px-2.5 py-0.5 rounded-md">
                                            📍 {aiParsed.location}
                                        </span>
                                    )}
                                    {aiParsed.configurations && (
                                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-md">
                                            🏠 {aiParsed.configurations.join(', ')}
                                        </span>
                                    )}
                                    {aiParsed.status && (
                                        <span className="bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5 rounded-md">
                                            ⚡ {aiParsed.status}
                                        </span>
                                    )}
                                    {aiParsed.maxPrice && (
                                        <span className="bg-purple-100 text-purple-900 font-bold px-2.5 py-0.5 rounded-md">
                                            💰 Under {aiParsed.maxPrice >= 100 ? `₹${(aiParsed.maxPrice / 100).toFixed(2)} Cr` : `₹${aiParsed.maxPrice} L`}
                                        </span>
                                    )}
                                    {aiParsed.builderSlug && (
                                        <span className="bg-blue-100 text-blue-900 font-bold px-2.5 py-0.5 rounded-md">
                                            🏢 Verified Developer
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {viewMode === 'map' ? (
                            <div className="w-full h-full min-h-[500px]">
                                <React.Suspense fallback={<div className="h-96 bg-slate-100 rounded-2xl animate-pulse"></div>}>
                                    <ProjectMap projects={sortedProjects} />
                                </React.Suspense>
                            </div>
                        ) : (
                            isLoading ? (
                                <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6" : "grid grid-cols-1 gap-6"}>
                                    {Array(6).fill(0).map((_, i) => (
                                        <div key={i} className="h-full">
                                            <PropertyCardSkeleton />
                                        </div>
                                    ))}
                                </div>
                            ) : sortedProjects.length > 0 ? (
                                <>
                                    <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6" : "grid grid-cols-1 gap-6"}>
                                        {sortedProjects.map(project => (
                                            <div key={project.id} className="h-full">
                                                <PropertyCard project={project} variant={viewMode === 'grid' ? 'grid' : 'list'} />
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

                {/* Programmatic SEO Market Intelligence & Link Mesh */}
                <PSeoMarketGuide 
                    localityName={filterLoc}
                    cityName={selectedCity !== 'All' ? selectedCity : 'Pune'}
                    config={forcedConfig}
                    status={forcedStatus}
                    budgetLabel={forcedBudgetLabel}
                    builderName={forcedBuilderName || (forcedBuilderSlug ? builderDisplayName : undefined)}
                    projectCount={data?.count ?? sortedProjects.length}
                />
            </div >
            <Footer />
        </div >
    );
};


export default SearchResults;
