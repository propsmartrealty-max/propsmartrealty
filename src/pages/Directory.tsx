
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useData } from '../context/DataContext';
// import { LOCATIONS } from '../data/mockData';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import LocalityCard from '../components/Portal/LocalityCard';
import { getLocalityImageUrl, PROPSMART_LOCALITIES } from '../utils/localityUtils';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';

import PropertyCard from '../components/Portal/PropertyCard';

const BuildersGrid = ({ builders }: { builders: any[] }) => {
    const [erroredImages, setErroredImages] = React.useState<Record<string, boolean>>({});

    const handleImageError = (builderId: string) => {
        setErroredImages(prev => ({ ...prev, [builderId]: true }));
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {builders.map((builder) => {
                const showFallback = !builder.logo || erroredImages[builder.id];
                return (
                    <Link
                        to={`/builder/${builder.slug}`}
                        key={builder.id}
                        className="group relative glass-card water-card-hover border border-white/80 hover:border-sky-300 rounded-3xl p-4 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 shadow-sm"
                        title={`View ${builder.name} projects`}
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
                                <div className="w-full h-full bg-slate-100 rounded-xl flex items-center justify-center">
                                    <span className="text-xl font-extrabold text-slate-400 font-sans">{getInitials(builder.name)}</span>
                                </div>
                            ) : (
                                <img
                                    src={builder.logo}
                                    alt={builder.name}
                                    className="w-full h-full max-h-16 object-contain transition-transform duration-300 group-hover:scale-105"
                                    onError={() => handleImageError(builder.id)}
                                />
                            )}
                        </div>

                        <div className="text-center mt-3 pt-2 border-t border-slate-100">
                            <h4 className="font-sans font-extrabold text-sm md:text-base text-slate-800 group-hover:text-brand-600 transition-colors line-clamp-1 mb-1">
                                {builder.name}
                            </h4>
                            <p className="font-sans font-bold text-xs text-slate-400">
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
    const [searchParams] = useSearchParams();
    const view = searchParams.get('view') || 'projects'; // 'projects' | 'builders'

    // Filter out test data and invalid entries
    const validProjects = React.useMemo(() => {
        return projects.filter(p =>
            p.title &&
            !p.title.toLowerCase().includes('test') &&
            !p.location.toLowerCase().includes('test')
        );
    }, [projects]);

    // Derive locations dynamically from valid projects
    const locations = React.useMemo(() => {
        const locs: Record<string, number> = {};
        validProjects.forEach(p => {
            if (p.location) {
                const l = p.location.trim();
                locs[l] = (locs[l] || 0) + 1;
            }
        });
        return Object.entries(locs).sort((a, b) => b[1] - a[1]).map(([name, count]) => ({ name, count, id: name }));
    }, [validProjects]);

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(word => word[0])
            .join('')
            .substring(0, 2)
            .toUpperCase();
    };


    return (
        <div className="min-h-screen bg-slate-50 relative selection:bg-sky-500 selection:text-white">
            <WaterAmbientBackground />
            <SEO
                title={view === 'builders' ? "Top Builders in Pune - Buy Directly | PROPSMART REALTY" : "All Property Projects in Pune - 100% Brokerage Free | PROPSMART REALTY"}
                description="Browse our complete directory of real estate projects and builders in Pune. Buy directly from developers with 100% zero brokerage."
            />
            <PortalNavbar variant="colored" />

            <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 relative z-10">
                <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 text-xs font-black uppercase tracking-wider mb-2 backdrop-blur-md">
                        ✨ 100% Brokerage Free • Buy Directly with Builder
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-8 gap-4">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        {view === 'builders' ? 'Pune Real Estate Developers' : 'Pune Real Estate Directory'}
                    </h1>

                    {/* View Switcher/Tabs */}
                    <div className="flex gap-2 p-1 bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl shadow-glass-sm">
                        <Link
                            to="/directory?view=projects"
                            className={`px-5 py-2.5 rounded-xl font-sans font-bold text-sm transition-all duration-300 ${view !== 'builders' ? 'water-btn text-white shadow-md' : 'text-slate-600 hover:text-sky-600 hover:bg-white/60'}`}
                        >
                            Projects ({validProjects.length})
                        </Link>
                        <Link
                            to="/directory?view=builders"
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
                        {/* 1. Highlighted Locality Cards Section - Distinct images & uniform bold typography */}
                        <section className="mb-12">
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h3 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-amber-500" />
                                        Prime Featured Pune Localities
                                    </h3>
                                    <p className="font-sans text-xs md:text-sm text-slate-500 mt-0.5">Explore key investment zones across West, East, South & PCMC corridors</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {PROPSMART_LOCALITIES.filter(l => l.isFeatured).slice(0, 12).map(loc => (
                                    <LocalityCard key={loc.name} locality={loc} />
                                ))}
                            </div>
                        </section>

                        {/* 2. Standardized Location Filter Tabs/Pills */}
                        <section className="mb-10">
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className="w-4 h-4 text-brand-600" />
                                <span className="font-sans font-extrabold text-xs uppercase tracking-wider text-slate-400">Filter By Location</span>
                            </div>
                            <div className="flex flex-wrap gap-2.5">
                                {locations.map(loc => (
                                    <Link
                                        key={loc.id}
                                        to={`/search?location=${encodeURIComponent(loc.name)}`}
                                        className="inline-flex items-center gap-2 px-3.5 py-2 glass-pill hover:border-sky-300 hover:shadow-md transition-all group"
                                    >
                                        <img
                                            src={getLocalityImageUrl(loc.name)}
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
                        </section>

                        {/* 3. Projects Grid */}
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {validProjects.map(project => (
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
