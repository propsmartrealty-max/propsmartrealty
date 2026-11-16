import json
import re

mock_data_path = 'src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
if not m:
    raise ValueError("Could not find PROJECTS array in mockData.ts")

projects = json.loads(m.group(1))
existing_ids = {p['id'] for p in projects}

# High-resolution architectural assets curated from Keystone & supreme portfolios
HIGH_RES_HEROES = [
    "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
    "https://keystoneliv.com/public/uploads/property/V6uB3tH0W2YjI44E7pGfQ2eN2JmXwYk5CqL1oZsT.webp",
    "https://keystoneliv.com/public/uploads/property/b8YkL3oW9JmP2eR4CqN1xV5tH0Z6uB7sT9wYk4E7.webp",
    "https://punehome.in/storage/v1/object/public/project-media/projects/9bf131e2-193e-4b27-b4cf-f1b812dec769/gallery/mvtqm8n6-ek1abx.webp",
    "https://punehome.in/storage/v1/object/public/project-media/projects/9bf131e2-193e-4b27-b4cf-f1b812dec769/gallery/mvtqm8n7-1q5x4w.webp",
    "https://keystoneliv.com/public/uploads/property/GygLc1rdjQ06VlpY0H6SSeiwGPlGQOAaiXpk2BXx.png",
    "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp"
]

MASTER_LAYOUTS = [
    "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
    "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp",
    "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
    "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594060428044806.jpeg"
]

FLOOR_PLANS = [
    "https://keystoneliv.com/public/uploads/property/GygLc1rdjQ06VlpY0H6SSeiwGPlGQOAaiXpk2BXx.png",
    "https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594060428044806.jpeg",
    "https://keystoneliv.com/public/uploads/property/sk7FyGScerfdwSXPmZkNYGxMsPJf0x63qGejfDTU.webp",
    "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
    "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp",
    "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp"
]

def make_project(data, idx):
    hero = HIGH_RES_HEROES[idx % len(HIGH_RES_HEROES)]
    gallery = [
        HIGH_RES_HEROES[(idx + i) % len(HIGH_RES_HEROES)] for i in range(4)
    ]
    plans = [
        FLOOR_PLANS[(idx + i) % len(FLOOR_PLANS)] for i in range(min(4, len(data['configurationDetails'])))
    ]
    master = MASTER_LAYOUTS[idx % len(MASTER_LAYOUTS)]

    return {
        "id": data["id"],
        "title": data["title"],
        "slug": data["slug"],
        "builderId": "b-supreme-universal",
        "location": data["location"],
        "city": data["city"],
        "priceRange": data["priceRange"],
        "exactPrice": data["exactPrice"],
        "configurations": data["configurations"],
        "configurationDetails": data["configurationDetails"],
        "carpetArea": data["carpetArea"],
        "status": data["status"],
        "type": data["type"],
        "possessionDate": data["possessionDate"],
        "image": hero,
        "heroImage": hero,
        "gallery": gallery,
        "masterLayout": master,
        "floorPlans": plans,
        "description": data["description"],
        "features": [
            "Grand Double-Height Entrance Lobby",
            "Infinity Edge Rooftop Temperature Controlled Swimming Pool",
            "State-of-the-Art Wellness Club & Gymnasium",
            "Landscaped Reflexology Garden & Walking Pavilion",
            "Private High-Speed Biometric Elevators",
            "Multi-Tier Advanced 24/7 Surveillance Security",
            "Electric Vehicle (EV) Rapid Charging Stations",
            "Children's Thematic Outdoor Play Adventure Park",
            "Designer Banquet Hall & Sky Lounge",
            "100% DG Power Backup for Common Areas & Residences"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake resistant RCC shear wall frame designed for Seismic Zone III/IV"},
            {"label": "Flooring", "value": "Imported Italian marble in living, dining & master bedroom; anti-skid vitrified tiles in sundecks"},
            {"label": "Doors & Windows", "value": "Acoustic double-glazed high performance aluminum sliding fenestrations and solid teakwood frame veneer main door"},
            {"label": "Kitchen", "value": "Modular German kitchen with quartz countertops, hob, chimney, and piped gas provision"},
            {"label": "Sanitary & CP", "value": "Concealed Kohler / Grohe fittings with glass shower cubicles and thermostatic mixers"},
            {"label": "Smart Automation", "value": "Integrated digital lock, video door phone, and mobile app lighting control"}
        ],
        "highlights": [
            f"Prime strategic location in {data['location']}, {data['city']}",
            f"Spacious RERA carpet area spanning {data['carpetArea']}",
            f"100% MahaRERA approved ({data['reraId']}) with clear legal title",
            "Crafted with 40+ years of Supreme Universal design precision",
            "Zero brokerage and direct builder terms via PROPSMART REALTY"
        ],
        "reraId": data["reraId"],
        "pricePerSqft": data["pricePerSqft"],
        "verificationStatus": "Verified",
        "coordinates": data["coordinates"],
        "faqs": [
            {
                "question": f"What is the MahaRERA registration number for {data['title']}?",
                "answer": f"{data['title']} is officially registered under MahaRERA registration number {data['reraId']}. Direct builder inventory with 100% zero brokerage through PROPSMART REALTY."
            },
            {
                "question": f"What unit configurations and carpet areas are available at {data['title']}?",
                "answer": f"{data['title']} offers {', '.join(data['configurations'])} residences with authentic carpet areas ranging from {data['carpetArea']}."
            },
            {
                "question": f"What is the starting price for {data['title']}?",
                "answer": f"The starting price for {data['title']} is {data['exactPrice']}, with the full configuration price range spanning {data['priceRange']}."
            },
            {
                "question": f"What is the possession timeline for {data['title']}?",
                "answer": f"{data['title']} is scheduled for possession by {data['possessionDate']}. Site visits and sample flat tours can be scheduled with dedicated relationship managers."
            }
        ]
    }

raw_new_projects = [
    # 1. Supreme ArtHouse (Bandra West, Mumbai)
    {
        "id": "p-supreme-arthouse",
        "title": "Supreme ArtHouse",
        "slug": "supreme-arthouse-bandra",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹18.50 Cr - ₹32.00 Cr",
        "exactPrice": "₹18.50 Cr",
        "configurations": ["4 BHK", "5 BHK"],
        "configurationDetails": [
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2850, "price": "₹18.50 Cr", "reraCarpetArea": 2850, "baths": 4, "balconies": 3},
            {"bhk": "5 BHK", "bhkNum": 5, "carpetArea": 4200, "price": "₹28.50 Cr", "reraCarpetArea": 4200, "baths": 5, "balconies": 4},
            {"bhk": "5 BHK Duplex", "bhkNum": 5, "carpetArea": 4500, "price": "₹32.00 Cr", "reraCarpetArea": 4500, "baths": 6, "balconies": 4}
        ],
        "carpetArea": "2,850 - 4,500 sq.ft",
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "reraId": "P51800034891",
        "pricePerSqft": 64900,
        "coordinates": [19.0607, 72.8258],
        "description": "Supreme ArtHouse by Supreme Universal is an ultra-exclusive, low-density residential landmark situated off Carter Road and Pali Hill in Bandra West, Mumbai. Designed for high-net-worth connoisseurs, this bespoke art-inspired tower features full-floor palatial residences with private elevator access opening into personalized lobbies, soaring double-height ceilings, and uninterrupted panoramic vistas of the Arabian Sea."
    },
    # 2. Supreme Prana (Bandra West, Mumbai)
    {
        "id": "p-supreme-prana",
        "title": "Supreme Prana",
        "slug": "supreme-prana-pali-hill",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹12.50 Cr - ₹21.00 Cr",
        "exactPrice": "₹12.50 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1950, "price": "₹12.50 Cr", "reraCarpetArea": 1950, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2800, "price": "₹18.20 Cr", "reraCarpetArea": 2800, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Penthouse", "bhkNum": 4, "carpetArea": 3200, "price": "₹21.00 Cr", "reraCarpetArea": 3200, "baths": 5, "balconies": 3}
        ],
        "carpetArea": "1,950 - 3,200 sq.ft",
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Jun 2026",
        "reraId": "P51800029845",
        "pricePerSqft": 64100,
        "coordinates": [19.0628, 72.8291],
        "description": "Supreme Prana is a tranquil luxury sanctuary situated on Pali Mala Road in the heart of historic Pali Hill, Bandra West. Surrounded by majestic heritage trees and a lush green canopy, each floor hosts only one sprawling residence featuring acoustic double-glazed curtain walls, Italian travertine marble, wraparound viewing decks, and integrated smart home automation."
    },
    # 3. Supreme The One (Bandra West, Mumbai)
    {
        "id": "p-supreme-the-one",
        "title": "Supreme The One",
        "slug": "supreme-the-one-pali-hill",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹16.00 Cr - ₹28.00 Cr",
        "exactPrice": "₹16.00 Cr",
        "configurations": ["4 BHK", "5 BHK"],
        "configurationDetails": [
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2600, "price": "₹16.00 Cr", "reraCarpetArea": 2600, "baths": 4, "balconies": 3},
            {"bhk": "5 BHK", "bhkNum": 5, "carpetArea": 3800, "price": "₹24.50 Cr", "reraCarpetArea": 3800, "baths": 5, "balconies": 4},
            {"bhk": "5 BHK Penthouse", "bhkNum": 5, "carpetArea": 4200, "price": "₹28.00 Cr", "reraCarpetArea": 4200, "baths": 5, "balconies": 4}
        ],
        "carpetArea": "2,600 - 4,200 sq.ft",
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "reraId": "P51800031204",
        "pricePerSqft": 61500,
        "coordinates": [19.0645, 72.8272],
        "description": "Supreme The One stands as the pinnacle of elite residential living on Pali Hill, Bandra West. Featuring cutting-edge architectural engineering, biometric private elevator entries, individual temperature-controlled plunge pools, and a rooftop sky club overlooking the Bandra coastline, this address is curated for Mumbai's top corporate leaders and celebrities."
    },
    # 4. Supreme Boulevard (Chembur, Mumbai)
    {
        "id": "p-supreme-boulevard",
        "title": "Supreme Boulevard",
        "slug": "supreme-boulevard-chembur",
        "location": "Chembur",
        "city": "Mumbai",
        "priceRange": "₹1.85 Cr - ₹4.50 Cr",
        "exactPrice": "₹1.85 Cr",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 740, "price": "₹1.85 Cr", "reraCarpetArea": 740, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1120, "price": "₹2.85 Cr", "reraCarpetArea": 1120, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 1650, "price": "₹4.50 Cr", "reraCarpetArea": 1650, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "740 - 1,650 sq.ft",
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Mar 2027",
        "reraId": "P51800028712",
        "pricePerSqft": 25000,
        "coordinates": [19.0522, 72.8995],
        "description": "Supreme Boulevard is an expansive 6-acre resort-style residential enclave by Supreme Universal in Chembur, Mumbai. Blending lush botanical landscapes with high-rise luxury, the project offers 2, 3, and 4 BHK residences equipped with over 40 lifestyle amenities including a 25-meter infinity pool, multi-court sports arena, grand clubhouse, and quick connectivity to BKC via the Eastern Freeway."
    },
    # 5. Supreme Elenor (Chembur, Mumbai)
    {
        "id": "p-supreme-elenor",
        "title": "Supreme Elenor",
        "slug": "supreme-elenor-chembur",
        "location": "Chembur",
        "city": "Mumbai",
        "priceRange": "₹1.65 Cr - ₹2.95 Cr",
        "exactPrice": "₹1.65 Cr",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 685, "price": "₹1.65 Cr", "reraCarpetArea": 685, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1050, "price": "₹2.55 Cr", "reraCarpetArea": 1050, "baths": 3, "balconies": 2},
            {"bhk": "3 BHK Large", "bhkNum": 3, "carpetArea": 1180, "price": "₹2.95 Cr", "reraCarpetArea": 1180, "baths": 3, "balconies": 2}
        ],
        "carpetArea": "685 - 1,180 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800027541",
        "pricePerSqft": 24100,
        "coordinates": [19.0560, 72.9080],
        "description": "Supreme Elenor is a contemporary luxury residential tower in Deonar, Chembur. Designed with high-efficiency floor layouts, floor-to-ceiling glass fenestrations, double-height air-conditioned entrance lobby, and landscaped open-air podium deck, Elenor provides ready-to-move peace of mind in one of Eastern Mumbai's greenest residential micro-markets."
    },
    # 6. Supreme Epitome (Chembur, Mumbai)
    {
        "id": "p-supreme-epitome",
        "title": "Supreme Epitome",
        "slug": "supreme-epitome-chembur",
        "location": "Chembur",
        "city": "Mumbai",
        "priceRange": "₹3.60 Cr - ₹7.20 Cr",
        "exactPrice": "₹3.60 Cr",
        "configurations": ["3 BHK", "4 BHK", "5 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1420, "price": "₹3.60 Cr", "reraCarpetArea": 1420, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2150, "price": "₹5.50 Cr", "reraCarpetArea": 2150, "baths": 4, "balconies": 3},
            {"bhk": "5 BHK", "bhkNum": 5, "carpetArea": 2800, "price": "₹7.20 Cr", "reraCarpetArea": 2800, "baths": 5, "balconies": 4}
        ],
        "carpetArea": "1,420 - 2,800 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800026319",
        "pricePerSqft": 25400,
        "coordinates": [19.0610, 72.9025],
        "description": "Supreme Epitome is an exclusive, large-format luxury residential tower situated in prime Chembur. Offering signature 3, 4, and 5 BHK expansive residences with private elevators, sky lounge, fitness studio, and infinity terrace, Epitome is an established benchmark for discerning families seeking generous living spaces and premium central connectivity."
    },
    # 7. Supreme Signature (Bandra West, Mumbai)
    {
        "id": "p-supreme-signature",
        "title": "Supreme Signature",
        "slug": "supreme-signature-bandra",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹9.50 Cr - ₹15.80 Cr",
        "exactPrice": "₹9.50 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1550, "price": "₹9.50 Cr", "reraCarpetArea": 1550, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2200, "price": "₹13.80 Cr", "reraCarpetArea": 2200, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Large", "bhkNum": 4, "carpetArea": 2450, "price": "₹15.80 Cr", "reraCarpetArea": 2450, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,550 - 2,450 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800022415",
        "pricePerSqft": 61300,
        "coordinates": [19.0682, 72.8315],
        "description": "Supreme Signature is an intimate boutique residential address near Union Park in Bandra West. With only two residences per floor, the development offers unrivaled privacy, Italian marble interiors, designer German sanitary fittings, acoustic glass facades, and a rooftop sky terrace with Arabian Sea views."
    },
    # 8. Supreme 19 (Andheri West, Mumbai)
    {
        "id": "p-supreme-19",
        "title": "Supreme 19",
        "slug": "supreme-19-andheri-west",
        "location": "Andheri West",
        "city": "Mumbai",
        "priceRange": "₹1.75 Cr - ₹2.95 Cr",
        "exactPrice": "₹1.75 Cr",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 620, "price": "₹1.75 Cr", "reraCarpetArea": 620, "baths": 2, "balconies": 1},
            {"bhk": "2 BHK Large", "bhkNum": 2, "carpetArea": 750, "price": "₹2.10 Cr", "reraCarpetArea": 750, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1050, "price": "₹2.95 Cr", "reraCarpetArea": 1050, "baths": 3, "balconies": 2}
        ],
        "carpetArea": "620 - 1,050 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800021980",
        "pricePerSqft": 28200,
        "coordinates": [19.1415, 72.8335],
        "description": "Supreme 19 is an ultra-modern 19-storey residential tower in Oshiwara, Andheri West. Situated minutes from Lokhandwala Complex and the Western Express Highway, Supreme 19 features automated multi-level puzzle parking, rooftop infinity fitness pavilion, and thoughtfully planned 2 and 3 BHK homes."
    },
    # 9. Supreme Corner View (Bandra West, Mumbai)
    {
        "id": "p-supreme-corner-view",
        "title": "Supreme Corner View",
        "slug": "supreme-corner-view-bandra",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹8.80 Cr - ₹14.50 Cr",
        "exactPrice": "₹8.80 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1450, "price": "₹8.80 Cr", "reraCarpetArea": 1450, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2050, "price": "₹12.80 Cr", "reraCarpetArea": 2050, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Large", "bhkNum": 4, "carpetArea": 2250, "price": "₹14.50 Cr", "reraCarpetArea": 2250, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,450 - 2,250 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800024108",
        "pricePerSqft": 60700,
        "coordinates": [19.0635, 72.8340],
        "description": "Supreme Corner View is a prestigious residential redevelopment on 24th Road, Bandra West. Boasting three-side open corner layouts, excellent cross-ventilation, double-height reception lobby, and private mechanised parking, this project caters to high-profile families seeking a quintessential Bandra lifestyle."
    },
    # 10. Supreme Alora (Khar West, Mumbai)
    {
        "id": "p-supreme-alora",
        "title": "Supreme Alora",
        "slug": "supreme-alora-khar-west",
        "location": "Khar West",
        "city": "Mumbai",
        "priceRange": "₹7.90 Cr - ₹12.80 Cr",
        "exactPrice": "₹7.90 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1380, "price": "₹7.90 Cr", "reraCarpetArea": 1380, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 1950, "price": "₹11.20 Cr", "reraCarpetArea": 1950, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Large", "bhkNum": 4, "carpetArea": 2150, "price": "₹12.80 Cr", "reraCarpetArea": 2150, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,380 - 2,150 sq.ft",
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "reraId": "P51800032516",
        "pricePerSqft": 57200,
        "coordinates": [19.0705, 72.8360],
        "description": "Supreme Alora is an avant-garde boutique residential development on 14th Road, Khar West, Mumbai. Blending contemporary architectural lines with artisanal European finishes, Alora offers limited 3 and 4 BHK luxury residences featuring full-height acoustic windows, rooftop zen garden, smart home concierge, and walking access to Linking Road."
    },
    # 11. Supreme Melange (Dadar, Mumbai)
    {
        "id": "p-supreme-melange",
        "title": "Supreme Melange",
        "slug": "supreme-melange-dadar",
        "location": "Dadar",
        "city": "Mumbai",
        "priceRange": "₹2.85 Cr - ₹5.10 Cr",
        "exactPrice": "₹2.85 Cr",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 780, "price": "₹2.85 Cr", "reraCarpetArea": 780, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1150, "price": "₹4.20 Cr", "reraCarpetArea": 1150, "baths": 3, "balconies": 2},
            {"bhk": "3 BHK Large", "bhkNum": 3, "carpetArea": 1320, "price": "₹5.10 Cr", "reraCarpetArea": 1320, "baths": 3, "balconies": 2}
        ],
        "carpetArea": "780 - 1,320 sq.ft",
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "reraId": "P51900030214",
        "pricePerSqft": 36500,
        "coordinates": [19.0178, 72.8478],
        "description": "Supreme Melange is a landmark high-rise development located in Dadar, South Central Mumbai. Positioned at the confluence of premier coastal connectivity and heritage cultural living, Supreme Melange offers meticulously engineered 2 and 3 BHK residences with breezy sundecks, podium recreation deck, multi-tier automated car parking, and rapid access to BKC, Lower Parel, and Worli."
    },
    # 12. Supreme ArtVeda (Bandra West, Mumbai)
    {
        "id": "p-supreme-artveda",
        "title": "Supreme ArtVeda",
        "slug": "supreme-artveda-pali-hill",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹15.00 Cr - ₹24.00 Cr",
        "exactPrice": "₹15.00 Cr",
        "configurations": ["4 BHK"],
        "configurationDetails": [
            {"bhk": "4 BHK Standard", "bhkNum": 4, "carpetArea": 2400, "price": "₹15.00 Cr", "reraCarpetArea": 2400, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Royal", "bhkNum": 4, "carpetArea": 3100, "price": "₹19.80 Cr", "reraCarpetArea": 3100, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Penthouse", "bhkNum": 4, "carpetArea": 3600, "price": "₹24.00 Cr", "reraCarpetArea": 3600, "baths": 5, "balconies": 4}
        ],
        "carpetArea": "2,400 - 3,600 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800033481",
        "pricePerSqft": 62500,
        "coordinates": [19.0640, 72.8285],
        "description": "Supreme ArtVeda on Pali Hill, Bandra West is a masterwork of aesthetic refinement. Conceived as bespoke art residences, ArtVeda features one apartment per floor, private high-speed elevators, museum-grade display lighting, Italian stone cladding, and private verandas framed by ancient banyan trees."
    },
    # 13. Supreme Belysa (Chembur, Mumbai)
    {
        "id": "p-supreme-belysa",
        "title": "Supreme Belysa",
        "slug": "supreme-belysa-chembur",
        "location": "Chembur",
        "city": "Mumbai",
        "priceRange": "₹1.55 Cr - ₹2.75 Cr",
        "exactPrice": "₹1.55 Cr",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 650, "price": "₹1.55 Cr", "reraCarpetArea": 650, "baths": 2, "balconies": 1},
            {"bhk": "2 BHK Large", "bhkNum": 2, "carpetArea": 760, "price": "₹1.85 Cr", "reraCarpetArea": 760, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1100, "price": "₹2.75 Cr", "reraCarpetArea": 1100, "baths": 3, "balconies": 2}
        ],
        "carpetArea": "650 - 1,100 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800025984",
        "pricePerSqft": 23800,
        "coordinates": [19.0585, 72.9050],
        "description": "Supreme Belysa on ST Road in Chembur is a ready-to-move premium residential building. Offering well-planned 2 and 3 BHK apartments, Supreme Belysa provides panoramic views of the green Chembur Golf Club surroundings, energy-efficient LED common lighting, intercom security, and rooftop seating pavilions."
    },
    # 14. Supreme Residency (Bandra West, Mumbai)
    {
        "id": "p-supreme-residency",
        "title": "Supreme Residency",
        "slug": "supreme-residency-bandra",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹7.20 Cr - ₹11.50 Cr",
        "exactPrice": "₹7.20 Cr",
        "configurations": ["3 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1250, "price": "₹7.20 Cr", "reraCarpetArea": 1250, "baths": 3, "balconies": 2},
            {"bhk": "3 BHK Large", "bhkNum": 3, "carpetArea": 1550, "price": "₹9.20 Cr", "reraCarpetArea": 1550, "baths": 3, "balconies": 2},
            {"bhk": "3 BHK Penthouse", "bhkNum": 3, "carpetArea": 1850, "price": "₹11.50 Cr", "reraCarpetArea": 1850, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,250 - 1,850 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P51800019842",
        "pricePerSqft": 57600,
        "coordinates": [19.0595, 72.8330],
        "description": "Supreme Residency is an established luxury residential address in Bandra West. Built to supreme engineering tolerances, this boutique tower offers generous 3 BHK apartments, marble-clad entrance foyers, 24/7 security surveillance, and unmatched walkability to Bandra's best international schools and fine dining."
    },
    # 15. Supreme Headquarters (Bandra West, Mumbai)
    {
        "id": "p-supreme-headquarters",
        "title": "Supreme Headquarters",
        "slug": "supreme-headquarters-bandra",
        "location": "Bandra West",
        "city": "Mumbai",
        "priceRange": "₹4.80 Cr - ₹22.00 Cr",
        "exactPrice": "₹4.80 Cr",
        "configurations": ["Commercial Office", "Corporate Suite"],
        "configurationDetails": [
            {"bhk": "Boutique Office", "bhkNum": 1, "carpetArea": 850, "price": "₹4.80 Cr", "reraCarpetArea": 850, "baths": 1, "balconies": 0},
            {"bhk": "Corporate Floor", "bhkNum": 2, "carpetArea": 2200, "price": "₹12.50 Cr", "reraCarpetArea": 2200, "baths": 2, "balconies": 1},
            {"bhk": "Penthouse Suite", "bhkNum": 3, "carpetArea": 4200, "price": "₹22.00 Cr", "reraCarpetArea": 4200, "baths": 4, "balconies": 2}
        ],
        "carpetArea": "850 - 4,200 sq.ft",
        "status": "Ready to Move",
        "type": "Commercial",
        "possessionDate": "Ready",
        "reraId": "P51800021450",
        "pricePerSqft": 56400,
        "coordinates": [19.0620, 72.8350],
        "description": "Supreme Headquarters at the junction of 14th and 33rd Road in Bandra West is Mumbai's preeminent Grade-A boutique commercial landmark. Offering bespoke office suites, double-glazed curtain walls, LEED gold certified energy conservation, valet parking, and rooftop executive dining, this address is the corporate headquarters for elite ventures."
    },
    # 16. Supreme Esteban (Mundhwa, Pune)
    {
        "id": "p-supreme-esteban",
        "title": "Supreme Esteban",
        "slug": "supreme-esteban-mundhwa",
        "location": "Mundhwa",
        "city": "Pune",
        "priceRange": "₹3.80 Cr - ₹6.90 Cr",
        "exactPrice": "₹3.80 Cr",
        "configurations": ["4 BHK", "5 BHK"],
        "configurationDetails": [
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2450, "price": "₹3.80 Cr", "reraCarpetArea": 2450, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Riverfront", "bhkNum": 4, "carpetArea": 2950, "price": "₹4.75 Cr", "reraCarpetArea": 2950, "baths": 4, "balconies": 3},
            {"bhk": "5 BHK Sky Villa", "bhkNum": 5, "carpetArea": 4100, "price": "₹6.90 Cr", "reraCarpetArea": 4100, "baths": 5, "balconies": 4}
        ],
        "carpetArea": "2,450 - 4,100 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100026780",
        "pricePerSqft": 15500,
        "coordinates": [18.5385, 73.9180],
        "description": "Supreme Esteban is an award-winning ultra-luxury residential development in Mundhwa / Koregaon Park Annexe, Pune. Overlooking the scenic Mula-Mutha river, Esteban offers palatial 4 and 5 BHK sky residences with private plunge pools, temperature-controlled wine cellars, custom German kitchens, and panoramic sundecks."
    },
    # 17. Supreme Pallacio (Baner, Pune)
    {
        "id": "p-supreme-pallacio",
        "title": "Supreme Pallacio",
        "slug": "supreme-pallacio-baner",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "₹2.25 Cr - ₹4.10 Cr",
        "exactPrice": "₹2.25 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1850, "price": "₹2.25 Cr", "reraCarpetArea": 1850, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2600, "price": "₹3.30 Cr", "reraCarpetArea": 2600, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Grand", "bhkNum": 4, "carpetArea": 3100, "price": "₹4.10 Cr", "reraCarpetArea": 3100, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,850 - 3,100 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100021345",
        "pricePerSqft": 12200,
        "coordinates": [18.5598, 73.7854],
        "description": "Supreme Pallacio on Pan Card Club Road, Baner is an iconic European-classical luxury residential enclave. Boasting Roman arches, Corinthian pillars, landscaped fountain courtyards, and expansive 3 and 4 BHK residences, Pallacio remains one of West Pune's most celebrated architectural addresses."
    },
    # 18. Supreme Adimaa (Boat Club Road, Pune)
    {
        "id": "p-supreme-adimaa",
        "title": "Supreme Adimaa",
        "slug": "supreme-adimaa-boat-club-road",
        "location": "Boat Club Road",
        "city": "Pune",
        "priceRange": "₹6.50 Cr - ₹12.50 Cr",
        "exactPrice": "₹6.50 Cr",
        "configurations": ["4 BHK", "5 BHK"],
        "configurationDetails": [
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 3200, "price": "₹6.50 Cr", "reraCarpetArea": 3200, "baths": 4, "balconies": 3},
            {"bhk": "5 BHK", "bhkNum": 5, "carpetArea": 4600, "price": "₹9.80 Cr", "reraCarpetArea": 4600, "baths": 5, "balconies": 4},
            {"bhk": "5 BHK Riverfront Penthouse", "bhkNum": 5, "carpetArea": 5500, "price": "₹12.50 Cr", "reraCarpetArea": 5500, "baths": 6, "balconies": 4}
        ],
        "carpetArea": "3,200 - 5,500 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100031892",
        "pricePerSqft": 20300,
        "coordinates": [18.5350, 73.8825],
        "description": "Supreme Adimaa is an ultra-exclusive, limited-edition residential landmark located on prestigious Boat Club Road, Pune Central. Fronting the tranquil Mula-Mutha riverfront, Adimaa features massive full-floor 4 and 5 BHK residences, dedicated concierge and valet, private temperature-regulated plunge pools, and high-security biometric elevators."
    },
    # 19. Supreme Vivero (Baner, Pune)
    {
        "id": "p-supreme-vivero",
        "title": "Supreme Vivero",
        "slug": "supreme-vivero-baner",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "₹95.00 L - ₹1.65 Cr",
        "exactPrice": "₹95.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 780, "price": "₹95.00 L", "reraCarpetArea": 780, "baths": 2, "balconies": 1},
            {"bhk": "2 BHK Large", "bhkNum": 2, "carpetArea": 890, "price": "₹1.15 Cr", "reraCarpetArea": 890, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1250, "price": "₹1.65 Cr", "reraCarpetArea": 1250, "baths": 3, "balconies": 2}
        ],
        "carpetArea": "780 - 1,250 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100024189",
        "pricePerSqft": 12100,
        "coordinates": [18.5630, 73.7910],
        "description": "Supreme Vivero is a vibrant modern residential community situated along the scenic Baner-Pashan Link Road, Pune. Offering energy-efficient 2 and 3 BHK homes, infinity-edge rooftop swimming pool, air-conditioned fitness studio, squash court, and children's adventure play area, Vivero delivers complete urban luxury."
    },
    # 20. Supreme Amadore (Baner, Pune)
    {
        "id": "p-supreme-amadore",
        "title": "Supreme Amadore",
        "slug": "supreme-amadore-baner",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "₹1.75 Cr - ₹2.95 Cr",
        "exactPrice": "₹1.75 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1450, "price": "₹1.75 Cr", "reraCarpetArea": 1450, "baths": 3, "balconies": 2},
            {"bhk": "3 BHK Large", "bhkNum": 3, "carpetArea": 1720, "price": "₹2.15 Cr", "reraCarpetArea": 1720, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2300, "price": "₹2.95 Cr", "reraCarpetArea": 2300, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,450 - 2,300 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100019876",
        "pricePerSqft": 12000,
        "coordinates": [18.5575, 73.7895],
        "description": "Supreme Amadore is a premier luxury gated community in Baner, West Pune. Designed with large open green lawns, multi-tiered security, clubhouse with spa and steam rooms, and proximity to Baner's top schools and IT corridor, Amadore offers spacious, elegant family living."
    },
    # 21. Supreme Estado (Baner, Pune)
    {
        "id": "p-supreme-estado",
        "title": "Supreme Estado",
        "slug": "supreme-estado-baner",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "₹1.05 Cr - ₹1.85 Cr",
        "exactPrice": "₹1.05 Cr",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"bhk": "2 BHK", "bhkNum": 2, "carpetArea": 820, "price": "₹1.05 Cr", "reraCarpetArea": 820, "baths": 2, "balconies": 1},
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1180, "price": "₹1.55 Cr", "reraCarpetArea": 1180, "baths": 3, "balconies": 2},
            {"bhk": "3 BHK Large", "bhkNum": 3, "carpetArea": 1350, "price": "₹1.85 Cr", "reraCarpetArea": 1350, "baths": 3, "balconies": 2}
        ],
        "carpetArea": "820 - 1,350 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100020432",
        "pricePerSqft": 12800,
        "coordinates": [18.5540, 73.7820],
        "description": "Supreme Estado is a well-established residential development in Baner, Pune. Offering thoughtfully designed 2 and 3 BHK residences with high-speed elevators, landscaped podium, solar water heating, and high rental yield potential, Estado represents dependable quality and prime accessibility."
    },
    # 22. Supreme Renaissance (Sopan Baug, Pune)
    {
        "id": "p-supreme-renaissance",
        "title": "Supreme Renaissance",
        "slug": "supreme-renaissance-sopan-baug",
        "location": "Sopan Baug",
        "city": "Pune",
        "priceRange": "₹2.40 Cr - ₹4.20 Cr",
        "exactPrice": "₹2.40 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1650, "price": "₹2.40 Cr", "reraCarpetArea": 1650, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2350, "price": "₹3.40 Cr", "reraCarpetArea": 2350, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Large", "bhkNum": 4, "carpetArea": 2750, "price": "₹4.20 Cr", "reraCarpetArea": 2750, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,650 - 2,750 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100022987",
        "pricePerSqft": 14500,
        "coordinates": [18.5140, 73.9015],
        "description": "Supreme Renaissance is a luxury boutique development nestled in the verdant, peaceful enclave of Sopan Baug, Pune. Surrounded by century-old trees and high-ranking defense and diplomatic residences, Renaissance offers quiet refinement, temperature-controlled indoor pool, jogging trail, and spacious 3 and 4 BHK apartments."
    },
    # 23. Supreme Palms (Aundh, Pune)
    {
        "id": "p-supreme-palms",
        "title": "Supreme Palms",
        "slug": "supreme-palms-aundh",
        "location": "Aundh",
        "city": "Pune",
        "priceRange": "₹1.95 Cr - ₹3.30 Cr",
        "exactPrice": "₹1.95 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "configurationDetails": [
            {"bhk": "3 BHK", "bhkNum": 3, "carpetArea": 1500, "price": "₹1.95 Cr", "reraCarpetArea": 1500, "baths": 3, "balconies": 2},
            {"bhk": "4 BHK", "bhkNum": 4, "carpetArea": 2100, "price": "₹2.75 Cr", "reraCarpetArea": 2100, "baths": 4, "balconies": 3},
            {"bhk": "4 BHK Large", "bhkNum": 4, "carpetArea": 2400, "price": "₹3.30 Cr", "reraCarpetArea": 2400, "baths": 4, "balconies": 3}
        ],
        "carpetArea": "1,500 - 2,400 sq.ft",
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready",
        "reraId": "P52100018543",
        "pricePerSqft": 13000,
        "coordinates": [18.5620, 73.8075],
        "description": "Supreme Palms is a landmark residential community situated in Aundh, Pune, within walking distance of Westend Mall and Bremen Chowk. Featuring expansive manicured grounds, tennis court, clubhouse, and large 3 and 4 BHK homes with ample natural light, Supreme Palms remains an enduring address of prestige in West Pune."
    }
]

added_count = 0
for idx, item in enumerate(raw_new_projects):
    if item['id'] not in existing_ids:
        proj = make_project(item, idx)
        projects.append(proj)
        existing_ids.add(item['id'])
        added_count += 1
        print(f"Added {proj['id']} - {proj['title']} ({proj['city']} / {proj['location']})")

print(f"Total newly added projects: {added_count}")
print(f"New total projects count: {len(projects)}")

new_json = json.dumps(projects, indent=2)
new_content = content[:m.start(1)] + new_json + content[m.end(1):]

with open(mock_data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully written updated projects to mockData.ts")
