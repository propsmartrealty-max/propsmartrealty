import React from 'react';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';
import { ShieldAlert, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';
import { PROPSMART_RERA } from '../components/Portal/RERABadge';

const Disclaimer: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50/70 font-sans text-slate-800 relative flex flex-col">
            <WaterAmbientBackground />
            <SEO
                title="MahaRERA Regulatory Disclaimer | PROPSMART REALTY"
                description="Official MahaRERA statutory disclaimer and transparency disclosure for PROPSMART REALTY (Agent Reg: A031262401295). Verified real estate sales mandate operations."
                canonical="https://propsmart.co.in/disclaimer"
            />
            <PortalNavbar variant="colored" />

            <main className="flex-1 max-w-4xl mx-auto px-4 pt-32 pb-16 w-full">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            Official MahaRERA Disclosure
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">MahaRERA Regulatory Disclaimer</h1>
                        <p className="text-sm text-slate-500 mt-2">Compliance Statement pursuant to Section 10 of Real Estate (Regulation and Development) Act, 2016</p>
                    </div>

                    {/* Agent Status Card */}
                    <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span className="text-xs uppercase font-bold text-slate-400 block">Registered Real Estate Consultant</span>
                            <span className="text-lg font-black text-amber-400 tracking-wider">MahaRERA Reg No: {PROPSMART_RERA.number}</span>
                            <p className="text-xs text-slate-300 mt-1">PROPSMART REALTY is registered with Maharashtra Real Estate Regulatory Authority as an authorized real estate agent.</p>
                        </div>
                        <a
                            href={PROPSMART_RERA.portalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shrink-0 shadow-lg"
                        >
                            <span>Verify on MahaRERA</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Disclaimer Details */}
                    <section className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <ShieldAlert className="w-5 h-5 text-amber-600" />
                            <h2>General Statutory Disclosure</h2>
                        </div>
                        <p>
                            PROPSMART REALTY acts exclusively as an authorized direct developer sales partner and advisory platform for primary real estate projects across Pune, Mumbai, Thane, Navi Mumbai, and Maharashtra. We are not the developer or promoter of the projects featured on this portal.
                        </p>
                        <p>
                            All project information, including floor plans, artistic elevations, master layouts, pricing ranges, amenities, specifications, unit dimensions, and possession timelines, has been collated from respective developer disclosures and official MahaRERA public records.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <h2>Independent Due Diligence</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Prospective purchasers are strongly advised to independently verify all details, sanctions, approvals, RERA certificates, and title deeds on the official MahaRERA website (<a href={PROPSMART_RERA.portalUrl} target="_blank" rel="noopener noreferrer" className="text-sky-600 underline">maharera.maharashtra.gov.in</a>) before entering into any binding agreement or paying booking amounts.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Disclaimer;
