import React from 'react';

interface PropsmartLogoProps {
    isSolid?: boolean;
    className?: string;
    variant?: 'light' | 'dark' | 'auto';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PropsmartLogo: React.FC<PropsmartLogoProps> = ({
    isSolid = false,
    className = '',
    variant = 'auto',
    size = 'md',
}) => {
    // Determine color mode
    const isDarkBackground = variant === 'dark' || (variant === 'auto' && !isSolid);
    const logoSrc = isDarkBackground ? '/images/propsmart-logo-white.png' : '/images/propsmart-logo.png';

    const sizeClasses: Record<string, string> = {
        sm: 'h-6 sm:h-7',
        md: 'h-7 sm:h-8 md:h-9',
        lg: 'h-9 sm:h-10',
        xl: 'h-11 sm:h-12',
    };

    const heightClass = sizeClasses[size] || sizeClasses.md;

    return (
        <div className={`flex items-center shrink-0 select-none ${className}`}>
            <img
                src={logoSrc}
                alt="propsmart"
                className={`${heightClass} w-auto max-w-none object-contain transition-all duration-300 block`}
                loading="eager"
                decoding="sync"
            />
        </div>
    );
};

export default PropsmartLogo;
