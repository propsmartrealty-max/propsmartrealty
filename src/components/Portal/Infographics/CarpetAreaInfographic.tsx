import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Info, Check, Sparkles, CheckCircle2 } from 'lucide-react';

interface CarpetAreaInfographicProps {
    configurations?: string[];
    className?: string;
}

const CarpetAreaInfographic: React.FC<CarpetAreaInfographicProps> = ({
    configurations = ['2 BHK', '3 BHK'],
    className = ''
}) => {
    const [selectedConfig, setSelectedConfig] = useState<'2 BHK' | '3 BHK'>('2 BHK');

    const configData = {
        '2 BHK': {
            reraCarpet: 785,
            balcony: 95,
            utility: 35,
            totalUsable: 915,
            livingDining: '18 x 11 ft',
            masterBed: '13 x 11 ft',
            bed2: '11 x 10 ft',
            kitchen: '9 x 8 ft',
        },
        '3 BHK': {
            reraCarpet: 1120,
            balcony: 140,
            utility: 45,
            totalUsable: 1305,
            livingDining: '22 x 13 ft',
            masterBed: '15 x 12 ft',
            bed2: '12 x 11 ft',
            bed3: '11 x 11 ft',
            kitchen: '11 x 8.5 ft',
        }
    };

    const current = configData[selectedConfig] || configData['2 BHK'];

    const carpetPercentage = Math.round((current.reraCarpet / current.totalUsable) * 100);
    const balconyPercentage = Math.round((current.balcony / current.totalUsable) * 100);
    const utilityPercentage = 100 - carpetPercentage - balconyPercentage;

    return (
        <div className={`bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm mb-12 ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center shrink-0">
                        <Maximize2 className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                                Space Engineering Infographic
                            </span>
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold border border-emerald-200">
                                0% Loading Fraud
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                            RERA Carpet Area vs Total Usable Layout
                        </h3>
                    </div>
                </div>

                {/* Configuration Selector */}
                <div className="flex p-1 bg-slate-100 rounded-xl">
                    {(['2 BHK', '3 BHK'] as const).map(conf => (
                        <button
                            key={conf}
                            onClick={() => setSelectedConfig(conf)}
                            className={`px-4 py-2 rounded-lg font-bold text-xs transition-all ${
                                selectedConfig === conf
                                    ? 'bg-white text-indigo-700 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            {conf} Plan
                        </button>
                    ))}
                </div>
            </div>

            {/* Infographic Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Architectural Proportions Bar */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Visual Segmented Area Bar */}
                    <div>
                        <div className="flex justify-between items-baseline mb-2">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Total Usable Footprint Breakdown
                            </span>
                            <span className="text-sm font-black text-slate-900">
                                {current.totalUsable} Sq. Ft. Total Private Space
                            </span>
                        </div>

                        {/* Visual Proportion Bar */}
                        <div className="h-10 rounded-2xl overflow-hidden flex shadow-inner bg-slate-100 p-1 gap-1">
                            {/* RERA Carpet */}
                            <div
                                style={{ width: `${carpetPercentage}%` }}
                                className="h-full bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-wide relative group transition-all"
                            >
                                <span className="truncate px-2">RERA Carpet ({carpetPercentage}%)</span>
                            </div>

                            {/* Balcony */}
                            <div
                                style={{ width: `${balconyPercentage}%` }}
                                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-wide transition-all"
                            >
                                <span className="truncate px-1">Balcony ({balconyPercentage}%)</span>
                            </div>

                            {/* Utility */}
                            <div
                                style={{ width: `${utilityPercentage}%` }}
                                className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-xl flex items-center justify-center text-white text-[11px] font-bold tracking-wide transition-all"
                            >
                                <span className="truncate">Utility</span>
                            </div>
                        </div>
                    </div>

                    {/* Room Dimensions Micro-Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Living / Dining</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.livingDining}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Master Suite</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.masterBed}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Bedroom 2</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.bed2}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Modular Kitchen</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.kitchen}</span>
                        </div>
                    </div>

                    {/* Legal Explainer Tooltip Card */}
                    <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-3">
                        <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-indigo-950 leading-relaxed">
                            <strong>What is MahaRERA Carpet Area?</strong> Under MahaRERA Section 2(k), it is the net usable floor area of an apartment excluding the area covered by external walls, areas under service shafts, exclusive balcony, or verandah. <em>You only pay for real usable private square footage.</em>
                        </div>
                    </div>
                </div>

                {/* Right Stat Summary Card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl shadow-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                                Exact Measured Dimensions
                            </span>
                            <span className="text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded text-white/90">
                                Sanctioned Plan
                            </span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-xs text-slate-300">Net RERA Carpet Area:</span>
                                <span className="text-base font-black text-white">{current.reraCarpet} Sq. Ft.</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-xs text-slate-300">Exclusive Balcony Deck:</span>
                                <span className="text-sm font-extrabold text-amber-400">+{current.balcony} Sq. Ft.</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-xs text-slate-300">Dry Utility & Balcony:</span>
                                <span className="text-sm font-extrabold text-teal-400">+{current.utility} Sq. Ft.</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-xs font-bold text-emerald-400 uppercase">Total Private Living Area:</span>
                                <span className="text-xl font-black text-emerald-300">{current.totalUsable} Sq. Ft.</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Every square foot certified by independent licensed architects.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarpetAreaInfographic;
