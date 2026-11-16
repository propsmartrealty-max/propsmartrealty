import React, { useState } from 'react';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, ShieldCheck, Send } from 'lucide-react';
import { cloudflare } from '../services/cloudflare';
import { sendLeadEmailNotification } from '../utils/emailUtils';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            name: formData.get('name') as string,
            mobile: formData.get('mobile') as string,
            type: 'Contact Us',
            status: 'New',
            metadata: {
                message: formData.get('message') as string
            }
        };

        try {
            const { error } = await cloudflare.from('leads').insert([data]);
            if (error) throw error;

            await sendLeadEmailNotification(data);
            if (error) throw error;
            setSubmitted(true);
        } catch (err) {
            console.error(err);
            alert('Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col relative selection:bg-sky-500 selection:text-white">
            <WaterAmbientBackground />
            <SEO
                title="Contact Us - Free Site Visits & Direct Builder Consultation | PROPSMART REALTY"
                description="Get in touch with PROPSMART REALTY for 100% zero brokerage property advisory, verified MahaRERA documentation, and authorized builder site visits in Pune & Mumbai."
                canonical="https://propsmart.co.in/contact"
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "name": "Contact PROPSMART REALTY",
                        "url": "https://propsmart.co.in/contact",
                        "description": "Schedule a direct developer site visit with zero brokerage through PROPSMART REALTY.",
                        "mainEntity": {
                            "@type": "RealEstateAgent",
                            "name": "PROPSMART REALTY",
                            "telephone": "+91-7744009295",
                            "email": "contact@propsmart.co.in",
                            "license": "A031262401295"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://propsmart.co.in"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Contact Us",
                                "item": "https://propsmart.co.in/contact"
                            }
                        ]
                    }
                ]}
            />
            <PortalNavbar variant="colored" />

            <div className="flex-1 pt-32 pb-12 px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-10 text-center tracking-tight">Get in Touch</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="glass-panel p-8 rounded-3xl border border-white/80 shadow-[0_8px_32px_rgba(14,165,233,0.06)]">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 border border-sky-500/20">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Phone</p>
                                        <a href="tel:+917744009295" className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">+91 7744009295</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 border border-sky-500/20">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Email</p>
                                        <a href="mailto:connect@propsmart.co.in" className="text-lg font-bold text-slate-900 hover:text-sky-600 transition-colors">connect@propsmart.co.in</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-600 border border-sky-500/20">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">Office</p>
                                        <p className="text-lg font-bold text-slate-900">Baner, Pune, Maharashtra 411045</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-4 border-t border-slate-200/60">
                                    <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-wider">MahaRERA Registration</p>
                                        <p className="text-lg font-black text-slate-900 tracking-wide">A031262401295</p>
                                        <a
                                            href="https://maharera.maharashtra.gov.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 underline mt-1 inline-block"
                                        >
                                            Verify on MahaRERA Portal ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass-panel-elevated water-border-flow p-8 rounded-3xl border border-white/80 shadow-[0_12px_40px_rgba(14,165,233,0.1)]">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>

                            {submitted ? (
                                <div className="text-center py-8 glass-panel rounded-2xl border border-emerald-200/80">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Mail className="w-6 h-6 text-emerald-600" />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                                    <p className="text-slate-600 text-sm">Thanks for reaching out. We'll reply shortly.</p>
                                    <button onClick={() => setSubmitted(false)} className="mt-4 text-sky-600 font-bold text-sm hover:underline">Send Another</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Name</label>
                                        <input required name="name" type="text" className="w-full glass-input px-4 py-3 rounded-2xl text-slate-900 placeholder-slate-400 font-medium" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Mobile</label>
                                        <input required name="mobile" type="tel" className="w-full glass-input px-4 py-3 rounded-2xl text-slate-900 placeholder-slate-400 font-medium" placeholder="Your Number" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Message</label>
                                        <textarea required name="message" rows={4} className="w-full glass-input px-4 py-3 rounded-2xl text-slate-900 placeholder-slate-400 font-medium" placeholder="How can we help you?" />
                                    </div>
                                    <button disabled={loading} className="w-full water-btn text-white font-extrabold py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex items-center justify-center gap-2">
                                        <Send className="w-4 h-4" />
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
