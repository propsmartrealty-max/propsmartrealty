import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Rocket, Key, Home, Building, ShieldCheck, Building2, BadgePercent, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getLocalityImageUrl } from '../../../utils/localityUtils';
import { cloudflare } from '../../../services/cloudflare';

// Default Fallback Images
const DEFAULT_IMAGES = [
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628624747186-a941947771b9?q=80&w=2670&auto=format&fit=crop"
];

const TABS = [
    { id: 'buy', label: 'Buy', icon: <Home className="w-4 h-4" /> },
    { id: 'rent', label: 'Rent', icon: <Key className="w-4 h-4" /> },
    { id: 'projects', label: 'New Projects', icon: <Rocket className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial', icon: <Building className="w-4 h-4" /> },
];

const HeroSearch = () => {
    const navigate = useNavigate();
    const [heroImages, setHeroImages] = useState<string[]>(DEFAULT_IMAGES);
    const [currentImage, setCurrentImage] = useState(0);
    const [activeTab, setActiveTab] = useState('buy');
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    // Fetch Banners from Supabase with safe fallback
    useEffect(() => {
        const fetchBackgrounds = async () => {
            try {
                const { data, error } = await cloudflare
                    .from('banners')
                    .select('image_url')
                    .eq('is_active', true)
                    .order('sortorder');

                if (!error && data && data.length > 0) {
                    const checkImage = (url: string) => new Promise<boolean>((resolve) => {
                        const img = new Image();
                        img.onload = () => resolve(true);
                        img.onerror = () => resolve(false);
                        img.src = url;
                    });

                    const results = await Promise.all(data.map(async (b) => {
                        const isValid = await checkImage(b.image_url);
                        return isValid ? b.image_url : null;
                    }));

                    const filtered = results.filter(url => url !== null) as string[];
                    if (filtered.length > 0) {
                        setHeroImages(filtered);
                    }
                }
            } catch (err) {
                // Keep default high-res hero images
                console.warn('Hero banners fallback:', err);
            }
        };
        fetchBackgrounds();
    }, []);

    // Auto-rotate background
    useEffect(() => {
        if (heroImages.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}&type=${activeTab}`);
        }
    };

    return (
        <div className="relative min-h-[700px] lg:min-h-[740px] py-16 w-full flex flex-col items-center justify-center text-white bg-brand-950">

            {/* Background Slider with Parallax-like feel (isolated overflow) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
                    />
                </AnimatePresence>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/60 to-transparent" />
                <div className="absolute inset-0 bg-black/20" /> {/* Dimmer */}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col items-center mt-8">

                {/* Badges: Brokerage Free + Buy Direct with Builder */}
                <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 mb-5">
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="bg-emerald-500/25 backdrop-blur-md border border-emerald-400/50 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black text-white flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        ✨ 100% BROKERAGE FREE PLATFORM
                    </motion.div>

                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.05 }}
                        className="bg-amber-500/25 backdrop-blur-md border border-amber-400/50 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-black text-amber-200 flex items-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                    >
                        <Building2 className="w-3.5 h-3.5 text-amber-300" />
                        🏢 BUY DIRECTLY WITH BUILDER
                    </motion.div>
                </div>

                <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="flex justify-center mb-4"
                >
                    <a
                        href="https://maharera.maharashtra.gov.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold hover:bg-slate-900/80 transition-all shadow-md group"
                    >
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-white/80">Authorized MahaRERA Partner:</span>
                        <span className="font-extrabold text-amber-300 tracking-wide">A031262401295</span>
                    </a>
                </motion.div>

                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-4 drop-shadow-2xl leading-tight text-white tracking-tight"
                >
                    Buy Directly With Builder.{' '}
                    <span className="block mt-1 sm:inline text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-white to-emerald-300">
                        100% Brokerage Free.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-base sm:text-lg md:text-xl text-center text-slate-100/90 mb-8 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow"
                >
                    Zero buyer commission. Direct developer inventory, official builder pricing, and sanctioned payment plans across Pune's top MahaRERA registered townships and luxury projects.
                </motion.p>

                {/* Search Box Container */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/40 p-1.5 relative z-30"
                >
                    <div className="bg-white rounded-[1.8rem] shadow-inner relative">
                        {/* Tabs */}
                        <div className="flex bg-slate-50/50 border-b border-gray-100 overflow-x-auto no-scrollbar pt-1 px-1 rounded-t-[1.8rem]">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-4 text-sm font-bold transition-all relative whitespace-nowrap rounded-t-xl ${activeTab === tab.id
                                        ? 'text-brand-600 bg-white shadow-[0_-5px_10px_rgba(0,0,0,0.02)] z-10'
                                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                                        }`}
                                >
                                    <div className={`p-1 rounded-full ${activeTab === tab.id ? 'bg-brand-100' : 'bg-transparent'}`}>
                                        {tab.icon}
                                    </div>
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-brand-500 to-brand-300 rounded-t-full" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search Input Area */}
                        <form onSubmit={handleSearch} className="p-4 md:p-5 flex flex-col md:flex-row gap-4 items-center bg-white rounded-b-[1.8rem] relative">

                            {/* Location Dropdown */}
                            <div className="w-full md:w-[28%] relative border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-4 group">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block group-hover:text-brand-500 transition-colors">City</label>
                                <button type="button" className="flex justify-between items-center w-full text-slate-800 font-bold text-lg hover:text-brand-600 transition-colors">
                                    Pune <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-brand-500 transition-colors" />
                                </button>
                            </div>

                            {/* Text Input */}
                            <div className="flex-1 w-full relative group">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 block group-hover:text-brand-500 transition-colors">Search Location, Project or Builder</label>
                                <input
                                    type="text"
                                    placeholder={`Try "3 BHK in Baner" or "VTP Realty"`}
                                    className="w-full text-slate-800 text-lg font-semibold placeholder:text-gray-300 outline-none bg-transparent"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setShowSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                />

                                {/* Smart Suggestions Dropdown */}
                                {showSuggestions && (
                                    <div className="absolute top-[calc(100%+20px)] left-[-20px] right-[-20px] bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-gray-100 p-3.5 z-50">
                                        <h4 className="font-sans font-extrabold text-xs text-slate-400 px-3 py-1 uppercase tracking-wider">Trending Pune Localities</h4>
                                        <div className="grid grid-cols-2 gap-2 mt-1.5">
                                            {['Baner', 'Wakad', 'Hinjewadi', 'Kharadi', 'Viman Nagar', 'Balewadi'].map(loc => (
                                                <div
                                                    key={loc}
                                                    className="px-3 py-2 hover:bg-brand-50 hover:text-brand-700 rounded-xl cursor-pointer flex items-center gap-2.5 transition-colors border border-transparent hover:border-brand-200"
                                                    onClick={() => setSearchQuery(loc)}
                                                >
                                                    <img
                                                        src={getLocalityImageUrl(loc)}
                                                        alt={loc}
                                                        className="w-7 h-7 rounded-lg object-cover border border-slate-200 shrink-0"
                                                    />
                                                    <span className="font-sans font-bold text-sm tracking-tight text-slate-800">
                                                        {loc}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Search Button */}
                            <button
                                type="submit"
                                className="w-full md:w-auto bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold py-4 px-10 rounded-[1.2rem] shadow-xl shadow-brand-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-md"
                            >
                                <Search className="w-5 h-5" />
                                Search
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Quick Discovery Shortcuts (Google Real Estate & Keystone Liv Inspired) */}
                <div className="w-full max-w-4xl mt-6 space-y-2.5">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs justify-center flex-wrap">
                        <span className="text-amber-300 font-extrabold shrink-0 flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg">
                            <Rocket className="w-3.5 h-3.5 text-amber-300" /> Looking for:
                        </span>
                        {[
                            { label: 'Ready Homes', query: 'Ready to Move' },
                            { label: 'New Launches', query: 'New Launch' },
                            { label: '2 BHK Under ₹80L', query: '2 BHK' },
                            { label: '3 BHK Luxury', query: '3 BHK' },
                            { label: 'Integrated Townships', query: 'Township' },
                            { label: 'Direct Builder Lounge', query: 'Developer' }
                        ].map(({ label, query }, i) => (
                            <button
                                key={i}
                                type="button"
                                className="shrink-0 bg-white/10 hover:bg-amber-400 hover:text-slate-900 text-white text-xs font-bold px-3.5 py-1 rounded-full border border-white/20 backdrop-blur-md transition-all shadow-sm"
                                onClick={() => {
                                    setSearchQuery(query);
                                    navigate(`/search?q=${encodeURIComponent(query)}`);
                                }}
                            >
                                {label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs justify-center flex-wrap">
                        <span className="text-slate-300 font-bold shrink-0 flex items-center gap-1 px-1">
                            📍 Popular:
                        </span>
                        {['Hinjewadi', 'Kharadi', 'Baner', 'Wakad', 'Bavdhan', 'Mahalunge', 'Hadapsar', 'Ravet'].map((loc, i) => (
                            <button
                                key={i}
                                type="button"
                                className="shrink-0 bg-slate-900/40 hover:bg-white hover:text-slate-900 text-slate-200 text-xs font-semibold px-3 py-0.5 rounded-full border border-white/10 transition-all"
                                onClick={() => {
                                    setSearchQuery(loc);
                                    navigate(`/search?q=${encodeURIComponent(loc)}`);
                                }}
                            >
                                {loc}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4 Core Pillars: 100% Brokerage Free & Buy Directly with Builder */}
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-4xl">
                    <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/15 text-white shadow-lg">
                        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-300 shrink-0">
                            <BadgePercent className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs font-black tracking-wide text-white">0% Brokerage</div>
                            <div className="text-[10px] text-slate-300">Zero commission for buyers</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/15 text-white shadow-lg">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shrink-0">
                            <Building2 className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs font-black tracking-wide text-white">Direct with Builder</div>
                            <div className="text-[10px] text-slate-300">Direct developer sales desk</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/15 text-white shadow-lg">
                        <div className="w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
                            <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs font-black tracking-wide text-white">MahaRERA Partner</div>
                            <div className="text-[10px] text-slate-300">Agent: A031262401295</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/15 text-white shadow-lg">
                        <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300 shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs font-black tracking-wide text-white">Sanctioned Prices</div>
                            <div className="text-[10px] text-slate-300">No middleman markups</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSearch;
