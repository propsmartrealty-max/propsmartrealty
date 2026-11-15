import React from 'react';
import { Link } from 'react-router-dom';
import { getLocalityImageUrl, LOCALITY_TYPOGRAPHY, LocalityItem } from '../../utils/localityUtils';
import { MapPin, TrendingUp, Sparkles } from 'lucide-react';

interface LocalityCardProps {
    locality: {
        name: string;
        image?: string;
        price?: string;
        count?: number;
        avgPriceSqft?: number;
        tagline?: string;
        isFeatured?: boolean;
        zone?: string;
    };
    variant?: 'compact' | 'standard';
    className?: string;
}

export const LocalityCard: React.FC<LocalityCardProps> = ({
    locality,
    variant = 'standard',
    className = ''
}) => {
    // Resolve distinct, zero-dependency local vector image
    const resolvedImage = locality.image && !locality.image.includes('unsplash.com')
        ? locality.image
        : getLocalityImageUrl(locality.name);

    const priceLabel = locality.price || (locality.avgPriceSqft ? `₹${(locality.avgPriceSqft / 1000).toFixed(1)}k/sq.ft` : '₹8.5k/sq.ft');
    const projectCount = locality.count ?? 25;

    return (
        <Link
            to={`/search?location=${encodeURIComponent(locality.name)}`}
            className={`group cursor-pointer block ${className}`}
            title={`Explore property projects in ${locality.name}, Pune`}
        >
            <div className={`relative rounded-3xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border bg-slate-900 water-shimmer ${
                locality.isFeatured
                    ? 'border-amber-400/50 hover:border-amber-300 shadow-amber-900/10'
                    : 'border-white/20 hover:border-sky-300 shadow-sky-900/10'
            }`}>
                {/* 1. Distinct Locality Cover Image */}
                <img
                    src={resolvedImage}
                    alt={`${locality.name} real estate locality Pune`}
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/localities/baner.svg';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* 2. Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                {/* 3. Top Header: Tag & Price aligned in a single flex row (never overlaps) */}
                <div className="absolute top-2.5 inset-x-2.5 z-10 flex items-center justify-between gap-1 pointer-events-none">
                    {locality.isFeatured ? (
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-sans font-black text-[9.5px] px-2 py-0.5 rounded-full border border-amber-300 shadow-md backdrop-blur-md tracking-tight shrink-0">
                            <Sparkles className="w-2.5 h-2.5 text-slate-950 fill-amber-300" />
                            <span>Prime</span>
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 bg-slate-950/70 backdrop-blur-md text-sky-300 font-sans font-bold text-[9.5px] px-2 py-0.5 rounded-full border border-white/15 shrink-0 truncate max-w-[75px]">
                            <MapPin className="w-2.5 h-2.5 text-sky-400 shrink-0" />
                            <span className="truncate">{locality.zone || 'Pune'}</span>
                        </span>
                    )}

                    <span className="inline-flex items-center bg-sky-600/95 backdrop-blur-md text-white font-sans font-extrabold text-[10px] px-2 py-0.5 rounded-full shadow-md border border-white/25 tracking-tight shrink-0 ml-auto whitespace-nowrap">
                        {priceLabel}
                    </span>
                </div>

                {/* 5. Bottom Locality Highlight Text */}
                <div className="absolute bottom-3 left-3 right-3 z-10 text-white pointer-events-none">
                    {/* Consistent bold locality title across website */}
                    <h4 className="font-sans font-black text-base sm:text-lg tracking-tight text-white mb-0.5 drop-shadow-md group-hover:text-sky-300 transition-colors line-clamp-1 flex items-center justify-between">
                        <span className="truncate">{locality.name}</span>
                        {locality.isFeatured && (
                            <span className="text-amber-400 text-xs font-bold font-sans ml-1 shrink-0">★</span>
                        )}
                    </h4>

                    {locality.tagline && (
                        <p className="text-[10.5px] text-slate-300 font-medium line-clamp-1 mb-1.5 opacity-90 truncate">
                            {locality.tagline}
                        </p>
                    )}

                    {/* Metadata strip */}
                    <div className="flex items-center justify-between text-xs text-white/90 gap-1">
                        <span className="font-sans font-bold text-[10.5px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/20 shrink-0">
                            {projectCount} Projects
                        </span>
                        <span className="text-[10.5px] font-semibold text-emerald-300 flex items-center gap-1 shrink-0">
                            <TrendingUp className="w-3 h-3 shrink-0" /> High Growth
                        </span>
                    </div>
                </div>

                {/* Subtle active accent bottom line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    locality.isFeatured
                        ? 'from-amber-400 via-amber-300 to-amber-500'
                        : 'from-amber-400 via-brand-500 to-accent-500'
                }`} />
            </div>
        </Link>
    );
};

export default LocalityCard;
