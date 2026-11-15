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
            <div className={`relative rounded-2xl overflow-hidden aspect-[4/5] shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border bg-slate-900 ${
                locality.isFeatured
                    ? 'border-amber-400/40 hover:border-amber-400 shadow-amber-900/10'
                    : 'border-slate-200/40 hover:border-brand-400/80'
            }`}>
                {/* 1. Distinct Locality Cover Image */}
                <img
                    src={resolvedImage}
                    alt={`${locality.name} real estate locality Pune`}
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src = getLocalityImageUrl(locality.name);
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* 2. Ambient Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                {/* 3. Top Price Badge */}
                <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="inline-flex items-center gap-1 bg-brand-600/95 backdrop-blur-md text-white font-sans font-extrabold text-xs px-2.5 py-1 rounded-full shadow-md border border-white/20 tracking-tight">
                        {priceLabel}
                    </span>
                </div>

                {/* 4. Top Micro Location / Featured Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                    {locality.isFeatured ? (
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-sans font-extrabold text-[10.5px] px-2.5 py-0.5 rounded-full border border-amber-300 shadow-md backdrop-blur-md tracking-tight">
                            <Sparkles className="w-3 h-3 text-slate-950 fill-amber-300" />
                            <span>Featured Prime</span>
                        </span>
                    ) : (
                        <span className="inline-flex items-center gap-1 bg-slate-950/70 backdrop-blur-md text-amber-300 font-sans font-bold text-[11px] px-2 py-0.5 rounded-full border border-white/10">
                            <MapPin className="w-3 h-3 text-amber-400" />
                            <span>{locality.zone || 'Pune Prime'}</span>
                        </span>
                    )}
                </div>

                {/* 5. Bottom Locality Highlight Text */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    {/* Consistent bold locality title across website */}
                    <h4 className="font-sans font-extrabold text-lg md:text-xl tracking-tight text-white mb-1 drop-shadow-md group-hover:text-amber-300 transition-colors line-clamp-1 flex items-center justify-between">
                        <span>{locality.name}</span>
                        {locality.isFeatured && (
                            <span className="text-amber-400 text-xs font-bold font-sans">★</span>
                        )}
                    </h4>

                    {locality.tagline && (
                        <p className="text-[11px] text-slate-300 font-medium line-clamp-1 mb-1.5 opacity-90">
                            {locality.tagline}
                        </p>
                    )}

                    {/* Metadata strip */}
                    <div className="flex items-center justify-between text-xs text-white/90">
                        <span className="font-sans font-bold text-xs bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                            {projectCount} Projects
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" /> High Growth
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
