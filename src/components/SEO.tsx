import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    openGraph?: {
        type: string;
        image?: string;
    };
    jsonLd?: Record<string, any> | Array<Record<string, any>>;
    keywords?: string[];
}

const DEFAULT_KEYWORDS = [
    'Pune real estate',
    'Mumbai real estate',
    'Maharashtra properties',
    'flats in Pune',
    'apartments in Pune',
    'luxury flats in Baner',
    'flats in Hinjewadi',
    'flats in Kharadi',
    '100% brokerage free Pune',
    'buy directly from builder Pune',
    'MahaRERA verified projects',
    'Godrej Hinjewadi',
    'VTP Kharadi',
    'Lodha Baner',
    'Kolte Patil Pune'
];

const DEFAULT_OG_IMAGE = 'https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp';

const SEO: React.FC<SEOProps> = ({ title, description, canonical, openGraph, jsonLd, keywords }) => {
    const siteTitle = 'PROPSMART REALTY';
    const cleanTitle = title.replace(/\s*\|\s*(propsmart|Pune Property Vlog|Propsmart Realty)$/i, '');
    const fullTitle = cleanTitle.includes('PROPSMART REALTY') ? cleanTitle : `${cleanTitle} | ${siteTitle}`;

    const ogImage = openGraph?.image || DEFAULT_OG_IMAGE;
    const effectiveKeywords = keywords && keywords.length > 0 ? keywords : DEFAULT_KEYWORDS;
    const effectiveCanonical = canonical || 'https://propsmart.co.in/';

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={effectiveKeywords.join(', ')} />
            <link rel="canonical" href={effectiveCanonical} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

            {/* Geotagging for Pune, Mumbai & Maharashtra Local Search Dominance */}
            <meta name="geo.region" content="IN-MH" />
            <meta name="geo.placename" content="Pune, Mumbai, Maharashtra, India" />
            <meta name="geo.position" content="18.5204;73.8567" />
            <meta name="ICBM" content="18.5204, 73.8567" />

            {/* Open Graph */}
            <meta property="og:title" content={cleanTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={openGraph?.type || 'website'} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:url" content={effectiveCanonical} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={cleanTitle} />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@propsmartrealty" />
            <meta name="twitter:title" content={cleanTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data (Google Real Estate Rich Results & Schema.org Graph) */}
            {jsonLd && (
                Array.isArray(jsonLd) ? (
                    jsonLd.map((schema, idx) => (
                        <script key={idx} type="application/ld+json">
                            {JSON.stringify(schema)}
                        </script>
                    ))
                ) : (
                    <script type="application/ld+json">
                        {JSON.stringify(jsonLd)}
                    </script>
                )
            )}
        </Helmet>
    );
};

export default SEO;
