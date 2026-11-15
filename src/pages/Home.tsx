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
import SpotlightSection from '../components/Portal/Home/SpotlightSection';
import ProjectRail from '../components/Portal/Home/ProjectRail';
import BuilderSpotlight from '../components/Portal/Home/BuilderSpotlight';
import RERABadge from '../components/Portal/RERABadge';

const Home = () => {
    const { projects, builders, isLoading, error, refreshData } = useData();

    // Group projects for rails
    const newLaunches = projects.filter(p => p.status === 'New Launch');
    const readyToMove = projects.filter(p => p.status === 'Ready to Move');
    const luxuryProjects = projects.filter(p => p.priceRange.includes('Cr'));

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
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-500 selection:text-white">
            <SEO
                title="PROPSMART REALTY - 100% Brokerage Free | Buy Directly with Builder in Pune"
                description="Buy directly from top builders in Pune with 100% zero brokerage. PROPSMART REALTY is your trusted MahaRERA registered direct developer sales partner platform."
            />

            <PortalNavbar />

            {/* Main Content Area */}
            <main>

                {/* 1. Hero Search Section */}
                <HeroSearch />

                {/* 2. Popular Localities Strip */}
                <LocalityStrip />

                {/* 3. Why Buy Directly with Builder Section (Core Brand Value Proposition) */}
                <WhyBuyDirect />

                {/* 4. Spotlight / Featured Section */}
                <SpotlightSection projects={projects} />

                {/* 4. Project Rails */}
                <ProjectRail
                    title="New Launches"
                    subtitle="Be the first to book the best inventories"
                    projects={newLaunches}
                    bgColor="bg-slate-50"
                />

                <ProjectRail
                    title="Ready to Move In"
                    subtitle="Move into your dream home today"
                    projects={readyToMove}
                />

                {/* 5. Builder Spotlight */}
                <BuilderSpotlight builders={builders} />

                {/* 6. Luxury Collection Rail */}
                <ProjectRail
                    title="Luxury Collections"
                    subtitle="Premium living for the discerning few"
                    projects={luxuryProjects}
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
