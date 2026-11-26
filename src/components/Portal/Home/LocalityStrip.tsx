import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LocalityCard from '../LocalityCard';
import { 
    PROPSMART_LOCALITIES, 
    getLocalityImageUrl, 
    LocalityItem, 
    SUPPORTED_CITIES, 
    CITY_CONFIG, 
    getCityZones 
} from '../../../utils/localityUtils';
import { Compass, ChevronRight, Sparkles, MapPin, Building2 } from 'lucide-react';
import { cloudflare } from '../../../services/cloudflare';

const LocalityStrip: React.FC = () => {
    const [selectedCity, setSelectedCity] = useState<string>('Pune');
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
                            city: l.city || defaultMatch?.city || 'Pune',
                            zone: l.zone || defaultMatch?.zone || 'West Pune',
                            isFeatured: l.isFeatured ?? l.is_featured ?? defaultMatch?.isFeatured ?? false,
                            image: (l.imageUrl && !l.imageUrl.includes('unsplash.com')) 
                                ? l.imageUrl 
                                : ((l.image_url && !l.image_url.includes('unsplash.com')) ? l.image_url : getLocalityImageUrl(l.name)),
                            price: l.avgPriceSqft 
                                ? `₹${(l.avgPriceSqft / 1000).toFixed(1)}k/sq.ft` 
                                : (l.avg_price_sqft ? `₹${(l.avg_price_sqft / 1000).toFixed(1)}k/sq.ft` : (defaultMatch?.price || '₹8.5k/sq.ft')),
                            avgPriceSqft: l.avgPriceSqft || l.avg_price_sqft || defaultMatch?.avgPriceSqft || 8500,
                            count: l.projectCount || l.project_count || defaultMatch?.count || 0,
                            appreciationRate: l.appreciation_rate || defaultMatch?.appreciationRate || 7.5,
                            tagline: l.tagline || defaultMatch?.tagline || 'High Growth Corridor',
                            description: l.description || defaultMatch?.description || ''
                        };
                    });

                    // Ensure all canonical rich localities from PROPSMART_LOCALITIES are present
                    const existingNames = new Set(mapped.map(m => m.name.toLowerCase()));
                    const defaultsToAdd = PROPSMART_LOCALITIES.filter(d => !existingNames.has(d.name.toLowerCase()));
                    setLocalities([...mapped, ...defaultsToAdd]);
                } else {
                    setLocalities(PROPSMART_LOCALITIES);
                }
            } catch (_err) {
                setLocalities(PROPSMART_LOCALITIES);
            }
        };
        fetchLocalities();
    }, []);

    // Filter localities for active city
    const cityLocalities = React.useMemo(() => {
        return localities.filter(l => l.city.toLowerCase() === selectedCity.toLowerCase());
    }, [localities, selectedCity]);

    // Available zones for active city
    const availableZones = React.useMemo(() => {
        return getCityZones(selectedCity);
    }, [selectedCity]);

    // Filtered localities based on zone
    const displayedLocalities = React.useMemo(() => {
        if (activeZone === 'featured') {
            const featured = cityLocalities.filter(l => l.isFeatured);
            return (featured.length > 0 ? featured : cityLocalities).slice(0, 12);
        }
        if (activeZone === 'all') {
            return cityLocalities.slice(0, 12);
        }

        // Zone mapping for Pune
        if (selectedCity === 'Pune') {
            if (activeZone === 'west') return cityLocalities.filter(l => l.zone === 'West Pune').slice(0, 12);
            if (activeZone === 'east') return cityLocalities.filter(l => l.zone === 'East Pune').slice(0, 12);
            if (activeZone === 'south') return cityLocalities.filter(l => l.zone === 'South & Central').slice(0, 12);
            if (activeZone === 'north') return cityLocalities.filter(l => l.zone.includes('North') || l.zone.includes('PCMC')).slice(0, 12);
        }

        // Zone mapping for Mumbai
        if (selectedCity === 'Mumbai') {
            if (activeZone === 'western') return cityLocalities.filter(l => l.zone === 'Western Suburbs').slice(0, 12);
            if (activeZone === 'central') return cityLocalities.filter(l => l.zone === 'Central Mumbai' || l.zone === 'Central Suburbs').slice(0, 12);
            if (activeZone === 'south') return cityLocalities.filter(l => l.zone === 'South Mumbai').slice(0, 12);
        }

        // Zone mapping for Thane
        if (selectedCity === 'Thane') {
            if (activeZone === 'thane-west') return cityLocalities.filter(l => l.zone === 'Thane West').slice(0, 12);
            if (activeZone === 'extension') return cityLocalities.filter(l => l.zone === 'Thane Extension').slice(0, 12);
        }

        return cityLocalities.slice(0, 12);
    }, [cityLocalities, activeZone, selectedCity]);

    // Micro markets filtered by quick search box
    const filteredMicroMarkets = React.useMemo(() => {
        if (!filterQuery.trim()) return cityLocalities;
        const q = filterQuery.toLowerCase().trim();
        return cityLocalities.filter(l =>
            l.name.toLowerCase().includes(q) ||
            l.zone.toLowerCase().includes(q) ||
            (l.tagline && l.tagline.toLowerCase().includes(q))
        );
    }, [cityLocalities, filterQuery]);

    const activeMeta = CITY_CONFIG[selectedCity] || CITY_CONFIG['Pune'];

    return (
        <section className="py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-1.5 text-accent-600 font-sans font-extrabold tracking-widest text-xs uppercase mb-2 px-3 py-1 bg-accent-50 rounded-full border border-accent-200">
                        <Compass className="w-3.5 h-3.5 text-accent-600" />
                        Explore By City & Micro-Market
                    </span>
                    <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight flex items-center justify-center gap-2">
                        <span>{activeMeta.icon}</span>
                        <span>Popular Micro-Markets in {selectedCity}</span>
                    </h2>
                    <p className="font-sans text-slate-700 font-medium text-sm md:text-base mt-2 max-w-2xl mx-auto">
                        {activeMeta.subtext} with live capital appreciation and 100% direct developer pricing.
                    </p>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-brand-600 to-accent-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* 1. City Segregation Switcher Pills */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
                    {SUPPORTED_CITIES.map((city) => {
                        const isSelected = selectedCity === city;
                        const count = localities.filter(l => l.city.toLowerCase() === city.toLowerCase()).length;
                        const meta = CITY_CONFIG[city];
                        return (
                            <button
                                key={city}
                                onClick={() => {
                                    setSelectedCity(city);
                                    setActiveZone('featured');
                                    setFilterQuery('');
                                }}
                                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl font-sans font-bold text-sm transition-all duration-300 ${
                                    isSelected
                                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-105 border border-slate-900'
                                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-950 border border-slate-200/80'
                                }`}
                            >
                                <span className="text-base">{meta?.icon || '📍'}</span>
                                <span>{city}</span>
                                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${
                                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-900'
                                }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* 2. City-Specific Zone Filter Tabs */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                    {availableZones.map((zone) => {
                        const isActive = activeZone === zone.id;
                        return (
                            <button
                                key={zone.id}
                                onClick={() => setActiveZone(zone.id)}
                                className={`font-sans font-bold text-sm tracking-tight px-4 py-2 rounded-full transition-all duration-200 ${
                                    isActive
                                        ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20 scale-105'
                                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200 hover:text-slate-950'
                                }`}
                            >
                                {zone.label}
                            </button>
                        );
                    })}
                </div>

                {/* 3. Prominent Locality Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-5">
                    {displayedLocalities.map((loc) => (
                        <LocalityCard key={loc.id || loc.name} locality={loc} />
                    ))}
                </div>

                {/* 4. Interactive All Micro-Markets Directory Quick-Pill Strip */}
                <div className="mt-12 p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <h3 className="font-sans font-extrabold text-sm md:text-base text-slate-900 tracking-tight">
                                Complete {selectedCity} Micro-Markets Index ({cityLocalities.length} Localities)
                            </h3>
                        </div>
                        <div className="w-full sm:w-64">
                            <input
                                type="text"
                                placeholder={`Search in ${selectedCity}...`}
                                value={filterQuery}
                                onChange={(e) => setFilterQuery(e.target.value)}
                                className="w-full text-base sm:text-xs font-semibold px-3.5 py-2 sm:py-1.5 rounded-full border border-slate-300 bg-white text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-brand-500"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2.5 max-h-48 overflow-y-auto pr-1">
                        {filteredMicroMarkets.map((loc) => (
                            <Link
                                key={loc.id || loc.name}
                                to={`/search?city=${encodeURIComponent(selectedCity)}&location=${encodeURIComponent(loc.name)}`}
                                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold transition-all border min-h-[36px] ${
                                    loc.isFeatured
                                        ? 'bg-amber-50/80 text-slate-900 border-amber-300 hover:bg-amber-100 hover:border-amber-400 shadow-xs'
                                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                                }`}
                                title={`${loc.name} (${selectedCity}) - ${loc.tagline || ''} (${loc.price})`}
                            >
                                <img
                                    src={getLocalityImageUrl(loc.name)}
                                    alt=""
                                    className="w-4 h-4 rounded-full object-cover shrink-0"
                                />
                                <span>{loc.name}</span>
                                {loc.isFeatured && (
                                    <span className="text-[10px] text-amber-700 font-extrabold">★</span>
                                )}
                                {loc.count > 0 && (
                                    <span className="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.2 rounded-full font-bold">
                                        {loc.count}
                                    </span>
                                )}
                                <span className="text-[10px] text-slate-600 font-semibold">({loc.price})</span>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* View All Localities Link */}
                <div className="mt-8 text-center">
                    <Link
                        to={`/directory?city=${encodeURIComponent(selectedCity)}`}
                        className="inline-flex items-center gap-2 font-sans font-bold text-sm text-brand-600 hover:text-brand-700 bg-brand-50 hover:bg-brand-100 px-6 py-3 min-h-[48px] rounded-full transition-all border border-brand-200/60 shadow-sm group"
                    >
                        <Building2 className="w-4 h-4" />
                        <span>View All {selectedCity} Properties &amp; Localities Directory</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default LocalityStrip;
