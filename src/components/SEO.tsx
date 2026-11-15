
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

const SEO: React.FC<SEOProps> = ({ title, description, canonical, openGraph, jsonLd, keywords }) => {
    const siteTitle = 'PROPSMART REALTY';
    const cleanTitle = title.replace(/\s*\|\s*(propsmart|Pune Property Vlog|Propsmart Realty)$/i, '');
    const fullTitle = cleanTitle.includes('PROPSMART REALTY') ? cleanTitle : `${cleanTitle} | ${siteTitle}`;

    // Use a default OG image if none provided
    const ogImage = openGraph?.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200';

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords && keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={openGraph?.type || 'website'} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content={ogImage} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data (Google Real Estate Rich Results) */}
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
