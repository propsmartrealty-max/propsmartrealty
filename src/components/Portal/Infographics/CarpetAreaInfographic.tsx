import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

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
            totalUsableCarpet: 915,
            livingDining: '18 x 11 ft',
            masterBed: '13 x 11 ft',
            bed2: '11 x 10 ft',
            kitchen: '9 x 8 ft',
            bathrooms: '2 Bathrooms',
            usableEfficiency: '100% Net Usable Layout'
        },
        '3 BHK': {
            totalUsableCarpet: 1305,
            livingDining: '22 x 13 ft',
            masterBed: '15 x 12 ft',
            bed2: '12 x 11 ft',
            bed3: '11 x 11 ft',
            kitchen: '11 x 8.5 ft',
            bathrooms: '3 Bathrooms',
            usableEfficiency: '100% Net Usable Layout'
        }
    };

    const current = configData[selectedConfig] || configData['2 BHK'];

    return (
        <div className={`bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm mb-12 ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <Maximize2 className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                                Space Engineering Infographic
                            </span>
                            <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded font-black border border-emerald-200">
                                Cumulative Carpet Area
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                            Total Usable Carpet Area Specification
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
                                    ? 'bg-white text-emerald-700 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            {conf} Layout
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
                        <div className="flex justify-between items-baseline mb-2.5">
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                Total Usable Carpet Footprint
                            </span>
                            <span className="text-sm font-black text-emerald-700">
                                {current.totalUsableCarpet} Sq. Ft. Cumulative Carpet Area
                            </span>
                        </div>

                        {/* Visual Single Cumulative Proportion Bar (No breakup of carpet and balcony) */}
                        <div className="h-12 rounded-2xl overflow-hidden flex shadow-inner bg-slate-100 p-1">
                            <div className="w-full h-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 rounded-xl flex items-center justify-between px-4 text-white text-xs font-black tracking-wide shadow-sm">
                                <span className="flex items-center gap-1.5">
                                    <ShieldCheck className="w-4 h-4 text-emerald-200" />
                                    Total Usable Carpet Area (100% Usable Space)
                                </span>
                                <span className="text-sm font-black bg-white/20 px-3 py-1 rounded-lg">
                                    {current.totalUsableCarpet} Sq. Ft.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Room Dimensions Micro-Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Living / Dining</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.livingDining}</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Master Bedroom</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.masterBed}</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Bedroom 2</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.bed2}</span>
                        </div>
                        <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block">Modular Kitchen</span>
                            <span className="text-xs font-black text-slate-800 mt-1 block">{current.kitchen}</span>
                        </div>
                    </div>

                    {/* Legal Explainer Tooltip Card */}
                    <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                        <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <div className="text-xs text-emerald-950 leading-relaxed">
                            <strong>What is MahaRERA Cumulative Carpet Area?</strong> Under MahaRERA Section 2(k), it represents the net cumulative usable floor area within the apartment walls. PROPSMART REALTY presents the entire carpet area cumulatively with zero breakup and zero loading inflation, ensuring you only pay for real private usable space.
                        </div>
                    </div>
                </div>

                {/* Right Stat Summary Card */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-3xl shadow-xl flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                Verified Architectural Plan
                            </span>
                            <span className="text-[10px] font-bold bg-white/10 px-2.5 py-0.5 rounded-full text-white/90">
                                Sanctioned Layout
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2.5 border-b border-white/10">
                                <span className="text-xs text-slate-300">Selected Layout:</span>
                                <span className="text-sm font-black text-white">{selectedConfig} Luxury Plan</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 border-b border-white/10">
                                <span className="text-xs text-slate-300">Space Efficiency:</span>
                                <span className="text-sm font-extrabold text-emerald-400">{current.usableEfficiency}</span>
                            </div>
                            <div className="flex justify-between items-center py-2.5 border-b border-white/10">
                                <span className="text-xs text-slate-300">Bathroom Count:</span>
                                <span className="text-sm font-extrabold text-teal-300">{current.bathrooms}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                                    Total Cumulative Carpet Area:
                                </span>
                                <span className="text-2xl font-black text-emerald-300">
                                    {current.totalUsableCarpet} Sq. Ft.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Cumulative figure certified under MahaRERA Sanctioned Layout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarpetAreaInfographic;
