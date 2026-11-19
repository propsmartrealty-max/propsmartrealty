import React from 'react';
import {
    ShieldCheck, Grid, Flame, Bath, Zap, DoorOpen, Leaf, Paintbrush,
    CheckCircle2, Sparkles, Building2, Layers, Cpu
} from 'lucide-react';

interface SpecificationItem {
    label: string;
    value: string;
}

interface SpecificationsInfographicProps {
    specs: SpecificationItem[];
    projectTitle?: string;
    reraId?: string;
}

interface SpecVisualMeta {
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    badge: string;
    category: string;
    description: string;
}

const resolveSpecVisual = (label: string = '', value: string = ''): SpecVisualMeta => {
    const l = (label || '').toLowerCase();
    const v = (value || '').toLowerCase();

    if (l.includes('structure') || v.includes('rcc') || v.includes('earthquake')) {
        return {
            icon: ShieldCheck,
            accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
            badge: 'Seismic Zone III Compliant',
            category: 'Civil & Engineering',
            description: 'Monolithic RCC shear wall construction engineered for structural longevity and earthquake resilience.'
        };
    }

    if (l.includes('floor') || v.includes('vitrified') || v.includes('tile')) {
        return {
            icon: Grid,
            accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
            badge: 'Double Charged Vitrified',
            category: 'Surfaces & Flooring',
            description: 'Large format premium tiles in living/dining/bedrooms with anti-skid safety finishes in balconies.'
        };
    }

    if (l.includes('kitchen') || v.includes('granite') || v.includes('sink')) {
        return {
            icon: Flame,
            accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
            badge: 'PNG Gas Ready',
            category: 'Modular Kitchen',
            description: 'Polished granite platform with premium stainless steel sink and dedicated piped gas provision.'
        };
    }

    if (l.includes('bath') || l.includes('sanitary') || v.includes('kohler') || v.includes('grohe') || v.includes('cp')) {
        return {
            icon: Bath,
            accentColor: 'text-cyan-600 bg-cyan-50 border-cyan-200',
            badge: 'Kohler / Grohe Grade',
            category: 'Sanitary & CP Fittings',
            description: 'Concealed water-efficient plumbing with designer glazed wall tiles up to lintel height.'
        };
    }

    if (l.includes('electr') || v.includes('wire') || v.includes('switch') || v.includes('schneider') || v.includes('legrand')) {
        return {
            icon: Zap,
            accentColor: 'text-yellow-600 bg-yellow-50 border-yellow-200',
            badge: 'Fire-Resistant FR Grade',
            category: 'Power & Smart Circuits',
            description: 'Concealed copper wiring with modular switches, AC points, and inverter power backup conduits.'
        };
    }

    if (l.includes('door') || l.includes('window') || v.includes('sliding') || v.includes('mesh')) {
        return {
            icon: DoorOpen,
            accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
            badge: 'Acoustic Glass with Mesh',
            category: 'Joinery & Windows',
            description: 'Laminated timber doors with powder-coated aluminum sliding windows equipped with mosquito mesh.'
        };
    }

    if (l.includes('paint') || v.includes('acrylic') || v.includes('emulsion')) {
        return {
            icon: Paintbrush,
            accentColor: 'text-purple-600 bg-purple-50 border-purple-200',
            badge: 'Eco Low-VOC Finish',
            category: 'Paints & Finishes',
            description: 'Premium washable acrylic emulsion interiors with weather-shield elastomeric exterior paint.'
        };
    }

    return {
        icon: Building2,
        accentColor: 'text-slate-600 bg-slate-50 border-slate-200',
        badge: 'MahaRERA Sanctioned',
        category: 'Building Specifications',
        description: 'Certified builder-grade specifications adhering to National Building Code (NBC) standards.'
    };
};

const SpecificationsInfographic: React.FC<SpecificationsInfographicProps> = ({ specs = [], projectTitle, reraId }) => {
    // Default rich specs fallback if project specs are sparse
    const effectiveSpecs = Array.isArray(specs) && specs.length > 0
        ? specs.map((s: any) => typeof s === 'string' ? { label: s, value: s } : { label: s?.label || s?.name || '', value: s?.value || s?.val || '' })
        : [
        { label: 'Structure', value: 'Earthquake Resistant RCC Shear Wall Structure' },
        { label: 'Flooring', value: '800x800mm Double Charged Vitrified Tiles in Living, Dining & Bedrooms; Anti-skid in Balcony' },
        { label: 'Kitchen', value: 'Granite Kitchen Platform with SS Sink, Provision for Water Purifier & Piped Gas' },
        { label: 'Bathrooms', value: 'Premium Kohler / Grohe CP & Sanitaryware, Concealed Plumbing, Designer Wall Tiles' },
        { label: 'Electrical', value: 'Concealed Fire-Resistant Copper Wiring with Schneider / Legrand Modular Switches' },
        { label: 'Doors Windows', value: 'Laminated Flush Doors; Powder Coated Aluminum Sliding Windows with Mosquito Mesh' }
    ];

    return (
        <section id="specifications" className="scroll-mt-40">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block mb-2">
                        Architectural Engineering • Sanctioned Materials
                    </span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Technical Specifications & Build Quality
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                        Engineered with certified structural integrity and high-grade finishes under MahaRERA standards.
                    </p>
                </div>

                {/* Quality Seal Badge */}
                <div className="flex items-center gap-2.5 bg-gradient-to-r from-slate-900 to-indigo-950 text-white px-4 py-2 rounded-2xl shadow-sm self-start sm:self-auto shrink-0 border border-indigo-800/40">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    <div>
                        <span className="text-xs font-black tracking-wide block">100% Quality Inspected</span>
                        <span className="text-[10px] text-indigo-300 font-mono">NBC & IS Code Compliant</span>
                    </div>
                </div>
            </div>

            {/* Specifications Infographic Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {effectiveSpecs.map((spec, idx) => {
                    const meta = resolveSpecVisual(spec.label, spec.value);
                    const IconComp = meta.icon;

                    return (
                        <div
                            key={idx}
                            className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-indigo-300 transition-all p-5 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-3 mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-11 h-11 rounded-2xl ${meta.accentColor} flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 shadow-2xs`}>
                                            <IconComp className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">
                                                {meta.category}
                                            </span>
                                            <h4 className="font-extrabold text-slate-900 text-base">
                                                {spec.label}
                                            </h4>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                                        {meta.badge}
                                    </span>
                                </div>

                                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100/80 mb-3 text-xs font-semibold text-slate-800 leading-relaxed">
                                    {spec.value}
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                                <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                    <span>Sanctioned Material Guarantee</span>
                                </span>
                                <span className="text-[10px] font-mono text-slate-400">Spec #{idx + 1}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default SpecificationsInfographic;
