import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROPSMART_RERA } from './RERABadge';
import PropsmartLogo from './PropsmartLogo';

const Footer = () => {
    return (
        <div className="relative">
            {/* Fluid Organic Water Wave Divider */}
            <div className="water-wave-divider overflow-hidden leading-none -mb-1">
                <svg className="w-full h-8 md:h-12 text-slate-950 fill-current" viewBox="0 0 1440 80" preserveAspectRatio="none">
                    <path d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,26.7C840,21,960,43,1080,48C1200,53,1320,43,1380,37.3L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path>
                </svg>
            </div>

            <footer className="bg-slate-950 text-gray-400 pt-12 pb-10 border-t border-white/10 relative overflow-hidden">
                {/* Ambient Deep Ocean Glow Spot */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-0" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none -z-0" />

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                    <div>
                        <Link to="/" className="inline-block mb-3 group" title="PROPSMART REALTY">
                            <PropsmartLogo variant="dark" />
                        </Link>
                        <p className="text-sm text-slate-300 font-medium mb-3">
                            Pune's leading <strong className="text-emerald-400">100% Brokerage Free</strong> platform. Buy directly from top developers with official MahaRERA authorized partnerships.
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                                0% Brokerage
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                                Buy Direct with Builder
                            </span>
                        </div>
                        
                        {/* MahaRERA Agent Chip */}
                        <a
                            href={PROPSMART_RERA.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700/80 text-white hover:border-emerald-500/50 transition-all text-xs group"
                        >
                            <ShieldCheck className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                            <div>
                                <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">MahaRERA Agent</span>
                                <span className="font-extrabold text-amber-400 tracking-wide text-xs">{PROPSMART_RERA.number}</span>
                            </div>
                            <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400 ml-1" />
                        </a>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/directory" className="hover:text-brand-400 transition-colors">Project Directory</Link></li>
                            <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
                            <li><Link to="/post-property" className="hover:text-brand-400 transition-colors">Post Property</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-brand-400 transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-brand-400 transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/search?type=buy" className="hover:text-brand-400 transition-colors">Buy Property</Link></li>
                            <li><Link to="/post-property" className="hover:text-brand-400 transition-colors">Sell Property</Link></li>
                            <li><Link to="/search?type=rent" className="hover:text-brand-400 transition-colors">Rent Property</Link></li>
                            <li><Link to="/search?type=commercial" className="hover:text-brand-400 transition-colors">Commercial</Link></li>
                            <li><Link to="/search?type=plots" className="hover:text-brand-400 transition-colors">Plots</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Connect</h4>
                        <p className="text-sm mb-2">connect@propsmart.co.in</p>
                        <p className="text-sm font-bold text-white mb-4">+91 7744009295</p>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/punepropertyvlog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.instagram.com/pune_property_vlog/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.youtube.com/@punepropertyvlog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Deep SEO Real Estate Authority & Programmatic Keyword Cloud */}
                <div className="border-t border-slate-800/80 pt-8 pb-6 my-2 text-xs space-y-5">
                    <div>
                        <h5 className="text-slate-300 font-bold uppercase tracking-wider mb-2.5 text-[11px] text-sky-400">
                            Popular Pune Real Estate Localities (100% Brokerage Free)
                        </h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400">
                            {[
                                { name: 'Hinjewadi', slug: 'hinjewadi' },
                                { name: 'Kharadi', slug: 'kharadi' },
                                { name: 'Baner', slug: 'baner' },
                                { name: 'Wakad', slug: 'wakad' },
                                { name: 'Balewadi', slug: 'balewadi' },
                                { name: 'Kothrud', slug: 'kothrud' },
                                { name: 'Wagholi', slug: 'wagholi' },
                                { name: 'Hadapsar', slug: 'hadapsar' },
                                { name: 'Magarpatta', slug: 'magarpatta' },
                                { name: 'Mundhwa', slug: 'mundhwa' },
                                { name: 'Bavdhan', slug: 'bavdhan' },
                                { name: 'Ravet', slug: 'ravet' },
                                { name: 'Punawale', slug: 'punawale' },
                                { name: 'NIBM Road', slug: 'nibm-road' },
                                { name: 'Viman Nagar', slug: 'viman-nagar' },
                                { name: 'Dhanori', slug: 'dhanori' },
                                { name: 'Sinhagad Road', slug: 'sinhagad-road' }
                            ].map((loc) => (
                                <Link 
                                    key={loc.slug} 
                                    to={`/flats-in-${loc.slug}`} 
                                    className="hover:text-sky-300 hover:underline transition-colors"
                                >
                                    Flats in {loc.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-slate-300 font-bold uppercase tracking-wider mb-2.5 text-[11px] text-indigo-400">
                            Mumbai & MMR Luxury High-Rise Hubs
                        </h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400">
                            {[
                                { name: 'Andheri West', slug: 'andheri-west' },
                                { name: 'Bandra East', slug: 'bandra-east' },
                                { name: 'Powai', slug: 'powai' },
                                { name: 'Thane', slug: 'thane' },
                                { name: 'Pokhran Road', slug: 'pokhran-road' },
                                { name: 'Ghodbunder Road', slug: 'ghodbunder-road' },
                                { name: 'Kolshet Road', slug: 'kolshet-road' },
                                { name: 'Navi Mumbai', slug: 'navi-mumbai' },
                                { name: 'Lonavala Luxury Villas', slug: 'lonavala' },
                                { name: 'Alibaug Beach Retreats', slug: 'alibaug' }
                            ].map((hub) => (
                                <Link 
                                    key={hub.slug} 
                                    to={`/properties-in-${hub.slug}`} 
                                    className="hover:text-indigo-300 hover:underline transition-colors"
                                >
                                    {hub.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-slate-300 font-bold uppercase tracking-wider mb-2.5 text-[11px] text-amber-400">
                            Direct Builder Authorized Sales Mandates
                        </h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400">
                            {[
                                { name: 'Godrej Properties', slug: 'godrej-properties' },
                                { name: 'Lodha Group', slug: 'lodha-group' },
                                { name: 'VTP Realty', slug: 'vtp-realty' },
                                { name: 'Kolte Patil', slug: 'kolte-patil-developers' },
                                { name: 'Rohan Builders', slug: 'rohan-builders' },
                                { name: 'Panchshil Realty', slug: 'panchshil-realty' },
                                { name: 'Paranjape Schemes', slug: 'paranjape-schemes' },
                                { name: 'Shapoorji Pallonji', slug: 'shapoorji-pallonji' },
                                { name: 'Runwal Realty', slug: 'runwal-realty' },
                                { name: 'Mantra Properties', slug: 'mantra-properties' },
                                { name: 'Majestique Landmarks', slug: 'majestique-landmarks' },
                                { name: 'Hiranandani Communities', slug: 'hiranandani-communities' }
                            ].map((b) => (
                                <Link 
                                    key={b.slug} 
                                    to={`/builder/${b.slug}`} 
                                    className="hover:text-amber-300 hover:underline transition-colors"
                                >
                                    {b.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-slate-300 font-bold uppercase tracking-wider mb-2.5 text-[11px] text-emerald-400">
                            High-Intent Homebuyer Searches (0% Brokerage)
                        </h5>
                        <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-slate-400">
                            <Link to="/flats-in-pune" className="hover:text-emerald-300 hover:underline">Flats in Pune</Link>
                            <Link to="/properties-in-mumbai" className="hover:text-emerald-300 hover:underline">Properties in Mumbai</Link>
                            <Link to="/1-bhk-flats-in-hinjewadi" className="hover:text-emerald-300 hover:underline">1 BHK Flats in Hinjewadi</Link>
                            <Link to="/2-bhk-flats-in-kharadi" className="hover:text-emerald-300 hover:underline">2 BHK Flats in Kharadi</Link>
                            <Link to="/3-bhk-flats-in-baner" className="hover:text-emerald-300 hover:underline">3 BHK Flats in Baner</Link>
                            <Link to="/ready-to-move-flats-in-pune" className="hover:text-emerald-300 hover:underline">Ready to Move Flats in Pune</Link>
                            <Link to="/new-launch-projects-in-pune" className="hover:text-emerald-300 hover:underline">New Launch Projects in Pune</Link>
                            <Link to="/villas-in-lonavala" className="hover:text-emerald-300 hover:underline">Villas in Lonavala</Link>
                            <Link to="/flats-under-50-lakhs-in-pune" className="hover:text-emerald-300 hover:underline">Flats Under 50 Lakhs in Pune</Link>
                            <Link to="/flats-under-1-crore-in-pune" className="hover:text-emerald-300 hover:underline">Flats Under 1 Crore in Pune</Link>
                            <Link to="/verify-rera" className="hover:text-emerald-300 hover:underline">MahaRERA Project Verification</Link>
                        </div>
                    </div>
                </div>

                {/* Prominent MahaRERA Verification & Compliance Section */}
                <div className="border-t border-slate-800/80 pt-6 pb-6 my-2">
                    <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                                        MahaRERA Accredited Real Estate Consultant
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-semibold">
                                        <CheckCircle2 className="w-3 h-3" /> Certified
                                    </span>
                                </div>
                                <p className="text-xs text-slate-300 mt-0.5">
                                    PROPSMART REALTY is officially registered with the Maharashtra Real Estate Regulatory Authority under Registration No.{' '}
                                    <span className="font-bold text-amber-400 text-sm">{PROPSMART_RERA.number}</span>
                                </p>
                            </div>
                        </div>

                        <a
                            href={PROPSMART_RERA.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shrink-0 shadow-md shadow-emerald-900/30"
                        >
                            <span>Verify on MahaRERA</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </div>

                <div className="pt-4 text-center text-xs text-gray-500 space-y-2">
                    <p>© 2026 PROPSMART REALTY. All rights reserved.</p>
                    <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
                        <Link to="/verify-rera" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">MahaRERA Verification Tool</Link>
                        <span>•</span>
                        <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <span>•</span>
                        <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                        <span>•</span>
                        <Link to="/disclaimer" className="hover:text-emerald-400 transition-colors">MahaRERA Disclaimer</Link>
                    </div>
                    <p className="italic text-[11px] opacity-75 max-w-4xl mx-auto leading-relaxed">
                        Disclaimer: PROPSMART REALTY is a registered real estate agent under MahaRERA (Reg. No. A031262401295).
                        All projects and properties listed on this platform are RERA registered. Prices, floor plans, and availability mentioned are indicative and subject to change by the respective developers.
                        Please verify official project details and certificates on the official MahaRERA website (<a href={PROPSMART_RERA.portalUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">maharera.maharashtra.gov.in</a>) before making any purchase decision.
                    </p>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;
