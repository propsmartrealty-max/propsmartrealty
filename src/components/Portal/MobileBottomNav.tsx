import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, ShieldCheck, Scale, MessageCircle } from 'lucide-react';
import { useData } from '../../context/DataContext';
import { getWhatsAppUrl } from '../../utils/whatsappUtils';

export const MobileBottomNav: React.FC = () => {
    const location = useLocation();
    const { compareList = [] } = useData();
    const pathname = location.pathname.toLowerCase();

    // Hide Mobile Bottom Nav on Admin routes and Project Details (which has its own dedicated CTA bar)
    const isAdminRoute = pathname.startsWith('/admin');
    const isProjectDetailsRoute = pathname.startsWith('/project/') || pathname.startsWith('/projects/') || pathname.startsWith('/property/');
    
    if (isAdminRoute || isProjectDetailsRoute) {
        return null;
    }

    const isHomeActive = pathname === '/';
    const isSearchActive = pathname.startsWith('/search') || 
                           pathname.startsWith('/flats-in') || 
                           pathname.startsWith('/properties-in') || 
                           pathname === '/pune' || 
                           pathname === '/mumbai' || 
                           pathname === '/thane' || 
                           pathname === '/navi-mumbai' ||
                           pathname === '/directory';
    const isCompareActive = pathname === '/compare';
    const isReraActive = pathname.startsWith('/verify-rera') || pathname.startsWith('/maharera-verification');

    return (
        <aside 
            aria-label="Mobile Navigation Bar"
            className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/92 backdrop-blur-2xl border-t border-slate-200/80 shadow-[0_-8px_32px_rgba(14,165,233,0.09)] pb-safe pt-1.5 px-3 transition-transform duration-300 pointer-events-auto"
        >
            <nav className="max-w-lg mx-auto flex items-center justify-around">
                {/* 1. Home */}
                <Link
                    to="/"
                    className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                        isHomeActive
                            ? 'text-sky-600'
                            : 'text-slate-500 hover:text-slate-900'
                    }`}
                    aria-label="Home"
                >
                    <div className={`p-1.5 rounded-xl transition-colors ${isHomeActive ? 'bg-sky-50 shadow-2xs' : ''}`}>
                        <Home className={`w-5 h-5 ${isHomeActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                    </div>
                    <span className={`text-[10px] mt-0.5 tracking-tight ${isHomeActive ? 'font-black text-sky-700' : 'font-semibold'}`}>
                        Home
                    </span>
                </Link>

                {/* 2. Explore / Search */}
                <Link
                    to="/search"
                    className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                        isSearchActive
                            ? 'text-sky-600'
                            : 'text-slate-500 hover:text-slate-900'
                    }`}
                    aria-label="Search Properties"
                >
                    <div className={`p-1.5 rounded-xl transition-colors ${isSearchActive ? 'bg-sky-50 shadow-2xs' : ''}`}>
                        <Search className={`w-5 h-5 ${isSearchActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                    </div>
                    <span className={`text-[10px] mt-0.5 tracking-tight ${isSearchActive ? 'font-black text-sky-700' : 'font-semibold'}`}>
                        Explore
                    </span>
                </Link>

                {/* 3. Compare (with Live Badge) */}
                <Link
                    to="/compare"
                    className={`relative flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                        isCompareActive
                            ? 'text-sky-600'
                            : 'text-slate-500 hover:text-slate-900'
                    }`}
                    aria-label={`Compare Projects (${compareList.length} selected)`}
                >
                    <div className={`p-1.5 rounded-xl relative transition-colors ${isCompareActive ? 'bg-sky-50 shadow-2xs' : ''}`}>
                        <Scale className={`w-5 h-5 ${isCompareActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                        {compareList.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-xs animate-in zoom-in-50 duration-200">
                                {compareList.length}
                            </span>
                        )}
                    </div>
                    <span className={`text-[10px] mt-0.5 tracking-tight ${isCompareActive ? 'font-black text-sky-700' : 'font-semibold'}`}>
                        Compare
                    </span>
                </Link>

                {/* 4. MahaRERA Verification */}
                <Link
                    to="/verify-rera"
                    className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl transition-all duration-200 active:scale-90 ${
                        isReraActive
                            ? 'text-emerald-600'
                            : 'text-slate-500 hover:text-slate-900'
                    }`}
                    aria-label="Verify MahaRERA"
                >
                    <div className={`p-1.5 rounded-xl transition-colors ${isReraActive ? 'bg-emerald-50 shadow-2xs' : ''}`}>
                        <ShieldCheck className={`w-5 h-5 ${isReraActive ? 'stroke-[2.5] text-emerald-600' : 'stroke-2'}`} />
                    </div>
                    <span className={`text-[10px] mt-0.5 tracking-tight ${isReraActive ? 'font-black text-emerald-700' : 'font-semibold'}`}>
                        RERA
                    </span>
                </Link>

                {/* 5. WhatsApp Direct Chat */}
                <a
                    href={getWhatsAppUrl("Hi Propsmart Team, I am looking for verified 0% brokerage properties in Pune/Mumbai.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center py-1 px-2.5 rounded-2xl text-emerald-600 hover:text-emerald-700 transition-all duration-200 active:scale-90"
                    aria-label="Chat on WhatsApp"
                >
                    <div className="p-1.5 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/25">
                        <MessageCircle className="w-5 h-5 fill-white stroke-none" />
                    </div>
                    <span className="text-[10px] mt-0.5 font-black text-emerald-700 tracking-tight">
                        WhatsApp
                    </span>
                </a>
            </nav>
        </aside>
    );
};

export default MobileBottomNav;
