import React, { useState, useMemo } from 'react';
import {
    Waves, Dumbbell, Castle, Footprints, Gamepad2, Film, UtensilsCrossed, Flower2,
    HeartPulse, Droplets, Zap, ShieldCheck, ArrowUpDown, Car, Trophy, BookOpen,
    Sparkles, Flame, Wifi, Recycle, Sun, Coffee, CheckCircle2, Trees, Shield, Sparkle
} from 'lucide-react';

interface AmenitiesInfographicProps {
    features: string[];
    projectTitle?: string;
}

interface AmenityConfig {
    icon: React.ComponentType<{ className?: string }>;
    category: 'Wellness & Aqua' | 'Fitness & Sports' | 'Community & Leisure' | 'Safety & Eco';
    color: string;
    bg: string;
    border: string;
    accentText: string;
}

const resolveAmenityConfig = (name: string): AmenityConfig => {
    const n = name.toLowerCase();

    if (n.includes('pool') || n.includes('swim') || n.includes('aqua') || n.includes('jacuzzi') || n.includes('spa')) {
        return {
            icon: n.includes('jacuzzi') || n.includes('spa') ? Sparkles : Waves,
            category: 'Wellness & Aqua',
            color: 'text-cyan-600',
            bg: 'bg-cyan-50 group-hover:bg-cyan-600 group-hover:text-white',
            border: 'border-cyan-100 hover:border-cyan-300',
            accentText: 'Aquatic Leisure'
        };
    }

    if (n.includes('gym') || n.includes('fitness') || n.includes('jogging') || n.includes('track') || n.includes('court') || n.includes('sport') || n.includes('tennis') || n.includes('badminton')) {
        return {
            icon: n.includes('jogging') || n.includes('track') ? Footprints : (n.includes('court') || n.includes('sport') ? Trophy : Dumbbell),
            category: 'Fitness & Sports',
            color: 'text-amber-600',
            bg: 'bg-amber-50 group-hover:bg-amber-600 group-hover:text-white',
            border: 'border-amber-100 hover:border-amber-300',
            accentText: 'Active Fitness'
        };
    }

    if (n.includes('yoga') || n.includes('reflexology') || n.includes('meditation')) {
        return {
            icon: HeartPulse,
            category: 'Wellness & Aqua',
            color: 'text-teal-600',
            bg: 'bg-teal-50 group-hover:bg-teal-600 group-hover:text-white',
            border: 'border-teal-100 hover:border-teal-300',
            accentText: 'Mind & Body'
        };
    }

    if (n.includes('club') || n.includes('banquet') || n.includes('party') || n.includes('amphi') || n.includes('theatre') || n.includes('library') || n.includes('cafe') || n.includes('cafeteria')) {
        return {
            icon: n.includes('club') ? Castle : (n.includes('amphi') || n.includes('theatre') ? Film : (n.includes('library') ? BookOpen : (n.includes('cafe') ? Coffee : UtensilsCrossed))),
            category: 'Community & Leisure',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50 group-hover:bg-indigo-600 group-hover:text-white',
            border: 'border-indigo-100 hover:border-indigo-300',
            accentText: 'Social Club'
        };
    }

    if (n.includes('kid') || n.includes('play') || n.includes('child')) {
        return {
            icon: Gamepad2,
            category: 'Community & Leisure',
            color: 'text-purple-600',
            bg: 'bg-purple-50 group-hover:bg-purple-600 group-hover:text-white',
            border: 'border-purple-100 hover:border-purple-300',
            accentText: 'Kids & Play'
        };
    }

    if (n.includes('lawn') || n.includes('garden') || n.includes('green') || n.includes('waste') || n.includes('natural') || n.includes('solar')) {
        return {
            icon: n.includes('waste') ? Recycle : (n.includes('natural') || n.includes('solar') ? Sun : Flower2),
            category: 'Safety & Eco',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white',
            border: 'border-emerald-100 hover:border-emerald-300',
            accentText: 'Eco & Green'
        };
    }

    if (n.includes('security') || n.includes('gated') || n.includes('cctv') || n.includes('water') || n.includes('power') || n.includes('backup') || n.includes('lift') || n.includes('parking') || n.includes('gas') || n.includes('wifi')) {
        return {
            icon: (n.includes('security') || n.includes('gated')) ? ShieldCheck : (n.includes('water') ? Droplets : (n.includes('power') || n.includes('backup') ? Zap : (n.includes('lift') ? ArrowUpDown : (n.includes('parking') ? Car : (n.includes('gas') ? Flame : Wifi))))),
            category: 'Safety & Eco',
            color: 'text-slate-700',
            bg: 'bg-slate-100 group-hover:bg-slate-800 group-hover:text-white',
            border: 'border-slate-200 hover:border-slate-400',
            accentText: 'Safety & Infra'
        };
    }

    return {
        icon: Sparkles,
        category: 'Community & Leisure',
        color: 'text-blue-600',
        bg: 'bg-blue-50 group-hover:bg-blue-600 group-hover:text-white',
        border: 'border-blue-100 hover:border-blue-300',
        accentText: 'Lifestyle'
    };
};

const AmenitiesInfographic: React.FC<AmenitiesInfographicProps> = ({ features = [], projectTitle }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const mappedAmenities = useMemo(() => {
        return features.map((feature) => {
            const config = resolveAmenityConfig(feature);
            return {
                name: feature,
                ...config
            };
        });
    }, [features]);

    const categories = ['All', 'Wellness & Aqua', 'Fitness & Sports', 'Community & Leisure', 'Safety & Eco'];

    const filtered = useMemo(() => {
        if (selectedCategory === 'All') return mappedAmenities;
        return mappedAmenities.filter(a => a.category === selectedCategory);
    }, [mappedAmenities, selectedCategory]);

    const stats = useMemo(() => {
        const aquaCount = mappedAmenities.filter(a => a.category === 'Wellness & Aqua').length;
        const sportsCount = mappedAmenities.filter(a => a.category === 'Fitness & Sports').length;
        const communityCount = mappedAmenities.filter(a => a.category === 'Community & Leisure').length;
        const infraCount = mappedAmenities.filter(a => a.category === 'Safety & Eco').length;
        return { aquaCount, sportsCount, communityCount, infraCount };
    }, [mappedAmenities]);

    return (
        <section id="amenities" className="scroll-mt-40">
            {/* Header with Title & Live Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-block mb-2">
                        Resort-Style Living • Sanctioned Amenities
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Amenities & Lifestyle Hub
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                        Curated indoor and outdoor spaces crafted for holistic well-being, fitness, and family leisure.
                    </p>
                </div>

                {/* Counter Pill */}
                <div className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-2xl shadow-sm self-start sm:self-auto shrink-0">
                    <Sparkle className="w-4 h-4 text-amber-400 animate-spin-slow" />
                    <div>
                        <span className="text-sm font-black tracking-wide">{features.length}+ Curated</span>
                        <span className="text-[10px] text-slate-400 block uppercase font-bold">Premium Amenities</span>
                    </div>
                </div>
            </div>

            {/* Infographic Summary Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50/50 border border-cyan-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Waves className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <span className="text-xs font-black text-cyan-950 block truncate">Aqua & Spa</span>
                        <span className="text-[11px] font-semibold text-cyan-700">{stats.aquaCount || 2} Zones</span>
                    </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Dumbbell className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <span className="text-xs font-black text-amber-950 block truncate">Fitness & Sports</span>
                        <span className="text-[11px] font-semibold text-amber-700">{stats.sportsCount || 4} Arenas</span>
                    </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-50 to-violet-50/50 border border-indigo-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Castle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <span className="text-xs font-black text-indigo-950 block truncate">Clubhouse & Social</span>
                        <span className="text-[11px] font-semibold text-indigo-700">{stats.communityCount || 3} Lounges</span>
                    </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                        <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                        <span className="text-xs font-black text-emerald-950 block truncate">24x7 Security & Infra</span>
                        <span className="text-[11px] font-semibold text-emerald-700">3-Tier Guarded</span>
                    </div>
                </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1.5 bg-slate-100/80 rounded-2xl mb-6">
                {categories.map((cat) => {
                    const active = selectedCategory === cat;
                    return (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                                active
                                    ? 'bg-white text-slate-900 shadow-xs'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                            }`}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>

            {/* Dynamic Infographic Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {filtered.map((item, i) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={i}
                            className={`group bg-white rounded-2xl border ${item.border} p-4 shadow-2xs hover:shadow-md transition-all duration-200 flex items-center gap-3.5`}
                        >
                            <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shrink-0 transition-colors duration-200`}>
                                <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                                    {item.accentText}
                                </span>
                                <h4 className="font-bold text-slate-800 text-sm truncate group-hover:text-brand-600 transition-colors">
                                    {item.name}
                                </h4>
                            </div>
                            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AmenitiesInfographic;
