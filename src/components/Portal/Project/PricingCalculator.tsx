import React, { useState } from 'react';
import { Calculator, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ProjectConfiguration } from '../../../types';
import { openWhatsApp } from '../../../utils/whatsappUtils';

interface PricingCalculatorProps {
    configurations: ProjectConfiguration[];
}

const PricingCalculator: React.FC<PricingCalculatorProps> = ({ configurations }) => {
    const [selectedConfigId, setSelectedConfigId] = useState<string>(configurations[0]?.id || '');
    const [floorRise, setFloorRise] = useState<number>(5); // Default 5th floor

    const selectedConfig = configurations.find(c => c.id === selectedConfigId);

    if (!selectedConfig) return null;

    // Cumulative Carpet Area Calculation (no breakup of carpet vs balcony)
    const cumulativeCarpetArea = Number(selectedConfig.carpetArea || 0) + Number(selectedConfig.balconyArea || 0);

    // Floor Rise calculation
    const FLOOR_RISE_RATE = 50;
    const floorRiseCost = (floorRise - 1) * FLOOR_RISE_RATE * (cumulativeCarpetArea || 750);

    // Agreement component calculation for statutory calculation
    const baseComponent = Number(selectedConfig.basePrice) || 0;
    const infraComponent = (Number(selectedConfig.infraCharges) || 0) + (Number(selectedConfig.clubhouseCharges) || 0);
    const subtotal = baseComponent + floorRiseCost + infraComponent;

    // Statutory inclusions (incorporated into the final on-road price)
    const stampDuty = subtotal * ((selectedConfig.stampDutyRate || 7) / 100);
    const gst = subtotal * ((selectedConfig.gstRate || 5) / 100);
    const registration = Number(selectedConfig.registrationCharges) || 30000;

    // 100% All-Inclusive Price (no separate agreement value or separate stamp duty)
    const allInclusivePrice = Math.round(subtotal + stampDuty + gst + registration);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 p-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Calculator className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-extrabold text-base sm:text-lg">All-Inclusive Cost Sheet</h3>
                        <p className="text-[11px] text-slate-300">100% All-Inclusive • Zero Brokerage</p>
                    </div>
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    MahaRERA Compliant
                </span>
            </div>

            <div className="p-6 space-y-6">
                {/* Configuration Selector */}
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                        Select Unit Type
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                        {configurations.map(conf => {
                            const confTotalCarpet = Number(conf.carpetArea || 0) + Number(conf.balconyArea || 0);
                            const isSelected = selectedConfigId === conf.id;
                            return (
                                <button
                                    key={conf.id}
                                    onClick={() => setSelectedConfigId(conf.id)}
                                    className={`p-3 rounded-2xl text-left border transition-all ${
                                        isSelected
                                            ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-900 shadow-md'
                                            : 'bg-slate-50 hover:bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                                    }`}
                                >
                                    <span className="block font-black text-sm">{conf.name}</span>
                                    <span className={`block text-xs font-bold mt-0.5 ${isSelected ? 'text-emerald-300' : 'text-slate-500'}`}>
                                        {confTotalCarpet} sq.ft Total Carpet Area
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Floor Selection Slider */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex justify-between items-baseline mb-2">
                        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Select Floor Level
                        </label>
                        <span className="text-xs font-black text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-md">
                            {floorRise}th Floor Selected
                        </span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="30"
                        value={floorRise}
                        onChange={(e) => setFloorRise(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-1.5">
                        <span>1st Floor</span>
                        <span>Mid Rise</span>
                        <span>30th Floor</span>
                    </div>
                </div>

                {/* Single Cumulative Summary Card (NO separate agreement value vs stamp duty breakup) */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-2xl p-5 shadow-lg space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div>
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                                Total Cumulative Carpet Area
                            </span>
                            <span className="text-lg font-black text-white">
                                {cumulativeCarpetArea} Sq. Ft.
                            </span>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                                Selected Layout
                            </span>
                            <span className="text-sm font-bold text-emerald-300">
                                {selectedConfig.name}
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-extrabold uppercase tracking-widest mb-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            All-Inclusive Price
                        </div>
                        <p className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                            {formatCurrency(allInclusivePrice)}
                        </p>
                        <p className="text-xs text-slate-300 mt-1">
                            100% All-Inclusive On-Road Price • No Hidden Costs • No Separate Taxes
                        </p>
                    </div>

                    <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>Stamp Duty &amp; Registration Fully Included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>GST &amp; Infrastructure Development Charges Fully Included</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>100% Zero Brokerage Fee (Direct Builder Sales Mandate)</span>
                        </div>
                    </div>
                </div>

                <button
                    onClick={() => openWhatsApp(`Hi PROPSMART, please send me the official all-inclusive cost sheet for ${selectedConfig.name} (${cumulativeCarpetArea} sq.ft Carpet Area) on floor ${floorRise} with all-inclusive price ${formatCurrency(allInclusivePrice)}.`)}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-black text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/40 active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                    Get Official All-Inclusive Cost Sheet (PDF)
                </button>
            </div>
        </div>
    );
};

export default PricingCalculator;
