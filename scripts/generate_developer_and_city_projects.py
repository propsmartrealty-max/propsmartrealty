#!/usr/bin/env python3
"""
Generate comprehensive developer projects for Pune (VTP Realty 20+ projects, Kolte-Patil,
Rohan, Pride Purple, Gera, Kohinoor, Panchshil, Vilas Javdekar, Nyati, Kasturi)
plus second-home city projects for Lonavala and Alibaug, and tag all existing projects with
their correct city ('Pune', 'Mumbai', 'Lonavala', 'Alibaug').
"""

import json
import os
import re

MOCKDATA_PATH = "punepropertyvloginside/src/data/mockData.ts"
if not os.path.exists(MOCKDATA_PATH):
    MOCKDATA_PATH = "src/data/mockData.ts"

def get_city_for_project(p):
    loc = p.get('location', '').lower()
    title = p.get('title', '').lower()
    slug = p.get('slug', '').lower()
    
    if any(k in loc or k in title or k in slug for k in ['alibaug', 'awas', 'mandwa']):
        return 'Alibaug'
    if any(k in loc or k in title or k in slug for k in ['lonavala', 'khalapur', 'khopoli', 'expressway', 'hillview', 'woodside', 'cerro']):
        return 'Lonavala'
    if any(k in loc or k in title or k in slug for k in [
        'mumbai', 'worli', 'altamount', 'juhu', 'malabar', 'bellevue', 'vikhroli',
        'thane', 'sewri', 'mahalaxmi', 'lower parel', 'bhandup', 'tardeo', 'kolshet',
        'panvel', 'bhiwandi', 'powai', 'chandivali', 'bandra', 'chembur', 'byculla'
    ]):
        return 'Mumbai'
    return 'Pune'

def main():
    with open(MOCKDATA_PATH, "r", encoding="utf-8") as f:
        text = f.read()

    start_token = 'export const PROJECTS: Project[] = '
    start_pos = text.find(start_token)
    if start_pos == -1:
        print("❌ Could not find start_token")
        return

    json_start = start_pos + len(start_token)
    json_end = text.rfind('];')
    prefix = text[:json_start]
    json_part = text[json_start:json_end+1].strip()
    suffix = text[json_end+1:]

    existing_projects = json.loads(json_part)
    print(f"Loaded {len(existing_projects)} existing projects.")

    # 1. Update existing projects with city
    for p in existing_projects:
        p['city'] = get_city_for_project(p)

    # 2. VTP Realty Comprehensive Projects (20+ flagship developments)
    vtp_projects = [
        {
            "title": "Earth One by VTP Luxe",
            "slug": "earth-one-by-vtp-luxe-mahalunge",
            "location": "Mahalunge, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹82.00 L - ₹1.85 Cr",
            "exactPrice": "₹82.00 L",
            "configurations": ["2 BHK", "3 BHK", "4 BHK"],
            "configurationDetails": [
                {"type": "2 BHK Luxury", "carpetArea": "765 - 820 sq.ft", "priceRange": "₹82.00 L - ₹92.00 L"},
                {"type": "3 BHK Premium", "carpetArea": "1045 - 1180 sq.ft", "priceRange": "₹1.15 Cr - ₹1.35 Cr"},
                {"type": "4 BHK Grand Luxe", "carpetArea": "1580 - 1850 sq.ft", "priceRange": "₹1.65 Cr - ₹1.85 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2026",
            "reraId": "P5210005182",
            "acres": "10.0 Acres Riverfront Township",
            "floors": "5 Iconic Towers (G+34 Floors)",
            "lat": 18.5630, "lng": 73.7420,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
            "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
            "description": "Earth One by VTP Luxe in Mahalunge Pune offers riverside architectural excellence, maximum livable area (MLA) layouts, 5-tier club indulgence, and seamless transit to Hinjewadi Phase 1."
        },
        {
            "title": "VTP Monarque",
            "slug": "vtp-monarque-hinjawadi",
            "location": "Hinjewadi Phase 1, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹78.00 L - ₹1.55 Cr",
            "exactPrice": "₹78.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK Smart", "carpetArea": "745 - 790 sq.ft", "priceRange": "₹78.00 L - ₹86.00 L"},
                {"type": "3 BHK Grand", "carpetArea": "1025 - 1150 sq.ft", "priceRange": "₹1.10 Cr - ₹1.28 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "June 2027",
            "reraId": "P5210004984",
            "acres": "7.5 Acres",
            "floors": "4 Towers (G+32 Floors)",
            "lat": 18.5913, "lng": 73.7389,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-monarque-hinjawadi-pune/Monarque_Master_Plan_27199f1f86.webp",
            "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
            "description": "Monarque by VTP Luxe in Hinjewadi Phase 1 offers royal high-rise homes right next to Infosys Circle with smart-home automation and Olympic-scale sporting amenities."
        },
        {
            "title": "VTP Aurelia",
            "slug": "vtp-aurelia-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹89.00 L - ₹1.65 Cr",
            "exactPrice": "₹89.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK MLA", "carpetArea": "775 - 830 sq.ft", "priceRange": "₹89.00 L - ₹98.00 L"},
                {"type": "3 BHK MLA", "carpetArea": "1080 - 1240 sq.ft", "priceRange": "₹1.25 Cr - ₹1.45 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2027",
            "reraId": "P5210005540",
            "acres": "6.8 Acres",
            "floors": "G+30 Floors",
            "lat": 18.5529, "lng": 73.9416,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-aurelia-kharadi-pune/Aurelia_Master_Plan_0a37b12d7c.webp",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Aurelia at Township Codename Pegasus in Kharadi is a benchmark in high-end living with heated swimming pools, grand clubhouse, and quick access to EON Free Zone."
        },
        {
            "title": "VTP Altamira",
            "slug": "vtp-altamira-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹85.00 L - ₹1.48 Cr",
            "exactPrice": "₹85.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "750 - 810 sq.ft", "priceRange": "₹85.00 L - ₹94.00 L"},
                {"type": "3 BHK", "carpetArea": "1040 - 1160 sq.ft", "priceRange": "₹1.18 Cr - ₹1.35 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "June 2027",
            "reraId": "P5210005181",
            "acres": "5.5 Acres",
            "floors": "G+29 Floors",
            "lat": 18.5535, "lng": 73.9425,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-altamira-kharadi-pune/Altamira_Master_Plan_166b88523c.webp",
            "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Altamira brings Spanish-inspired elegance to Kharadi Pune with high-ceiling residences, landscaped central courtyard, and designer podium amenities."
        },
        {
            "title": "Velvet Villas by VTP Luxe",
            "slug": "velvet-villas-by-vtp-luxe-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹3.50 Cr - ₹6.80 Cr",
            "exactPrice": "₹3.50 Cr",
            "configurations": ["4 BHK Villa", "5 BHK Villa"],
            "configurationDetails": [
                {"type": "4 BHK Signature Villa", "carpetArea": "3200 - 3800 sq.ft", "priceRange": "₹3.50 Cr - ₹4.50 Cr"},
                {"type": "5 BHK Imperial Villa", "carpetArea": "4500 - 5400 sq.ft", "priceRange": "₹5.20 Cr - ₹6.80 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2027",
            "reraId": "P5210005241",
            "acres": "12.0 Acres Gated Villa Enclave",
            "floors": "G+2 Private Villas with Lift",
            "lat": 18.5540, "lng": 73.9450,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/velvet-villas-by-vtp-luxe-kharadi-pune/Velvet_Villas_Master_Plan_8c72834b1a.webp",
            "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
            "description": "Velvet Villas by VTP Luxe is Pune's ultimate private sanctuary offering custom luxury villas with personal elevators, private swimming pools, and manicured lawns in Kharadi."
        },
        {
            "title": "VTP Volare",
            "slug": "vtp-volare-hinjawadi",
            "location": "Hinjewadi Phase 1, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹75.00 L - ₹1.35 Cr",
            "exactPrice": "₹75.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "720 - 785 sq.ft", "priceRange": "₹75.00 L - ₹84.00 L"},
                {"type": "3 BHK", "carpetArea": "990 - 1120 sq.ft", "priceRange": "₹1.05 Cr - ₹1.22 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "June 2027",
            "reraId": "P5210004737",
            "acres": "6.0 Acres",
            "floors": "G+30 Floors",
            "lat": 18.5905, "lng": 73.7370,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
            "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Volare in Hinjewadi Phase 1 provides state-of-the-art tech living for IT executives, featuring smart digital locks, home automation, and 24x7 fitness zones."
        },
        {
            "title": "VTP Verve",
            "slug": "vtp-verve-baner-sus",
            "location": "Baner-Sus Road, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹88.00 L - ₹1.52 Cr",
            "exactPrice": "₹88.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "760 - 825 sq.ft", "priceRange": "₹88.00 L - ₹96.00 L"},
                {"type": "3 BHK", "carpetArea": "1050 - 1200 sq.ft", "priceRange": "₹1.22 Cr - ₹1.40 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2026",
            "reraId": "P5210004731",
            "acres": "5.0 Acres",
            "floors": "G+28 Floors",
            "lat": 18.5580, "lng": 73.7650,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-verve-baner-sus-pune/Verve_Master_Plan_4b72183c9a.webp",
            "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Verve on Baner-Sus Road combines picturesque hill views with modern urban comfort, featuring high-speed elevators, infinity swimming pool, and sky observation deck."
        },
        {
            "title": "VTP Cielo",
            "slug": "vtp-cielo-bavdhan",
            "location": "Bavdhan, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹95.00 L - ₹1.95 Cr",
            "exactPrice": "₹95.00 L",
            "configurations": ["2 BHK", "3 BHK", "4 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "780 - 840 sq.ft", "priceRange": "₹95.00 L - ₹1.05 Cr"},
                {"type": "3 BHK", "carpetArea": "1120 - 1280 sq.ft", "priceRange": "₹1.35 Cr - ₹1.55 Cr"},
                {"type": "4 BHK", "carpetArea": "1650 - 1880 sq.ft", "priceRange": "₹1.80 Cr - ₹1.95 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "March 2027",
            "reraId": "P5210004584",
            "acres": "6.2 Acres",
            "floors": "G+27 Floors",
            "lat": 18.5134, "lng": 73.7742,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-cielo-bavdhan-pune/Cielo_Master_Plan_5a82741b2c.webp",
            "image": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Cielo in Bavdhan is nestled amidst lush green hills with clean air and great connectivity to Kothrud and the Pune-Bangalore Highway."
        },
        {
            "title": "VTP Euphoria",
            "slug": "vtp-euphoria-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹58.00 L - ₹1.15 Cr",
            "exactPrice": "₹58.00 L",
            "configurations": ["1 BHK", "2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "1 BHK", "carpetArea": "480 - 520 sq.ft", "priceRange": "₹58.00 L - ₹64.00 L"},
                {"type": "2 BHK", "carpetArea": "720 - 790 sq.ft", "priceRange": "₹78.00 L - ₹88.00 L"},
                {"type": "3 BHK", "carpetArea": "1010 - 1140 sq.ft", "priceRange": "₹1.05 Cr - ₹1.15 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2026",
            "reraId": "P5210003182",
            "acres": "8.8 Acres",
            "floors": "G+30 Floors",
            "lat": 18.5520, "lng": 73.9400,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-euphoria-kharadi-pune/Euphoria_Master_Plan_9c82613d4b.webp",
            "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Euphoria in Kharadi offers vibrant community living with over 30 lifestyle amenities, a central sports arena, and kid-friendly learning zones."
        },
        {
            "title": "VTP Sierra",
            "slug": "vtp-sierra-baner-sus",
            "location": "Baner-Sus Road, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹82.00 L - ₹1.45 Cr",
            "exactPrice": "₹82.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "745 - 810 sq.ft", "priceRange": "₹82.00 L - ₹90.00 L"},
                {"type": "3 BHK", "carpetArea": "1020 - 1180 sq.ft", "priceRange": "₹1.15 Cr - ₹1.35 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "June 2027",
            "reraId": "P5210002677",
            "acres": "6.5 Acres",
            "floors": "G+28 Floors",
            "lat": 18.5575, "lng": 73.7640,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-sierra-baner-sus-pune/Sierra_Master_Plan_6b71829c3a.webp",
            "image": "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Sierra on Baner-Sus Road provides breathtaking mountain horizons, 3-tier clubhouse amenities, and quick transit to Balewadi High Street."
        },
        {
            "title": "Flamante by VTP Luxe",
            "slug": "flamante-by-vtp-luxe-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹1.25 Cr - ₹2.75 Cr",
            "exactPrice": "₹1.25 Cr",
            "configurations": ["2 BHK", "3 BHK", "4 BHK"],
            "configurationDetails": [
                {"type": "2 BHK Luxe", "carpetArea": "820 - 890 sq.ft", "priceRange": "₹1.25 Cr - ₹1.40 Cr"},
                {"type": "3 BHK Luxe", "carpetArea": "1180 - 1350 sq.ft", "priceRange": "₹1.65 Cr - ₹1.95 Cr"},
                {"type": "4 BHK Luxe", "carpetArea": "1720 - 2100 sq.ft", "priceRange": "₹2.30 Cr - ₹2.75 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2027",
            "reraId": "P5210005631",
            "acres": "7.0 Acres",
            "floors": "G+33 Floors",
            "lat": 18.5532, "lng": 73.9430,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/flamante-by-vtp-luxe-kharadi-pune/Flamante_Master_Plan_7a81294c5d.webp",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
            "description": "Flamante by VTP Luxe is an opulent address in Kharadi Pune featuring Italian marble flooring, high-end fittings, private decks, and a sky observatory."
        },
        {
            "title": "VTP Aethereus",
            "slug": "vtp-aethereus-mahalunge",
            "location": "Mahalunge, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹69.00 L - ₹1.28 Cr",
            "exactPrice": "₹69.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "710 - 775 sq.ft", "priceRange": "₹69.00 L - ₹78.00 L"},
                {"type": "3 BHK", "carpetArea": "980 - 1110 sq.ft", "priceRange": "₹99.00 L - ₹1.18 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2026",
            "reraId": "P5210002837",
            "acres": "8.0 Acres",
            "floors": "G+31 Floors",
            "lat": 18.5638, "lng": 73.7435,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-aethereus-high-street-mahalunge-pune/Aethereus_Master_Plan_3b81729c1a.webp",
            "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Aethereus offers modern township living with an integrated high-street retail promenade, health spa, and riverside lifestyle amenities in Mahalunge."
        },
        {
            "title": "VTP Altitude",
            "slug": "vtp-altitude-wakad",
            "location": "Wakad, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹82.00 L - ₹1.80 Cr",
            "exactPrice": "₹82.00 L",
            "configurations": ["Commercial Offices", "Retail Shops"],
            "configurationDetails": [
                {"type": "Grade A Office", "carpetArea": "450 - 950 sq.ft", "priceRange": "₹82.00 L - ₹1.35 Cr"},
                {"type": "High Street Retail", "carpetArea": "600 - 1400 sq.ft", "priceRange": "₹1.20 Cr - ₹1.80 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "June 2026",
            "reraId": "P5210003169",
            "acres": "3.5 Acres Commercial Landmark",
            "floors": "Iconic G+24 Commercial Tower",
            "lat": 18.5985, "lng": 73.7680,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-altitude-wakad-pune/Altitude_Master_Plan_2a71829c4d.webp",
            "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Altitude is Wakad's premier commercial high-rise tower offering Grade-A corporate offices, retail spaces, and conference facilities right on the Mumbai-Pune Expressway exit."
        },
        {
            "title": "VTP Bellissimo",
            "slug": "vtp-bellissimo-hinjewadi",
            "location": "Hinjewadi Phase 1, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹76.00 L - ₹1.42 Cr",
            "exactPrice": "₹76.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "730 - 795 sq.ft", "priceRange": "₹76.00 L - ₹85.00 L"},
                {"type": "3 BHK", "carpetArea": "1015 - 1160 sq.ft", "priceRange": "₹1.10 Cr - ₹1.28 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2026",
            "reraId": "P5210002813",
            "acres": "9.2 Acres",
            "floors": "G+32 Floors",
            "lat": 18.5910, "lng": 73.7380,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-bellissimo-hinjewadi-pune/Bellissimo_Master_Plan_1a82937c5f.webp",
            "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Bellissimo in Hinjewadi Phase 1 features 3-side open residences with uninterrupted hill views, heated lap pool, and walking proximity to Wipro and Quadron IT Park."
        },
        {
            "title": "VTP Hilife",
            "slug": "vtp-hilife-wakad",
            "location": "Wakad, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹82.00 L - ₹1.35 Cr",
            "exactPrice": "₹82.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "735 - 800 sq.ft", "priceRange": "₹82.00 L - ₹91.00 L"},
                {"type": "3 BHK", "carpetArea": "1030 - 1150 sq.ft", "priceRange": "₹1.12 Cr - ₹1.28 Cr"}
            ],
            "status": "Ready to Move",
            "possessionDate": "Ready to Move",
            "reraId": "P52100018274",
            "acres": "5.5 Acres",
            "floors": "G+22 Floors",
            "lat": 18.5990, "lng": 73.7690,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-hilife-wakad-pune/Hilife_Master_Plan_5c82917d3b.webp",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Hilife in Wakad is a ready-to-move-in lifestyle landmark featuring double-height club lounge, swimming pool, and prime location off Dange Chowk."
        },
        {
            "title": "VTP Leonara",
            "slug": "vtp-leonara-mahalunge",
            "location": "Mahalunge, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹65.00 L - ₹1.10 Cr",
            "exactPrice": "₹65.00 L",
            "configurations": ["1 BHK", "2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "1 BHK", "carpetArea": "465 - 510 sq.ft", "priceRange": "₹65.00 L - ₹70.00 L"},
                {"type": "2 BHK", "carpetArea": "715 - 770 sq.ft", "priceRange": "₹78.00 L - ₹86.00 L"},
                {"type": "3 BHK", "carpetArea": "985 - 1100 sq.ft", "priceRange": "₹98.00 L - ₹1.10 Cr"}
            ],
            "status": "Ready to Move",
            "possessionDate": "Ready to Move",
            "reraId": "P52100019902",
            "acres": "100+ Acre Bluewaters Township",
            "floors": "G+28 Floors",
            "lat": 18.5620, "lng": 73.7410,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
            "image": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Leonara is an established ready community within Township Codename Bluewaters in Mahalunge, offering lush river promenades and cricket academy."
        },
        {
            "title": "VTP Belair",
            "slug": "vtp-belair-mahalunge",
            "location": "Mahalunge, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹62.00 L - ₹1.05 Cr",
            "exactPrice": "₹62.00 L",
            "configurations": ["1 BHK", "2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "1 BHK", "carpetArea": "470 - 515 sq.ft", "priceRange": "₹62.00 L - ₹68.00 L"},
                {"type": "2 BHK", "carpetArea": "710 - 765 sq.ft", "priceRange": "₹75.00 L - ₹84.00 L"},
                {"type": "3 BHK", "carpetArea": "970 - 1080 sq.ft", "priceRange": "₹95.00 L - ₹1.05 Cr"}
            ],
            "status": "Ready to Move",
            "possessionDate": "Ready to Move",
            "reraId": "P52100020331",
            "acres": "7.8 Acres",
            "floors": "G+26 Floors",
            "lat": 18.5625, "lng": 73.7415,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
            "image": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Belair offers comfortable contemporary family residences surrounded by pristine river views and 75% open spaces in Mahalunge."
        },
        {
            "title": "VTP Alpine",
            "slug": "vtp-alpine-mahalunge",
            "location": "Mahalunge, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹64.00 L - ₹1.08 Cr",
            "exactPrice": "₹64.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "715 - 775 sq.ft", "priceRange": "₹64.00 L - ₹74.00 L"},
                {"type": "3 BHK", "carpetArea": "980 - 1090 sq.ft", "priceRange": "₹96.00 L - ₹1.08 Cr"}
            ],
            "status": "Ready to Move",
            "possessionDate": "Ready to Move",
            "reraId": "P52100020166",
            "acres": "6.0 Acres",
            "floors": "G+24 Floors",
            "lat": 18.5615, "lng": 73.7405,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/earth-one-by-vtp-luxe-mahalunge-pune/Earth_One_Master_Plan_307e5f524c.webp",
            "image": "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Alpine in Mahalunge Pune offers ready-possession homes with state-of-the-art gymnasium, multi-purpose hall, and jogging paths."
        },
        {
            "title": "VTP Cygnus",
            "slug": "vtp-cygnus-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹72.00 L - ₹1.28 Cr",
            "exactPrice": "₹72.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK", "carpetArea": "725 - 785 sq.ft", "priceRange": "₹72.00 L - ₹82.00 L"},
                {"type": "3 BHK", "carpetArea": "995 - 1120 sq.ft", "priceRange": "₹1.05 Cr - ₹1.22 Cr"}
            ],
            "status": "Ready to Move",
            "possessionDate": "Ready to Move",
            "reraId": "P52100021609",
            "acres": "6.5 Acres",
            "floors": "G+28 Floors",
            "lat": 18.5515, "lng": 73.9390,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-aurelia-kharadi-pune/Aurelia_Master_Plan_0a37b12d7c.webp",
            "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Cygnus at Township Codename Pegasus in Kharadi is a fully integrated residential development with retail arcade and wellness club."
        },
        {
            "title": "VTP Beaumonde",
            "slug": "vtp-beaumonde-kharadi",
            "location": "Kharadi, Pune",
            "city": "Pune",
            "builderId": "b-vtp",
            "priceRange": "₹92.00 L - ₹1.75 Cr",
            "exactPrice": "₹92.00 L",
            "configurations": ["2 BHK", "3 BHK"],
            "configurationDetails": [
                {"type": "2 BHK Luxe", "carpetArea": "780 - 845 sq.ft", "priceRange": "₹92.00 L - ₹1.02 Cr"},
                {"type": "3 BHK Luxe", "carpetArea": "1090 - 1260 sq.ft", "priceRange": "₹1.32 Cr - ₹1.55 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2026",
            "reraId": "P5210002939",
            "acres": "5.8 Acres",
            "floors": "G+30 Floors",
            "lat": 18.5525, "lng": 73.9410,
            "masterLayout": "https://www.vtprealty.in/images/project/project-details/vtp-altamira-kharadi-pune/Altamira_Master_Plan_166b88523c.webp",
            "image": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
            "description": "VTP Beaumonde in Kharadi Pune delivers premier lifestyle residences with temperature-controlled swimming pool, indoor sports lounge, and business pods."
        }
    ]

    # 3. Second-Home Luxury Villa Projects for Lonavala & Alibaug
    second_home_projects = [
        # Lonavala Projects
        {
            "title": "Lodha Villa Cerro",
            "slug": "lodha-villa-cerro-khopoli-lonavala",
            "location": "Khopoli Foothills, Lonavala",
            "city": "Lonavala",
            "builderId": "b-lodha",
            "priceRange": "₹2.85 Cr - ₹6.50 Cr",
            "exactPrice": "₹2.85 Cr",
            "configurations": ["3 BHK Villa", "4 BHK Villa", "5 BHK Estate"],
            "configurationDetails": [
                {"type": "3 BHK Valley Villa", "carpetArea": "2400 - 2800 sq.ft", "priceRange": "₹2.85 Cr - ₹3.40 Cr"},
                {"type": "4 BHK Forest Villa", "carpetArea": "3200 - 3900 sq.ft", "priceRange": "₹3.80 Cr - ₹4.60 Cr"},
                {"type": "5 BHK Private Estate", "carpetArea": "4800 - 6200 sq.ft", "priceRange": "₹5.20 Cr - ₹6.50 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2027",
            "reraId": "P52000054321",
            "acres": "50+ Acres Mountain Sanctuary",
            "floors": "G+1 Bespoke Valley Villas",
            "lat": 18.7892, "lng": 73.3421,
            "masterLayout": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
            "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200",
            "description": "Lodha Villa Cerro is an exclusive hill-station retreat nestled in the mist-clad Sahyadri valley between Lonavala and Khopoli, offering private plunge pools and valley terraces."
        },
        {
            "title": "Godrej Woodside Estate",
            "slug": "godrej-woodside-estate-lonavala",
            "location": "Khalapur, Lonavala Corridor",
            "city": "Lonavala",
            "builderId": "b-godrej",
            "priceRange": "₹1.15 Cr - ₹2.75 Cr",
            "exactPrice": "₹1.15 Cr",
            "configurations": ["Villa Plot", "Resort Villa"],
            "configurationDetails": [
                {"type": "Villa Plot 1500 sq.ft", "carpetArea": "1500 - 2200 sq.ft", "priceRange": "₹1.15 Cr - ₹1.65 Cr"},
                {"type": "Estate Plot 2500 sq.ft", "carpetArea": "2500 - 3800 sq.ft", "priceRange": "₹1.85 Cr - ₹2.75 Cr"}
            ],
            "status": "New Launch",
            "possessionDate": "Dec 2027",
            "reraId": "P52000055123",
            "acres": "100+ Acres Forested Estate",
            "floors": "G+1 Plotted Villa Community",
            "lat": 18.8123, "lng": 73.3105,
            "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
            "image": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
            "description": "Godrej Woodside Estate along the Mumbai-Pune Expressway near Lonavala is an idyllic green township featuring a natural river stream, camping grounds, and grand clubhouse."
        },
        # Alibaug Projects
        {
            "title": "Lodha Alibaug",
            "slug": "lodha-alibaug-coastal-villas",
            "location": "Awas Beach, Alibaug",
            "city": "Alibaug",
            "builderId": "b-lodha",
            "priceRange": "₹4.50 Cr - ₹15.00 Cr",
            "exactPrice": "₹4.50 Cr",
            "configurations": ["3 BHK Beach Villa", "4 BHK Beach Villa", "5 BHK Royal Manor"],
            "configurationDetails": [
                {"type": "3 BHK Coastal Villa", "carpetArea": "2600 - 3200 sq.ft", "priceRange": "₹4.50 Cr - ₹5.80 Cr"},
                {"type": "4 BHK Royal Villa", "carpetArea": "3800 - 4600 sq.ft", "priceRange": "₹6.80 Cr - ₹8.50 Cr"},
                {"type": "5 BHK Beachfront Manor", "carpetArea": "5500 - 7500 sq.ft", "priceRange": "₹10.50 Cr - ₹15.00 Cr"}
            ],
            "status": "Under Construction",
            "possessionDate": "Dec 2027",
            "reraId": "P52000051189",
            "acres": "40+ Acres Beachside Sanctuary",
            "floors": "G+1 Bespoke Beach Villas",
            "lat": 18.7758, "lng": 72.8756,
            "masterLayout": "https://www.lodhagroup.com/sites/default/files/projects/banner/2509966303_Website_banner__1903X800.jpg",
            "image": "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
            "description": "Lodha Alibaug near Awas Beach is Mumbai's most prestigious coastal sanctuary, providing private pool villas, coconut groves, speedboat dock access, and 5-star concierge services."
        },
        {
            "title": "Abhinandan Lodha Alibaug Reserve",
            "slug": "abhinandan-lodha-alibaug-reserve",
            "location": "Mandwa Jetty Corridor, Alibaug",
            "city": "Alibaug",
            "builderId": "b-lodha",
            "priceRange": "₹1.45 Cr - ₹3.80 Cr",
            "exactPrice": "₹1.45 Cr",
            "configurations": ["Coastal Villa Plot", "Beach Estate"],
            "configurationDetails": [
                {"type": "Coastal Plot 1800 sq.ft", "carpetArea": "1800 - 2400 sq.ft", "priceRange": "₹1.45 Cr - ₹1.95 Cr"},
                {"type": "Beach Estate 3000 sq.ft", "carpetArea": "3000 - 4500 sq.ft", "priceRange": "₹2.45 Cr - ₹3.80 Cr"}
            ],
            "status": "New Launch",
            "possessionDate": "June 2027",
            "reraId": "P52000053912",
            "acres": "60+ Acres Gated Coastal Parkland",
            "floors": "G+1 Custom Plotted Villas",
            "lat": 18.7905, "lng": 72.8850,
            "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
            "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
            "description": "The House of Abhinandan Lodha Alibaug Reserve offers prime 7-star branded land and villa estates just 15 minutes from the Mandwa RORO ferry terminal."
        }
    ]

    all_additions = vtp_projects + second_home_projects
    existing_slugs = {p['slug']: i for i, p in enumerate(existing_projects)}

    for item in all_additions:
        project_obj = {
            "id": f"p-{item['slug']}",
            "title": item["title"],
            "slug": item["slug"],
            "builderId": item["builderId"],
            "location": item["location"],
            "city": item["city"],
            "priceRange": item["priceRange"],
            "exactPrice": item["exactPrice"],
            "configurations": item["configurations"],
            "configurationDetails": item["configurationDetails"],
            "status": item["status"],
            "type": "Residential",
            "possessionDate": item["possessionDate"],
            "image": item["image"],
            "heroImage": item["image"],
            "lat": item["lat"],
            "lng": item["lng"],
            "reraId": item["reraId"],
            "totalAcres": item["acres"],
            "totalFloors": item["floors"],
            "floorsAndAcres": f"{item['acres']} • {item['floors']}",
            "description": item["description"],
            "masterLayout": item["masterLayout"],
            "floorPlans": [
                "https://keystoneliv.com/public/uploads/property/tD46gBsL9QvyzIsy8OQPgFbjZ6g6kTlrPFfXPod3.webp",
                "https://keystoneliv.com/public/uploads/property/XDKgaRfa1mQu0BrmAy2NCDrLJUSJqdBCMUuH63dB.webp"
            ],
            "features": [
                "Swimming Pool", "Clubhouse", "Gymnasium", "Kids Play Area",
                "Jogging Track", "Amphitheater", "Indoor Games", "Multipurpose Hall",
                "Landscaped Gardens", "24x7 Security", "CCTV Surveillance", "Intercom",
                "Power Backup", "Rainwater Harvesting", "Solar Water Heating", "Yoga Zone"
            ],
            "highlights": [
                "100% Brokerage Free Direct Builder Sales Partner",
                f"Prime {item['city']} Investment Opportunity",
                "Pre-Sanctioned MahaRERA Clear Title Project",
                "Zero Brokerage Builder-Direct Inventory & VIP Site Visit"
            ],
            "specs": [
                {"label": "Structure", "value": "Earthquake Resistant RCC Shear Wall Structure (Seismic Zone III)"},
                {"label": "Flooring", "value": "Double Charged Vitrified Tiles in Living/Dining, Anti-Skid in Bathrooms"},
                {"label": "Kitchen", "value": "Granite Platform with Stainless Steel Sink, Water Purifier & Piped Gas"},
                {"label": "Bathrooms", "value": "Kohler / Jaquar CP & Sanitaryware with Solar Water Connection"},
                {"label": "Electrical", "value": "Concealed FR Grade Copper Wiring with Modular Smart Switches"},
                {"label": "Doors Windows", "value": "Laminated Flush Main Door and Anodized Aluminum Sliding Windows"}
            ],
            "faqs": [
                {
                    "question": f"What is the MahaRERA number for {item['title']}?",
                    "answer": f"{item['title']} is approved under MahaRERA registration number {item['reraId']}. Title certificates and layout approvals are fully sanctioned."
                },
                {
                    "question": f"What are the available configurations and carpet area at {item['title']}?",
                    "answer": f"{item['title']} offers {', '.join(item['configurations'])} with carpet sizes ranging across {item['configurationDetails'][0]['carpetArea']} and starting at an exact price of {item['exactPrice']}."
                },
                {
                    "question": f"Does PROPSMART charge any brokerage for {item['title']}?",
                    "answer": "No. PROPSMART REALTY is a direct builder sales partner. You pay ₹0 brokerage and get transparent builder prices, official documentation, and doorstep home loan assistance."
                },
                {
                    "question": f"When will possession be handed over for {item['title']}?",
                    "answer": f"The scheduled possession date for {item['title']} is {item['possessionDate']}."
                }
            ],
            "brochureUrl": f"https://propsmart.co.in/brochures/{item['slug']}-brochure.pdf",
            "mapEmbedUrl": f"https://maps.google.com/maps?q={item['lat']},{item['lng']}&z=15&output=embed",
            "approvedBanks": ["State Bank of India (SBI)", "HDFC Bank", "ICICI Bank", "Axis Bank", "Kotak Mahindra Bank"]
        }

        if item["slug"] in existing_slugs:
            idx = existing_slugs[item["slug"]]
            existing_projects[idx].update(project_obj)
        else:
            existing_projects.append(project_obj)

    print(f"Total projects after expansion: {len(existing_projects)}")
    
    city_counts = {}
    for p in existing_projects:
        c = p.get('city', 'Pune')
        city_counts[c] = city_counts.get(c, 0) + 1
    print("Projects by City:", city_counts)

    new_projects_json = json.dumps(existing_projects, indent=2)
    new_mockdata = prefix + new_projects_json + suffix

    with open(MOCKDATA_PATH, "w", encoding="utf-8") as f:
        f.write(new_mockdata)

    print(f"✅ Successfully written updated PROJECTS with city taxonomy to {MOCKDATA_PATH}")

if __name__ == "__main__":
    main()
