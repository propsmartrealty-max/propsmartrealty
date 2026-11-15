import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { Builder } from '../../../types';
import { resolveBuilderLogo } from '../../../utils/builderUtils';

interface BuilderSpotlightProps {
    builders: Builder[];
}

const BuilderSpotlight: React.FC<BuilderSpotlightProps> = ({ builders }) => {
    // Track errored images by builder ID
    const [erroredImages, setErroredImages] = React.useState<Record<string, boolean>>({});

    const handleImageError = (builderId: string) => {
        setErroredImages(prev => ({ ...prev, [builderId]: true }));
    };

    return (
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-brand-900/30 via-brand-800/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-4 py-1.5 rounded-full text-emerald-300 font-sans font-extrabold tracking-widest text-xs uppercase mb-3 backdrop-blur-md shadow-sm">
                        <Award className="w-3.5 h-3.5 text-emerald-400" /> Buy Directly with Builder • 0% Brokerage
                    </span>
                    <h2 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-4">
                        Pune's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-amber-200">Elite Developers</span>
                    </h2>
                    <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
                        Connect directly with the official developer sales lounges of Pune's top builders. 0% Brokerage for buyers, direct sanctioned pricing, and verified MahaRERA sales partnerships.
                    </p>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-brand-500 mx-auto mt-5 rounded-full" />
                </div>

                {/* Developer Grid - High-visibility prominent rectangular logo cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                    {builders.slice(0, 11).map((builder) => {
                        const resolvedLogo = resolveBuilderLogo(builder);
                        const showFallback = !resolvedLogo || erroredImages[builder.id];

                        return (
                            <Link
                                to={`/builder/${builder.slug}`}
                                key={builder.id}
                                className="group relative bg-slate-900/80 border border-white/10 hover:border-amber-400/60 rounded-2xl p-3.5 flex flex-col justify-between hover:bg-slate-850 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/40 backdrop-blur-sm"
                            >
                                {/* Top Mini Verified Badge */}
                                <div className="flex items-center justify-between mb-2.5 px-1">
                                    <span className="inline-flex items-center gap-1 text-[10px] font-sans font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                                        <CheckCircle2 className="w-2.5 h-2.5" /> Verified
                                    </span>
                                    {builder.trustScore && (
                                        <span className="inline-flex items-center gap-0.5 text-[10px] font-sans font-extrabold text-amber-300">
                                            <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                                            {builder.trustScore}
                                        </span>
                                    )}
                                </div>

                                {/* Spacious High-Contrast Logo Showcase Container (Full Color, Big Size, No Grayscale) */}
                                <div className="w-full h-24 sm:h-28 bg-white rounded-xl flex items-center justify-center p-3 shadow-md group-hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-slate-100 group-hover:scale-102">
                                    {showFallback ? (
                                        <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg flex flex-col items-center justify-center p-2 border border-slate-200/60 text-center">
                                            <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight leading-tight line-clamp-2">
                                                {builder.name}
                                            </span>
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-amber-600 mt-1">
                                                Developer Partner
                                            </span>
                                        </div>
                                    ) : (
                                        <img
                                            src={resolvedLogo}
                                            alt={builder.name}
                                            onError={() => handleImageError(builder.id)}
                                            className="w-full h-full max-h-18 object-contain transition-transform duration-300 group-hover:scale-105"
                                        />
                                    )}
                                </div>

                                {/* Builder Title & Project Metrics - Uniform 2-line height alignment */}
                                <div className="text-center mt-3 pt-2 border-t border-white/5 flex flex-col justify-between">
                                    <h4 className="font-sans font-extrabold text-xs sm:text-sm text-white group-hover:text-amber-300 transition-colors line-clamp-2 min-h-[2.5rem] flex items-center justify-center mb-1 leading-snug">
                                        {builder.name}
                                    </h4>
                                    <p className="font-sans font-bold text-[11px] sm:text-xs text-slate-400">
                                        {builder.totalProjects || 20}+ Projects
                                    </p>
                                </div>
                            </Link>
                        );
                    })}

                    {/* View All Developers Card */}
                    <Link
                        to="/directory?view=builders"
                        className="group bg-gradient-to-br from-brand-900/40 via-slate-900 to-slate-950 border border-brand-500/30 hover:border-brand-400 rounded-2xl p-4 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-900/50 shadow-md"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-brand-600/20 border border-brand-500/40 flex items-center justify-center text-brand-300 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-inner mb-3">
                            <span className="text-2xl font-black">+</span>
                        </div>
                        <span className="font-sans font-extrabold text-base text-white group-hover:text-amber-300 mb-1">
                            View All
                        </span>
                        <span className="font-sans font-bold text-[11px] text-brand-400 uppercase tracking-wider">
                            {builders.length > 20 ? `${builders.length}+ Developers` : '290+ Developers'}
                        </span>
                        <ChevronRight className="w-4 h-4 text-brand-400 mt-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BuilderSpotlight;
