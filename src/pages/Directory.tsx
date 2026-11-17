import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { CheckCircle2, ShieldCheck, MapPin, Sparkles, Building2, Layers } from 'lucide-react';
import LocalityCard from '../components/Portal/LocalityCard';
import { 
    getLocalityImageUrl, 
    PROPSMART_LOCALITIES, 
    SUPPORTED_CITIES, 
    CITY_CONFIG, 
    getFeaturedLocalitiesByCity, 
    getLocalitiesByCity 
} from '../utils/localityUtils';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';
import { resolveBuilderLogo } from '../utils/builderUtils';
import PropertyCard from '../components/Portal/PropertyCard';

const BuildersGrid = ({ builders }: { builders: any[] }) => {
    const [erroredImages, setErroredImages] = useState<Record<string, boolean>>({});

    const handleImageError = (builderId: string) => {
        setErroredImages(prev => ({ ...prev, [builderId]: true }));
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {builders.map((builder) => {
                const resolvedLogo = resolveBuilderLogo(builder);
                const showFallback = !resolvedLogo || erroredImages[builder.id];
                return (
                    <Link
                        to={`/builder/${builder.slug}`}
                        key={builder.id}
                        className="group relative glass-card water-card-hover border border-white/80 hover:border-sky-300 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
                    >
                        {/* Verified Pill */}
                        <div className="flex items-center justify-between mb-2 px-1">
                            <span className="inline-flex items-center gap-1 text-[10px] font-sans font-black text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-full">
                                <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" /> Verified
                            </span>
                            {builder.trustScore && (
                                <span className="text-[10px] font-sans font-black text-amber-500">
                                    ★ {builder.trustScore}
                                </span>
                            )}
                        </div>

                        {/* Large, High-Visibility Logo Container */}
                        <div className="w-full h-24 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center p-3 shadow-2xs border border-white/90 group-hover:scale-105 transition-transform">
                            {showFallback ? (
                                <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex flex-col items-center justify-center p-2 text-center border border-slate-200/60">
                                    <span className="text-xs font-black text-slate-800 leading-tight line-clamp-2">{builder.name}</span>
                                    <span className="text-[9px] font-bold text-amber-600 uppercase tracking-wider mt-1">Partner</span>
                                </div>
                            ) : (
                                <img
                                    src={resolvedLogo}
                                    alt={builder.name}
                                    className="w-full h-full max-h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                                    onError={() => handleImageError(builder.id)}
                                />
                            )}
                        </div>

                        <div className="text-center mt-3 pt-2 border-t border-slate-100">
                            <h4 className="font-sans font-extrabold text-xs sm:text-sm text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-2 min-h-[2.25rem] flex items-center justify-center leading-snug">
                                {builder.name}
                            </h4>
                            <p className="font-sans font-bold text-[11px] text-slate-400 mt-1">
                                {builder.totalProjects || 0}+ Projects
                            </p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

const Directory = () => {
    const { projects, builders } = useData();
    const [searchParams, setSearchParams] = useSearchParams();
    const view = searchParams.get('view') || 'projects'; // 'projects' | 'builders'
    const cityParam = searchParams.get('city') || 'All';

    const [selectedCity, setSelectedCity] = useState<string>(cityParam);

    // Sync selectedCity when URL city param changes
    React.useEffect(() => {
        if (cityParam) setSelectedCity(cityParam);
    }, [cityParam]);

    const handleCityChange = (city: string) => {
        setSelectedCity(city);
        const nextParams = new URLSearchParams(searchParams);
        if (city === 'All') {
            nextParams.delete('city');
        } else {
            nextParams.set('city', city);
        }
        setSearchParams(nextParams);
    };

    // Filter out test data and invalid entries
    const validProjects = useMemo(() => {
        return projects.filter(p =>
            p.title &&
            !p.title.toLowerCase().includes('test') &&
            !p.location.toLowerCase().includes('test')
        );
    }, [projects]);

    // Filter projects by city
    const filteredProjects = useMemo(() => {
        if (selectedCity === 'All') return validProjects;
        return validProjects.filter(p => (p.city || 'Pune').toLowerCase() === selectedCity.toLowerCase());
    }, [validProjects, selectedCity]);

    // Featured localities for active city
    const featuredLocalities = useMemo(() => {
        if (selectedCity === 'All') {
            return PROPSMART_LOCALITIES.filter(l => l.isFeatured).slice(0, 12);
        }
        return getFeaturedLocalitiesByCity(selectedCity, 12);
    }, [selectedCity]);

    // Micro-locations grouped by city
    const cityWiseLocations = useMemo(() => {
        const groups: Record<string, { name: string; count: number; image: string; slug: string }[]> = {};
        
        SUPPORTED_CITIES.forEach(c => {
            const cityProjs = validProjects.filter(p => (p.city || 'Pune').toLowerCase() === c.toLowerCase());
            const locCounts: Record<string, number> = {};
            cityProjs.forEach(p => {
                const loc = p.location ? p.location.trim() : c;
                locCounts[loc] = (locCounts[loc] || 0) + 1;
            });

            groups[c] = Object.entries(locCounts)
                .sort((a, b) => b[1] - a[1])
                .map(([name, count]) => ({
                    name,
                    count,
                    image: getLocalityImageUrl(name),
                    slug: name.toLowerCase().replace(/\s+/g, '-')
                }));
        });

        return groups;
    }, [validProjects]);

    const directoryJsonLd = useMemo(() => [
        {
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
                    "name": view === 'builders' ? "Real Estate Developers" : "Property Directory",
                    "item": `https://propsmart.co.in/directory${view === 'builders' ? '?view=builders' : ''}`
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": view === 'builders' 
                ? "Top Real Estate Developers & Builders in Pune & Maharashtra" 
                : `${selectedCity === 'All' ? 'Maharashtra' : selectedCity} Real Estate Directory - Verified Residential Projects`,
            "url": `https://propsmart.co.in/directory${view === 'builders' ? '?view=builders' : (selectedCity !== 'All' ? `?city=${selectedCity}` : '')}`,
            "description": "Complete directory of verified residential projects, luxury apartments, and accredited developers across Pune, Mumbai, Thane, and Maharashtra with 100% zero brokerage."
        }
    ], [view, selectedCity]);

    return (
        <div className="min-h-screen bg-slate-50 relative selection:bg-sky-500 selection:text-white pb-20 md:pb-0">
            <WaterAmbientBackground />
            <SEO
                title={view === 'builders' 
                    ? "Top Real Estate Builders in Pune & Maharashtra - Buy Directly | PROPSMART REALTY" 
                    : `${selectedCity === 'All' ? 'Maharashtra' : selectedCity} Property Directory - 100% Brokerage Free | PROPSMART REALTY`}
                description={`Browse our complete directory of verified real estate projects and 300+ accredited builders across ${selectedCity === 'All' ? 'Pune, Mumbai, Thane & Maharashtra' : selectedCity}. Buy directly from developers with 100% zero brokerage.`}
                canonical={`https://propsmart.co.in/directory${view === 'builders' ? '?view=builders' : (selectedCity !== 'All' ? `?city=${selectedCity}` : '')}`}
                jsonLd={directoryJsonLd}
            />
            <PortalNavbar variant="colored" />

            <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 relative z-10">
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2 backdrop-blur-md">
                        ✨ 100% Brokerage Free • Buy Directly with Builder
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                            {view === 'builders' 
                                ? 'Top Real Estate Developers' 
                                : `${selectedCity === 'All' ? 'Maharashtra' : selectedCity} Real Estate Directory`}
                        </h1>
                        <p className="font-sans text-xs md:text-sm text-slate-500 mt-1">
                            {view === 'builders'
                                ? '300+ Accredited developers with verified MahaRERA track records'
                                : `${filteredProjects.length} verified projects with zero brokerage and direct developer pricing`
                            }
                        </p>
                    </div>

                    {/* View Switcher/Tabs */}
                    <div className="flex gap-2 p-1 bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-glass-sm">
                        <Link
                            to={`/directory?view=projects${selectedCity !== 'All' ? `&city=${selectedCity}` : ''}`}
                            className={`px-5 py-2.5 rounded-xl font-sans font-bold text-sm transition-all duration-300 ${view !== 'builders' ? 'water-btn text-white shadow-md' : 'text-slate-600 hover:text-sky-600 hover:bg-white/60'}`}
                        >
                            Projects ({filteredProjects.length})
                        </Link>
                        <Link
                            to={`/directory?view=builders${selectedCity !== 'All' ? `&city=${selectedCity}` : ''}`}
                            className={`px-5 py-2.5 rounded-xl font-sans font-bold text-sm transition-all duration-300 ${view === 'builders' ? 'water-btn text-white shadow-md' : 'text-slate-600 hover:text-sky-600 hover:bg-white/60'}`}
                        >
                            Builders ({builders.length})
                        </Link>
                    </div>
                </div>

                {/* MahaRERA Compliance Assurance Strip */}
                <div className="glass-panel border-emerald-200/80 rounded-2xl p-4 mb-8 flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-950 shadow-glass-sm">
                    <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span><strong>100% MahaRERA Verified Directory:</strong> Curated under PROPSMART REALTY (MahaRERA Reg No: <strong>A031262401295</strong>).</span>
                    </div>
                    <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="font-bold underline text-emerald-700 hover:text-emerald-900">
                        Official MahaRERA Portal ↗
                    </a>
                </div>

                {view === 'builders' ? (
                    <BuildersGrid builders={builders} />
                ) : (
                    /* Projects View */
                    <>
                        {/* City Segregation Bar */}
                        <div className="glass-panel p-3.5 rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(14,165,233,0.06)] mb-8 flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider px-2">City Filter:</span>
                            <button
                                onClick={() => handleCityChange('All')}
                                className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                                    selectedCity === 'All'
                                        ? 'bg-slate-900 text-white shadow-md'
                                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                                }`}
                            >
                                All Cities ({validProjects.length})
                            </button>
                            {SUPPORTED_CITIES.map((c) => {
                                const cityCount = validProjects.filter(p => (p.city || 'Pune').toLowerCase() === c.toLowerCase()).length;
                                const isSelected = selectedCity.toLowerCase() === c.toLowerCase();
                                const meta = CITY_CONFIG[c];
                                return (
                                    <button
                                        key={c}
                                        onClick={() => handleCityChange(c)}
                                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                                            isSelected
                                                ? 'bg-slate-900 text-white shadow-md'
                                                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/70'
                                        }`}
                                    >
                                        <span>{meta?.icon || '📍'}</span>
                                        <span>{c}</span>
                                        <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                            {cityCount}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* 1. Highlighted Locality Cards Section */}
                        <section className="mb-12">
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-amber-500" />
                                        Prime Featured {selectedCity === 'All' ? 'Maharashtra' : selectedCity} Corridors
                                    </h3>
                                    <p className="font-sans text-xs md:text-sm text-slate-500 mt-0.5">
                                        Top real estate investment micro-markets in {selectedCity === 'All' ? 'Pune, Mumbai, Thane & Maharashtra' : selectedCity}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                                {featuredLocalities.map(loc => (
                                    <LocalityCard key={loc.id || loc.name} locality={loc} />
                                ))}
                            </div>
                        </section>

                        {/* 2. City-Wise Segregated Micro-Markets Filter Strip */}
                        <section className="mb-10">
                            <div className="flex items-center gap-2 mb-4">
                                <MapPin className="w-4 h-4 text-brand-600" />
                                <span className="font-sans font-extrabold text-xs uppercase tracking-wider text-slate-400">
                                    Browse Micro-Markets ({selectedCity === 'All' ? 'All Cities' : selectedCity})
                                </span>
                            </div>

                            {selectedCity === 'All' ? (
                                /* Segregated citywise sections when 'All' is selected */
                                <div className="space-y-6">
                                    {SUPPORTED_CITIES.map((c) => {
                                        const locs = cityWiseLocations[c] || [];
                                        if (locs.length === 0) return null;
                                        const meta = CITY_CONFIG[c];
                                        return (
                                            <div key={c} className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                                                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-lg">{meta?.icon || '📍'}</span>
                                                        <h4 className="font-sans font-extrabold text-base text-slate-900">
                                                            {c} Micro-Markets ({locs.length} Localities)
                                                        </h4>
                                                    </div>
                                                    <button
                                                        onClick={() => handleCityChange(c)}
                                                        className="text-xs font-bold text-sky-600 hover:text-sky-700"
                                                    >
                                                        Filter to {c} →
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {locs.map(loc => (
                                                        <Link
                                                            key={loc.name}
                                                            to={`/search?city=${encodeURIComponent(c)}&location=${encodeURIComponent(loc.name)}`}
                                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 glass-pill hover:border-sky-300 hover:shadow-xs transition-all group"
                                                        >
                                                            <img
                                                                src={loc.image}
                                                                alt=""
                                                                className="w-4 h-4 rounded-full object-cover border border-slate-200 group-hover:scale-110 transition-transform"
                                                            />
                                                            <span className="font-sans font-bold text-xs tracking-tight text-slate-800 group-hover:text-sky-600 transition-colors">
                                                                {loc.name}
                                                            </span>
                                                            <span className="font-sans font-bold text-[10px] bg-sky-50 text-sky-700 px-1.5 py-0.2 rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                                                {loc.count}
                                                            </span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                /* Selected City's Micro-Markets */
                                <div className="p-5 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
                                    <div className="flex items-center gap-2 mb-3 border-b border-slate-100 pb-2">
                                        <span className="text-lg">{CITY_CONFIG[selectedCity]?.icon || '📍'}</span>
                                        <h4 className="font-sans font-extrabold text-base text-slate-900">
                                            {selectedCity} Micro-Markets ({cityWiseLocations[selectedCity]?.length || 0} Localities)
                                        </h4>
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {(cityWiseLocations[selectedCity] || []).map(loc => (
                                            <Link
                                                key={loc.name}
                                                to={`/search?city=${encodeURIComponent(selectedCity)}&location=${encodeURIComponent(loc.name)}`}
                                                className="inline-flex items-center gap-2 px-3.5 py-2 glass-pill hover:border-sky-300 hover:shadow-md transition-all group"
                                            >
                                                <img
                                                    src={loc.image}
                                                    alt=""
                                                    className="w-5 h-5 rounded-full object-cover border border-slate-200 group-hover:scale-110 transition-transform"
                                                />
                                                <span className="font-sans font-bold text-sm tracking-tight text-slate-800 group-hover:text-sky-600 transition-colors">
                                                    {loc.name}
                                                </span>
                                                <span className="font-sans font-bold text-xs bg-sky-50 text-sky-700 px-2 py-0.5 rounded-full group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                                    {loc.count}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* 3. Projects Grid */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-sans font-extrabold text-xl text-slate-900">
                                    Verified Projects {selectedCity !== 'All' ? `in ${selectedCity}` : 'Across Maharashtra'} ({filteredProjects.length})
                                </h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {filteredProjects.map(project => (
                                    <PropertyCard key={project.id} project={project} variant="grid" />
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default Directory;
