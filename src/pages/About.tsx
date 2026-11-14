import React from 'react';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <SEO
                title="About Us - 100% Brokerage Free | PROPSMART REALTY"
                description="Learn about PROPSMART REALTY - Pune's leading 100% Brokerage Free platform to buy directly from builders with authorized MahaRERA sales mandates."
            />
            <PortalNavbar variant="colored" />

            <div className="flex-1 pt-32 pb-12 px-4">
                <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-6">About PROPSMART REALTY</h1>

                    <div className="prose prose-lg text-slate-600">
                        <p className="lead text-xl">
                            PROPSMART REALTY is Pune's leading **100% BROKERAGE FREE** platform where homebuyers connect and **buy directly with builders**.
                        </p>
                        <p>
                            With 15+ years of real estate sales mandate experience, our mission is to eliminate middleman commissions and broker markups. We connect homebuyers directly to the official sales lounges of Pune's premier builders, ensuring direct developer pricing, sanitized inventory, and official MahaRERA compliance.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Our Vision</h3>
                        <p>
                            To make real estate in Pune completely brokerage-free, empowering every homebuyer to deal directly with certified developers backed by transparent data, verified MahaRERA documentation, and authentic price sheets.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 not-prose">
                            <div className="bg-brand-50 p-6 rounded-xl text-center">
                                <div className="text-3xl font-bold text-brand-600 mb-2">0%</div>
                                <div className="text-sm font-bold text-brand-800">Brokerage for Buyers</div>
                            </div>
                            <div className="bg-brand-50 p-6 rounded-xl text-center">
                                <div className="text-3xl font-bold text-brand-600 mb-2">100%</div>
                                <div className="text-sm font-bold text-brand-800">Direct with Builder</div>
                            </div>
                            <div className="bg-brand-50 p-6 rounded-xl text-center">
                                <div className="text-3xl font-bold text-brand-600 mb-2">5000+</div>
                                <div className="text-sm font-bold text-brand-800">Families Benefited</div>
                            </div>
                        </div>

                        {/* Statutory Compliance & MahaRERA Accreditation */}
                        <div className="not-prose mt-12 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block mb-1">
                                        Statutory & Regulatory Accreditation
                                    </span>
                                    <h3 className="text-2xl font-black text-white">
                                        MahaRERA Registered Real Estate Agent
                                    </h3>
                                    <p className="text-sm text-slate-300 mt-1">
                                        Registration Number:{' '}
                                        <span className="font-extrabold text-amber-400 text-lg">A031262401295</span>
                                    </p>
                                </div>
                                <a
                                    href="https://maharera.maharashtra.gov.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shrink-0 flex items-center gap-2"
                                >
                                    <span>Verify on Official Portal</span>
                                    <span className="text-xs">↗</span>
                                </a>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-slate-300">
                                <div className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                                    <span><strong>100% RERA Registered Projects:</strong> We aggregate and mandate strictly MahaRERA verified residential inventory.</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                                    <span><strong>Direct Developer Pricing:</strong> No hidden costs, no markups, and zero brokerage for home buyers.</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                                    <span><strong>Transparent Disclosures:</strong> Title search verification, carpet area validation, and sanctioned floor plan clarity.</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                                    <span><strong>Consumer Protection:</strong> Operating strictly under the Real Estate (Regulation and Development) Act, 2016.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
