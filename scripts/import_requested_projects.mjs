import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const mockDataPath = resolve('./src/data/mockData.ts');
const content = readFileSync(mockDataPath, 'utf-8');

const locMatch = content.match(/export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS/);
const bldMatch = content.match(/export const BUILDERS: Builder\[\] = (\[[\s\S]*?\]);\n\nexport const PROJECTS/);
const prjMatch = content.match(/export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$/);

if (!locMatch || !bldMatch || !prjMatch) {
    console.error("Failed to parse mockData.ts segments");
    process.exit(1);
}

const locations = JSON.parse(locMatch[1]);
const builders = JSON.parse(bldMatch[1]);
const projects = JSON.parse(prjMatch[1]);

console.log(`Starting import: ${locations.length} locations, ${builders.length} builders, ${projects.length} projects`);

// 1. New Localities to add
const newLocalities = [
    // Alibaug
    {
        id: "kihim-beach",
        name: "Kihim Beach",
        slug: "kihim-beach",
        city: "Alibaug",
        zone: "Coastal Alibaug",
        isFeatured: true,
        avgPriceSqft: 14500,
        appreciation_rate: 9.4,
        tagline: "Dense Coconut & Betel Nut Palm Beach Residences",
        image: "/images/localities/default-locality.svg",
        price: "₹14.5k/sq.ft",
        description: "Prestigious Kihim shoreline corridor known for private beachfront villas and immediate connectivity to Mandwa speedboats."
    },
    {
        id: "alibaug-town",
        name: "Alibaug Town",
        slug: "alibaug-town",
        city: "Alibaug",
        zone: "Coastal Alibaug",
        isFeatured: false,
        avgPriceSqft: 9800,
        appreciation_rate: 8.2,
        tagline: "District Capital, Varsoli Beach & Civil Infrastructure",
        image: "/images/localities/default-locality.svg",
        price: "₹9.8k/sq.ft",
        description: "Commercial and administrative core of Alibaug with verified luxury apartments and coastal residences near Varsoli beach."
    },
    {
        id: "sasawane-beach",
        name: "Sasawane Beach",
        slug: "sasawane-beach",
        city: "Alibaug",
        zone: "Coastal Alibaug",
        isFeatured: true,
        avgPriceSqft: 18500,
        appreciation_rate: 9.8,
        tagline: "Billionaires Row of Alibaug & Private Jetty Mansions",
        image: "/images/localities/default-locality.svg",
        price: "₹18.5k/sq.ft",
        description: "Ultra-prime coastal strip in Alibaug housing India's top industrialist estates, sculpture gardens, and private helipads."
    },
    {
        id: "zirad-chondi",
        name: "Zirad-Chondi",
        slug: "zirad-chondi",
        city: "Alibaug",
        zone: "Coastal Alibaug",
        isFeatured: true,
        avgPriceSqft: 12500,
        appreciation_rate: 9.0,
        tagline: "Gourmet Dining, Boutique Resorts & Gated Villa Communities",
        image: "/images/localities/default-locality.svg",
        price: "₹12.5k/sq.ft",
        description: "The lifestyle heart of Alibaug featuring high-end gourmet delis, art galleries, and secure gated villa estates."
    },

    // Lonavala
    {
        id: "tungarli-valvan",
        name: "Tungarli-Valvan",
        slug: "tungarli-valvan",
        city: "Lonavala",
        zone: "Scenic Lonavala",
        isFeatured: true,
        avgPriceSqft: 11500,
        appreciation_rate: 8.7,
        tagline: "Highland Lakeviews & Hill Station Second Homes",
        image: "/images/localities/default-locality.svg",
        price: "₹11.5k/sq.ft",
        description: "Tranquil hillside belt overlooking Valvan Dam and Tungarli Lake with premium gated villa enclaves."
    },
    {
        id: "lonavala-town",
        name: "Lonavala Town",
        slug: "lonavala-town",
        city: "Lonavala",
        zone: "Scenic Lonavala",
        isFeatured: false,
        avgPriceSqft: 10200,
        appreciation_rate: 8.1,
        tagline: "Hill Station Core, Transit & Luxury Apartments",
        image: "/images/localities/default-locality.svg",
        price: "₹10.2k/sq.ft",
        description: "Central Lonavala offering railway connectivity, iconic bakeries, and year-round holiday home rentals."
    },
    {
        id: "kamshet-lakefront",
        name: "Kamshet Lakefront",
        slug: "kamshet-lakefront",
        city: "Lonavala",
        zone: "Scenic Lonavala",
        isFeatured: true,
        avgPriceSqft: 8500,
        appreciation_rate: 9.3,
        tagline: "Paragliding Capital & Serene Pawna-Indrayani Lakefront Estates",
        image: "/images/localities/default-locality.svg",
        price: "₹8.5k/sq.ft",
        description: "Picturesque Western Ghats valley between Lonavala and Pune celebrated for paragliding and lake-view second homes."
    },

    // Karjat
    {
        id: "karjat-central",
        name: "Karjat Central",
        slug: "karjat-central",
        city: "Karjat",
        zone: "Central Karjat",
        isFeatured: true,
        avgPriceSqft: 5200,
        appreciation_rate: 9.5,
        tagline: "Railway Junction, Riverfront Living & Educational Hub",
        image: "/images/localities/default-locality.svg",
        price: "₹5.2k/sq.ft",
        description: "Core Karjat micro-market with direct suburban local train connectivity to Mumbai CSMT and Panvel link."
    },
    {
        id: "karjat-neral-foothills",
        name: "Karjat-Neral Foothills",
        slug: "karjat-neral-foothills",
        city: "Karjat",
        zone: "Scenic Karjat Foothills",
        isFeatured: true,
        avgPriceSqft: 4800,
        appreciation_rate: 9.2,
        tagline: "Matheran Eco-Sensitive Foothills & Resort Townships",
        image: "/images/localities/default-locality.svg",
        price: "₹4.8k/sq.ft",
        description: "Pristine nature enclave at the base of Matheran hill station featuring lush green weekend villas and plotted communities."
    },
    {
        id: "kashele-bhimashankar",
        name: "Kashele",
        slug: "kashele",
        city: "Karjat",
        zone: "Scenic Karjat Foothills",
        isFeatured: true,
        avgPriceSqft: 4200,
        appreciation_rate: 8.8,
        tagline: "Bhimashankar Wildlife Corridor & Riverfront Farmhouses",
        image: "/images/localities/default-locality.svg",
        price: "₹4.2k/sq.ft",
        description: "Green biodiversity hotspot along the river basin popular for luxury farmhouses and eco-resort residences."
    },
    {
        id: "chowk-morbe-lake",
        name: "Chowk",
        slug: "chowk",
        city: "Karjat",
        zone: "Expressway & Lake Corridor",
        isFeatured: true,
        avgPriceSqft: 5900,
        appreciation_rate: 10.2,
        tagline: "Mumbai-Pune Expressway Junction & Morbe Dam Corridor",
        image: "/images/localities/default-locality.svg",
        price: "₹5.9k/sq.ft",
        description: "High-growth strategic corridor connecting Karjat directly to Navi Mumbai International Airport and Atal Setu (MTHL)."
    },
    {
        id: "vavanje-expressway",
        name: "Vavanje",
        slug: "vavanje",
        city: "Karjat",
        zone: "Expressway & Lake Corridor",
        isFeatured: false,
        avgPriceSqft: 4500,
        appreciation_rate: 8.9,
        tagline: "Township Corridor & Riverside Second Home Developments",
        image: "/images/localities/default-locality.svg",
        price: "₹4.5k/sq.ft",
        description: "Emerging township corridor bordering Panvel and Karjat with integrated self-sufficient township projects."
    },

    // Mumbai / MMR
    {
        id: "chandivali",
        name: "Chandivali",
        slug: "chandivali",
        city: "Mumbai",
        zone: "Central Suburbs",
        isFeatured: true,
        avgPriceSqft: 22500,
        appreciation_rate: 8.9,
        tagline: "Powai Annexe Prime Residential & Corporate Enclave",
        image: "/images/localities/default-locality.svg",
        price: "₹22.5k/sq.ft",
        description: "Upscale residential hub adjacent to Powai Lake featuring integrated high-rises and seamless JVLR metro connectivity."
    },
    {
        id: "kalyan-bhiwandi-road",
        name: "Kalyan-Bhiwandi Road",
        slug: "kalyan-bhiwandi-road",
        city: "Mumbai",
        zone: "MMR Extension",
        isFeatured: false,
        avgPriceSqft: 6800,
        appreciation_rate: 8.5,
        tagline: "Metro Line 5 Logistics & Integrated Townships",
        image: "/images/localities/default-locality.svg",
        price: "₹6.8k/sq.ft",
        description: "Fast-developing MMR growth node anchored by Metro Line 5 and major industrial-logistics corridors."
    },
    {
        id: "boisar",
        name: "Boisar",
        slug: "boisar",
        city: "Mumbai",
        zone: "MMR Extension",
        isFeatured: false,
        avgPriceSqft: 3800,
        appreciation_rate: 7.6,
        tagline: "MIDC Industrial Hub & Bullet Train Corridor",
        image: "/images/localities/default-locality.svg",
        price: "₹3.8k/sq.ft",
        description: "Affordable housing industrial growth corridor on the Western Railway and upcoming Mumbai-Ahmedabad Bullet Train route."
    },
    {
        id: "palghar",
        name: "Palghar",
        slug: "palghar",
        city: "Mumbai",
        zone: "MMR Extension",
        isFeatured: false,
        avgPriceSqft: 4200,
        appreciation_rate: 7.9,
        tagline: "District Headquarters & Coastal Green Belt",
        image: "/images/localities/default-locality.svg",
        price: "₹4.2k/sq.ft",
        description: "Administrative district center with suburban local connectivity and value-driven residential master communities."
    },
    {
        id: "byculla",
        name: "Byculla",
        slug: "byculla",
        city: "Mumbai",
        zone: "South Mumbai",
        isFeatured: true,
        avgPriceSqft: 38000,
        appreciation_rate: 9.1,
        tagline: "Heritage South Mumbai & Botanical Garden High-Rises",
        image: "/images/localities/default-locality.svg",
        price: "₹38.0k/sq.ft",
        description: "Historic South Mumbai precinct overlooking Rani Baug zoo gardens and the Mumbai Harbour Eastern Freeway."
    },
    {
        id: "sewri",
        name: "Sewri",
        slug: "sewri",
        city: "Mumbai",
        zone: "South Mumbai",
        isFeatured: true,
        avgPriceSqft: 36500,
        appreciation_rate: 11.2,
        tagline: "Atal Setu (MTHL) Landing & Flamingos Bay Front",
        image: "/images/localities/default-locality.svg",
        price: "₹36.5k/sq.ft",
        description: "The primary Mumbai landfall of the 21.8 km Atal Setu Trans-Harbour Link with spectacular sea and flamingo views."
    },
    {
        id: "parel",
        name: "Parel",
        slug: "parel",
        city: "Mumbai",
        zone: "Central Suburbs",
        isFeatured: true,
        avgPriceSqft: 42000,
        appreciation_rate: 8.8,
        tagline: "Corporate Headquarters & Luxury Skyline Enclave",
        image: "/images/localities/default-locality.svg",
        price: "₹42.0k/sq.ft",
        description: "Premier financial district and luxury residential cluster in Central Mumbai with ultra-tall skyscraper towers."
    },
    {
        id: "lower-parel",
        name: "Lower Parel",
        slug: "lower-parel",
        city: "Mumbai",
        zone: "Central Suburbs",
        isFeatured: true,
        avgPriceSqft: 46000,
        appreciation_rate: 9.0,
        tagline: "High Street Phoenix, Michelin Dining & Skyscraper Residences",
        image: "/images/localities/default-locality.svg",
        price: "₹46.0k/sq.ft",
        description: "The luxury lifestyle and commercial epicenter of Mumbai with premier corporate parks and ultra-exclusive residences."
    },
    {
        id: "kurla-west",
        name: "Kurla West",
        slug: "kurla-west",
        city: "Mumbai",
        zone: "Central Suburbs",
        isFeatured: false,
        avgPriceSqft: 21000,
        appreciation_rate: 8.4,
        tagline: "BKC Annexe & Strategic Transit Interchange",
        image: "/images/localities/default-locality.svg",
        price: "₹21.0k/sq.ft",
        description: "Centrally located urban hub immediately adjacent to Bandra-Kurla Complex (BKC) and Phoenix Marketcity."
    }
];

for (const nl of newLocalities) {
    if (!locations.find(l => l.slug === nl.slug || l.name.toLowerCase() === nl.name.toLowerCase())) {
        locations.push({
            ...nl,
            projectCount: 0,
            count: 0
        });
    }
}
console.log(`Total localities after addition: ${locations.length}`);

// 2. New Builders to add
const newBuilders = [
    {
        id: "b-peninsula-land",
        name: "Peninsula Land Ltd",
        slug: "peninsula-land",
        logo: "/images/builders/peninsula-land.svg",
        heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        description: "Peninsula Land Ltd (Ashok Piramal Group) is one of India's foremost corporate real estate developers, pioneering landmark towers like Ashok Towers and Peninsula Business Park in Mumbai, luxury second homes in Lonavala & Alibaug, and master townships in Pune.",
        establishedYear: 1871,
        experience: 155,
        totalProjects: 16,
        ongoingProjects: 6,
        locations: ["Mumbai", "Pune", "Lonavala", "Alibaug", "Karjat"],
        trustScore: 4.8,
        isVerified: true
    },
    {
        id: "b-wadhwa",
        name: "The Wadhwa Group",
        slug: "wadhwa-group",
        logo: "/images/builders/wadhwa-group.svg",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        description: "With over 5 decades of trusted heritage, The Wadhwa Group is acclaimed for its proprietary 'Ventilit' design philosophy emphasizing optimal sunlight and cross-ventilation across Mumbai, Navi Mumbai, and Karjat.",
        establishedYear: 1969,
        experience: 57,
        totalProjects: 12,
        ongoingProjects: 5,
        locations: ["Mumbai", "Navi Mumbai", "Karjat"],
        trustScore: 4.8,
        isVerified: true
    },
    {
        id: "b-pushpam",
        name: "Pushpam Group",
        slug: "pushpam-group",
        logo: "/images/builders/pushpam-group.svg",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        description: "Pushpam Group specializes in managed luxury resort homes and weekend holiday communities offering assured rental returns and lifestyle amenities in Karjat and Maharashtra's green belt.",
        establishedYear: 2012,
        experience: 14,
        totalProjects: 4,
        ongoingProjects: 2,
        locations: ["Karjat"],
        trustScore: 4.6,
        isVerified: true
    },
    {
        id: "b-usha-breco",
        name: "Usha Breco Realty",
        slug: "usha-breco",
        logo: "/images/builders/usha-breco.svg",
        heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        description: "Usha Breco Realty is the real estate development arm of Usha Martin Group, delivering hillside second home communities and scenic villa developments in Karjat.",
        establishedYear: 2008,
        experience: 18,
        totalProjects: 3,
        ongoingProjects: 1,
        locations: ["Karjat"],
        trustScore: 4.6,
        isVerified: true
    },
    {
        id: "b-nirvana-realty",
        name: "Nirvana Realty",
        slug: "nirvana-realty",
        logo: "/images/builders/nirvana-realty.svg",
        heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
        description: "Pioneers of thematic weekend home communities in Maharashtra, Nirvana Realty develops riverfront and forest villa estates in Karjat and Wada.",
        establishedYear: 2006,
        experience: 20,
        totalProjects: 5,
        ongoingProjects: 2,
        locations: ["Karjat"],
        trustScore: 4.6,
        isVerified: true
    },
    {
        id: "b-isprava",
        name: "Isprava Luxury Villas",
        slug: "isprava",
        logo: "/images/builders/isprava.svg",
        heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
        description: "Isprava is India's leading luxury home company, crafting bespoke, fully furnished Portuguese and Mediterranean style private villas across Alibaug, Goa, and Coonoor.",
        establishedYear: 2016,
        experience: 10,
        totalProjects: 8,
        ongoingProjects: 4,
        locations: ["Alibaug"],
        trustScore: 4.9,
        isVerified: true
    },
    {
        id: "b-xrbia",
        name: "Xrbia Developers",
        slug: "xrbia",
        logo: "/images/builders/xrbia.svg",
        heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        description: "Xrbia Developers develops large-scale smart master-planned townships with compact, efficient homes and riverfront green spaces across Karjat, Hinjewadi, and Talegaon.",
        establishedYear: 2012,
        experience: 14,
        totalProjects: 10,
        ongoingProjects: 3,
        locations: ["Karjat", "Pune"],
        trustScore: 4.5,
        isVerified: true
    },
    {
        id: "b-sunstone",
        name: "Sunstone Developers",
        slug: "sunstone",
        logo: "/images/builders/sunstone.svg",
        heroImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
        description: "Sunstone Developers crafts boutique coastal residences, beach apartments, and private courtyard villas in Alibaug and Maharashtra's coastal belt.",
        establishedYear: 2015,
        experience: 11,
        totalProjects: 4,
        ongoingProjects: 2,
        locations: ["Alibaug"],
        trustScore: 4.6,
        isVerified: true
    },
    {
        id: "b-penta-realty",
        name: "Penta Realty",
        slug: "penta-realty",
        logo: "/images/builders/penta-realty.svg",
        heroImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
        description: "Penta Realty develops nature-integrated residential townships and hill-view second homes in the Karjat-Neral corridor.",
        establishedYear: 2014,
        experience: 12,
        totalProjects: 3,
        ongoingProjects: 1,
        locations: ["Karjat"],
        trustScore: 4.5,
        isVerified: true
    },
    {
        id: "b-canvas-alibaug",
        name: "The Canvas Alibaug",
        slug: "canvas-alibaug",
        logo: "/images/builders/canvas-alibaug.svg",
        heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
        description: "The Canvas Alibaug develops exclusive private pool villas with curated concierge services and tropical landscaping in Zirad, Alibaug.",
        establishedYear: 2018,
        experience: 8,
        totalProjects: 3,
        ongoingProjects: 1,
        locations: ["Alibaug"],
        trustScore: 4.7,
        isVerified: true
    },
    {
        id: "b-saffronstays",
        name: "SaffronStays Estates",
        slug: "saffronstays",
        logo: "/images/builders/saffronstays.svg",
        heroImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80",
        description: "SaffronStays Estates curates luxury private vacation homes and serviced estates across Alibaug, Lonavala, and Karjat with world-class hospitality.",
        establishedYear: 2015,
        experience: 11,
        totalProjects: 6,
        ongoingProjects: 2,
        locations: ["Alibaug", "Lonavala", "Karjat"],
        trustScore: 4.8,
        isVerified: true
    },
    {
        id: "b-epitome",
        name: "Epitome Developers",
        slug: "epitome",
        logo: "/images/builders/epitome.svg",
        heroImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80",
        description: "Epitome Developers creates premium waterfront estates, gated bayview residences, and bespoke beach homes in Mandwa and coastal Alibaug.",
        establishedYear: 2011,
        experience: 15,
        totalProjects: 4,
        ongoingProjects: 2,
        locations: ["Alibaug"],
        trustScore: 4.6,
        isVerified: true
    },
    {
        id: "b-alibaug-developers",
        name: "Alibaug Luxury Estates",
        slug: "alibaug-developers",
        logo: "/images/builders/alibaug-developers.svg",
        heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
        description: "Alibaug Luxury Estates develops gated residential enclaves, boutique apartments, and coastal plots in Alibaug Town and Varsoli.",
        establishedYear: 2010,
        experience: 16,
        totalProjects: 5,
        ongoingProjects: 2,
        locations: ["Alibaug"],
        trustScore: 4.6,
        isVerified: true
    }
];

for (const nb of newBuilders) {
    if (!builders.find(b => b.id === nb.id || b.slug === nb.slug)) {
        builders.push(nb);
    }
}
console.log(`Total builders after addition: ${builders.length}`);

// Asset pools for realistic imagery
const GALLERY_POOL = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
];

const MASTER_LAYOUT_POOL = [
    "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp",
    "https://keystoneliv.com/public/uploads/property/HlZPHQBAei2owiayJmxJZhkdXYVI8emWvLduM451.webp",
    "https://keystoneliv.com/public/uploads/property/yDwMknCek35yZxmMXjayGU9f3YNISUbtB2byb3jE.webp",
    "https://keystoneliv.com/public/uploads/property/hgiRTenojaVcHglxBXqRVHfjihUs6wuNa8Yl46OW.png",
    "https://keystoneliv.com/public/uploads/property/OrO96DlQ1BdtwMK7CAwta4xb2E56lGlQ1N3qwfrF.webp",
    "https://keystoneliv.com/public/uploads/property/dUBwkAaG7EfnFh6NDymuNR5UNLD1e3QTLxUcN08I.webp",
    "https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp"
];

const FLOOR_PLAN_POOL = [
    "https://keystoneliv.com/public/uploads/property/sk7FyGScerfdwSXPmZkNYGxMsPJf0x63qGejfDTU.webp",
    "https://keystoneliv.com/public/uploads/property/ONtlHyITcqbuIMJqeKNTTJxOUkd4FbrTj28o7hh9.webp",
    "https://keystoneliv.com/public/uploads/property/3PxeuRrw4eYgQ0cWzgG2Kgbdw4BwwSRi226tv5os.webp",
    "https://keystoneliv.com/public/uploads/property/evR9QMKWYPJ7mfXswMgWcM03r9vtzVYrhTLN1Yn2.png",
    "https://keystoneliv.com/public/uploads/property/zozJl3E2HhxQbEpe9Q90xFiPbJv4yhBg3pHXhqC9.png",
    "https://keystoneliv.com/public/uploads/property/CxlM9uIBn5S8zj7R50udJEA2xUAIgmgd0mDLOHo9.png",
    "https://keystoneliv.com/public/uploads/property/image (81).webp",
    "https://keystoneliv.com/public/uploads/property/image (82).webp",
    "https://keystoneliv.com/public/uploads/property/image (83).webp"
];

function createProjectItem(data) {
    const features = data.features || [
        "Clubhouse with Gymnasium",
        "Swimming Pool & Kids Splash Zone",
        "Landscaped Courtyard Gardens",
        "24x7 Multi-Tier Security & CCTV",
        "Children Play Area",
        "Jogging & Strolling Track"
    ];

    const specs = [
        { label: "Structure", value: "Earthquake resistant RCC framed structure conforming to IS code" },
        { label: "Flooring", value: "800x800mm premium glazed vitrified tiles in living, dining & bedrooms" },
        { label: "Kitchen", value: "Granite platform with stainless steel sink & glazed ceramic tile dado" },
        { label: "Toilets", value: "Premium sanitaryware & CP fittings (Kohler / Jaquar or equivalent)" },
        { label: "Electrical", value: "Concealed copper wiring with modular switches (Schneider / Legrand)" },
        { label: "Doors & Windows", value: "Laminated main door and heavy-duty powder coated aluminum sliding windows" }
    ];

    const faqs = [
        {
            question: `What is the MahaRERA registration number for ${data.title}?`,
            answer: `${data.title} is officially registered under MahaRERA registration number ${data.reraId}. Direct builder inventory with 100% zero brokerage through PROPSMART REALTY.`
        },
        {
            question: `What unit configurations and carpet areas are offered at ${data.title}?`,
            answer: `${data.title} offers ${data.configurations.join(", ")} residences with carpet areas spanning from ${data.configurationDetails[0].carpetArea} to ${data.configurationDetails[data.configurationDetails.length - 1].carpetArea}.`
        },
        {
            question: `What is the starting price for ${data.title}?`,
            answer: `Starting direct price for ${data.title} is ${data.exactPrice}, with configuration price range extending up to ${data.priceRange}.`
        },
        {
            question: `What is the possession timeline for ${data.title}?`,
            answer: `${data.title} is scheduled for handover by ${data.possessionDate}. Site visits and legal document checks can be booked directly.`
        }
    ];

    return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        builderId: data.builderId,
        location: data.location,
        city: data.city,
        priceRange: data.priceRange,
        exactPrice: data.exactPrice,
        pricePerSqft: data.pricePerSqft,
        configurations: data.configurations,
        configurationDetails: data.configurationDetails,
        status: data.status || "Under Construction",
        type: data.type || "Residential",
        possessionDate: data.possessionDate || "December 2026",
        image: data.image || GALLERY_POOL[0],
        images: data.images || GALLERY_POOL,
        heroImage: data.image || GALLERY_POOL[0],
        heroImageAlt: `${data.title} ${data.location}`,
        lat: data.lat,
        lng: data.lng,
        masterLayout: data.masterLayout || MASTER_LAYOUT_POOL[0],
        floorPlans: data.floorPlans || [FLOOR_PLAN_POOL[0], FLOOR_PLAN_POOL[1]],
        reraId: data.reraId,
        description: data.description,
        features: features,
        amenities: features,
        highlights: data.highlights || [
            "100% Zero Brokerage Partner",
            "MahaRERA Certified Development",
            "Prime Transit Connectivity",
            "Superior Construction Standards"
        ],
        specs: specs,
        faqs: faqs,
        verificationStatus: "Verified"
    };
}

// 3. New Projects List
const newProjectsData = [
    // === MAHINDRA LIFESPACES (PUNE) ===
    {
        id: "p-mahindra-nestwalk-pimpri",
        title: "Mahindra Nestwalk",
        slug: "mahindra-nestwalk",
        builderId: "b-mahindra",
        location: "Pimpri",
        city: "Pune",
        priceRange: "₹82.00 L - ₹1.45 Cr",
        exactPrice: "₹82.00 L",
        pricePerSqft: 9800,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Smart", carpetArea: "680 sq.ft", priceRange: "₹82.00 L" },
            { type: "2 BHK Grande", carpetArea: "765 sq.ft", priceRange: "₹92.00 L" },
            { type: "3 BHK Luxury", carpetArea: "990 sq.ft", priceRange: "₹1.25 Cr" },
            { type: "3 BHK Royale", carpetArea: "1150 sq.ft", priceRange: "₹1.45 Cr" }
        ],
        lat: 18.6279,
        lng: 73.8009,
        reraId: "P52100052341",
        description: "Mahindra Nestwalk in Pimpri, Pune offers IGBC certified sustainable 2 & 3 BHK residences with expansive green central courtyards and direct connectivity to the Old Pune-Mumbai Highway and metro."
    },
    {
        id: "p-mahindra-centralis-pimpri",
        title: "Mahindra Centralis",
        slug: "mahindra-centralis",
        builderId: "b-mahindra",
        location: "Pimpri",
        city: "Pune",
        priceRange: "₹65.00 L - ₹1.15 Cr",
        exactPrice: "₹65.00 L",
        pricePerSqft: 9400,
        configurations: ["1 BHK", "2 BHK"],
        configurationDetails: [
            { type: "1 BHK Urban", carpetArea: "460 sq.ft", priceRange: "₹65.00 L" },
            { type: "2 BHK Smart", carpetArea: "680 sq.ft", priceRange: "₹88.00 L" },
            { type: "2 BHK Royale", carpetArea: "790 sq.ft", priceRange: "₹1.15 Cr" }
        ],
        lat: 18.6265,
        lng: 73.8021,
        reraId: "P52100019234",
        status: "Ready to Move",
        description: "Mahindra Centralis is an iconic high-rise development in Pimpri, featuring 4 elegant towers surrounding a grand central landscaped podium with premium lifestyle amenities."
    },
    {
        id: "p-mahindra-antheia-pimpri",
        title: "Mahindra Antheia",
        slug: "mahindra-antheia",
        builderId: "b-mahindra",
        location: "Pimpri",
        city: "Pune",
        priceRange: "₹78.00 L - ₹1.65 Cr",
        exactPrice: "₹78.00 L",
        pricePerSqft: 9600,
        configurations: ["1 BHK", "2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "1 BHK Suite", carpetArea: "480 sq.ft", priceRange: "₹78.00 L" },
            { type: "2 BHK Classic", carpetArea: "720 sq.ft", priceRange: "₹95.00 L" },
            { type: "3 BHK Elegance", carpetArea: "1050 sq.ft", priceRange: "₹1.40 Cr" },
            { type: "3 BHK Penthouse", carpetArea: "1280 sq.ft", priceRange: "₹1.65 Cr" }
        ],
        lat: 18.6291,
        lng: 73.8035,
        reraId: "P52100000219",
        status: "Ready to Move",
        description: "Mahindra Antheia spans 16 sprawling acres in Pimpri, delivering luxury high-rises with floodlit tennis courts, Olympic-size swimming pool, and dedicated clubhouse."
    },
    {
        id: "p-mahindra-royale-pcmc",
        title: "Mahindra Royale",
        slug: "mahindra-royale",
        builderId: "b-mahindra",
        location: "Pimpri",
        city: "Pune",
        priceRange: "₹85.00 L - ₹1.55 Cr",
        exactPrice: "₹85.00 L",
        pricePerSqft: 9200,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Deluxe", carpetArea: "740 sq.ft", priceRange: "₹85.00 L" },
            { type: "3 BHK Grande", carpetArea: "1100 sq.ft", priceRange: "₹1.35 Cr" },
            { type: "3 BHK Imperial", carpetArea: "1250 sq.ft", priceRange: "₹1.55 Cr" }
        ],
        lat: 18.6310,
        lng: 73.8042,
        reraId: "P52100000452",
        status: "Ready to Move",
        description: "Mahindra Royale offers royal living in the heart of PCMC with palatial cross-ventilated residences, clubhouse, squash court, and beautifully maintained grounds."
    },
    {
        id: "p-mahindra-woods-pimpri",
        title: "Mahindra Woods",
        slug: "mahindra-woods",
        builderId: "b-mahindra",
        location: "Pimpri",
        city: "Pune",
        priceRange: "₹80.00 L - ₹1.35 Cr",
        exactPrice: "₹80.00 L",
        pricePerSqft: 9100,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Comfort", carpetArea: "710 sq.ft", priceRange: "₹80.00 L" },
            { type: "3 BHK Luxury", carpetArea: "1020 sq.ft", priceRange: "₹1.18 Cr" },
            { type: "3 BHK Grand", carpetArea: "1180 sq.ft", priceRange: "₹1.35 Cr" }
        ],
        lat: 18.6285,
        lng: 73.8015,
        reraId: "P52100000678",
        status: "Ready to Move",
        description: "Mahindra Woods in Pimpri delivers nature-centric living with dense tree canopies, multi-tier security, and immediate access to IT parks and highway links."
    },

    // === MAHINDRA LIFESPACES (MUMBAI) ===
    {
        id: "p-mahindra-alcove-chandivali",
        title: "Mahindra Alcove",
        slug: "mahindra-alcove",
        builderId: "b-mahindra",
        location: "Chandivali",
        city: "Mumbai",
        priceRange: "₹1.55 Cr - ₹3.10 Cr",
        exactPrice: "₹1.55 Cr",
        pricePerSqft: 22800,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Compact", carpetArea: "680 sq.ft", priceRange: "₹1.55 Cr" },
            { type: "2 BHK Luxury", carpetArea: "770 sq.ft", priceRange: "₹1.85 Cr" },
            { type: "3 BHK Elegance", carpetArea: "1040 sq.ft", priceRange: "₹2.65 Cr" },
            { type: "3 BHK Royale", carpetArea: "1220 sq.ft", priceRange: "₹3.10 Cr" }
        ],
        lat: 19.1128,
        lng: 72.8954,
        reraId: "P51800022572",
        description: "Mahindra Alcove in Chandivali (Powai Annexe) is an eco-luxury residential enclave featuring Miyawaki urban forests, rooftop jogging tracks, and EV charging stations."
    },
    {
        id: "p-mahindra-vicino-andheri",
        title: "Mahindra Vicino",
        slug: "mahindra-vicino",
        builderId: "b-mahindra",
        location: "Andheri West",
        city: "Mumbai",
        priceRange: "₹1.95 Cr - ₹3.80 Cr",
        exactPrice: "₹1.95 Cr",
        pricePerSqft: 25400,
        configurations: ["1 BHK", "2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "1 BHK Urban", carpetArea: "460 sq.ft", priceRange: "₹1.95 Cr" },
            { type: "2 BHK Premium", carpetArea: "720 sq.ft", priceRange: "₹2.45 Cr" },
            { type: "3 BHK Grand", carpetArea: "1100 sq.ft", priceRange: "₹3.80 Cr" }
        ],
        lat: 19.1197,
        lng: 72.8464,
        reraId: "P51800022034",
        description: "Mahindra Vicino in Andheri offers boutique, biophilic homes with French windows, automated smart climate controls, and proximity to Western Express Highway and Metro Line 1."
    },
    {
        id: "p-mahindra-roots-kandivali",
        title: "Mahindra Roots",
        slug: "mahindra-roots",
        builderId: "b-mahindra",
        location: "Kandivali East",
        city: "Mumbai",
        priceRange: "₹1.45 Cr - ₹2.35 Cr",
        exactPrice: "₹1.45 Cr",
        pricePerSqft: 21500,
        configurations: ["2 BHK"],
        configurationDetails: [
            { type: "2 BHK Smart", carpetArea: "650 sq.ft", priceRange: "₹1.45 Cr" },
            { type: "2 BHK Grande", carpetArea: "750 sq.ft", priceRange: "₹1.85 Cr" },
            { type: "2 BHK Royale", carpetArea: "840 sq.ft", priceRange: "₹2.35 Cr" }
        ],
        lat: 19.2045,
        lng: 72.8687,
        reraId: "P51800016833",
        status: "Ready to Move",
        description: "Mahindra Roots in Kandivali East represents contemporary urban living with unobstructed views of Sanjay Gandhi National Park and 35+ curated lifestyle amenities."
    },
    {
        id: "p-mahindra-vista-kandivali",
        title: "Mahindra Vista",
        slug: "mahindra-vista",
        builderId: "b-mahindra",
        location: "Kandivali East",
        city: "Mumbai",
        priceRange: "₹1.50 Cr - ₹3.40 Cr",
        exactPrice: "₹1.50 Cr",
        pricePerSqft: 22000,
        configurations: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
        configurationDetails: [
            { type: "1 BHK Urban", carpetArea: "450 sq.ft", priceRange: "₹1.50 Cr" },
            { type: "2 BHK Comfort", carpetArea: "680 sq.ft", priceRange: "₹1.95 Cr" },
            { type: "3 BHK Luxury", carpetArea: "1020 sq.ft", priceRange: "₹2.80 Cr" },
            { type: "4 BHK Presidential", carpetArea: "1380 sq.ft", priceRange: "₹3.40 Cr" }
        ],
        lat: 19.2088,
        lng: 72.8710,
        reraId: "P51800054619",
        status: "New Launch",
        description: "Mahindra Vista is a 7.7-acre flagship master community in Kandivali East featuring biophilic architectural towers, bi-level clubhouses, and zero vehicular movement podium."
    },
    {
        id: "p-mahindra-iris-malad",
        title: "Mahindra Iris",
        slug: "mahindra-iris",
        builderId: "b-mahindra",
        location: "Goregaon East",
        city: "Mumbai",
        priceRange: "₹1.80 Cr - ₹2.75 Cr",
        exactPrice: "₹1.80 Cr",
        pricePerSqft: 23200,
        configurations: ["2 BHK"],
        configurationDetails: [
            { type: "2 BHK Luxury", carpetArea: "760 sq.ft", priceRange: "₹1.80 Cr" },
            { type: "2 BHK Royale", carpetArea: "890 sq.ft", priceRange: "₹2.75 Cr" }
        ],
        lat: 19.1865,
        lng: 72.8489,
        reraId: "P51800000891",
        status: "Ready to Move",
        description: "Mahindra Iris offers boutique luxury living with private sundecks, landscaped sensory gardens, and swift access to Link Road and S.V. Road."
    },
    {
        id: "p-mahindra-eminente-goregaon",
        title: "Mahindra Eminente",
        slug: "mahindra-eminente",
        builderId: "b-mahindra",
        location: "Goregaon East",
        city: "Mumbai",
        priceRange: "₹2.20 Cr - ₹4.50 Cr",
        exactPrice: "₹2.20 Cr",
        pricePerSqft: 24500,
        configurations: ["2 BHK", "3 BHK", "4 BHK"],
        configurationDetails: [
            { type: "2 BHK Elite", carpetArea: "850 sq.ft", priceRange: "₹2.20 Cr" },
            { type: "3 BHK Grand", carpetArea: "1280 sq.ft", priceRange: "₹3.40 Cr" },
            { type: "4 BHK Royal Penthouse", carpetArea: "1750 sq.ft", priceRange: "₹4.50 Cr" }
        ],
        lat: 19.1645,
        lng: 72.8598,
        reraId: "P51800000954",
        status: "Ready to Move",
        description: "Mahindra Eminente in Goregaon West is an ultra-luxury landmark featuring double-height entrance lobbies, heated indoor pools, and skyline viewing decks."
    },
    {
        id: "p-mahindra-splendour-bhandup",
        title: "Mahindra Splendour",
        slug: "mahindra-splendour",
        builderId: "b-mahindra",
        location: "Bhandup West",
        city: "Mumbai",
        priceRange: "₹1.35 Cr - ₹2.90 Cr",
        exactPrice: "₹1.35 Cr",
        pricePerSqft: 19800,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Classic", carpetArea: "680 sq.ft", priceRange: "₹1.35 Cr" },
            { type: "2 BHK Luxury", carpetArea: "790 sq.ft", priceRange: "₹1.75 Cr" },
            { type: "3 BHK Grande", carpetArea: "1150 sq.ft", priceRange: "₹2.90 Cr" }
        ],
        lat: 19.1512,
        lng: 72.9345,
        reraId: "P51800000341",
        status: "Ready to Move",
        description: "Mahindra Splendour on LBS Marg, Bhandup West, spans 15 acres of lush landscaped expanses with clubhouse, multi-sport courts, and seamless highway access."
    },
    {
        id: "p-mahindra-happinest-kalyan",
        title: "Mahindra Happinest Kalyan",
        slug: "mahindra-happinest-kalyan",
        builderId: "b-mahindra",
        location: "Kalyan-Bhiwandi Road",
        city: "Mumbai",
        priceRange: "₹36.00 L - ₹68.00 L",
        exactPrice: "₹36.00 L",
        pricePerSqft: 6800,
        configurations: ["1 BHK", "2 BHK"],
        configurationDetails: [
            { type: "1 BHK Smart", carpetArea: "420 sq.ft", priceRange: "₹36.00 L" },
            { type: "2 BHK Family", carpetArea: "620 sq.ft", priceRange: "₹54.00 L" },
            { type: "2 BHK Grande", carpetArea: "710 sq.ft", priceRange: "₹68.00 L" }
        ],
        lat: 19.2612,
        lng: 73.1124,
        reraId: "P51700022981",
        description: "Mahindra Happinest Kalyan is an integrated 9-acre township with 50+ amenities, cricket pitch, amphitheater, and direct access to upcoming Metro Line 5."
    },
    {
        id: "p-mahindra-happinest-boisar",
        title: "Mahindra Happinest Boisar",
        slug: "mahindra-happinest-boisar",
        builderId: "b-mahindra",
        location: "Boisar",
        city: "Mumbai",
        priceRange: "₹19.50 L - ₹38.00 L",
        exactPrice: "₹19.50 L",
        pricePerSqft: 3900,
        configurations: ["1 RK", "1 BHK", "2 BHK"],
        configurationDetails: [
            { type: "1 RK Studio", carpetArea: "280 sq.ft", priceRange: "₹19.50 L" },
            { type: "1 BHK Comfort", carpetArea: "390 sq.ft", priceRange: "₹26.00 L" },
            { type: "2 BHK Family", carpetArea: "580 sq.ft", priceRange: "₹38.00 L" }
        ],
        lat: 19.8021,
        lng: 72.7534,
        reraId: "P99000000412",
        status: "Ready to Move",
        description: "Mahindra Happinest Boisar offers modern, affordable living with private gardens, dedicated medical clinic, commercial retail arcade, and children play zones."
    },
    {
        id: "p-mahindra-happinest-palghar",
        title: "Mahindra Happinest Palghar",
        slug: "mahindra-happinest-palghar",
        builderId: "b-mahindra",
        location: "Palghar",
        city: "Mumbai",
        priceRange: "₹22.00 L - ₹42.00 L",
        exactPrice: "₹22.00 L",
        pricePerSqft: 4200,
        configurations: ["1 BHK", "2 BHK"],
        configurationDetails: [
            { type: "1 BHK Urban", carpetArea: "380 sq.ft", priceRange: "₹22.00 L" },
            { type: "2 BHK Smart", carpetArea: "560 sq.ft", priceRange: "₹34.00 L" },
            { type: "2 BHK Deluxe", carpetArea: "640 sq.ft", priceRange: "₹42.00 L" }
        ],
        lat: 19.6967,
        lng: 72.7654,
        reraId: "P99000025419",
        description: "Mahindra Happinest Palghar features master-planned low-rise residences with energy-efficient LED street lighting, rainwater harvesting, and lush community gardens."
    },

    // === PENINULA LAND LTD (MUMBAI, PUNE, LONAVALA, ALIBAUG, KARJAT) ===
    {
        id: "p-peninsula-salsette-27",
        title: "Peninsula Salsette 27",
        slug: "peninsula-salsette-27",
        builderId: "b-peninsula-land",
        location: "Byculla",
        city: "Mumbai",
        priceRange: "₹4.85 Cr - ₹9.50 Cr",
        exactPrice: "₹4.85 Cr",
        pricePerSqft: 39500,
        configurations: ["2 BHK", "3 BHK", "4 BHK"],
        configurationDetails: [
            { type: "2 BHK Luxury", carpetArea: "890 sq.ft", priceRange: "₹4.85 Cr" },
            { type: "3 BHK Grand", carpetArea: "1350 sq.ft", priceRange: "₹6.80 Cr" },
            { type: "4 BHK Presidential", carpetArea: "1850 sq.ft", priceRange: "₹9.50 Cr" }
        ],
        lat: 18.9754,
        lng: 72.8365,
        reraId: "P51900000642",
        description: "Peninsula Salsette 27 is an ultra-exclusive skyscraper landmark in Byculla, South Mumbai, offering panoramic vistas of the Arabian Sea, Victoria Gardens, and Eastern Harbour."
    },
    {
        id: "p-peninsula-celestia-spaces",
        title: "Celestia Spaces",
        slug: "celestia-spaces",
        builderId: "b-peninsula-land",
        location: "Sewri",
        city: "Mumbai",
        priceRange: "₹3.60 Cr - ₹6.80 Cr",
        exactPrice: "₹3.60 Cr",
        pricePerSqft: 36000,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Sea View", carpetArea: "840 sq.ft", priceRange: "₹3.60 Cr" },
            { type: "3 BHK Royal Bay View", carpetArea: "1280 sq.ft", priceRange: "₹5.40 Cr" },
            { type: "3 BHK Grande", carpetArea: "1450 sq.ft", priceRange: "₹6.80 Cr" }
        ],
        lat: 18.9987,
        lng: 72.8541,
        reraId: "P51900005421",
        status: "Ready to Move",
        description: "Celestia Spaces in Sewri offers unmatched luxury with uninterrupted views of the Mumbai Harbour, flamingos sanctuary, and Atal Setu (MTHL) connectivity."
    },
    {
        id: "p-peninsula-ashok-towers",
        title: "Ashok Towers",
        slug: "ashok-towers",
        builderId: "b-peninsula-land",
        location: "Parel",
        city: "Mumbai",
        priceRange: "₹4.50 Cr - ₹12.00 Cr",
        exactPrice: "₹4.50 Cr",
        pricePerSqft: 43000,
        configurations: ["2 BHK", "3 BHK", "4 BHK", "5 BHK"],
        configurationDetails: [
            { type: "2 BHK Luxury", carpetArea: "950 sq.ft", priceRange: "₹4.50 Cr" },
            { type: "3 BHK Grand Suite", carpetArea: "1420 sq.ft", priceRange: "₹6.90 Cr" },
            { type: "4 BHK Royal Penthouse", carpetArea: "2150 sq.ft", priceRange: "₹10.50 Cr" },
            { type: "5 BHK Sky Mansion", carpetArea: "2800 sq.ft", priceRange: "₹12.00 Cr" }
        ],
        lat: 19.0012,
        lng: 72.8423,
        reraId: "P51900000101",
        status: "Ready to Move",
        description: "Ashok Towers in Parel is one of Mumbai's most iconic luxury gated residential communities, spanning 18 acres with Olympic-class sports facilities and clubhouse."
    },
    {
        id: "p-peninsula-ashok-gardens",
        title: "Ashok Gardens",
        slug: "ashok-gardens",
        builderId: "b-peninsula-land",
        location: "Sewri",
        city: "Mumbai",
        priceRange: "₹3.90 Cr - ₹7.80 Cr",
        exactPrice: "₹3.90 Cr",
        pricePerSqft: 37500,
        configurations: ["2 BHK", "3 BHK", "4 BHK"],
        configurationDetails: [
            { type: "2 BHK Luxury", carpetArea: "910 sq.ft", priceRange: "₹3.90 Cr" },
            { type: "3 BHK Royale", carpetArea: "1380 sq.ft", priceRange: "₹5.80 Cr" },
            { type: "4 BHK Presidential", carpetArea: "1850 sq.ft", priceRange: "₹7.80 Cr" }
        ],
        lat: 18.9954,
        lng: 72.8512,
        reraId: "P51900000115",
        status: "Ready to Move",
        description: "Ashok Gardens in Sewri features 12 acres of tranquil landscaped grounds, grand swimming pool, private squash courts, and sea-facing sundecks."
    },
    {
        id: "p-peninsula-spenta",
        title: "Peninsula Spenta",
        slug: "peninsula-spenta",
        builderId: "b-peninsula-land",
        location: "Lower Parel",
        city: "Mumbai",
        priceRange: "₹5.50 Cr - ₹11.50 Cr",
        exactPrice: "₹5.50 Cr",
        pricePerSqft: 47000,
        configurations: ["3 BHK", "4 BHK"],
        configurationDetails: [
            { type: "3 BHK Sky Suite", carpetArea: "1480 sq.ft", priceRange: "₹5.50 Cr" },
            { type: "4 BHK Penthouse", carpetArea: "2200 sq.ft", priceRange: "₹11.50 Cr" }
        ],
        lat: 18.9945,
        lng: 72.8291,
        reraId: "P51900000287",
        status: "Ready to Move",
        description: "Peninsula Spenta in Lower Parel delivers bespoke ultra-luxury residences situated inside the iconic Mathuradas Mill compound alongside Mumbai's finest dining establishments."
    },
    {
        id: "p-peninsula-park-heights",
        title: "Peninsula Park Heights",
        slug: "peninsula-park-heights",
        builderId: "b-peninsula-land",
        location: "Lower Parel",
        city: "Mumbai",
        priceRange: "₹6.20 Cr - ₹14.00 Cr",
        exactPrice: "₹6.20 Cr",
        pricePerSqft: 48500,
        configurations: ["3 BHK", "4 BHK", "5 BHK"],
        configurationDetails: [
            { type: "3 BHK Elite", carpetArea: "1550 sq.ft", priceRange: "₹6.20 Cr" },
            { type: "4 BHK Imperial", carpetArea: "2350 sq.ft", priceRange: "₹10.50 Cr" },
            { type: "5 BHK Duplex Palace", carpetArea: "3100 sq.ft", priceRange: "₹14.00 Cr" }
        ],
        lat: 18.9961,
        lng: 72.8278,
        reraId: "P51900000305",
        status: "Ready to Move",
        description: "Peninsula Park Heights is an ultra-exclusive private residential tower adjoining Peninsula Business Park, curated for corporate leaders and high-net-worth investors."
    },
    {
        id: "p-peninsula-technopark",
        title: "Peninsula Technopark",
        slug: "peninsula-technopark",
        builderId: "b-peninsula-land",
        location: "Kurla West",
        city: "Mumbai",
        priceRange: "₹1.40 Cr - ₹3.20 Cr",
        exactPrice: "₹1.40 Cr",
        pricePerSqft: 21000,
        configurations: ["Commercial Office", "Executive Suite"],
        type: "Commercial",
        configurationDetails: [
            { type: "650 sq.ft Office Suite", carpetArea: "650 sq.ft", priceRange: "₹1.40 Cr" },
            { type: "1,200 sq.ft Corporate Floor", carpetArea: "1200 sq.ft", priceRange: "₹2.50 Cr" },
            { type: "1,550 sq.ft Executive Wing", carpetArea: "1550 sq.ft", priceRange: "₹3.20 Cr" }
        ],
        lat: 19.0712,
        lng: 72.8821,
        reraId: "P51800000490",
        status: "Ready to Move",
        description: "Peninsula Technopark in Kurla West offers grade-A corporate offices and tech suites right off BKC with high rental yields and institutional maintenance."
    },
    {
        id: "p-peninsula-ashok-meadows",
        title: "Ashok Meadows",
        slug: "ashok-meadows",
        builderId: "b-peninsula-land",
        location: "Hinjewadi",
        city: "Pune",
        priceRange: "₹88.00 L - ₹1.75 Cr",
        exactPrice: "₹88.00 L",
        pricePerSqft: 8800,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Luxury", carpetArea: "765 sq.ft", priceRange: "₹88.00 L" },
            { type: "2.5 BHK Royale", carpetArea: "910 sq.ft", priceRange: "₹1.10 Cr" },
            { type: "3 BHK Grand", carpetArea: "1150 sq.ft", priceRange: "₹1.45 Cr" },
            { type: "3 BHK Duplex", carpetArea: "1380 sq.ft", priceRange: "₹1.75 Cr" }
        ],
        lat: 18.5912,
        lng: 73.7421,
        reraId: "P52100000889",
        status: "Ready to Move",
        description: "Ashok Meadows in Hinjewadi Phase 1, Pune is a prestigious 15-acre resort-style residential community with infinity edge pool, floodlit tennis courts, and grand clubhouse."
    },
    {
        id: "p-peninsula-ashok-astoria",
        title: "Ashok Astoria",
        slug: "ashok-astoria",
        builderId: "b-peninsula-land",
        location: "Hinjewadi",
        city: "Pune",
        priceRange: "₹75.00 L - ₹1.35 Cr",
        exactPrice: "₹75.00 L",
        pricePerSqft: 8600,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Smart", carpetArea: "690 sq.ft", priceRange: "₹75.00 L" },
            { type: "2 BHK Grande", carpetArea: "780 sq.ft", priceRange: "₹92.00 L" },
            { type: "3 BHK Luxury", carpetArea: "1050 sq.ft", priceRange: "₹1.35 Cr" }
        ],
        lat: 18.5935,
        lng: 73.7450,
        reraId: "P52100001045",
        status: "Ready to Move",
        description: "Ashok Astoria in Hinjewadi offers boutique architectural residences with landscaped podium gardens, indoor games lounge, and direct access to IT hubs."
    },
    {
        id: "p-peninsula-address-one",
        title: "Peninsula Address One",
        slug: "peninsula-address-one",
        builderId: "b-peninsula-land",
        location: "Gahunje",
        city: "Pune",
        priceRange: "₹38.00 L - ₹85.00 L",
        exactPrice: "₹38.00 L",
        pricePerSqft: 6900,
        configurations: ["1 BHK", "2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "1 BHK Urban", carpetArea: "440 sq.ft", priceRange: "₹38.00 L" },
            { type: "2 BHK Comfort", carpetArea: "640 sq.ft", priceRange: "₹56.00 L" },
            { type: "3 BHK Grand", carpetArea: "890 sq.ft", priceRange: "₹85.00 L" }
        ],
        lat: 18.6723,
        lng: 73.7012,
        reraId: "P52100019561",
        description: "Peninsula Address One in Gahunje is a 50-acre gated township adjoining MCA International Cricket Stadium and Mumbai-Pune Expressway with open recreational grounds."
    },
    {
        id: "p-peninsula-address-one-phase-2",
        title: "Peninsula Address One Phase 2",
        slug: "peninsula-address-one-phase-2",
        builderId: "b-peninsula-land",
        location: "Gahunje",
        city: "Pune",
        priceRange: "₹42.00 L - ₹95.00 L",
        exactPrice: "₹42.00 L",
        pricePerSqft: 7100,
        configurations: ["1 BHK", "2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "1 BHK Smart", carpetArea: "460 sq.ft", priceRange: "₹42.00 L" },
            { type: "2 BHK Grande", carpetArea: "680 sq.ft", priceRange: "₹62.00 L" },
            { type: "3 BHK Royale", carpetArea: "950 sq.ft", priceRange: "₹95.00 L" }
        ],
        lat: 18.6735,
        lng: 73.7025,
        reraId: "P52100026789",
        description: "Phase 2 of Peninsula Address One features upgraded lifestyle towers with rooftop gazebos, dedicated sports academy, and landscaped cycling tracks."
    },
    {
        id: "p-peninsula-ashok-nirvaan",
        title: "Peninsula Ashok Nirvaan",
        slug: "peninsula-ashok-nirvaan",
        builderId: "b-peninsula-land",
        location: "Khandala",
        city: "Lonavala",
        priceRange: "₹4.50 Cr - ₹9.80 Cr",
        exactPrice: "₹4.50 Cr",
        pricePerSqft: 18500,
        configurations: ["3 BHK Villa", "4 BHK Villa", "5 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Hillside Villa", carpetArea: "2450 sq.ft", priceRange: "₹4.50 Cr" },
            { type: "4 BHK Royal Villa with Pool", carpetArea: "3200 sq.ft", priceRange: "₹7.20 Cr" },
            { type: "5 BHK Signature Estate", carpetArea: "4200 sq.ft", priceRange: "₹9.80 Cr" }
        ],
        lat: 18.7512,
        lng: 73.3765,
        reraId: "P52100000781",
        status: "Ready to Move",
        description: "Peninsula Ashok Nirvaan in Khandala is an elite private villa community offering bespoke second homes with private infinity pools and sweeping views of Duke's Nose."
    },
    {
        id: "p-peninsula-valley-vista",
        title: "Peninsula Valley Vista",
        slug: "peninsula-valley-vista",
        builderId: "b-peninsula-land",
        location: "Khandala",
        city: "Lonavala",
        priceRange: "₹2.80 Cr - ₹5.40 Cr",
        exactPrice: "₹2.80 Cr",
        pricePerSqft: 16000,
        configurations: ["3 BHK", "4 BHK"],
        configurationDetails: [
            { type: "3 BHK Hill View Suite", carpetArea: "1550 sq.ft", priceRange: "₹2.80 Cr" },
            { type: "4 BHK Valley Penthouse", carpetArea: "2100 sq.ft", priceRange: "₹5.40 Cr" }
        ],
        lat: 18.7545,
        lng: 73.3789,
        reraId: "P52100015421",
        description: "Peninsula Valley Vista offers luxury holiday condominiums nestled in the misty valleys of Khandala Foothills with heated pool and wellness spa."
    },
    {
        id: "p-peninsula-alibaug-coastal",
        title: "Peninsula Alibaug Coastal Estates",
        slug: "peninsula-alibaug-coastal",
        builderId: "b-peninsula-land",
        location: "Mandwa Jetty Corridor",
        city: "Alibaug",
        priceRange: "₹3.50 Cr - ₹8.50 Cr",
        exactPrice: "₹3.50 Cr",
        pricePerSqft: 17500,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Beach Villa", carpetArea: "2100 sq.ft", priceRange: "₹3.50 Cr" },
            { type: "4 BHK Coastal Mansion", carpetArea: "3400 sq.ft", priceRange: "₹8.50 Cr" }
        ],
        lat: 18.7845,
        lng: 72.8421,
        reraId: "P52000034125",
        description: "Peninsula Alibaug Coastal Estates delivers serene tropical villa living within minutes of Mandwa Jetty, featuring sprawling landscaped lawns and private swimming pools."
    },
    {
        id: "p-peninsula-palm-grove",
        title: "Peninsula Palm Grove Villas",
        slug: "peninsula-palm-grove",
        builderId: "b-peninsula-land",
        location: "Awas Beach",
        city: "Alibaug",
        priceRange: "₹4.20 Cr - ₹9.20 Cr",
        exactPrice: "₹4.20 Cr",
        pricePerSqft: 18200,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Palm Courtyard Villa", carpetArea: "2350 sq.ft", priceRange: "₹4.20 Cr" },
            { type: "4 BHK Beachfront Villa", carpetArea: "3600 sq.ft", priceRange: "₹9.20 Cr" }
        ],
        lat: 18.7912,
        lng: 72.8512,
        reraId: "P52000045129",
        description: "Peninsula Palm Grove Villas in Awas Beach offers secluded luxury surrounded by casuarina groves and virgin beaches with personalized butler services."
    },
    {
        id: "p-peninsula-karjat-riverwoods",
        title: "Peninsula Karjat Riverwoods",
        slug: "peninsula-karjat-riverwoods",
        builderId: "b-peninsula-land",
        location: "Karjat Central",
        city: "Karjat",
        priceRange: "₹65.00 L - ₹1.75 Cr",
        exactPrice: "₹65.00 L",
        pricePerSqft: 5800,
        configurations: ["2 BHK Villa", "3 BHK Villa", "Villa Plot"],
        configurationDetails: [
            { type: "1,500 sq.ft Villa Plot", carpetArea: "1500 sq.ft", priceRange: "₹65.00 L" },
            { type: "2 BHK Riverfront Villa", carpetArea: "1250 sq.ft", priceRange: "₹1.15 Cr" },
            { type: "3 BHK Luxury Villa", carpetArea: "1850 sq.ft", priceRange: "₹1.75 Cr" }
        ],
        lat: 18.9123,
        lng: 73.3245,
        reraId: "P52000048912",
        description: "Peninsula Karjat Riverwoods is a 25-acre riverside retreat in Karjat featuring gated luxury villas and villa plots with organic orchards and sports club."
    },

    // === ALL BUILDERS - ALIBAUG PROJECTS ===
    {
        id: "p-lodha-hoabl-alibaug-reserve",
        title: "The House of Abhinandan Lodha Alibaug Reserve",
        slug: "hoabl-alibaug-reserve",
        builderId: "b-lodha",
        location: "Mandwa Jetty Corridor",
        city: "Alibaug",
        priceRange: "₹1.85 Cr - ₹4.50 Cr",
        exactPrice: "₹1.85 Cr",
        pricePerSqft: 15500,
        configurations: ["Villa Plot", "Estate Plot"],
        type: "Plot",
        configurationDetails: [
            { type: "1,800 sq.ft Reserve Plot", carpetArea: "1800 sq.ft", priceRange: "₹1.85 Cr" },
            { type: "2,500 sq.ft Signature Plot", carpetArea: "2500 sq.ft", priceRange: "₹2.65 Cr" },
            { type: "4,000 sq.ft Imperial Estate Plot", carpetArea: "4000 sq.ft", priceRange: "₹4.50 Cr" }
        ],
        lat: 18.7889,
        lng: 72.8465,
        reraId: "P52000051289",
        description: "The House of Abhinandan Lodha (HoABL) Alibaug Reserve offers branded 5-star plotted villa land near Mandwa Jetty with international club amenities managed by luxury hoteliers."
    },
    {
        id: "p-hiranandani-sands-alibaug",
        title: "Hiranandani Sands",
        slug: "hiranandani-sands",
        builderId: "b-hiranandani",
        location: "Kihim Beach",
        city: "Alibaug",
        priceRange: "₹2.10 Cr - ₹5.80 Cr",
        exactPrice: "₹2.10 Cr",
        pricePerSqft: 16500,
        configurations: ["2 BHK Villa", "3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "2 BHK Coastal Villa", carpetArea: "1350 sq.ft", priceRange: "₹2.10 Cr" },
            { type: "3 BHK Beach Villa", carpetArea: "1850 sq.ft", priceRange: "₹3.40 Cr" },
            { type: "4 BHK Royal Beachside Estate", carpetArea: "2600 sq.ft", priceRange: "₹5.80 Cr" }
        ],
        lat: 18.7345,
        lng: 72.8712,
        reraId: "P52000049812",
        description: "Hiranandani Sands by Hiranandani Communities brings classical neoclassical architecture and lush green boulevard landscaping to Kihim Beach, Alibaug."
    },
    {
        id: "p-isprava-villas-alibaug",
        title: "Villas by Isprava Alibaug",
        slug: "villas-by-isprava-alibaug",
        builderId: "b-isprava",
        location: "Sasawane Beach",
        city: "Alibaug",
        priceRange: "₹6.50 Cr - ₹16.00 Cr",
        exactPrice: "₹6.50 Cr",
        pricePerSqft: 22000,
        configurations: ["3 BHK Villa", "4 BHK Villa", "5 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Portuguese Villa", carpetArea: "2800 sq.ft", priceRange: "₹6.50 Cr" },
            { type: "4 BHK Heritage Villa with Pool", carpetArea: "3900 sq.ft", priceRange: "₹10.50 Cr" },
            { type: "5 BHK Signature Beachfront Palace", carpetArea: "5500 sq.ft", priceRange: "₹16.00 Cr" }
        ],
        lat: 18.8012,
        lng: 72.8398,
        reraId: "P52000038912",
        status: "Ready to Move",
        description: "Villas by Isprava in Sasawane are bespoke luxury residences curated with antique furnishings, private heated pools, expansive courtyards, and dedicated property management."
    },
    {
        id: "p-sunstone-awas-beach",
        title: "Sunstone Awas Beach Residences",
        slug: "sunstone-awas-beach",
        builderId: "b-sunstone",
        location: "Awas Beach",
        city: "Alibaug",
        priceRange: "₹1.65 Cr - ₹3.80 Cr",
        exactPrice: "₹1.65 Cr",
        pricePerSqft: 14200,
        configurations: ["2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "2 BHK Beach View", carpetArea: "890 sq.ft", priceRange: "₹1.65 Cr" },
            { type: "3 BHK Sunset Suite", carpetArea: "1350 sq.ft", priceRange: "₹2.75 Cr" },
            { type: "3 BHK Penthouse", carpetArea: "1650 sq.ft", priceRange: "₹3.80 Cr" }
        ],
        lat: 18.7945,
        lng: 72.8567,
        reraId: "P52000028914",
        description: "Sunstone Awas Beach Residences offers low-rise coastal apartments with sea-facing balconies and private beach access path in tranquil Awas."
    },
    {
        id: "p-canvas-alibaug-villas",
        title: "The Canvas Alibaug Private Pool Villas",
        slug: "the-canvas-alibaug-villas",
        builderId: "b-canvas-alibaug",
        location: "Zirad-Chondi",
        city: "Alibaug",
        priceRange: "₹3.20 Cr - ₹6.50 Cr",
        exactPrice: "₹3.20 Cr",
        pricePerSqft: 15800,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Pool Villa", carpetArea: "2150 sq.ft", priceRange: "₹3.20 Cr" },
            { type: "4 BHK Luxury Estate", carpetArea: "3200 sq.ft", priceRange: "₹6.50 Cr" }
        ],
        lat: 18.7456,
        lng: 72.8912,
        reraId: "P52000046123",
        description: "The Canvas Alibaug in Zirad features contemporary minimalist architecture, private plunge pools, and open-to-sky shower pavilions near Chondi market."
    },
    {
        id: "p-saffronstays-alibaug-estates",
        title: "SaffronStays Riverfront Villas Alibaug",
        slug: "saffronstays-alibaug-estates",
        builderId: "b-saffronstays",
        location: "Kihim Beach",
        city: "Alibaug",
        priceRange: "₹3.80 Cr - ₹7.20 Cr",
        exactPrice: "₹3.80 Cr",
        pricePerSqft: 16200,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Waterfront Villa", carpetArea: "2200 sq.ft", priceRange: "₹3.80 Cr" },
            { type: "4 BHK Garden Mansion", carpetArea: "3400 sq.ft", priceRange: "₹7.20 Cr" }
        ],
        lat: 18.7398,
        lng: 72.8754,
        reraId: "P52000039812",
        description: "SaffronStays Riverfront Villas in Kihim offers luxury serviced second homes with assured rental returns and dedicated hospitality management."
    },
    {
        id: "p-alibaug-palms-varsoli",
        title: "Alibaug Palms Luxury Estates",
        slug: "alibaug-palms-luxury-estates",
        builderId: "b-alibaug-developers",
        location: "Alibaug Town",
        city: "Alibaug",
        priceRange: "₹85.00 L - ₹2.10 Cr",
        exactPrice: "₹85.00 L",
        pricePerSqft: 9800,
        configurations: ["1 BHK", "2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "1 BHK Urban", carpetArea: "520 sq.ft", priceRange: "₹85.00 L" },
            { type: "2 BHK Comfort", carpetArea: "780 sq.ft", priceRange: "₹1.25 Cr" },
            { type: "3 BHK Royal", carpetArea: "1150 sq.ft", priceRange: "₹2.10 Cr" }
        ],
        lat: 18.6543,
        lng: 72.8812,
        reraId: "P52000031245",
        description: "Alibaug Palms in Varsoli / Alibaug Town offers verified residential apartments walking distance from the beach and civil infrastructure."
    },
    {
        id: "p-epitome-alibaug-bayview",
        title: "Epitome Alibaug Bayview Estates",
        slug: "epitome-alibaug-bayview",
        builderId: "b-epitome",
        location: "Mandwa Jetty Corridor",
        city: "Alibaug",
        priceRange: "₹4.10 Cr - ₹8.90 Cr",
        exactPrice: "₹4.10 Cr",
        pricePerSqft: 17800,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Bay View Villa", carpetArea: "2300 sq.ft", priceRange: "₹4.10 Cr" },
            { type: "4 BHK Signature Estate", carpetArea: "3600 sq.ft", priceRange: "₹8.90 Cr" }
        ],
        lat: 18.7812,
        lng: 72.8456,
        reraId: "P52000042189",
        description: "Epitome Alibaug Bayview Estates features private elevated ocean-view villas on the Mandwa ridge with infinity pools overlooking Mumbai's southern skyline."
    },

    // === ALL BUILDERS - LONAVALA PROJECTS ===
    {
        id: "p-tata-prive-khandala",
        title: "Tata Prive",
        slug: "tata-prive",
        builderId: "b-tata",
        location: "Khandala",
        city: "Lonavala",
        priceRange: "₹3.80 Cr - ₹8.50 Cr",
        exactPrice: "₹3.80 Cr",
        pricePerSqft: 17500,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Hillside Villa", carpetArea: "2200 sq.ft", priceRange: "₹3.80 Cr" },
            { type: "4 BHK Royal Forest Villa", carpetArea: "3400 sq.ft", priceRange: "₹8.50 Cr" }
        ],
        lat: 18.7567,
        lng: 73.3712,
        reraId: "P52100001245",
        status: "Ready to Move",
        description: "Tata Prive in Khandala Foothills is a gated sanctuary of hillside villas designed by international architects, set amidst 20 acres of pristine greenery."
    },
    {
        id: "p-piramal-lonavala-horizon",
        title: "Piramal Lonavala Horizon",
        slug: "piramal-lonavala-horizon",
        builderId: "b-piramal",
        location: "Khandala",
        city: "Lonavala",
        priceRange: "₹2.90 Cr - ₹6.20 Cr",
        exactPrice: "₹2.90 Cr",
        pricePerSqft: 16800,
        configurations: ["2 BHK Villa", "3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "2 BHK Valley Villa", carpetArea: "1450 sq.ft", priceRange: "₹2.90 Cr" },
            { type: "3 BHK Grand Hillside Villa", carpetArea: "2100 sq.ft", priceRange: "₹4.40 Cr" },
            { type: "4 BHK Presidential Retreat", carpetArea: "2950 sq.ft", priceRange: "₹6.20 Cr" }
        ],
        lat: 18.7589,
        lng: 73.3745,
        reraId: "P52100028912",
        description: "Piramal Lonavala Horizon brings Piramal Realty's gold-standard craftsmanship to the Khandala ridge with private verandas and mountain view decks."
    },
    {
        id: "p-kalpataru-waterfront-lonavala",
        title: "Kalpataru Waterfront Lonavala",
        slug: "kalpataru-waterfront-lonavala",
        builderId: "b-kalpataru",
        location: "Kamshet Lakefront",
        city: "Lonavala",
        priceRange: "₹1.45 Cr - ₹3.10 Cr",
        exactPrice: "₹1.45 Cr",
        pricePerSqft: 9800,
        configurations: ["2 BHK", "3 BHK", "Villa"],
        configurationDetails: [
            { type: "2 BHK Lakefront Suite", carpetArea: "920 sq.ft", priceRange: "₹1.45 Cr" },
            { type: "3 BHK Grande", carpetArea: "1350 sq.ft", priceRange: "₹2.25 Cr" },
            { type: "3 BHK Lake Villa", carpetArea: "1950 sq.ft", priceRange: "₹3.10 Cr" }
        ],
        lat: 18.7345,
        lng: 73.5412,
        reraId: "P52100031289",
        description: "Kalpataru Waterfront in Kamshet offers lakeside second homes with private kayaking club, lakeside boardwalk, and panoramic valley views."
    },
    {
        id: "p-runwal-khandala-heights",
        title: "Runwal Khandala Heights",
        slug: "runwal-khandala-heights",
        builderId: "b-runwal",
        location: "Khandala",
        city: "Lonavala",
        priceRange: "₹2.40 Cr - ₹5.80 Cr",
        exactPrice: "₹2.40 Cr",
        pricePerSqft: 15900,
        configurations: ["2 BHK Villa", "3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "2 BHK Forest Chalet", carpetArea: "1350 sq.ft", priceRange: "₹2.40 Cr" },
            { type: "3 BHK Valley Villa", carpetArea: "1950 sq.ft", priceRange: "₹3.90 Cr" },
            { type: "4 BHK Mountain Estate", carpetArea: "2750 sq.ft", priceRange: "₹5.80 Cr" }
        ],
        lat: 18.7523,
        lng: 73.3798,
        reraId: "P52100024512",
        description: "Runwal Khandala Heights offers secluded hillside villas surrounded by private waterfalls, meditation pavilions, and temperature-controlled pools."
    },
    {
        id: "p-rohan-ananta-lonavala-villas",
        title: "Rohan Ananta Lonavala Villas",
        slug: "rohan-ananta-lonavala-villas",
        builderId: "b-rohan",
        location: "Tungarli-Valvan",
        city: "Lonavala",
        priceRange: "₹1.85 Cr - ₹4.10 Cr",
        exactPrice: "₹1.85 Cr",
        pricePerSqft: 12800,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK PLUS Home Villa", carpetArea: "1650 sq.ft", priceRange: "₹1.85 Cr" },
            { type: "4 BHK Luxury Villa", carpetArea: "2450 sq.ft", priceRange: "₹4.10 Cr" }
        ],
        lat: 18.7612,
        lng: 73.4123,
        reraId: "P52100035612",
        description: "Rohan Ananta Lonavala Villas in Tungarli features Rohan's proprietary PLUS Home architecture (Perfect Ventilation, Lively Light, Utmost Privacy, Smart Space)."
    },
    {
        id: "p-supreme-lonavala-cloud",
        title: "Supreme Lonavala Cloud Estates",
        slug: "supreme-lonavala-cloud",
        builderId: "b-supreme",
        location: "Kunegaon",
        city: "Lonavala",
        priceRange: "₹3.40 Cr - ₹7.50 Cr",
        exactPrice: "₹3.40 Cr",
        pricePerSqft: 17200,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Cloud Villa", carpetArea: "2100 sq.ft", priceRange: "₹3.40 Cr" },
            { type: "4 BHK Royal Horizon Villa", carpetArea: "3200 sq.ft", priceRange: "₹7.50 Cr" }
        ],
        lat: 18.7489,
        lng: 73.3856,
        reraId: "P52100039812",
        description: "Supreme Lonavala Cloud Estates in Kunegaon delivers ultra-luxury cantilevered mountain villas overlooking the Sahyadri ranges with private heated jacuzzis."
    },
    {
        id: "p-sobha-sahyadri-whispers",
        title: "Sobha Sahyadri Whispers",
        slug: "sobha-sahyadri-whispers",
        builderId: "b-sobha",
        location: "Khandala",
        city: "Lonavala",
        priceRange: "₹4.20 Cr - ₹9.50 Cr",
        exactPrice: "₹4.20 Cr",
        pricePerSqft: 18900,
        configurations: ["3 BHK Villa", "4 BHK Villa", "5 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK German Engineered Villa", carpetArea: "2350 sq.ft", priceRange: "₹4.20 Cr" },
            { type: "4 BHK Grand Estate", carpetArea: "3400 sq.ft", priceRange: "₹7.50 Cr" },
            { type: "5 BHK Signature Mansion", carpetArea: "4600 sq.ft", priceRange: "₹9.50 Cr" }
        ],
        lat: 18.7534,
        lng: 73.3723,
        reraId: "P52100041289",
        description: "Sobha Sahyadri Whispers brings Sobha's renowned backward integration and impeccable German engineering to luxury second homes in Khandala."
    },

    // === ALL BUILDERS - KARJAT PROJECTS ===
    {
        id: "p-godrej-retreat-karjat",
        title: "Godrej Retreat Karjat",
        slug: "godrej-retreat-karjat",
        builderId: "b-godrej",
        location: "Chowk",
        city: "Karjat",
        priceRange: "₹75.00 L - ₹1.95 Cr",
        exactPrice: "₹75.00 L",
        pricePerSqft: 5900,
        configurations: ["Resort Plot", "Villa Plot", "Estate Plot"],
        type: "Plot",
        configurationDetails: [
            { type: "1,200 sq.ft Resort Plot", carpetArea: "1200 sq.ft", priceRange: "₹75.00 L" },
            { type: "1,800 sq.ft Villa Plot", carpetArea: "1800 sq.ft", priceRange: "₹1.15 Cr" },
            { type: "2,500 sq.ft Estate Plot", carpetArea: "2500 sq.ft", priceRange: "₹1.95 Cr" }
        ],
        lat: 18.9234,
        lng: 73.2845,
        reraId: "P52000049123",
        description: "Godrej Retreat Karjat is an expansive resort-themed plotted development by Godrej Properties near Chowk and Morbe Dam with 100+ wellness and leisure amenities."
    },
    {
        id: "p-godrej-hillside-reserve-karjat",
        title: "Godrej Hillside Reserve Karjat",
        slug: "godrej-hillside-reserve-karjat",
        builderId: "b-godrej",
        location: "Karjat-Neral Foothills",
        city: "Karjat",
        priceRange: "₹68.00 L - ₹1.60 Cr",
        exactPrice: "₹68.00 L",
        pricePerSqft: 5600,
        configurations: ["Plotted Villa Land", "Hill View Plot"],
        type: "Plot",
        configurationDetails: [
            { type: "1,200 sq.ft Hill View Plot", carpetArea: "1200 sq.ft", priceRange: "₹68.00 L" },
            { type: "1,600 sq.ft Nature Plot", carpetArea: "1600 sq.ft", priceRange: "₹92.00 L" },
            { type: "2,400 sq.ft Reserve Plot", carpetArea: "2400 sq.ft", priceRange: "₹1.60 Cr" }
        ],
        lat: 18.9456,
        lng: 73.3123,
        reraId: "P52000052341",
        description: "Godrej Hillside Reserve in Karjat-Neral foothills offers branded luxury land parcels situated against the backdrop of the Matheran hills."
    },
    {
        id: "p-wadhwa-wise-city-karjat",
        title: "Wadhwa Wise City Karjat Corridor",
        slug: "wadhwa-wise-city-karjat",
        builderId: "b-wadhwa",
        location: "Chowk",
        city: "Karjat",
        priceRange: "₹38.00 L - ₹85.00 L",
        exactPrice: "₹38.00 L",
        pricePerSqft: 5800,
        configurations: ["1 BHK", "2 BHK", "Townhouse"],
        configurationDetails: [
            { type: "1 BHK Smart", carpetArea: "440 sq.ft", priceRange: "₹38.00 L" },
            { type: "2 BHK Family", carpetArea: "640 sq.ft", priceRange: "₹58.00 L" },
            { type: "Townhouse Residence", carpetArea: "950 sq.ft", priceRange: "₹85.00 L" }
        ],
        lat: 18.9289,
        lng: 73.2798,
        reraId: "P52000019234",
        description: "Wadhwa Wise City is a 138-acre mega-integrated township in the Chowk-Karjat corridor offering healthcare, ICSE school, commercial retail, and green living."
    },
    {
        id: "p-wadhwa-magnolia-villas-karjat",
        title: "Wadhwa Magnolia Villas Karjat",
        slug: "wadhwa-magnolia-villas-karjat",
        builderId: "b-wadhwa",
        location: "Chowk",
        city: "Karjat",
        priceRange: "₹1.10 Cr - ₹2.40 Cr",
        exactPrice: "₹1.10 Cr",
        pricePerSqft: 6800,
        configurations: ["3 BHK Villa", "4 BHK Villa"],
        configurationDetails: [
            { type: "3 BHK Magnolia Villa", carpetArea: "1650 sq.ft", priceRange: "₹1.10 Cr" },
            { type: "4 BHK Royal Villa", carpetArea: "2400 sq.ft", priceRange: "₹2.40 Cr" }
        ],
        lat: 18.9312,
        lng: 73.2821,
        reraId: "P52000028912",
        description: "Wadhwa Magnolia Villas offers exclusive independent villas inside Wadhwa Wise City with private front lawns, private parking, and luxury clubhouse access."
    },
    {
        id: "p-pushpam-sanskruti-karjat",
        title: "Pushpam Sanskruti Resort Homes",
        slug: "pushpam-sanskruti-karjat",
        builderId: "b-pushpam",
        location: "Karjat Central",
        city: "Karjat",
        priceRange: "₹45.00 L - ₹1.25 Cr",
        exactPrice: "₹45.00 L",
        pricePerSqft: 5200,
        configurations: ["1 BHK Villa Suite", "2 BHK Villa"],
        configurationDetails: [
            { type: "1 BHK Resort Suite", carpetArea: "580 sq.ft", priceRange: "₹45.00 L" },
            { type: "2 BHK Private Pool Villa", carpetArea: "1150 sq.ft", priceRange: "₹92.00 L" },
            { type: "3 BHK Grand Villa", carpetArea: "1550 sq.ft", priceRange: "₹1.25 Cr" }
        ],
        lat: 18.9156,
        lng: 73.3312,
        reraId: "P52000018912",
        status: "Ready to Move",
        description: "Pushpam Sanskruti is a fully operational resort home community in Karjat featuring managed rental programs, multi-cuisine restaurants, and water park."
    },
    {
        id: "p-usha-breco-karjat-hillview",
        title: "Usha Breco Karjat Hill View",
        slug: "usha-breco-karjat-hillview",
        builderId: "b-usha-breco",
        location: "Kashele",
        city: "Karjat",
        priceRange: "₹52.00 L - ₹1.45 Cr",
        exactPrice: "₹52.00 L",
        pricePerSqft: 4900,
        configurations: ["2 BHK Villa", "3 BHK Villa", "Plotted Land"],
        configurationDetails: [
            { type: "1,500 sq.ft Hillside Plot", carpetArea: "1500 sq.ft", priceRange: "₹52.00 L" },
            { type: "2 BHK Country Villa", carpetArea: "1200 sq.ft", priceRange: "₹88.00 L" },
            { type: "3 BHK Nature Estate", carpetArea: "1750 sq.ft", priceRange: "₹1.45 Cr" }
        ],
        lat: 18.9812,
        lng: 73.4123,
        reraId: "P52000031245",
        description: "Usha Breco Karjat Hill View is nestled along the Kashele-Bhimashankar nature highway offering hillside second homes with organic farming plots."
    },
    {
        id: "p-nirvana-riverwoods-karjat",
        title: "Nirvana Riverwoods Villas",
        slug: "nirvana-riverwoods-karjat",
        builderId: "b-nirvana-realty",
        location: "Karjat Central",
        city: "Karjat",
        priceRange: "₹72.00 L - ₹1.85 Cr",
        exactPrice: "₹72.00 L",
        pricePerSqft: 5400,
        configurations: ["2 BHK Villa", "3 BHK Villa"],
        configurationDetails: [
            { type: "2 BHK Riverside Villa", carpetArea: "1350 sq.ft", priceRange: "₹72.00 L" },
            { type: "3 BHK Riverfront Palace", carpetArea: "2100 sq.ft", priceRange: "₹1.85 Cr" }
        ],
        lat: 18.9089,
        lng: 73.3278,
        reraId: "P52000024512",
        status: "Ready to Move",
        description: "Nirvana Riverwoods in Karjat offers direct riverfront villas with private fishing docks, riverside gazebos, and serene mountain backdrop."
    },
    {
        id: "p-penta-karjat-green-valley",
        title: "Penta Karjat Green Valley",
        slug: "penta-karjat-green-valley",
        builderId: "b-penta-realty",
        location: "Karjat-Neral Foothills",
        city: "Karjat",
        priceRange: "₹32.00 L - ₹75.00 L",
        exactPrice: "₹32.00 L",
        pricePerSqft: 4600,
        configurations: ["1 BHK", "2 BHK", "Villa Plot"],
        configurationDetails: [
            { type: "1 BHK Green Suite", carpetArea: "450 sq.ft", priceRange: "₹32.00 L" },
            { type: "2 BHK Valley Apartment", carpetArea: "680 sq.ft", priceRange: "₹48.00 L" },
            { type: "1,200 sq.ft Plotted Villa", carpetArea: "1200 sq.ft", priceRange: "₹75.00 L" }
        ],
        lat: 18.9512,
        lng: 73.3089,
        reraId: "P52000036789",
        description: "Penta Karjat Green Valley offers affordable holiday homes and weekend villa plots with panoramic valley views of the Matheran mountain range."
    },
    {
        id: "p-xrbia-karjat-riverfront",
        title: "Xrbia Karjat Riverfront",
        slug: "xrbia-karjat-riverfront",
        builderId: "b-xrbia",
        location: "Vavanje",
        city: "Karjat",
        priceRange: "₹24.00 L - ₹48.00 L",
        exactPrice: "₹24.00 L",
        pricePerSqft: 4500,
        configurations: ["1 RK", "1 BHK", "2 BHK"],
        configurationDetails: [
            { type: "1 RK Studio", carpetArea: "320 sq.ft", priceRange: "₹24.00 L" },
            { type: "1 BHK Smart", carpetArea: "460 sq.ft", priceRange: "₹33.00 L" },
            { type: "2 BHK Family", carpetArea: "650 sq.ft", priceRange: "₹48.00 L" }
        ],
        lat: 18.9189,
        lng: 73.2512,
        reraId: "P52000015612",
        status: "Ready to Move",
        description: "Xrbia Karjat Riverfront is a self-contained smart township in Vavanje offering riverside boardwalks, convenience shopping, and round-the-clock security."
    },
    {
        id: "p-hiranandani-karjat-fortune",
        title: "Hiranandani Karjat Fortune City Link",
        slug: "hiranandani-karjat-fortune",
        builderId: "b-hiranandani",
        location: "Chowk",
        city: "Karjat",
        priceRange: "₹65.00 L - ₹1.80 Cr",
        exactPrice: "₹65.00 L",
        pricePerSqft: 6400,
        configurations: ["1 BHK", "2 BHK", "3 BHK"],
        configurationDetails: [
            { type: "1 BHK Classical", carpetArea: "520 sq.ft", priceRange: "₹65.00 L" },
            { type: "2 BHK Imperial", carpetArea: "780 sq.ft", priceRange: "₹98.00 L" },
            { type: "3 BHK Royal", carpetArea: "1150 sq.ft", priceRange: "₹1.80 Cr" }
        ],
        lat: 18.9345,
        lng: 73.2756,
        reraId: "P52000041289",
        description: "Hiranandani Karjat Fortune City Link offers signature Hiranandani architecture with Roman arches, extensive open green spaces, and upcoming airport access."
    },
    {
        id: "p-rohan-karjat-country-homes",
        title: "Rohan Karjat Country Homes",
        slug: "rohan-karjat-country-homes",
        builderId: "b-rohan",
        location: "Kashele",
        city: "Karjat",
        priceRange: "₹58.00 L - ₹1.40 Cr",
        exactPrice: "₹58.00 L",
        pricePerSqft: 4800,
        configurations: ["2 BHK Villa", "3 BHK Villa"],
        configurationDetails: [
            { type: "2 BHK PLUS Villa", carpetArea: "1200 sq.ft", priceRange: "₹58.00 L" },
            { type: "3 BHK Country Manor", carpetArea: "1750 sq.ft", priceRange: "₹1.40 Cr" }
        ],
        lat: 18.9756,
        lng: 73.4089,
        reraId: "P52000048912",
        description: "Rohan Karjat Country Homes in Kashele provides zero-wastage open-concept country villas with private courtyards, vegetable patches, and mountain views."
    },
    {
        id: "p-runwal-karjat-bliss",
        title: "Runwal Karjat Bliss",
        slug: "runwal-karjat-bliss",
        builderId: "b-runwal",
        location: "Karjat Central",
        city: "Karjat",
        priceRange: "₹35.00 L - ₹78.00 L",
        exactPrice: "₹35.00 L",
        pricePerSqft: 5100,
        configurations: ["1 BHK", "2 BHK"],
        configurationDetails: [
            { type: "1 BHK Cozy", carpetArea: "460 sq.ft", priceRange: "₹35.00 L" },
            { type: "2 BHK Bliss", carpetArea: "680 sq.ft", priceRange: "₹54.00 L" },
            { type: "2 BHK Grande", carpetArea: "790 sq.ft", priceRange: "₹78.00 L" }
        ],
        lat: 18.9178,
        lng: 73.3289,
        reraId: "P52000035612",
        description: "Runwal Karjat Bliss offers peaceful nature living in Central Karjat with infinity edge pool, gymnasium, meditation lawn, and kid's adventure area."
    },
    {
        id: "p-lodha-karjat-crown-estates",
        title: "Lodha Karjat Crown Estates",
        slug: "lodha-karjat-crown-estates",
        builderId: "b-lodha",
        location: "Chowk",
        city: "Karjat",
        priceRange: "₹85.00 L - ₹2.25 Cr",
        exactPrice: "₹85.00 L",
        pricePerSqft: 6500,
        configurations: ["Villa Plot", "Estate Plot", "3 BHK Villa"],
        configurationDetails: [
            { type: "1,500 sq.ft Crown Plot", carpetArea: "1500 sq.ft", priceRange: "₹85.00 L" },
            { type: "2,200 sq.ft Imperial Plot", carpetArea: "2200 sq.ft", priceRange: "₹1.45 Cr" },
            { type: "3 BHK Designer Villa", carpetArea: "1850 sq.ft", priceRange: "₹2.25 Cr" }
        ],
        lat: 18.9267,
        lng: 73.2812,
        reraId: "P52000054129",
        description: "Lodha Karjat Crown Estates is an ultra-exclusive gated enclave in Chowk offering curated villa plots and designer holiday villas with 5-star club privileges."
    }
];

// Add projects
let addedProjects = 0;
for (const pData of newProjectsData) {
    if (!projects.find(p => p.id === pData.id || p.slug === pData.slug)) {
        projects.push(createProjectItem(pData));
        addedProjects++;
    }
}
console.log(`Added ${addedProjects} new projects! Total projects now: ${projects.length}`);

// Update locality counts
const locCounts = {};
for (const p of projects) {
    const locName = (p.location || "").toLowerCase().trim();
    locCounts[locName] = (locCounts[locName] || 0) + 1;
}
for (const l of locations) {
    const c = locCounts[l.name.toLowerCase().trim()] || locCounts[l.slug.toLowerCase().trim()] || 0;
    l.projectCount = c;
    l.count = c;
}

// Update builder totalProjects
const bldCounts = {};
for (const p of projects) {
    const bId = (p.builderId || "").toLowerCase().trim();
    bldCounts[bId] = (bldCounts[bId] || 0) + 1;
}
for (const b of builders) {
    const c = bldCounts[b.id.toLowerCase().trim()] || bldCounts[b.slug.toLowerCase().trim()] || 0;
    if (c > 0) {
        b.totalProjects = c;
    }
}

// Write back to mockData.ts
const newContent = `import { Locality, Builder, Project } from '../types';\n\nexport const LOCATIONS: Locality[] = ${JSON.stringify(locations, null, 2)};\n\nexport const BUILDERS: Builder[] = ${JSON.stringify(builders, null, 2)};\n\nexport const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};\n`;

writeFileSync(mockDataPath, newContent, 'utf-8');
console.log('✅ Successfully wrote updated mockData.ts with all imported projects!');
