import React, { useState } from 'react';
import { X, Loader2, CheckCircle2, Phone, ArrowRight, MessageCircle, Calendar, Clock, Car, ShieldCheck } from 'lucide-react';
import { cloudflare } from '../../services/cloudflare';
import { openWhatsApp } from '../../utils/whatsappUtils';
import { sendLeadEmailNotification } from '../../utils/emailUtils';

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    type: 'Site Visit' | 'Brochure' | 'Offer';
    projectTitle: string;
    projectId?: string;
}

const VISIT_DATES = ['Tomorrow', 'This Saturday', 'This Sunday', 'Next Weekend'];
const VISIT_SLOTS = ['10:30 AM - 1:00 PM', '2:00 PM - 4:30 PM', '5:00 PM - 7:30 PM'];

const LeadForm: React.FC<LeadFormProps> = ({ isOpen, onClose, type, projectTitle, projectId }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
    });
    const [visitDate, setVisitDate] = useState('This Saturday');
    const [visitTimeSlot, setVisitTimeSlot] = useState('10:30 AM - 1:00 PM');
    const [cabPickupRequested, setCabPickupRequested] = useState(false);
    const [pickupAddress, setPickupAddress] = useState('');
    const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Anti-bot check: if honeypot is filled, abort silently
        if (honeypot) {
            setStatus('success');
            setTimeout(onClose, 1000);
            return;
        }

        setStatus('submitting');

        try {
            const insertData = {
                name: formData.name,
                mobile: formData.mobile,
                email: formData.email,
                type: type,
                project_id: projectId, // Can be ID or Slug
                status: 'New',
                metadata: {
                    source: window.location.pathname,
                    project: projectTitle,
                    visit_date: type === 'Site Visit' ? visitDate : undefined,
                    visit_slot: type === 'Site Visit' ? visitTimeSlot : undefined,
                    cab_pickup_requested: type === 'Site Visit' ? cabPickupRequested : false,
                    pickup_address: (type === 'Site Visit' && cabPickupRequested) ? pickupAddress : undefined,
                    utm_source: new URLSearchParams(window.location.search).get('utm_source'),
                    utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
                    utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
                    utm_term: new URLSearchParams(window.location.search).get('utm_term')
                }
            };

            await cloudflare.from('leads').insert([insertData]);

            // Send Email Notification via Web3Forms
            await sendLeadEmailNotification(insertData);

            setStatus('success');
            // Auto-close after 3 seconds
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', mobile: '', email: '' });
                setCabPickupRequested(false);
                setPickupAddress('');
            }, 3000);

        } catch (error) {
            console.error('Lead submit error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-50 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-slate-50 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {status === 'success' ? (
                    <div className="text-center py-8">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-in zoom-in spin-in-12 duration-500">
                            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">Thank You!</h3>
                        <p className="text-slate-600 mb-6">
                            {type === 'Brochure' 
                                ? <>Your request for the official brochure has been received. We are dispatching the complete PDF & floor plans for <strong>{projectTitle}</strong>.</>
                                : type === 'Site Visit'
                                ? <>Your site visit for <strong>{projectTitle}</strong> has been scheduled for <strong>{visitDate} ({visitTimeSlot})</strong>{cabPickupRequested ? ' with complimentary AC cab pickup' : ''}. Our coordinator will contact you shortly.</>
                                : <>Your request for <strong>{type}</strong> has been received. Our expert will call you shortly.</>
                            }
                        </p>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => openWhatsApp(
                                    type === 'Brochure'
                                        ? `Hi, I just requested the official brochure and floor plans for ${projectTitle}. Please share the complete PDF package.`
                                        : type === 'Site Visit'
                                        ? `Hi, I scheduled a site visit for ${projectTitle} on ${visitDate} (${visitTimeSlot})${cabPickupRequested ? ` with cab pickup at ${pickupAddress || 'my residence'}` : ''}. Please confirm.`
                                        : `Hi, I just inquired about ${projectTitle}. Can we chat?`
                                )}
                                className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-200"
                            >
                                <MessageCircle className="w-5 h-5" /> 
                                {type === 'Brochure' ? 'Get Instant Brochure on WhatsApp' : 'Chat on WhatsApp'}
                            </button>
                            <button onClick={onClose} className="text-slate-400 font-bold hover:text-slate-600 text-sm">Close</button>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <span className="inline-block px-3 py-1 bg-brand-50 text-brand-700 font-bold text-xs rounded-full uppercase tracking-wider mb-2">
                                {type}
                            </span>
                            <h3 className="text-2xl font-bold text-slate-800">
                                {type === 'Site Visit' ? 'Book a Site Visit' : type === 'Brochure' ? 'Download Brochure' : 'Get Best Offer'}
                            </h3>
                            <p className="text-slate-500 text-sm mt-1">
                                Enter details to get instant access for <strong>{projectTitle}</strong>.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Anti-bot Honeypot field (hidden from real users) */}
                            <input
                                type="text"
                                name="bot_protection_field"
                                value={honeypot}
                                onChange={e => setHoneypot(e.target.value)}
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                            />

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-base font-medium"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-1">Mobile Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                    <input
                                        type="tel"
                                        required
                                        pattern="[0-9]{10}"
                                        value={formData.mobile}
                                        onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-base font-medium"
                                        placeholder="10-digit number"
                                    />
                                </div>
                            </div>
                            {type === 'Brochure' && (
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-1">Email ID</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all text-base font-medium"
                                        placeholder="To receive the brochure"
                                    />
                                </div>
                            )}

                            {/* Site Visit Interactive Appointment Slot & Free Cab Pickup (Feature 1D) */}
                            {type === 'Site Visit' && (
                                <div className="p-3.5 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3 animate-in fade-in duration-200">
                                    {/* Date Selector */}
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-wide mb-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-sky-600" />
                                            <span>Preferred Visit Day</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-1.5">
                                            {VISIT_DATES.map((d) => (
                                                <button
                                                    key={d}
                                                    type="button"
                                                    onClick={() => setVisitDate(d)}
                                                    className={`py-1.5 px-2.5 rounded-xl text-xs font-bold transition-all text-center border ${
                                                        visitDate === d
                                                            ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                                                            : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100'
                                                    }`}
                                                >
                                                    {d}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Time Slot */}
                                    <div>
                                        <div className="flex items-center gap-1.5 text-xs font-black text-slate-800 uppercase tracking-wide mb-1.5">
                                            <Clock className="w-3.5 h-3.5 text-sky-600" />
                                            <span>Time Slot</span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-1">
                                            {VISIT_SLOTS.map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => setVisitTimeSlot(s)}
                                                    className={`py-1.5 px-1 rounded-xl text-[10px] font-bold transition-all text-center border truncate ${
                                                        visitTimeSlot === s
                                                            ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                                                            : 'bg-white text-slate-700 border-slate-200/80 hover:bg-slate-100'
                                                    }`}
                                                    title={s}
                                                >
                                                    {s.split(' - ')[0]}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Complimentary AC Cab Pickup Toggle */}
                                    <div className="pt-2 border-t border-sky-200/60">
                                        <label className="flex items-center gap-2 cursor-pointer select-none">
                                            <input
                                                type="checkbox"
                                                checked={cabPickupRequested}
                                                onChange={(e) => setCabPickupRequested(e.target.checked)}
                                                className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 border-slate-300"
                                            />
                                            <span className="text-xs font-black text-sky-900 flex items-center gap-1">
                                                <Car className="w-3.5 h-3.5 text-sky-600" />
                                                <span>Request Free AC Cab Pickup (0% Fee)</span>
                                            </span>
                                        </label>

                                        {cabPickupRequested && (
                                            <div className="mt-2 animate-in fade-in duration-150">
                                                <input
                                                    type="text"
                                                    required={cabPickupRequested}
                                                    value={pickupAddress}
                                                    onChange={(e) => setPickupAddress(e.target.value)}
                                                    placeholder="Enter your home address / landmark"
                                                    className="w-full px-3 py-2 rounded-xl bg-white border border-sky-300 text-xs text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 outline-none"
                                                />
                                                <p className="text-[10px] text-sky-700 font-medium mt-1">
                                                    *Complimentary sanitized AC cab will pick you up and drop you back.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Trust & Bot Shield Assurance */}
                            <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-slate-500">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                <span>100% Privacy • Direct Builder Appointment Desk</span>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'submitting' ? (
                                    <> <Loader2 className="w-5 h-5 animate-spin" /> Processing... </>
                                ) : (
                                    <> {type === 'Brochure' ? 'Download Now' : 'Submit Request'} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /> </>
                                )}
                            </button>

                            <p className="text-[10px] text-center text-slate-400">
                                By submitting, you agree to receive updates via WhatsApp/Call.
                            </p>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default LeadForm;
