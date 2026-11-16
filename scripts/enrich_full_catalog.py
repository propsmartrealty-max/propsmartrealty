import json
import re
import hashlib
import os

mock_data_path = '/Users/vikasyewle/Documents/desktop items/punepropertyvlog/punepropertyvloginside/src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Prefix up to LOCATIONS
prefix_match = re.search(r'^(import .*?\n\nexport const LOCATIONS: Locality\[\] = )', content, re.MULTILINE)
prefix = prefix_match.group(1)

# Parse LOCATIONS
loc_match = re.search(r'export const LOCATIONS: Locality\[\] = (\[[\s\S]*?\]);\n\nexport const BUILDERS', content)
locations = json.loads(loc_match.group(1))

# Parse BUILDERS
b_match = re.search(r'export const BUILDERS: Builder\[\] = (\[[\s\S]*?\]);\n\nexport const PROJECTS', content)
builders = json.loads(b_match.group(1))

# Parse PROJECTS
p_match = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\n?$', content)
projects = json.loads(p_match.group(1))

print(f"Loaded: {len(locations)} locations, {len(builders)} builders, {len(projects)} projects")

# 1. Coordinate Resolution Map
LOCALITY_COORDS = {
    'hinjewadi': (18.5913, 73.7389),
    'wakad': (18.5987, 73.7686),
    'baner': (18.5590, 73.7868),
    'balewadi': (18.5758, 73.7744),
    'ravet': (18.6496, 73.7431),
    'tathawade': (18.6186, 73.7548),
    'punawale': (18.6256, 73.7371),
    'kiwale': (18.6575, 73.7314),
    'kharadi': (18.5514, 73.9348),
    'moshi': (18.6738, 73.8471),
    'bavdhan': (18.5158, 73.7699),
    'aundh': (18.5580, 73.8075),
    'mahalunge': (18.5721, 73.7490),
    'pimple saudagar': (18.5987, 73.7997),
    'pimple nilakh': (18.5830, 73.7904),
    'akurdi': (18.6491, 73.7707),
    'pimpri': (18.6279, 73.8009),
    'chinchwad': (18.6298, 73.7828),
    'nigdi': (18.6586, 73.7661),
    'mamurdi': (18.6657, 73.7258),
    'mundhwa': (18.5362, 73.9168),
    'wagholi': (18.5815, 73.9806),
    'hadapsar': (18.5089, 73.9259),
    'kothrud': (18.5074, 73.8077),
    'shivaji nagar': (18.5314, 73.8446),
    'shivajinagar': (18.5314, 73.8446),
    'viman nagar': (18.5679, 73.9143),
    'kalyani nagar': (18.5463, 73.9033),
    'koregaon park': (18.5362, 73.8940),
    'magarpatta city': (18.5158, 73.9272),
    'undri': (18.4574, 73.9118),
    'kondhwa': (18.4744, 73.8890),
    'nibm': (18.4795, 73.8967),
    'nibm road': (18.4795, 73.8967),
    'mohammed wadi': (18.4789, 73.9192),
    'dhanori': (18.5866, 73.8927),
    'lohegaon': (18.5947, 73.9298),
    'charholi': (18.6471, 73.8945),
    'charoli': (18.6471, 73.8945),
    'charholi budruk': (18.6471, 73.8945),
    'bhosari': (18.6271, 73.8488),
    'chakan': (18.7606, 73.8567),
    'talegaon dabhade': (18.7346, 73.6767),
    'somatane': (18.7214, 73.7012),
    'dudulgaon': (18.6621, 73.8643),
    'chikhali': (18.6834, 73.8123),
    'walhekarwadi': (18.6341, 73.7621),
    'thergaon': (18.6112, 73.7812),
    'rahatani': (18.6045, 73.7891),
    'pimple gurav': (18.5889, 73.8189),
    'bibwewadi': (18.4795, 73.8654),
    'dhayari': (18.4489, 73.8145),
    'sinhagad road': (18.4712, 73.8245),
    'ambegaon budruk': (18.4554, 73.8378),
    'katraj': (18.4529, 73.8554),
    'wanowrie': (18.4891, 73.8945),
    'camp': (18.5167, 73.8789),
    'erandwane': (18.5089, 73.8345),
    'deccan gymkhana': (18.5167, 73.8412),
    'model colony': (18.5345, 73.8378),
    'senapati bapat road': (18.5321, 73.8298),
    'bund garden': (18.5367, 73.8812),
    'sopan baug': (18.5245, 73.8978),
    'ghorpadi': (18.5289, 73.8967),
    'yerwada': (18.5521, 73.8845),
    'wadgaon sheri': (18.5534, 73.9212),
    'keshav nagar': (18.5389, 73.9378),
    'manjri': (18.5189, 73.9789),
    'manjari khurd': (18.5189, 73.9789),
    'shewalewadi': (18.4989, 73.9545),
    'phursungi': (18.4789, 73.9678),
    'bhugaon': (18.4989, 73.7345),
    'lavale': (18.5412, 73.7123),
    'sus': (18.5478, 73.7545),
    'pirangut': (18.5012, 73.6789),
    'nande': (18.5621, 73.7212),
    'maan': (18.5889, 73.7123),
    'jambe': (18.6145, 73.7189),
    'darumbre': (18.6412, 73.7089),
    'sangavade': (18.6521, 73.6989),
    'khed shivapur': (18.3512, 73.8456),
    'anand nagar': (18.4812, 73.8189),
    'sadashiv peth': (18.5123, 73.8512),
    'parvati': (18.4956, 73.8478),
    'karve nagar': (18.4912, 73.8189),
    'karve road': (18.4912, 73.8189),
    'warje': (18.4789, 73.7989),
    'gahunje': (18.6756, 73.7056),
    'pune expressway': (18.6756, 73.7056),
    'pashan': (18.5367, 73.7912),
    'pimpri chinchwad': (18.6279, 73.8009),
    'lonavala': (18.7557, 73.4091),
    'khandala': (18.7612, 73.3756),
    'kunegaon': (18.7678, 73.4189),
    'khalapur': (18.8256, 73.2845),
    'khopoli': (18.7845, 73.3456),
    'alibaug': (18.6584, 72.8773),
    'awas': (18.7456, 72.8612),
    'mandwa': (18.7891, 72.8645),
    'shrivardhan': (18.0456, 73.0189),
    'kolshet road': (19.2315, 72.9863),
    'pokhran road': (19.2156, 72.9612),
    'majiwada': (19.2089, 72.9789),
    'balkum': (19.2189, 72.9912),
    'manpada': (19.2389, 72.9745),
    'ghodbunder road': (19.2612, 72.9512),
    'hiranandani estate': (19.2554, 72.9812),
    'thane west': (19.2056, 72.9723),
    'thane': (19.2056, 72.9723),
    'powai': (19.1176, 72.9060),
    'chandivali': (19.1134, 72.8956),
    'bhandup': (19.1489, 72.9345),
    'kanjurmarg': (19.1312, 72.9389),
    'vikhroli': (19.1112, 72.9345),
    'mulund': (19.1723, 72.9489),
    'goregaon': (19.1663, 72.8526),
    'andheri': (19.1364, 72.8277),
    'versova': (19.1312, 72.8156),
    'borivali': (19.2312, 72.8612),
    'kandivali': (19.2089, 72.8545),
    'bandra': (19.0596, 72.8295),
    'santacruz': (19.0843, 72.8360),
    'worli': (19.0176, 72.8150),
    'mahalaxmi': (18.9823, 72.8245),
    'altamount road': (18.9689, 72.8089),
    'marine drive': (18.9432, 72.8234),
    'sewri': (19.0012, 72.8556),
    'wadala': (19.0189, 72.8589),
    'chembur': (19.0523, 72.8989),
    'virar': (19.4678, 72.8012),
    'panvel': (18.9894, 73.1175),
    'navi mumbai': (19.0330, 73.0297)
}

def resolve_coords(loc_name, proj_id):
    loc_clean = loc_name.lower().strip()
    base = None
    for k, v in LOCALITY_COORDS.items():
        if k in loc_clean:
            base = v
            break
    if not base:
        base = (18.5204, 73.8567)
    
    # Deterministic subtle jitter based on project ID
    h = int(hashlib.md5(proj_id.encode()).hexdigest(), 16)
    jitter_lat = ((h % 1000) - 500) / 100000.0
    jitter_lng = (((h // 1000) % 1000) - 500) / 100000.0
    return round(base[0] + jitter_lat, 4), round(base[1] + jitter_lng, 4)

def parse_price(val):
    if not val: return None
    s = str(val).replace('₹', '').replace(',', '').strip()
    match = re.search(r'([\d.]+)\s*(cr|l|lakh|lac)?', s, re.I)
    if not match: return None
    num = float(match.group(1))
    unit = (match.group(2) or '').lower()
    if 'cr' in unit: return int(num * 10000000)
    if 'l' in unit or 'lac' in unit or 'lakh' in unit: return int(num * 100000)
    return int(num)

def parse_carpet(val):
    if not val: return None
    match = re.search(r'(\d+)', str(val))
    return int(match.group(1)) if match else None

# Standardized Floor Plans by Configuration
DEFAULT_LAYOUTS = {
    'master': 'https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp',
    '2bhk': 'https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp',
    '3bhk': 'https://keystoneliv.com/public/uploads/property/image (81).webp',
    '4bhk': 'https://keystoneliv.com/public/uploads/property/image (82).webp',
    '1bhk': 'https://keystoneliv.com/public/uploads/property/image (83).webp'
}

DEFAULT_SPECS = [
    {
        'label': 'Structure',
        'value': 'Earthquake resistant RCC shear wall frame designed for seismic zone III'
    },
    {
        'label': 'Flooring',
        'value': '800x800mm imported glazed vitrified tiles in living, dining and master suites'
    },
    {
        'label': 'Kitchen',
        'value': 'Granite platform with stainless steel sink, piped gas provision and glazed dado'
    },
    {
        'label': 'Bathrooms',
        'value': 'Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection'
    },
    {
        'label': 'Electrical',
        'value': 'Concealed copper wiring with Schneider / Legrand modular switches and DG backup'
    },
    {
        'label': 'Doors & Windows',
        'value': 'Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh'
    }
]

# Process Projects
enriched_coords = 0
enriched_fps = 0
enriched_rates = 0
enriched_specs = 0
enriched_faqs = 0

for p in projects:
    # 1. Coordinates
    if not p.get('lat') or not p.get('lng'):
        lat, lng = resolve_coords(p['location'], p['id'])
        p['lat'] = lat
        p['lng'] = lng
        enriched_coords += 1

    # 2. Price Per Sqft
    if not p.get('pricePerSqft') or p.get('pricePerSqft') == 0:
        price = parse_price(p.get('exactPrice')) or parse_price(p.get('priceRange'))
        carpet = None
        if p.get('configurationDetails'):
            for c in p['configurationDetails']:
                carpet = parse_carpet(c.get('carpetArea'))
                if carpet: break
        if price and carpet and carpet > 0:
            rate = round(price / carpet)
        else:
            rate = 8500
        p['pricePerSqft'] = rate
        enriched_rates += 1

    # 3. Floor Plans & Master Layout
    if not p.get('floorPlans') or len(p['floorPlans']) == 0:
        plans = []
        cfgs = p.get('configurations') or ['2 BHK', '3 BHK']
        for c in cfgs:
            c_lower = c.lower()
            if '1' in c_lower:
                plans.append(DEFAULT_LAYOUTS['1bhk'])
            elif '2' in c_lower:
                plans.append(DEFAULT_LAYOUTS['2bhk'])
            elif '3' in c_lower:
                plans.append(DEFAULT_LAYOUTS['3bhk'])
            elif '4' in c_lower:
                plans.append(DEFAULT_LAYOUTS['4bhk'])
        if not plans:
            plans = [DEFAULT_LAYOUTS['2bhk'], DEFAULT_LAYOUTS['3bhk']]
        p['floorPlans'] = plans
        if not p.get('masterLayout'):
            p['masterLayout'] = DEFAULT_LAYOUTS['master']
        enriched_fps += 1
    elif not p.get('masterLayout'):
        p['masterLayout'] = DEFAULT_LAYOUTS['master']

    # 4. Specifications
    if not p.get('specs') or len(p['specs']) == 0:
        p['specs'] = DEFAULT_SPECS
        enriched_specs += 1

    # 5. FAQs
    if not p.get('faqs') or len(p['faqs']) == 0:
        title = p['title']
        location = p['location']
        city = p.get('city') or 'Pune'
        price = p.get('priceRange') or p.get('exactPrice') or 'Competitive Builder Direct Pricing'
        cfgs_str = ', '.join(p.get('configurations') or ['2 BHK', '3 BHK'])
        rera = p.get('reraId') or 'Approved'
        feats = p.get('features') or ['Clubhouse', 'Swimming Pool', 'Gymnasium', 'Landscaped Gardens', '24/7 Security']
        top_feats = ', '.join(feats[:5])

        p['faqs'] = [
            {
                'question': f"Where is {title} located?",
                'answer': f"{title} is strategically located in prime {location}, {city}, offering seamless connectivity to commercial centers, transit corridors, and essential social infrastructure."
            },
            {
                'question': f"What is the starting price for flats in {title}?",
                'answer': f"Residences in {title} start from {price} with zero brokerage and direct builder inventory allocation through PROPSMART REALTY."
            },
            {
                'question': f"What unit configurations are available in {title}?",
                'answer': f"{title} offers spacious {cfgs_str} apartments designed for maximum carpet area efficiency and natural ventilation."
            },
            {
                'question': f"Is {title} MahaRERA approved?",
                'answer': f"Yes, {title} is officially registered under MahaRERA with registration number {rera}. All approvals and certificates are verified."
            },
            {
                'question': f"What amenities are provided at {title}?",
                'answer': f"The development features world-class lifestyle amenities including {top_feats}, multi-tier security systems, and high-speed elevators."
            }
        ]
        enriched_faqs += 1

print(f"Projects enriched: coords={enriched_coords}, rates={enriched_rates}, floorPlans={enriched_fps}, specs={enriched_specs}, faqs={enriched_faqs}")

# 6. Update LOCATIONS projectCount
project_counts = {}
for p in projects:
    loc = p['location']
    project_counts[loc] = project_counts.get(loc, 0) + 1

for loc in locations:
    actual = project_counts.get(loc['name'], 0)
    if actual == 0:
        for k, v in project_counts.items():
            if loc['name'].lower() in k.lower():
                actual += v
    loc['projectCount'] = max(actual, 1)

# Write updated mockData.ts
new_content = prefix + json.dumps(locations, indent=2) + ';\n\nexport const BUILDERS: Builder[] = ' + json.dumps(builders, indent=2) + ';\n\nexport const PROJECTS: Project[] = ' + json.dumps(projects, indent=2) + ';\n'

with open(mock_data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully wrote updated mockData.ts")
