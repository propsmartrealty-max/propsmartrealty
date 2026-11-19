import React from 'react';
import { ShieldCheck, ExternalLink, CheckCircle2, Award, FileCheck } from 'lucide-react';
import { PROPSMART_RERA } from '../../constants/rera';

export { PROPSMART_RERA };

interface RERABadgeProps {
    variant?: 'compact' | 'card' | 'banner' | 'pill';
    isSolid?: boolean;
    className?: string;
}

const RERABadge: React.FC<RERABadgeProps> = ({ variant = 'card', isSolid = false, className = '' }) => {
    // 1. Compact Pill (Ideal for Navbar)
    if (variant === 'compact' || variant === 'pill') {
        return (
            <a
                href={PROPSMART_RERA.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Verify PROPSMART REALTY on official MahaRERA website"
                className={`group flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all hover:scale-105 ${
                    isSolid
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100/70 shadow-sm'
                        : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
                } ${className}`}
            >
                <ShieldCheck className={`w-3.5 h-3.5 ${isSolid ? 'text-emerald-600' : 'text-emerald-400'} group-hover:scale-110 transition-transform`} />
                <span className="opacity-90">MahaRERA:</span>
                <span className="font-extrabold tracking-wide">{PROPSMART_RERA.number}</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
            </a>
        );
    }

    // 2. Card Variant (Ideal for Sidebar, Footer, Contact, About)
    if (variant === 'card') {
        return (
            <div className={`p-4 rounded-xl border transition-all ${className || 'bg-slate-800/80 border-slate-700/80 text-white'}`}>
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 shrink-0">
                        <Award className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-400">
                                MahaRERA Registered Agent
                            </span>
                            <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/20">
                                <CheckCircle2 className="w-3 h-3" /> Verified
                            </span>
                        </div>
                        <div className="text-lg font-black tracking-wide text-white mt-0.5">
                            {PROPSMART_RERA.number}
                        </div>
                        <p className="text-xs text-slate-300 mt-1">
                            PROPSMART REALTY is an authorized Real Estate Sales Partner firm operating under MahaRERA compliance.
                        </p>
                        <a
                            href={PROPSMART_RERA.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 mt-2 transition-colors"
                        >
                            <span>Verify on MahaRERA Portal</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // 3. Full Trust Banner Variant (Ideal for Home Page, Footer top, Directory)
    return (
        <section className={`rounded-2xl p-6 md:p-8 border shadow-sm ${className || 'bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border-slate-800'}`}>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
                        <ShieldCheck className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-bold tracking-widest uppercase text-emerald-400">
                                100% MahaRERA Compliant & Certified
                            </span>
                            <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Direct Developer Partner
                            </span>
                        </div>
                        <h2 className="text-xl md:text-2xl font-black tracking-tight text-white mt-1">
                            PROPSMART REALTY MahaRERA: <span className="text-amber-400">{PROPSMART_RERA.number}</span>
                        </h2>
                        <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                            All residential & commercial projects listed on this platform are registered with MahaRERA. Buy with 0% brokerage directly from developer inventory.
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                    <a
                        href={PROPSMART_RERA.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm backdrop-blur-md transition-all hover:scale-105 active:scale-95 shadow-md"
                    >
                        <FileCheck className="w-4 h-4 text-emerald-400" />
                        <span>Verify Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/70" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RERABadge;
