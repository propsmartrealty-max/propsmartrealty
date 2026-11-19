import React from 'react';
import { ShieldCheck, Building2, BadgePercent, CheckCircle2, ArrowRight, Sparkles, FileCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROPSMART_RERA } from '../RERABadge';

const WhyBuyDirect: React.FC = () => {
    const pillars = [
        {
            icon: <BadgePercent className="w-7 h-7 text-emerald-600" />,
            badge: "0% Commission",
            title: "100% Brokerage Free",
            desc: "Buyers never pay a single rupee in brokerage, convenience fees, or consultation charges. Save ₹1,50,000 to ₹5,00,000+ directly on your home purchase.",
            highlight: "Save up to ₹5 Lakhs",
            color: "from-emerald-50 to-teal-50/50",
            border: "border-emerald-200/80"
        },
        {
            icon: <Building2 className="w-7 h-7 text-amber-600" />,
            badge: "Direct Allocation",
            title: "Buy Directly with Builder",
            desc: "Direct access to official developer sales lounges and sanctioned inventory. Deal straight with Pune's tier-1 builders with zero middleman interference.",
            highlight: "Direct Developer Desk",
            color: "from-amber-50 to-orange-50/50",
            border: "border-amber-200/80"
        },
        {
            icon: <ShieldCheck className="w-7 h-7 text-teal-600" />,
            badge: `MahaRERA: ${PROPSMART_RERA.number}`,
            title: "100% MahaRERA Verified",
            desc: "Every project on PROPSMART REALTY is registered with MahaRERA. Scan official QR codes to inspect sanctioned floor plans, title reports, and possession schedules.",
            highlight: "Authorized Sales Partner",
            color: "from-teal-50 to-cyan-50/50",
            border: "border-teal-200/80"
        },
        {
            icon: <FileCheck className="w-7 h-7 text-blue-600" />,
            badge: "Sanctioned Pricing",
            title: "Best Developer Offers",
            desc: "Lock in direct pre-launch pricing, festive flexi-payment schemes, and official builder discounts. No inflated broker markups or false promises.",
            highlight: "Transparent Price Sheets",
            color: "from-blue-50 to-indigo-50/50",
            border: "border-blue-200/80"
        }
    ];

    return (
        <section className="py-16 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-emerald-800 text-xs font-black uppercase tracking-wider mb-3 border border-emerald-300/60 shadow-2xs">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                        <span>The PROPSMART Advantage</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Why Buy Directly with Builder on <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-cyan-500 to-blue-700">PROPSMART REALTY</span>?
                    </h2>
                    <p className="mt-3 text-base md:text-lg text-slate-600 font-medium">
                        We eliminated real estate brokerages to connect Pune homebuyers straight to authorized developer sales teams with complete transparency and zero commission.
                    </p>
                </div>

                {/* 4 Pillars Grid with Glassmorphism */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p, idx) => (
                        <div
                            key={idx}
                            className="glass-panel water-card-hover rounded-3xl p-6 border border-white/80 shadow-[0_8px_32px_rgba(14,165,233,0.06)] hover:border-sky-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center border border-white/80">
                                        {p.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-wider glass-pill text-slate-800 px-2.5 py-1 rounded-full border border-white/90 shadow-2xs">
                                        {p.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-2">{p.title}</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-medium">{p.desc}</p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-sky-100/60 flex items-center justify-between text-xs font-bold text-slate-800">
                                <span className="flex items-center gap-1.5 text-emerald-700 font-extrabold">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    {p.highlight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Action Strip */}
                <div className="mt-10 rounded-2xl bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                            <PhoneCall className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-xs font-extrabold uppercase tracking-widest text-emerald-400">
                                Official Developer Sales Desk
                            </div>
                            <h3 className="text-xl font-black text-white mt-0.5">
                                Connect directly with developer sales teams in Pune
                            </h3>
                            <p className="text-xs text-slate-300 font-medium mt-1">
                                0% Brokerage Guaranteed • Authentic Sanctioned Pricing • Verified MahaRERA Authorized Partner
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
                        <Link
                            to="/directory"
                            className="w-full md:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs md:text-sm transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                        >
                            <span>Browse Direct Builder Projects</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyBuyDirect;
