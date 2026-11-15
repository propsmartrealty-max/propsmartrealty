import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
    MapPin, 
    Home, 
    CheckCircle2, 
    Building2, 
    QrCode, 
    ShieldCheck, 
    ExternalLink, 
    X, 
    Waves, 
    Dumbbell, 
    Castle, 
    Sparkles, 
    Calendar 
} from 'lucide-react';
import { Project } from '../../types';
import { useData } from '../../context/DataContext';
import DealBadge from './DealBadge';
import LeadForm from './LeadForm';
import { getOptimizedImageUrl } from '../../utils/imageUtils';
import { getProjectQRCodeUrl, getMahaRERAVerificationUrl } from '../../utils/qrUtils';

interface PropertyCardProps {
    project: Project;
    variant?: 'grid' | 'list';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ project, variant = 'grid' }) => {
    const { localities = [], builders = [], compareList = [], addToCompare, removeFromCompare } = useData();
    const [imgSrc, setImgSrc] = useState(() => project?.image ? getOptimizedImageUrl(project.image, 600) : '/images/placeholder-property.svg');
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);

    useEffect(() => {
        if (project?.image) {
            setImgSrc(getOptimizedImageUrl(project.image, 600));
        } else {
            setImgSrc('/images/placeholder-property.svg');
        }
    }, [project?.id, project?.image]);

    // Resolve human-readable builder name (Never display raw ID like b-godrej or b-vtp)
    const resolvedBuilder = useMemo(() => {
        if (!project?.builderId) return null;
        return builders.find(b => b.id === project.builderId);
    }, [builders, project?.builderId]);

    if (!project) return null;

    const projectSlug = project.slug || project.id;
    const projectLink = `/project/${projectSlug}`;
    const isGrid = variant === 'grid';
    const isInCompare = compareList?.includes(project.id);

    const builderName = resolvedBuilder?.name 
        || (project as any).builderName 
        || (project.builderId && !project.builderId.startsWith('b-') ? project.builderId : 'Premium Developer');

    // Resolve locality average price for deal computation
    let localityAvgPrice = 0;
    try {
        const loc = localities?.find(l => l.name?.toLowerCase() === project.location?.toLowerCase());
        localityAvgPrice = loc?.avgPriceSqft || 0;
    } catch {
        localityAvgPrice = 0;
    }

    const qrUrl = getProjectQRCodeUrl(project.slug || project.id, project.reraId);
    const mahaReraLink = getMahaRERAVerificationUrl(project.reraId);

    // Clean, formatted price display
    const formattedPrice = project.exactPrice || project.priceRange || 'Price on Request';

    return (
        <div className={`group glass-card water-card-hover water-shimmer rounded-[1.75rem] overflow-hidden transition-all duration-500 border border-white/80 shadow-[0_4px_24px_rgba(14,165,233,0.06)] hover:border-sky-300 hover:shadow-[0_16px_45px_rgba(14,165,233,0.16)] flex ${
            isGrid 
                ? 'flex-col h-full bg-white/70 backdrop-blur-md' 
                : 'flex-col md:flex-row min-h-[250px] md:h-auto bg-white/70 backdrop-blur-md'
        }`}>

            {/* ================= Image Section ================= */}
            <div className={`relative overflow-hidden shrink-0 ${
                isGrid 
                    ? 'w-full aspect-[16/10]' 
                    : 'w-full md:w-[38%] min-h-[210px] md:min-h-full aspect-[16/10] md:aspect-auto'
            } bg-slate-900`}>
                <Link to={projectLink} className="block h-full w-full">
                    <img
                        src={imgSrc}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                        onError={() => {
                            setImgSrc('/images/placeholder-property.svg');
                        }}
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-black/30 transition-opacity duration-300 group-hover:opacity-90" />
                </Link>

                {/* Top-Left: Sleek Single Luxury Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 flex-wrap max-w-[70%]">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-full backdrop-blur-md bg-emerald-600/90 text-white border border-emerald-400/50 shadow-md uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                        0% Brokerage
                    </span>
                    {project.status === 'New Launch' && (
                        <span className="inline-flex items-center text-[10px] font-black px-2 py-0.5 rounded-full backdrop-blur-md bg-amber-500 text-slate-950 border border-amber-300/80 shadow-xs uppercase tracking-wider">
                            New Launch
                        </span>
                    )}
                </div>

                {/* Top-Right: Compare & Quick QR Triggers */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5">
                    {project.reraId && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowQRModal(true);
                            }}
                            className="p-1.5 rounded-lg bg-slate-950/70 hover:bg-emerald-600 text-white backdrop-blur-md border border-white/20 transition-all shadow-md hover:scale-105 active:scale-95"
                            title="Scan MahaRERA Verification QR"
                        >
                            <QrCode className="w-3.5 h-3.5 text-emerald-300" />
                        </button>
                    )}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (isInCompare) {
                                removeFromCompare(project.id);
                            } else {
                                addToCompare(project.id);
                            }
                        }}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md border transition-all flex items-center gap-1 hover:scale-105 active:scale-95 ${
                            isInCompare
                                ? 'bg-brand-600 text-white border-brand-400 shadow-brand-500/30'
                                : 'bg-slate-950/70 text-white border-white/20 hover:bg-white hover:text-slate-900'
                        }`}
                        title="Add to compare list"
                    >
                        {isInCompare ? (
                            <>
                                <CheckCircle2 className="w-3 h-3 text-emerald-300" /> 
                                <span>Added</span>
                            </>
                        ) : (
                            <>
                                <Building2 className="w-3 h-3 text-slate-300" /> 
                                <span>Compare</span>
                            </>
                        )}
                    </button>
                </div>

                {/* Bottom Image Overlay: Price & Possession (Grid Mode) */}
                {isGrid && (
                    <div className="absolute bottom-0 inset-x-0 p-3 pt-6 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-transparent flex justify-between items-end text-white z-10">
                        <div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 block leading-tight">Starting From</span>
                            <p className="text-lg font-black tracking-tight text-white leading-tight">{formattedPrice}</p>
                        </div>
                        {project.possessionDate && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md border border-white/10 text-slate-200">
                                {project.possessionDate}
                            </span>
                        )}
                    </div>
                )}
            </div>

            {/* ================= Content Section ================= */}
            <div className={`flex-1 flex flex-col justify-between relative ${isGrid ? 'p-4 sm:p-5' : 'p-5 md:p-6'}`}>
                <div>
                    {/* Header: Title, Location & Desktop Price (List View) */}
                    <div className="flex justify-between items-start gap-3 mb-2">
                        <div className="flex-1 min-w-0">
                            <Link to={projectLink} className="block group/title">
                                <h3 className={`font-sans font-black text-slate-900 leading-snug group-hover/title:text-sky-600 transition-colors ${
                                    isGrid ? 'text-base sm:text-lg line-clamp-1' : 'text-lg md:text-xl line-clamp-2'
                                }`}>
                                    {project.title}
                                </h3>
                            </Link>
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm mt-0.5">
                                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-sky-500" />
                                <span className="truncate font-sans font-semibold text-slate-600 text-xs sm:text-sm">
                                    {project.location}
                                    {project.city && project.city !== 'Pune' && (
                                        <span className="ml-1.5 inline-flex items-center text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-100 text-sky-800">
                                            {project.city}
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>

                        {/* Desktop Price Header (List View) */}
                        {!isGrid && (
                            <div className="text-right shrink-0 whitespace-nowrap pl-2">
                                <span className="text-[10px] text-sky-600 font-extrabold uppercase tracking-wider block">Starting From</span>
                                <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{formattedPrice}</p>
                            </div>
                        )}
                    </div>

                    {/* Configurations Chips */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {(project.configurations || []).slice(0, isGrid ? 3 : 5).map((conf, i) => (
                            <span 
                                key={i} 
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-200/70 text-[10.5px] font-bold text-slate-700 shadow-2xs group-hover:border-sky-300 transition-all"
                            >
                                <Home className="w-3 h-3 text-sky-500" /> {conf}
                            </span>
                        ))}
                    </div>

                    {/* Curated Amenity Infographics with Vibrant Icons */}
                    {project.features && project.features.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {project.features.slice(0, isGrid ? 3 : 4).map((feat, i) => {
                                const f = feat.toLowerCase();
                                const isPool = f.includes('pool') || f.includes('swim');
                                const isGym = f.includes('gym') || f.includes('fitness');
                                const isClub = f.includes('club');
                                return (
                                    <span 
                                        key={i} 
                                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/80 backdrop-blur-sm text-[10px] font-semibold text-slate-600 border border-slate-200/70 shadow-2xs"
                                    >
                                        {isPool ? (
                                            <Waves className="w-2.5 h-2.5 text-cyan-500 shrink-0" />
                                        ) : isGym ? (
                                            <Dumbbell className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                                        ) : isClub ? (
                                            <Castle className="w-2.5 h-2.5 text-indigo-500 shrink-0" />
                                        ) : (
                                            <Sparkles className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                                        )}
                                        <span className="truncate max-w-[100px]">{feat}</span>
                                    </span>
                                );
                            })}
                        </div>
                    )}

                    {/* Builder & RERA Compliance Strip (Always clean, never b-godrej) */}
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-600 bg-white/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-2xs">
                        <div className="flex items-center gap-1.5 min-w-0 truncate">
                            <Building2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                            <span className="font-bold text-slate-800 truncate text-[11px] sm:text-xs">
                                {builderName}
                            </span>
                        </div>
                        {project.reraId && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setShowQRModal(true);
                                }}
                                className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 px-2 py-0.5 rounded-md shrink-0 transition-colors shadow-2xs"
                                title={`MahaRERA: ${project.reraId}`}
                            >
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                <span className="truncate max-w-[85px] sm:max-w-[110px]">{project.reraId}</span>
                            </button>
                        )}
                    </div>

                    {/* Possession Date (List View Extra Metric) */}
                    {!isGrid && project.possessionDate && (
                        <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                            <span className="flex items-center gap-1.5 shrink-0">
                                <Calendar className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                                <span>Possession by: <strong className="text-slate-700">{project.possessionDate}</strong></span>
                            </span>
                            {localityAvgPrice > 0 && (
                                <span className="ml-auto shrink-0">
                                    <DealBadge
                                        pricePerSqft={project.pricePerSqft || 0}
                                        localityAvg={localityAvgPrice}
                                    />
                                </span>
                            )}
                        </div>
                    )}
                </div>

                {/* Actions Footer: Unified 2-Button Grid Layout */}
                <div className="mt-4 pt-3 border-t border-slate-100/90 grid grid-cols-2 gap-2">
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setShowLeadForm(true);
                        }}
                        className="water-btn px-3 py-2 rounded-xl border border-sky-200/80 bg-sky-50/80 hover:bg-sky-100 text-sky-700 font-bold text-xs uppercase tracking-wider text-center transition-all shadow-2xs hover:shadow-xs active:scale-95"
                    >
                        Contact
                    </button>
                    <Link
                        to={projectLink}
                        className="water-btn px-3 py-2 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-sky-500/20 hover:shadow-lg active:scale-95"
                    >
                        Details
                    </Link>
                </div>
            </div>

            {/* Direct Builder Lead Modal */}
            <LeadForm
                isOpen={showLeadForm}
                onClose={() => setShowLeadForm(false)}
                type="Site Visit"
                projectTitle={project.title}
                projectId={project.id}
            />

            {/* Quick MahaRERA QR Modal */}
            {showQRModal && (
                <div
                    className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowQRModal(false);
                    }}
                >
                    <div
                        className="glass-panel-elevated rounded-3xl p-6 max-w-xs w-full text-center shadow-2xl relative border border-white/90 bg-white"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setShowQRModal(false)}
                            className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-sky-50"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner border border-emerald-100">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h4 className="font-black text-slate-900 text-base leading-tight mb-1">{project.title}</h4>
                        <p className="text-[11px] text-slate-500 mb-4">Official MahaRERA Regulatory QR Code</p>

                        <div className="w-48 h-48 mx-auto p-2.5 bg-white rounded-2xl border-2 border-slate-900 shadow-md mb-4 relative">
                            <img
                                src={qrUrl}
                                alt={`MahaRERA QR for ${project.title}`}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/qr/propsmart-agent-qr.svg';
                                }}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="text-xs font-mono font-black text-slate-800 bg-slate-50 py-1.5 rounded-lg border border-slate-200/80 mb-4">
                            {project.reraId || 'MahaRERA Registered'}
                        </div>

                        <div className="flex gap-2">
                            <a
                                href={mahaReraLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors flex items-center justify-center gap-1 shadow-md shadow-emerald-900/20"
                            >
                                <span>Verify on RERA</span>
                                <ExternalLink className="w-3 h-3" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setShowQRModal(false)}
                                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyCard;
