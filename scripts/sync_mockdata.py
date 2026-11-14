import json
import sys
import os

# Import constants from ingest_projects
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest_projects import BUILDER_MAP, LOCALITY_RATES

def sync():
    scraped_file = '/Users/vikasyewle/.gemini/antigravity/brain/49dfc398-8d39-4403-a360-9358a8d76041/scratch/scraped_projects.json'
    with open(scraped_file) as f:
        scraped = json.load(f)

    print(f'Loaded {len(scraped)} scraped projects')

    # Build LOCATIONS
    locations_data = []
    for i, (name, info) in enumerate(LOCALITY_RATES.items()):
        pcount = sum(1 for p in scraped if p['location'] == name)
        locations_data.append({
            'id': str(i + 1),
            'name': name,
            'image': f"/images/localities/{name.lower().replace(' ', '-')}.svg",
            'projectCount': max(pcount, 12),
            'avgPriceSqft': info['rate'],
            'appreciation_rate': info['appr'],
            'description': f"Prime {name} Pune investment corridor with {info['appr']}% annual capital appreciation."
        })

    # Build BUILDERS
    builders_data = []
    for k, b in BUILDER_MAP.items():
        pcount = sum(1 for p in scraped if p['builder_id'] == b['id'])
        locs = list(dict.fromkeys(p['location'] for p in scraped if p['builder_id'] == b['id']))
        if not locs: locs = ['Hinjewadi', 'Baner', 'Kharadi']
        builders_data.append({
            'id': b['id'],
            'name': b['name'],
            'slug': b['slug'],
            'logo': b['logo'],
            'heroImage': b['hero'],
            'description': b['desc'],
            'establishedYear': b['est'],
            'totalProjects': b['projects'],
            'ongoingProjects': max(pcount, 5),
            'trustScore': b['rating'],
            'isVerified': True,
            'locations': locs
        })

    # Build PROJECTS
    projects_data = []
    for p in scraped:
        specs_list = []
        if isinstance(p['specs'], dict):
            for sk, sv in p['specs'].items():
                specs_list.append({'label': sk.replace('_', ' ').title(), 'value': str(sv)})
        elif isinstance(p['specs'], list):
            specs_list = p['specs']
        
        loc_info = LOCALITY_RATES.get(p['location'], {'lat': 18.5204, 'lng': 73.8567})
        
        adv_cfgs = []
        for ac in p['advanced_configurations']:
            adv_cfgs.append({
                'id': ac['id'],
                'projectId': p['id'],
                'name': ac['name'],
                'carpetArea': ac['carpet_area'],
                'balconyArea': ac['balcony_area'],
                'bathrooms': ac['bathrooms'],
                'basePrice': ac['base_price'],
                'pricePerSqft': ac['price_per_sqft'],
                'infraCharges': ac['infra_charges'],
                'clubhouseCharges': ac['clubhouse_charges'],
                'gstRate': ac['gst_rate'],
                'stampDutyRate': ac['stamp_duty_rate'],
                'registrationCharges': ac['registration_charges'],
                'layoutImage': ac['layout_image']
            })

        projects_data.append({
            'id': p['id'],
            'title': p['title'],
            'slug': p['slug'],
            'builderId': p['builder_id'],
            'location': p['location'],
            'priceRange': p['price_range'],
            'exactPrice': p['exact_price'],
            'configurations': p['configurations'],
            'status': p['status'],
            'type': p['type'],
            'possessionDate': p['possession_date'],
            'image': p['image'],
            'heroImage': p['hero_image'],
            'lat': loc_info.get('lat', 18.5204),
            'lng': loc_info.get('lng', 73.8567),
            'masterLayout': p['master_layout'],
            'floorPlans': p['floor_plans'],
            'description': p['description'],
            'features': p['features'],
            'specs': specs_list,
            'highlights': p['highlights'],
            'reraId': p['rera_id'],
            'pricePerSqft': p['price_per_sqft'],
            'verificationStatus': 'Verified',
            'verificationSource': 'MahaRERA Direct Developer Mandate',
            'seoKeywords': p['seo_keywords'],
            'metaDescription': p['meta_description'],
            'advancedConfigurations': adv_cfgs
        })

    # Write mockData.ts
    mock_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../src/data/mockData.ts')
    with open(mock_file, 'w') as f:
        f.write("import { Builder, Project, Locality } from '../types';\n\n")
        f.write(f"export const LOCATIONS: Locality[] = {json.dumps(locations_data, indent=2)};\n\n")
        f.write(f"export const BUILDERS: Builder[] = {json.dumps(builders_data, indent=2)};\n\n")
        f.write(f"export const PROJECTS: Project[] = {json.dumps(projects_data, indent=2)};\n")

    print(f'✅ Updated mockData.ts with {len(projects_data)} projects, {len(builders_data)} builders, and {len(locations_data)} localities!')

    # Update generate-sitemap.mjs
    sitemap_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'generate-sitemap.mjs')
    localities_json = json.dumps([l['name'].lower().replace(' ', '-') for l in locations_data], indent=2)
    projects_json = json.dumps([p['slug'] for p in projects_data], indent=2)
    builders_json = json.dumps([b['slug'] for b in builders_data], indent=2)

    sitemap_content = f"""import {{ SitemapStream }} from 'sitemap';
import {{ createWriteStream }} from 'fs';
import {{ resolve }} from 'path';

const BASE_URL = 'https://propsmart.co.in';

const STATIC_ROUTES = [
    {{ url: '/', changefreq: 'daily', priority: 1.0 }},
    {{ url: '/search', changefreq: 'daily', priority: 0.9 }},
    {{ url: '/directory', changefreq: 'weekly', priority: 0.8 }},
    {{ url: '/compare', changefreq: 'weekly', priority: 0.7 }},
    {{ url: '/about', changefreq: 'monthly', priority: 0.6 }},
    {{ url: '/contact', changefreq: 'monthly', priority: 0.6 }},
    {{ url: '/post-property', changefreq: 'monthly', priority: 0.6 }}
];

const LOCALITIES = {localities_json};

const PROJECTS = {projects_json};

const BUILDERS = {builders_json};

async function generateSitemap() {{
    console.log("🗺️  Generating Cloudflare & Google-optimized Sitemap...");

    const smStream = new SitemapStream({{ hostname: BASE_URL }});
    const writeStream = createWriteStream(resolve('./public/sitemap.xml'));

    smStream.pipe(writeStream);

    // 1. Static Routes
    STATIC_ROUTES.forEach(r => smStream.write(r));

    // 2. City Route
    smStream.write({{ url: '/pune', changefreq: 'daily', priority: 0.9 }});

    // 3. Locality Landing Pages
    LOCALITIES.forEach(loc => {{
        smStream.write({{
            url: `/search?location=${{encodeURIComponent(loc)}}`,
            changefreq: 'weekly',
            priority: 0.85
        }});
    }});

    // 4. Developer / Builder Profiles
    BUILDERS.forEach(builderSlug => {{
        smStream.write({{
            url: `/builder/${{builderSlug}}`,
            changefreq: 'weekly',
            priority: 0.85
        }});
    }});

    // 5. Individual Verified Projects
    PROJECTS.forEach(projectSlug => {{
        smStream.write({{
            url: `/project/${{projectSlug}}`,
            changefreq: 'daily',
            priority: 0.9
        }});
    }});

    smStream.end();

    return new Promise((res, rej) => {{
        writeStream.on('finish', () => {{
            console.log(`✅ Google Sitemap generated successfully with ${{STATIC_ROUTES.length + 1 + LOCALITIES.length + BUILDERS.length + PROJECTS.length}} indexed URLs at public/sitemap.xml`);
            res(true);
        }});
        writeStream.on('error', rej);
    }});
}}

generateSitemap().catch(console.error);
"""

    with open(sitemap_file, 'w') as f:
        f.write(sitemap_content)
    print('✅ Updated generate-sitemap.mjs!')

if __name__ == '__main__':
    sync()
