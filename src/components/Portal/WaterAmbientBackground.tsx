import React from 'react';

interface WaterAmbientBackgroundProps {
    className?: string;
    variant?: 'subtle' | 'vibrant' | 'oceanic';
}

/**
 * WaterAmbientBackground:
 * Renders ambient fluid water blobs and soft aquatic gradient waves that move gently
 * behind glassmorphic surfaces, creating an authentic translucent glass refraction effect.
 */
const WaterAmbientBackground: React.FC<WaterAmbientBackgroundProps> = ({ 
    className = '',
    variant = 'subtle' 
}) => {
    return (
        <div 
            className={`fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none ${className}`}
            aria-hidden="true"
        >
            {/* Ambient Water Gradient Flow Wash */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50/40 to-cyan-50/30" />

            {/* Fluid Water Blobs - Desktop only to eliminate mobile forced reflow & GPU throttling */}
            <div 
                className="hidden md:block water-blob water-blob-cyan top-[-10%] left-[5%] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px]"
                style={{ opacity: variant === 'vibrant' ? 0.6 : 0.4 }}
            />

            <div 
                className="hidden md:block water-blob water-blob-blue top-[30%] right-[-5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px]"
                style={{ opacity: variant === 'vibrant' ? 0.55 : 0.35 }}
            />

            <div 
                className="hidden md:block water-blob water-blob-emerald bottom-[-10%] left-[25%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px]"
                style={{ opacity: variant === 'vibrant' ? 0.5 : 0.3 }}
            />

            <div 
                className="hidden md:block water-blob water-blob-cyan top-[70%] right-[20%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px]"
                style={{ opacity: variant === 'vibrant' ? 0.45 : 0.25 }}
            />

            {/* Micro Water Texture Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #0284c7 1px, transparent 0)`,
                    backgroundSize: '32px 32px'
                }}
            />
        </div>
    );
};

export default WaterAmbientBackground;
