import json
import re

mock_data_path = 'punepropertyvloginside/src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

loc_match = re.search(r'export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS', content)
locations = json.loads(loc_match.group(1))

# Convert to LocalityItem format
locality_items = []
slug_map_entries = {}

for l in locations:
    slug = l['slug']
    name = l['name']
    name_lower = name.lower()
    
    # slug map
    slug_map_entries[slug] = slug
    slug_map_entries[name_lower] = slug
    slug_map_entries[name_lower.replace(' ', '-')] = slug
    slug_map_entries[f"{slug}-{l['city'].lower()}"] = slug

    item = {
        "id": l["id"],
        "name": l["name"],
        "slug": l["slug"],
        "city": l["city"],
        "zone": l["zone"],
        "isFeatured": l.get("isFeatured", False),
        "image": l.get("image", f"/images/localities/{slug}.svg"),
        "price": l.get("price", f"₹{l.get('avgPriceSqft', 8500)/1000:.1f}k/sq.ft"),
        "avgPriceSqft": l.get("avgPriceSqft", 8500),
        "count": l.get("projectCount", 0),
        "appreciationRate": l.get("appreciation_rate", 7.5),
        "tagline": l.get("tagline", "High Growth Corridor"),
        "description": l.get("description", "")
    }
    locality_items.append(item)

# Additional common slug aliases
extra_slugs = {
    "kolshet-road-thane": "kolshet-road",
    "kolshet": "kolshet-road",
    "pokhran-road-thane": "pokhran-road",
    "pokhran": "pokhran-road",
    "ghodbunder-road-thane": "ghodbunder-road",
    "ghodbunder": "ghodbunder-road",
    "majiwada-thane": "majiwada",
    "balkum-thane": "balkum",
    "manpada-thane": "manpada-thane",
    "manpada": "manpada-thane",
    "powai-mumbai": "powai",
    "borivali-east-mumbai": "borivali-east",
    "borivali": "borivali-east",
    "goregaon-east-mumbai": "goregaon-east",
    "goregaon": "goregaon-east",
    "kandivali-east-mumbai": "kandivali-east",
    "kandivali": "kandivali-east",
    "mulund-west-mumbai": "mulund-west",
    "mulund": "mulund-west",
    "kanjurmarg-mumbai": "kanjurmarg",
    "kanjurmarg-east": "kanjurmarg",
    "worli-mumbai": "worli",
    "bandra-east-mumbai": "bandra-east",
    "bandra": "bandra-west",
    "bkc": "bandra-east",
    "wadala-mumbai": "wadala",
    "vikhroli-east-mumbai": "vikhroli-east",
    "vikhroli": "vikhroli-east",
    "hinjewadi-pune": "hinjewadi",
    "hinjawadi": "hinjewadi",
    "hinjewadi-phase-1": "hinjewadi",
    "hinjewadi-phase-2": "hinjewadi",
    "hinjewadi-phase-3": "hinjewadi",
    "baner-annex": "baner",
    "sb-road": "senapati-bapat-road",
    "charoli": "charholi",
    "charholi-budruk": "charholi-budruk",
    "shivajinagar": "shivaji-nagar",
    "model-colony": "shivaji-nagar",
    "bund-garden": "bund-garden",
    "manjari": "manjri",
    "nibm": "nibm"
}
slug_map_entries.update(extra_slugs)

slug_map_json = json.dumps(slug_map_entries, indent=4)
localities_json = json.dumps(locality_items, indent=4, ensure_ascii=False)

ts_content = f'''/**
 * Locality and Neighborhood Utilities for PROPSMART REALTY
 * Provides standardized locality images, slugs, and consistent typography tokens.
 * Comprehensive City-Wise Micro-Markets & Localities (Pune, Mumbai, Thane, Navi Mumbai, Lonavala, Alibaug).
 */

export interface LocalityItem {{
    id: string;
    name: string;
    slug: string;
    city: 'Pune' | 'Mumbai' | 'Thane' | 'Navi Mumbai' | 'Lonavala' | 'Alibaug' | string;
    zone: string;
    isFeatured?: boolean;
    image: string;
    price: string;
    avgPriceSqft: number;
    count: number;
    appreciationRate: number;
    tagline: string;
    description?: string;
}}

export const SUPPORTED_CITIES = [
    'Pune',
    'Mumbai',
    'Thane',
    'Navi Mumbai',
    'Lonavala',
    'Alibaug'
] as const;

export type SupportedCity = typeof SUPPORTED_CITIES[number];

export interface CityZone {{
    id: string;
    label: string;
}}

export interface CityMetadata {{
    name: string;
    icon: string;
    tagline: string;
    subtext: string;
    zones: CityZone[];
}}

export const CITY_CONFIG: Record<string, CityMetadata> = {{
    'Pune': {{
        name: 'Pune',
        icon: '🏙️',
        tagline: 'Oxford of the East & Premier IT / Auto Corridor',
        subtext: 'Explore West Pune, East Cybercity, South Heritage & PCMC Industrial Hubs',
        zones: [
            {{ id: 'featured', label: '⭐ Featured Corridors' }},
            {{ id: 'west', label: 'West Pune (IT & Expressway)' }},
            {{ id: 'east', label: 'East Pune (Cyber & Airport)' }},
            {{ id: 'south', label: 'South & Central Pune' }},
            {{ id: 'north', label: 'North Pune (PCMC)' }},
            {{ id: 'all', label: 'All 85 Pune Corridors' }}
        ]
    }},
    'Mumbai': {{
        name: 'Mumbai',
        icon: '🌊',
        tagline: 'Financial Capital & Ultra-Luxury Residential Epicenter',
        subtext: 'Bespoke high-rises across Western Suburbs, Central Mumbai & South Mumbai',
        zones: [
            {{ id: 'featured', label: '⭐ Featured Corridors' }},
            {{ id: 'western', label: 'Western Suburbs' }},
            {{ id: 'central', label: 'Central Suburbs' }},
            {{ id: 'south', label: 'South Mumbai' }},
            {{ id: 'all', label: 'All 25 Mumbai Corridors' }}
        ]
    }},
    'Thane': {{
        name: 'Thane',
        icon: '🌿',
        tagline: 'City of Lakes & Fast-Growing MMR Hub',
        subtext: 'Premium residential corridors off Pokhran, Kolshet, Majiwada & Ghodbunder',
        zones: [
            {{ id: 'featured', label: '⭐ Featured Belts' }},
            {{ id: 'thane-west', label: 'Thane West & Pokhran' }},
            {{ id: 'extension', label: 'Upper Thane & Extension' }},
            {{ id: 'all', label: 'All 10 Thane Belts' }}
        ]
    }},
    'Navi Mumbai': {{
        name: 'Navi Mumbai',
        icon: '⚓',
        tagline: 'Planned Metropolis & International Airport Belt',
        subtext: 'Panvel, Kharghar, Palm Beach & Upcoming NMIA Aerocity Nodes',
        zones: [
            {{ id: 'featured', label: '⭐ Featured Belts' }},
            {{ id: 'all', label: 'All Navi Mumbai Corridors' }}
        ]
    }},
    'Lonavala': {{
        name: 'Lonavala',
        icon: '⛰️',
        tagline: 'Scenic Hill Station & Weekend Luxury Mansions',
        subtext: 'Highland retreats across Khandala, Kunegaon & Expressway Valleys',
        zones: [
            {{ id: 'featured', label: '⭐ Featured Enclaves' }},
            {{ id: 'all', label: 'All Lonavala & Khandala Enclaves' }}
        ]
    }},
    'Alibaug': {{
        name: 'Alibaug',
        icon: '🏖️',
        tagline: 'Coastal Celebrity Haven & Beachfront Estates',
        subtext: 'Mandwa Jetty speedboat corridor, Awas Beach & Konkan shores',
        zones: [
            {{ id: 'featured', label: '⭐ Featured Beach Corridors' }},
            {{ id: 'all', label: 'All Alibaug Coastal Belts' }}
        ]
    }}
}};

export const LOCALITY_SLUG_MAP: Record<string, string> = {slug_map_json};

/**
 * Returns a high-definition, local vector cover image for any given locality.
 * Guarantees zero 404s, instantaneous load, and distinct visuals for each area.
 */
export const getLocalityImageUrl = (localityNameOrSlug?: string | null): string => {{
    if (!localityNameOrSlug) return '/images/localities/baner.svg';

    const normalized = localityNameOrSlug
        .toLowerCase()
        .trim()
        .replace(/\\s+/g, '-');

    const mappedSlug = LOCALITY_SLUG_MAP[normalized] ||
        LOCALITY_SLUG_MAP[normalized.replace(/-pune$/, '')] ||
        Object.keys(LOCALITY_SLUG_MAP).find(k => normalized.includes(k) || k.includes(normalized));

    if (mappedSlug) {{
        const target = LOCALITY_SLUG_MAP[mappedSlug] || mappedSlug;
        return `/images/localities/${{target}}.svg`;
    }}

    return '/images/localities/baner.svg';
}};

/**
 * Standardized typography class tokens across the website.
 */
export const LOCALITY_TYPOGRAPHY = {{
    cardTitle: 'font-sans font-extrabold text-lg md:text-xl tracking-tight text-white leading-tight',
    tabText: 'font-sans font-bold text-sm tracking-tight',
    badgeText: 'font-sans font-bold text-xs tracking-tight',
    priceText: 'font-sans font-extrabold text-xs tracking-tight',
}} as const;

export const PROPSMART_LOCALITIES: LocalityItem[] = {localities_json};

/**
 * Filter localities by specific city.
 */
export const getLocalitiesByCity = (city: string): LocalityItem[] => {{
    if (!city || city === 'All') return PROPSMART_LOCALITIES;
    return PROPSMART_LOCALITIES.filter(l => l.city.toLowerCase() === city.toLowerCase());
}};

/**
 * Get featured localities for a specific city.
 */
export const getFeaturedLocalitiesByCity = (city: string, limit = 12): LocalityItem[] => {{
    const cityLocalities = getLocalitiesByCity(city);
    const featured = cityLocalities.filter(l => l.isFeatured);
    return (featured.length > 0 ? featured : cityLocalities).slice(0, limit);
}};

/**
 * Get zone options for a specific city.
 */
export const getCityZones = (city: string): CityZone[] => {{
    return CITY_CONFIG[city]?.zones || [
        {{ id: 'featured', label: '⭐ Featured' }},
        {{ id: 'all', label: 'All Corridors' }}
    ];
}};
'''

with open('punepropertyvloginside/src/utils/localityUtils.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print(f"Generated punepropertyvloginside/src/utils/localityUtils.ts with {len(locality_items)} localities.")
