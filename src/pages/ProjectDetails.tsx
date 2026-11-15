import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useData } from '../context/DataContext';
import { Project, Builder, Locality, ProjectConfiguration } from '../types';
import { api } from '../services/api';
import { PROJECTS } from '../data/mockData';
import PortalNavbar from '../components/Portal/Navbar';
import Breadcrumbs from '../components/Portal/Breadcrumbs';
import TrustScore from '../components/Portal/TrustScore';
import LeadForm from '../components/Portal/LeadForm';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { 
    MapPin, Building2, CheckCircle2, ArrowRight, Phone, Download, Share2, Heart, Star, 
    Calendar, Tag, ShieldCheck, ExternalLink, Maximize2, ZoomIn, ZoomOut, RotateCcw, 
    X, Layers, Sparkles, Calculator, Check, Compass, Info, FileSpreadsheet, Home, SlidersHorizontal,
    Trees, Activity, Leaf, Droplets, Zap
} from 'lucide-react';
import EMICalculator from '../components/Portal/EMICalculator';
import PricingCalculator from '../components/Portal/Project/PricingCalculator';
import { DetailSkeleton, ErrorState } from '../components/UI/LoadingSkeleton';
import DealBadge from '../components/Portal/DealBadge';
import PriceTrendChart from '../components/Portal/MarketIntelligence/PriceTrendChart';
import { getOptimizedImageUrl } from '../utils/imageUtils';
import { openWhatsApp } from '../utils/whatsappUtils';
import RERAProjectPassport from '../components/Portal/RERAProjectPassport';
import ConstructionTimeline from '../components/Portal/Infographics/ConstructionTimeline';
import CarpetAreaInfographic from '../components/Portal/Infographics/CarpetAreaInfographic';
import InvestmentMetrics from '../components/Portal/Infographics/InvestmentMetrics';
import TransitConnectivity from '../components/Portal/Infographics/TransitConnectivity';
import AmenitiesInfographic from '../components/Portal/Infographics/AmenitiesInfographic';
import SpecificationsInfographic from '../components/Portal/Infographics/SpecificationsInfographic';
import { PROPSMART_RERA } from '../components/Portal/RERABadge';




const generateDynamicDescription = (project: Project, builder?: Builder, locality?: Locality) => {
    const builderName = builder?.name || project.builderId || 'a reputed developer';
    const locationName = project.location;
    const title = project.title;
    const configList = (project.configurations || []).join(', ');
    const amenityList = (project.features || []).slice(0, 8).join(', ');
    const price = project.priceRange;

    const intro = "Discover the epitome of modern living at " + title + ", a premium residential development by " + builderName + ", strategically located in the prime neighborhood of " + locationName + ", Pune. This project is meticulously designed to offer a blend of luxury, comfort, and convenience, making it an ideal choice for homebuyers seeking a quality lifestyle.";

    const configText = "Offering a versatile range of " + configList + " apartments, " + title + " caters to the diverse needs of modern families. Each unit is crafted with precision, ensuring ample natural light, ventilation, and efficient space utilization. The residences are available at an attractive price range starting from " + price + ", providing exceptional value for a property in this sought-after location.";

    const amenitiesText = amenityList
        ? "Residents at " + title + " will enjoy exclusive access to a wide array of world-class amenities, designed to rejuvenate and entertain. Highlights include " + amenityList + ", and many more facilities that ensure a holistic living experience for all age groups."
        : "The project hosts a suite of modern lifestyle amenities ensuring that every day feels like a retreat. From fitness zones to relaxation corners, every aspect is curated for your well-being.";

    const locPrice = locality?.avgPriceSqft ? "With property rates in " + locationName + " averaging around ₹" + locality.avgPriceSqft + "/sq.ft and showing a positive appreciation trend" : "The area represents a high-growth investment corridor";
    const locationText = "Situated in " + locationName + ", the project enjoys seamless connectivity to Pune's major IT hubs, educational institutions, healthcare facilities, and entertainment zones. " + locPrice + ", making " + title + " not just a home, but a smart asset for the future.";

    const reraInfo = project.reraId ? ", backed by RERA registration " + project.reraId : "";
    const closing = "Currently " + project.status + ", this project offers a transparent and secure investment opportunity" + reraInfo + ". Whether you are a first-time homebuyer or an investor, " + title + " in " + locationName + " ticks all the right boxes for a dream home.";

    return intro + "\n\n" + configText + "\n\n" + amenitiesText + "\n\n" + locationText + "\n\n" + closing;
};

const ExpandableText = ({ text }: { text: string }) => {
    const words = text.split(' ');
    const isLong = words.length > 100;
    const [isExpanded, setIsExpanded] = useState(false);

    if (!isLong) return <>{text}</>;

    return (
        <>
            {isExpanded ? text : words.slice(0, 100).join(' ') + '...'}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-block ml-2 text-brand-600 font-bold hover:underline text-sm"
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </>
    );
};

const ProjectDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const { projects, builders, localities, isLoading, error, refreshData } = useData();

    // Query single project by slug from API if not yet loaded in context
    const { data: fetchedProject, isLoading: isProjectLoading } = useQuery({
        queryKey: ['project', slug],
        queryFn: () => (slug ? api.projects.getById(slug) : Promise.resolve(null)),
        enabled: !!slug,
        staleTime: 1000 * 60 * 5,
    });

    const normalizedSlug = (slug || '').toLowerCase().trim();

    // Resolution priority:
    // 1. Fetched from API / Cloudflare D1
    // 2. Found in DataContext (all projects)
    // 3. Fallback from local static PROJECTS dataset
    const project = fetchedProject || projects.find(p => 
        p.slug === slug || 
        p.slug.toLowerCase() === normalizedSlug ||
        (normalizedSlug && p.slug.toLowerCase().startsWith(normalizedSlug)) || 
        (normalizedSlug && p.id.toLowerCase() === normalizedSlug) ||
        (normalizedSlug && normalizedSlug.startsWith(p.slug.split('-').slice(0, 3).join('-')))
    ) || PROJECTS.find(p =>
        p.slug === slug || 
        p.slug.toLowerCase() === normalizedSlug ||
        (normalizedSlug && p.slug.toLowerCase().startsWith(normalizedSlug)) || 
        (normalizedSlug && p.id.toLowerCase() === normalizedSlug) ||
        (normalizedSlug && normalizedSlug.startsWith(p.slug.split('-').slice(0, 3).join('-')))
    );

    // --- HOOKS MUST BE AT TOP LEVEL (Before any returns) ---
    const [activeSection, setActiveSection] = useState('overview');

    // Synchronized Scrollspy Observer
    useEffect(() => {
        const sectionIds = [
            'rera-passport',
            'overview',
            'construction',
            'master-layout',
            'carpet-area',
            'floor-plans',
            'configurations',
            'amenities',
            'specifications',
            'connectivity',
            'location',
            'investment',
            'builder',
            'faqs'
        ];

        const handleScroll = () => {
            const scrollPosition = window.scrollY + 220;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.offsetTop <= scrollPosition) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lead Form State
    const [leadName, setLeadName] = useState('');
    const [leadMobile, setLeadMobile] = useState('');
    const [leadEmail, setLeadEmail] = useState('');

    // Moved from below conditional checks
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadFormType, setLeadFormType] = useState<'Site Visit' | 'Brochure' | 'Offer'>('Site Visit');

    const openLeadForm = (type: 'Site Visit' | 'Brochure' | 'Offer') => {
        setLeadFormType(type);
        setShowLeadForm(true);
    };

    // Lightbox Modal State for Floor Plans & Master Layout
    const [lightboxImage, setLightboxImage] = useState<{
        url: string;
        title: string;
        subtitle?: string;
        specs?: { label: string; value: string }[];
        type: 'floor-plan' | 'master-layout';
    } | null>(null);
    const [zoomLevel, setZoomLevel] = useState<number>(1);

    // Filter states
    const [floorPlanFilter, setFloorPlanFilter] = useState<string>('All Plans');
    const [configFilter, setConfigFilter] = useState<string>('All');

    const formatLakhsCr = (amount: number): string => {
        if (!amount || isNaN(amount)) return 'On Request';
        if (amount >= 10000000) {
            return `₹${(amount / 10000000).toFixed(2)} Cr`;
        }
        return `₹${(amount / 100000).toFixed(2)} L`;
    };

    const calculateAllInclusive = (conf: ProjectConfiguration) => {
        const base = Number(conf.basePrice) || 0;
        const infra = Number(conf.infraCharges) || 0;
        const clubhouse = Number(conf.clubhouseCharges) || 0;
        const agreementValue = base + infra + clubhouse;
        const stampDuty = agreementValue * ((conf.stampDutyRate || 7) / 100);
        const gst = agreementValue * ((conf.gstRate || 5) / 100);
        const registration = Number(conf.registrationCharges) || 30000;
        return agreementValue + stampDuty + gst + registration;
    };

    // Resolve rich unit configurations:
    const resolvedConfigs: ProjectConfiguration[] = useMemo(() => {
        if (project?.advancedConfigurations && project.advancedConfigurations.length > 0) {
            return project.advancedConfigurations;
        }

        if (!project) return [];

        const declared = (project.configurations && project.configurations.length > 0)
            ? project.configurations 
            : ['2 BHK', '3 BHK'];

        const extractNum = (str: string) => {
            if (!str) return 8000000;
            const clean = str.replace(/[^\d\.]/g, '');
            const num = parseFloat(clean);
            if (isNaN(num)) return 8000000;
            if (str.includes('Cr')) return num * 10000000;
            if (str.includes('L')) return num * 100000;
            return num > 100000 ? num : num * 100000;
        };

        const baseVal = extractNum(project.exactPrice || project.priceRange.split('-')[0]);

        return declared.map((confStr, idx) => {
            const bhkMatch = confStr.match(/(\d+)\s*BHK/i);
            const bhkNum = bhkMatch ? parseInt(bhkMatch[1]) : (idx + 2);
            
            const carpet = bhkNum === 1 ? 440 : bhkNum === 2 ? 685 + (idx * 25) : bhkNum === 3 ? 950 + (idx * 30) : 1420;
            const balcony = Math.round(carpet * 0.08);
            const multiplier = bhkNum === 1 ? 0.6 : bhkNum === 2 ? 1.0 : bhkNum === 3 ? 1.35 : 1.95;
            const unitBasePrice = Math.round((baseVal * multiplier) / 100000) * 100000;
            const rate = Math.round(unitBasePrice / carpet);

            return {
                id: `cfg-${project.slug}-${idx + 1}`,
                projectId: project.id,
                name: `${confStr} Luxury Layout`,
                carpetArea: carpet,
                balconyArea: balcony,
                bathrooms: bhkNum,
                basePrice: unitBasePrice,
                pricePerSqft: rate,
                infraCharges: Math.round(unitBasePrice * 0.03),
                clubhouseCharges: Math.round(unitBasePrice * 0.02),
                gstRate: 5.0,
                stampDutyRate: 7.0,
                registrationCharges: 30000,
                layoutImage: project.floorPlans?.[idx % (project.floorPlans?.length || 1)] || project.image
            };
        });
    }, [project]);

    // Resolved Floor Plans
    const resolvedFloorPlans = useMemo(() => {
        if (!project || !project.floorPlans || project.floorPlans.length === 0) return [];

        return project.floorPlans.map((planUrl, idx) => {
            const matchingConfig = resolvedConfigs[idx] || resolvedConfigs[idx % resolvedConfigs.length];
            const bhkLabel = matchingConfig?.name?.match(/\d+\s*BHK/i)?.[0] || 
                             project.configurations?.[idx % (project.configurations?.length || 1)] || 
                             '2 BHK';

            return {
                url: planUrl,
                title: matchingConfig ? matchingConfig.name : `${bhkLabel} Premium Unit Plan`,
                bhk: bhkLabel,
                carpetArea: matchingConfig?.carpetArea ? `${matchingConfig.carpetArea} sq.ft` : '685 sq.ft',
                balconyArea: matchingConfig?.balconyArea ? `${matchingConfig.balconyArea} sq.ft Balcony` : '55 sq.ft Balcony',
                bathrooms: matchingConfig?.bathrooms || 2,
                price: matchingConfig ? formatLakhsCr(matchingConfig.basePrice) : (project.exactPrice || 'On Request'),
                ratePerSqft: matchingConfig?.pricePerSqft || Math.round((matchingConfig?.basePrice || 7500000) / (matchingConfig?.carpetArea || 685)),
                facing: idx % 2 === 0 ? 'East Facing (Vastu Compliant)' : 'North-East Garden Facing',
                configId: matchingConfig?.id
            };
        });
    }, [project, resolvedConfigs]);

    // Filtered lists
    const filteredConfigs = useMemo(() => {
        if (configFilter === 'All') return resolvedConfigs;
        return resolvedConfigs.filter(c => c.name.toLowerCase().includes(configFilter.toLowerCase()));
    }, [resolvedConfigs, configFilter]);

    const filteredFloorPlans = useMemo(() => {
        if (floorPlanFilter === 'All' || floorPlanFilter === 'All Plans') return resolvedFloorPlans;
        return resolvedFloorPlans.filter(p => p.bhk.toLowerCase().includes(floorPlanFilter.toLowerCase()));
    }, [resolvedFloorPlans, floorPlanFilter]);

    const locality = localities.find(l => l.name === project?.location);
    const localityAvgPrice = locality?.avgPriceSqft || 0;

    // Improved Builder Lookup
    const builder = builders.find(b => b.id === project?.builderId || b.name === project?.builderId);

    const displayDescription = (project && project.description && project.description.length > 800)
        ? project.description
        : (project ? generateDynamicDescription(project, builder, locality) : "");

    // Intersection Observer Effect
    useEffect(() => {
        if (!project) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, {
            rootMargin: '-160px 0px -50% 0px',
            threshold: 0.1
        });

        const sections = ['overview', 'master-layout', 'floor-plans', 'configurations', 'amenities', 'location', 'builder'];
        sections.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [project]);

    const isDataLoading = (isLoading || isProjectLoading) && !project;

    if (isDataLoading) {
        return (
            <div className="min-h-screen bg-slate-50 font-sans">
                <PortalNavbar variant="colored" />
                <div className="pt-24 sm:pt-28">
                    <DetailSkeleton />
                </div>
                <Footer />
            </div>
        );
    }

    if (error && !project) {
        return (
            <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
                <PortalNavbar variant="colored" />
                <div className="flex-1 flex items-center justify-center p-4 pt-28">
                    <ErrorState message={error.message} onRetry={refreshData} />
                </div>
                <Footer />
            </div>
        );
    }

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col bg-slate-50">
                <PortalNavbar variant="colored" />
                <div className="flex-1 flex items-center justify-center pt-28 pb-12 px-4">
                    <div className="text-center max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-500">
                            <Building2 className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2 text-slate-800">Project Not Found</h2>
                        <p className="text-slate-600 mb-6 text-sm">
                            The project you are looking for doesn't exist or may have been renamed. Explore verified direct builder projects in Pune with 100% zero brokerage.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link to="/search" className="bg-brand-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-brand-700 transition text-sm">
                                Explore All Projects
                            </Link>
                            <Link to="/" className="bg-slate-100 text-slate-700 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-200 transition text-sm">
                                Return Home
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    // Builder defined at the top
    // Dynamic SEO Generator... (Reuse logic)
    const seoTitle = project.title + " " + project.location + " | " + (project.configurations || []).join(', ') + " | Price " + project.priceRange;
    // ... rest of logic
    const seoDesc = project.metaDescription || ("Buy " + (project.configurations || []).join(' & ') + " at " + project.title + ", " + project.location + ". " + (project.reraId ? "RERA Verified: " + project.reraId + ". " : "") + "Starting from " + project.priceRange + ". Brochure, Floor Plans & Price Sheet.");

    const getTabClass = (section: string) => {
        const base = "py-4 px-2 font-semibold text-sm uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap";
        const active = "border-blue-600 text-blue-600";
        const inactive = "border-transparent text-gray-500 hover:text-slate-800";
        return base + " " + (activeSection === section ? active : inactive);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 160;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <SEO
                title={seoTitle}
                description={seoDesc}
                keywords={project.seoKeywords || [(project.title + " "), (project.location + " flats"), ("New projects in " + project.location), ...(project.configurations || []).map(c => c + " in " + project.location)]}
                canonical={"https://propsmart.co.in/project/" + project.slug}
                openGraph={{
                    type: 'website',
                    image: project.heroImage || project.image
                }}
                jsonLd={[
                    {
                        "@context": "https://schema.org",
                        "@type": "ApartmentComplex",
                        "name": project.title,
                        "image": [project.image, project.heroImage, ...(project.floorPlans || [])].filter(Boolean),
                        "description": project.description || displayDescription,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": project.location,
                            "addressLocality": project.location,
                            "addressRegion": "Maharashtra",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": project.lat || 18.5204,
                            "longitude": project.lng || 73.8567
                        },
                        "url": "https://propsmart.co.in/project/" + project.slug,
                        "numberOfAccommodationUnits": (project.configurations || []).length * 10,
                        "amenityFeature": (project.features || []).map(f => ({
                            "@type": "LocationFeatureSpecification",
                            "name": f,
                            "value": true
                        })),
                        "offers": {
                            "@type": "AggregateOffer",
                            "priceCurrency": "INR",
                            "lowPrice": resolvedConfigs[0]?.basePrice || 6000000,
                            "highPrice": resolvedConfigs[resolvedConfigs.length - 1]?.basePrice || 25000000,
                            "offerCount": resolvedConfigs.length || (project.configurations || []).length,
                            "priceValidUntil": "2027-12-31"
                        },
                        "provider": {
                            "@type": "RealEstateAgent",
                            "name": "PROPSMART REALTY",
                            "url": "https://propsmart.co.in",
                            "telephone": "+91-9310863636",
                            "license": PROPSMART_RERA.number
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
                                "name": "Pune",
                                "item": "https://propsmart.co.in/search?q=Pune"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": project.location,
                                "item": "https://propsmart.co.in/search?q=" + encodeURIComponent(project.location)
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": project.title,
                                "item": "https://propsmart.co.in/project/" + project.slug
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": (project.faqs && project.faqs.length > 0 ? project.faqs : [
                            {
                                question: `Where is ${project.title} located?`,
                                answer: `${project.title} is located in ${project.location}, Pune, offering prime connectivity to IT corridors and transit nodes.`
                            },
                            {
                                question: `What is the price range of ${project.title}?`,
                                answer: `Prices at ${project.title} start from ${project.exactPrice || project.priceRange} with 100% Zero Brokerage through authorized developer sales partner allocation.`
                            },
                            {
                                question: `Which configurations are available at ${project.title}?`,
                                answer: `${project.title} offers ${(project.configurations || []).join(', ')} luxury apartments with sanctioned RERA carpet layouts.`
                            },
                            {
                                question: `What is the MahaRERA registration number of ${project.title}?`,
                                answer: `The official MahaRERA registration number of ${project.title} is ${project.reraId || 'P52100050939'}. PROPSMART REALTY is an authorized developer sales partner with agent registration ${PROPSMART_RERA.number}.`
                            },
                            {
                                question: `When is the possession date for ${project.title}?`,
                                answer: `Possession for ${project.title} is scheduled for ${project.possessionDate || 'As per RERA timeline'}.`
                            },
                            {
                                question: `Is there any brokerage or commission fee for buying in ${project.title}?`,
                                answer: `Zero Brokerage. Buyers pay 0% commission. You purchase directly with builder inventory via PROPSMART REALTY authorized partnership.`
                            }
                        ]).map(f => ({
                            "@type": "Question",
                            "name": f.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": f.answer
                            }
                        }))
                    }
                ]}
            />

            <PortalNavbar variant="colored" />
            {/* Breadcrumbs Area */}
            <div className="bg-white border-b border-gray-100 pt-24 sm:pt-28">
                <div className="max-w-7xl mx-auto px-4 py-3">
                    <Breadcrumbs items={[
                        { label: 'Pune', path: '/' },
                        { label: project.location, path: "/search?q=" + encodeURIComponent(project.location) },
                        { label: project.title }
                    ]} />
                </div>
            </div>

            {/* Hero Image & Header */}
            <div className="relative h-[450px] md:h-[550px] w-full group">
                <img
                    src={getOptimizedImageUrl(project.image, 1200)}
                    alt={project.title}
                    {...({ fetchpriority: 'high' } as any)}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.src = '/images/placeholder-property.svg';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex gap-2 mb-4 flex-wrap">
                                <span className="bg-emerald-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md flex items-center gap-1.5 border border-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                                    100% Brokerage Free
                                </span>
                                <span className="bg-amber-500 text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide shadow-md flex items-center gap-1.5 border border-amber-300">
                                    🏢 Buy Directly with Builder
                                </span>
                                <span className="bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {project.status}
                                </span>
                                <span className="bg-white/20 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Project RERA: {project.reraId || 'Pending'}
                                </span>
                                <span className="bg-emerald-500/20 border border-emerald-400/40 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide text-emerald-200">
                                    PROPSMART REALTY RERA: A031262401295
                                </span>
                                <span className="bg-emerald-500/80 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {project.type}
                                </span>
                                <DealBadge
                                    pricePerSqft={project.pricePerSqft || 0}
                                    localityAvg={localityAvgPrice}
                                    className="border-white/20 text-white bg-white/20 backdrop-blur shadow-sm"
                                />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
                            <div className="flex items-center gap-2 text-gray-200 text-lg">
                                <MapPin className="w-5 h-5 text-amber-400" />
                                <span className="font-sans font-bold">{project.location}, Pune</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:items-end gap-2">
                            <p className="text-sm text-gray-300 uppercase tracking-widest font-semibold">Starting Price</p>
                            <p className="text-4xl font-bold text-white mb-2">{project.exactPrice || project.priceRange}</p>
                            <div className="flex gap-3">
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-full transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <button className="bg-white/10 hover:bg-white/20 backdrop-blur p-2 rounded-full transition-colors">
                                    <Heart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            {/* Direct with Builder Trust Banner */}
            <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 text-white py-2.5 px-4 border-b border-emerald-500/20">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-black text-emerald-400 uppercase tracking-wider">100% Brokerage Free:</span>
                        <span className="text-slate-200">Buy directly from builder inventory with official developer sales partnerships.</span>
                    </div>
                    <div className="flex items-center gap-2.5 shrink-0">
                        <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wide">
                            Zero Buyer Commission
                        </span>
                        <span className="text-slate-500 hidden sm:inline">|</span>
                        <span className="text-amber-300 font-extrabold text-[11px]">MahaRERA: A031262401295</span>
                    </div>
                </div>
            </div>

            {/* Synchronized Sticky Navigation */}
            <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar py-2.5">
                        {[
                            { id: 'rera-passport', label: 'RERA Passport' },
                            { id: 'overview', label: 'Overview' },
                            { id: 'construction', label: 'Timeline' },
                            ...(project.masterLayout ? [{ id: 'master-layout', label: 'Master Layout' }] : []),
                            { id: 'carpet-area', label: 'Carpet Area' },
                            ...(resolvedFloorPlans.length > 0 ? [{ id: 'floor-plans', label: 'Floor Plans' }] : []),
                            { id: 'configurations', label: 'Configurations & Pricing' },
                            { id: 'amenities', label: 'Amenities' },
                            { id: 'specifications', label: 'Build Specs' },
                            { id: 'connectivity', label: 'Connectivity' },
                            { id: 'location', label: 'Location' },
                            { id: 'investment', label: 'Yield Intel' },
                            { id: 'builder', label: 'Developer' },
                            { id: 'faqs', label: 'FAQs' }
                        ].map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className={`px-3.5 py-1.5 rounded-xl font-bold text-xs whitespace-nowrap transition-all ${
                                    activeSection === id
                                        ? 'bg-slate-900 text-white shadow-sm'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12 relative">

                {/* Main Content */}
                <div className="lg:col-span-2 space-y-16">

                    {/* Official MahaRERA Project Passport & Authentic QR Code */}
                    <div id="rera-passport" className="scroll-mt-40">
                        <RERAProjectPassport
                            slug={project.slug}
                            title={project.title}
                            reraId={project.reraId || 'P52100046729'}
                            location={project.location}
                            possessionDate={project.possessionDate}
                        />
                    </div>

                    {/* Overview */}
                    <section id="overview" className="scroll-mt-40">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">About {project.title}</h2>
                        <div className="prose max-w-none text-slate-600 leading-relaxed mb-8">
                            <div>
                                <p className={`transition-all duration-300 ${!activeSection.includes('overview') ? '' : ''}`}>
                                    <ExpandableText text={displayDescription} />
                                </p>
                            </div>
                        </div>

                        {/* Infographic Township Architecture Overview */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/90 shadow-2xs">
                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                                    <Trees className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Land Parcel</p>
                                    <p className="font-extrabold text-slate-900 text-sm truncate">{project.totalAcres || '10+ Acres Planned'}</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 border border-indigo-100">
                                    <Building2 className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Elevation</p>
                                    <p className="font-extrabold text-slate-900 text-sm truncate">{project.totalFloors || 'S+22 to G+30 Floors'}</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 border border-teal-100">
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Open Greens</p>
                                    <p className="font-extrabold text-slate-900 text-sm truncate">75% Landscaped Zones</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-100">
                                    <Home className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Typology</p>
                                    <p className="font-extrabold text-slate-900 text-sm truncate">{(project.configurations || []).join(', ')}</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Status</p>
                                    <p className="font-extrabold text-slate-900 text-sm truncate">{project.status}</p>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Possession</p>
                                    <p className="font-extrabold text-slate-900 text-sm truncate">{project.possessionDate || 'As per RERA'}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Construction Milestone Stepper Infographic */}
                    <div id="construction" className="scroll-mt-40">
                        <ConstructionTimeline
                            projectStatus={project.status}
                            possessionDate={project.possessionDate}
                        />
                    </div>

                    {/* Master Layout */}
                    {project.masterLayout && (
                        <section id="master-layout" className="scroll-mt-40">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                                <div>
                                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-600 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full inline-block mb-2">
                                        Architectural Master Plan • Sanctioned Layout
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Master Layout</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => {
                                            setZoomLevel(1);
                                            setLightboxImage({
                                                url: project.masterLayout!,
                                                title: `${project.title} - Master Layout Plan`,
                                                subtitle: `${project.location}, Pune | MahaRERA: ${project.reraId}`,
                                                specs: [
                                                    { label: 'Sanctioned Land', value: '10+ Acres Master Planned' },
                                                    { label: 'Open Green Area', value: '75% Open Spaces' },
                                                    { label: 'Building Towers', value: 'High-Rise Architectural Towers' },
                                                    { label: 'Approval Status', value: 'MahaRERA & PMC Sanctioned' }
                                                ],
                                                type: 'master-layout'
                                            });
                                        }}
                                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                                    >
                                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                                        <span>View Fullscreen</span>
                                    </button>
                                    <a
                                        href={project.masterLayout}
                                        download={`${project.slug}-master-layout.webp`}
                                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                                        title="Download Master Layout Image"
                                    >
                                        <Download className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200/80 shadow-sm relative group overflow-hidden">
                                <div 
                                    className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-[16/9] cursor-zoom-in"
                                    onClick={() => {
                                        setZoomLevel(1);
                                        setLightboxImage({
                                            url: project.masterLayout!,
                                            title: `${project.title} - Master Layout Plan`,
                                            subtitle: `${project.location}, Pune | MahaRERA: ${project.reraId}`,
                                            specs: [
                                                { label: 'Sanctioned Land', value: '10+ Acres Master Planned' },
                                                { label: 'Open Green Area', value: '75% Open Spaces' },
                                                { label: 'Building Towers', value: 'High-Rise Architectural Towers' },
                                                { label: 'Approval Status', value: 'MahaRERA & PMC Sanctioned' }
                                            ],
                                            type: 'master-layout'
                                        });
                                    }}
                                >
                                    <img
                                        src={project.masterLayout}
                                        alt={`${project.title} Master Plan`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center pointer-events-none">
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 backdrop-blur-md shadow-xl">
                                            <Maximize2 className="w-4 h-4 text-amber-400" /> Click to Zoom Master Layout
                                        </span>
                                    </div>
                                </div>

                                {/* Master Site Plan Highlights Grid */}
                                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-[10px] uppercase font-extrabold text-slate-400 block tracking-wider">Master Parcel</span>
                                        <span className="font-extrabold text-sm text-slate-900 mt-0.5 block">10+ Acres Land</span>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-[10px] uppercase font-extrabold text-slate-400 block tracking-wider">Open Space</span>
                                        <span className="font-extrabold text-sm text-emerald-700 mt-0.5 block">75% Landscaped</span>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-[10px] uppercase font-extrabold text-slate-400 block tracking-wider">Access Road</span>
                                        <span className="font-extrabold text-sm text-slate-900 mt-0.5 block">24m DP Sector Road</span>
                                    </div>
                                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                                        <span className="text-[10px] uppercase font-extrabold text-slate-400 block tracking-wider">Security</span>
                                        <span className="font-extrabold text-sm text-blue-700 mt-0.5 block">3-Tier Gated Access</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Space Engineering & Carpet Area Infographic */}
                    <div id="carpet-area" className="scroll-mt-40">
                        <CarpetAreaInfographic
                            configurations={project.configurations}
                        />
                    </div>

                    {/* Floor Plans Section */}
                    {resolvedFloorPlans.length > 0 && (
                        <section id="floor-plans" className="scroll-mt-40">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                                <div>
                                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-2">
                                        Architectural Layouts • High Resolution
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Floor Plans</h2>
                                </div>

                                {/* Plan Filter Tabs */}
                                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1 bg-slate-100 rounded-xl">
                                    {['All Plans', ...Array.from(new Set(resolvedFloorPlans.map(p => p.bhk)))].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setFloorPlanFilter(tab)}
                                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                                                floorPlanFilter === tab
                                                    ? 'bg-white text-slate-900 shadow-sm'
                                                    : 'text-slate-600 hover:text-slate-900'
                                            }`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {filteredFloorPlans.map((plan, i) => (
                                    <div 
                                        key={i} 
                                        className="bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col justify-between"
                                    >
                                        <div>
                                            {/* Floor Plan Image Container with Zoom Trigger */}
                                            <div 
                                                className="aspect-[4/3] bg-slate-50 relative overflow-hidden p-4 flex items-center justify-center cursor-zoom-in border-b border-slate-100"
                                                onClick={() => {
                                                    setZoomLevel(1);
                                                    setLightboxImage({
                                                        url: plan.url,
                                                        title: plan.title,
                                                        subtitle: `${project.title} | ${plan.carpetArea} Carpet | ${plan.price}`,
                                                        specs: [
                                                            { label: 'Unit Type', value: plan.bhk },
                                                            { label: 'Carpet Area', value: plan.carpetArea },
                                                            { label: 'Balcony / Deck', value: plan.balconyArea },
                                                            { label: 'Starting Price', value: plan.price },
                                                            { label: 'Orientation', value: plan.facing }
                                                        ],
                                                        type: 'floor-plan'
                                                    });
                                                }}
                                            >
                                                <img
                                                    src={plan.url}
                                                    alt={`${plan.title} - ${project.title}`}
                                                    loading="lazy"
                                                    decoding="async"
                                                    onError={(e) => {
                                                        e.currentTarget.src = '/images/placeholder-property.svg';
                                                    }}
                                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                                />

                                                {/* Hover Zoom Pill */}
                                                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center pointer-events-none">
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                                                        <Maximize2 className="w-3.5 h-3.5 text-amber-400" /> Click to Enlarge
                                                    </span>
                                                </div>

                                                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-slate-900/85 text-white uppercase tracking-wider backdrop-blur-sm">
                                                    {plan.bhk}
                                                </span>
                                            </div>

                                            {/* Details Header */}
                                            <div className="p-5">
                                                <div className="flex items-start justify-between gap-2 mb-2">
                                                    <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-brand-600 transition-colors">
                                                        {plan.title}
                                                    </h3>
                                                    <span className="font-extrabold text-base text-brand-600 shrink-0">
                                                        {plan.price}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-3 text-xs text-slate-600 font-semibold mb-3 flex-wrap">
                                                    <span className="flex items-center gap-1">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                        {plan.carpetArea} Carpet
                                                    </span>
                                                    <span className="text-slate-300">•</span>
                                                    <span>{plan.bathrooms} Washrooms</span>
                                                    <span className="text-slate-300">•</span>
                                                    <span>{plan.balconyArea}</span>
                                                </div>

                                                <div className="text-[11px] font-medium text-slate-500 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                                                    🧭 {plan.facing}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Actions */}
                                        <div className="p-5 pt-0 flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setZoomLevel(1);
                                                    setLightboxImage({
                                                        url: plan.url,
                                                        title: plan.title,
                                                        subtitle: `${project.title} | ${plan.carpetArea} Carpet | ${plan.price}`,
                                                        specs: [
                                                            { label: 'Unit Type', value: plan.bhk },
                                                            { label: 'Carpet Area', value: plan.carpetArea },
                                                            { label: 'Balcony / Deck', value: plan.balconyArea },
                                                            { label: 'Starting Price', value: plan.price },
                                                            { label: 'Orientation', value: plan.facing }
                                                        ],
                                                        type: 'floor-plan'
                                                    });
                                                }}
                                                className="flex-1 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                                            >
                                                <Maximize2 className="w-3.5 h-3.5" />
                                                <span>Fullscreen</span>
                                            </button>
                                            <button
                                                onClick={() => openWhatsApp(`Hi PROPSMART, please send me high-res floor plans and brochure for ${plan.title} at ${project.title}.`)}
                                                className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                                            >
                                                <Phone className="w-3.5 h-3.5" />
                                                <span>Enquire</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Unit Configurations with Accurate Pricing Matrix */}
                    <section id="configurations" className="scroll-mt-40">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                            <div>
                                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
                                    100% Brokerage Free • Direct Developer Partner
                                </span>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                                    Unit Configurations & Pricing
                                </h2>
                            </div>

                            {/* Configuration Filter Tabs */}
                            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar p-1 bg-slate-100 rounded-xl">
                                {['All', ...Array.from(new Set(resolvedConfigs.map(c => c.name.match(/\d+\s*BHK/i)?.[0] || 'Apartment')))].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setConfigFilter(tab)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                                            configFilter === tab
                                                ? 'bg-white text-slate-900 shadow-sm'
                                                : 'text-slate-600 hover:text-slate-900'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Configuration Cards Grid */}
                        <div className="space-y-4">
                            {filteredConfigs.map((conf, i) => {
                                const allInclusive = calculateAllInclusive(conf);
                                const stampDuty = conf.basePrice * ((conf.stampDutyRate || 7) / 100);
                                const gst = conf.basePrice * ((conf.gstRate || 5) / 100);

                                return (
                                    <div 
                                        key={conf.id || i}
                                        className="bg-white rounded-3xl border border-slate-200/90 hover:border-brand-300 shadow-sm hover:shadow-md transition-all p-5 sm:p-6"
                                    >
                                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                            {/* Left: Unit Details */}
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 flex-wrap mb-2">
                                                    <span className="text-lg sm:text-xl font-black text-slate-900">
                                                        {conf.name}
                                                    </span>
                                                    <span className="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                                                        RERA Carpet: {conf.carpetArea} sq.ft
                                                    </span>
                                                    {conf.balconyArea > 0 && (
                                                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                                                            + {conf.balconyArea} sq.ft Balcony
                                                        </span>
                                                    )}
                                                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                                                        {conf.bathrooms} Baths
                                                    </span>
                                                </div>

                                                <p className="text-xs text-slate-500 mb-4">
                                                    Optimal natural lighting, cross-ventilation, and zero space wastage. Verified under MahaRERA {project.reraId}.
                                                </p>

                                                {/* Price Breakdown Matrix */}
                                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                                                    <div>
                                                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Base Price</span>
                                                        <span className="font-extrabold text-slate-900">{formatLakhsCr(conf.basePrice)}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Rate / Sq.ft</span>
                                                        <span className="font-bold text-slate-700">₹{conf.pricePerSqft?.toLocaleString('en-IN') || Math.round(conf.basePrice / conf.carpetArea).toLocaleString('en-IN')}/sq.ft</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] text-slate-400 uppercase font-bold block">Govt Taxes (SD+GST)</span>
                                                        <span className="font-medium text-slate-600">₹{Math.round(stampDuty + gst).toLocaleString('en-IN')}</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-[10px] text-emerald-600 uppercase font-black block">All-Inclusive Est.</span>
                                                        <span className="font-black text-emerald-700 text-sm">{formatLakhsCr(allInclusive)}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Right: Actions & Floor Plan Thumbnail */}
                                            <div className="flex sm:flex-row lg:flex-col items-center sm:justify-end gap-3 shrink-0">
                                                {conf.layoutImage && (
                                                    <button
                                                        onClick={() => {
                                                            setZoomLevel(1);
                                                            setLightboxImage({
                                                                url: conf.layoutImage!,
                                                                title: `${conf.name} - Floor Plan`,
                                                                subtitle: `${project.title} | ${conf.carpetArea} sq.ft RERA Carpet Area`,
                                                                specs: [
                                                                    { label: 'Unit Type', value: conf.name },
                                                                    { label: 'Carpet Area', value: `${conf.carpetArea} sq.ft` },
                                                                    { label: 'Balcony', value: `${conf.balconyArea} sq.ft` },
                                                                    { label: 'Base Value', value: formatLakhsCr(conf.basePrice) }
                                                                ],
                                                                type: 'floor-plan'
                                                            });
                                                        }}
                                                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 hover:border-brand-500 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                                                    >
                                                        <Maximize2 className="w-3.5 h-3.5" />
                                                        <span>View Floor Plan</span>
                                                    </button>
                                                )}

                                                <button
                                                    onClick={() => openWhatsApp(`Hi PROPSMART, please send me the official all-inclusive cost sheet and floor plans for ${conf.name} in ${project.title}.`)}
                                                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
                                                >
                                                    <Phone className="w-3.5 h-3.5" />
                                                    <span>Get Cost Sheet</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Infographic Amenities Hub with Relevant Custom Icons */}
                    <AmenitiesInfographic
                        features={project.features || []}
                        projectTitle={project.title}
                    />

                    {/* Infographic Technical Specifications & Material Standards */}
                    <SpecificationsInfographic
                        specs={project.specs || []}
                        projectTitle={project.title}
                        reraId={project.reraId}
                    />

                    {/* Spatial Transit & Commute Infographic */}
                    <div id="connectivity" className="scroll-mt-40">
                        <TransitConnectivity
                            location={project.location}
                        />
                    </div>

                    {/* Location */}
                    <section id="location" className="scroll-mt-40">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">Location</h2>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                            <div className="flex items-center gap-2 text-slate-800 mb-2">
                                <MapPin className="w-5 h-5 text-brand-600" />
                                <span className="font-sans font-bold text-lg">{project.location}, Pune</span>
                            </div>

                            {/* Phase 5: Price Trend Graph */}
                            {locality && locality.avgPriceSqft ? (
                                <div className="mb-6">
                                    <PriceTrendChart
                                        locationName={locality.name}
                                        currentPrice={locality.avgPriceSqft}
                                        appreciationRate={locality.appreciation_rate}
                                    />
                                </div>
                            ) : null}

                            {/* LIVE GOOGLE MAP */}
                            <div className="w-full h-80 bg-slate-100 rounded-xl overflow-hidden border border-slate-200 relative group">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    scrolling="no"
                                    marginHeight={0}
                                    marginWidth={0}
                                    src={"https://maps.google.com/maps?q=" + encodeURIComponent(project.title + ' ' + project.location + ' Pune') + "&t=&z=14&ie=UTF8&iwloc=&output=embed"}
                                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                            <p className="text-slate-600">
                                Located strategically in {project.location}, offering excellent connectivity to IT hubs, schools, and hospitals.
                            </p>
                        </div>
                    </section>

                    {/* Financial Yield & Capital Appreciation Infographic */}
                    <div id="investment" className="scroll-mt-40">
                        <InvestmentMetrics
                            location={project.location}
                            priceRange={project.priceRange}
                            pricePerSqft={project.pricePerSqft}
                        />
                    </div>

                    {/* Builder Info - Main Section (Improved Fallback) */}
                    <section id="builder" className="scroll-mt-32">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6">About Developer</h2>
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <img
                                    src={getOptimizedImageUrl(builder?.logo || '/images/builders/godrej.svg', 200)}
                                    alt={builder?.name || 'Developer'}
                                    onError={(e) => {
                                        e.currentTarget.src = '/images/builders/godrej.svg';
                                    }}
                                    className="w-32 h-32 object-contain p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                                />
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">{builder?.name || project.builderId || 'Reputed Developer'}</h3>
                                        <p className="text-slate-500 text-sm">Established {builder?.establishedYear || '2000'}</p>
                                    </div>
                                    <p className="text-slate-600 leading-relaxed">
                                        {builder?.description || "A leading real estate developer known for quality construction and timely delivery of projects like " + project.title + "."}
                                    </p>
                                    <div className="flex gap-6 mt-4">
                                        <div>
                                            <p className="text-2xl font-bold text-blue-600">{builder?.totalProjects || '10+'}</p>
                                            <p className="text-xs text-slate-500 uppercase font-semibold">Total Projects</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold text-green-600">{builder?.ongoingProjects || '2+'}</p>
                                            <p className="text-xs text-slate-500 uppercase font-bold">Ongoing</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-4 mt-6">
                                        <button
                                            onClick={() => openLeadForm('Site Visit')}
                                            className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 md:py-4 px-6 rounded-xl shadow-lg shadow-brand-200 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            Book Site Visit
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        {project.brochureUrl ? (
                                            <a
                                                href={project.brochureUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white hover:bg-gray-50 text-slate-800 font-bold py-3 md:py-4 px-6 rounded-xl border-2 border-slate-200 shadow-sm transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Download className="w-5 h-5 text-emerald-600" />
                                                Download Official Brochure (PDF)
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => openLeadForm('Brochure')}
                                                className="bg-white hover:bg-gray-50 text-slate-700 font-bold py-3 md:py-4 px-6 rounded-xl border-2 border-slate-200 shadow-sm transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Download className="w-5 h-5" />
                                                Download Brochure
                                            </button>
                                        )}
                                    </div>

                                    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            <span>Instant Confirmation</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            <span>Free Cab Pickup</span>
                                        </div>
                                    </div>

                                    <div className="mt-4 p-4 bg-brand-50 rounded-xl border border-brand-100 flex items-center justify-between cursor-pointer hover:bg-brand-100 transition-colors" onClick={() => openLeadForm('Offer')}>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white p-2 rounded-full shadow-sm text-brand-600">
                                                <Tag className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-brand-900 text-sm">Limited Time Offer</p>
                                                <p className="text-xs text-brand-700">Get ₹50,000 off on booking today.</p>
                                            </div>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-brand-600" />
                                    </div>
                                    {builder && (
                                        <Link to={"/builder/" + builder.slug} className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline mt-2">
                                            View Builder Profile <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Google Real Estate Rich Result FAQs */}
                    <section id="faqs" className="scroll-mt-40">
                        <div className="mb-6">
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
                                Google Rich Results • MahaRERA Q&A
                            </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-slate-500 text-sm mt-1">
                                Verified answers regarding {project.title}, pricing, approvals, and 0% brokerage direct builder allocation.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {(project.faqs && project.faqs.length > 0 ? project.faqs : [
                                {
                                    question: `Where is ${project.title} located?`,
                                    answer: `${project.title} is located in ${project.location}, Pune, offering prime connectivity to IT corridors and transit nodes.`
                                },
                                {
                                    question: `What is the price range of ${project.title}?`,
                                    answer: `Prices at ${project.title} start from ${project.exactPrice || project.priceRange} with 100% Zero Brokerage through authorized developer sales partner allocation.`
                                },
                                {
                                    question: `Which configurations are available at ${project.title}?`,
                                    answer: `${project.title} offers ${(project.configurations || []).join(', ')} luxury apartments with sanctioned RERA carpet layouts.`
                                },
                                {
                                    question: `What is the MahaRERA registration number of ${project.title}?`,
                                    answer: `The official MahaRERA registration number of ${project.title} is ${project.reraId || 'P52100050939'}. PROPSMART REALTY is an authorized developer sales partner with agent registration ${PROPSMART_RERA.number}.`
                                },
                                {
                                    question: `When is the possession date for ${project.title}?`,
                                    answer: `Possession for ${project.title} is scheduled for ${project.possessionDate || 'As per RERA timeline'}.`
                                },
                                {
                                    question: `Is there any brokerage or commission fee for buying in ${project.title}?`,
                                    answer: `Zero Brokerage. Buyers pay 0% commission. You purchase directly with builder inventory via PROPSMART REALTY authorized partnership.`
                                }
                            ]).map((faq, idx) => (
                                <details 
                                    key={idx} 
                                    className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs open:shadow-sm open:border-brand-300 transition-all overflow-hidden"
                                >
                                    <summary className="p-4 sm:p-5 flex items-center justify-between cursor-pointer list-none select-none hover:bg-slate-50/50 transition-colors">
                                        <span className="font-bold text-slate-900 text-sm sm:text-base pr-4 flex items-center gap-2.5">
                                            <span className="w-6 h-6 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center font-mono text-xs font-black shrink-0">
                                                {idx + 1}
                                            </span>
                                            {faq.question}
                                        </span>
                                        <span className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-brand-50 group-open:rotate-180 text-slate-500 group-open:text-brand-600 flex items-center justify-center text-xs font-bold transition-transform shrink-0">
                                            ▼
                                        </span>
                                    </summary>
                                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-slate-50/40">
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* Similar Projects Section - Enhanced */}
                    <section className="pt-8 border-t border-gray-200">
                        <h2 className="text-2xl font-bold text-slate-800 mb-8">You Might Also Like</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {(() => {
                                // Smart Recommendation Logic
                                let similar = projects.filter(p => p.location === project.location && p.id !== project.id);

                                // Verification: If less than 3, fetch from same builder
                                if (similar.length < 3) {
                                    const builderProjects = projects.filter(p => p.builderId === project.builderId && p.id !== project.id && !similar.includes(p));
                                    similar = [...similar, ...builderProjects];
                                }

                                // If still less than 3, fetch popular/new ones
                                if (similar.length < 3) {
                                    const otherProjects = projects.filter(p => p.status === 'New Launch' && p.id !== project.id && !similar.includes(p));
                                    similar = [...similar, ...otherProjects];
                                }

                                return similar.slice(0, 3).map(p => (
                                    <Link key={p.id} to={"/project/" + p.slug} className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={p.image}
                                                alt={p.title}
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.src = '/images/placeholder-property.svg';
                                                }}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                                                {p.status}
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                                                <p className="font-bold text-lg truncate">{p.priceRange}</p>
                                            </div>
                                        </div>
                                        <div className="p-4 flex flex-col flex-1">
                                            <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-1">{p.title}</h3>
                                            <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
                                                <MapPin className="w-3 h-3" />
                                                {p.location}
                                            </div>
                                            <div className="mt-auto flex items-center gap-2 text-xs font-medium text-slate-600">
                                                <span className="bg-slate-100 px-2 py-1 rounded">{p.type}</span>
                                                <span className="bg-slate-100 px-2 py-1 rounded">{(p.configurations && p.configurations.length > 0) ? p.configurations[0] : '2 BHK'}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ));
                            })()}
                        </div>
                    </section>
                </div>

                {/* Sidebar Sticky */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">

                        {/* Highlights Card */}
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-400" /> Why this Project?
                                </h3>
                                <ul className="space-y-3">
                                    {(project.highlights || [
                                        "Premium " + project.type + " in " + project.location,
                                        "Starting at " + project.priceRange,
                                        "Excellent Connectivity"
                                    ]).map((point, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-slate-200">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Lead Form Card - Buy Directly with Builder */}
                        <div className="bg-white rounded-2xl shadow-xl border border-emerald-100 overflow-hidden ring-1 ring-emerald-500/20">
                            <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 p-4 text-white text-center">
                                <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full mb-1.5 border border-white/30 text-white">
                                    ✨ 100% Brokerage Free
                                </div>
                                <p className="font-black text-lg">Buy Directly With Builder</p>
                                <p className="text-emerald-100 text-xs">Direct Developer Pricing • Zero Commission • Official Partner</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                                    value={leadName}
                                    onChange={(e) => setLeadName(e.target.value)}
                                />
                                <input
                                    type="tel"
                                    placeholder="+91 Phone Number"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                                    value={leadMobile}
                                    onChange={(e) => setLeadMobile(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm"
                                    value={leadEmail}
                                    onChange={(e) => setLeadEmail(e.target.value)}
                                />

                                <button
                                    onClick={() => {
                                        const text = "Hi, I want to connect directly with the developer sales team for " + project.title + " (0% Brokerage).\n\nName: " + leadName + "\nMobile: " + leadMobile;
                                        openWhatsApp(text);
                                    }}
                                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
                                >
                                    Enquire Directly with Builder <img src="/images/whatsapp.svg" className="w-5 h-5 filter invert brightness-0" alt="WA" />
                                </button>
                                <a
                                    href="tel:+917744009295"
                                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm"
                                >
                                    Call Developer Sales Desk <Phone className="w-4 h-4" />
                                </a>

                                {/* Value Proposition Highlights */}
                                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-600">
                                    <div className="flex items-center gap-1.5 font-semibold text-emerald-800">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                        <span>Zero Brokerage Guaranteed for Homebuyers</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                        <span>Direct Developer Pricing & Sanctioned Inventory</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 font-semibold text-slate-700">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                        <span>Authorized MahaRERA Partner: {PROPSMART_RERA.number}</span>
                                    </div>
                                </div>
                            </div >
                            <div className="bg-slate-50 p-3 text-center text-[10px] text-slate-500 border-t border-slate-100">
                                Direct Developer Allocation • No Middlemen • 100% Transparent
                            </div>
                        </div >

                        {/* propsmart MahaRERA Authorized Partner Card */}
                        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-md">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                                    Authorized Sales Partner
                                </span>
                                <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                                    0% Brokerage
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-slate-400 block">PROPSMART REALTY MahaRERA No.</span>
                                    <span className="text-lg font-black text-white tracking-wide">A031262401295</span>
                                </div>
                                <a
                                    href="https://maharera.maharashtra.gov.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 underline"
                                >
                                    Verify <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 leading-relaxed border-t border-slate-800 pt-2">
                                Official MahaRERA accredited sales advisory. Direct developer allocation with complete legal compliance.
                            </p>
                        </div>

                        {/* RERA VERIFICATION BADGE (Phase 2) */}
                        {
                            project.verificationStatus === 'Verified' && (
                                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="font-bold text-green-800 text-sm">RERA Verified Property</h4>
                                        <p className="text-xs text-green-700 mt-1">
                                            This project's RERA ID ({project.reraId}) has been verified against official records.
                                        </p>
                                        {project.verificationSource && project.verificationSource.startsWith('http') ? (
                                            <a href={project.verificationSource} target="_blank" rel="noreferrer" className="text-xs font-semibold text-green-800 underline mt-2 inline-flex items-center gap-1 hover:text-green-900">
                                                <span>View Official Certificate</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        ) : (
                                            <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-green-800 underline mt-2 inline-flex items-center gap-1 hover:text-green-900">
                                                <span>Verify MahaRERA Authorized Partner ({PROPSMART_RERA.number})</span>
                                                <ExternalLink className="w-3 h-3" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )
                        }

                        {/* Real-Time Pricing Engine (Phase 2) */}
                        {
                            project.advancedConfigurations && project.advancedConfigurations.length > 0 ? (
                                <PricingCalculator configurations={project.advancedConfigurations} />
                            ) : (
                                /* Fallback to simple EMI Calculator if no advanced data */
                                <EMICalculator priceRange={project.priceRange} />
                            )
                        }

                        {/* Builder Mini Card */}
                        {
                            builder && (
                                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                                    <img 
                                        src={builder.logo || '/images/builders/godrej.svg'} 
                                        alt={builder.name} 
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/builders/godrej.svg';
                                        }}
                                        className="w-16 h-16 object-contain p-2 bg-white rounded-lg border border-gray-100" 
                                    />
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold">Developer</p>
                                        <h4 className="font-bold text-slate-900">{builder.name}</h4>
                                        <Link to={"/builder/" + builder.slug} className="text-blue-600 text-sm font-semibold hover:underline">View Profile</Link>
                                    </div>
                                </div>
                            )
                        }

                    </div >
                </div >

                <LeadForm
                    isOpen={showLeadForm}
                    onClose={() => setShowLeadForm(false)}
                    type={leadFormType}
                    projectTitle={project.title}
                    projectId={project.id}
                />
            </div >

            {/* Fullscreen Master Layout & Floor Plan Lightbox Modal */}
            {lightboxImage && (
                <div 
                    className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg flex flex-col justify-between p-4 sm:p-6 overflow-hidden animate-in fade-in duration-200"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setLightboxImage(null);
                    }}
                >
                    {/* Top Bar */}
                    <div className="flex items-center justify-between gap-4 z-10 bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl">
                        <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-brand-500/20 text-brand-400 border border-brand-500/30">
                                    {lightboxImage.type === 'master-layout' ? 'Master Township Plan' : 'RERA Sanctioned Floor Plan'}
                                </span>
                                <span className="text-xs text-slate-400 font-mono">MahaRERA: {project.reraId}</span>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white truncate mt-1">
                                {lightboxImage.title}
                            </h3>
                            {lightboxImage.subtitle && (
                                <p className="text-xs text-slate-400 truncate hidden sm:block">
                                    {lightboxImage.subtitle}
                                </p>
                            )}
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            {/* Zoom controls */}
                            <div className="hidden sm:flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl border border-slate-700">
                                <button
                                    onClick={() => setZoomLevel(prev => Math.max(0.5, prev - 0.25))}
                                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                    title="Zoom Out"
                                >
                                    <ZoomOut className="w-4 h-4" />
                                </button>
                                <span className="text-xs font-mono font-bold text-slate-200 px-2 min-w-[3rem] text-center">
                                    {Math.round(zoomLevel * 100)}%
                                </span>
                                <button
                                    onClick={() => setZoomLevel(prev => Math.min(3, prev + 0.25))}
                                    className="p-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                    title="Zoom In"
                                >
                                    <ZoomIn className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setZoomLevel(1)}
                                    className="p-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                                    title="Reset Zoom"
                                >
                                    <RotateCcw className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Download Action */}
                            <a
                                href={lightboxImage.url}
                                download={`${project.slug}-${lightboxImage.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors border border-slate-700"
                                title="Download Image"
                            >
                                <Download className="w-4 h-4" />
                            </a>

                            {/* Close */}
                            <button
                                onClick={() => setLightboxImage(null)}
                                className="p-2.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white transition-colors"
                                title="Close"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Image Viewer Canvas */}
                    <div className="flex-1 flex items-center justify-center overflow-auto p-4 my-2 relative">
                        <div 
                            className="transition-transform duration-200 ease-out flex items-center justify-center max-w-full max-h-full cursor-grab active:cursor-grabbing"
                            style={{ transform: `scale(${zoomLevel})` }}
                        >
                            <img
                                src={lightboxImage.url}
                                alt={lightboxImage.title}
                                onError={(e) => {
                                    e.currentTarget.src = '/images/placeholder-property.svg';
                                }}
                                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl bg-white/5 border border-white/10"
                            />
                        </div>
                    </div>

                    {/* Bottom Specs and Actions */}
                    <div className="z-10 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                        {/* Specs Chips */}
                        {lightboxImage.specs && lightboxImage.specs.length > 0 ? (
                            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
                                {lightboxImage.specs.map((spec, idx) => (
                                    <div key={idx} className="shrink-0 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                                        <span className="text-slate-400 block text-[10px] uppercase font-bold">{spec.label}</span>
                                        <span className="text-white font-extrabold">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-xs text-slate-400">
                                Official Sanctioned Architectural Drawing • PROPSMART Direct Verification
                            </div>
                        )}

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                            <button
                                onClick={() => openWhatsApp(`Hi PROPSMART, please share the official high-resolution PDF and cost sheet for ${lightboxImage.title} at ${project.title} (MahaRERA: ${project.reraId}).`)}
                                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Get High-Res PDF via WhatsApp</span>
                            </button>
                            <button
                                onClick={() => {
                                    setLightboxImage(null);
                                    openLeadForm('Site Visit');
                                }}
                                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
                            >
                                <Calendar className="w-4 h-4" />
                                <span>Book Site Visit</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div >
    );
};

export default ProjectDetails;
