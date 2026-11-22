import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../PropertyCard';
import { Project } from '../../../types';

interface ProjectRailProps {
    title: string;
    subtitle?: string;
    projects: Project[];
    viewAllLink?: string;
    bgColor?: string;
}

const ProjectRail: React.FC<ProjectRailProps> = ({ 
    title, 
    subtitle, 
    projects, 
    viewAllLink = '/search', 
    bgColor = 'bg-transparent' 
}) => {
    const railRef = useRef<HTMLDivElement>(null);

    if (!projects || projects.length === 0) return null;

    const railProjects = projects.slice(0, 10);

    const scroll = (direction: 'left' | 'right') => {
        if (railRef.current) {
            const scrollAmount = direction === 'left' ? -380 : 380;
            railRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className={`py-12 ${bgColor} relative`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-6">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{title}</h2>
                        </div>
                        {subtitle && <p className="text-slate-600 text-sm max-w-2xl font-medium">{subtitle}</p>}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Smooth Navigation Controls */}
                        <div className="hidden sm:flex items-center gap-2 mr-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-sky-700 border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all active:scale-95"
                                aria-label={`Previous properties in ${title}`}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-slate-800 hover:text-sky-700 border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all active:scale-95"
                                aria-label={`Next properties in ${title}`}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>

                        <Link 
                            to={viewAllLink} 
                            aria-label={`See all ${projects.length} properties in ${title}`}
                            className="water-btn text-sky-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 px-4 py-2.5 min-h-[48px] rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-2xs hover:text-sky-800 hover:shadow-sm transition-all"
                        >
                            <span>See All ({projects.length})</span> <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                <div 
                    ref={railRef}
                    className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scroll-pl-4 scroll-smooth touch-momentum"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {railProjects.map((project) => (
                        <div 
                            key={project.id} 
                            className="w-[280px] sm:w-[320px] md:w-[340px] max-w-[340px] min-w-[280px] sm:min-w-[320px] md:min-w-[340px] snap-center shrink-0"
                        >
                            <PropertyCard project={project} variant="grid" />
                        </div>
                    ))}

                    {/* View More Card */}
                    <div className="min-w-[150px] flex items-center justify-center">
                        <Link 
                            to={viewAllLink} 
                            aria-label={`View all ${projects.length} properties in ${title}`}
                            className="flex flex-col items-center gap-2.5 group p-3 min-h-[48px]"
                        >
                            <div className="w-16 h-16 rounded-full glass-panel text-sky-700 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-glass border border-white/80 group-hover:scale-110">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-wider text-slate-700 group-hover:text-sky-700">View All ({projects.length})</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectRail;
