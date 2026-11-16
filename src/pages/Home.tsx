import React from 'react';
import { useData } from '../context/DataContext';
import PortalNavbar from '../components/Portal/Navbar';
import Footer from '../components/Portal/Footer';
import SEO from '../components/SEO';
import { ErrorState } from '../components/UI/LoadingSkeleton';

// New Components
import HeroSearch from '../components/Portal/Home/HeroSearch';
import LocalityStrip from '../components/Portal/Home/LocalityStrip';
import WhyBuyDirect from '../components/Portal/Home/WhyBuyDirect';
import CityHubSection from '../components/Portal/Home/CityHubSection';
import SpotlightSection from '../components/Portal/Home/SpotlightSection';
import ProjectRail from '../components/Portal/Home/ProjectRail';
import BuilderSpotlight from '../components/Portal/Home/BuilderSpotlight';
import RERABadge from '../components/Portal/RERABadge';
import WaterAmbientBackground from '../components/Portal/WaterAmbientBackground';

const Home = () => {
    const { projects, builders, isLoading, error, refreshData } = useData();

    // Group projects for rails
    const newLaunches = projects.filter(p => p.status === 'New Launch');
    const readyToMove = projects.filter(p => p.status === 'Ready to Move');
    const luxuryProjects = projects.filter(p => p.priceRange.includes('Cr'));

    // City-Wise and Developer Specific Collections
    const vtpProjects = projects.filter(p => p.builderId === 'b-vtp');
    const mumbaiProjects = projects.filter(p => p.city === 'Mumbai');
    const secondHomeProjects = projects.filter(p => p.city === 'Lonavala' || p.city === 'Alibaug');

    // Mega Townships & Iconic Masterplanned Enclaves (Life Republic, Belmondo, Blue Waters, etc.)
    const townshipProjects = projects.filter(p =>
        p.title.toLowerCase().includes('township') ||
        p.description.toLowerCase().includes('township') ||
        p.description.toLowerCase().includes('acre') ||
        p.slug.includes('belmondo') ||
        p.slug.includes('life-republic') ||
        p.slug.includes('blue-waters') ||
        p.slug.includes('panchshil-towers') ||
        p.slug.includes('sensorium') ||
        p.slug.includes('river-royale')
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
        <div className="min-h-screen bg-slate-50/70 font-sans selection:bg-sky-500 selection:text-white relative">
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

                {/* 1. Hero Search Section */}
                <HeroSearch />

                {/* 2. City-Wise Verified Portfolios (Pune, Mumbai, Lonavala, Alibaug) */}
                <CityHubSection projects={projects} />

                {/* 3. Popular Localities Strip */}
                <LocalityStrip />

                {/* 4. Why Buy Directly with Builder Section (Core Brand Value Proposition) */}
                <WhyBuyDirect />

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
