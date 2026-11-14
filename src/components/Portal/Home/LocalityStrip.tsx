import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocalityCard from '../LocalityCard';
import { PROPSMART_LOCALITIES, getLocalityImageUrl } from '../../../utils/localityUtils';
import { Compass, ChevronRight } from 'lucide-react';
import { cloudflare } from '../../../services/cloudflare';

const ZONES = [
    { id: 'all', label: 'All Prime Localities' },
    { id: 'west', label: 'West Pune (IT Hubs)' },
    { id: 'east', label: 'East Pune (Cyber Corridor)' },
    { id: 'central', label: 'Central & Expressway' },
];

const ZONE_LOCALITIES: Record<string, string[]> = {
    west: ['Baner', 'Hinjewadi', 'Wakad', 'Balewadi', 'Mahalunge', 'Bavdhan'],
    east: ['Kharadi', 'Viman Nagar', 'Magarpatta City', 'Hadapsar', 'Wagholi', 'Koregaon Park'],
    central: ['Koregaon Park', 'Baner', 'Wakad', 'Bavdhan', 'Ravet', 'Hinjewadi'],
};

const LocalityStrip: React.FC = () => {
    const [activeZone, setActiveZone] = useState('all');
    const [localities, setLocalities] = useState(PROPSMART_LOCALITIES);

    useEffect(() => {
        const fetchLocalities = async () => {
            try {
                const { data, error } = await cloudflare
                    .from('localities')
                    .select('*')
                    .order('name');

                if (!error && data && data.length > 0) {
                    const mapped = data.map((l: any) => ({
                        id: String(l.id || l.name),
                        name: l.name,
                        slug: l.name.toLowerCase().replace(/\s+/g, '-'),
                        image: (l.imageUrl && !l.imageUrl.includes('unsplash.com')) ? l.imageUrl : getLocalityImageUrl(l.name),
                        price: l.avgPriceSqft ? `₹${(l.avgPriceSqft / 1000).toFixed(1)}k/sq.ft` : (l.averagePrice || '₹8.5k/sq.ft'),
                        avgPriceSqft: l.avgPriceSqft || 8500,
                        count: l.projectCount || 25,
                        appreciationRate: l.appreciation_rate || 7.5,
                        tagline: 'High Growth Corridor'
                    }));

                    // Ensure default rich localities are included
                    const existingNames = new Set(mapped.map(m => m.name.toLowerCase()));
                    const defaultsToAdd = PROPSMART_LOCALITIES.filter(d => !existingNames.has(d.name.toLowerCase()));
                    setLocalities([...mapped, ...defaultsToAdd]);
                } else {
                    setLocalities(PROPSMART_LOCALITIES);
                }
            } catch (err) {
                console.warn('LocalityStrip using verified defaults:', err);
                setLocalities(PROPSMART_LOCALITIES);
            }
        };
        fetchLocalities();
    }, []);

    const displayedLocalities = React.useMemo(() => {
        if (activeZone === 'all') {
            return localities.slice(0, 6);
        }
        const allowedNames = new Set(ZONE_LOCALITIES[activeZone] || []);
        const filtered = localities.filter(l => allowedNames.has(l.name));
        return filtered.length > 0 ? filtered.slice(0, 6) : localities.slice(0, 6);
    }, [localities, activeZone]);

    return (
        <section className="py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-1.5 text-accent-600 font-sans font-extrabold tracking-widest text-xs uppercase mb-2 px-3 py-1 bg-accent-50 rounded-full border border-accent-200">
                        <Compass className="w-3.5 h-3.5 text-accent-600" />
                        Explore By Micro-Market
                    </span>
                    <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">
                        Popular Localities in Pune
                    </h3>
                    <p className="font-sans text-slate-500 text-sm md:text-base mt-2 max-w-xl mx-auto">
                        Discover top investment corridors with live capital values and verified MahaRERA developments.
                    </p>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-brand-600 to-accent-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Highlighted Micro-Market Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {ZONES.map((zone) => {
                        const isActive = activeZone === zone.id;
                        return (
                            <button
                                key={zone.id}
                                onClick={() => setActiveZone(zone.id)}
                                className={`font-sans font-bold text-sm tracking-tight px-4 py-2 rounded-full transition-all duration-200 ${isActive
                                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 scale-105'
                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                    }`}
                            >
                                {zone.label}
                            </button>
                        );
                    })}
                </div>

                {/* 6 Prominent Locality Cards Grid - Each with distinct image and standardized bold typography */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {displayedLocalities.map((loc) => (
                        <LocalityCard key={loc.name} locality={loc} />
                    ))}
                </div>

                {/* View All Localities Link */}
                <div className="mt-10 text-center">
                    <Link
                        to="/directory?view=projects"
                        className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-6 py-2.5 rounded-full transition-all border border-brand-200/60 shadow-sm group"
                    >
                        <span>View All Pune Localities & Projects</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LocalityStrip;
