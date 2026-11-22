import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X, Phone, MessageCircle, ChevronDown, ChevronRight, MapPin } from 'lucide-react';
import { NAVIGATION_CONFIG, NavItem } from '../../config/navigation';
import { getWhatsAppUrl } from '../../utils/whatsappUtils';
import RERABadge, { PROPSMART_RERA } from './RERABadge';
import PropsmartLogo from './PropsmartLogo';

const NAV_CITIES = [
    { id: 'Pune', label: 'Pune', count: '576' },
    { id: 'Mumbai', label: 'Mumbai', count: '23' },
    { id: 'Lonavala', label: 'Lonavala', count: '4' },
    { id: 'Alibaug', label: 'Alibaug', count: '2' },
];

const PortalNavbar = ({ variant = 'transparent' }: { variant?: 'transparent' | 'colored' }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [cityMenuOpen, setCityMenuOpen] = useState(false);
    const location = useLocation();

    // Pages with a dark hero section where a transparent navbar is appropriate:
    const isDarkHeroPage = location.pathname === '/' || location.pathname.startsWith('/builder/');
    // If route doesn't have a dark hero, automatically default to colored/solid navbar
    const effectiveVariant = (variant === 'transparent' && !isDarkHeroPage) ? 'colored' : variant;
    const isSolid = scrolled || effectiveVariant === 'colored';

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check in case page is loaded scrolled
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileExpand = (name: string) => {
        setMobileExpanded(mobileExpanded === name ? null : name);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isSolid 
                        ? 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(14,165,233,0.07)] border-b border-white/70 py-2.5' 
                        : 'bg-transparent py-4'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">

                        {/* Brand Logo & City Quick Selector */}
                        <div className="flex items-center gap-2.5 sm:gap-3 z-50">
                            <Link to="/" className="flex items-center group" title="PROPSMART REALTY" aria-label="Propsmart Realty Homepage">
                                <PropsmartLogo isSolid={isSolid} />
                            </Link>
                            <RERABadge variant="compact" isSolid={isSolid} className="hidden xl:inline-flex" />

                            {/* City Switcher Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setCityMenuOpen(!cityMenuOpen)}
                                    aria-label="Select City"
                                    className={`px-3.5 py-2 min-h-[44px] rounded-full text-xs font-black transition-all flex items-center gap-1.5 border shadow-2xs glass-pill ${
                                        isSolid
                                            ? 'bg-white/75 text-slate-800 border-white/80 hover:bg-white hover:border-sky-300'
                                            : 'bg-white/15 text-white border-white/20 hover:bg-white/25 backdrop-blur-md'
                                    }`}
                                >
                                    <MapPin className="w-3.5 h-3.5 text-sky-500 animate-pulse" />
                                    <span>Cities</span>
                                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${cityMenuOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {cityMenuOpen && (
                                    <div className="absolute top-full left-0 mt-2 w-52 glass-panel rounded-2xl shadow-2xl border border-white/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <div className="text-[10px] font-black uppercase text-sky-600 px-2.5 py-1 tracking-wider flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span>
                                            Select City
                                        </div>
                                        {NAV_CITIES.map((c) => (
                                            <Link
                                                key={c.id}
                                                to={`/search?city=${encodeURIComponent(c.id)}`}
                                                onClick={() => setCityMenuOpen(false)}
                                                className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-sky-50/80 hover:text-sky-700 transition-colors"
                                            >
                                                <span>{c.label}</span>
                                                <span className="text-[10px] bg-sky-100/80 text-sky-700 px-2 py-0.5 rounded-full font-black">
                                                    {c.count}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Desktop Links with Glassmorphism */}
                        <div className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full border transition-all shrink-0 ${
                            isSolid 
                                ? 'bg-white/70 backdrop-blur-xl border-white/80 shadow-glass-sm' 
                                : 'bg-black/20 backdrop-blur-md border-white/15'
                        }`}>
                            {NAVIGATION_CONFIG.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onMouseEnter={() => setActiveDropdown(item.name)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.children ? (
                                        <button
                                            className={`px-3 lg:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                                                isSolid 
                                                    ? 'text-slate-700 hover:text-sky-600 hover:bg-sky-50/60' 
                                                    : 'text-white/90 hover:text-white hover:bg-white/15'
                                            }`}
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            to={item.path!}
                                            className={`px-3 lg:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                                                item.highlight
                                                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25 hover:shadow-sky-500/40'
                                                    : isSolid
                                                        ? 'text-slate-700 hover:text-sky-600 hover:bg-sky-50/60'
                                                        : 'text-white/90 hover:text-white hover:bg-white/15'
                                            }`}
                                        >
                                            {item.name}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {item.children && activeDropdown === item.name && (
                                        <div
                                            className="absolute top-full left-0 mt-2 w-60 glass-panel rounded-2xl shadow-2xl border border-white/80 overflow-hidden p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                                        >
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.name}
                                                    to={child.path!}
                                                    className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-sky-50/80 hover:text-sky-600 transition-colors"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Actions with Water Flow Buttons */}
                        <div className="flex items-center gap-2.5 shrink-0">
                            <a 
                                href={getWhatsAppUrl()} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Contact PROPSMART on WhatsApp"
                                className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full font-bold text-xs transition-all water-btn bg-emerald-500/90 hover:bg-emerald-600 text-white shadow-md shadow-emerald-500/20 backdrop-blur-md border border-emerald-400/50"
                            >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span className="hidden xl:inline">WhatsApp</span>
                            </a>

                            <a 
                                href="tel:+917744009295" 
                                aria-label="Call PROPSMART at +91 7744009295"
                                className={`hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full font-bold text-xs transition-all water-btn ${
                                    isSolid 
                                        ? 'bg-white/80 hover:bg-white text-slate-800 shadow-sm border border-slate-200/80' 
                                        : 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-md border border-white/25'
                                }`}
                            >
                                <Phone className="w-3.5 h-3.5 text-sky-500" />
                                <span className="hidden xl:inline">+91 7744009295</span>
                            </a>

                            <button 
                                className={`p-3 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full lg:hidden transition-colors ${isSolid ? 'text-slate-900 bg-white/60 backdrop-blur-md' : 'text-white bg-black/20 backdrop-blur-md'}`} 
                                onClick={() => setMobileMenuOpen(true)}
                                aria-label="Open Mobile Menu"
                            >
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-white/95 backdrop-blur-2xl overflow-y-auto animate-in fade-in slide-in-from-right duration-200"
                >
                    <div className="p-5 flex justify-between items-center border-b border-sky-100/60 sticky top-0 bg-white/80 backdrop-blur-xl z-10">
                        <PropsmartLogo variant="light" />
                        <button onClick={() => setMobileMenuOpen(false)} className="p-2.5 bg-sky-50 rounded-full text-slate-700 hover:bg-sky-100" aria-label="Close menu">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        {NAVIGATION_CONFIG.map((item) => (
                            <div key={item.name} className="border-b border-gray-50 last:border-0">
                                {item.children ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileExpand(item.name)}
                                            className="w-full text-lg font-bold text-slate-800 py-3 flex justify-between items-center"
                                        >
                                            <span className="flex items-center gap-3">
                                                {item.icon && <item.icon className="w-5 h-5 text-gray-400" />}
                                                {item.name}
                                            </span>
                                            <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${mobileExpanded === item.name ? 'rotate-90' : ''}`} />
                                        </button>
                                        {mobileExpanded === item.name && (
                                            <div className="overflow-hidden bg-slate-50 rounded-xl animate-in fade-in duration-150">
                                                <div className="p-3 flex flex-col gap-2">
                                                    {item.children.map(child => (
                                                        <Link
                                                            key={child.name}
                                                            to={child.path!}
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-white rounded-lg transition-colors"
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={item.path!}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-lg font-bold py-3 flex justify-between items-center ${item.highlight ? 'text-brand-600' : 'text-slate-800'}`}
                                    >
                                        <span className="flex items-center gap-3">
                                            {item.icon && <item.icon className={`w-5 h-5 ${item.highlight ? 'text-brand-600' : 'text-gray-400'}`} />}
                                            {item.name}
                                        </span>
                                    </Link>
                                )}
                            </div>
                        ))}

                        <div className="mt-8 flex flex-col gap-3">
                            <a href={getWhatsAppUrl()} className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200">
                                Login / Sign Up
                            </button>

                            {/* Mobile RERA Verification */}
                            <a
                                href={PROPSMART_RERA.portalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-left hover:bg-slate-100 transition-colors"
                            >
                                <div>
                                    <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block">MahaRERA Registered Agent</span>
                                    <span className="text-sm font-extrabold text-slate-900 tracking-wide">{PROPSMART_RERA.number}</span>
                                </div>
                                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Verified</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PortalNavbar;
