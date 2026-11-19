import React from 'react';
import { ArrowRight, Star, MapPin, Building2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../../types';
import { useData } from '../../../context/DataContext';
import { getResilientFallbackImage } from '../../../utils/imageUtils';

interface SpotlightSectionProps {
    projects: Project[];
}

const SpotlightSection: React.FC<SpotlightSectionProps> = ({ projects }) => {
    const { builders = [] } = useData();
    if (!projects.length) return null;

    // Prioritize flagship township and landmark luxury elevations
    const prioritySlugs = [
        'lodha-belmondo',
        'kolte-patil-life-republic',
        'panchshil-towers',
        'vtp-bellissimo',
        'godrej-river-royale',
        'lodha-panache'
    ];

    const prioritized = prioritySlugs
        .map(slug => projects.find(p => p.slug === slug || p.slug.includes(slug)))
        .filter((p): p is Project => p !== undefined);

    const remaining = projects.filter(p => !prioritized.some(pr => pr.id === p.id));
    const spotlightProjects = [...prioritized, ...remaining].slice(0, 3);

    return (
        <section className="py-16 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
                            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400" />
                            <span className="text-xs font-black tracking-widest text-amber-800 uppercase">Township & High-Rise Spotlight</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            Iconic Landmark Elevations
                        </h2>
                        <p className="text-sm sm:text-base text-slate-700 font-medium mt-1">
                            Experience Pune's most celebrated architectural elevations and master-planned mega townships.
                        </p>
                    </div>
                    <Link
                        to="/search?type=projects"
                        aria-label="Explore all flagship landmark elevations"
                        className="inline-flex items-center gap-2 text-sm font-extrabold text-brand-700 hover:text-brand-800 bg-brand-50 hover:bg-brand-100 px-5 py-2.5 rounded-full transition-all border border-brand-200 shrink-0"
                    >
                        <span>Explore All Flagships</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                    {spotlightProjects.map((project) => (
                        <Link
                            to={`/project/${project.slug}`}
                            key={project.id}
                            title={project.title}
                            aria-label={`${project.title} in ${project.location}, ${project.city || 'Pune'}`}
                            itemScope
                            itemType="https://schema.org/ApartmentComplex"
                            className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/80 bg-slate-900"
                        >
                            <meta itemProp="name" content={project.title} />
                            <meta itemProp="url" content={`https://propsmart.co.in/project/${project.slug}`} />
                            <img
                                src={project.image}
                                alt={project.title}
                                width="400"
                                height="500"
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                onError={(e) => {
                                    e.currentTarget.src = getResilientFallbackImage(project.id);
                                }}
                            />
                            {/* Deep Contrast Ambient Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

                            {/* Top Badges */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                                <span className="inline-flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-white shadow-md">
                                    <Building2 className="w-3.5 h-3.5 text-amber-400" />
                                    <span>
                                        {builders.find(b => b.id === project.builderId)?.name || project.builderId?.replace(/^b-/, '').replace(/-/g, ' ').toUpperCase() || 'Direct Builder'}
                                    </span>
                                </span>
                                <span className="bg-amber-400/90 text-slate-950 px-2.5 py-0.5 rounded-full font-black text-[11px] shadow-sm backdrop-blur-md">
                                    ★ Spotlight
                                </span>
                            </div>

                            {/* Bottom Content Area */}
                            <div className="absolute bottom-0 left-0 p-6 w-full text-white z-10">
                                <h3 itemProp="name" className="text-2xl font-black mb-1.5 drop-shadow-md group-hover:text-amber-300 transition-colors line-clamp-1" title={project.title}>
                                    {project.title}
                                </h3>
                                <p className="font-sans font-bold text-sm text-slate-300 mb-3 flex items-center gap-1.5">
                                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                    <span>{project.location}, {project.city || 'Pune'}</span>
                                </p>
                                <div className="flex items-center justify-between pt-2 border-t border-white/15">
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Starting Direct Price</div>
                                        <div className="font-black text-xl text-amber-400">{project.priceRange}</div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpotlightSection;
