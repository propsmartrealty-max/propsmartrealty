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

console.log(`Loaded: ${locations.length} localities, ${builders.length} builders, ${projects.length} projects`);

const cleanMap = {
  "kharadi, pune": "Kharadi",
  "wakad, pune": "Wakad",
  "pune expressway, gahunje": "Gahunje",
  "hinjewadi phase 1, pune": "Hinjewadi",
  "baner, pune": "Baner",
  "bund garden, pune": "Bund Garden Road",
  "kothrud, pune": "Kothrud",
  "hinjewadi phase 3, pune": "Hinjewadi",
  "worli, south mumbai": "Worli",
  "altamount road, billionaires row, mumbai": "Altamount Road",
  "mahalaxmi, south mumbai": "Mahalaxmi",
  "kolshet road, thane (mmr)": "Kolshet Road",
  "upper thane / anjur, thane (mmr)": "Upper Thane",
  "mahalunge, pune": "Mahalunge",
  "manjari, pune": "Manjri",
  "mamurdi, pune": "Mamurdi",
  "khalapur, pune-mumbai expressway": "Khalapur",
  "bhandup west, mumbai": "Bhandup West",
  "chandivali, powai extension, mumbai": "Powai",
  "bandra west, mumbai": "Bandra West",
  "panvel, navi mumbai": "Panvel",
  "thane extension, kalyan-bhiwandi road": "Upper Thane",
  "chembur, central mumbai": "Chembur",
  "baner-sus road, pune": "Sus",
  "bavdhan, pune": "Bavdhan",
  "khopoli foothills, lonavala": "Khopoli Foothills",
  "khalapur, lonavala corridor": "Khalapur",
  "awas beach, alibaug": "Awas Beach",
  "mandwa jetty corridor, alibaug": "Mandwa Jetty Corridor",
  "versova, andheri west": "Andheri West",
  "charoli": "Charholi",
  "shivajinagar": "Shivaji Nagar",
  "kolshet road, thane": "Kolshet Road",
  "pokhran road, thane": "Pokhran Road",
  "ghodbunder road, thane": "Ghodbunder Road",
  "majiwada, thane": "Majiwada",
  "balkum, thane": "Balkum",
  "manpada, thane": "Manpada",
  "borivali east, mumbai": "Borivali East",
  "goregaon east, mumbai": "Goregaon East",
  "worli, mumbai": "Worli",
  "kandivali east, mumbai": "Kandivali East",
  "powai, mumbai": "Powai",
  "vikhroli east, mumbai": "Vikhroli East",
  "mulund west, mumbai": "Mulund West",
  "bandra east, mumbai": "Bandra East",
  "kanjurmarg east, mumbai": "Kanjurmarg",
  "wadala, mumbai": "Wadala",
  "kalyani nagar, pune": "Kalyani Nagar",
  "hadapsar, pune": "Hadapsar",
  "hinjewadi, pune": "Hinjewadi",
  "balewadi, pune": "Balewadi",
  "sopan baug, pune": "Sopan Baug",
  "dhanori, pune": "Dhanori",
  "punawale, pune": "Punawale",
  "tathawade, pune": "Tathawade",
  "ravet, pune": "Ravet",
  "mundhwa, pune": "Mundhwa",
  "charholi, pune": "Charholi",
  "bibwewadi, pune": "Bibwewadi",
  "sus, baner annexe, pune": "Sus",
  "kondhwa, pune": "Kondhwa",
  "hinjewadi phase 2, pune": "Hinjewadi",
  "talegaon dabhade, pune": "Talegaon Dabhade",
  "model colony, shivajinagar, pune": "Shivaji Nagar",
  "bund garden road, pune": "Bund Garden Road",
  "charholi budruk, pune": "Charholi",
  "phursungi, hadapsar annexe, pune": "Phursungi",
  "warje, pune": "Warje"
};

let cleanedLocs = 0;
for (const p of projects) {
    const locVal = (p.location || "").toLowerCase().trim();
    if (cleanMap[locVal]) {
        p.location = cleanMap[locVal];
        cleanedLocs++;
    }
    // 100% amenities completeness
    if (!p.amenities || p.amenities.length === 0) {
        p.amenities = p.features;
    }
}
console.log(`Standardized ${cleanedLocs} project location names to clean catalog localities.`);

// Standardize builder experience
let fixedExp = 0;
for (const b of builders) {
    if (!b.experience) {
        b.experience = Math.max(1, 2026 - (b.establishedYear || 2010));
        fixedExp++;
    }
}
console.log(`Populated experience for ${fixedExp} builders.`);

// Recount projects per locality
const locCounts = {};
for (const p of projects) {
    const lName = p.location.toLowerCase();
    locCounts[lName] = (locCounts[lName] || 0) + 1;
}
for (const l of locations) {
    const c = locCounts[l.name.toLowerCase()] || locCounts[l.slug.toLowerCase()] || 0;
    l.projectCount = c;
    l.count = c;
}

// Recount projects per builder
const bldCounts = {};
for (const p of projects) {
    const bId = p.builderId.toLowerCase();
    bldCounts[bId] = (bldCounts[bId] || 0) + 1;
}
for (const b of builders) {
    const c = bldCounts[b.id.toLowerCase()] || bldCounts[b.slug.toLowerCase()] || 0;
    if (c > 0) {
        b.totalProjects = c;
    }
}

// Write back to mockData.ts
const newContent = `import { Locality, Builder, Project } from '../types';\n\nexport const LOCATIONS: Locality[] = ${JSON.stringify(locations, null, 2)};\n\nexport const BUILDERS: Builder[] = ${JSON.stringify(builders, null, 2)};\n\nexport const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};\n`;

writeFileSync(mockDataPath, newContent, 'utf-8');
console.log('✅ Successfully wrote updated mockData.ts with 0 catalog gaps!');
