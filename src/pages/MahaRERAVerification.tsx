import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
    ShieldCheck, 
    Search, 
    ExternalLink, 
    Copy, 
    Check, 
    QrCode, 
    FileText, 
    Building2, 
    Calendar, 
    LandPlot, 
    Award, 
    AlertCircle, 
    CheckCircle2, 
    Download, 
    ArrowRight,
    MapPin,
    Landmark,
    HelpCircle,
    Info,
    Sparkles
} from 'lucide-react';
import { 
    validateMahaRERANumber, 
    MahaRERAVerificationResult, 
    getPopularVerifiedProjects, 
    sanitizeMahaRERANumber,
    MAHARERA_PORTAL
} from '../utils/mahareraVerification';
import { PROPSMART_RERA } from '../constants/rera';
import SEO from '../components/SEO';

const MahaRERAVerification: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get('id') || searchParams.get('rera') || searchParams.get('q') || 'P52100050939';

    const [inputVal, setInputVal] = useState(initialQuery);
    const [copied, setCopied] = useState(false);
    const [showQRCodeModal, setShowQRCodeModal] = useState(false);

    // Run verification validation
    const result: MahaRERAVerificationResult = useMemo(() => {
        return validateMahaRERANumber(inputVal);
    }, [inputVal]);

    const popularProjects = useMemo(() => getPopularVerifiedProjects(6), []);

    // Sync input when URL param changes
    useEffect(() => {
        const paramId = searchParams.get('id') || searchParams.get('rera') || searchParams.get('q');
        if (paramId && paramId !== inputVal) {
            setInputVal(paramId);
        }
    }, [searchParams]);

    const handleSelectQuery = (val: string) => {
        setInputVal(val);
        setSearchParams({ id: val });
    };

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLaunchPortalWithCopy = () => {
        if (result.sanitized) {
            navigator.clipboard.writeText(result.sanitized);
            setCopied(true);
            setTimeout(() => setCopied(false), 2500);
        }
        window.open(result.officialPortalUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100">
            <SEO
                title="MahaRERA Project Verification Tool | Official MahaRERA Number Check"
                description="Verify any MahaRERA registration number directly on the official Maharashtra Real Estate Regulatory Authority portal. Check CC certificates, approved layout plans, and legal title reports."
                canonical="https://propsmart.co.in/verify-rera"
            />

            {/* Top Regulatory Header / Hero */}
            <div className="relative overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
                {/* Background Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute top-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6 shadow-glass-sm animate-pulse">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        Official Regulatory Verification Engine
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                        MahaRERA Number <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">Verification Tool</span>
                    </h1>

                    <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium">
                        Instant validation, district decoding, and 1-click direct link to the official Maharashtra Real Estate Regulatory Authority portal under Section 5 of RERA Act, 2016.
                    </p>

                    {/* Interactive Input Workbench */}
                    <div className="mt-8 max-w-2xl mx-auto">
                        <div className="relative glass-panel rounded-2xl p-2 border border-white/20 shadow-2xl backdrop-blur-xl flex items-center gap-2">
                            <div className="pl-3 text-slate-400">
                                <Search className="w-5 h-5 text-emerald-400" />
                            </div>
                            <input
                                type="text"
                                value={inputVal}
                                onChange={(e) => {
                                    setInputVal(e.target.value);
                                    if (e.target.value.trim()) {
                                        setSearchParams({ id: e.target.value.trim() });
                                    }
                                }}
                                placeholder="Enter MahaRERA ID (e.g. P52100050939, PR1260002500453) or Project..."
                                className="w-full bg-transparent border-0 text-white placeholder-slate-400 focus:outline-none focus:ring-0 text-sm sm:text-base font-mono font-bold py-2"
                            />
                            {inputVal && (
                                <button
                                    onClick={() => {
                                        setInputVal('');
                                        setSearchParams({});
                                    }}
                                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold"
                                    title="Clear"
                                >
                                    ✕
                                </button>
                            )}
                            <button
                                onClick={handleLaunchPortalWithCopy}
                                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 shrink-0 flex items-center gap-1.5 cursor-pointer"
                            >
                                <span>Verify</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                        </div>

                        {/* Quick Test Chips */}
                        <div className="mt-4 flex items-center justify-center gap-2 flex-wrap text-xs">
                            <span className="text-slate-400 font-bold">Quick Test:</span>
                            {popularProjects.slice(0, 4).map((p) => (
                                <button
                                    key={p.id}
                                    onClick={() => handleSelectQuery(p.reraId)}
                                    className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
                                        result.sanitized === sanitizeMahaRERANumber(p.reraId)
                                            ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {p.title} ({p.reraId})
                                </button>
                            ))}
                            <button
                                onClick={() => handleSelectQuery(MAHARERA_PORTAL.propsmartAgentRera)}
                                className={`px-3 py-1 rounded-full text-[11px] font-bold border transition-all ${
                                    result.sanitized === MAHARERA_PORTAL.propsmartAgentRera
                                        ? 'bg-amber-400 text-slate-950 border-amber-300'
                                        : 'bg-amber-500/10 border-amber-400/20 text-amber-300 hover:bg-amber-500/20'
                                }`}
                            >
                                PROPSMART Mandate ({MAHARERA_PORTAL.propsmartAgentRera})
                            </button>
                        </div>

                        {/* Audit Registry Download Pill */}
                        <div className="mt-3.5 flex items-center justify-center gap-2">
                            <a
                                href="/maharera-verification-registry.csv"
                                download="MahaRERA-846-Projects-Verification-Registry.csv"
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-bold border border-white/15 transition-all shadow-sm"
                                title="Download complete verification registry of all 846 projects"
                            >
                                <Download className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Download 846 Projects MahaRERA Verification Registry (CSV)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Result Workbench Area */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {result.isValid ? (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        {/* 1. Prime Verification Passport Banner */}
                        <div className="rounded-3xl bg-slate-900/90 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                                <div>
                                    <div className="flex items-center gap-2.5 flex-wrap mb-2">
                                        <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1.5">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                            {result.regulatoryBadge}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/10 text-slate-300 border border-white/15">
                                            {result.classification}
                                        </span>
                                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-300 border border-sky-400/25">
                                            📍 {result.district}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                                        {result.matchedProject ? result.matchedProject.title : `MahaRERA ID: ${result.sanitized}`}
                                    </h2>

                                    {result.matchedProject && (
                                        <p className="text-sm text-slate-300 mt-1 flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-sky-400" />
                                            <span>{result.matchedProject.location}, {result.matchedProject.city || 'Pune'}</span>
                                            <span className="text-slate-500">•</span>
                                            <span className="text-emerald-400 font-bold">{result.matchedProject.exactPrice || result.matchedProject.priceRange} (Final Price)</span>
                                        </p>
                                    )}

                                    {/* Monospace RERA Bar with Copy */}
                                    <div className="mt-4 inline-flex items-center gap-2 p-2 rounded-xl bg-slate-950/80 border border-white/15 text-xs font-mono font-black text-emerald-400">
                                        <span className="text-slate-400 select-none">MahaRERA:</span>
                                        <span className="tracking-wider text-white text-sm select-all">{result.sanitized}</span>
                                        <button
                                            onClick={() => handleCopy(result.sanitized)}
                                            className="ml-2 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors flex items-center gap-1"
                                            title="Copy RERA ID"
                                        >
                                            {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                                            <span>{copied ? 'Copied' : 'Copy'}</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Main Direct Official Actions */}
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                                    <button
                                        onClick={handleLaunchPortalWithCopy}
                                        className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group cursor-pointer"
                                    >
                                        <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                                        <span>Verify on Official MahaRERA</span>
                                    </button>

                                    <div className="flex items-center gap-2">
                                        <a
                                            href={result.officialSearchUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-bold text-center transition-colors flex items-center justify-center gap-1.5"
                                        >
                                            <Search className="w-3.5 h-3.5 text-sky-400" />
                                            <span>MahaRERA Search</span>
                                        </a>

                                        <button
                                            onClick={() => setShowQRCodeModal(true)}
                                            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                                            title="View Official QR Code"
                                        >
                                            <QrCode className="w-3.5 h-3.5 text-amber-400" />
                                            <span>QR Certificate</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Matched Project Intelligence Dossier (if indexed in catalog) */}
                        {result.matchedProject && (
                            <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div className="flex items-center gap-2.5">
                                        <Building2 className="w-5 h-5 text-sky-400" />
                                        <h3 className="text-lg font-black text-white">Verified Catalog Intelligence</h3>
                                    </div>
                                    <Link
                                        to={`/project/${result.matchedProject.slug}`}
                                        className="text-xs font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                                    >
                                        <span>View Full Project Dossier</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[10px] text-slate-400 uppercase font-black block">Final All-Inclusive Price</span>
                                        <span className="text-base font-black text-emerald-400 block mt-1">
                                            {result.matchedProject.exactPrice || result.matchedProject.priceRange}
                                        </span>
                                        <span className="text-[10px] text-slate-500 mt-0.5 block">100% Final On-Road Price</span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[10px] text-slate-400 uppercase font-black block">Binding Handover Date</span>
                                        <span className="text-base font-black text-white block mt-1">
                                            {result.matchedProject.possessionDate || 'December 2027'}
                                        </span>
                                        <span className="text-[10px] text-emerald-400/90 mt-0.5 block">MahaRERA Sanctioned Date</span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[10px] text-slate-400 uppercase font-black block">Configurations</span>
                                        <span className="text-base font-black text-white block mt-1">
                                            {result.matchedProject.configurations?.join(', ') || '2, 3 BHK'}
                                        </span>
                                        <span className="text-[10px] text-slate-500 mt-0.5 block">Cumulative Carpet Area</span>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                        <span className="text-[10px] text-slate-400 uppercase font-black block">Direct Sales Mandate</span>
                                        <span className="text-base font-black text-amber-400 block mt-1">
                                            0% Brokerage
                                        </span>
                                        <span className="text-[10px] text-slate-500 mt-0.5 block">PROPSMART Realty Partner</span>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-300 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/5">
                                    {result.matchedProject.description}
                                </p>
                            </div>
                        )}

                        {/* 3. Official Document Verification Checklist */}
                        <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-8 space-y-6">
                            <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
                                <FileText className="w-5 h-5 text-emerald-400" />
                                <div>
                                    <h3 className="text-lg font-black text-white">
                                        What to Verify on the Official MahaRERA Portal
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-0.5">
                                        When you click through to <code className="text-emerald-400 bg-emerald-950/60 px-1 py-0.5 rounded">maharera.maharashtra.gov.in</code>, verify these 5 statutory items:
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {result.verificationChecklist.map((item, idx) => (
                                    <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-xs shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span className="font-extrabold text-sm text-white">
                                                {item.documentName}
                                            </span>
                                        </div>
                                        <p className="text-xs text-slate-400">
                                            {item.purpose}
                                        </p>
                                        <div className="p-2.5 rounded-xl bg-slate-950/70 border border-white/5 text-[11px] text-emerald-300 font-medium">
                                            <strong>Verification Check:</strong> {item.whatToVerify}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Official QR Code Modal */}
                        {showQRCodeModal && (
                            <div
                                className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
                                onClick={() => setShowQRCodeModal(false)}
                            >
                                <div
                                    className="bg-slate-900 border border-white/20 rounded-3xl p-6 sm:p-8 max-w-sm w-full text-center shadow-2xl relative"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                                        <QrCode className="w-6 h-6" />
                                    </div>
                                    <h4 className="text-lg font-black text-white">Official MahaRERA QR Code</h4>
                                    <p className="text-xs text-slate-400 mt-1 mb-4">
                                        Mandated by MahaRERA Order No. 46/2023. Scan with any camera to verify official registration certificate.
                                    </p>

                                    <div className="w-56 h-56 mx-auto p-3 bg-white rounded-2xl border-4 border-slate-950 shadow-xl mb-4 flex items-center justify-center">
                                        <img
                                            src={result.qrCodeUrl}
                                            alt={`MahaRERA QR Code for ${result.sanitized}`}
                                            onError={(e) => {
                                                e.currentTarget.src = '/images/qr/propsmart-agent-qr.svg';
                                            }}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <div className="text-xs font-mono font-black text-emerald-400 mb-6 bg-slate-950 py-2 rounded-xl border border-white/10">
                                        {result.sanitized}
                                    </div>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={handleLaunchPortalWithCopy}
                                            className="flex-1 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                                        >
                                            <span>Open Portal</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </button>
                                        <a
                                            href={result.qrCodeUrl}
                                            download={`${result.sanitized}-MahaRERA-QR.svg`}
                                            className="px-3.5 py-3 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors inline-flex items-center justify-center"
                                            title="Download QR SVG"
                                        >
                                            <Download className="w-4 h-4" />
                                        </a>
                                        <button
                                            onClick={() => setShowQRCodeModal(false)}
                                            className="px-4 py-3 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Error / Invalid Pattern Fallback */
                    <div className="rounded-3xl bg-slate-900/60 border border-rose-500/30 p-8 text-center max-w-xl mx-auto space-y-4">
                        <div className="w-14 h-14 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
                            <AlertCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-black text-white">Invalid MahaRERA Number Format</h3>
                        <p className="text-xs text-slate-300">
                            The input <code className="text-rose-300 bg-rose-950/60 px-1.5 py-0.5 rounded font-mono">{inputVal || '(empty)'}</code> does not match the standard MahaRERA registration structure.
                        </p>
                        <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 text-left text-xs text-slate-300 space-y-2">
                            <div className="font-bold text-white">Standard Maharashtra Formats:</div>
                            <div>• <strong>Legacy Project:</strong> <code className="text-emerald-400">P52100050939</code> (starts with P, 3-digit district code, 8 digits)</div>
                            <div>• <strong>MahaRERA 2.0:</strong> <code className="text-emerald-400">PR1260002500453</code> (PR/PC/PM/PP series)</div>
                            <div>• <strong>Mandate Agent:</strong> <code className="text-emerald-400">A031262401295</code> (A/AG series)</div>
                        </div>
                        <div className="pt-2">
                            <button
                                onClick={() => handleSelectQuery('P52100050939')}
                                className="px-5 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs uppercase tracking-wider hover:bg-emerald-400 transition-colors"
                            >
                                Test with Sample RERA (P52100050939)
                            </button>
                        </div>
                    </div>
                )}

                {/* Statutory Buyer Protection & FAQ Guide */}
                <div className="mt-16 pt-12 border-t border-white/10 space-y-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                            Legal Due Diligence
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
                            MahaRERA Regulatory FAQs
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                        <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 space-y-2">
                            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                Why is MahaRERA registration mandatory?
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                                Under Section 3 of RERA Act, 2016, no promoter can advertise, market, book, sell or offer for sale any apartment or plot without registering the real estate project with MahaRERA. Registration ensures that all project approvals are legally in place.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 space-y-2">
                            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                What is the 70% Escrow Account rule?
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                                Under Section 4(2)(l)(D), 70% of the amounts realized for the real estate project from allottees must be deposited into a dedicated separate bank account in a scheduled bank to cover solely the construction and land costs, preventing diversion of buyer funds.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 space-y-2">
                            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                What does MahaRERA Order 46/2023 mandate?
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                                MahaRERA Order 46/2023 mandates that promoters must prominently display the official MahaRERA QR Code on every advertisement, hoarding, brochure, social media post, and website. Scanning this QR code leads directly to the official certificate webpage.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 space-y-2">
                            <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                                <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                What happens if a builder delays possession?
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                                Under Section 18 of RERA, if the promoter fails to complete or give possession in accordance with the terms of agreement for sale by the RERA possession date, the builder is liable to pay interest to allottees for every month of delay at SBI MCLR + 2%.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mandate Footer Callout */}
                <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/60 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase font-black tracking-widest text-emerald-400">
                            Direct Developer Mandate Sales Partner
                        </span>
                        <h4 className="text-lg font-black text-white">
                            PROPSMART REALTY • 0% Brokerage Guarantee
                        </h4>
                        <p className="text-xs text-slate-300 max-w-xl">
                            All properties listed on PROPSMART are 100% verified under MahaRERA registration certificate <strong>{PROPSMART_RERA.number}</strong>. You purchase directly at builder-mandated pricing with zero buyer brokerage fees.
                        </p>
                    </div>

                    <a
                        href={MAHARERA_PORTAL.directLookup(PROPSMART_RERA.number)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shrink-0 justify-center"
                    >
                        <span>Verify PROPSMART License</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MahaRERAVerification;
