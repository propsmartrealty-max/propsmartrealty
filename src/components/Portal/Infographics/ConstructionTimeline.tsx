import React from 'react';
import { HardHat, CheckCircle2, Clock, Calendar, Check, ShieldAlert } from 'lucide-react';

interface Milestone {
    stage: string;
    description: string;
    progress: number; // 0 to 100
    status: 'completed' | 'in-progress' | 'scheduled';
    targetDate: string;
}

interface ConstructionTimelineProps {
    projectStatus?: string;
    possessionDate?: string;
    className?: string;
}

const ConstructionTimeline: React.FC<ConstructionTimelineProps> = ({
    projectStatus = 'Under Construction',
    possessionDate = 'Dec 2026',
    className = ''
}) => {
    const isReady = projectStatus === 'Ready to Move';

    const milestones: Milestone[] = isReady ? [
        { stage: 'Land & Approvals', description: 'Clear Land Title, IOD & Sanctioned Plans', progress: 100, status: 'completed', targetDate: 'Completed' },
        { stage: 'Substructure', description: 'Deep Excavation & Foundation Piling', progress: 100, status: 'completed', targetDate: 'Completed' },
        { stage: 'RCC Superstructure', description: 'All Floor Slabs Cast & Structural Curing', progress: 100, status: 'completed', targetDate: 'Completed' },
        { stage: 'Finishing & Services', description: 'Internal MEP, Elevators, Flooring & Facade', progress: 100, status: 'completed', targetDate: 'Completed' },
        { stage: 'Occupancy Certificate (OC)', description: 'MahaRERA & PMC Handover Approval', progress: 100, status: 'completed', targetDate: 'Received / Active' },
    ] : [
        { stage: 'Land & Approvals', description: 'Clear Land Title, IOD & Sanctioned Plans', progress: 100, status: 'completed', targetDate: 'Q1 2024' },
        { stage: 'Substructure', description: 'Deep Excavation & Foundation Piling', progress: 100, status: 'completed', targetDate: 'Q3 2024' },
        { stage: 'RCC Superstructure', description: '28 of 32 Slabs Cast with M40 Grade Concrete', progress: 85, status: 'in-progress', targetDate: 'Q2 2025' },
        { stage: 'Internal MEP & Finishing', description: 'Brickwork, Electrical Conduit & Plumbing lines', progress: 45, status: 'in-progress', targetDate: 'Q1 2026' },
        { stage: 'Final OC & Handover', description: 'MahaRERA Handover & Society Formation', progress: 0, status: 'scheduled', targetDate: possessionDate },
    ];

    const overallProgress = isReady ? 100 : 72;

    return (
        <div className={`bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm mb-12 ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                        <HardHat className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                                Real-Time Progress Tracker
                            </span>
                            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                                On-Site Audited
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                            Construction Milestone Infographic
                        </h3>
                    </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200/60">
                    <span className="text-xs font-bold text-slate-500">Overall Progress:</span>
                    <span className="text-lg font-black text-slate-900">{overallProgress}%</span>
                    <div className="w-20 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full transition-all duration-1000" style={{ width: `${overallProgress}%` }} />
                    </div>
                </div>
            </div>

            {/* Infographic Milestone Stepper */}
            <div className="relative">
                {/* Horizontal progress bar for desktop */}
                <div className="hidden lg:block absolute top-7 left-10 right-10 h-1.5 bg-slate-100 -z-0">
                    <div
                        className="h-full bg-emerald-500 transition-all duration-1000"
                        style={{ width: `${isReady ? 100 : 65}%` }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
                    {milestones.map((m, index) => {
                        const isDone = m.status === 'completed';
                        const isCurrent = m.status === 'in-progress';

                        return (
                            <div key={index} className="flex flex-col items-start lg:items-center text-left lg:text-center group">
                                {/* Step Circle */}
                                <div
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm transition-all duration-300 shadow-md ${
                                        isDone
                                            ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                                            : isCurrent
                                            ? 'bg-amber-500 text-white shadow-amber-500/30 ring-4 ring-amber-100 animate-pulse'
                                            : 'bg-slate-100 text-slate-400 border border-slate-200'
                                    }`}
                                >
                                    {isDone ? (
                                        <Check className="w-6 h-6 stroke-[3]" />
                                    ) : isCurrent ? (
                                        <Clock className="w-6 h-6" />
                                    ) : (
                                        <span>0{index + 1}</span>
                                    )}
                                </div>

                                {/* Milestone Content */}
                                <div className="mt-3 w-full">
                                    <div className="flex items-center gap-1.5 lg:justify-center mb-1">
                                        <span
                                            className={`text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                                                isDone
                                                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                                    : isCurrent
                                                    ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                                    : 'bg-slate-100 text-slate-500'
                                            }`}
                                        >
                                            {m.status === 'completed' ? '100% Done' : m.status === 'in-progress' ? `${m.progress}% Active` : 'Upcoming'}
                                        </span>
                                    </div>

                                    <h4 className="font-extrabold text-slate-900 text-sm mt-1">
                                        {m.stage}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                                        {m.description}
                                    </p>
                                    <span className="text-[11px] font-bold text-slate-700 mt-2 block flex items-center gap-1 lg:justify-center">
                                        <Calendar className="w-3 h-3 text-slate-400" />
                                        {m.targetDate}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Bottom Guarantee Strip */}
            <div className="mt-8 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>MahaRERA Escrow Account Guarantee:</strong> 70% of buyer collections are legally locked in a designated escrow account exclusively for construction completion.</span>
                </div>
                <span className="font-bold text-[11px] bg-emerald-200/80 px-2 py-1 rounded text-emerald-900 shrink-0">
                    Statutory Protection
                </span>
            </div>
        </div>
    );
};

export default ConstructionTimeline;
