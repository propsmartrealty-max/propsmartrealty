import React from 'react';
import { Train, Briefcase, GraduationCap, Hospital, ShoppingBag, Plane, Car, Navigation } from 'lucide-react';

interface TransitConnectivityProps {
    location?: string;
    className?: string;
}

const TransitConnectivity: React.FC<TransitConnectivityProps> = ({
    location = 'Hinjewadi',
    className = ''
}) => {
    // Dynamic connectivity based on location
    const connectivityMap: Record<string, Array<{ icon: any; label: string; time: string; distance: string; color: string }>> = {
        'Hinjewadi': [
            { icon: Train, label: 'Pune Metro Line 3 Station', time: '4 Mins', distance: '1.2 km', color: 'bg-emerald-50 text-emerald-600' },
            { icon: Briefcase, label: 'Rajiv Gandhi IT Park Phase 1 & 2', time: '6 Mins', distance: '2.4 km', color: 'bg-blue-50 text-blue-600' },
            { icon: Car, label: 'Mumbai-Pune Expressway', time: '8 Mins', distance: '3.8 km', color: 'bg-amber-50 text-amber-600' },
            { icon: GraduationCap, label: 'Blue Ridge Public / Mercedes-Benz Int. School', time: '5 Mins', distance: '1.9 km', color: 'bg-indigo-50 text-indigo-600' },
            { icon: Hospital, label: 'Ruby Hall Clinic / Lifepoint Hospital', time: '7 Mins', distance: '3.1 km', color: 'bg-rose-50 text-rose-600' },
            { icon: ShoppingBag, label: 'Phoenix Mall of the Millennium (Wakad)', time: '12 Mins', distance: '5.5 km', color: 'bg-purple-50 text-purple-600' },
            { icon: Plane, label: 'Pune International Airport (Lohegaon)', time: '45 Mins', distance: '24 km', color: 'bg-teal-50 text-teal-600' },
            { icon: Navigation, label: 'Bhumkar Chowk / NH 48', time: '7 Mins', distance: '3.2 km', color: 'bg-slate-100 text-slate-700' },
        ],
        'Kharadi': [
            { icon: Train, label: 'Ramwadi Metro Station', time: '6 Mins', distance: '2.5 km', color: 'bg-emerald-50 text-emerald-600' },
            { icon: Briefcase, label: 'EON Free Zone & WTC Kharadi', time: '3 Mins', distance: '1.1 km', color: 'bg-blue-50 text-blue-600' },
            { icon: ShoppingBag, label: 'Phoenix Marketcity Viman Nagar', time: '10 Mins', distance: '4.8 km', color: 'bg-purple-50 text-purple-600' },
            { icon: Plane, label: 'Pune International Airport', time: '18 Mins', distance: '8.5 km', color: 'bg-teal-50 text-teal-600' },
            { icon: GraduationCap, label: 'Podar International / The Orbis School', time: '5 Mins', distance: '1.8 km', color: 'bg-indigo-50 text-indigo-600' },
            { icon: Hospital, label: 'Manipal Hospital / Columbia Asia', time: '6 Mins', distance: '2.2 km', color: 'bg-rose-50 text-rose-600' },
            { icon: Car, label: 'Pune-Ahmednagar Highway', time: '5 Mins', distance: '2.0 km', color: 'bg-amber-50 text-amber-600' },
            { icon: Navigation, label: 'Koregaon Park & Kalyani Nagar', time: '12 Mins', distance: '6.2 km', color: 'bg-slate-100 text-slate-700' },
        ],
        'Baner': [
            { icon: Train, label: 'Balewadi Phata Metro Station', time: '3 Mins', distance: '1.0 km', color: 'bg-emerald-50 text-emerald-600' },
            { icon: Briefcase, label: 'Amar Tech Park / Hinjewadi IT Phase 1', time: '12 Mins', distance: '6.5 km', color: 'bg-blue-50 text-blue-600' },
            { icon: ShoppingBag, label: 'Balewadi High Street & Westend Mall', time: '5 Mins', distance: '1.8 km', color: 'bg-purple-50 text-purple-600' },
            { icon: Car, label: 'Mumbai-Bengaluru Highway (NH 48)', time: '4 Mins', distance: '1.5 km', color: 'bg-amber-50 text-amber-600' },
            { icon: Hospital, label: 'Jupiter Hospital / Manipal Baner', time: '6 Mins', distance: '2.4 km', color: 'bg-rose-50 text-rose-600' },
            { icon: GraduationCap, label: 'The Orchid School / VIBGYOR High', time: '7 Mins', distance: '2.8 km', color: 'bg-indigo-50 text-indigo-600' },
            { icon: Plane, label: 'Pune International Airport', time: '38 Mins', distance: '19 km', color: 'bg-teal-50 text-teal-600' },
            { icon: Navigation, label: 'Shivajinagar Central Business District', time: '20 Mins', distance: '10 km', color: 'bg-slate-100 text-slate-700' },
        ]
    };

    const items = connectivityMap[location] || connectivityMap['Hinjewadi'];

    return (
        <div className={`bg-white rounded-3xl p-6 md:p-8 border border-slate-200/80 shadow-sm mb-12 ${className}`}>
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center shrink-0">
                        <Navigation className="w-6 h-6" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-teal-600">
                                Spatial Connectivity Infographic
                            </span>
                            <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-bold">
                                Commute Score: 9.6/10
                            </span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                            Transit & Travel Times from Site
                        </h3>
                    </div>
                </div>

                <div className="text-xs font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                    Micro-Market: <strong className="text-slate-900">{location}</strong>
                </div>
            </div>

            {/* Picturized Connectivity Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {items.map((item, idx) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={idx}
                            className="p-4 rounded-2xl border border-slate-100 bg-slate-50/60 hover:bg-white hover:border-brand-200 hover:shadow-md transition-all flex items-start gap-3.5 group"
                        >
                            <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                <IconComponent className="w-5 h-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-baseline justify-between gap-1">
                                    <span className="text-sm font-black text-slate-900">{item.time}</span>
                                    <span className="text-[11px] font-bold text-slate-400">{item.distance}</span>
                                </div>
                                <h4 className="text-xs font-semibold text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                                    {item.label}
                                </h4>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TransitConnectivity;
