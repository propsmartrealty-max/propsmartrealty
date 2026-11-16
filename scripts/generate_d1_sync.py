import json
import re
import os

mock_data_path = '/Users/vikasyewle/Documents/desktop items/punepropertyvlog/punepropertyvloginside/src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

loc_match = re.search(r'export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS', content)
locations = json.loads(loc_match.group(1))

b_match = re.search(r'export const BUILDERS: Builder\[\] = (\[[\s\S]*?\]);\n\nexport const PROJECTS', content)
builders = json.loads(b_match.group(1))

p_match = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\n?$', content)
projects = json.loads(p_match.group(1), strict=False)

def esc(val):
    if val is None:
        return 'NULL'
    if isinstance(val, (int, float)):
        return str(val)
    if isinstance(val, bool):
        return '1' if val else '0'
    if isinstance(val, (list, dict)):
        val = json.dumps(val, ensure_ascii=False)
    # Escape single quotes for SQLite
    s = str(val).replace("'", "''")
    return f"'{s}'"

out = []
out.append("-- ==============================================================================")
out.append("-- Cloudflare D1 Migration 0005: 100% Full Catalog Sync")
out.append("-- PROPSMART REALTY: 727 Verified Projects, 303 Developers, 107 Micro-Markets")
out.append("-- ==============================================================================\n")

# 1. Clean existing records safely
out.append("-- 1. Reset Core Catalog Tables")
out.append("DELETE FROM projects;")
out.append("DELETE FROM builders;")
out.append("DELETE FROM localities;\n")

# 2. Insert Localities
out.append(f"-- 2. Insert Localities ({len(locations)})")
for loc in locations:
    l_id = esc(loc.get('id') or loc['name'].lower().replace(' ', '-'))
    l_name = esc(loc['name'])
    l_slug = esc(loc.get('slug') or loc['name'].lower().replace(' ', '-'))
    l_city = esc(loc.get('city') or 'Pune')
    l_zone = esc(loc.get('zone') or 'West Pune')
    l_is_feat = '1' if loc.get('isFeatured') else '0'
    l_proj_cnt = esc(loc.get('projectCount') or 0)
    l_rate = esc(loc.get('avgPriceSqft') or 8500)
    l_appr = esc(loc.get('appreciation_rate') or 8.0)
    l_img = esc(loc.get('image') or f"/images/localities/{loc['name'].lower().replace(' ', '-')}.svg")
    l_tag = esc(loc.get('tagline') or 'High Growth Corridor')
    l_desc = esc(loc.get('description') or f"Prime residential corridor in {loc['name']} with high capital appreciation.")
    
    out.append(f"INSERT INTO localities (id, name, slug, city, zone, is_featured, project_count, avg_price_sqft, appreciation_rate, image_url, tagline, description) VALUES ({l_id}, {l_name}, {l_slug}, {l_city}, {l_zone}, {l_is_feat}, {l_proj_cnt}, {l_rate}, {l_appr}, {l_img}, {l_tag}, {l_desc});")

out.append("\n-- 3. Insert Builders (303)")
for b in builders:
    b_id = esc(b['id'])
    b_name = esc(b['name'])
    b_slug = esc(b['slug'])
    b_logo = esc(b.get('logo'))
    b_hero = esc(b.get('heroImage'))
    b_desc = esc(b.get('description'))
    b_year = esc(b.get('establishedYear') or 2005)
    b_tot = esc(b.get('totalProjects') or 15)
    b_ong = esc(b.get('ongoingProjects') or 5)
    b_trust = esc(b.get('trustScore') or 9.5)
    b_ver = '1' if b.get('isVerified', True) else '0'
    b_exp = esc(b.get('experience') or 20)
    b_locs = esc(b.get('locations') or ['Pune'])

    out.append(f"INSERT INTO builders (id, name, slug, logo, hero_image, description, established_year, total_projects, ongoing_projects, trust_score, is_verified, experience, locations) VALUES ({b_id}, {b_name}, {b_slug}, {b_logo}, {b_hero}, {b_desc}, {b_year}, {b_tot}, {b_ong}, {b_trust}, {b_ver}, {b_exp}, {b_locs});")

out.append("\n-- 4. Insert Projects (727)")
for p in projects:
    p_id = esc(p['id'])
    p_title = esc(p['title'])
    p_slug = esc(p['slug'])
    p_b_id = esc(p['builderId'])
    p_loc = esc(p['location'])
    p_prange = esc(p.get('priceRange') or p.get('exactPrice'))
    p_exact = esc(p.get('exactPrice'))
    p_cfgs = esc(p.get('configurations') or ['2 BHK', '3 BHK'])
    p_status = esc(p.get('status') or 'Under Construction')
    p_type = esc(p.get('type') or 'Residential')
    p_pos = esc(p.get('possessionDate') or 'Dec 2027')
    p_img = esc(p.get('image'))
    p_hero = esc(p.get('heroImage') or p.get('image'))
    p_layout = esc(p.get('masterLayout'))
    p_fps = esc(p.get('floorPlans') or [])
    p_desc = esc(p.get('description'))
    p_feats = esc(p.get('features') or [])
    p_specs = esc(p.get('specs') or [])
    p_high = esc(p.get('highlights') or [])
    p_rera = esc(p.get('reraId') or 'Verified')
    p_rate = esc(p.get('pricePerSqft') or 8500)
    p_ver = esc(p.get('verificationStatus') or 'Verified')
    p_city = esc(p.get('city') or 'Pune')

    out.append(f"INSERT INTO projects (id, title, slug, builder_id, location, price_range, exact_price, configurations, status, type, possession_date, image, hero_image, master_layout, floor_plans, description, features, specs, highlights, rera_id, price_per_sqft, verification_status, city) VALUES ({p_id}, {p_title}, {p_slug}, {p_b_id}, {p_loc}, {p_prange}, {p_exact}, {p_cfgs}, {p_status}, {p_type}, {p_pos}, {p_img}, {p_hero}, {p_layout}, {p_fps}, {p_desc}, {p_feats}, {p_specs}, {p_high}, {p_rera}, {p_rate}, {p_ver}, {p_city});")

out.append("\n-- 5. Rebuild Full-Text Search Index")
out.append("DELETE FROM projects_fts;")
out.append("INSERT INTO projects_fts(id, title, slug, builder_id, location, description, configurations, features, highlights, rera_id)")
out.append("SELECT id, title, slug, builder_id, location, description, configurations, features, highlights, rera_id FROM projects;")

sql_content = '\n'.join(out) + '\n'

migration_path = '/Users/vikasyewle/Documents/desktop items/punepropertyvlog/punepropertyvloginside/migrations/0005_full_catalog_sync.sql'
with open(migration_path, 'w', encoding='utf-8') as f:
    f.write(sql_content)

print(f"Generated {migration_path} ({len(sql_content):,} bytes, {len(out):,} lines)")
