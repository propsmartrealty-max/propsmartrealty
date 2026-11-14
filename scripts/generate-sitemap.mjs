import { SitemapStream } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const BASE_URL = 'https://propsmart.co.in';

const STATIC_ROUTES = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/search', changefreq: 'daily', priority: 0.9 },
    { url: '/directory', changefreq: 'weekly', priority: 0.8 },
    { url: '/compare', changefreq: 'weekly', priority: 0.7 },
    { url: '/about', changefreq: 'monthly', priority: 0.6 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
    { url: '/post-property', changefreq: 'monthly', priority: 0.6 }
];

const LOCALITIES = [
  "hinjewadi",
  "baner",
  "wakad",
  "kharadi",
  "balewadi",
  "mahalunge",
  "wagholi",
  "tathawade",
  "bavdhan",
  "hadapsar",
  "ravet",
  "pashan",
  "kothrud",
  "kalyani-nagar",
  "koregaon-park",
  "viman-nagar",
  "mamurdi",
  "pimpri-chinchwad",
  "mundhwa",
  "keshavnagar",
  "undri",
  "mohammed-wadi",
  "talegaon-dabhade",
  "camp",
  "anand-nagar",
  "bhosari",
  "wadgaon-sheri",
  "bhugaon",
  "shewalewadi"
];

const PROJECTS = [
  "godrej-hillside-3",
  "godrej-river-royale",
  "godrej-eden-estate-phase-2",
  "kolte-patil-life-republic",
  "kolte-patil-24k-altura",
  "kolte-patil-little-earth",
  "vtp-bellissimo",
  "vtp-dolce-vita",
  "vtp-naturescape",
  "lodha-giardino",
  "lodha-panache",
  "lodha-bella-vita",
  "panchshil-eon-waterfront",
  "panchshil-towers",
  "rohan-ekam-balewadi",
  "rohan-saroha",
  "rohan-ekam",
  "vj-indilife",
  "vj-pkc-central",
  "vj-yashwin-enchante",
  "gt-pride",
  "pride-park-connect",
  "codename-pride-of-chinchwad",
  "nyati-evoque",
  "nyati-emerald",
  "nyati-esteban-2",
  "gera-hinjewadi-phase-3",
  "gera-imperium-gateway",
  "gera-joy-on-treetop",
  "kasturi-apostrophe",
  "kasturi-eon-homes",
  "kasturi-the-balmoral-towers",
  "mahindra-happinest",
  "mahindra-citadel",
  "mahindra-kharadi",
  "kumar-parth-tower",
  "kumar-palmspring-towers",
  "kumar-codename-centrestage",
  "bramhacorp-hues-of-sky",
  "bramhacorp-townhouse",
  "bramhacorp-august-towers",
  "amanora-city-rise",
  "joyville-annexe",
  "joyville-celestia",
  "joyville-sensorium",
  "kohinoor-kharadi",
  "kohinoor-shangrila",
  "kohinoor-central-park",
  "kalpataru-jade-skyline",
  "kalpataru-jade-residences",
  "kalpataru-blossoms",
  "sobha-nesara",
  "sobha-nesara-block-3",
  "prasiddhi-tatavam-residency",
  "sense-66-by-tata-value-homes"
];

const BUILDERS = [
  "godrej-properties",
  "kolte-patil-developers",
  "vtp-realty",
  "lodha-group",
  "panchshil-realty",
  "rohan-builders",
  "vilas-javdekar-developers",
  "pride-purple-group",
  "nyati-group",
  "gera-developments",
  "kasturi-housing",
  "mahindra-lifespaces",
  "kumar-properties",
  "bramhacorp",
  "amanora-park-town",
  "joyville-shapoorji-pallonji",
  "kohinoor-group",
  "kalpataru",
  "sobha-limited",
  "tata-housing"
];

async function generateSitemap() {
    console.log("🗺️  Generating Cloudflare & Google-optimized Sitemap...");

    const smStream = new SitemapStream({ hostname: BASE_URL });
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

    smStream.pipe(writeStream);

    // 1. Static Routes
    STATIC_ROUTES.forEach(r => smStream.write(r));

    // 2. City Route
    smStream.write({ url: '/pune', changefreq: 'daily', priority: 0.9 });

    // 3. Locality Landing Pages
    LOCALITIES.forEach(loc => {
        smStream.write({
            url: `/search?location=${encodeURIComponent(loc)}`,
            changefreq: 'weekly',
            priority: 0.85
        });
    });

    // 4. Developer / Builder Profiles
    BUILDERS.forEach(builderSlug => {
        smStream.write({
            url: `/builder/${builderSlug}`,
            changefreq: 'weekly',
            priority: 0.85
        });
    });

    // 5. Individual Verified Projects
    PROJECTS.forEach(projectSlug => {
        smStream.write({
            url: `/project/${projectSlug}`,
            changefreq: 'daily',
            priority: 0.9
        });
    });

    smStream.end();

    return new Promise((res, rej) => {
        writeStream.on('finish', () => {
            console.log(`✅ Google Sitemap generated successfully with ${STATIC_ROUTES.length + 1 + LOCALITIES.length + BUILDERS.length + PROJECTS.length} indexed URLs at public/sitemap.xml`);
            res(true);
        });
        writeStream.on('error', rej);
    });
}

generateSitemap().catch(console.error);
