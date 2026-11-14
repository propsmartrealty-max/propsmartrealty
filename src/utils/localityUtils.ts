/**
 * Locality and Neighborhood Utilities for PROPSMART REALTY
 * Provides standardized locality images, slugs, and consistent typography tokens.
 */

export interface LocalityItem {
    id: string;
    name: string;
    slug: string;
    image: string;
    price: string;
    avgPriceSqft: number;
    count: number;
    appreciationRate: number;
    tagline: string;
}

export const LOCALITY_SLUG_MAP: Record<string, string> = {
    'baner': 'baner',
    'baner-annex': 'baner',
    'hinjewadi': 'hinjewadi',
    'hinjawadi': 'hinjewadi',
    'hinjewadi-phase-1': 'hinjewadi',
    'hinjewadi-phase-2': 'hinjewadi',
    'hinjewadi-phase-3': 'hinjewadi',
    'wakad': 'wakad',
    'kharadi': 'kharadi',
    'balewadi': 'balewadi',
    'koregaon-park': 'koregaon-park',
    'koregaon park': 'koregaon-park',
    'mahalunge': 'mahalunge',
    'viman-nagar': 'viman-nagar',
    'viman nagar': 'viman-nagar',
    'magarpatta': 'magarpatta-city',
    'magarpatta-city': 'magarpatta-city',
    'magarpatta city': 'magarpatta-city',
    'bavdhan': 'bavdhan',
    'hadapsar': 'hadapsar',
    'wagholi': 'wagholi',
    'ravet': 'ravet',
    'tathawade': 'tathawade',
    'punawale': 'punawale',
    'moshi': 'moshi',
    'kiwale': 'kiwale',
    'pimple-nilakh': 'pimple-nilakh',
    'pimple nilakh': 'pimple-nilakh',
    'pimple-saudagar': 'pimple-saudagar',
    'pimple saudagar': 'pimple-saudagar',
    'aundh': 'aundh',
    'kothrud': 'kothrud',
};

/**
 * Returns a high-definition, local vector cover image for any given locality.
 * Guarantees zero 404s, instantaneous load, and distinct visuals for each area.
 */
export const getLocalityImageUrl = (localityNameOrSlug?: string | null): string => {
    if (!localityNameOrSlug) return '/images/localities/baner.svg';

    const normalized = localityNameOrSlug
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-');

    const mappedSlug = LOCALITY_SLUG_MAP[normalized] ||
        LOCALITY_SLUG_MAP[normalized.replace(/-pune$/, '')] ||
        Object.keys(LOCALITY_SLUG_MAP).find(k => normalized.includes(k) || k.includes(normalized));

    if (mappedSlug) {
        return `/images/localities/${LOCALITY_SLUG_MAP[mappedSlug] || mappedSlug}.svg`;
    }

    return '/images/localities/baner.svg';
};

/**
 * Standardized typography class tokens across the website.
 * Ensures identical font family ('Plus Jakarta Sans') and bold hierarchy.
 */
export const LOCALITY_TYPOGRAPHY = {
    // Card Title: bold, uniform font family and size
    cardTitle: 'font-sans font-extrabold text-lg md:text-xl tracking-tight text-white leading-tight',
    // Tab / Filter Pill Text: bold, uniform size across all tabs/chips
    tabText: 'font-sans font-bold text-sm tracking-tight',
    // Mini badge / count indicator
    badgeText: 'font-sans font-bold text-xs tracking-tight',
    // Price indicator
    priceText: 'font-sans font-extrabold text-xs tracking-tight',
} as const;

export const PROPSMART_LOCALITIES: LocalityItem[] = [
    {
        id: 'loc-baner',
        name: 'Baner',
        slug: 'baner',
        image: '/images/localities/baner.svg',
        price: '₹9.5k/sq.ft',
        avgPriceSqft: 9500,
        count: 45,
        appreciationRate: 8.2,
        tagline: 'High-Street & Luxury Hub'
    },
    {
        id: 'loc-hinjewadi',
        name: 'Hinjewadi',
        slug: 'hinjewadi',
        image: '/images/localities/hinjewadi.svg',
        price: '₹6.8k/sq.ft',
        avgPriceSqft: 6800,
        count: 62,
        appreciationRate: 7.8,
        tagline: 'Pune Silicon Valley & IT Park'
    },
    {
        id: 'loc-wakad',
        name: 'Wakad',
        slug: 'wakad',
        image: '/images/localities/wakad.svg',
        price: '₹7.2k/sq.ft',
        avgPriceSqft: 7200,
        count: 38,
        appreciationRate: 7.4,
        tagline: 'Prime Residential & Highway Hub'
    },
    {
        id: 'loc-kharadi',
        name: 'Kharadi',
        slug: 'kharadi',
        image: '/images/localities/kharadi.svg',
        price: '₹8.2k/sq.ft',
        avgPriceSqft: 8200,
        count: 29,
        appreciationRate: 8.5,
        tagline: 'EON Free Zone & Financial Towers'
    },
    {
        id: 'loc-balewadi',
        name: 'Balewadi',
        slug: 'balewadi',
        image: '/images/localities/balewadi.svg',
        price: '₹9.1k/sq.ft',
        avgPriceSqft: 9100,
        count: 35,
        appreciationRate: 8.0,
        tagline: 'Sports Complex & Lifestyle District'
    },
    {
        id: 'loc-koregaon-park',
        name: 'Koregaon Park',
        slug: 'koregaon-park',
        image: '/images/localities/koregaon-park.svg',
        price: '₹14.5k/sq.ft',
        avgPriceSqft: 14500,
        count: 18,
        appreciationRate: 9.1,
        tagline: 'Elite Green Lanes & Luxury Estates'
    },
    {
        id: 'loc-mahalunge',
        name: 'Mahalunge',
        slug: 'mahalunge',
        image: '/images/localities/mahalunge.svg',
        price: '₹6.7k/sq.ft',
        avgPriceSqft: 6700,
        count: 28,
        appreciationRate: 8.4,
        tagline: 'Riverfront Township & Hillscape'
    },
    {
        id: 'loc-viman-nagar',
        name: 'Viman Nagar',
        slug: 'viman-nagar',
        image: '/images/localities/viman-nagar.svg',
        price: '₹11.0k/sq.ft',
        avgPriceSqft: 11000,
        count: 24,
        appreciationRate: 8.0,
        tagline: 'Airport Corridor & Retail Hub'
    },
    {
        id: 'loc-magarpatta',
        name: 'Magarpatta City',
        slug: 'magarpatta-city',
        image: '/images/localities/magarpatta-city.svg',
        price: '₹9.2k/sq.ft',
        avgPriceSqft: 9200,
        count: 30,
        appreciationRate: 7.2,
        tagline: 'Integrated Cybercity & Eco-Park'
    },
    {
        id: 'loc-bavdhan',
        name: 'Bavdhan',
        slug: 'bavdhan',
        image: '/images/localities/bavdhan.svg',
        price: '₹8.0k/sq.ft',
        avgPriceSqft: 8000,
        count: 20,
        appreciationRate: 7.0,
        tagline: 'Scenic Hills & Western Expressway'
    },
    {
        id: 'loc-hadapsar',
        name: 'Hadapsar',
        slug: 'hadapsar',
        image: '/images/localities/hadapsar.svg',
        price: '₹7.0k/sq.ft',
        avgPriceSqft: 7000,
        count: 50,
        appreciationRate: 6.9,
        tagline: 'SP Infocity & Corporate Enclave'
    },
    {
        id: 'loc-wagholi',
        name: 'Wagholi',
        slug: 'wagholi',
        image: '/images/localities/wagholi.svg',
        price: '₹5.8k/sq.ft',
        avgPriceSqft: 5800,
        count: 42,
        appreciationRate: 6.5,
        tagline: 'East Pune Educational Hub'
    }
];
