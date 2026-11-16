import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Trees, Waves, ArrowRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import PropertyCard from '../PropertyCard';
import { Project } from '../../../types';

interface CityHubSectionProps {
    projects: Project[];
}

export const CITIES_CONFIG = [
    {
        id: 'Pune',
        name: 'Pune Metro',
        badge: 'IT & Township Hub',
        icon: Building2,
        accent: 'from-blue-600 to-indigo-700',
        tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
        description: 'VTP, Kolte-Patil, Godrej, Lodha, Paranjape Schemes, Rohan & Pride Purple townships across Hinjewadi, Kharadi, Baner, Wakad, Mahalunge & Bavdhan.',
        startingPrice: '₹54 L'
    },
    {
        id: 'Mumbai',
        name: 'Mumbai & MMR',
        badge: 'Luxury Landmarks',
        icon: Building2,
        accent: 'from-purple-600 to-indigo-800',
        tagBg: 'bg-purple-50 text-purple-700 border-purple-200',
        description: 'Iconic sea-facing & urban towers by Lodha, Godrej & Paranjape Schemes across Worli, Bandra, Andheri, Powai, and Thane.',
        startingPrice: '₹42 L'
    },
    {
        id: 'Lonavala',
        name: 'Lonavala Hills',
        badge: 'Weekend Hill Estates',
        icon: Trees,
        accent: 'from-emerald-600 to-teal-800',
        tagBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
        description: 'Sahyadri valley villas, nature plots, and scenic weekend second homes along the Mumbai-Pune Expressway corridor.',
        startingPrice: '₹45 L'
    },
    {
        id: 'Alibaug',
        name: 'Alibaug Coastal',
        badge: 'Beachfront Living',
        icon: Waves,
        accent: 'from-cyan-600 to-blue-800',
        tagBg: 'bg-cyan-50 text-cyan-700 border-cyan-200',
        description: 'Private pool beach villas and 7-star branded coastal estates just minutes from Mandwa RORO jetty and Awas Beach.',
        startingPrice: '₹1.45 Cr'
    }
];

const CityHubSection: React.FC<CityHubSectionProps> = ({ projects }) => {
    const [selectedCity, setSelectedCity] = useState<'Pune' | 'Mumbai' | 'Lonavala' | 'Alibaug'>('Pune');

    const activeConfig = CITIES_CONFIG.find(c => c.id === selectedCity) || CITIES_CONFIG[0];

    // Filter projects for the selected city
    const cityProjects = projects.filter(p => (p.city || 'Pune') === selectedCity);
    const displayProjects = cityProjects.slice(0, 6);

    return (
        <section className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        City-Wise Verified Portfolios
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Explore Premier Developments By City
                    </h2>
                    <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                        Direct developer inventory with 100% zero brokerage across Pune's prime IT corridors, Mumbai luxury landmarks, and scenic second-home retreats.
                    </p>
                </div>

                {/* City Selection Tabs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
                    {CITIES_CONFIG.map((c) => {
                        const Icon = c.icon;
                        const isSelected = selectedCity === c.id;
                        const count = projects.filter(p => (p.city || 'Pune') === c.id).length;

                        return (
                            <button
                                key={c.id}
                                onClick={() => setSelectedCity(c.id as any)}
                                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${
                                    isSelected
                                        ? 'bg-slate-900 text-white shadow-xl border-slate-900 scale-[1.02]'
                                        : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:shadow-md'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                                        isSelected ? 'bg-white/10 text-amber-300' : 'bg-slate-100 text-slate-700 group-hover:bg-slate-200'
                                    }`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                                        isSelected ? 'bg-white/15 text-white border-white/20' : c.tagBg
                                    }`}>
                                        {count} Projects
                                    </span>
                                </div>
                                <h3 className="text-base sm:text-lg font-black tracking-tight mb-1">
                                    {c.name}
                                </h3>
                                <p className={`text-xs line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                                    Starting {c.startingPrice}
                                </p>
                                {isSelected && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-emerald-400" />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Active City Description & Stats Bar */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <MapPin className="w-4 h-4 text-brand-600" />
                            <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                                Region Overview: {activeConfig.name}
                            </span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 max-w-3xl">
                            {activeConfig.description}
                        </p>
                    </div>

                    <Link
                        to={`/search?city=${encodeURIComponent(selectedCity)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 text-white font-bold text-sm hover:bg-brand-700 transition-colors shrink-0 shadow-sm"
                    >
                        View All {cityProjects.length} {selectedCity} Projects
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Projects Grid for Selected City */}
                {displayProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayProjects.map((p) => (
                            <PropertyCard key={p.id} project={p} variant="grid" />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300">
                        <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-slate-800">Projects Loading for {selectedCity}</h4>
                        <p className="text-sm text-slate-500 mt-1">Direct builder inventory being updated with MahaRERA clearances.</p>
                    </div>
                )}

                {/* Bottom City CTA Banner */}
                <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10 shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h4 className="text-base font-black">
                                Looking for bespoke project recommendations in {selectedCity}?
                            </h4>
                            <p className="text-xs text-slate-300 mt-0.5">
                                Connect directly with our {selectedCity} builder sales partner team for floor plans, payment schedules, and zero brokerage bookings.
                            </p>
                        </div>
                    </div>
                    <Link
                        to={`/search?city=${encodeURIComponent(selectedCity)}`}
                        className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-amber-50 transition-colors shrink-0 shadow-md"
                    >
                        Browse {selectedCity} Collection
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default CityHubSection;
