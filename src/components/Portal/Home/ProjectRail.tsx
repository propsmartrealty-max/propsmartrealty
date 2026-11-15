import React from 'react';
import { ArrowRight } from 'lucide-react';
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

const ProjectRail: React.FC<ProjectRailProps> = ({ title, subtitle, projects, viewAllLink = '/search', bgColor = 'bg-transparent' }) => {
    if (!projects || projects.length === 0) return null;

    return (
        <section className={`py-12 ${bgColor} relative`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">{title}</h2>
                        </div>
                        {subtitle && <p className="text-slate-600 text-sm max-w-2xl font-medium">{subtitle}</p>}
                    </div>
                    <Link to={viewAllLink} className="water-btn text-sky-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/75 backdrop-blur-md border border-white/80 shadow-2xs hover:text-sky-700 hover:shadow-sm transition-all">
                        <span>See All</span> <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                </div>

                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6 snap-x">
                    {projects.map((project) => (
                        <div key={project.id} className="min-w-[320px] md:min-w-[360px] snap-center">
                            <PropertyCard project={project} variant="grid" />
                        </div>
                    ))}

                    {/* View More Card */}
                    <div className="min-w-[150px] flex items-center justify-center">
                        <Link to={viewAllLink} className="flex flex-col items-center gap-2.5 group">
                            <div className="w-16 h-16 rounded-full glass-panel text-sky-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 shadow-glass border border-white/80 group-hover:scale-110">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-black uppercase tracking-wider text-slate-600 group-hover:text-sky-600">View All</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectRail;
