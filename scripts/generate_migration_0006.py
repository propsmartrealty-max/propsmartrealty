import json
import re

mock_data_path = 'src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
projects = json.loads(m.group(1))

# Also extract BUILDERS and LOCATIONS
b_match = re.search(r'export const BUILDERS: Builder\[\] = (\[[\s\S]*?\]);\s*export const PROJECTS', content)
l_match = re.search(r'export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\s*export const BUILDERS', content)

builders = json.loads(b_match.group(1)) if b_match else []
localities = json.loads(l_match.group(1)) if l_match else []

print(f"Loaded: {len(projects)} projects, {len(builders)} builders, {len(localities)} localities")

sql_lines = []
sql_lines.append("-- ==============================================================================")
sql_lines.append("-- Cloudflare D1 Migration 0006: Schema Expansion & Full Parity Sync")
sql_lines.append("-- Adds lat, lng, configuration_details, amenities, faqs, brochure_url")
sql_lines.append("-- ==============================================================================\n")

# Alter table commands (SQLite ignores or we do safe ALTER)
# In D1/SQLite, ADD COLUMN does not support IF NOT EXISTS, so we can run them or handle if column exists
# We will create ALTER TABLE statements:
for col, col_type in [
    ('lat', 'REAL'),
    ('lng', 'REAL'),
    ('configuration_details', 'TEXT'),
    ('amenities', 'TEXT'),
    ('faqs', 'TEXT'),
    ('brochure_url', 'TEXT')
]:
    sql_lines.append(f"ALTER TABLE projects ADD COLUMN {col} {col_type};")

sql_lines.append("\n-- Reset catalog data")
sql_lines.append("DELETE FROM projects;")
sql_lines.append("DELETE FROM builders;")
sql_lines.append("DELETE FROM localities;\n")

def esc(v):
    if v is None:
        return "NULL"
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, (list, dict)):
        s = json.dumps(v, ensure_ascii=False)
        return "'" + s.replace("'", "''") + "'"
    return "'" + str(v).replace("'", "''") + "'"

# Localities
sql_lines.append("-- Insert Localities")
for loc in localities:
    cols = ['id', 'name', 'slug', 'city', 'zone', 'is_featured', 'project_count', 'avg_price_sqft', 'appreciation_rate', 'image_url', 'tagline', 'description']
    vals = [
        esc(loc.get('id')),
        esc(loc.get('name')),
        esc(loc.get('slug') or loc.get('id')),
        esc(loc.get('city') or 'Pune'),
        esc(loc.get('zone') or 'West Pune'),
        '1' if loc.get('isFeatured') else '0',
        str(loc.get('count') or loc.get('projectCount') or 0),
        str(loc.get('avgPriceSqft') or 8000),
        str(loc.get('appreciation_rate') or 8.0),
        esc(loc.get('image') or '/images/localities/default-locality.svg'),
        esc(f"{loc.get('name')} Real Estate Corridor"),
        esc(f"Prime residential micro-market in {loc.get('name')}, {loc.get('city') or 'Pune'}.")
    ]
    sql_lines.append(f"INSERT INTO localities ({', '.join(cols)}) VALUES ({', '.join(vals)});")

# Builders
sql_lines.append("\n-- Insert Builders")
for b in builders:
    cols = ['id', 'name', 'slug', 'logo', 'hero_image', 'description', 'established_year', 'total_projects', 'ongoing_projects', 'locations', 'experience', 'trust_score', 'is_verified']
    vals = [
        esc(b.get('id')),
        esc(b.get('name')),
        esc(b.get('slug') or b.get('id')),
        esc(b.get('logo')),
        esc(b.get('heroImage')),
        esc(b.get('description')),
        str(b.get('establishedYear') or 2000),
        str(b.get('totalProjects') or 10),
        str(b.get('ongoingProjects') or 3),
        esc(b.get('locations') or []),
        str(b.get('experience') or 20),
        str(b.get('trustScore') or 90),
        '1' if b.get('isVerified', True) else '0'
    ]
    sql_lines.append(f"INSERT INTO builders ({', '.join(cols)}) VALUES ({', '.join(vals)});")

# Projects
sql_lines.append("\n-- Insert Projects (836 with full schema parity)")
project_cols = [
    'id', 'title', 'slug', 'builder_id', 'location', 'price_range', 'exact_price',
    'configurations', 'status', 'type', 'possession_date', 'image', 'hero_image',
    'master_layout', 'floor_plans', 'description', 'features', 'specs', 'highlights',
    'rera_id', 'price_per_sqft', 'verification_status', 'city', 'images', 'rating',
    'reviews_count', 'is_verified', 'is_featured', 'lat', 'lng', 'configuration_details',
    'amenities', 'faqs', 'brochure_url'
]

for p in projects:
    vals = [
        esc(p.get('id')),
        esc(p.get('title')),
        esc(p.get('slug')),
        esc(p.get('builderId')),
        esc(p.get('location')),
        esc(p.get('priceRange')),
        esc(p.get('exactPrice')),
        esc(p.get('configurations') or []),
        esc(p.get('status') or 'Under Construction'),
        esc(p.get('type') or 'Residential'),
        esc(p.get('possessionDate') or 'Dec 2026'),
        esc(p.get('image')),
        esc(p.get('heroImage') or p.get('image')),
        esc(p.get('masterLayout')),
        esc(p.get('floorPlans') or []),
        esc(p.get('description')),
        esc(p.get('features') or []),
        esc(p.get('specs') or []),
        esc(p.get('highlights') or []),
        esc(p.get('reraId')),
        str(p.get('pricePerSqft') or 8500),
        esc(p.get('verificationStatus') or 'Verified'),
        esc(p.get('city') or 'Pune'),
        esc(p.get('images') or [p.get('image')]),
        '4.8',
        '100',
        '1',
        '1' if p.get('featured') else '0',
        str(p.get('lat') or 18.5204),
        str(p.get('lng') or 73.8567),
        esc(p.get('configurationDetails') or []),
        esc(p.get('amenities') or p.get('features') or []),
        esc(p.get('faqs') or []),
        esc(p.get('brochureUrl') or '')
    ]
    sql_lines.append(f"INSERT INTO projects ({', '.join(project_cols)}) VALUES ({', '.join(vals)});")

output_file = 'migrations/0006_schema_expansion_and_full_sync.sql'
with open(output_file, 'w', encoding='utf-8') as f:
    f.write('\n'.join(sql_lines))

print(f"✅ Generated {output_file} with {len(sql_lines)} SQL lines.")
