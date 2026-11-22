import React from 'react';
import { useData } from '../context/DataContext';
import { parsePriceRangeInLakhs } from '../utils/pricingUtils';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { ErrorState } from '../components/UI/LoadingSkeleton';

// Above-the-fold Critical Components
import HeroSearch from '../components/Portal/Home/HeroSearch';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';

// Below-the-fold Code-Split Components for Sub-1.5s Mobile LCP & Fast Execution
const LocalityStrip = React.lazy(() => import('../components/Portal/Home/LocalityStrip'));
const WhyBuyDirect = React.lazy(() => import('../components/Portal/Home/WhyBuyDirect'));
const RERABadge = React.lazy(() => import('../components/Portal/RERABadge'));
const CityHubSection = React.lazy(() => import('../components/Portal/Home/CityHubSection'));
const SpotlightSection = React.lazy(() => import('../components/Portal/Home/SpotlightSection'));
const ProjectRail = React.lazy(() => import('../components/Portal/Home/ProjectRail'));
const BuilderSpotlight = React.lazy(() => import('../components/Portal/Home/BuilderSpotlight'));

const Home = () => {
    const { projects, builders, isLoading, error, refreshData } = useData();

    // Group projects for rails with defensive null-safety
    // Mandated New Launch priority sequence:
    // 1. Life Republic Canvas, 2. Life Republic Echoes, 3. Hiranandani Hinjewadi, 4. Godrej Elanor, 5. Shapoorji Vyomora
    const newLaunches = React.useMemo(() => {
        const raw = (projects || []).filter(p => p?.status === 'New Launch');

        const prioritySlugs = [
            'kolte-patil-life-republic-canvas',
            'kolte-patil-life-republic-echoes',
            'hiranandani-krisala-township',
            'godrej-elanor',
            'shapoorji-vyomora-hinjewadi'
        ];

        const prioritized: typeof raw = [];
        for (const slug of prioritySlugs) {
            const match = (projects || []).find(p => 
                p?.slug === slug || 
                p?.id === slug || 
                p?.id === `p-${slug}` ||
                (slug === 'hiranandani-krisala-township' && (p?.slug?.includes('hiranandani-krisala') || p?.slug?.includes('hiranandani-hinjewadi')))
            );
            if (match && !prioritized.some(p => p.id === match.id)) {
                prioritized.push(match);
            }
        }

        const priorityIdSet = new Set(prioritized.map(p => p.id));
        const remaining = raw.filter(p => !priorityIdSet.has(p.id));

        return [...prioritized, ...remaining];
    }, [projects]);

    const readyToMove = (projects || []).filter(p => p?.status === 'Ready to Move');
    const luxuryProjects = (projects || []).filter(p => {
        if (!p) return false;
        const range = parsePriceRangeInLakhs(p.exactPrice || p.priceRange);
        return range ? range.maxLakhs >= 150 : Boolean(p.priceRange && p.priceRange.includes('Cr'));
    });

    // City-Wise and Developer Specific Collections
    const vtpProjects = (projects || []).filter(p => p?.builderId === 'b-vtp');
    const mumbaiProjects = (projects || []).filter(p => p?.city === 'Mumbai');
    const secondHomeProjects = (projects || []).filter(p => p?.city === 'Lonavala' || p?.city === 'Alibaug');

    // Mega Townships & Iconic Masterplanned Enclaves (Life Republic, Belmondo, Blue Waters, Nanded City, etc.)
    const townshipProjects = (projects || []).filter(p =>
        Boolean(p?.title && p.title.toLowerCase().includes('township')) ||
        Boolean(p?.description && p.description.toLowerCase().includes('township')) ||
        Boolean(p?.description && p.description.toLowerCase().includes('acre')) ||
        Boolean(p?.slug && p.slug.includes('belmondo')) ||
        Boolean(p?.slug && p.slug.includes('life-republic')) ||
        Boolean(p?.slug && p.slug.includes('blue-waters')) ||
        Boolean(p?.slug && p.slug.includes('panchshil-towers')) ||
        Boolean(p?.slug && p.slug.includes('sensorium')) ||
        Boolean(p?.slug && p.slug.includes('river-royale')) ||
        Boolean(p?.slug && p.slug.includes('nanded-city'))
    );

    const homeFaqJsonLd = React.useMemo(() => ({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How does 100% Zero Brokerage work on PROPSMART REALTY?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "PROPSMART REALTY holds official authorized direct sales mandates with top real estate developers across Pune, Mumbai, and Maharashtra. As direct developer sales partners, homebuyers pay 0% brokerage or commission while receiving direct builder pricing and exclusive launch offers."
                }
            },
            {
                "@type": "Question",
                "name": "Is PROPSMART REALTY MahaRERA registered?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, PROPSMART REALTY is fully registered and compliant with MahaRERA under Agent Registration Number A031262401295. All projects and developer partnerships listed on the portal are verified against official MahaRERA standards."
                }
            },
            {
                "@type": "Question",
                "name": "Which top builders and developers are partnered on the portal?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The platform features 300+ accredited developers including Godrej Properties, Lodha Group, VTP Realty, Kolte Patil, Rohan Builders, Paranjape Schemes, Gera Developments, Kalpataru, Shapoorji Pallonji, Pride Group, and Amanora."
                }
            },
            {
                "@type": "Question",
                "name": "Can I buy properties in Mumbai and other Maharashtra cities?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, PROPSMART REALTY showcases luxury apartments, high-rises, and villas across Pune, Mumbai, Thane, Navi Mumbai, Lonavala, and Alibaug with dedicated micro-market advisory and direct builder pricing."
                }
            }
        ]
    }), []);

    if (error) {
        return (
            <div className="min-h-screen bg-slate-50 flex flex-col">
                <PortalNavbar />
                <div className="flex-1 flex items-center justify-center">
                    <ErrorState message={error.message || 'An error occurred'} onRetry={refreshData} />
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50/70 font-sans selection:bg-sky-500 selection:text-white relative pb-20 md:pb-0">
            <WaterAmbientBackground variant="vibrant" />
            <SEO
                title="Propsmart Realty | 100% Brokerage Free Flats in Pune & Mumbai"
                description="Buy directly from top Pune & Mumbai builders with 0% brokerage. Verified MahaRERA projects (A031262401295), floor plans, direct pricing & site visits."
                canonical="https://propsmart.co.in/"
                jsonLd={homeFaqJsonLd}
            />

            <PortalNavbar />

            {/* Main Content Area */}
            <main>

                {/* 1. Hero Search Section (Critical Immediate Paint) */}
                <HeroSearch />

                {/* Below-the-fold Rails & Spotlights (Deferred for Fast Mobile Execution) */}
                <React.Suspense fallback={<div className="min-h-[120px]" />}>
                    {/* 2. Popular Localities Strip */}
                    <LocalityStrip />

                    {/* 3. Why Buy Directly with Builder Section (Core Brand Value Proposition) */}
                    <WhyBuyDirect />

                    {/* 4. City-Wise Verified Portfolios (Pune, Mumbai, Lonavala, Alibaug) */}
                    <CityHubSection projects={projects} />

                    {/* 5. Spotlight / Featured Section */}
                    <SpotlightSection projects={projects} />

                    {/* 5b. Integrated Mega Townships & Landmark High-Rises Rail */}
                    {townshipProjects.length > 0 && (
                        <ProjectRail
                            title="Integrated Mega Townships & Landmark High-Rises"
                            subtitle="Self-sustained 40 to 400+ acre township ecosystems with golf courses, premier schools & retail high-streets"
                            projects={townshipProjects}
                            viewAllLink="/search?q=township"
                            bgColor="bg-amber-50/40"
                        />
                    )}

                    {/* 6. VTP Realty Township Flagships Rail */}
                    {vtpProjects.length > 0 && (
                        <ProjectRail
                            title="VTP Realty Township Flagships"
                            subtitle="Pioneering MLA philosophy across Hinjewadi, Kharadi, Mahalunge & Baner"
                            projects={vtpProjects}
                            viewAllLink="/builder/vtp-realty"
                            bgColor="bg-slate-50"
                        />
                    )}

                    {/* 7. Project Rails: New Launches */}
                    <ProjectRail
                        title="New Launches"
                        subtitle="Be the first to book the best inventories"
                        projects={newLaunches}
                        viewAllLink="/search?status=New+Launch"
                    />

                    {/* 8. Mumbai Luxury Landmarks Rail */}
                    {mumbaiProjects.length > 0 && (
                        <ProjectRail
                            title="Mumbai Luxury Landmarks"
                            subtitle="Sea-facing and ultra-luxury high-rise towers across South Mumbai & MMR"
                            projects={mumbaiProjects}
                            viewAllLink="/search?city=Mumbai"
                            bgColor="bg-indigo-50/40"
                        />
                    )}

                    {/* 9. Lonavala & Alibaug Second-Home Villa Retreats */}
                    {secondHomeProjects.length > 0 && (
                        <ProjectRail
                            title="Lonavala & Alibaug Second-Home Villas"
                            subtitle="Scenic mountain valley estates and coastal beach retreats"
                            projects={secondHomeProjects}
                            viewAllLink="/search?city=Lonavala"
                            bgColor="bg-emerald-50/40"
                        />
                    )}

                    {/* 10. Ready to Move In */}
                    <ProjectRail
                        title="Ready to Move In"
                        subtitle="Move into your dream home today with zero waiting period"
                        projects={readyToMove}
                        viewAllLink="/search?status=Ready+to+Move"
                    />

                    {/* 11. Builder Spotlight */}
                    <BuilderSpotlight builders={builders} />

                    {/* 12. Luxury Collection Rail */}
                    <ProjectRail
                        title="Luxury Collections"
                        subtitle="Premium living for the discerning few"
                        projects={luxuryProjects}
                        viewAllLink="/search?price=luxury"
                        bgColor="bg-blue-50"
                    />
                </React.Suspense>

                {/* 7. Propsmart MahaRERA Compliance & Trust Banner */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <RERABadge variant="banner" />
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Home;
