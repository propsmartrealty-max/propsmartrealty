import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building2, Trash2, ArrowRight, MessageCircle, Share2, Sparkles, ShieldCheck } from 'lucide-react';
import { useData } from '../context/DataContext';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import PropertyCard from '../components/Portal/PropertyCard';
import SEO from '../components/SEO';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';
import { getWhatsAppUrl } from '../utils/whatsappUtils';

const Shortlist: React.FC = () => {
    const { projects = [], favorites = [], clearFavorites } = useData();

    const shortlistedProjects = React.useMemo(() => {
        return projects.filter(p => favorites.includes(p.id));
    }, [projects, favorites]);

    // Generate formatted WhatsApp message with complete shortlisted portfolio
    const shareMessage = React.useMemo(() => {
        if (shortlistedProjects.length === 0) return '';
        const listText = shortlistedProjects
            .map((p, i) => `${i + 1}. *${p.title}* (${p.location}) - ${p.exactPrice || p.priceRange || 'Price on Request'}\n   https://propsmart.co.in/project/${p.slug}`)
            .join('\n\n');

        return `Hi Propsmart Realty, I have shortlisted ${shortlistedProjects.length} property(ies) for my home search:\n\n${listText}\n\nPlease share direct builder inventory, sanctioned floor plans, and arrange direct site visits with 0% brokerage.`;
    }, [shortlistedProjects]);

    const whatsAppShareUrl = getWhatsAppUrl(shareMessage);

    return (
        <div className="min-h-screen bg-slate-50/70 relative flex flex-col pb-20 md:pb-0">
            <WaterAmbientBackground />
            <SEO
                title="My Shortlisted Properties | Saved Flats in Pune & Mumbai"
                description="Review your shortlisted properties, compare direct builder pricing, and share your curated real estate collection directly with sales advisors on WhatsApp."
                canonical="https://propsmart.co.in/shortlist"
            />
            <PortalNavbar variant="colored" />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1 w-full relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-black uppercase tracking-wider mb-2">
                            <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                            Personal Real Estate Portfolio
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                            <span>My Shortlisted Properties</span>
                            {shortlistedProjects.length > 0 && (
                                <span className="bg-rose-100 text-rose-700 text-sm font-black px-3 py-1 rounded-full">
                                    {shortlistedProjects.length}
                                </span>
                            )}
                        </h1>
                        <p className="text-slate-600 text-sm sm:text-base mt-1">
                            Save, review, and consult directly on your favorite MahaRERA developments with 100% zero brokerage.
                        </p>
                    </div>

                    {shortlistedProjects.length > 0 && (
                        <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                            <a
                                href={whatsAppShareUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="water-btn px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shadow-emerald-600/25 transition-all"
                            >
                                <MessageCircle className="w-4 h-4 fill-white" />
                                <span>Share with Advisor</span>
                            </a>
                            <button
                                onClick={clearFavorites}
                                className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-rose-50 hover:text-rose-600 text-slate-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-2xs"
                            >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Clear</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Content */}
                {shortlistedProjects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {shortlistedProjects.map((project) => (
                            <PropertyCard key={project.id} project={project} variant="grid" />
                        ))}
                    </div>
                ) : (
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/80 shadow-glass p-8 sm:p-16 text-center max-w-xl mx-auto my-8">
                        <div className="w-20 h-20 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4 border border-rose-100 shadow-sm animate-pulse">
                            <Heart className="w-10 h-10 stroke-[1.8]" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Your Shortlist is Empty</h2>
                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                            Tap the <strong>heart icon (❤️)</strong> on any project card or elevation to save properties here. Build your customized collection and consult directly with our property advisors.
                        </p>
                        <Link
                            to="/search"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-sky-600/25 transition-all hover:scale-105 active:scale-95"
                        >
                            <span>Explore 800+ Verified Projects</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Shortlist;
