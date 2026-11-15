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
        <section className="py-14 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200/60 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>The PROPSMART Advantage</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                        Why Buy Directly with Builder on <span className="text-amber-600">PROPSMART REALTY</span>?
                    </h2>
                    <p className="mt-3 text-base md:text-lg text-slate-600 font-medium">
                        We eliminated real estate brokerages to connect Pune homebuyers straight to authorized developer sales teams with complete transparency and zero commission.
                    </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((p, idx) => (
                        <div
                            key={idx}
                            className={`rounded-2xl p-6 bg-gradient-to-br ${p.color} border ${p.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
                                        {p.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-wider bg-white/90 text-slate-800 px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                                        {p.badge}
                                    </span>
                                </div>
                                <h3 className="text-lg font-black text-slate-900 mb-2">{p.title}</h3>
                                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800">
                                <span className="flex items-center gap-1 text-emerald-700 font-extrabold">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
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
                            <h4 className="text-xl font-black text-white mt-0.5">
                                Connect directly with developer sales teams in Pune
                            </h4>
                            <p className="text-xs text-slate-400 mt-1">
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
