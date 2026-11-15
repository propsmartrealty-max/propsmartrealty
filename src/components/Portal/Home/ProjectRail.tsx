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
                        <div className="hidden sm:flex items-center gap-1.5 mr-2">
                            <button
                                onClick={() => scroll('left')}
                                className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-sky-600 border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all active:scale-95"
                                aria-label="Previous properties"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-2 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-sky-600 border border-slate-200/80 shadow-2xs hover:shadow-sm transition-all active:scale-95"
                                aria-label="Next properties"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <Link 
                            to={viewAllLink} 
                            className="water-btn text-sky-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-white/80 shadow-2xs hover:text-sky-700 hover:shadow-sm transition-all"
                        >
                            <span>See All ({projects.length})</span> <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>

                <div 
                    ref={railRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x snap-mandatory scroll-pl-4 scroll-smooth"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {railProjects.map((project) => (
                        <div key={project.id} className="min-w-[310px] sm:min-w-[340px] md:min-w-[360px] snap-center">
                            <PropertyCard project={project} variant="grid" />
                        </div>
                    ))}

                    {/* View More Card */}
                    <div className="min-w-[150px] flex items-center justify-center">
                        <Link to={viewAllLink} className="flex flex-col items-center gap-2.5 group">
                            <div className="w-16 h-16 rounded-full glass-panel text-sky-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-glass border border-white/80 group-hover:scale-110">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-wider text-slate-600 group-hover:text-sky-600">View All ({projects.length})</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectRail;
