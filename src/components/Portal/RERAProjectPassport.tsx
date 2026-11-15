import React, { useState } from 'react';
import { ShieldCheck, QrCode, ExternalLink, Copy, Check, Award, Building, Calendar, LandPlot, CheckCircle2, FileText, Landmark, Download } from 'lucide-react';
import { getRERAMetadata, getMahaRERAVerificationUrl } from '../../utils/qrUtils';
import { PROPSMART_RERA } from './RERABadge';

interface RERAProjectPassportProps {
    slug: string;
    title: string;
    reraId: string;
    location?: string;
    possessionDate?: string;
}

const RERAProjectPassport: React.FC<RERAProjectPassportProps> = ({
    slug,
    title,
    reraId,
    location = 'Pune',
    possessionDate
}) => {
    const [copied, setCopied] = useState(false);
    const [showEnlargedQR, setShowEnlargedQR] = useState(false);

    const meta = getRERAMetadata(slug, reraId, { title, location, possessionDate });
    const verificationUrl = getMahaRERAVerificationUrl(reraId);

    const handleCopy = () => {
        navigator.clipboard.writeText(reraId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/50 overflow-hidden mb-12">
            {/* Top Header Bar */}
            <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30 shrink-0">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                                <span className="text-xs font-black uppercase tracking-widest text-emerald-400">
                                    Official Regulatory Passport
                                </span>
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                                    <CheckCircle2 className="w-3 h-3" /> MahaRERA Approved
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                {title}
                            </h2>
                            <p className="text-xs md:text-sm text-slate-300 mt-1">
                                Certified under Section 5 of the Real Estate (Regulation and Development) Act, 2016
                            </p>
                        </div>
                    </div>

                    {/* Quick Verification Actions */}
                    <div className="flex items-center gap-3 shrink-0">
                        <a
                            href={verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/40 hover:scale-105 active:scale-95"
                        >
                            <FileText className="w-4 h-4" />
                            <span>Verify on MahaRERA</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Passport Body: QR Code + Infographic Grid */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/50">
                {/* Column 1: Scan-Ready Authentic QR Code (4 cols) */}
                <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                    <div className="relative group cursor-pointer" onClick={() => setShowEnlargedQR(true)}>
                        {/* QR Code Container */}
                        <div className="w-48 h-48 sm:w-52 sm:h-52 p-3 bg-white rounded-2xl border-2 border-slate-900 shadow-md relative overflow-hidden transition-all group-hover:shadow-xl group-hover:scale-[1.02]">
                            <img
                                src={meta.qrCodeUrl}
                                alt={`MahaRERA QR Code for ${title}`}
                                className="w-full h-full object-contain"
                            />
                            
                            {/* Scanning Animation Reticle */}
                            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_8px_#10b981] animate-pulse" style={{ top: '48%' }} />
                        </div>

                        <div className="absolute bottom-2 inset-x-2 bg-slate-900/90 backdrop-blur-md text-white py-1 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                            Click to Enlarge QR
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-500 font-semibold">
                        <QrCode className="w-4 h-4 text-emerald-600" />
                        <span>Scan with any camera to verify</span>
                    </div>

                    {/* Copy RERA ID Bar */}
                    <div className="mt-4 w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs">
                        <span className="font-extrabold text-slate-800 tracking-wider truncate font-mono">
                            {reraId}
                        </span>
                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors shrink-0 shadow-xs"
                            title="Copy RERA ID"
                        >
                            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                            <span>{copied ? 'Copied!' : 'Copy'}</span>
                        </button>
                    </div>
                </div>

                {/* Column 2: Infographical Certificate Details (8 cols) */}
                <div className="lg:col-span-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* 1. Sanctioned Land Area */}
                        <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                <LandPlot className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                    Approved Land Area
                                </span>
                                <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                                    {meta.sanctionedLandArea}
                                </span>
                                <span className="text-[11px] text-slate-500">Clear Title & Sanctioned Layout</span>
                            </div>
                        </div>

                        {/* 2. Sanctioned Towers / Height */}
                        <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                                <Building className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                    Sanctioned Structures
                                </span>
                                <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                                    {meta.sanctionedTowers}
                                </span>
                                <span className="text-[11px] text-slate-500">Commencement Certificate (CC) Approved</span>
                            </div>
                        </div>

                        {/* 3. RERA Possession Timeline */}
                        <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                                <Calendar className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                    RERA Sanctioned Possession
                                </span>
                                <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                                    {possessionDate || meta.reraPossessionDate}
                                </span>
                                <span className="text-[11px] text-emerald-700 font-semibold">Legally Binding Handover Date</span>
                            </div>
                        </div>

                        {/* 4. Usable Carpet Area Guarantee */}
                        <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs flex items-start gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                <Award className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                                    RERA Carpet Efficiency
                                </span>
                                <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                                    {meta.carpetAreaEfficiency}
                                </span>
                                <span className="text-[11px] text-slate-500">Zero Loading Deception</span>
                            </div>
                        </div>
                    </div>

                    {/* Lending Bank Approvals Strip */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <Landmark className="w-4 h-4 text-slate-500 shrink-0" />
                            <span className="text-xs font-bold text-slate-700">Major Bank Project Approvals (APF Code Active):</span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            {meta.bankApprovals?.map((bank, i) => (
                                <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-[11px] font-bold text-slate-700 border border-slate-200">
                                    {bank}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Authorized Partner Trust Note */}
                    <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                            <span>
                                Authorized Direct Sales Partner: <strong>PROPSMART REALTY</strong> (MahaRERA: <strong>{PROPSMART_RERA.number}</strong>)
                            </span>
                        </div>
                        <span className="font-bold text-[11px] bg-amber-200/80 px-2 py-0.5 rounded text-amber-900 shrink-0">
                            0% Brokerage
                        </span>
                    </div>
                </div>
            </div>

            {/* Enlarged QR Modal */}
            {showEnlargedQR && (
                <div
                    className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setShowEnlargedQR(false)}
                >
                    <div
                        className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl relative border border-slate-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900">{title}</h3>
                        <p className="text-xs text-slate-500 mt-1 mb-6">Scan to verify official MahaRERA certificate</p>

                        <div className="w-64 h-64 mx-auto p-4 bg-white rounded-2xl border-4 border-slate-900 shadow-xl mb-4">
                            <img
                                src={meta.qrCodeUrl}
                                alt={`Enlarged MahaRERA QR Code for ${title}`}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <div className="text-sm font-black font-mono text-slate-800 mb-6 bg-slate-100 py-2 rounded-xl border border-slate-200">
                            {reraId}
                        </div>

                        <div className="flex gap-2">
                            <a
                                href={verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-1.5"
                            >
                                <span>Verify on RERA</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <a
                                href={meta.qrCodeUrl}
                                download={`${reraId}-MahaRERA-QR.svg`}
                                className="px-3.5 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors inline-flex items-center justify-center"
                                title="Download MahaRERA QR Code"
                            >
                                <Download className="w-4 h-4 text-slate-700" />
                            </a>
                            <button
                                onClick={() => setShowEnlargedQR(false)}
                                className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default RERAProjectPassport;
