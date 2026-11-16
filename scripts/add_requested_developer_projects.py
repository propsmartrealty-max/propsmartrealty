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

existing_ids = {p['id'] for p in projects}
existing_slugs = {p['slug'] for p in projects}

print(f"Current count: {len(projects)} projects")

# Standard High-Res Image Libraries for Developers
RUNWAL_ASSETS = {
    'forests': [
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    'avenue': [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    'pinnacle': [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80'
    ],
    'sanctuary': [
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    'gardens': [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
    ],
    'elegante': [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    'nirvana': [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'
    ],
    'timeless': [
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ]
}

PUNE_ASSETS = [
    'https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp',
    'https://keystoneliv.com/public/uploads/property/OdEtAJGuBRZ8wWA1HACcHXBrWsP2uqZofPBtjreG.webp',
    'https://keystoneliv.com/public/uploads/property/BLW9Y5KiU8cRUE4rWhnOG6INo2o2q0WltwUg0EW9.webp',
    'https://keystoneliv.com/public/uploads/property/eu7ZJIm7DagLiWWVFPW2msrtCyUQdEIcLf4u8CPr.webp',
    'https://keystoneliv.com/public/uploads/property/3IXVm0CGbGygZ1umE9EqC4B0hP5Box6NNUOWrnMR.webp',
    'https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp',
    'https://keystoneliv.com/public/uploads/property/EgT38KqPYprgM9Wjnx1V6CjquaUeL86nNYlo2aeD.webp',
    'https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp'
]

LIFE_REPUBLIC_ASSETS = [
    '/images/projects/kolte-patil-life-republic/qrious-elevation.jpg',
    '/images/projects/kolte-patil-life-republic/qrious-clubhouse.jpg',
    'https://www.koltepatil.com/assets/uploads/overview/1736838615597289150.jpg',
    'https://www.koltepatil.com/assets/uploads/overview/17371057642004803003.jpg',
    'https://www.koltepatil.com/assets/uploads/overview/17368380161318147602.jpg',
    'https://www.koltepatil.com/assets/uploads/overview/1756736086132321226.jpg',
    'https://www.koltepatil.com/assets/uploads/overview/17742511611639045753.jpg'
]

DEFAULT_LAYOUTS = {
    'master': 'https://keystoneliv.com/public/uploads/property/CcdgBfirliL7GgALW5z6Z6Ouyv3pmKyq6yDTYer6.webp',
    '2bhk': 'https://keystoneliv.com/public/uploads/property/rdsxoqHOempJin3l6XPR603VLNKkXfr4ubFlujW4.webp',
    '3bhk': 'https://keystoneliv.com/public/uploads/property/image (81).webp',
    '4bhk': 'https://keystoneliv.com/public/uploads/property/image (82).webp',
    '1bhk': 'https://keystoneliv.com/public/uploads/property/image (83).webp'
}

DEFAULT_SPECS = [
    { 'label': 'Structure', 'value': 'Earthquake resistant RCC shear wall frame designed for seismic zone III' },
    { 'label': 'Flooring', 'value': '800x800mm imported glazed vitrified tiles in living, dining and master suites' },
    { 'label': 'Kitchen', 'value': 'Granite platform with stainless steel sink, piped gas provision and glazed dado' },
    { 'label': 'Bathrooms', 'value': 'Premium Kohler / Grohe sanitaryware and CP fittings with solar water connection' },
    { 'label': 'Electrical', 'value': 'Concealed copper wiring with Schneider / Legrand modular switches and DG backup' },
    { 'label': 'Doors & Windows', 'value': 'Laminated engineered wooden doors and heavy-duty powder coated aluminum sliding windows with mosquito mesh' }
]

def make_faqs(title, location, city, price, cfgs_str, rera, feats):
    top_feats = ', '.join(feats[:5])
    return [
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

new_projects = []

# ==============================================================================
# 1. RUNWAL GROUP PROJECTS (MUMBAI & MMR)
# ==============================================================================
runwal_data = [
    {
        'id': 'p-runwal-forests-kanjurmarg',
        'title': 'Runwal Forests',
        'slug': 'runwal-forests-kanjurmarg',
        'location': 'Kanjurmarg',
        'city': 'Mumbai',
        'priceRange': '₹1.45 Cr - ₹2.85 Cr',
        'exactPrice': '₹1.45 Cr',
        'pricePerSqft': 18800,
        'configurations': ['1.5 BHK', '2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '1.5 BHK', 'carpetArea': '530 sq.ft', 'priceRange': '₹1.45 Cr'},
            {'type': '2 BHK', 'carpetArea': '690 sq.ft', 'priceRange': '₹1.85 Cr'},
            {'type': '3 BHK', 'carpetArea': '980 sq.ft', 'priceRange': '₹2.85 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P51800000818',
        'lat': 19.1312, 'lng': 72.9389,
        'images': RUNWAL_ASSETS['forests'],
        'description': 'Runwal Forests at Kanjurmarg West is an iconic 15-acre urban oasis featuring 10 residential towers overlooking lush forest greens, a 35,000 sq.ft clubhouse, and 100% zero brokerage through PROPSMART REALTY.'
    },
    {
        'id': 'p-runwal-avenue-kanjurmarg',
        'title': 'Runwal Avenue',
        'slug': 'runwal-avenue-kanjurmarg',
        'location': 'Kanjurmarg',
        'city': 'Mumbai',
        'priceRange': '₹98.00 L - ₹1.85 Cr',
        'exactPrice': '₹98.00 L',
        'pricePerSqft': 19200,
        'configurations': ['1 BHK', '2 BHK'],
        'configurationDetails': [
            {'type': '1 BHK', 'carpetArea': '380 sq.ft', 'priceRange': '₹98.00 L'},
            {'type': '2 BHK', 'carpetArea': '595 sq.ft', 'priceRange': '₹1.55 Cr'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P51800026860',
        'lat': 19.1325, 'lng': 72.9405,
        'images': RUNWAL_ASSETS['avenue'],
        'description': 'Runwal Avenue at Kanjurmarg East represents high-street lifestyle living with Fifth Avenue retail galleria, landscaped sky amenities, and seamless suburban railway and metro connectivity.'
    },
    {
        'id': 'p-runwal-pinnacle-mulund',
        'title': 'Runwal Pinnacle',
        'slug': 'runwal-pinnacle-mulund',
        'location': 'Mulund West',
        'city': 'Mumbai',
        'priceRange': '₹1.85 Cr - ₹3.65 Cr',
        'exactPrice': '₹1.85 Cr',
        'pricePerSqft': 22500,
        'configurations': ['2 BHK', '2.5 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '640 sq.ft', 'priceRange': '₹1.85 Cr'},
            {'type': '2.5 BHK', 'carpetArea': '780 sq.ft', 'priceRange': '₹2.30 Cr'},
            {'type': '3 BHK', 'carpetArea': '1050 sq.ft', 'priceRange': '₹3.65 Cr'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Jun 2027',
        'reraId': 'P51800021322',
        'lat': 19.1723, 'lng': 72.9489,
        'images': RUNWAL_ASSETS['pinnacle'],
        'description': 'Runwal Pinnacle in Mulund West stands tall as the tallest residential sky-tower in the central suburbs (67 storeys), offering breathtaking Sanjay Gandhi National Park views and rooftop sky-decks.'
    },
    {
        'id': 'p-runwal-sanctuary-mulund',
        'title': 'Runwal Sanctuary',
        'slug': 'runwal-sanctuary-mulund',
        'location': 'Mulund West',
        'city': 'Mumbai',
        'priceRange': '₹1.65 Cr - ₹3.10 Cr',
        'exactPrice': '₹1.65 Cr',
        'pricePerSqft': 21000,
        'configurations': ['2 BHK', '2.5 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '610 sq.ft', 'priceRange': '₹1.65 Cr'},
            {'type': '2.5 BHK', 'carpetArea': '735 sq.ft', 'priceRange': '₹2.10 Cr'},
            {'type': '3 BHK', 'carpetArea': '940 sq.ft', 'priceRange': '₹3.10 Cr'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P51800027725',
        'lat': 19.1745, 'lng': 72.9465,
        'images': RUNWAL_ASSETS['sanctuary'],
        'description': 'Runwal Sanctuary Mulund West is an ultra-luxury hillside retreat adjoining green hill reserves, featuring 5 curated towers with multi-level podium amenities and zero brokerage booking.'
    },
    {
        'id': 'p-runwal-gardens-dombivli',
        'title': 'Runwal Gardens',
        'slug': 'runwal-gardens-dombivli',
        'location': 'Thane Extension, Kalyan-Bhiwandi Road',
        'city': 'Thane',
        'priceRange': '₹42.00 L - ₹88.00 L',
        'exactPrice': '₹42.00 L',
        'pricePerSqft': 7900,
        'configurations': ['1 BHK', '2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '1 BHK', 'carpetArea': '395 sq.ft', 'priceRange': '₹42.00 L'},
            {'type': '2 BHK', 'carpetArea': '560 sq.ft', 'priceRange': '₹62.00 L'},
            {'type': '3 BHK', 'carpetArea': '780 sq.ft', 'priceRange': '₹88.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P51700022699',
        'lat': 19.1989, 'lng': 73.0856,
        'images': RUNWAL_ASSETS['gardens'],
        'description': 'Runwal Gardens is a 115-acre self-sustaining integrated mega township on Kalyan-Shilphata Road with EuroSchool, multispecialty hospital, 11-acre central park, and 100+ lifestyle amenities.'
    },
    {
        'id': 'p-runwal-elegante-lokhandwala',
        'title': 'Runwal Elegante',
        'slug': 'runwal-elegante-lokhandwala',
        'location': 'Andheri West',
        'city': 'Mumbai',
        'priceRange': '₹5.20 Cr - ₹9.80 Cr',
        'exactPrice': '₹5.20 Cr',
        'pricePerSqft': 38000,
        'configurations': ['3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '3 BHK', 'carpetArea': '1280 sq.ft', 'priceRange': '₹5.20 Cr'},
            {'type': '4 BHK', 'carpetArea': '1850 sq.ft', 'priceRange': '₹9.80 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P51800001550',
        'lat': 19.1364, 'lng': 72.8277,
        'images': RUNWAL_ASSETS['elegante'],
        'description': 'Runwal Elegante in Lokhandwala, Andheri West is Bollywood royalty and elite celebrity residence featuring Mumbai’s first rooftop Galileo sky-bridge suspended across three towers.'
    },
    {
        'id': 'p-runwal-nirvana-parel',
        'title': 'Runwal Nirvana',
        'slug': 'runwal-nirvana-parel',
        'location': 'Mahalaxmi',
        'city': 'Mumbai',
        'priceRange': '₹3.15 Cr - ₹5.85 Cr',
        'exactPrice': '₹3.15 Cr',
        'pricePerSqft': 34500,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '710 sq.ft', 'priceRange': '₹3.15 Cr'},
            {'type': '3 BHK', 'carpetArea': '1120 sq.ft', 'priceRange': '₹5.85 Cr'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2027',
        'reraId': 'P51900030588',
        'lat': 19.0012, 'lng': 72.8345,
        'images': RUNWAL_ASSETS['nirvana'],
        'description': 'Runwal Nirvana in South Central Mumbai offers panoramic Arabian Sea and eastern harbour views, 54 storeys of modern architecture, and direct connectivity to Lower Parel and BKC.'
    },
    {
        'id': 'p-runwal-timeless-wadala',
        'title': 'Runwal Timeless',
        'slug': 'runwal-timeless-wadala',
        'location': 'Wadala',
        'city': 'Mumbai',
        'priceRange': '₹2.40 Cr - ₹4.50 Cr',
        'exactPrice': '₹2.40 Cr',
        'pricePerSqft': 28500,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '665 sq.ft', 'priceRange': '₹2.40 Cr'},
            {'type': '3 BHK', 'carpetArea': '990 sq.ft', 'priceRange': '₹4.50 Cr'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Jun 2027',
        'reraId': 'P51900029707',
        'lat': 19.0189, 'lng': 72.8589,
        'images': RUNWAL_ASSETS['timeless'],
        'description': 'Runwal Timeless at Wadala East offers boutique luxury residences minutes from the Eastern Freeway, Monorail, and BKC connector with lifestyle podium amenities and direct builder mandate.'
    }
]

for r in runwal_data:
    if r['id'] not in existing_ids:
        p_obj = {
            'id': r['id'],
            'title': r['title'],
            'slug': r['slug'],
            'builderId': 'b-runwal',
            'location': r['location'],
            'city': r['city'],
            'priceRange': r['priceRange'],
            'exactPrice': r['exactPrice'],
            'pricePerSqft': r['pricePerSqft'],
            'configurations': r['configurations'],
            'configurationDetails': r['configurationDetails'],
            'status': r['status'],
            'type': 'Residential',
            'possessionDate': r['possessionDate'],
            'image': r['images'][0],
            'heroImage': r['images'][0],
            'images': r['images'],
            'imageAlt': f"{r['title']} Architecture in {r['location']}, {r['city']}",
            'heroImageAlt': f"{r['title']} Luxury Elevation by Runwal Group",
            'lat': r['lat'],
            'lng': r['lng'],
            'masterLayout': DEFAULT_LAYOUTS['master'],
            'floorPlans': [DEFAULT_LAYOUTS['2bhk'], DEFAULT_LAYOUTS['3bhk']],
            'reraId': r['reraId'],
            'description': r['description'],
            'features': ['Grand Clubhouse', 'Infinity Swimming Pool', 'State-of-the-Art Gymnasium', 'Sky Lounge Deck', 'Children Play Arena', '24/7 Multi-Tier Security', 'Covered Parking'],
            'highlights': ['MahaRERA Approved & Verified', '100% Zero Brokerage through PROPSMART REALTY', 'Direct Developer Inventory Allocation', 'High-Street Retail & Transit Access'],
            'specs': DEFAULT_SPECS,
            'faqs': make_faqs(r['title'], r['location'], r['city'], r['priceRange'], ', '.join(r['configurations']), r['reraId'], ['Clubhouse', 'Pool', 'Gym']),
            'verificationStatus': 'Verified',
            'featured': True
        }
        new_projects.append(p_obj)
        existing_ids.add(r['id'])

# ==============================================================================
# 2. KRISALA DEVELOPERS PROJECTS (PUNE)
# ==============================================================================
krisala_data = [
    {
        'id': 'p-krisala-41-estera-punawale',
        'title': 'Krisala 41 Estera',
        'slug': 'krisala-41-estera-punawale',
        'location': 'Punawale',
        'priceRange': '₹55.00 L - ₹82.00 L',
        'exactPrice': '₹55.00 L',
        'pricePerSqft': 7400,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '715 sq.ft', 'priceRange': '₹55.00 L'},
            {'type': '3 BHK', 'carpetArea': '945 sq.ft', 'priceRange': '₹82.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P52100028712',
        'lat': 18.6256, 'lng': 73.7371,
        'description': 'Krisala 41 Estera in Punawale offers thoughtfully planned 2 & 3 BHK residences with smart home automation, zero brokerage direct builder rates, and fast connectivity to Hinjewadi Phase 1.'
    },
    {
        'id': 'p-krisala-41-elite-tathawade',
        'title': 'Krisala 41 Elite',
        'slug': 'krisala-41-elite-tathawade',
        'location': 'Tathawade',
        'priceRange': '₹62.00 L - ₹89.00 L',
        'exactPrice': '₹62.00 L',
        'pricePerSqft': 7800,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '740 sq.ft', 'priceRange': '₹62.00 L'},
            {'type': '3 BHK', 'carpetArea': '980 sq.ft', 'priceRange': '₹89.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Mar 2027',
        'reraId': 'P52100030145',
        'lat': 18.6186, 'lng': 73.7548,
        'description': 'Krisala 41 Elite at Tathawade features premier high-rise towers near JSPM and Indira Institute with double-height designer entrance lobbies and 30+ lifestyle amenities.'
    },
    {
        'id': 'p-krisala-41-zircon-tathawade',
        'title': 'Krisala 41 Zircon',
        'slug': 'krisala-41-zircon-tathawade',
        'location': 'Tathawade',
        'priceRange': '₹68.00 L - ₹95.00 L',
        'exactPrice': '₹68.00 L',
        'pricePerSqft': 8100,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '765 sq.ft', 'priceRange': '₹68.00 L'},
            {'type': '3 BHK', 'carpetArea': '1020 sq.ft', 'priceRange': '₹95.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Jun 2027',
        'reraId': 'P52100032901',
        'lat': 18.6212, 'lng': 73.7565,
        'description': 'Krisala 41 Zircon in Tathawade offers luxury high-rise homes with unhindered views, private balconies, and dedicated electric vehicle charging points on Mumbai-Pune expressway corridor.'
    },
    {
        'id': 'p-krisala-41-evok-ravet',
        'title': 'Krisala 41 Evok',
        'slug': 'krisala-41-evok-ravet',
        'location': 'Ravet',
        'priceRange': '₹58.00 L - ₹86.00 L',
        'exactPrice': '₹58.00 L',
        'pricePerSqft': 7500,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '725 sq.ft', 'priceRange': '₹58.00 L'},
            {'type': '3 BHK', 'carpetArea': '960 sq.ft', 'priceRange': '₹86.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P52100034520',
        'lat': 18.6496, 'lng': 73.7431,
        'description': 'Krisala 41 Evok at Ravet is situated on the BRTS transit spine with seamless access to Akurdi railway station, Hinjewadi IT park, and premier PCMC schools.'
    },
    {
        'id': 'p-krisala-41-plumeria-punawale',
        'title': 'Krisala 41 Plumeria',
        'slug': 'krisala-41-plumeria-punawale',
        'location': 'Punawale',
        'priceRange': '₹52.00 L - ₹76.00 L',
        'exactPrice': '₹52.00 L',
        'pricePerSqft': 7200,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '695 sq.ft', 'priceRange': '₹52.00 L'},
            {'type': '3 BHK', 'carpetArea': '890 sq.ft', 'priceRange': '₹76.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100022198',
        'lat': 18.6278, 'lng': 73.7389,
        'description': 'Krisala 41 Plumeria in Punawale is an established gated residential community featuring ready-to-move and near-possession residences with full occupancy certificate and zero brokerage.'
    },
    {
        'id': 'p-krisala-41-cosmo-tathawade',
        'title': 'Krisala 41 Cosmo',
        'slug': 'krisala-41-cosmo-tathawade',
        'location': 'Tathawade',
        'priceRange': '₹64.00 L - ₹92.00 L',
        'exactPrice': '₹64.00 L',
        'pricePerSqft': 7900,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '735 sq.ft', 'priceRange': '₹64.00 L'},
            {'type': '3 BHK', 'carpetArea': '975 sq.ft', 'priceRange': '₹92.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2027',
        'reraId': 'P52100045120',
        'lat': 18.6195, 'lng': 73.7532,
        'description': 'Krisala 41 Cosmo in Tathawade offers modern smart-living apartments with rooftop stargazing deck, infinity edge pool, and seamless expressway connectivity.'
    },
    {
        'id': 'p-krisala-41-valley-marunji',
        'title': 'Krisala 41 Valley',
        'slug': 'krisala-41-valley-marunji',
        'location': 'Maan',
        'priceRange': '₹56.00 L - ₹84.00 L',
        'exactPrice': '₹56.00 L',
        'pricePerSqft': 7300,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '710 sq.ft', 'priceRange': '₹56.00 L'},
            {'type': '3 BHK', 'carpetArea': '930 sq.ft', 'priceRange': '₹84.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Jun 2027',
        'reraId': 'P52100047810',
        'lat': 18.5889, 'lng': 73.7123,
        'description': 'Krisala 41 Valley in Marunji Hinjewadi features nature-enveloped hillside apartments with unhindered views, green walkways, and instant access to Phase 1 and Phase 2 tech campuses.'
    },
    {
        'id': 'p-krisala-41-crown-punawale',
        'title': 'Krisala 41 Crown',
        'slug': 'krisala-41-crown-punawale',
        'location': 'Punawale',
        'priceRange': '₹61.00 L - ₹89.00 L',
        'exactPrice': '₹61.00 L',
        'pricePerSqft': 7700,
        'configurations': ['2 BHK', '2.5 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '730 sq.ft', 'priceRange': '₹61.00 L'},
            {'type': '2.5 BHK', 'carpetArea': '840 sq.ft', 'priceRange': '₹74.00 L'},
            {'type': '3 BHK', 'carpetArea': '980 sq.ft', 'priceRange': '₹89.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2027',
        'reraId': 'P52100038910',
        'lat': 18.6265, 'lng': 73.7355,
        'description': 'Krisala 41 Crown Punawale is an elite residential tower with multi-tier podium lifestyle zones, jogging tracks, and high rental return potential.'
    },
    {
        'id': 'p-krisala-41-bellissimo-tathawade',
        'title': 'Krisala 41 Bellissimo',
        'slug': 'krisala-41-bellissimo-tathawade',
        'location': 'Tathawade',
        'priceRange': '₹72.00 L - ₹1.05 Cr',
        'exactPrice': '₹72.00 L',
        'pricePerSqft': 8300,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '770 sq.ft', 'priceRange': '₹72.00 L'},
            {'type': '3 BHK', 'carpetArea': '1060 sq.ft', 'priceRange': '₹1.05 Cr'}
        ],
        'status': 'New Launch',
        'possessionDate': 'Dec 2028',
        'reraId': 'P52100051201',
        'lat': 18.6225, 'lng': 73.7578,
        'description': 'Krisala 41 Bellissimo Tathawade is the marquee flagship new launch offering Italian-inspired architectural facades, expansive sky decks, and state-of-the-art sports clubhouse.'
    }
]

for idx, k in enumerate(krisala_data):
    if k['id'] not in existing_ids:
        img_idx = idx % len(PUNE_ASSETS)
        img_url = PUNE_ASSETS[img_idx]
        img_gallery = [img_url, PUNE_ASSETS[(img_idx + 1) % len(PUNE_ASSETS)], PUNE_ASSETS[(img_idx + 2) % len(PUNE_ASSETS)]]
        p_obj = {
            'id': k['id'],
            'title': k['title'],
            'slug': k['slug'],
            'builderId': 'b-krisala',
            'location': k['location'],
            'city': 'Pune',
            'priceRange': k['priceRange'],
            'exactPrice': k['exactPrice'],
            'pricePerSqft': k['pricePerSqft'],
            'configurations': k['configurations'],
            'configurationDetails': k['configurationDetails'],
            'status': k['status'],
            'type': 'Residential',
            'possessionDate': k['possessionDate'],
            'image': img_url,
            'heroImage': img_url,
            'images': img_gallery,
            'imageAlt': f"{k['title']} High-Rise Architecture in {k['location']}, Pune",
            'heroImageAlt': f"{k['title']} Elevation by Krisala Developers",
            'lat': k['lat'],
            'lng': k['lng'],
            'masterLayout': DEFAULT_LAYOUTS['master'],
            'floorPlans': [DEFAULT_LAYOUTS['2bhk'], DEFAULT_LAYOUTS['3bhk']],
            'reraId': k['reraId'],
            'description': k['description'],
            'features': ['Grand Clubhouse', 'Swimming Pool', 'Gymnasium', 'Landscaped Gardens', 'Children Play Area', '24/7 Security', 'Indoor Games Arena'],
            'highlights': ['MahaRERA Approved & Verified', '100% Zero Brokerage through PROPSMART REALTY', 'Direct Developer Inventory Allocation', 'High Rental Yield IT Corridor'],
            'specs': DEFAULT_SPECS,
            'faqs': make_faqs(k['title'], k['location'], 'Pune', k['priceRange'], ', '.join(k['configurations']), k['reraId'], ['Clubhouse', 'Pool', 'Gym']),
            'verificationStatus': 'Verified',
            'featured': True
        }
        new_projects.append(p_obj)
        existing_ids.add(k['id'])

# ==============================================================================
# 3. ROHAN BUILDERS PUNE PROJECTS
# ==============================================================================
rohan_data = [
    {
        'id': 'p-rohan-prathama-hinjewadi',
        'title': 'Rohan Prathama',
        'slug': 'rohan-prathama-hinjewadi',
        'location': 'Hinjewadi',
        'priceRange': '₹39.00 L - ₹58.00 L',
        'exactPrice': '₹39.00 L',
        'pricePerSqft': 7200,
        'configurations': ['1 BHK', '2 BHK'],
        'configurationDetails': [
            {'type': '1 BHK', 'carpetArea': '420 sq.ft', 'priceRange': '₹39.00 L'},
            {'type': '2 BHK', 'carpetArea': '610 sq.ft', 'priceRange': '₹58.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100017114',
        'lat': 18.5913, 'lng': 73.7389,
        'description': 'Rohan Prathama in Hinjewadi Phase 1 is a signature PLUS Home project delivering zero wasted space, optimal natural cross-ventilation, and walk-to-work proximity for IT professionals.'
    },
    {
        'id': 'p-rohan-ananta-tathawade',
        'title': 'Rohan Ananta',
        'slug': 'rohan-ananta-tathawade',
        'location': 'Tathawade',
        'priceRange': '₹48.00 L - ₹72.00 L',
        'exactPrice': '₹48.00 L',
        'pricePerSqft': 7600,
        'configurations': ['1 BHK', '2 BHK'],
        'configurationDetails': [
            {'type': '1 BHK', 'carpetArea': '465 sq.ft', 'priceRange': '₹48.00 L'},
            {'type': '2 BHK', 'carpetArea': '685 sq.ft', 'priceRange': '₹72.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100000366',
        'lat': 18.6186, 'lng': 73.7548,
        'description': 'Rohan Ananta Tathawade provides modern high-rise living with open green views, sports amenities, and immediate access to the Mumbai-Pune Expressway.'
    },
    {
        'id': 'p-rohan-viti-bavdhan',
        'title': 'Rohan Viti',
        'slug': 'rohan-viti-bavdhan',
        'location': 'Bavdhan',
        'priceRange': '₹88.00 L - ₹1.65 Cr',
        'exactPrice': '₹88.00 L',
        'pricePerSqft': 9800,
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '780 sq.ft', 'priceRange': '₹88.00 L'},
            {'type': '3 BHK', 'carpetArea': '1080 sq.ft', 'priceRange': '₹1.25 Cr'},
            {'type': '4 BHK Duplex', 'carpetArea': '1550 sq.ft', 'priceRange': '₹1.65 Cr'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P52100025983',
        'lat': 18.5158, 'lng': 73.7699,
        'description': 'Rohan Viti at Bavdhan nestled against the scenic NDA hills provides master-crafted residences with expansive decks, biophilic elements, and swift access to Kothrud and Chandani Chowk.'
    },
    {
        'id': 'p-rohan-madhuban-bavdhan',
        'title': 'Rohan Madhuban',
        'slug': 'rohan-madhuban-bavdhan',
        'location': 'Bavdhan',
        'priceRange': '₹95.00 L - ₹1.75 Cr',
        'exactPrice': '₹95.00 L',
        'pricePerSqft': 9500,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '820 sq.ft', 'priceRange': '₹95.00 L'},
            {'type': '3 BHK', 'carpetArea': '1180 sq.ft', 'priceRange': '₹1.75 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100002190',
        'lat': 18.5142, 'lng': 73.7681,
        'description': 'Rohan Madhuban in Bavdhan is an award-winning residential enclave celebrated for low-density garden living, peaceful tree canopies, and superior construction quality.'
    },
    {
        'id': 'p-rohan-mithila-viman-nagar',
        'title': 'Rohan Mithila',
        'slug': 'rohan-mithila-viman-nagar',
        'location': 'Viman Nagar',
        'priceRange': '₹1.45 Cr - ₹3.20 Cr',
        'exactPrice': '₹1.45 Cr',
        'pricePerSqft': 13500,
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '920 sq.ft', 'priceRange': '₹1.45 Cr'},
            {'type': '3 BHK', 'carpetArea': '1380 sq.ft', 'priceRange': '₹2.15 Cr'},
            {'type': '4 BHK Luxury', 'carpetArea': '1950 sq.ft', 'priceRange': '₹3.20 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100001880',
        'lat': 18.5679, 'lng': 73.9143,
        'description': 'Rohan Mithila in Viman Nagar is a benchmark luxury township opposite Symbiosis campus offering expansive landscaped greens, multiple clubhouses, and airport vicinity.'
    },
    {
        'id': 'p-rohan-kritika-sinhagad-road',
        'title': 'Rohan Kritika',
        'slug': 'rohan-kritika-sinhagad-road',
        'location': 'Sinhagad Road',
        'priceRange': '₹78.00 L - ₹1.35 Cr',
        'exactPrice': '₹78.00 L',
        'pricePerSqft': 8800,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '760 sq.ft', 'priceRange': '₹78.00 L'},
            {'type': '3 BHK', 'carpetArea': '1080 sq.ft', 'priceRange': '₹1.35 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100001221',
        'lat': 18.4712, 'lng': 73.8245,
        'description': 'Rohan Kritika on Sinhagad Road delivers serene canal-side living with high ceilings, spacious living areas, and prompt connectivity to Swargate and Deccan.'
    },
    {
        'id': 'p-rohan-leher-baner',
        'title': 'Rohan Leher 2',
        'slug': 'rohan-leher-2-baner',
        'location': 'Baner',
        'priceRange': '₹1.10 Cr - ₹1.95 Cr',
        'exactPrice': '₹1.10 Cr',
        'pricePerSqft': 11800,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '815 sq.ft', 'priceRange': '₹1.10 Cr'},
            {'type': '3 BHK', 'carpetArea': '1240 sq.ft', 'priceRange': '₹1.95 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100000789',
        'lat': 18.5590, 'lng': 73.7868,
        'description': 'Rohan Leher 2 off Baner Road provides peaceful foothills living with zero overlooking windows, private terraces, and quick connectivity to Balewadi High Street.'
    },
    {
        'id': 'p-rohan-ishan-bavdhan',
        'title': 'Rohan Ishan',
        'slug': 'rohan-ishan-bavdhan',
        'location': 'Bavdhan',
        'priceRange': '₹85.00 L - ₹1.45 Cr',
        'exactPrice': '₹85.00 L',
        'pricePerSqft': 9400,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '775 sq.ft', 'priceRange': '₹85.00 L'},
            {'type': '3 BHK', 'carpetArea': '1120 sq.ft', 'priceRange': '₹1.45 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100001550',
        'lat': 18.5175, 'lng': 73.7712,
        'description': 'Rohan Ishan in Bavdhan offers smart architecture with internal courtyards, natural illumination, and premium amenities on the Paud Road transit corridor.'
    },
    {
        'id': 'p-rohan-tarang-wakad',
        'title': 'Rohan Tarang',
        'slug': 'rohan-tarang-wakad',
        'location': 'Wakad',
        'priceRange': '₹74.00 L - ₹1.15 Cr',
        'exactPrice': '₹74.00 L',
        'pricePerSqft': 8900,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '730 sq.ft', 'priceRange': '₹74.00 L'},
            {'type': '3 BHK', 'carpetArea': '1010 sq.ft', 'priceRange': '₹1.15 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100002014',
        'lat': 18.5987, 'lng': 73.7686,
        'description': 'Rohan Tarang in Wakad is situated near Datta Mandir road offering excellent access to IT parks, Hinjewadi flyover, and premier schools with zero brokerage.'
    },
    {
        'id': 'p-rohan-tapovan-dhanori',
        'title': 'Rohan Tapovan',
        'slug': 'rohan-tapovan-dhanori',
        'location': 'Dhanori',
        'priceRange': '₹65.00 L - ₹98.00 L',
        'exactPrice': '₹65.00 L',
        'pricePerSqft': 7900,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '710 sq.ft', 'priceRange': '₹65.00 L'},
            {'type': '3 BHK', 'carpetArea': '945 sq.ft', 'priceRange': '₹98.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100003412',
        'lat': 18.5866, 'lng': 73.8927,
        'description': 'Rohan Tapovan in Dhanori delivers tranquil green living minutes from Viman Nagar, Pune International Airport, and Commerzone IT Park.'
    }
]

for idx, ro in enumerate(rohan_data):
    if ro['id'] not in existing_ids:
        img_idx = (idx + 3) % len(PUNE_ASSETS)
        img_url = PUNE_ASSETS[img_idx]
        img_gallery = [img_url, PUNE_ASSETS[(img_idx + 1) % len(PUNE_ASSETS)], PUNE_ASSETS[(img_idx + 2) % len(PUNE_ASSETS)]]
        p_obj = {
            'id': ro['id'],
            'title': ro['title'],
            'slug': ro['slug'],
            'builderId': 'b-rohan',
            'location': ro['location'],
            'city': 'Pune',
            'priceRange': ro['priceRange'],
            'exactPrice': ro['exactPrice'],
            'pricePerSqft': ro['pricePerSqft'],
            'configurations': ro['configurations'],
            'configurationDetails': ro['configurationDetails'],
            'status': ro['status'],
            'type': 'Residential',
            'possessionDate': ro['possessionDate'],
            'image': img_url,
            'heroImage': img_url,
            'images': img_gallery,
            'imageAlt': f"{ro['title']} PLUS Home Architecture in {ro['location']}, Pune",
            'heroImageAlt': f"{ro['title']} Elevation by Rohan Builders",
            'lat': ro['lat'],
            'lng': ro['lng'],
            'masterLayout': DEFAULT_LAYOUTS['master'],
            'floorPlans': [DEFAULT_LAYOUTS['2bhk'], DEFAULT_LAYOUTS['3bhk']],
            'reraId': ro['reraId'],
            'description': ro['description'],
            'features': ['PLUS Home Design', 'Clubhouse & Gymnasium', 'Swimming Pool', 'Landscaped Central Greens', 'Children Play Zone', '24/7 Security', 'Solar Water Heating'],
            'highlights': ['MahaRERA Approved & Verified', '100% Zero Brokerage through PROPSMART REALTY', 'Pioneering PLUS Home Principles', 'Prime Pune Connectivity'],
            'specs': DEFAULT_SPECS,
            'faqs': make_faqs(ro['title'], ro['location'], 'Pune', ro['priceRange'], ', '.join(ro['configurations']), ro['reraId'], ['PLUS Home Design', 'Pool', 'Gym']),
            'verificationStatus': 'Verified',
            'featured': True
        }
        new_projects.append(p_obj)
        existing_ids.add(ro['id'])

# ==============================================================================
# 4. KOLTE PATIL LIFE REPUBLIC SEPARATE SECTORS / PROJECTS
# ==============================================================================
life_republic_data = [
    {
        'id': 'p-kolte-patil-life-republic-sector-r10',
        'title': 'Life Republic Sector R10',
        'slug': 'kolte-patil-life-republic-sector-r10',
        'location': 'Hinjewadi',
        'priceRange': '₹49.00 L - ₹78.00 L',
        'exactPrice': '₹49.00 L',
        'pricePerSqft': 7100,
        'configurations': ['1 BHK', '2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '1 BHK', 'carpetArea': '450 sq.ft', 'priceRange': '₹49.00 L'},
            {'type': '2 BHK', 'carpetArea': '690 sq.ft', 'priceRange': '₹64.00 L'},
            {'type': '3 BHK', 'carpetArea': '890 sq.ft', 'priceRange': '₹78.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100024522',
        'lat': 18.5925, 'lng': 73.7375,
        'description': 'Life Republic Sector R10 (Swagatam) is a serene gated residential cluster in the 390-acre township featuring expansive central courtyards, sports courts, and immediate school access.'
    },
    {
        'id': 'p-kolte-patil-life-republic-arezo',
        'title': 'Life Republic Arezo',
        'slug': 'kolte-patil-life-republic-arezo',
        'location': 'Hinjewadi',
        'priceRange': '₹58.00 L - ₹79.00 L',
        'exactPrice': '₹58.00 L',
        'pricePerSqft': 7300,
        'configurations': ['2 BHK', '2.5 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '710 sq.ft', 'priceRange': '₹58.00 L'},
            {'type': '2.5 BHK', 'carpetArea': '820 sq.ft', 'priceRange': '₹79.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100022119',
        'lat': 18.5938, 'lng': 73.7395,
        'description': 'Life Republic Arezo Sector R11 offers thoughtfully crafted 2 & 2.5 BHK residences designed with Mediterranean styling, tranquil water bodies, and club amenities.'
    },
    {
        'id': 'p-kolte-patil-life-republic-first-avenue',
        'title': 'Life Republic First Avenue',
        'slug': 'kolte-patil-life-republic-first-avenue',
        'location': 'Hinjewadi',
        'priceRange': '₹65.00 L - ₹95.00 L',
        'exactPrice': '₹65.00 L',
        'pricePerSqft': 7500,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '745 sq.ft', 'priceRange': '₹65.00 L'},
            {'type': '3 BHK', 'carpetArea': '1040 sq.ft', 'priceRange': '₹95.00 L'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100000450',
        'lat': 18.5905, 'lng': 73.7382,
        'description': 'Life Republic First Avenue (Sector R1) is the flagship gateway sector of the Life Republic township with mature landscaping, full occupation, and active community life.'
    },
    {
        'id': 'p-kolte-patil-life-republic-itower',
        'title': 'Life Republic i-Tower Highline',
        'slug': 'kolte-patil-life-republic-itower',
        'location': 'Hinjewadi',
        'priceRange': '₹62.00 L - ₹88.00 L',
        'exactPrice': '₹62.00 L',
        'pricePerSqft': 7400,
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK', 'carpetArea': '725 sq.ft', 'priceRange': '₹62.00 L'},
            {'type': '3 BHK', 'carpetArea': '980 sq.ft', 'priceRange': '₹88.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P52100026880',
        'lat': 18.5942, 'lng': 73.7408,
        'description': 'Life Republic i-Tower Highline offers contemporary smart-home technology, panoramic views of the township reserve, and electric vehicle charging bays.'
    },
    {
        'id': 'p-kolte-patil-life-republic-nora',
        'title': 'Life Republic Nora',
        'slug': 'kolte-patil-life-republic-nora',
        'location': 'Hinjewadi',
        'priceRange': '₹38.00 L - ₹58.00 L',
        'exactPrice': '₹38.00 L',
        'pricePerSqft': 6900,
        'configurations': ['1 BHK', '2 BHK'],
        'configurationDetails': [
            {'type': '1 BHK', 'carpetArea': '385 sq.ft', 'priceRange': '₹38.00 L'},
            {'type': '2 BHK', 'carpetArea': '575 sq.ft', 'priceRange': '₹58.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Jun 2027',
        'reraId': 'P52100029340',
        'lat': 18.5919, 'lng': 73.7362,
        'description': 'Life Republic Nora represents affordable smart residences within the integrated 390-acre township, providing first-time homebuyers complete township privileges with zero brokerage.'
    },
    {
        'id': 'p-kolte-patil-life-republic-whispering-greens',
        'title': 'Life Republic Whispering Greens',
        'slug': 'kolte-patil-life-republic-whispering-greens',
        'location': 'Hinjewadi',
        'priceRange': '₹1.85 Cr - ₹3.40 Cr',
        'exactPrice': '₹1.85 Cr',
        'pricePerSqft': 11500,
        'configurations': ['3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '3 BHK Luxury Villa', 'carpetArea': '1650 sq.ft', 'priceRange': '₹1.85 Cr'},
            {'type': '4 BHK Signature Villa', 'carpetArea': '2450 sq.ft', 'priceRange': '₹3.40 Cr'}
        ],
        'status': 'Ready to Move',
        'possessionDate': 'Ready Possession',
        'reraId': 'P52100001120',
        'lat': 18.5955, 'lng': 73.7425,
        'description': 'Life Republic Whispering Greens is an exclusive luxury villa and row-house enclave nestled within private botanical gardens with private plunge pool and bespoke club concierge.'
    },
    {
        'id': 'p-kolte-patil-life-republic-oro-central',
        'title': 'Life Republic ORO Central',
        'slug': 'kolte-patil-life-republic-oro-central',
        'location': 'Hinjewadi',
        'priceRange': '₹45.00 L - ₹1.25 Cr',
        'exactPrice': '₹45.00 L',
        'pricePerSqft': 9500,
        'configurations': ['Retail Shop', 'Boutique Office'],
        'configurationDetails': [
            {'type': 'High-Street Retail Shop', 'carpetArea': '350 sq.ft', 'priceRange': '₹45.00 L'},
            {'type': 'Boutique Commercial Office', 'carpetArea': '680 sq.ft', 'priceRange': '₹85.00 L'}
        ],
        'status': 'Under Construction',
        'possessionDate': 'Dec 2026',
        'reraId': 'P52100031200',
        'lat': 18.5910, 'lng': 73.7380,
        'description': 'Life Republic ORO Central is the high-street commercial and retail heart of the 390-acre township, providing bustling captive footfalls from 10,000+ resident families.'
    }
]

for idx, lr in enumerate(life_republic_data):
    if lr['id'] not in existing_ids:
        img_idx = idx % len(LIFE_REPUBLIC_ASSETS)
        img_url = LIFE_REPUBLIC_ASSETS[img_idx]
        img_gallery = [img_url, LIFE_REPUBLIC_ASSETS[(img_idx + 1) % len(LIFE_REPUBLIC_ASSETS)], LIFE_REPUBLIC_ASSETS[(img_idx + 2) % len(LIFE_REPUBLIC_ASSETS)]]
        p_obj = {
            'id': lr['id'],
            'title': lr['title'],
            'slug': lr['slug'],
            'builderId': 'b-kolte-patil',
            'location': 'Hinjewadi',
            'city': 'Pune',
            'priceRange': lr['priceRange'],
            'exactPrice': lr['exactPrice'],
            'pricePerSqft': lr['pricePerSqft'],
            'configurations': lr['configurations'],
            'configurationDetails': lr['configurationDetails'],
            'status': lr['status'],
            'type': 'Commercial' if 'Retail' in lr['configurations'][0] else 'Residential',
            'possessionDate': lr['possessionDate'],
            'image': img_url,
            'heroImage': img_url,
            'images': img_gallery,
            'imageAlt': f"{lr['title']} Sector in Life Republic Township, Hinjewadi Pune",
            'heroImageAlt': f"{lr['title']} Architecture by Kolte-Patil Developers",
            'lat': lr['lat'],
            'lng': lr['lng'],
            'masterLayout': DEFAULT_LAYOUTS['master'],
            'floorPlans': [DEFAULT_LAYOUTS['2bhk'], DEFAULT_LAYOUTS['3bhk']],
            'reraId': lr['reraId'],
            'description': lr['description'],
            'features': ['390-Acre Integrated Township', 'Anisha Global School', 'Township Botanical Park', 'Multi-Level Grand Clubhouses', 'Sports Arena & Cricket Ground', '24/7 Multi-Tier Security', 'Township Shuttle Service'],
            'highlights': ['MahaRERA Approved & Verified', '100% Zero Brokerage through PROPSMART REALTY', 'Direct Developer Inventory Allocation', 'World-Class 390-Acre Township Infrastructure'],
            'specs': DEFAULT_SPECS,
            'faqs': make_faqs(lr['title'], 'Hinjewadi', 'Pune', lr['priceRange'], ', '.join(lr['configurations']), lr['reraId'], ['Township Infrastructure', 'Anisha Global School', 'Sports Arena']),
            'verificationStatus': 'Verified',
            'featured': True
        }
        new_projects.append(p_obj)
        existing_ids.add(lr['id'])

print(f"Total new projects generated: {len(new_projects)}")
all_projects = projects + new_projects
print(f"Combined total projects: {len(all_projects)}")

# Update LOCATIONS projectCount
project_counts = {}
for p in all_projects:
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
new_content = prefix + json.dumps(locations, indent=2) + ';\n\nexport const BUILDERS: Builder[] = ' + json.dumps(builders, indent=2) + ';\n\nexport const PROJECTS: Project[] = ' + json.dumps(all_projects, indent=2) + ';\n'

with open(mock_data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Successfully updated mockData.ts with {len(all_projects)} total projects!")
