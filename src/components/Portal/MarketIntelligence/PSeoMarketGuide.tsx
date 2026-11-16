import React from 'react';
import { Link } from 'react-router-dom';
import { 
    MapPin, 
    TrendingUp, 
    Building2, 
    ShieldCheck, 
    Sparkles, 
    Train, 
    GraduationCap, 
    Hospital, 
    Compass, 
    CheckCircle2, 
    ArrowRight,
    Coins,
    Layers
} from 'lucide-react';
import { PROPSMART_LOCALITIES, LocalityItem } from '../../../utils/localityUtils';

interface PSeoMarketGuideProps {
    localityName?: string;
    cityName?: string;
    config?: string;
    status?: string;
    budgetLabel?: string;
    builderName?: string;
    projectCount?: number;
}

const PSeoMarketGuide: React.FC<PSeoMarketGuideProps> = ({
    localityName,
    cityName = 'Pune',
    config,
    status,
    budgetLabel,
    builderName,
    projectCount = 12
}) => {
    // Resolve locality info from master dataset
    const matchedLocality: LocalityItem | undefined = React.useMemo(() => {
        if (!localityName) return undefined;
        const norm = localityName.toLowerCase().trim();
        return PROPSMART_LOCALITIES.find(l => 
            l.name.toLowerCase() === norm ||
            l.slug === norm ||
            norm.includes(l.name.toLowerCase()) ||
            l.name.toLowerCase().includes(norm)
        );
    }, [localityName]);

    const targetName = localityName || cityName;
    const targetSlug = targetName.toLowerCase().replace(/\s+/g, '-');
    const avgPrice = matchedLocality?.avgPriceSqft || (cityName === 'Mumbai' ? 32000 : cityName === 'Lonavala' ? 22000 : 8500);
    const appreciationRate = matchedLocality?.appreciationRate || (cityName === 'Pune' ? 9.2 : 8.4);
    const zoneName = matchedLocality?.zone || `${cityName} Metropolitan Region`;
    const tagline = matchedLocality?.tagline || `Prime Real Estate Investment & Residential Corridor in ${cityName}`;

    // Micro-market related corridors for deep internal link mesh
    const relatedLocalities = React.useMemo(() => {
        const targetCity = matchedLocality?.city || cityName || 'Pune';
        if (matchedLocality) {
            const sameZone = PROPSMART_LOCALITIES.filter(l => l.name !== matchedLocality.name && l.city === targetCity && l.zone === matchedLocality.zone);
            const sameCity = PROPSMART_LOCALITIES.filter(l => l.name !== matchedLocality.name && l.city === targetCity && l.zone !== matchedLocality.zone);
            return [...sameZone, ...sameCity].slice(0, 8);
        }
        return PROPSMART_LOCALITIES
            .filter(l => l.city.toLowerCase() === targetCity.toLowerCase())
            .slice(0, 8);
    }, [matchedLocality, cityName]);

    return (
        <section className="mt-12 mb-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-[0_8px_30px_rgba(14,165,233,0.06)] overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-900 text-white p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Programmatic Real Estate Intelligence
                    </span>
                    <span className="text-xs font-bold text-slate-300">
                        MahaRERA Registration: A031262401295
                    </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mt-1">
                    {config ? `${config} in ` : status ? `${status} in ` : builderName ? `${builderName} in ` : 'Property Guide: '}
                    <span className="text-sky-300">{targetName}</span>, {cityName}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
                    {tagline}. Explore direct developer pricing with 100% zero brokerage, verified RERA certificates, sanctioned layout drawings, and complimentary site visits.
                </p>

                {/* Macro Market Metrics Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                        <span className="text-[10.5px] uppercase font-bold text-slate-300 tracking-wider block">Average Rate</span>
                        <span className="text-lg sm:text-xl font-black text-amber-300 mt-0.5 block">
                            ₹{avgPrice.toLocaleString('en-IN')}<span className="text-xs font-normal text-white/80">/sq.ft</span>
                        </span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                        <span className="text-[10.5px] uppercase font-bold text-slate-300 tracking-wider block">3-Yr Growth</span>
                        <span className="text-lg sm:text-xl font-black text-emerald-400 mt-0.5 block">
                            +{appreciationRate}% / yr
                        </span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                        <span className="text-[10.5px] uppercase font-bold text-slate-300 tracking-wider block">Rental Yield</span>
                        <span className="text-lg sm:text-xl font-black text-sky-300 mt-0.5 block">
                            4.5% - 6.2%
                        </span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3.5 border border-white/15">
                        <span className="text-[10.5px] uppercase font-bold text-slate-300 tracking-wider block">Direct Inventory</span>
                        <span className="text-lg sm:text-xl font-black text-white mt-0.5 block">
                            {projectCount}+ Verified
                        </span>
                    </div>
                </div>
            </div>

            {/* Core Advantages Grid */}
            <div className="p-6 sm:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
                            <Coins className="w-5 h-5" />
                        </div>
                        <h3 className="font-sans font-black text-sm text-slate-900 mb-1">
                            100% Zero Buyer Commission
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Buy directly with the authorized developer partner. Pay zero brokerage while receiving guaranteed direct builder rates and payment schemes.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                        <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-3">
                            <Train className="w-5 h-5" />
                        </div>
                        <h3 className="font-sans font-black text-sm text-slate-900 mb-1">
                            Prime Arterial Connectivity
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Connected via high-speed transit corridors including Metro rail links, Outer Ring Road corridors, and express highways with minimal congestion.
                        </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <h3 className="font-sans font-black text-sm text-slate-900 mb-1">
                            MahaRERA Legal Verification
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Every project undergoes title deed verification, RERA layout approval validation, and construction milestone compliance checks.
                        </p>
                    </div>
                </div>

                {/* Programmatic Internal Link Cloud for Maximum Google Crawl Coverage */}
                <div className="border-t border-slate-200 pt-6">
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-sky-500" />
                        High-Intent Searches for {targetName} ({cityName})
                    </h3>
                    
                    {/* Configuration Links */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Link 
                            to={`/1-bhk-flats-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-100 hover:text-sky-800 text-slate-700 transition-colors"
                        >
                            1 BHK Flats in {targetName}
                        </Link>
                        <Link 
                            to={`/2-bhk-flats-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-100 hover:text-sky-800 text-slate-700 transition-colors"
                        >
                            2 BHK Flats in {targetName}
                        </Link>
                        <Link 
                            to={`/3-bhk-flats-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-100 hover:text-sky-800 text-slate-700 transition-colors"
                        >
                            3 BHK Flats in {targetName}
                        </Link>
                        <Link 
                            to={`/4-bhk-flats-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-100 hover:text-sky-800 text-slate-700 transition-colors"
                        >
                            4 BHK Flats in {targetName}
                        </Link>
                        <Link 
                            to={`/villas-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-100 hover:text-sky-800 text-slate-700 transition-colors"
                        >
                            Villas in {targetName}
                        </Link>
                        <Link 
                            to={`/ready-to-move-flats-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 transition-colors"
                        >
                            Ready to Move in {targetName}
                        </Link>
                        <Link 
                            to={`/new-launch-projects-in-${targetSlug}`} 
                            className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 transition-colors"
                        >
                            New Launches in {targetName}
                        </Link>
                    </div>

                    {/* Nearby Micro-Markets Link Cloud */}
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2.5 mt-4 flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-amber-500" />
                        Explore Nearby {zoneName} Corridors
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {relatedLocalities.map(rel => {
                            const relSlug = rel.name.toLowerCase().replace(/\s+/g, '-');
                            return (
                                <Link
                                    key={rel.id}
                                    to={`/flats-in-${relSlug}`}
                                    className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-200 text-slate-600 transition-colors"
                                >
                                    Flats in {rel.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PSeoMarketGuide;
