import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROPSMART_RERA } from './RERABadge';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-400 pt-12 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
                    <div>
                        <Link to="/" className="inline-block mb-3 group" title="PROPSMART REALTY">
                            <img
                                src="/images/propsmart-logo-white.svg"
                                alt="PROPSMART REALTY"
                                className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
                            />
                        </Link>
                        <p className="text-sm text-slate-300 font-medium mb-3">
                            Pune's leading <strong className="text-emerald-400">100% Brokerage Free</strong> platform. Buy directly from top developers with official MahaRERA verified mandates.
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
                    <p className="italic text-[11px] opacity-75 max-w-4xl mx-auto leading-relaxed">
                        Disclaimer: PROPSMART REALTY is a registered real estate agent under MahaRERA (Reg. No. A031262401295).
                        All projects and properties listed on this platform are RERA registered. Prices, floor plans, and availability mentioned are indicative and subject to change by the respective developers.
                        Please verify official project details and certificates on the official MahaRERA website (<a href={PROPSMART_RERA.portalUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">maharera.maharashtra.gov.in</a>) before making any purchase decision.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
