import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Loader2 } from 'lucide-react';
import { DataProvider } from './context/DataContext';
import ScrollToTop from './components/ScrollToTop';
import CompareFloatingBar from './components/Portal/CompareFloatingBar';

// Lazy Load Pages
const Home = React.lazy(() => import('./pages/Home'));
const SearchResults = React.lazy(() => import('./pages/SearchResults'));
const ProjectDetails = React.lazy(() => import('./pages/ProjectDetails'));
const BuilderDetails = React.lazy(() => import('./pages/BuilderDetails'));
const Directory = React.lazy(() => import('./pages/Directory'));
const PostProperty = React.lazy(() => import('./pages/PostProperty'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Disclaimer = React.lazy(() => import('./pages/Disclaimer'));

// Admin Pages
const AdminLogin = React.lazy(() => import('./pages/admin/Login'));
const AdminDashboard = React.lazy(() => import('./pages/admin/Dashboard'));
const AdminProjects = React.lazy(() => import('./pages/admin/Projects'));
const AdminProjectForm = React.lazy(() => import('./pages/admin/ProjectForm'));
const AdminBuilders = React.lazy(() => import('./pages/admin/Builders'));
const AdminBuilderForm = React.lazy(() => import('./pages/admin/BuilderForm'));
const AdminBanners = React.lazy(() => import('./pages/admin/Banners'));
const AdminLocalities = React.lazy(() => import('./pages/admin/Localities'));
const AdminLeads = React.lazy(() => import('./pages/admin/Leads'));
const AdminSeedData = React.lazy(() => import('./pages/admin/SeedData'));
const AdminMedia = React.lazy(() => import('./pages/admin/MediaGallery'));
const AdminRERAIntelligence = React.lazy(() => import('./pages/admin/RERAIntelligence'));
const CompareProjects = React.lazy(() => import('./pages/CompareProjects'));
const MahaRERAVerification = React.lazy(() => import('./pages/MahaRERAVerification'));

const LoadingFallback = () => (
    <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
    </div>
);

// Protected Route Component
import ProtectedRoute from './components/Admin/ProtectedRoute';
import GlobalErrorBoundary from './components/Error/GlobalErrorBoundary';
import NotFound from './pages/NotFound';


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

import { Toaster } from 'react-hot-toast';

// Dynamic Locality & Programmatic SEO Route & 404 Fallback Handler
const CITY_SLUG_MAP: Record<string, string> = {
    'pune': 'Pune',
    'mumbai': 'Mumbai',
    'thane': 'Thane',
    'navi-mumbai': 'Navi Mumbai',
    'lonavala': 'Lonavala',
    'khandala': 'Lonavala',
    'alibaug': 'Alibaug',
    'maharashtra': 'All'
};

const resolveTarget = (rawSlug: string) => {
    const slug = rawSlug.toLowerCase().trim();
    if (CITY_SLUG_MAP[slug]) {
        return { city: CITY_SLUG_MAP[slug], locationSlug: undefined };
    }
    return { city: undefined, locationSlug: slug };
};

const DynamicLocalityOrNotFound = () => {
    const location = useLocation();
    const pathname = location.pathname.toLowerCase().replace(/\/$/, '');

    // 1. City & Regional Exact Match Shortcuts
    const cityMap: Record<string, string> = {
        '/pune': 'Pune',
        '/mumbai': 'Mumbai',
        '/thane': 'Thane',
        '/navi-mumbai': 'Navi Mumbai',
        '/lonavala': 'Lonavala',
        '/khandala': 'Lonavala',
        '/alibaug': 'Alibaug',
        '/maharashtra': 'All',
        '/properties-in-pune': 'Pune',
        '/properties-in-mumbai': 'Mumbai',
        '/properties-in-thane': 'Thane',
        '/properties-in-navi-mumbai': 'Navi Mumbai',
        '/properties-in-maharashtra': 'All',
        '/flats-in-pune': 'Pune',
        '/flats-in-mumbai': 'Mumbai',
        '/flats-in-thane': 'Thane',
        '/flats-in-navi-mumbai': 'Navi Mumbai'
    };

    if (cityMap[pathname]) {
        return <SearchResults forcedCity={cityMap[pathname]} canonicalPath={pathname} />;
    }

    // 2. Programmatic SEO: Configurations x Locality/City (/1-bhk-flats-in-:slug, /2-bhk-flats-in-:slug, etc.)
    const configMatch = pathname.match(/^\/([1-5])-bhk-flats-in-([a-z0-9-]+)$/);
    if (configMatch) {
        const config = `${configMatch[1]} BHK`;
        const target = resolveTarget(configMatch[2]);
        return (
            <SearchResults 
                forcedConfig={config} 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    // 3. Programmatic SEO: Luxury Villas & Row Houses (/villas-in-:slug, /luxury-villas-in-:slug)
    const villaMatch = pathname.match(/^\/(?:luxury-)?villas-in-([a-z0-9-]+)$/) || pathname.match(/^\/row-houses-in-([a-z0-9-]+)$/);
    if (villaMatch) {
        const target = resolveTarget(villaMatch[1]);
        return (
            <SearchResults 
                forcedConfig="Villa" 
                forcedType="Plot" 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    // 4. Programmatic SEO: Penthouses (/penthouses-in-:slug)
    const penthouseMatch = pathname.match(/^\/penthouses-in-([a-z0-9-]+)$/);
    if (penthouseMatch) {
        const target = resolveTarget(penthouseMatch[1]);
        return (
            <SearchResults 
                forcedConfig="Penthouse" 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    // 5. Programmatic SEO: Status x Locality/City (/ready-to-move-flats-in-*, /new-launch-projects-in-*, etc.)
    const statusMatch = pathname.match(/^\/(ready-to-move-flats|ready-possession-flats|new-launch-projects|upcoming-projects|under-construction-projects)-in-([a-z0-9-]+)$/);
    if (statusMatch) {
        const rawStatus = statusMatch[1];
        const status = rawStatus.startsWith('ready') 
            ? 'Ready to Move' 
            : (rawStatus.startsWith('new') || rawStatus.startsWith('upcoming')) 
                ? 'New Launch' 
                : 'Under Construction';
        const target = resolveTarget(statusMatch[2]);
        return (
            <SearchResults 
                forcedStatus={status} 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    // 6. Programmatic SEO: Budget x City/Locality (/flats-under-50-lakhs-in-*, /flats-under-1-crore-in-*, etc.)
    const budgetMatch = pathname.match(/^\/flats-under-([0-9]+(?:-[0-9]+)?)-(lakhs|lakh|crore|cr)-in-([a-z0-9-]+)$/);
    if (budgetMatch) {
        const amount = budgetMatch[1];
        const unit = budgetMatch[2];
        const label = unit.startsWith('cr') ? `< ${amount} Cr` : `< ${amount} L`;
        const target = resolveTarget(budgetMatch[3]);
        return (
            <SearchResults 
                forcedBudgetLabel={label} 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    const luxuryMatch = pathname.match(/^\/luxury-flats-in-([a-z0-9-]+)$/);
    if (luxuryMatch) {
        const target = resolveTarget(luxuryMatch[1]);
        return (
            <SearchResults 
                forcedBudgetLabel="> 2 Cr" 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    // 7. Standard Locality Prefixes (/flats-in-*, /properties-in-*, /apartments-in-*, /projects-in-*)
    const localityPrefixes = ['/flats-in-', '/properties-in-', '/apartments-in-', '/projects-in-'];
    for (const prefix of localityPrefixes) {
        if (pathname.startsWith(prefix)) {
            const slug = pathname.replace(prefix, '').split('/')[0];
            if (slug) {
                const target = resolveTarget(slug);
                return (
                    <SearchResults 
                        forcedCity={target.city} 
                        forcedLocationSlug={target.locationSlug} 
                        canonicalPath={pathname} 
                    />
                );
            }
        }
    }

    // 8. Programmatic SEO: Developer x Locality/City (/:builderSlug-projects-in-:slug, /:builderSlug-villas-in-:slug)
    const builderMatch = pathname.match(/^\/([a-z0-9-]+)-(?:projects|villas|apartments|townships|flats)-in-([a-z0-9-]+)$/);
    if (builderMatch) {
        const builderSlug = builderMatch[1];
        const target = resolveTarget(builderMatch[2]);
        const isVilla = pathname.includes('-villas-in-');
        return (
            <SearchResults 
                forcedBuilderSlug={builderSlug} 
                forcedConfig={isVilla ? 'Villa' : undefined} 
                forcedCity={target.city} 
                forcedLocationSlug={target.locationSlug} 
                canonicalPath={pathname} 
            />
        );
    }

    return <NotFound />;
};

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HelmetProvider>
                <DataProvider>
                    <GlobalErrorBoundary>
                        <Router>
                            <ScrollToTop />
                            <Toaster position="top-center" />
                            <React.Suspense fallback={<LoadingFallback />}>
                                <CompareFloatingBar />
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/search" element={<SearchResults />} />
                                    <Route path="/directory" element={<Directory />} />

                                    {/* City & Regional Landing Routes */}
                                    <Route path="/pune" element={<SearchResults forcedCity="Pune" />} />
                                    <Route path="/mumbai" element={<SearchResults forcedCity="Mumbai" />} />
                                    <Route path="/thane" element={<SearchResults forcedCity="Thane" />} />
                                    <Route path="/navi-mumbai" element={<SearchResults forcedCity="Navi Mumbai" />} />
                                    <Route path="/properties-in-pune" element={<SearchResults forcedCity="Pune" />} />
                                    <Route path="/properties-in-mumbai" element={<SearchResults forcedCity="Mumbai" />} />
                                    <Route path="/properties-in-maharashtra" element={<SearchResults forcedCity="All" />} />
                                    <Route path="/flats-in-pune" element={<SearchResults forcedCity="Pune" />} />
                                    <Route path="/flats-in-mumbai" element={<SearchResults forcedCity="Mumbai" />} />
                                    <Route path="/flats-in/:locationSlug" element={<SearchResults />} />
                                    <Route path="/flats-in-:locationSlug" element={<SearchResults />} />
                                    <Route path="/project/:slug" element={<ProjectDetails />} />
                                    <Route path="/projects/:slug" element={<ProjectDetails />} />
                                    <Route path="/property/:slug" element={<ProjectDetails />} />
                                    <Route path="/builder/:slug" element={<BuilderDetails />} />
                                    <Route path="/builders/:slug" element={<BuilderDetails />} />

                                    {/* Static & Form Pages */}
                                    <Route path="/verify-rera" element={<MahaRERAVerification />} />
                                    <Route path="/verify-rera/:reraId" element={<MahaRERAVerification />} />
                                    <Route path="/maharera-verification" element={<MahaRERAVerification />} />
                                    <Route path="/compare" element={<CompareProjects />} />
                                    <Route path="/post-property" element={<PostProperty />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                    <Route path="/privacy" element={<PrivacyPolicy />} />
                                    <Route path="/terms" element={<Terms />} />
                                    <Route path="/terms-of-service" element={<Terms />} />
                                    <Route path="/disclaimer" element={<Disclaimer />} />

                                    {/* Public Admin Route */}
                                    <Route path="/admin" element={<AdminLogin />} />

                                    {/* Protected Admin Routes */}
                                    <Route element={<ProtectedRoute />}>
                                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                                        <Route path="/admin/projects" element={<AdminProjects />} />
                                        <Route path="/admin/projects/new" element={<AdminProjectForm />} />
                                        <Route path="/admin/projects/:id" element={<AdminProjectForm />} />
                                        <Route path="/admin/builders" element={<AdminBuilders />} />
                                        <Route path="/admin/builders/new" element={<AdminBuilderForm />} />
                                        <Route path="/admin/builders/:id" element={<AdminBuilderForm />} />
                                        <Route path="/admin/banners" element={<AdminBanners />} />
                                        <Route path="/admin/localities" element={<AdminLocalities />} />

                                        <Route path="/admin/media" element={<AdminMedia />} />

                                        <Route path="/admin/leads" element={<AdminLeads />} />
                                        <Route path="/admin/rera-intelligence" element={<AdminRERAIntelligence />} />
                                        <Route path="/admin/seed" element={<AdminSeedData />} />
                                    </Route>

                                    {/* 404 & Dynamic Locality Fallback */}
                                    <Route path="*" element={<DynamicLocalityOrNotFound />} />
                                </Routes>
                            </React.Suspense>
                        </Router>
                    </GlobalErrorBoundary>
                </DataProvider>
            </HelmetProvider>
        </QueryClientProvider >
    );
}


export default App;
