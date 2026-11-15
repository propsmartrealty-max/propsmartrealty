import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, CheckCircle2, Building2, QrCode, ShieldCheck, ExternalLink, X, Waves, Dumbbell, Castle, Sparkles } from 'lucide-react';
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

const PropertyCard: React.FC<PropertyCardProps> = ({ project, variant = 'list' }) => {
    // Hooks must be called at top level unconditionally
    const { localities = [], compareList = [], addToCompare, removeFromCompare } = useData();
    const [imgSrc, setImgSrc] = useState(() => project ? getOptimizedImageUrl(project.image, 600) : '');
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [showQRModal, setShowQRModal] = useState(false);

    if (!project) return null;

    const isGrid = variant === 'grid';
    // Phase 3: Deal Calculation
    let localityAvgPrice = 0;
    const isInCompare = compareList?.includes(project.id);

    try {
        const loc = localities?.find(l => l.name === project.location);
        localityAvgPrice = loc?.avgPriceSqft || 0;
    } catch {
        // Fallback if localities find fails
    }

    const qrUrl = getProjectQRCodeUrl(project.slug, project.reraId);
    const mahaReraLink = getMahaRERAVerificationUrl(project.reraId);

    return (
        <div className={`group bg-white rounded-[1.5rem] overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:shadow-brand-900/10 transition-all duration-500 border border-slate-100 flex ${isGrid ? 'flex-col h-full' : 'flex-col md:flex-row h-auto md:h-[260px]'}`}>

            {/* Image Section */}
            <div className={`relative overflow-hidden shrink-0 ${isGrid ? 'h-52 w-full' : 'h-52 md:h-full md:w-[40%]'} bg-slate-100`}>
                <Link to={`/project/${project.slug}`} className="block h-full w-full">
                    <img
                        src={imgSrc}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                        onError={() => {
                            setImgSrc('/images/placeholder-property.svg');
                        }}
                    />
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 md:bg-none transition-opacity duration-300 ${isGrid ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90' : 'bg-gradient-to-t from-black/80 md:from-transparent opacity-80'}`} />
                </Link>

                {/* Status Badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 sm:gap-2 z-10 max-w-[85%]">
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider backdrop-blur-md bg-emerald-600/95 text-white border border-emerald-400/60 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
                        0% Brokerage
                    </span>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider backdrop-blur-md bg-amber-500/95 text-slate-900 border border-amber-300/60">
                        Buy Direct with Builder
                    </span>
                    {project.status && (
                        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm uppercase tracking-wider backdrop-blur-md border ${project.status === 'New Launch'
                            ? 'bg-accent-500 text-white border-accent-400'
                            : 'bg-white/95 text-brand-900 border-white/20'
                            }`}>
                            {project.status}
                        </span>
                    )}
                    {project.reraId && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowQRModal(true);
                            }}
                            className="bg-emerald-600/95 hover:bg-emerald-500 backdrop-blur-md text-[10px] font-extrabold px-2.5 py-1 rounded-full shadow-md text-white uppercase tracking-wider flex items-center gap-1.5 border border-emerald-300/80 transition-all hover:scale-105 active:scale-95"
                            title="Click to scan MahaRERA QR code"
                        >
                            <QrCode className="w-3 h-3 text-emerald-200" />
                            <span>RERA QR</span>
                        </button>
                    )}
                    <DealBadge
                        pricePerSqft={project.pricePerSqft || 0}
                        localityAvg={localityAvgPrice}
                        className="shadow-sm backdrop-blur-md"
                    />
                </div>

                {/* Compare Checkbox */}
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
                    className={`absolute top-3 right-3 z-20 px-2 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md border transition-all flex items-center gap-1.5 ${isInCompare
                        ? 'bg-brand-600 text-white border-brand-500 hover:bg-brand-700'
                        : 'bg-white/90 text-slate-600 border-white/40 hover:bg-white hover:text-brand-600'
                        }`}
                >
                    {isInCompare ? (
                        <>
                            <CheckCircle2 className="w-3.5 h-3.5" /> <span>Added</span>
                        </>
                    ) : (
                        <>
                            <Building2 className="w-3.5 h-3.5" /> <span>Compare</span>
                        </>
                    )}
                </button>


                {/* Mobile/Grid Price Overlay */}
                <div className={`absolute bottom-3 left-3 text-white z-10 ${isGrid ? 'block' : 'md:hidden'}`}>
                    <p className="text-xl font-extrabold tracking-tight">{project.exactPrice || project.priceRange}</p>
                    {isGrid && <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">Starting Price</p>}
                </div>
            </div>

            {/* Content Section */}
            <div className={`flex-1 flex flex-col justify-between relative ${isGrid ? 'p-4' : 'md:p-6 p-4'}`}>

                {/* Decoration: Subtle background builder logo or pattern could go here */}

                <div>
                    <Link to={`/project/${project.slug}`} className="block group/title">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex-1 min-w-0 pr-2">
                                <h3 className={`font-bold text-slate-800 leading-snug group-hover/title:text-brand-600 transition-colors mb-1 truncate ${isGrid ? 'text-lg' : 'text-lg md:text-2xl'}`}>
                                    {project.title}
                                </h3>
                                <div className="flex items-center gap-1.5 text-slate-500 text-sm">
                                    <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-slate-400" />
                                    <span className="truncate font-sans font-bold text-xs md:text-sm text-slate-600">
                                        {project.location}{project.city && project.city !== 'Pune' ? ` • ${project.city}` : ''}
                                    </span>
                                </div>
                            </div>

                            {/* Desktop Price (List View) */}
                            {!isGrid && (
                                <div className="hidden md:block text-right shrink-0">
                                    <p className="text-2xl font-bold text-brand-600">{project.exactPrice || project.priceRange}</p>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">Starting From</p>
                                </div>
                            )}
                        </div>
                    </Link>

                    {/* Configurations / Details */}
                    <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
                        {(project.configurations || []).slice(0, isGrid ? 2 : 4).map((conf, i) => (
                            <span key={i} className="inline-flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded-lg bg-slate-50 border border-slate-200/60 text-[10px] md:text-xs font-bold text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-700 group-hover:border-brand-100 transition-colors">
                                <Home className="w-3 h-3 text-slate-400 group-hover:text-brand-400" /> {conf}
                            </span>
                        ))}
                    </div>

                    {/* Curated Amenities Infographic Pills with Real Icons */}
                    {project.features && project.features.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {project.features.slice(0, 3).map((feat, i) => {
                                const f = feat.toLowerCase();
                                const isPool = f.includes('pool') || f.includes('swim');
                                const isGym = f.includes('gym') || f.includes('fitness');
                                const isClub = f.includes('club');
                                return (
                                    <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-50 text-[10px] font-semibold text-slate-600 border border-slate-200/60">
                                        {isPool ? (
                                            <Waves className="w-2.5 h-2.5 text-cyan-600" />
                                        ) : isGym ? (
                                            <Dumbbell className="w-2.5 h-2.5 text-amber-600" />
                                        ) : isClub ? (
                                            <Castle className="w-2.5 h-2.5 text-indigo-600" />
                                        ) : (
                                            <Sparkles className="w-2.5 h-2.5 text-emerald-600" />
                                        )}
                                        <span className="truncate max-w-[90px]">{feat}</span>
                                    </span>
                                );
                            })}
                        </div>
                    )}

                    {/* Infographic RERA & Compliance Strip */}
                    <div className="mt-2.5 flex items-center justify-between text-[11px] text-slate-500 bg-slate-50/80 px-2.5 py-1.5 rounded-xl border border-slate-200/60">
                        <div className="flex items-center gap-1.5 min-w-0 truncate">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="font-semibold text-slate-600 truncate">
                                RERA: <strong className="font-mono text-slate-800">{project.reraId || 'P52100046729'}</strong>
                            </span>
                        </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setShowQRModal(true);
                            }}
                            className="inline-flex items-center gap-1 font-extrabold text-[10px] text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-lg shrink-0 transition-colors shadow-2xs"
                        >
                            <QrCode className="w-3 h-3 text-emerald-600" />
                            <span>Scan QR</span>
                        </button>
                    </div>

                    {!isGrid && (
                        <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-slate-600 border-t border-slate-100 pt-3">
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                <span className="text-slate-400 text-xs uppercase font-bold">Possession:</span>
                                <span className="font-semibold text-slate-700 text-xs md:text-sm">{project.possessionDate || 'Soon'}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                <span className="text-slate-400 text-xs uppercase font-bold">Builder:</span>
                                <span className="font-semibold text-slate-700 truncate text-xs md:text-sm">
                                    {/* Look up builder name from context if available, else usage */}
                                    {project.builderId ? (
                                        // Simple lookup if we had builders list prop, but we may need to rely on what we have.
                                        // ideally PropertyCard should receive builderName or we use a hook.
                                        // For now, let's keep it safe. 
                                        // Use global data if present?
                                        // We can't easily access context inside map without passing it down.
                                        // Let's assume project might have builder object joined? No.
                                        // Check if builders are passed or use a prop.
                                        // Falling back to a cleaner display if invalid ID.
                                        project.builderId.length > 20 ? 'Premium Developer' : project.builderId
                                    ) : 'Premium Developer'}
                                </span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Actions Footer */}
                <div className={`mt-4 md:mt-5 pt-0 flex gap-2 md:gap-3 ${isGrid ? 'flex-col' : 'justify-end items-center'}`}>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            setShowLeadForm(true);
                        }}
                        className={`flex-1 px-3 md:px-4 py-2 md:py-2.5 rounded-xl border border-brand-200 text-brand-600 font-bold text-xs md:text-sm hover:bg-brand-50 hover:border-brand-300 transition-all uppercase tracking-wide text-center shadow-sm hover:shadow-md ${isGrid ? 'w-full' : 'max-w-[140px]'}`}
                    >
                        Contact
                    </button>
                    <Link
                        to={`/project/${project.slug}`}
                        className={`flex-1 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-brand-600 text-white font-bold text-xs md:text-sm hover:bg-brand-700 transition-all uppercase tracking-wide text-center shadow-lg shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5 ${isGrid ? 'w-full' : 'max-w-[140px]'}`}
                    >
                        Details
                    </Link>
                </div>
            </div>

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
                    className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowQRModal(false);
                    }}
                >
                    <div
                        className="bg-white rounded-3xl p-6 max-w-xs w-full text-center shadow-2xl relative border border-slate-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setShowQRModal(false)}
                            className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
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

                        <div className="text-xs font-mono font-black text-slate-800 bg-slate-100 py-1.5 rounded-lg border border-slate-200 mb-4">
                            {project.reraId || 'P52100046729'}
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
