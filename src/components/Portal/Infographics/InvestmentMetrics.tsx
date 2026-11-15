import React from 'react';
import { TrendingUp, Percent, IndianRupee, BarChart3, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface InvestmentMetricsProps {
    location?: string;
    priceRange?: string;
    pricePerSqft?: number;
    className?: string;
}

const InvestmentMetrics: React.FC<InvestmentMetricsProps> = ({
    location = 'Hinjewadi',
    priceRange = '₹85 Lakh - ₹1.45 Cr',
    pricePerSqft = 7800,
    className = ''
}) => {
    // Locality realistic benchmark stats
    const localityData: Record<string, { cagr: string; rentalYield: string; avgSqft: number; demandIndex: string }> = {
        'Hinjewadi': { cagr: '+11.8%', rentalYield: '4.4% - 4.8%', avgSqft: 8100, demandIndex: 'Very High (IT Tech Hub)' },
        'Baner': { cagr: '+13.2%', rentalYield: '3.9% - 4.3%', avgSqft: 9800, demandIndex: 'Peak Luxury Demand' },
        'Kharadi': { cagr: '+12.5%', rentalYield: '4.2% - 4.6%', avgSqft: 8900, demandIndex: 'High IT & BFSI Inflow' },
        'Balewadi': { cagr: '+12.1%', rentalYield: '4.0% - 4.4%', avgSqft: 9400, demandIndex: 'High High-Street Growth' },
        'Mahalunge': { cagr: '+14.5%', rentalYield: '4.5% - 5.0%', avgSqft: 7400, demandIndex: 'Fastest Emerging Micro-market' },
        'Pimple Nilakh': { cagr: '+10.9%', rentalYield: '3.8% - 4.2%', avgSqft: 9200, demandIndex: 'Established Residential' }
    };

    const data = localityData[location] || {
        cagr: '+12.2%',
        rentalYield: '4.2% - 4.6%',
        avgSqft: 8200,
        demandIndex: 'High Growth Corridor'
    };

    const isBelowMarket = pricePerSqft > 0 && pricePerSqft < data.avgSqft;
    const discountPercent = pricePerSqft > 0 ? Math.abs(Math.round(((data.avgSqft - pricePerSqft) / data.avgSqft) * 100)) : 5;

    return (
        <div className={`bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm mb-12 ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                        <TrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                                Real Estate Financial Intelligence
                            </span>
                            <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold border border-amber-200">
                                5-Year Data Model
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                            Investment Yield & Appreciation Metrics
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 text-xs font-bold text-slate-700">
                    <span>Market:</span>
                    <span className="text-emerald-700 font-extrabold">{location}, Pune</span>
                </div>
            </div>

            {/* Infographic 4-Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {/* 1. Annual Appreciation CAGR */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/80 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                            Annual Capital Growth
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-700 flex items-center justify-center">
                            <ArrowUpRight className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-3xl font-black text-emerald-950 tracking-tight">
                        {data.cagr}
                    </div>
                    <p className="text-xs text-emerald-700 mt-1 font-medium">
                        3-Year Compound Annual Growth in {location}
                    </p>
                </div>

                {/* 2. Gross Rental Yield */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/80 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                            Gross Rental Yield
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-700 flex items-center justify-center">
                            <Percent className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-3xl font-black text-blue-950 tracking-tight">
                        {data.rentalYield}
                    </div>
                    <p className="text-xs text-blue-700 mt-1 font-medium">
                        Expected Annual Rental Return on Investment
                    </p>
                </div>

                {/* 3. Locality Benchmark Bar */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/80 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                            Market Pricing Index
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-700 flex items-center justify-center">
                            <BarChart3 className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-2xl font-black text-amber-950 tracking-tight">
                        ₹{data.avgSqft} <span className="text-xs font-semibold text-amber-800">/ sq.ft avg</span>
                    </div>
                    <p className="text-xs text-amber-800 mt-1 font-medium">
                        {isBelowMarket
                            ? `🔥 ${discountPercent}% below locality average`
                            : '⚡ Competitive Grade-A developer price'}
                    </p>
                </div>

                {/* 4. Demand & Liquidity Index */}
                <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100/80 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-purple-800">
                            Rental Liquidity
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-700 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="text-xl font-black text-purple-950 tracking-tight">
                        {data.demandIndex}
                    </div>
                    <p className="text-xs text-purple-700 mt-1 font-medium">
                        Average tenant absorption within 14-21 days
                    </p>
                </div>
            </div>

            {/* Bottom Insight Bar */}
            <div className="mt-6 p-4 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-slate-300">
                        <strong>PROPSMART REALTY Partner Advisory:</strong> Zero brokerage for buyers. All pricing directly matched with sanctioned developer inventory.
                    </span>
                </div>
                <span className="text-amber-400 font-bold tracking-wide shrink-0">
                    MahaRERA: A031262401295
                </span>
            </div>
        </div>
    );
};

export default InvestmentMetrics;
