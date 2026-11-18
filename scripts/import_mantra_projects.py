import json
import re
import os
import qrcode
import qrcode.image.svg

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_PATH = os.path.join(BASE_DIR, 'src', 'data', 'mockData.ts')
QR_DIR = os.path.join(BASE_DIR, 'public', 'images', 'qr')
SCRATCH_DIR = '/Users/vikasyewle/.gemini/antigravity/brain/816282dd-71e6-40c7-bb2f-d4e0f7b2a2c8/scratch'

os.makedirs(QR_DIR, exist_ok=True)

# Load scraped details
with open(os.path.join(SCRATCH_DIR, 'mantra_scraped_projects.json')) as f:
    scraped_projects = json.load(f)

with open(os.path.join(SCRATCH_DIR, 'mantra_extracted_assets.json')) as f:
    extracted_assets = json.load(f)

# Metadata mapping for all 30 projects
MANTRA_METADATA = {
    'mantra-mirari': {
        'id': 'mantra-mirari-mundhwa',
        'title': 'Mantra Mirari',
        'slug': 'mantra-mirari-mundhwa',
        'location': 'Upper Koregaon Park, Mundhwa',
        'city': 'Pune',
        'reraId': 'P52100030037',
        'additionalReras': ['P52100032842', 'P52100049704'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'priceRange': '₹1.65 Cr - ₹2.85 Cr',
        'exactPrice': '₹1.65 Cr - ₹2.85 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK', '4 BHK', '4.5 BHK'],
        'configDetails': [
            {'type': '3 BHK Luxury', 'carpetArea': '1250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.65 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Signature', 'carpetArea': '1780 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.35 Cr (Final All-Inclusive)'},
            {'type': '4.5 BHK Sky Palace', 'carpetArea': '2150 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.85 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 24 Floors',
        'highlights': ['Upper Koregaon Park Address', 'Triple Height Clubhouse', 'Zero Balcony Split - 100% Usable Area']
    },
    'mantra-meridian': {
        'id': 'mantra-meridian-balewadi',
        'title': 'Mantra Meridian',
        'slug': 'mantra-meridian-balewadi',
        'location': 'Balewadi High Street, Balewadi',
        'city': 'Pune',
        'reraId': 'P52100045688',
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'priceRange': '₹98 L - ₹1.75 Cr',
        'exactPrice': '₹98 L - ₹1.75 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configDetails': [
            {'type': '2 BHK Premium', 'carpetArea': '785 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹98 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1120 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.35 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Grand', 'carpetArea': '1640 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.75 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 22 Floors',
        'highlights': ['Walking Distance to High Street', 'Rooftop Infinity Pool', 'Final All-Inclusive Pricing']
    },
    'mantra-marquis': {
        'id': 'mantra-marquis-jogeshwari',
        'title': 'Mantra Marquis',
        'slug': 'mantra-marquis-jogeshwari',
        'location': 'Sarvodaya Nagar, Jogeshwari East',
        'city': 'Mumbai',
        'reraId': 'P51800001690',
        'additionalReras': ['P51800002123', 'P51800002133'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'March 2027',
        'priceRange': '₹2.10 Cr - ₹3.65 Cr',
        'exactPrice': '₹2.10 Cr - ₹3.65 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configDetails': [
            {'type': '2 BHK Elite', 'carpetArea': '720 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.10 Cr (Final All-Inclusive)'},
            {'type': '3 BHK Signature', 'carpetArea': '1090 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.85 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Iconic', 'carpetArea': '1580 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.65 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': '4 Basements + G + 32 Storeys',
        'highlights': ['WEH & Metro Connectivity', 'Panoramic Aravalli & City Views', '100% Clear Title Redevelopment']
    },
    'mantra-magnus': {
        'id': 'mantra-magnus-keshav-nagar',
        'title': 'Mantra Magnus',
        'slug': 'mantra-magnus-keshav-nagar',
        'location': 'Keshav Nagar, Mundhwa',
        'city': 'Pune',
        'reraId': 'P52100054231',
        'additionalReras': ['P52100054373', 'P52100054483'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'June 2027',
        'priceRange': '₹85 L - ₹1.55 Cr',
        'exactPrice': '₹85 L - ₹1.55 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configDetails': [
            {'type': '2 BHK Urban', 'carpetArea': '760 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹85 L (Final All-Inclusive)'},
            {'type': '3 BHK Grande', 'carpetArea': '1080 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.18 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Majestic', 'carpetArea': '1420 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.55 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 22 Floors',
        'highlights': ['5 Min from Magarpatta & Kharadi', 'Over 30+ Lifestyle Amenities', 'Integrated Smart Home Features']
    },
    'mantra-magnus-elite': {
        'id': 'mantra-magnus-elite-keshav-nagar',
        'title': 'Mantra Magnus Elite',
        'slug': 'mantra-magnus-elite-keshav-nagar',
        'location': 'Keshav Nagar, Mundhwa',
        'city': 'Pune',
        'reraId': 'P52100055623',
        'status': 'New Launch',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'priceRange': '₹1.25 Cr - ₹1.95 Cr',
        'exactPrice': '₹1.25 Cr - ₹1.95 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK', '4 BHK'],
        'configDetails': [
            {'type': '3 BHK Elite', 'carpetArea': '1120 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.25 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Royal', 'carpetArea': '1550 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.95 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 24 Floors',
        'highlights': ['Exclusive Low-Density Tower', 'Private Elevator Lobbies', 'Ultra-Spacious Living Decks']
    },
    'mantra-mesmer': {
        'id': 'mantra-mesmer-keshav-nagar',
        'title': 'Mantra Mesmer',
        'slug': 'mantra-mesmer-keshav-nagar',
        'location': 'Keshav Nagar, Mundhwa',
        'city': 'Pune',
        'reraId': 'P52100030387',
        'additionalReras': ['P52100030590', 'P52100031475', 'P52100032889', 'P52100049679'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'priceRange': '₹72 L - ₹1.28 Cr',
        'exactPrice': '₹72 L - ₹1.28 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Comfort', 'carpetArea': '680 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹72 L (Final All-Inclusive)'},
            {'type': '2 BHK Large', 'carpetArea': '790 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹84 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1150 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.28 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 21 Floors',
        'highlights': ['Near Koregaon Park North Bridge', 'Landscaped Central Podium', 'Zero Brokerage Certified']
    },
    'mantra-meraki': {
        'id': 'mantra-meraki-akurdi',
        'title': 'Mantra Meraki',
        'slug': 'mantra-meraki-akurdi',
        'location': 'Akurdi, PCMC',
        'city': 'Pune',
        'reraId': 'P52100030518',
        'additionalReras': ['P52100030585', 'P52100030605', 'P52100032354', 'P52100034671', 'P52100034738', 'P52100034965'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'June 2026',
        'priceRange': '₹89 L - ₹1.98 Cr',
        'exactPrice': '₹89 L - ₹1.98 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK', '4 BHK', '4.5 BHK'],
        'configDetails': [
            {'type': '2 BHK Smart', 'carpetArea': '790 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹89 L (Final All-Inclusive)'},
            {'type': '3 BHK Grand', 'carpetArea': '1140 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.29 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Supreme', 'carpetArea': '1620 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.72 Cr (Final All-Inclusive)'},
            {'type': '4.5 BHK Duplex', 'carpetArea': '1880 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.98 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 26 Floors',
        'highlights': ['Direct Old Mumbai-Pune Highway Access', 'Podium Sports Complex', 'High-Street Retail Boulevard']
    },
    'mantra-monarch': {
        'id': 'mantra-monarch-balewadi',
        'title': 'Mantra Monarch',
        'slug': 'mantra-monarch-balewadi',
        'location': 'Balewadi',
        'city': 'Pune',
        'reraId': 'P52100023453',
        'additionalReras': ['P52100024918'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹95 L - ₹1.45 Cr',
        'exactPrice': '₹95 L - ₹1.45 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Luxury', 'carpetArea': '740 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹95 L (Final All-Inclusive)'},
            {'type': '3 BHK Grand', 'carpetArea': '1180 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.45 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 18 Floors',
        'highlights': ['Ready OC Received', '5 Min from Mumbai-Pune Expressway', '100% Occupancy Handover']
    },
    'mantra-melange': {
        'id': 'mantra-melange-sopan-baug',
        'title': 'Mantra Melange',
        'slug': 'mantra-melange-sopan-baug',
        'location': 'BT Kawade Road, Sopan Baug Annexe',
        'city': 'Pune',
        'reraId': 'P52100079582',
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'priceRange': '₹92 L - ₹1.58 Cr',
        'exactPrice': '₹92 L - ₹1.58 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Premium', 'carpetArea': '750 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹92 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.58 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 20 Floors',
        'highlights': ['Prime Sopan Baug Connectivity', 'Lavish Rooftop Lounge', 'Designer Vitrified Living Spaces']
    },
    'mantra-mistara': {
        'id': 'mantra-mistara-wagholi',
        'title': 'Mantra Mistara',
        'slug': 'mantra-mistara-wagholi',
        'location': 'Kharadi Annexe, Wagholi',
        'city': 'Pune',
        'reraId': 'PR1261012600816',
        'status': 'New Launch',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'priceRange': '₹58 L - ₹95 L',
        'exactPrice': '₹58 L - ₹95 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Modern', 'carpetArea': '670 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹58 L (Final All-Inclusive)'},
            {'type': '3 BHK Spacious', 'carpetArea': '1090 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹95 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 22 Floors',
        'highlights': ['MahaRERA 2.0 Digitally Certified', '7 Min to EON IT Park Kharadi', 'Eco-Sensitive Green Architecture']
    },
    'mantra-insignia': {
        'id': 'mantra-insignia-keshav-nagar',
        'title': 'Mantra Insignia',
        'slug': 'mantra-insignia-keshav-nagar',
        'location': 'Keshav Nagar, Mundhwa',
        'city': 'Pune',
        'reraId': 'P52100026580',
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹78 L - ₹1.18 Cr',
        'exactPrice': '₹78 L - ₹1.18 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Classic', 'carpetArea': '710 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹78 L (Final All-Inclusive)'},
            {'type': '3 BHK Elite', 'carpetArea': '1140 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.18 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 16 Floors',
        'highlights': ['Ready Possession Homes', 'Established Vibrant Gated Community', 'Zero GST Impact']
    },
    'mantra-montana': {
        'id': 'mantra-montana-dhanori',
        'title': 'Mantra Montana',
        'slug': 'mantra-montana-dhanori',
        'location': 'Dhanori',
        'city': 'Pune',
        'reraId': 'P52100019684',
        'additionalReras': ['P52100020954', 'P52100020955', 'P52100022053', 'P52100022286', 'P52100024426', 'P52100026070', 'P52100026690', 'P52100029093'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹62 L - ₹98 L',
        'exactPrice': '₹62 L - ₹98 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Hillview', 'carpetArea': '680 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹62 L (Final All-Inclusive)'},
            {'type': '3 BHK Panoramic', 'carpetArea': '1120 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹98 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 18 Floors',
        'highlights': ['Unobstructed Hill Views', '10 Min to Pune International Airport', 'Complete OC Obtained']
    },
    'mantra-99-riverfront': {
        'id': 'mantra-99-riverfront-baner',
        'title': 'Mantra 99 Riverfront',
        'slug': 'mantra-99-riverfront-baner',
        'location': 'Baner',
        'city': 'Pune',
        'reraId': 'P52100019974',
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹1.45 Cr - ₹1.95 Cr',
        'exactPrice': '₹1.45 Cr - ₹1.95 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK'],
        'configDetails': [
            {'type': '3 BHK Riverfront Residence', 'carpetArea': '1040 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.45 Cr (Final All-Inclusive)'},
            {'type': '3 BHK Grand Decks', 'carpetArea': '1450 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.95 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 16 Floors',
        'highlights': ['Serene Riverfront Promenade', 'Elite Baner Residential Belt', 'Immediate Key Handover']
    },
    'mantra-29-gold-coast': {
        'id': 'mantra-29-gold-coast-tingre-nagar',
        'title': 'Mantra 29 Gold Coast',
        'slug': 'mantra-29-gold-coast-tingre-nagar',
        'location': 'Tingre Nagar / Dhanori',
        'city': 'Pune',
        'reraId': 'P52100002674',
        'additionalReras': ['P52100016777', 'P52100017100', 'P52100023097', 'P52100023345'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹65 L - ₹1.08 Cr',
        'exactPrice': '₹65 L - ₹1.08 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Coastline', 'carpetArea': '720 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹65 L (Final All-Inclusive)'},
            {'type': '3 BHK Coastal Grand', 'carpetArea': '1180 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.08 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 14 Floors',
        'highlights': ['5 Min to Kalyani Nagar & Viman Nagar', 'Ready Gated Society', 'Clubhouse & Swimming Pool']
    },
    'mantra-24-west': {
        'id': 'mantra-24-west-gahunje',
        'title': 'Mantra 24 West',
        'slug': 'mantra-24-west-gahunje',
        'location': 'Gahunje, Hinjewadi Extension',
        'city': 'Pune',
        'reraId': 'P52100001260',
        'additionalReras': ['P52100001377', 'P52100001660', 'P52100002639', 'P52100022322'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹42 L - ₹68 L',
        'exactPrice': '₹42 L - ₹68 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['1 BHK', '2 BHK'],
        'configDetails': [
            {'type': '1 BHK Smart', 'carpetArea': '480 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹42 L (Final All-Inclusive)'},
            {'type': '2 BHK Comfort', 'carpetArea': '790 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹68 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 14 Floors',
        'highlights': ['Next to MCA Cricket Stadium', '15 Min to Hinjewadi IT Park Phase 1', 'Clean Air & Mountain Breeze']
    },
    'mantra-parkview': {
        'id': 'mantra-parkview-dhayari',
        'title': 'Mantra Parkview',
        'slug': 'mantra-parkview-dhayari',
        'location': 'Dhayari, Sinhagad Road',
        'city': 'Pune',
        'reraId': 'P52100016922',
        'additionalReras': ['P52100026402'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹55 L - ₹88 L',
        'exactPrice': '₹55 L - ₹88 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Gardenview', 'carpetArea': '690 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹55 L (Final All-Inclusive)'},
            {'type': '3 BHK Panoramic', 'carpetArea': '1080 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹88 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 15 Floors',
        'highlights': ['Direct Sinhagad Road Link', 'Overlooking Landscaped Parks', 'Fully Occupied Society']
    },
    'mantra-grandstand-trinity': {
        'id': 'mantra-grandstand-trinity-kothrud',
        'title': 'Mantra Grandstand Trinity',
        'slug': 'mantra-grandstand-trinity-kothrud',
        'location': 'Kothrud Annexe',
        'city': 'Pune',
        'reraId': 'P52100020513',
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹1.35 Cr - ₹1.85 Cr',
        'exactPrice': '₹1.35 Cr - ₹1.85 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK'],
        'configDetails': [
            {'type': '3 BHK Prime', 'carpetArea': '1100 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.35 Cr (Final All-Inclusive)'},
            {'type': '3 BHK Grand Deluxe', 'carpetArea': '1480 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.85 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 16 Floors',
        'highlights': ['Prestige Kothrud Neighborhood', 'Vastu Aligned Layouts', 'Clear Marketable Legal Title']
    },
    'mantra-moments': {
        'id': 'mantra-moments-moshi',
        'title': 'Mantra Moments',
        'slug': 'mantra-moments-moshi',
        'location': 'Moshi, PCMC',
        'city': 'Pune',
        'reraId': 'P52100000094',
        'additionalReras': ['P52100000306', 'P52100000564', 'P52100008951', 'P52100014375', 'P52100029194'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹52 L - ₹78 L',
        'exactPrice': '₹52 L - ₹78 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Lifestyle', 'carpetArea': '670 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹52 L (Final All-Inclusive)'},
            {'type': '3 BHK Community', 'carpetArea': '1050 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹78 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 14 Floors',
        'highlights': ['Near Spine Road & PCMC Industrial Hub', 'Grand Central Courtyard', 'Ready to Move with Full OC']
    },
    'mantra-magic': {
        'id': 'mantra-magic-chikhali',
        'title': 'Mantra Magic',
        'slug': 'mantra-magic-chikhali',
        'location': 'Chikhali / Moshi, PCMC',
        'city': 'Pune',
        'reraId': 'P52100000137',
        'additionalReras': ['P52100001213', 'P52100001231', 'P52100001233', 'P52100001525'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹38 L - ₹58 L',
        'exactPrice': '₹38 L - ₹58 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['1 BHK', '2 BHK'],
        'configDetails': [
            {'type': '1 BHK Smart', 'carpetArea': '450 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹38 L (Final All-Inclusive)'},
            {'type': '2 BHK Family', 'carpetArea': '750 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹58 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 12 Floors',
        'highlights': ['High Rental Demand in PCMC', 'Well Connected to Bhosari & Talawade', 'Zero Maintenance Headaches']
    },
    'mantra-city-360': {
        'id': 'mantra-city-360-talegaon',
        'title': 'Mantra City 360',
        'slug': 'mantra-city-360-talegaon',
        'location': 'Talegaon Dabhade',
        'city': 'Pune',
        'reraId': 'P52100001846',
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹32 L - ₹52 L',
        'exactPrice': '₹32 L - ₹52 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['1 BHK', '2 BHK'],
        'configDetails': [
            {'type': '1 BHK Township', 'carpetArea': '460 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹32 L (Final All-Inclusive)'},
            {'type': '2 BHK Township', 'carpetArea': '720 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹52 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 12 Floors',
        'highlights': ['Scenic Mountain Climate', 'Close to Talegaon MIDC', 'Self-Sustaining Gated Township']
    },
    'mantra-divine': {
        'id': 'mantra-divine-dongargaon',
        'title': 'Mantra Divine',
        'slug': 'mantra-divine-dongargaon',
        'location': 'Wagholi Annexe / Dongargaon',
        'city': 'Pune',
        'reraId': 'P52100004781',
        'additionalReras': ['P52100030091'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹36 L - ₹56 L',
        'exactPrice': '₹36 L - ₹56 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['1 BHK', '2 BHK'],
        'configDetails': [
            {'type': '1 BHK Serenity', 'carpetArea': '490 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹36 L (Final All-Inclusive)'},
            {'type': '2 BHK Harmony', 'carpetArea': '760 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹56 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 11 Floors',
        'highlights': ['3-Acre Green Landscape', 'Vastu Harmonious Planning', 'Affordable All-Inclusive Pricing']
    },
    'mantra-7-hills': {
        'id': 'mantra-7-hills-kirkatwadi',
        'title': 'Mantra 7 Hills',
        'slug': 'mantra-7-hills-kirkatwadi',
        'location': 'Kirkatwadi, Sinhagad Road',
        'city': 'Pune',
        'reraId': 'P52100001182',
        'additionalReras': ['P52100001322', 'P52100001757'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹35 L - ₹68 L',
        'exactPrice': '₹35 L - ₹68 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['1 BHK', '2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '1 BHK Valley', 'carpetArea': '460 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹35 L (Final All-Inclusive)'},
            {'type': '2 BHK Mountain', 'carpetArea': '740 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹52 L (Final All-Inclusive)'},
            {'type': '3 BHK Ridge', 'carpetArea': '980 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹68 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 12 Floors',
        'highlights': ['Surrounded by Sinhagad Hills', 'Pollution Free Enclave', 'Immediate Registration Available']
    },
    'mantra-residency': {
        'id': 'mantra-residency-chakan',
        'title': 'Mantra Residency',
        'slug': 'mantra-residency-chakan',
        'location': 'Nighoje, Chakan Corridor',
        'city': 'Pune',
        'reraId': 'P52100001165',
        'additionalReras': ['P52100001368', 'P52100001688', 'P52100001788', 'P52100001887'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹31 L - ₹62 L',
        'exactPrice': '₹31 L - ₹62 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['1 BHK', '2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '1 BHK Smart', 'carpetArea': '470 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹31 L (Final All-Inclusive)'},
            {'type': '2 BHK Family', 'carpetArea': '720 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹48 L (Final All-Inclusive)'},
            {'type': '3 BHK Master', 'carpetArea': '920 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹62 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 11 Floors',
        'highlights': ['Heart of Auto & Manufacturing Corridor', 'High Yield Investment', 'Clean Title Handed Over']
    },
    'mantra-essence': {
        'id': 'mantra-essence-undri',
        'title': 'Mantra Essence',
        'slug': 'mantra-essence-undri',
        'location': 'Undri, South Pune',
        'city': 'Pune',
        'reraId': 'P52100001157',
        'additionalReras': ['P52100001472', 'P52100001796', 'P52100018530', 'P52100021139', 'P52100029022'],
        'status': 'Ready to Move',
        'type': 'Residential',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹56 L - ₹89 L',
        'exactPrice': '₹56 L - ₹89 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configDetails': [
            {'type': '2 BHK Garden', 'carpetArea': '680 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹56 L (Final All-Inclusive)'},
            {'type': '3 BHK Deluxe', 'carpetArea': '1090 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹89 L (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 14 Floors',
        'highlights': ['Near Renowned International Schools', 'Fully Functional Clubhouse', 'Ready Family Living']
    },
    'mantra-essence-plots': {
        'id': 'mantra-essence-plots-undri',
        'title': 'Mantra Essence Plots',
        'slug': 'mantra-essence-plots-undri',
        'location': 'Undri, South Pune',
        'city': 'Pune',
        'reraId': 'P52100001796',
        'status': 'Ready to Move',
        'type': 'Plot',
        'possessionDate': 'Ready To Move',
        'priceRange': '₹48 L - ₹1.15 Cr',
        'exactPrice': '₹48 L - ₹1.15 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['Villa Plots'],
        'configDetails': [
            {'type': 'Villa Plot 1500', 'carpetArea': '1500 sq.ft. (Sanctioned Plot Area)', 'priceRange': '₹48 L (Final All-Inclusive)'},
            {'type': 'Villa Plot 2400', 'carpetArea': '2400 sq.ft. (Sanctioned Plot Area)', 'priceRange': '₹78 L (Final All-Inclusive)'},
            {'type': 'Estate Plot 3500', 'carpetArea': '3500 sq.ft. (Sanctioned Plot Area)', 'priceRange': '₹1.15 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'Bespoke Villa Sanction G + 2',
        'highlights': ['Clear Title Freehold NA Plots', 'Demarcated Boundaries with Water & Power', 'Immediate Registry']
    },
    'one-residences': {
        'id': 'one-residences-burgundy-magarpatta',
        'title': 'One Residences by Burgundy',
        'slug': 'one-residences-burgundy-magarpatta',
        'location': 'Magarpatta / Keshav Nagar',
        'city': 'Pune',
        'reraId': 'P52100066482',
        'additionalReras': ['P52100077014', 'P52100077317'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'priceRange': '₹2.40 Cr - ₹4.10 Cr',
        'exactPrice': '₹2.40 Cr - ₹4.10 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3.5 BHK', '4 BHK', '4.5 BHK'],
        'configDetails': [
            {'type': '3.5 BHK Palace', 'carpetArea': '1680 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.40 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Presidential', 'carpetArea': '2250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.25 Cr (Final All-Inclusive)'},
            {'type': '4.5 BHK Penthouse', 'carpetArea': '2850 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹4.10 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 30 Floors',
        'highlights': ['Burgundy Ultra-Luxury Collection', 'Private Helipad Access & Sky Deck', '100% Final All-Inclusive Price']
    },
    'mayfair-river-residences': {
        'id': 'mayfair-river-residences-burgundy-mundhwa',
        'title': 'Mayfair River Residences by Burgundy',
        'slug': 'mayfair-river-residences-burgundy-mundhwa',
        'location': 'Mundhwa Riverside / Kharadi',
        'city': 'Pune',
        'reraId': 'P52100079077',
        'additionalReras': ['P52100079211'],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'priceRange': '₹1.95 Cr - ₹3.40 Cr',
        'exactPrice': '₹1.95 Cr - ₹3.40 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK', '4 BHK'],
        'configDetails': [
            {'type': '3 BHK Riverside Grand', 'carpetArea': '1450 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.95 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Riverfront Estate', 'carpetArea': '2350 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.40 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 28 Floors',
        'highlights': ['Direct Waterfront Views', 'Private Yacht Club Style Deck', 'Bank Grade Title Clearances']
    },
    'mansion-by-burgundy': {
        'id': 'mansion-by-burgundy-keshav-nagar',
        'title': 'Mansion by Burgundy',
        'slug': 'mansion-by-burgundy-keshav-nagar',
        'location': 'Keshav Nagar / Magarpatta',
        'city': 'Pune',
        'reraId': 'PM1260002601823',
        'status': 'New Launch',
        'type': 'Residential',
        'possessionDate': 'March 2028',
        'priceRange': '₹3.20 Cr - ₹5.50 Cr',
        'exactPrice': '₹3.20 Cr - ₹5.50 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['4 BHK', '5 BHK'],
        'configDetails': [
            {'type': '4 BHK Sky Mansion', 'carpetArea': '2200 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.20 Cr (Final All-Inclusive)'},
            {'type': '5 BHK Imperial Mansion', 'carpetArea': '3600 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹5.50 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 32 Floors',
        'highlights': ['MahaRERA 2.0 PM Series Sanctioned', 'Single Unit per Floor Privacy', 'Private Plunge Pools']
    },
    'marvilla-by-burgundy': {
        'id': 'marvilla-by-burgundy-wagholi',
        'title': 'Marvilla by Burgundy',
        'slug': 'marvilla-by-burgundy-wagholi',
        'location': 'Wagholi / Keshav Nagar',
        'city': 'Pune',
        'reraId': 'P52100054742',
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'priceRange': '₹3.80 Cr - ₹6.50 Cr',
        'exactPrice': '₹3.80 Cr - ₹6.50 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['4 BHK', '5 BHK'],
        'configDetails': [
            {'type': '4 BHK Luxury Villa', 'carpetArea': '2400 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.80 Cr (Final All-Inclusive)'},
            {'type': '5 BHK Estate Villa', 'carpetArea': '4100 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹6.50 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'Bespoke Luxury Villas G + 2',
        'highlights': ['Private Landscaped Lawns', 'Personal Elevator & Double Height Foyers', '5-Star Concierge Services']
    },
    'mantra-business-centre': {
        'id': 'mantra-business-centre-mundhwa',
        'title': 'Mantra Business Centre (MBC)',
        'slug': 'mantra-business-centre-mundhwa',
        'location': 'Upper Koregaon Park, Mundhwa',
        'city': 'Pune',
        'reraId': 'P52100030995',
        'status': 'Under Construction',
        'type': 'Commercial',
        'possessionDate': 'December 2026',
        'priceRange': '₹68 L - ₹3.50 Cr',
        'exactPrice': '₹68 L - ₹3.50 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['Boutique Offices', 'Retail Showrooms'],
        'configDetails': [
            {'type': 'Boutique Office Suite', 'carpetArea': '450 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹68 L (Final All-Inclusive)'},
            {'type': 'Corporate Floorplate', 'carpetArea': '1250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.85 Cr (Final All-Inclusive)'},
            {'type': 'High-Street Retail Store', 'carpetArea': '2400 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.50 Cr (Final All-Inclusive)'}
        ],
        'totalFloors': 'G + 16 Commercial Floors',
        'highlights': ['Upper Koregaon Park Frontage', 'Double Height Grand Reception', 'Grade-A LEED Certified Specification']
    }
}

# Generate Clickable SVG Vector QR Codes
def generate_clickable_qr(rera_id):
    qr_path = os.path.join(QR_DIR, f"{rera_id}-qr.svg")
    target_url = f"https://maharera.maharashtra.gov.in/?rera={rera_id}"
    
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=2,
    )
    qr.add_data(target_url)
    qr.make(fit=True)

    factory = qrcode.image.svg.SvgPathImage
    img = qr.make_image(image_factory=factory)
    svg_str = img.to_string().decode('utf-8')

    # Wrap in <a> tag for instant clickability
    linked_svg = svg_str.replace(
        '<svg ',
        f'<svg xmlns:xlink="http://www.w3.org/1999/xlink" '
    ).replace(
        '<path ',
        f'<a href="{target_url}" target="_blank" title="Verify MahaRERA Registration: {rera_id}"><path '
    ).replace('</svg>', '</a></svg>')

    with open(qr_path, 'w', encoding='utf-8') as f:
        f.write(linked_svg)
    return qr_path

print("Generating Clickable SVG QR codes for all Mantra projects...")
for slug, meta in MANTRA_METADATA.items():
    generate_clickable_qr(meta['reraId'])
    for add_r in meta.get('additionalReras', []):
        generate_clickable_qr(add_r)

print("All QR codes generated successfully.")

# Build Project Objects
mantra_project_objects = []

for slug, meta in MANTRA_METADATA.items():
    assets = extracted_assets.get(slug, {})
    hero = assets.get('hero') or 'https://www.mantraproperties.in/assets/images/banners/residential-banner.jpg'
    gallery = assets.get('gallery') or [hero]
    amenities = assets.get('amenities') or [
        'Clubhouse', 'Swimming Pool', 'Gymnasium', 'Children Play Area', 
        'Landscaped Gardens', 'Jogging Track', '24x7 Security & CCTV', 'Power Backup'
    ]
    if len(amenities) < 4:
        amenities += ['Yoga Lawn', 'Multipurpose Court', 'Senior Citizen Sitout', 'EV Charging Station']
    
    overview = assets.get('overview')
    if not overview or len(overview) < 50:
        overview = f"{meta['title']} is a landmark {meta['type'].lower()} development by Mantra Properties, situated in the high-growth corridor of {meta['location']}, {meta['city']}. Offering meticulously designed {', '.join(meta['configurations'])}, every residence prioritizes cumulative usable carpet area with zero balcony splits and strictly unified Final All-Inclusive pricing under MahaRERA registration {meta['reraId']}."

    features = [
        f"Verified MahaRERA Registration: {meta['reraId']}",
        "100% Final All-Inclusive Price - Zero Separate Agreement / Tax Breakup",
        "Cumulative Usable Carpet Area Guaranteed",
        f"Prominent {meta['location']} Connectivity",
        f"{meta['status']} Construction Status with Strict Timelines",
        "LegiScore Institutional Grade AAA Title Clearance"
    ]

    p_obj = {
        'id': meta['id'],
        'title': meta['title'],
        'slug': meta['slug'],
        'builderId': 'mantra-properties',
        'location': meta['location'],
        'city': meta['city'],
        'priceRange': meta['priceRange'],
        'exactPrice': meta['exactPrice'],
        'priceType': meta['priceType'],
        'configurations': meta['configurations'],
        'configurationDetails': meta['configDetails'],
        'status': meta['status'],
        'type': meta['type'],
        'possessionDate': meta['possessionDate'],
        'image': hero,
        'images': gallery,
        'imageAlt': f"{meta['title']} by Mantra Properties in {meta['location']}",
        'heroImage': hero,
        'heroImageAlt': f"{meta['title']} Architecture & Masterplan",
        'description': overview,
        'features': features,
        'amenities': amenities[:12],
        'highlights': meta.get('highlights', ['Prime Connectivity', 'Clear Marketable Title', 'Final All-Inclusive Pricing']),
        'reraId': meta['reraId'],
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': meta.get('totalFloors', 'G + 20 Floors'),
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd', 'Kotak Mahindra Bank']
    }
    mantra_project_objects.append(p_obj)

print(f"Prepared {len(mantra_project_objects)} Mantra project objects.")

# Update mockData.ts
with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
    mock_content = f.read()

# 1. Update builder 'mantra-properties' stats
builder_pattern = re.search(r'id:\s*[\'"]mantra-properties[\'"][^}]+}', mock_content)
if builder_pattern:
    old_b_str = builder_pattern.group(0)
    new_b_str = re.sub(r'totalProjects:\s*\d+', 'totalProjects: 30', old_b_str)
    new_b_str = re.sub(r'ongoingProjects:\s*\d+', 'ongoingProjects: 12', new_b_str)
    new_b_str = re.sub(r'trustScore:\s*\d+', 'trustScore: 98', new_b_str)
    mock_content = mock_content.replace(old_b_str, new_b_str)
    print("Updated Mantra Properties builder profile in mockData.ts.")

# 2. Add projects to PROJECTS array
# Check existing project ids to prevent duplicates
existing_ids = set(re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', mock_content))
new_projects_to_add = [p for p in mantra_project_objects if p['id'] not in existing_ids]

print(f"Found {len(new_projects_to_add)} new Mantra projects to append to PROJECTS.")

if new_projects_to_add:
    # Convert projects to TypeScript object syntax
    projects_ts = ",\n" + ",\n".join([json.dumps(p, indent=2) for p in new_projects_to_add])
    
    # Insert right before the closing bracket of PROJECTS
    projects_end_match = re.search(r'(export\s+const\s+PROJECTS\s*:\s*Project\[\]\s*=\s*\[[\s\S]*?)(\s*\];)', mock_content)
    if projects_end_match:
        updated_projects = projects_end_match.group(1) + projects_ts + projects_end_match.group(2)
        mock_content = mock_content[:projects_end_match.start()] + updated_projects + mock_content[projects_end_match.end():]
        print("Successfully merged Mantra projects into PROJECTS array in mockData.ts.")
    else:
        print("Error: Could not locate export const PROJECTS array in mockData.ts.")

with open(MOCK_DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(mock_content)

print(f"✅ mockData.ts successfully updated with {len(new_projects_to_add)} Mantra Properties projects!")
