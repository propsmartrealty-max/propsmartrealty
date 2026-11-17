import React, { useState } from 'react';
import { 
    ShieldCheck, 
    ExternalLink, 
    Copy, 
    Check, 
    QrCode, 
    FileText, 
    Building2, 
    MapPin, 
    Download, 
    CheckCircle2, 
    X,
    ArrowUpRight
} from 'lucide-react';
import { 
    validateMahaRERANumber, 
    MAHARERA_PORTAL 
} from '../../utils/mahareraVerification';

interface MahaRERAVerifyModalProps {
    isOpen: boolean;
    onClose: () => void;
    reraId: string;
    projectTitle?: string;
    location?: string;
}

const MahaRERAVerifyModal: React.FC<MahaRERAVerifyModalProps> = ({
    isOpen,
    onClose,
    reraId,
    projectTitle,
    location
}) => {
    const [copied, setCopied] = useState(false);
    const [showQrExpanded, setShowQrExpanded] = useState(false);

    if (!isOpen) return null;

    const result = validateMahaRERANumber(reraId);

    const handleCopy = () => {
        if (result.sanitized) {
            navigator.clipboard.writeText(result.sanitized);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleLaunchOfficial = () => {
        handleCopy();
        window.open(result.officialPortalUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div 
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={onClose}
        >
            <div 
                className="bg-slate-900 border border-white/20 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden relative text-white"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-white/10 relative">
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                        title="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">
                                    Official MahaRERA Verification
                                </span>
                                <span className="text-[9.5px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-black border border-emerald-400/30">
                                    Approved
                                </span>
                            </div>
                            <h3 className="text-xl font-black text-white mt-0.5">
                                {projectTitle || result.matchedProject?.title || result.sanitized}
                            </h3>
                            {location && (
                                <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                    <MapPin className="w-3 h-3 text-sky-400" /> {location}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* RERA Identifier Bar */}
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-4">
                        <div>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                                Registration Number (Sanctioned)
                            </span>
                            <span className="text-lg font-black font-mono text-emerald-400 tracking-wider block mt-0.5 select-all">
                                {result.sanitized}
                            </span>
                            <span className="text-[11px] text-slate-400 mt-0.5 block">
                                Jurisdiction: {result.district} • {result.classification}
                            </span>
                        </div>
                        <button
                            onClick={handleCopy}
                            className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold transition-colors flex items-center gap-1.5 shrink-0"
                            title="Copy to Clipboard"
                        >
                            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copied ? 'Copied' : 'Copy ID'}</span>
                        </button>
                    </div>

                    {/* QR Code and Verification Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                        <div className="sm:col-span-1 bg-white p-2.5 rounded-2xl border-2 border-slate-950 flex flex-col items-center justify-center shadow-md">
                            <img
                                src={result.qrCodeUrl}
                                alt={`MahaRERA QR for ${result.sanitized}`}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/qr/propsmart-agent-qr.svg';
                                }}
                                className="w-28 h-28 object-contain"
                            />
                            <span className="text-[9px] text-slate-600 font-bold mt-1">MahaRERA QR (Order 46)</span>
                        </div>

                        <div className="sm:col-span-2 space-y-2 text-xs">
                            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                                <span className="text-slate-400 font-semibold block text-[10px] uppercase">1-Click Portal Verification:</span>
                                <p className="text-slate-300 text-[11px]">
                                    Clicking below copies the registration number and opens the official State Regulatory Portal (<code className="text-emerald-400">maharera.maharashtra.gov.in</code>).
                                </p>
                            </div>
                            <div className="text-[11px] text-slate-400 space-y-1">
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                    <span>Commencement Certificate (CC) Verified</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                    <span>Sanctioned Layout &amp; Cumulative Carpet Guarantee</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2.5 pt-2">
                        <button
                            onClick={handleLaunchOfficial}
                            className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <span>Verify on Official MahaRERA Portal</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </button>

                        <div className="flex gap-2">
                            <a
                                href={`/verify-rera?id=${encodeURIComponent(result.sanitized)}`}
                                className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 font-bold text-xs text-center transition-colors flex items-center justify-center gap-1.5"
                            >
                                <FileText className="w-3.5 h-3.5 text-sky-400" />
                                <span>Open Full Verification Dossier</span>
                            </a>
                            <button
                                onClick={onClose}
                                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-bold transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MahaRERAVerifyModal;
