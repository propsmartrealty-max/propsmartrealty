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
const CompareProjects = React.lazy(() => import('./pages/CompareProjects'));

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

// Dynamic Locality SEO Route & 404 Fallback Handler
const DynamicLocalityOrNotFound = () => {
    const location = useLocation();
    const pathname = location.pathname.toLowerCase().replace(/\/$/, '');

    // City shortcuts: /pune, /mumbai, /thane, /navi-mumbai, /lonavala, /alibaug, /maharashtra
    const cityMap: Record<string, string> = {
        '/pune': 'Pune',
        '/mumbai': 'Mumbai',
        '/thane': 'Thane',
        '/navi-mumbai': 'Navi Mumbai',
        '/lonavala': 'Lonavala',
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
        return <SearchResults forcedCity={cityMap[pathname]} />;
    }

    // Dynamic Locality Prefixes
    const localityPrefixes = ['/flats-in-', '/properties-in-', '/apartments-in-', '/projects-in-'];
    for (const prefix of localityPrefixes) {
        if (pathname.startsWith(prefix)) {
            const slug = pathname.replace(prefix, '').split('/')[0];
            if (slug) {
                return <SearchResults forcedLocationSlug={slug} />;
            }
        }
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
                                    <Route path="/compare" element={<CompareProjects />} />
                                    <Route path="/post-property" element={<PostProperty />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/contact" element={<Contact />} />

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
