import React from 'react';

interface PropsmartLogoProps {
    isSolid?: boolean;
    className?: string;
    variant?: 'light' | 'dark' | 'auto';
    size?: 'sm' | 'md' | 'lg';
}

export const PropsmartLogo: React.FC<PropsmartLogoProps> = ({
    isSolid = false,
    className = '',
    variant = 'auto',
    size = 'md'
}) => {
    // Determine color mode
    const isDarkBackground = variant === 'dark' || (variant === 'auto' && !isSolid);

    const sizeClasses = {
        sm: 'h-8',
        md: 'h-10',
        lg: 'h-12'
    };

    return (
        <div className={`flex items-center gap-3 select-none ${className}`}>
            {/* Modern Architectural Emblem */}
            <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/20 transition-transform group-hover:scale-105">
                    <svg viewBox="0 0 44 44" className="w-6 h-6" fill="none">
                        {/* Architectural House / High-Rise Silhouette */}
                        <path
                            d="M22 8 L36 19 L32 19 L32 35 L25 35 L25 26 L19 26 L19 35 L12 35 L12 19 L8 19 Z"
                            fill="#FFFFFF"
                        />
                        {/* Golden Crest Accent */}
                        <circle cx="22" cy="16" r="2.5" fill="#F59E0B" />
                        <path d="M22 6 L24 8 L22 10 L20 8 Z" fill="#FEF3C7" />
                    </svg>
                </div>
            </div>

            {/* Typography Lockup */}
            <div className="flex flex-col leading-none">
                <div className="flex items-center tracking-tight">
                    <span
                        className={`text-xl sm:text-2xl font-black transition-colors duration-300 ${
                            isDarkBackground ? 'text-white' : 'text-slate-900'
                        }`}
                    >
                        PROP
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-amber-500">
                        SMART
                    </span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-amber-500 leading-none">
                        REALTY
                    </span>
                    <span
                        className={`text-[8px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                            isDarkBackground ? 'text-slate-400' : 'text-slate-400'
                        }`}
                    >
                        • PUNE
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PropsmartLogo;
