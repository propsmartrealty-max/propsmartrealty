import json
import re

mock_data_path = 'src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update builder b-supreme-universal
builder_pattern = r'\{\s*\"id\":\s*\"b-supreme-universal\"[\s\S]*?\n  \},'
updated_builder = '''{
    "id": "b-supreme-universal",
    "name": "Supreme Universal",
    "slug": "supreme-universal",
    "logo": "/images/builders/supreme.svg",
    "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/9bf131e2-193e-4b27-b4cf-f1b812dec769/gallery/mvtqm8n6-ek1abx.webp",
    "description": "Supreme Universal is a premier luxury real estate developer with over 40 years of excellence across Mumbai, Pune, and Lonavala, renowned for architectural masterpieces, boutique luxury redevelopments, and landmark townships with 100% MahaRERA regulatory compliance.",
    "establishedYear": 1982,
    "totalProjects": 75,
    "ongoingProjects": 14,
    "locations": [
      "Pune",
      "Mumbai",
      "Lonavala"
    ],
    "experience": 42,
    "trustScore": 9.8,
    "isVerified": true
  },'''

if re.search(builder_pattern, content):
    content = re.sub(builder_pattern, updated_builder, content, count=1)
    print("Updated b-supreme-universal builder profile.")
else:
    print("WARNING: b-supreme-universal builder pattern not found!")

# 2. Add New Localities if missing
new_localities = [
    {
        "id": "boat-club-road",
        "name": "Boat Club Road",
        "slug": "boat-club-road",
        "city": "Pune",
        "zone": "South & Central",
        "isFeatured": True,
        "projectCount": 8,
        "avgPriceSqft": 18500,
        "appreciation_rate": 9.5,
        "image": "/images/localities/boat-club-road.svg",
        "tagline": "Premier Ultra-Luxury Waterfront & Boulevard Residences",
        "description": "Pune's most coveted ultra-prime residential corridor along the Mula-Mutha river, featuring elite private residences, diplomatic enclaves, and premier lifestyle connectivity."
    },
    {
        "id": "khar-west",
        "name": "Khar West",
        "slug": "khar-west",
        "city": "Mumbai",
        "zone": "Western Suburbs",
        "isFeatured": True,
        "projectCount": 12,
        "avgPriceSqft": 52000,
        "appreciation_rate": 9.2,
        "image": "/images/localities/khar-west.svg",
        "tagline": "High-End Coastal Luxury & Boutique High-Street Haven",
        "description": "Exclusive residential micro-market nestled between Bandra and Santacruz, celebrated for high-net-worth boutique residences, luxury dining, and sea-facing promenades."
    },
    {
        "id": "dadar",
        "name": "Dadar",
        "slug": "dadar",
        "city": "Mumbai",
        "zone": "Central Suburbs",
        "isFeatured": True,
        "projectCount": 15,
        "avgPriceSqft": 38000,
        "appreciation_rate": 8.8,
        "image": "/images/localities/dadar.svg",
        "tagline": "Heritage Cultural Center & Trans-Harbour Gateway",
        "description": "Historic heart of Mumbai offering unmatched multi-modal transit connectivity, Shivaji Park sea breeze, and modern luxury skyscraper redevelopments."
    }
]

loc_match = re.search(r'export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS', content)
if loc_match:
    loc_json_str = loc_match.group(1)
    current_locs = json.loads(loc_json_str)
    existing_loc_ids = {l['id'] for l in current_locs}
    
    added_locs = 0
    for nl in new_localities:
        if nl['id'] not in existing_loc_ids:
            current_locs.append(nl)
            added_locs += 1
            print(f"Added locality: {nl['id']} ({nl['name']})")
            
    if added_locs > 0:
        new_loc_json = json.dumps(current_locs, indent=2)
        content = content[:loc_match.start(1)] + new_loc_json + content[loc_match.end(1):]
        print(f"Updated LOCATIONS in mockData.ts with {added_locs} new localities.")

# Save intermediate
with open(mock_data_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Builder & Localities updated successfully.")
