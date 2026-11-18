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
    Calendar,
    ArrowRight,
    Maximize2,
    Heart
} from 'lucide-react';
import { Project } from '../../types';
import { useData } from '../../context/DataContext';
import DealBadge from './DealBadge';
import LeadForm from './LeadForm';
import { getOptimizedImageUrl, getResilientFallbackImage, getImageSrcSet, getLqipPlaceholder } from '../../utils/imageUtils';
import { getProjectQRCodeUrl, getMahaRERAVerificationUrl } from '../../utils/qrUtils';
import { getProjectWhatsAppMessage, getWhatsAppUrl } from '../../utils/whatsappUtils';
import { getAllInclusivePricing, getFinalCarpetAreaOnly } from '../../utils/pricingUtils';

interface PropertyCardProps {
    project: Project;
    variant?: 'grid' | 'list';
}

const PropertyCard: React.FC<PropertyCardProps> = ({ project, variant = 'grid' }) => {
    const { localities = [], builders = [], compareList = [], addToCompare, removeFromCompare, toggleFavorite, isFavorite } = useData();
    const isFav = isFavorite ? isFavorite(project.id) : false;
    const [imgSrc, setImgSrc] = useState(() => project?.image ? getOptimizedImageUrl(project.image, 600) : getResilientFallbackImage(project?.id || 'propsmart'));
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);

    useEffect(() => {
        if (project?.image) {
            setImgSrc(getOptimizedImageUrl(project.image, 600));
        } else {
            setImgSrc(getResilientFallbackImage(project?.id || 'propsmart'));
        }
    }, [project?.id, project?.image]);

    // Resolve human-readable builder name (Never display raw ID like b-godrej or b-vtp)
    const resolvedBuilder = useMemo(() => {
        if (!project?.builderId) return null;
        return builders.find(b => b.id === project.builderId);
    }, [builders, project?.builderId]);

    // Honest, All-Inclusive Price calculation (Government Taxes, Stamp Duty & Reg. Included)
    const pricing = useMemo(() => {
        return getAllInclusivePricing(project?.exactPrice, project?.priceRange);
    }, [project?.exactPrice, project?.priceRange]);

    // Total and Final Carpet Area Only (MahaRERA Usable)
    const finalCarpetAreaOnly = useMemo(() => {
        return getFinalCarpetAreaOnly(project?.configurationDetails);
    }, [project?.configurationDetails]);

    // Map each configuration to its authentic, verified MahaRERA carpet area
    const configCarpetMap = useMemo(() => {
        const map: Record<string, string> = {};
        if (!project?.configurationDetails || project.configurationDetails.length === 0) return map;

        const confs = project.configurations || [];
        for (const conf of confs) {
            const confBhkMatch = conf.match(/(\d+(?:\.\d+)?)\s*BHK/i);
            const targetBhk = confBhkMatch ? confBhkMatch[1] : null;

            const matchingCds = (project.configurationDetails || []).filter(cd => {
                if (!cd || !cd.type) return false;
                if (targetBhk) {
                    const cdBhkMatch = cd.type.match(/(\d+(?:\.\d+)?)\s*BHK/i);
                    return Boolean(cdBhkMatch && cdBhkMatch[1] === targetBhk);
                }
                return Boolean(conf && cd.type.toLowerCase().includes(conf.toLowerCase()));
            });

            const areas: number[] = [];
            for (const cd of matchingCds) {
                if (!cd.carpetArea) continue;
                const matches = cd.carpetArea.match(/([0-9,]+)/g);
                if (matches) {
                    for (const m of matches) {
                        const num = parseInt(m.replace(/,/g, ''), 10);
                        if (!isNaN(num) && num > 0) areas.push(num);
                    }
                }
            }

            if (areas.length > 0) {
                const min = Math.min(...areas);
                const max = Math.max(...areas);
                map[conf] = min === max ? `${min} sq.ft` : `${min}-${max} sq.ft`;
            }
        }
        return map;
    }, [project?.configurationDetails, project?.configurations]);

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

    // Direct WhatsApp message pre-filled with project details
    const whatsAppMessage = getProjectWhatsAppMessage(
        project.title, 
        project.location, 
        (project.configurations && project.configurations[0]) || undefined
    );
    const whatsAppUrl = getWhatsAppUrl(whatsAppMessage);

    return (
        <article 
            itemScope 
            itemType="https://schema.org/ApartmentComplex"
            className={`group glass-card water-card-hover water-shimmer rounded-[1.75rem] overflow-hidden transition-all duration-500 border border-white/80 shadow-[0_4px_24px_rgba(14,165,233,0.06)] hover:border-sky-300 hover:shadow-[0_16px_45px_rgba(14,165,233,0.16)] flex ${
                isGrid 
                    ? 'flex-col h-full bg-white/70 backdrop-blur-md' 
                    : 'flex-col md:flex-row min-h-[250px] md:h-auto bg-white/70 backdrop-blur-md'
            }`}
        >
            {/* Google SERP Semantic Metadata */}
            <meta itemProp="name" content={project.title} />
            <meta itemProp="url" content={`https://propsmart.co.in/project/${projectSlug}`} />
            <meta itemProp="image" content={imgSrc} />
            <meta itemProp="description" content={`${project.title} by ${builderName} in ${project.location}, ${project.city || 'Pune'} - 100% Brokerage Free.`} />

            {/* ================= Image Section ================= */}
            <div className={`relative overflow-hidden shrink-0 ${
                isGrid 
                    ? 'w-full aspect-[16/10]' 
                    : 'w-full md:w-72 md:min-w-[280px] lg:w-80 lg:min-w-[300px] aspect-[16/10] md:aspect-auto'
            } bg-slate-900`}>
                <Link to={projectLink} className="block h-full w-full" title={project.title} aria-label={`${project.title} in ${project.location}`}>
                    <img
                        src={imgSrc}
                        srcSet={getImageSrcSet(imgSrc)}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        alt={project.title}
                        width="600"
                        height="375"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        loading="lazy"
                        style={{
                            backgroundImage: `url("${getLqipPlaceholder(project.title)}")`,
                            backgroundSize: 'cover'
                        }}
                        onError={() => {
                            setImgSrc(getResilientFallbackImage(project.id));
                        }}
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-black/25 transition-opacity duration-300 group-hover:opacity-80" />
                </Link>

                {/* Top Header: Unified single flex row (guarantees zero overlap between badges and actions) */}
                <div className="absolute top-3 inset-x-3 z-20 flex items-center justify-between gap-1.5 pointer-events-none">
                    <div className="flex items-center gap-1.5 min-w-0 pointer-events-auto">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-black px-2.5 py-1 rounded-full backdrop-blur-md bg-emerald-600/90 text-white border border-emerald-400/50 shadow-md uppercase tracking-wider shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                            0% Brokerage
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 pointer-events-auto">
                        {/* Heart / Shortlist Button */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                if (toggleFavorite) toggleFavorite(project.id);
                            }}
                            className={`p-1.5 rounded-lg backdrop-blur-md border transition-all shadow-md hover:scale-110 active:scale-95 ${
                                isFav
                                    ? 'bg-rose-500 text-white border-rose-400 shadow-rose-500/30'
                                    : 'bg-slate-950/70 text-white/90 border-white/20 hover:bg-rose-600 hover:text-white'
                            }`}
                            title={isFav ? "Remove from Shortlist" : "Save to Shortlist"}
                            aria-label={isFav ? "Remove from Shortlist" : "Save to Shortlist"}
                        >
                            <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-current text-white' : 'stroke-[2.2]'}`} />
                        </button>

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
                </div>

                {/* Bottom Image Overlay: Status Badge (Left) & Clean Possession Badge (Right) */}
                <div className="absolute bottom-2.5 inset-x-2.5 z-10 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="pointer-events-auto">
                        {project.status === 'New Launch' ? (
                            <span className="inline-flex items-center gap-1 text-[9.5px] font-black px-2 py-0.5 rounded-md backdrop-blur-md bg-amber-500 text-slate-950 border border-amber-300/80 shadow-xs uppercase tracking-wider shrink-0">
                                <Sparkles className="w-2.5 h-2.5" /> New Launch
                            </span>
                        ) : project.status === 'Ready to Move' ? (
                            <span className="inline-flex items-center gap-1 text-[9.5px] font-black px-2 py-0.5 rounded-md backdrop-blur-md bg-emerald-500 text-white border border-emerald-300/80 shadow-xs uppercase tracking-wider shrink-0">
                                <CheckCircle2 className="w-2.5 h-2.5" /> Ready to Move
                            </span>
                        ) : null}
                    </div>

                    {project.possessionDate && (
                        <span className="text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-slate-950/80 backdrop-blur-md border border-white/15 text-slate-200 shadow-sm shrink-0">
                            Possession: {project.possessionDate}
                        </span>
                    )}
                </div>
            </div>

            {/* ================= Content Section ================= */}
            <div className={`flex-1 flex flex-col justify-between relative ${isGrid ? 'p-4 sm:p-5' : 'p-5 md:p-6'}`}>
                <div>
                    {/* Header: Developer Byline, Title & Location (Full Width, Zero Collisions) */}
                    <div>
                        <div itemProp="brand" itemScope itemType="https://schema.org/Brand" className="text-[10px] sm:text-[10.5px] uppercase font-black tracking-wider text-sky-600 truncate mb-1">
                            <span itemProp="name">{builderName}</span>
                        </div>
                        <Link to={projectLink} className="block group/title" title={project.title} aria-label={project.title} itemProp="url">
                            <h3 itemProp="name" className={`font-sans font-black text-slate-900 leading-snug group-hover/title:text-sky-600 transition-colors ${
                                isGrid ? 'text-base sm:text-lg line-clamp-1' : 'text-lg md:text-xl line-clamp-2'
                            }`} title={project.title}>
                                {project.title}
                            </h3>
                        </Link>
                        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress" className="flex items-center gap-1.5 text-slate-500 text-xs sm:text-sm mt-1">
                            <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-sky-500" />
                            <span itemProp="addressLocality" className="truncate font-sans font-semibold text-slate-600 text-xs sm:text-sm">
                                {project.location}
                                {project.city && project.city !== 'Pune' && (
                                    <span itemProp="addressRegion" className="ml-1.5 inline-flex items-center text-[10px] font-bold px-1.5 py-0.2 rounded bg-sky-100 text-sky-800">
                                        {project.city}
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>

                    {/* Dedicated All-Inclusive Price Row (Prominent, High Contrast, 100% Collision-Free) */}
                    <div className="mt-3 p-2.5 rounded-xl bg-slate-50/90 border border-slate-200/70 flex items-baseline justify-between gap-2 shadow-2xs">
                        <div className="min-w-0">
                            <span className="text-[9.5px] uppercase font-black tracking-wider text-emerald-700 flex items-center gap-1 leading-tight">
                                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                                All-Inclusive Price
                            </span>
                            <p className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight truncate">
                                {pricing.allInclusiveDisplay}
                            </p>
                            {pricing.isRange && (
                                <span className="text-[10px] text-emerald-700 font-bold block mt-0.5 truncate">
                                    {pricing.startingAllInclusive}
                                </span>
                            )}
                            <span className="text-[9px] text-slate-400 font-semibold block mt-0.5">
                                Taxes, Stamp Duty & Registration Included • 0% Brokerage
                            </span>
                        </div>
                        {project.pricePerSqft && (
                            <span className="text-[10.5px] font-bold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md border border-sky-200/70 shrink-0">
                                ₹{project.pricePerSqft.toLocaleString('en-IN')}/sqft
                            </span>
                        )}
                    </div>

                    {/* Carpet Area & Configurations Row */}
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                        {finalCarpetAreaOnly && (
                            <span 
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50/90 border border-emerald-200/80 text-[10.5px] font-black text-emerald-800 shadow-2xs shrink-0" 
                                title="Sanctioned MahaRERA Usable Carpet Area"
                            >
                                <Maximize2 className="w-3 h-3 text-emerald-600" /> {finalCarpetAreaOnly}
                            </span>
                        )}
                        {(project.configurations || []).slice(0, isGrid ? 2 : 4).map((conf, i) => {
                            const carpet = configCarpetMap[conf] ||
                                project.configurationDetails?.find(cd => Boolean(cd?.type && conf && cd.type.toLowerCase().includes(conf.toLowerCase())))?.carpetArea;
                            return (
                                <span 
                                    key={i} 
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50/80 border border-sky-200/70 text-[10.5px] font-bold text-slate-700 shadow-2xs group-hover:border-sky-300 transition-all shrink-0"
                                    title={carpet ? `${conf}: ${carpet} MahaRERA Usable Carpet Area` : conf}
                                >
                                    <Home className="w-3 h-3 text-sky-500" />
                                    <span>{conf}{carpet ? ` (${carpet})` : ''}</span>
                                </span>
                            );
                        })}
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

                {/* Actions Footer: Direct 1-Click WhatsApp + Details Buttons */}
                <div className="mt-4 pt-3 border-t border-slate-100/90 grid grid-cols-2 gap-2">
                    <a
                        href={whatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-xs hover:shadow-md flex items-center justify-center gap-1.5 active:scale-95"
                        title={`Inquire on WhatsApp about ${project.title}`}
                    >
                        <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        <span>WhatsApp</span>
                    </a>
                    <Link
                        to={projectLink}
                        className="px-3 py-2 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-sky-500/20 hover:shadow-lg active:scale-95 flex items-center justify-center gap-1"
                    >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
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

                        <a 
                            href={mahaReraLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Click to open official MahaRERA project verification for ${project.title}`}
                            className="w-48 h-48 mx-auto p-2.5 bg-white rounded-2xl border-2 border-slate-900 shadow-md mb-4 relative block group hover:scale-[1.03] transition-all cursor-pointer"
                        >
                            <img
                                src={qrUrl}
                                alt={`MahaRERA QR for ${project.title}`}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/qr/propsmart-agent-qr.svg';
                                }}
                                className="w-full h-full object-contain"
                            />
                            <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center text-white p-2">
                                <ExternalLink className="w-5 h-5 text-emerald-400 mb-1" />
                                <span className="text-[10px] font-black uppercase tracking-wider text-center">Click to open MahaRERA portal</span>
                            </div>
                        </a>

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
        </article>
    );
};

export default PropertyCard;
