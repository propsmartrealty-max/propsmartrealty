import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, Rocket, Key, Home, Building, ShieldCheck, Building2, BadgePercent, CheckCircle2, History, X, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getLocalityImageUrl } from '../../../utils/localityUtils';
import { cloudflare } from '../../../services/cloudflare';
import { getRecentSearches, saveRecentSearch, clearRecentSearches, calculateFuzzyScore } from '../../../utils/fuzzySearch';

// Top Developer Flagship Building Elevations & Mega Township Projects
export interface HeroSlide {
    image: string;
    developer: string;
    title: string;
    location: string;
    type: string;
}

export const FLAGSHIP_HERO_SLIDES: HeroSlide[] = [
    {
        image: "https://www.lodhagroup.com/sites/default/files/projects/banner/Spotlight_Lodha-Belmondo_1903X800_0.jpg",
        developer: "Lodha",
        title: "Lodha Belmondo",
        location: "Pune Expressway, Gahunje",
        type: "100+ Acre Luxury Golf Township"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
        developer: "Kolte-Patil",
        title: "Life Republic",
        location: "Hinjewadi IT Corridor",
        type: "400+ Acre Mega Smart Township"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        developer: "Panchshil",
        title: "Panchshil Towers",
        location: "Kharadi Cyber City",
        type: "35-Storey Iconic Glass Towers"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp",
        developer: "VTP Realty",
        title: "VTP Blue Waters",
        location: "Mahalunge-Hinjewadi",
        type: "100+ Acre Riverfront Mega Township"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
        developer: "Godrej Properties",
        title: "Godrej River Royale",
        location: "Baner-Mahalunge",
        type: "Ultra-Modern Riverfront High-Rises"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        developer: "Lodha",
        title: "Lodha Panache",
        location: "Hinjewadi Phase 1",
        type: "Luxury Vertical Living Enclave"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
        developer: "Kasturi Housing",
        title: "The Balmoral Towers",
        location: "Balewadi High Street",
        type: "Elite High-Rise Skyline Elevation"
    },
    {
        image: "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
        developer: "Shapoorji Pallonji",
        title: "Joyville Sensorium",
        location: "Hinjewadi Phase 1",
        type: "10.5-Acre Biophilic Living Township"
    }
];

const TABS = [
    { id: 'buy', label: 'Buy', icon: <Home className="w-4 h-4" /> },
    { id: 'rent', label: 'Rent', icon: <Key className="w-4 h-4" /> },
    { id: 'projects', label: 'New Projects', icon: <Rocket className="w-4 h-4" /> },
    { id: 'commercial', label: 'Commercial', icon: <Building className="w-4 h-4" /> },
];

const HERO_CITIES = [
    { id: 'Pune', label: 'Pune', badge: '689 Projects' },
    { id: 'Mumbai', label: 'Mumbai', badge: '58 Projects' },
    { id: 'Thane', label: 'Thane', badge: '19 Projects' },
    { id: 'Lonavala', label: 'Lonavala', badge: '17 Projects' },
    { id: 'Karjat', label: 'Karjat', badge: '14 Projects' },
    { id: 'Alibaug', label: 'Alibaug', badge: '13 Projects' },
    { id: 'Navi Mumbai', label: 'Navi Mumbai', badge: '3 Projects' },
];

const CITY_HERO_LOCALITIES: Record<string, string[]> = {
    'Pune': ['Hinjewadi', 'Baner', 'Wakad', 'Balewadi', 'Punawale', 'Tathawade', 'Kharadi', 'Aundh', 'Pashan', 'Bhugaon', 'Bavdhan', 'Kothrud'],
    'Mumbai': ['Bandra West', 'Powai', 'Worli', 'Andheri West', 'Mulund West', 'Goregaon East', 'Borivali East', 'Kanjurmarg', 'Wadala', 'Chembur', 'Mahalaxmi', 'Versova'],
    'Thane': ['Kolshet Road', 'Pokhran Road', 'Majiwada', 'Ghodbunder Road', 'Balkum', 'Manpada', 'Hiranandani Estate', 'Thane West', 'Upper Thane'],
    'Navi Mumbai': ['Panvel', 'Navi Mumbai Central'],
    'Lonavala': ['Khandala', 'Kunegaon', 'Khalapur', 'Khopoli Foothills', 'Gahunje'],
    'Alibaug': ['Mandwa Jetty Corridor', 'Awas Beach', 'Kihim Beach', 'Alibaug Town', 'Sasawane Beach'],
    'Karjat': ['Karjat Central', 'Karjat-Neral Foothills', 'Kashele', 'Chowk', 'Vavanje']
};

const HeroSearch = () => {
    const navigate = useNavigate();
    const [slides, setSlides] = useState<HeroSlide[]>(FLAGSHIP_HERO_SLIDES);
    const [currentImage, setCurrentImage] = useState(0);
    const [activeTab, setActiveTab] = useState('buy');
    const [selectedCity, setSelectedCity] = useState('Pune');
    const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [recentSearches, setRecentSearches] = useState<string[]>([]);

    useEffect(() => {
        setRecentSearches(getRecentSearches());
    }, []);

    // Preload flagship developer elevation images
    useEffect(() => {
        FLAGSHIP_HERO_SLIDES.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });
    }, []);

    // Auto-rotate background every 6 seconds
    useEffect(() => {
        if (slides.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const currentSlide = slides[currentImage] || FLAGSHIP_HERO_SLIDES[0];

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchQuery.trim();
        if (query) {
            saveRecentSearch(query);
            setRecentSearches(getRecentSearches());
        }
        const params = new URLSearchParams();
        if (query) params.append('q', query);
        if (selectedCity) params.append('city', selectedCity);
        if (activeTab) params.append('type', activeTab);
        navigate(`/search?${params.toString()}`);
    };

    return (
        <div className="relative min-h-[720px] lg:min-h-[760px] py-16 w-full flex flex-col items-center justify-center text-white bg-brand-950 overflow-hidden">

            {/* Background Slider with Parallax-like feel & Real Developer Elevation Showcase */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentSlide.image}
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.6, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${currentSlide.image})` }}
                    />
                </AnimatePresence>

                {/* Subtle Ambient Vignette & Gradient for High-Contrast Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/55 to-slate-950/40" />
                <div className="absolute inset-0 bg-black/25" />
            </div>

            {/* Floating Top Developer Landmark Elevation Badge */}
            <div className="hidden lg:flex absolute bottom-6 right-8 z-20 items-center gap-3 bg-slate-950/85 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl shadow-2xl text-xs pointer-events-auto">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                <div className="text-left">
                    <div className="flex items-center gap-2">
                        <span className="font-sans font-black text-amber-300 text-xs uppercase tracking-wider">{currentSlide.developer}</span>
                        <span className="text-white/40">•</span>
                        <span className="font-sans font-extrabold text-white text-xs">{currentSlide.title}</span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium font-sans">
                        {currentSlide.type} — <span className="text-amber-200/90">{currentSlide.location}</span>
                    </p>
                </div>
            </div>

            {/* Slide Navigation Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 pointer-events-auto">
                {slides.map((slide, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentImage(idx)}
                        className={`transition-all duration-300 rounded-full ${
                            idx === currentImage
                                ? 'w-8 h-2 bg-gradient-to-r from-amber-400 to-brand-400 shadow-md shadow-amber-500/30'
                                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                        }`}
                        title={`${slide.developer} - ${slide.title}`}
                    />
                ))}
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

                {/* Search Box Container with Water Border & Glassmorphic Elevation */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-full glass-panel-elevated water-border-flow rounded-[2.2rem] shadow-2xl p-2 relative z-30"
                >
                    <div className="bg-white/90 backdrop-blur-xl rounded-[1.8rem] shadow-inner relative">
                        {/* Tabs */}
                        <div className="flex bg-slate-50/70 border-b border-sky-100/60 overflow-x-auto no-scrollbar pt-1.5 px-2 rounded-t-[1.8rem] touch-momentum">
                            {TABS.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap rounded-t-2xl shrink-0 ${
                                        activeTab === tab.id
                                            ? 'text-sky-600 bg-white/95 shadow-[0_-5px_15px_rgba(14,165,233,0.08)] z-10'
                                            : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'
                                    }`}
                                >
                                    <div className={`p-1 rounded-full ${activeTab === tab.id ? 'bg-sky-100/80 text-sky-600' : 'bg-transparent'}`}>
                                        {tab.icon}
                                    </div>
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-600 rounded-t-full shadow-sm" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Search Input Area */}
                        <form onSubmit={handleSearch} className="p-4 md:p-5 flex flex-col md:flex-row gap-4 items-center bg-transparent rounded-b-[1.8rem] relative">

                            {/* Location Dropdown */}
                            <div className="w-full md:w-[28%] relative border-b md:border-b-0 md:border-r border-sky-100/80 pb-4 md:pb-0 md:pr-4 group">
                                <label className="text-[10px] font-black text-sky-600 uppercase tracking-widest mb-1 block group-hover:text-sky-700 transition-colors">Select City</label>
                                <button
                                    type="button"
                                    onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
                                    className="flex justify-between items-center w-full text-slate-800 font-extrabold text-lg hover:text-sky-600 transition-colors"
                                >
                                    <span>{selectedCity}</span>
                                    <ChevronDown className={`w-4 h-4 text-sky-500 transition-transform duration-300 ${cityDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {cityDropdownOpen && (
                                    <div className="absolute top-[calc(100%+12px)] left-0 w-64 glass-panel rounded-2xl shadow-2xl border border-white/80 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                                        <div className="text-[11px] font-black uppercase text-sky-600 px-3 py-1.5 tracking-wider flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span>
                                            Active Regions
                                        </div>
                                        {HERO_CITIES.map((c) => (
                                            <button
                                                key={c.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedCity(c.id);
                                                    setCityDropdownOpen(false);
                                                }}
                                                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                                                    selectedCity === c.id
                                                        ? 'bg-sky-50 text-sky-700'
                                                        : 'text-slate-700 hover:bg-sky-50/60'
                                                }`}
                                            >
                                                <span>{c.label}</span>
                                                <span className="text-[11px] font-black text-sky-600 bg-sky-100/80 px-2 py-0.5 rounded-full">
                                                    {c.badge}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Text Input */}
                            <div className="flex-1 w-full relative group">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block group-hover:text-sky-600 transition-colors">Search Location, Project or Builder</label>
                                <input
                                    type="text"
                                    placeholder={`Try "3 BHK in Baner" or "VTP Realty"`}
                                    className="w-full text-slate-800 text-base sm:text-lg font-semibold placeholder:text-gray-300 outline-none bg-transparent"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onFocus={() => setShowSuggestions(true)}
                                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                                />

                                {/* Smart Suggestions & Recent Searches Dropdown */}
                                {showSuggestions && (
                                    <div className="absolute top-[calc(100%+12px)] inset-x-0 sm:left-[-20px] sm:right-[-20px] sm:w-[calc(100%+40px)] glass-panel rounded-3xl shadow-2xl border border-white/80 p-3 sm:p-4 z-50 animate-in fade-in duration-200">
                                        {/* Recent Searches */}
                                        {recentSearches.length > 0 && !searchQuery.trim() && (
                                            <div className="mb-3 pb-3 border-b border-sky-100/60">
                                                <div className="flex items-center justify-between px-1 mb-1.5">
                                                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1">
                                                        <History className="w-3 h-3 text-sky-600" />
                                                        Recent Searches
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onMouseDown={(e) => {
                                                            e.preventDefault();
                                                            clearRecentSearches();
                                                            setRecentSearches([]);
                                                        }}
                                                        className="text-[10px] text-slate-400 hover:text-red-500 transition-colors font-bold"
                                                    >
                                                        Clear
                                                    </button>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {recentSearches.map((term, i) => (
                                                        <button
                                                            key={i}
                                                            type="button"
                                                            onMouseDown={() => {
                                                                setSearchQuery(term);
                                                                navigate(`/search?q=${encodeURIComponent(term)}`);
                                                            }}
                                                            className="px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-colors flex items-center gap-1"
                                                        >
                                                            <span>{term}</span>
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        <h4 className="font-sans font-extrabold text-xs text-sky-700 px-3 py-1 uppercase tracking-wider flex items-center justify-between">
                                            <span>Prime {selectedCity} Corridors</span>
                                            <span className="text-[10px] text-sky-600 font-bold lowercase">★ top micro-markets</span>
                                        </h4>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
                                            {(CITY_HERO_LOCALITIES[selectedCity] || CITY_HERO_LOCALITIES['Pune']).map(loc => (
                                                <div
                                                    key={loc}
                                                    className="px-3 py-2 hover:bg-sky-50/80 hover:text-sky-700 rounded-xl cursor-pointer flex items-center gap-2.5 transition-colors border border-transparent hover:border-sky-200"
                                                    onMouseDown={() => {
                                                        setSearchQuery(loc);
                                                        saveRecentSearch(loc);
                                                        navigate(`/search?city=${encodeURIComponent(selectedCity)}&location=${encodeURIComponent(loc)}`);
                                                    }}
                                                >
                                                    <img
                                                        src={getLocalityImageUrl(loc)}
                                                        alt={loc}
                                                        className="w-7 h-7 rounded-lg object-cover border border-slate-200 shrink-0"
                                                    />
                                                    <span className="font-sans font-bold text-xs md:text-sm tracking-tight text-slate-800">
                                                        {loc}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Search Button with Liquid Wave Ripple */}
                            <button
                                type="submit"
                                className="water-btn w-full md:w-auto bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-blue-500 text-white font-black py-4 px-10 rounded-[1.4rem] shadow-xl shadow-sky-500/25 transition-all flex items-center justify-center gap-2 text-base"
                            >
                                <Search className="w-5 h-5" />
                                <span>Search</span>
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
