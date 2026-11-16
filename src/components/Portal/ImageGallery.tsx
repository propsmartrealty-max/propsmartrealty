
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
    images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
    // Use array of images, if only one provided, ensure resilient fallback
    const galleryImages = images && images.length > 0 
        ? images 
        : ['https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp'];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <>
            {/* Main Hero View - Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[400px] md:h-[500px] mb-8 cursor-pointer group rounded-2xl overflow-hidden relative">
                {/* Main large image */}
                <div className="md:col-span-2 md:row-span-2 relative h-full" onClick={() => openLightbox(0)}>
                    <img src={galleryImages[0]} alt="Property Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Secondary images: distinct gallery photos */}
                <div className="hidden md:block relative h-full overflow-hidden" onClick={() => openLightbox(1 % galleryImages.length)}>
                    <img 
                        src={galleryImages[1] || galleryImages[0]} 
                        alt="Property View 2" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                </div>
                <div className="hidden md:block relative h-full overflow-hidden" onClick={() => openLightbox(2 % galleryImages.length)}>
                    <img 
                        src={galleryImages[2] || galleryImages[0]} 
                        alt="Property View 3" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                </div>
                <div className="hidden md:block relative h-full overflow-hidden" onClick={() => openLightbox(3 % galleryImages.length)}>
                    <img 
                        src={galleryImages[3] || galleryImages[0]} 
                        alt="Property View 4" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                </div>
                <div className="hidden md:block relative h-full overflow-hidden" onClick={() => openLightbox(4 % galleryImages.length)}>
                    <img 
                        src={galleryImages[4] || galleryImages[0]} 
                        alt="Property View 5" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-2xs flex flex-col items-center justify-center text-white font-black text-sm uppercase tracking-wider group-hover:bg-slate-950/50 transition-colors">
                        <Maximize2 className="w-5 h-5 mb-1 text-sky-400" />
                        <span>View All {galleryImages.length} Photos</span>
                    </div>
                </div>

                <button
                    className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2"
                    onClick={(e) => { e.stopPropagation(); openLightbox(0); }}
                >
                    <Maximize2 className="w-4 h-4" />
                    View Gallery
                </button>
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 p-2"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button onClick={prevImage} className="absolute left-4 text-white hover:text-gray-300 p-2">
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <img
                        src={galleryImages[currentIndex]}
                        alt={`Gallery ${currentIndex + 1}`}
                        className="max-h-[90vh] max-w-[90vw] object-contain rounded-sm"
                    />

                    <button onClick={nextImage} className="absolute right-4 text-white hover:text-gray-300 p-2">
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-1 rounded-full text-sm">
                        {currentIndex + 1} / {galleryImages.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageGallery;
