import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocalityCard from '../LocalityCard';
import { PROPSMART_LOCALITIES, getLocalityImageUrl, LocalityItem } from '../../../utils/localityUtils';
import { Compass, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { cloudflare } from '../../../services/cloudflare';

const ZONES = [
    { id: 'featured', label: '⭐ Featured Prime Corridors' },
    { id: 'west', label: 'West Pune (IT & Expressway)' },
    { id: 'east', label: 'East Pune (Cyber & Airport)' },
    { id: 'south', label: 'South & Central Pune' },
    { id: 'north', label: 'North Pune & PCMC' },
    { id: 'all', label: 'All 48 Micro-Markets' },
];

const LocalityStrip: React.FC = () => {
    const [activeZone, setActiveZone] = useState('featured');
    const [localities, setLocalities] = useState<LocalityItem[]>(PROPSMART_LOCALITIES);
    const [filterQuery, setFilterQuery] = useState('');

    useEffect(() => {
        const fetchLocalities = async () => {
            try {
                const { data, error } = await cloudflare
                    .from('localities')
                    .select('*')
                    .order('name');

                if (!error && data && data.length > 0) {
                    const mapped = data.map((l: any) => {
                        const defaultMatch = PROPSMART_LOCALITIES.find(
                            d => d.name.toLowerCase() === (l.name || '').toLowerCase()
                        );
                        return {
                            id: String(l.id || l.name),
                            name: l.name,
                            slug: l.slug || l.name.toLowerCase().replace(/\s+/g, '-'),
                            zone: l.zone || defaultMatch?.zone || 'West Pune',
                            isFeatured: l.isFeatured ?? defaultMatch?.isFeatured ?? false,
                            image: (l.imageUrl && !l.imageUrl.includes('unsplash.com')) ? l.imageUrl : getLocalityImageUrl(l.name),
                            price: l.avgPriceSqft ? `₹${(l.avgPriceSqft / 1000).toFixed(1)}k/sq.ft` : (l.averagePrice || defaultMatch?.price || '₹8.5k/sq.ft'),
                            avgPriceSqft: l.avgPriceSqft || defaultMatch?.avgPriceSqft || 8500,
                            count: l.projectCount || defaultMatch?.count || 25,
                            appreciationRate: l.appreciation_rate || defaultMatch?.appreciationRate || 7.5,
                            tagline: l.tagline || defaultMatch?.tagline || 'High Growth Corridor',
                            description: l.description || defaultMatch?.description || ''
                        };
                    });

                    // Ensure all rich localities are included
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
        if (activeZone === 'featured') {
            return localities.filter(l => l.isFeatured).slice(0, 12);
        }
        if (activeZone === 'west') {
            return localities.filter(l => l.zone === 'West Pune').slice(0, 12);
        }
        if (activeZone === 'east') {
            return localities.filter(l => l.zone === 'East Pune').slice(0, 12);
        }
        if (activeZone === 'south') {
            return localities.filter(l => l.zone === 'South & Central').slice(0, 12);
        }
        if (activeZone === 'north') {
            return localities.filter(l => l.zone === 'North Pune (PCMC)').slice(0, 12);
        }
        return localities.slice(0, 12);
    }, [localities, activeZone]);

    const filteredMicroMarkets = React.useMemo(() => {
        if (!filterQuery.trim()) return localities;
        const q = filterQuery.toLowerCase().trim();
        return localities.filter(l =>
            l.name.toLowerCase().includes(q) ||
            l.zone.toLowerCase().includes(q) ||
            l.tagline.toLowerCase().includes(q)
        );
    }, [localities, filterQuery]);

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
                    <p className="font-sans text-slate-500 text-sm md:text-base mt-2 max-w-2xl mx-auto">
                        Explore all 48 Pune micro-markets across West, East, South & PCMC corridors with live capital values and verified builder sales.
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

                {/* Prominent Locality Cards Grid - Each with distinct SVG image and standardized bold typography */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {displayedLocalities.map((loc) => (
                        <LocalityCard key={loc.id || loc.name} locality={loc} />
                    ))}
                </div>

                {/* Interactive All Micro-Markets Directory Quick-Pill Strip */}
                <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <h4 className="font-sans font-extrabold text-sm md:text-base text-slate-900 tracking-tight">
                                Complete Pune Micro-Markets Index ({localities.length} Localities)
                            </h4>
                        </div>
                        <div className="w-full sm:w-64">
                            <input
                                type="text"
                                placeholder="Search locality (e.g. Bhugaon, Pashan)..."
                                value={filterQuery}
                                onChange={(e) => setFilterQuery(e.target.value)}
                                className="w-full text-xs font-semibold px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
                        {filteredMicroMarkets.map((loc) => (
                            <Link
                                key={loc.id || loc.name}
                                to={`/search?location=${encodeURIComponent(loc.name)}`}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                                    loc.isFeatured
                                        ? 'bg-amber-50/80 text-slate-900 border-amber-300 hover:bg-amber-100 hover:border-amber-400 shadow-xs'
                                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                                }`}
                                title={`${loc.name} - ${loc.tagline} (${loc.price})`}
                            >
                                <img
                                    src={getLocalityImageUrl(loc.name)}
                                    alt=""
                                    className="w-4 h-4 rounded-full object-cover shrink-0"
                                />
                                <span>{loc.name}</span>
                                {loc.isFeatured && (
                                    <span className="text-[10px] text-amber-600 font-extrabold">★</span>
                                )}
                                <span className="text-[10px] text-slate-400 font-medium">({loc.price})</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* View All Localities Link */}
                <div className="mt-8 text-center">
                    <Link
                        to="/directory?view=projects"
                        className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-6 py-2.5 rounded-full transition-all border border-brand-200/60 shadow-sm group"
                    >
                        <span>View Complete Pune Property Directory</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LocalityStrip;
