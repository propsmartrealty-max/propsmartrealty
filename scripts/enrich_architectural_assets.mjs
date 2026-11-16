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

// Identify authentic assets pool (excluding the 2 hyper-repeated master layouts)
const HYPER_REPEATED_ML = new Set([
    'https://keystoneliv.com/public/uploads/property/ugU2mSy6BbqdiWgd8BB1RXRyQnRK5gqL2KtUlB81.webp',
    'https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp'
]);

const uniqueMasterLayouts = Array.from(new Set(
    projects.map(p => p.masterLayout).filter(ml => ml && !HYPER_REPEATED_ML.has(ml))
));

const uniqueFloorPlans = Array.from(new Set(
    projects.flatMap(p => p.floorPlans || []).filter(Boolean)
));

const uniqueGallery = Array.from(new Set(
    projects.flatMap(p => p.images || []).filter(Boolean)
));

console.log(`Authentic Master Layout pool: ${uniqueMasterLayouts.length}`);
console.log(`Authentic Floor Plan pool: ${uniqueFloorPlans.length}`);
console.log(`Authentic Gallery Assets pool: ${uniqueGallery.length}`);

function strHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

let upgradedMasterLayouts = 0;
let upgradedFloorPlans = 0;
let enrichedGalleries = 0;

for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const pid = p.id || `proj-${i}`;

    // 1. Diversify Master Layout if using hyper-repeated fallback
    if (!p.masterLayout || HYPER_REPEATED_ML.has(p.masterLayout)) {
        const mlIdx = strHash(pid + '-ml') % uniqueMasterLayouts.length;
        p.masterLayout = uniqueMasterLayouts[mlIdx];
        upgradedMasterLayouts++;
    }

    // 2. Diversify Floor Plans
    // A project should have 1 distinct floor plan per configuration (e.g. 2 BHK, 3 BHK)
    const configs = (p.configurations && p.configurations.length > 0) 
        ? p.configurations 
        : ['2 BHK', '3 BHK'];
    
    // Check if project has the default 4-plan repetitive fingerprint
    const isRepetitiveFp = !p.floorPlans || p.floorPlans.length === 0 || 
        (p.floorPlans.length === 4 && p.floorPlans[0].includes('dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj'));

    if (isRepetitiveFp) {
        const assignedPlans = [];
        for (let cIdx = 0; cIdx < configs.length; cIdx++) {
            const conf = configs[cIdx];
            const planIdx = strHash(`${pid}-${conf}-${cIdx}`) % uniqueFloorPlans.length;
            assignedPlans.push(uniqueFloorPlans[planIdx]);
        }
        p.floorPlans = assignedPlans;
        upgradedFloorPlans++;
    }

    // 3. Enrich Gallery if fewer than 5 images
    let imgs = Array.isArray(p.images) ? [...p.images] : [];
    if (imgs.length < 5) {
        const needed = 6 - imgs.length;
        for (let gIdx = 0; gIdx < needed; gIdx++) {
            const assetIdx = strHash(`${pid}-gallery-${gIdx}`) % uniqueGallery.length;
            const asset = uniqueGallery[assetIdx];
            if (!imgs.includes(asset)) {
                imgs.push(asset);
            }
        }
        p.images = imgs;
        enrichedGalleries++;
    }
}

console.log(`✅ Upgraded Master Layouts on ${upgradedMasterLayouts} projects.`);
console.log(`✅ Upgraded Floor Plans on ${upgradedFloorPlans} projects.`);
console.log(`✅ Enriched Galleries on ${enrichedGalleries} projects.`);

// Write back to mockData.ts
const newContent = `import { Locality, Builder, Project } from '../types';\n\nexport const LOCATIONS: Locality[] = ${JSON.stringify(locations, null, 2)};\n\nexport const BUILDERS: Builder[] = ${JSON.stringify(builders, null, 2)};\n\nexport const PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};\n`;

writeFileSync(mockDataPath, newContent, 'utf-8');
console.log('✅ Successfully wrote upgraded architectural assets into mockData.ts!');
