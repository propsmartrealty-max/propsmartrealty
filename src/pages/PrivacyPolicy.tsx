import React from 'react';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { PROPSMART_RERA } from '../components/Portal/RERABadge';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50/70 font-sans text-slate-800 relative flex flex-col">
            <WaterAmbientBackground />
            <SEO
                title="Privacy Policy | PROPSMART REALTY - 100% Zero Brokerage Real Estate"
                description="Privacy Policy for PROPSMART REALTY. Learn how we handle, protect, and respect your personal information under MahaRERA and Indian Information Technology regulations."
                canonical="https://propsmart.co.in/privacy-policy"
            />
            <PortalNavbar variant="colored" />

            <main className="flex-1 max-w-4xl mx-auto px-4 pt-32 pb-16 w-full">
                <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl space-y-8">
                    {/* Header */}
                    <div className="border-b border-slate-100 pb-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" />
                            MahaRERA Agent Compliance ({PROPSMART_RERA.number})
                        </div>
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
                        <p className="text-sm text-slate-500 mt-2">Effective Date: January 1, 2026 • Last Updated: November 16, 2026</p>
                    </div>

                    {/* Section 1 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <Lock className="w-5 h-5 text-amber-600" />
                            <h2>1. Our Commitment to Your Privacy</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            PROPSMART REALTY (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is an official authorized real estate sales partner holding MahaRERA Agent Registration Number <strong>{PROPSMART_RERA.number}</strong>. We are committed to safeguarding the privacy of homebuyers, property investors, and visitors accessing our platform at <a href="https://propsmart.co.in" className="text-sky-600 underline">https://propsmart.co.in</a>.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <Eye className="w-5 h-5 text-amber-600" />
                            <h2>2. Information We Collect</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            When you submit an inquiry, request a site visit, calculate unit pricing, or interact via WhatsApp, we collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-slate-600">
                            <li><strong>Contact Information:</strong> Full name, mobile phone number, email address.</li>
                            <li><strong>Property Preferences:</strong> Desired configuration (e.g. 2 BHK, 3 BHK), budget range, preferred micro-market, and move-in timeline.</li>
                            <li><strong>Technical Data:</strong> Anonymized IP addresses, browser specifications, and user-agent details strictly for DDoS prevention, Turnstile bot challenges, and localized search experience.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            <h2>3. 100% Zero Brokerage & Non-Sale of Data</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            <strong>We never sell, rent, or trade your personal information to third-party telemarketers or unsolicited lead aggregators.</strong>
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Your contact details are exclusively utilized by PROPSMART REALTY authorized mandate specialists to schedule developer site visits, deliver verified brochures and floor plans, and coordinate direct builder bookings without brokerage.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                            <FileText className="w-5 h-5 text-amber-600" />
                            <h2>4. Security & Cloudflare Edge Protection</h2>
                        </div>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            Our database and web infrastructure run on enterprise Cloudflare edge architecture with HTTPS HSTS encryption, Cloudflare D1 encrypted storage, and automated Turnstile challenge verification to prevent unauthorized data access.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section className="space-y-3">
                        <h2 className="text-slate-900 font-bold text-lg">5. Contact Our Privacy Officer</h2>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            For any inquiries regarding data protection, rectification, or deletion, please contact our legal desk:
                        </p>
                        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm space-y-1">
                            <p className="font-semibold text-slate-900">PROPSMART REALTY Compliance Desk</p>
                            <p className="text-slate-600">Email: <a href="mailto:contact@propsmart.co.in" className="text-sky-600 underline">contact@propsmart.co.in</a></p>
                            <p className="text-slate-600">Phone: +91 7744009295</p>
                            <p className="text-slate-600">MahaRERA Registration: {PROPSMART_RERA.number}</p>
                            <p className="text-slate-600">Address: Pune, Maharashtra 411001, India</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
