import React from 'react';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';
import { ShieldCheck, FileCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROPSMART_RERA } from '../components/Portal/RERABadge';

const Terms: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50/70 font-sans text-slate-800 relative flex flex-col">
            <WaterAmbientBackground />
            <SEO
                title="Terms of Service | PROPSMART REALTY"
                description="Terms of Service and user agreement for PROPSMART REALTY. Review our terms for 100% zero brokerage property advisory and direct builder sales mandates."
                canonical="https://propsmart.co.in/terms"
            />
            <PortalNavbar variant="colored" />

            <main className="flex-1 max-w-4xl mx-auto px-4 pt-32 pb-16 w-full">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <FileCheck className="w-4 h-4 text-amber-600" />
                            User Agreement & Advisory Terms
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Terms of Service</h1>
                        <p className="text-sm text-slate-500 mt-2">Effective Date: January 1, 2026 • Last Updated: November 16, 2026</p>
                    </div>

                    {/* Section 1 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-900 font-bold text-lg">1. Acceptance of Terms</h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            By browsing, utilizing, or submitting inquiries on PROPSMART REALTY (<a href="https://propsmart.co.in" className="text-sky-600 underline">propsmart.co.in</a>), you acknowledge and agree to comply with these Terms of Service. If you do not agree to these terms, please refrain from using the platform.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <h2>2. 100% Zero Brokerage Policy</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            PROPSMART REALTY operates as an officially authorized sales partner under direct corporate mandate agreements with premier real estate developers across Maharashtra. <strong>Homebuyers pay zero percent (0%) brokerage or commission</strong> for all primary residential and commercial properties purchased through our partner allocations.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <ShieldCheck className="w-5 h-5 text-emerald-600" />
                            <h2>3. MahaRERA Verification & Compliance</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            PROPSMART REALTY is registered with the Maharashtra Real Estate Regulatory Authority under Agent Registration Number <strong>{PROPSMART_RERA.number}</strong>. All projects listed on this platform carry their respective MahaRERA registration certificates and regulatory QR codes.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <AlertCircle className="w-5 h-5 text-amber-600" />
                            <h2>4. Pricing, Floor Plans & Project Visuals</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Prices, floor plans, specifications, elevation renders, and possession dates displayed on the platform are provided by the respective project developers and are indicative. Final prices, government levies (Stamp Duty, Registration, GST), and availability are determined at the time of official booking with developer sales desks.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-900 font-bold text-lg">5. Governing Law</h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            These Terms of Service are governed by and construed in accordance with the Real Estate (Regulation and Development) Act, 2016 (RERA), the Maharashtra Real Estate Regulatory Authority rules, and the laws of the Republic of India. Courts in Pune, Maharashtra have exclusive jurisdiction.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
