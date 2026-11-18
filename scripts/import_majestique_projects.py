import json
import re
import os
import qrcode
import qrcode.image.svg

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_PATH = os.path.join(BASE_DIR, 'src', 'data', 'mockData.ts')
QR_DIR = os.path.join(BASE_DIR, 'public', 'images', 'qr')

os.makedirs(QR_DIR, exist_ok=True)

# 1. Define Builder
MAJESTIQUE_BUILDER = {
    "id": "majestique-landmarks",
    "name": "Majestique Landmarks",
    "slug": "majestique-landmarks",
    "logo": "https://majestiqueproperties.com/wp-content/uploads/2019/06/Majestique-Landmarks.png",
    "logoAlt": "Majestique Landmarks Logo",
    "heroImage": "https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg",
    "heroImageAlt": "Majestique Landmarks Developments Pune",
    "description": "Majestique Landmarks is one of Pune's most distinguished real estate developers, delivering landmark residential communities and commercial destinations across Kharadi, Balewadi, Kothrud, Gultekdi, NIBM, and Hadapsar. Renowned for architectural innovation, timely delivery, and transparent consumer compliance.",
    "establishedYear": 2007,
    "totalProjects": 35,
    "ongoingProjects": 16,
    "locations": [
        "Kharadi", "Balewadi", "Kothrud", "Gultekdi", "NIBM Annexe", 
        "Warje", "Handewadi", "Undri", "Bibwewadi"
    ],
    "experience": 18,
    "trustScore": 97,
    "isVerified": True,
    "mobile": "+918448888888"
}

# 2. Define Ongoing Residential & Commercial Projects
MAJESTIQUE_PROJECTS = [
    {
        'id': 'the-crown-majestique-gultekdi',
        'title': 'The Crown by Majestique',
        'slug': 'the-crown-majestique-gultekdi',
        'builderId': 'majestique-landmarks',
        'location': 'Near 7 Loves Chowk, Gultekdi / Market Yard',
        'city': 'Pune',
        'priceRange': '₹1.95 Cr - ₹3.40 Cr',
        'exactPrice': '₹1.95 Cr - ₹3.40 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '3 BHK Palatial', 'carpetArea': '1350 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.95 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Presidential', 'carpetArea': '2250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.40 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'image': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'images': [
            'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
            'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg'
        ],
        'imageAlt': 'The Crown by Majestique Gultekdi Market Yard Pune',
        'heroImage': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'heroImageAlt': 'The Crown Architecture & Sky Lounges',
        'description': 'The Crown by Majestique is a crowning architectural jewel located near 7 Loves Chowk, Gultekdi, offering palatial 3 & 4 BHK residences with single-unit privacy, panoramic city views, and bank-grade legal title under MahaRERA registration P52100054379. Enforces strictly unified Final All-Inclusive pricing with zero separate stamp duty break-up and cumulative usable carpet area.',
        'features': [
            'MahaRERA Registration: P52100054379',
            '100% Final All-Inclusive Price - Zero Extra Registration or Tax Breakup',
            'Cumulative Usable Carpet Area Guaranteed (Zero Balcony Split)',
            'Prime Gultekdi Market Yard Address with 7 Loves Chowk Access',
            'Multi-Tier Rooftop Sky Club & Infinity Swimming Pool',
            'LegiScore Institutional Grade AAA Title Clearance'
        ],
        'amenities': [
            'Sky Lounge', 'Infinity Pool', 'Designer Clubhouse', 'State-of-the-Art Gymnasium',
            'Landscaped Zen Gardens', 'Banquet Hall', 'Indoor Games Arena', 'EV Charging Stations'
        ],
        'highlights': ['Market Yard Central Location', 'Single Floorplate Privacy', 'Ultra-Low Density Community'],
        'reraId': 'P52100054379',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': '3 Basements + G + 28 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd', 'Kotak Mahindra Bank']
    },
    {
        'id': 'majestique-signature-towers-balewadi',
        'title': 'Majestique Signature Towers',
        'slug': 'majestique-signature-towers-balewadi',
        'builderId': 'majestique-landmarks',
        'location': 'Balewadi High Street, Balewadi',
        'city': 'Pune',
        'priceRange': '₹1.05 Cr - ₹1.68 Cr',
        'exactPrice': '₹1.05 Cr - ₹1.68 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Luxury', 'carpetArea': '760 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.05 Cr (Final All-Inclusive)'},
            {'type': '3 BHK Signature', 'carpetArea': '1180 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.68 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'June 2026',
        'image': 'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
        'images': [
            'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
            'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg'
        ],
        'imageAlt': 'Majestique Signature Towers Balewadi High Street Pune',
        'heroImage': 'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
        'heroImageAlt': 'Majestique Signature Towers Façade',
        'description': 'Majestique Signature Towers represents luxury residential living right on the vibrant Balewadi High Street corridor. Featuring meticulously crafted 2 & 3 BHK residences with expansive living decks, floor-to-ceiling glass fenestration, and direct expressway connectivity under MahaRERA registration P52100046445 and P52100047314.',
        'features': [
            'MahaRERA Registration: P52100046445 / P52100047314',
            '100% Final All-Inclusive Price - Zero Hidden Taxes',
            'Cumulative Usable Carpet Area without Balcony Subtractions',
            'Immediate Access to Balewadi High Street Dining & Retail',
            'Triple-Height Grand Entrance Lobby',
            'LegiScore Grade AAA Title Search & CERSAI Verified'
        ],
        'amenities': [
            'Rooftop Infinity Edge Pool', 'Health Club & Spa', 'Co-working Business Lounge',
            'Tennis & Pickleball Court', 'Children Play Zone', 'Jogging Track', '24x7 High-Tech Security'
        ],
        'highlights': ['Walking Distance to Balewadi High Street', 'Close to Hinjewadi IT Park', 'Superior Rental Yield'],
        'reraId': 'P52100046445',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 24 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd']
    },
    {
        'id': '27-grand-residences-balewadi',
        'title': '27 Grand Residences by Majestique',
        'slug': '27-grand-residences-balewadi',
        'builderId': 'majestique-landmarks',
        'location': 'Balewadi',
        'city': 'Pune',
        'priceRange': '₹98 L - ₹1.58 Cr',
        'exactPrice': '₹98 L - ₹1.58 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Premium', 'carpetArea': '780 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹98 L (Final All-Inclusive)'},
            {'type': '3 BHK Elite', 'carpetArea': '1220 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.58 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'image': 'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
        'images': [
            'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp'
        ],
        'imageAlt': '27 Grand Residences by Majestique Balewadi',
        'heroImage': 'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
        'heroImageAlt': '27 Grand Residences Balewadi Sky Towers',
        'description': '27 Grand Residences brings elevated contemporary architecture to Balewadi. Offering smart, high-utility 2 & 3 BHK homes equipped with premium branded specifications, landscaped recreational terraces, and comprehensive statutory approvals under MahaRERA registration P52100047314.',
        'features': [
            'MahaRERA Registration: P52100047314',
            'Strictly Final All-Inclusive Price (Zero Breakup)',
            'Cumulative Carpet Area Enforced with No Separate Balcony Deductions',
            '5 Minutes from Baner-Balewadi Metro Station',
            'LegiScore Institutional Title Verified'
        ],
        'amenities': [
            'Clubhouse', 'Swimming Pool', 'Gymnasium', 'Landscaped Garden',
            'Children Play Area', 'Party Lawn', 'Security Cabin & CCTV'
        ],
        'highlights': ['Fast-Track Construction', 'Prime Residential Micro-Market', '100% Transparency'],
        'reraId': 'P52100047314',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 22 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-evolvus-central-kharadi',
        'title': 'Majestique Evolvus',
        'slug': 'majestique-evolvus-central-kharadi',
        'builderId': 'majestique-landmarks',
        'location': 'Central Kharadi',
        'city': 'Pune',
        'priceRange': '₹92 L - ₹2.10 Cr',
        'exactPrice': '₹92 L - ₹2.10 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Urban Comfort', 'carpetArea': '790 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹92 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury Grande', 'carpetArea': '1180 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.48 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Signature Palace', 'carpetArea': '1650 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.10 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'image': 'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg',
        'images': [
            'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg',
            'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp'
        ],
        'imageAlt': 'Majestique Evolvus Central Kharadi Pune',
        'heroImage': 'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg',
        'heroImageAlt': 'Majestique Evolvus Towers & Central Boulevard',
        'description': 'Majestique Evolvus is a landmark mixed-use residential and commercial master-community in the beating heart of Central Kharadi. Offering 2, 3 & 4 BHK residences with state-of-the-art podium amenities, pedestrian boulevards, and immediate proximity to EON IT Park under MahaRERA registration P52100054253, P52100056143, and P52100080891.',
        'features': [
            'MahaRERA Registration: P52100054253 / P52100056143',
            '100% Final All-Inclusive Price - Zero Surprises',
            'Total Usable Cumulative Carpet Area Measurement',
            'Direct Road Connectivity to World Trade Center & EON Free Zone',
            'Over 40+ Curated Indoor & Outdoor Lifestyle Amenities',
            'LegiScore Grade AAA Institutional Title Report'
        ],
        'amenities': [
            'Grand Multi-Level Clubhouse', 'Resort-Style Swimming Pool', 'Gymnasium & Aerobics Studio',
            'Squash Court', 'Mini Theatre', 'Skate Park & Jogging Track', 'Senior Citizens Serenity Pavilion'
        ],
        'highlights': ['Prime Central Kharadi Location', 'Walk-to-Work Lifestyle', 'Multi-Phase Master Development'],
        'reraId': 'P52100054253',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 26 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd', 'Kotak Mahindra Bank']
    },
    {
        'id': 'majestique-towers-kharadi',
        'title': 'Majestique Towers 2.0',
        'slug': 'majestique-towers-kharadi',
        'builderId': 'majestique-landmarks',
        'location': 'Near EON IT Park & WTC, Kharadi',
        'city': 'Pune',
        'priceRange': '₹86 L - ₹1.45 Cr',
        'exactPrice': '₹86 L - ₹1.45 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Premium', 'carpetArea': '740 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹86 L (Final All-Inclusive)'},
            {'type': '3 BHK Grande', 'carpetArea': '1190 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.45 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'image': 'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
        'images': [
            'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
            'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg'
        ],
        'imageAlt': 'Majestique Towers Kharadi Pune',
        'heroImage': 'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
        'heroImageAlt': 'Majestique Towers Elevated Living Architecture',
        'description': 'Majestique Towers 2.0 redefines elevated urban living in Kharadi. Strategically positioned next to EON IT Park, this development features modern 2 & 3 BHK homes, an elevated skybridge, podium sports arenas, and verified statutory compliance across MahaRERA numbers P52100053786, P52100078306, and MahaRERA 2.0 PR1260002600313.',
        'features': [
            'MahaRERA Registration: P52100053786 / PR1260002600313',
            'Single Unified Final All-Inclusive Price',
            'Full Cumulative Carpet Area Guaranteed with Zero Balcony Deductions',
            '2 Minutes to World Trade Center Kharadi',
            'Sky Deck Lounge and Observation Deck'
        ],
        'amenities': [
            'Sky Bridge Walking Deck', 'Olympic Length Lap Pool', 'Modern Fitness Center',
            'Badminton Court', 'Kids Splash Pool', 'Landscaped Central Amphitheatre', '24x7 Security'
        ],
        'highlights': ['Immediate IT Hub Proximity', 'High Rental Inflow', 'MahaRERA 2.0 Digitally Audited'],
        'reraId': 'P52100053786',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 24 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd']
    },
    {
        'id': 'majestique-marbella-kharadi',
        'title': 'Majestique Marbella',
        'slug': 'majestique-marbella-kharadi',
        'builderId': 'majestique-landmarks',
        'location': 'Central Kharadi',
        'city': 'Pune',
        'priceRange': '₹82 L - ₹1.35 Cr',
        'exactPrice': '₹82 L - ₹1.35 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Comfort', 'carpetArea': '720 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹82 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1140 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.35 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'June 2026',
        'image': 'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
        'images': [
            'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp'
        ],
        'imageAlt': 'Majestique Marbella Central Kharadi',
        'heroImage': 'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
        'heroImageAlt': 'Majestique Marbella Kharadi Pune',
        'description': 'Majestique Marbella is an exquisite Spanish-inspired gated residential sanctuary in Central Kharadi. Featuring spacious 2 & 3 BHK apartments, grand courtyards, and seamless connectivity to Nagar Road and Magarpatta under MahaRERA registration P52100032450 and P52100051012.',
        'features': [
            'MahaRERA Registration: P52100032450 / P52100051012',
            '100% Final All-Inclusive Price Transparency',
            'Cumulative Usable Carpet Area without Structural Deductions',
            'Spanish Courtyard & Cascading Water Features',
            'Close to Phoenix Marketcity & International Airport'
        ],
        'amenities': [
            'Swimming Pool with Jacuzzi', 'Clubhouse', 'Children Play Zone', 'Multipurpose Hall',
            'Yoga & Meditation Pavilion', 'Cycling Track', 'Perimeter Security Systems'
        ],
        'highlights': ['European Architecture', 'Established Kharadi Neighborhood', 'Fast Delivery Record'],
        'reraId': 'P52100032450',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 21 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-aravali-warje-kothrud-nxt',
        'title': 'Majestique Aravali',
        'slug': 'majestique-aravali-warje-kothrud-nxt',
        'builderId': 'majestique-landmarks',
        'location': 'Warje, Kothrud NXT',
        'city': 'Pune',
        'priceRange': '₹79 L - ₹1.28 Cr',
        'exactPrice': '₹79 L - ₹1.28 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Valley View', 'carpetArea': '710 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹79 L (Final All-Inclusive)'},
            {'type': '3 BHK Panoramic', 'carpetArea': '1080 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.28 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2027',
        'image': 'https://aravali.majestiquelandmarks.com/Aravali_files/hero-desktop_v1.jpg',
        'images': [
            'https://aravali.majestiquelandmarks.com/Aravali_files/hero-desktop_v1.jpg'
        ],
        'imageAlt': 'Majestique Aravali Warje Kothrud NXT Pune',
        'heroImage': 'https://aravali.majestiquelandmarks.com/Aravali_files/hero-desktop_v1.jpg',
        'heroImageAlt': 'Majestique Aravali Scenic Hillview Architecture',
        'description': 'Majestique Aravali blends luxury urban living with the tranquil backdrop of the Western Ghat hills in Warje, Kothrud NXT. Features 2 & 3 BHK residences with pure mountain ventilation, direct access to the Mumbai-Bengaluru Highway, and certified legal title under MahaRERA registration P52100055877.',
        'features': [
            'MahaRERA Registration: P52100055877',
            'Final All-Inclusive Pricing - Zero Stamp Duty / Tax Surprises',
            'Full Cumulative Carpet Area Enforced with Zero Balcony Deductions',
            'Unobstructed Panoramic Hill Views of Kothrud NXT',
            'LegiScore Bank-Grade Title & CERSAI Clearance'
        ],
        'amenities': [
            'Infinity Edge Hill-Facing Pool', 'Clubhouse & Gymnasium', 'Forest Trail Walking Track',
            'Children Adventure Play Park', 'Senior Citizen Pavilion', 'Acoustic Party Hall'
        ],
        'highlights': ['10 Min to Kothrud Chandani Chowk', 'Pure Mountain Air', 'Low Density Living'],
        'reraId': 'P52100055877',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 22 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd']
    },
    {
        'id': 'majestique-rhythm-county-handewadi-hadapsar',
        'title': 'Majestique Rhythm County',
        'slug': 'majestique-rhythm-county-handewadi-hadapsar',
        'builderId': 'majestique-landmarks',
        'location': 'Hadapsar-Handewadi Road',
        'city': 'Pune',
        'priceRange': '₹58 L - ₹95 L',
        'exactPrice': '₹58 L - ₹95 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Lifestyle', 'carpetArea': '680 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹58 L (Final All-Inclusive)'},
            {'type': '3 BHK Grand Family', 'carpetArea': '1060 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹95 L (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'image': 'https://rhythmcounty.majestiquelandmarks.com/assets/images/hero-rhythm-desktop_v1.jpg',
        'images': [
            'https://rhythmcounty.majestiquelandmarks.com/assets/images/hero-rhythm-desktop_v1.jpg'
        ],
        'imageAlt': 'Majestique Rhythm County Hadapsar Handewadi Pune',
        'heroImage': 'https://rhythmcounty.majestiquelandmarks.com/assets/images/hero-rhythm-desktop_v1.jpg',
        'heroImageAlt': 'Majestique Rhythm County Gated Community',
        'description': 'Majestique Rhythm County is a vibrant gated residential community located on the thriving Hadapsar-Handewadi corridor. Features well-ventilated 2 & 3 BHK homes, sprawling sports courts, and verified regulatory filings under MahaRERA registration P52100054338 and MahaRERA 2.0 PR1260002501002.',
        'features': [
            'MahaRERA Registration: P52100054338 / PR1260002501002',
            '100% Final All-Inclusive Price Guarantee',
            'Cumulative Usable Carpet Area without Balcony Subtractions',
            '15 Minutes to Magarpatta Cybercity & SP Infocity',
            'Grand Central Landscaped Podium with Multi-Sport Courts'
        ],
        'amenities': [
            'Clubhouse with Gymnasium', 'Swimming Pool & Sun Deck', 'Cricket Practice Pitch',
            'Children Play Park', 'Jogging Track', 'Vastu Aligned Layouts', '24x7 Security'
        ],
        'highlights': ['High Rental Demand Hub', 'Integrated Gated Society', 'Value-Driven Pricing'],
        'reraId': 'P52100054338',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 18 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-ephelia-nibm-annexe',
        'title': 'Majestique Ephelia',
        'slug': 'majestique-ephelia-nibm-annexe',
        'builderId': 'majestique-landmarks',
        'location': 'Central NIBM Annexe',
        'city': 'Pune',
        'priceRange': '₹78 L - ₹1.65 Cr',
        'exactPrice': '₹78 L - ₹1.65 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Classic', 'carpetArea': '750 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹78 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1120 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.25 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Grand', 'carpetArea': '1520 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.65 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'image': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'images': [
            'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg'
        ],
        'imageAlt': 'Majestique Ephelia NIBM Annexe Pune',
        'heroImage': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'heroImageAlt': 'Majestique Ephelia Luxury Living NIBM',
        'description': 'Majestique Ephelia is a premier residential landmark in Central NIBM Annexe, offering spacious 2, 3 & 4 BHK apartments surrounded by South Pune greenery, prestigious schools, and vibrant cafes under MahaRERA registration P52100051801. Guaranteed single final all-inclusive pricing with zero tax surprises.',
        'features': [
            'MahaRERA Registration: P52100051801',
            'Single Final All-Inclusive On-Road Price',
            'Full Cumulative Carpet Area Measurement without Balcony Deductions',
            'Adjacent to South Pune High-Street Retail & Top Schools',
            'LegiScore Institutional Title Search Cleared'
        ],
        'amenities': [
            'Resort-Style Swimming Pool', 'Clubhouse & Fitness Studio', 'Landscaped Meditation Zone',
            'Tennis & Basketball Arena', 'Kids Play Zone', 'Amphitheatre', 'High-Speed Elevators'
        ],
        'highlights': ['Prestigious NIBM Address', 'Near Corinthian Club', 'High Usable Area Ratios'],
        'reraId': 'P52100051801',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 20 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd']
    },
    {
        'id': 'majestique-krutarth-bibwewadi',
        'title': 'Majestique Krutarth',
        'slug': 'majestique-krutarth-bibwewadi',
        'builderId': 'majestique-landmarks',
        'location': 'Bibwewadi / Market Yard',
        'city': 'Pune',
        'priceRange': '₹1.55 Cr - ₹2.65 Cr',
        'exactPrice': '₹1.55 Cr - ₹2.65 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '3 BHK Heritage', 'carpetArea': '1180 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.55 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Aristocrat', 'carpetArea': '1850 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.65 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2028',
        'image': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'images': [
            'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg'
        ],
        'imageAlt': 'Majestique Krutarth Bibwewadi Pune',
        'heroImage': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'heroImageAlt': 'Majestique Krutarth Heritage Redevelopment',
        'description': 'Majestique Krutarth is a prestigious residential redevelopment enclave in Bibwewadi, near Market Yard. Offering bespoke 3 & 4 BHK homes with advanced smart automation, expansive floorplans, and certified MahaRERA 2.0 registration PR1260002500803.',
        'features': [
            'MahaRERA 2.0 Registration: PR1260002500803',
            '100% Final All-Inclusive Price - Zero Extra Charges',
            'Full Cumulative Carpet Area Guaranteed with Zero Balcony Deductions',
            'Prime Established Central Pune Neighborhood',
            'LegiScore Grade AAA Institutional Title Report'
        ],
        'amenities': [
            'Rooftop Community Terrace', 'Modern Gymnasium', 'Vastu Compliant Design',
            'Children Play Park', 'Senior Citizen Sitout', 'Rainwater Harvesting & Solar Water'
        ],
        'highlights': ['Bibwewadi Cultural Center', 'High Capital Appreciation', 'MahaRERA 2.0 Audited'],
        'reraId': 'PR1260002500803',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 16 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': '38-park-majestique-undri',
        'title': '38 Park Majestique',
        'slug': '38-park-majestique-undri',
        'builderId': 'majestique-landmarks',
        'location': 'Undri, South Pune',
        'city': 'Pune',
        'priceRange': '₹55 L - ₹92 L',
        'exactPrice': '₹55 L - ₹92 L (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['2 BHK', '3 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Comfort', 'carpetArea': '690 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹55 L (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1090 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹92 L (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2026',
        'image': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'images': [
            'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg'
        ],
        'imageAlt': '38 Park Majestique Undri South Pune',
        'heroImage': 'https://the-crown.majestiquelandmarks.com/assets/crown_desktop_v3.jpeg',
        'heroImageAlt': '38 Park Majestique Tower Architecture',
        'description': '38 Park Majestique is a sprawling nature-centric township development in Undri, South Pune. Offering ongoing Phase 5 apartments with verdant forest views, clubhouse amenities, and clear statutory approvals under MahaRERA registration P52100046281.',
        'features': [
            'MahaRERA Registration: P52100046281',
            'Final All-Inclusive Pricing - 100% Tax Transparency',
            'Full Cumulative Carpet Area Measurement without Balcony Splits',
            'Walking Distance to The Bishop’s School & DPS',
            'Clear Title with 70% Escrow Account Active'
        ],
        'amenities': [
            'Clubhouse with Gymnasium', 'Swimming Pool', 'Tree-Lined Jogging Track',
            'Tennis Court', 'Children Play Park', 'Perimeter CCTV Surveillance'
        ],
        'highlights': ['Established Township', 'Near Top International Schools', 'Affordable Luxury'],
        'reraId': 'P52100046281',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 14 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-new-friends-kothrud',
        'title': 'Majestique New Friends',
        'slug': 'majestique-new-friends-kothrud',
        'builderId': 'majestique-landmarks',
        'location': 'Vanaz Corner, Paud Road, Kothrud',
        'city': 'Pune',
        'priceRange': '₹1.35 Cr - ₹2.85 Cr',
        'exactPrice': '₹1.35 Cr - ₹2.85 Cr (Final All-Inclusive)',
        'priceType': 'Cr',
        'configurations': ['2 BHK', '3 BHK', '4 BHK'],
        'configurationDetails': [
            {'type': '2 BHK Prime', 'carpetArea': '820 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.35 Cr (Final All-Inclusive)'},
            {'type': '3 BHK Luxury', 'carpetArea': '1250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.98 Cr (Final All-Inclusive)'},
            {'type': '4 BHK Signature', 'carpetArea': '1750 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.85 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Residential',
        'possessionDate': 'December 2028',
        'image': 'https://kothrudcentralmall.majestiquelandmarks.com/assets/images/KCM_Desktop.jpeg',
        'images': [
            'https://kothrudcentralmall.majestiquelandmarks.com/assets/images/KCM_Desktop.jpeg'
        ],
        'imageAlt': 'Majestique New Friends Kothrud Pune',
        'heroImage': 'https://kothrudcentralmall.majestiquelandmarks.com/assets/images/KCM_Desktop.jpeg',
        'heroImageAlt': 'Majestique New Friends High-Rise Kothrud',
        'description': 'Majestique New Friends is an elite high-rise residential redevelopment project situated right at Vanaz Corner on Paud Road, Kothrud. Features 2, 3 & 4 BHK apartments directly connected to the Vanaz Metro Station, with bank-grade legal due-diligence under MahaRERA registration P52100055935.',
        'features': [
            'MahaRERA Registration: P52100055935',
            '100% Final All-Inclusive Price - Zero Hidden Taxes',
            'Cumulative Usable Carpet Area without Balcony Subtractions',
            'Right Opposite Vanaz Metro Station on Paud Road',
            'Integrated with Kothrud Central Mall Commerce',
            'LegiScore Institutional Title Grade AAA'
        ],
        'amenities': [
            'Sky Deck Clubhouse', 'Rooftop Swimming Pool', 'Hi-Tech Fitness Center',
            'Landscaped Podium Garden', 'Children Play Arena', '24x7 Multi-Tier Security'
        ],
        'highlights': ['Metro Step-In Living', 'Heart of Kothrud', 'Prestige Living Address'],
        'reraId': 'P52100055935',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': '4 Basements + G + 27 Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd', 'Axis Bank Ltd']
    },

    # Commercial Ongoing Projects
    {
        'id': 'kothrud-central-mall-paud-road',
        'title': 'Kothrud Central Mall (KCM)',
        'slug': 'kothrud-central-mall-paud-road',
        'builderId': 'majestique-landmarks',
        'location': 'Vanaz Metro Station, Paud Road, Kothrud',
        'city': 'Pune',
        'priceRange': '₹75 L - ₹6.50 Cr',
        'exactPrice': '₹75 L - ₹6.50 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['Retail Showrooms', 'Anchor Stores', 'Multiplex & Food Courts'],
        'configurationDetails': [
            {'type': 'Boutique High-Street Shop', 'carpetArea': '350 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹75 L (Final All-Inclusive)'},
            {'type': 'Retail Showroom Suite', 'carpetArea': '1250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.65 Cr (Final All-Inclusive)'},
            {'type': 'Anchor Brand Flagship Store', 'carpetArea': '4500 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹6.50 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Commercial',
        'possessionDate': 'December 2028',
        'image': 'https://kothrudcentralmall.majestiquelandmarks.com/assets/images/KCM_Desktop.jpeg',
        'images': [
            'https://kothrudcentralmall.majestiquelandmarks.com/assets/images/KCM_Desktop.jpeg'
        ],
        'imageAlt': 'Kothrud Central Mall Majestique Landmarks Paud Road Pune',
        'heroImage': 'https://kothrudcentralmall.majestiquelandmarks.com/assets/images/KCM_Desktop.jpeg',
        'heroImageAlt': 'Kothrud Central Mall Commercial & Retail Hub',
        'description': 'Kothrud Central Mall (KCM) is an upcoming iconic retail and entertainment destination by Majestique Landmarks at Vanaz Corner, Kothrud. Positioned along the high-traffic Paud Road metro corridor, offering multi-level retail showrooms, food courts, and anchor spaces under MahaRERA registration P52100055935.',
        'features': [
            'MahaRERA Registration: P52100055935',
            '100% Final All-Inclusive Price - Zero Tax Surcharges',
            'Full Cumulative Carpet Area Measurement Guaranteed',
            'Direct Skywalk Access from Vanaz Metro Station',
            'Over 400+ Foot Car Parking Spaces',
            'LegiScore Commercial Asset Grade AAA'
        ],
        'amenities': [
            'Multi-Screen Cineplex', 'Double Height Retail Frontage', 'Central Air-Conditioned Atrium',
            'High-Speed Escalators & Elevators', 'Multi-Level Car Parking', '100% Power Backup'
        ],
        'highlights': ['Metro Frontage Footfall', 'Kothrud High Density Catchment', 'Exceptional ROI & Rental Yield'],
        'reraId': 'P52100055935',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': '4 Basements + G + 7 Commercial Levels',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-evolvus-commercial-kharadi',
        'title': 'Majestique Evolvus Business & Retail Plaza',
        'slug': 'majestique-evolvus-commercial-kharadi',
        'builderId': 'majestique-landmarks',
        'location': 'Central Kharadi IT Corridor',
        'city': 'Pune',
        'priceRange': '₹65 L - ₹3.80 Cr',
        'exactPrice': '₹65 L - ₹3.80 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['Boutique IT Offices', 'High-Street Retail Stores'],
        'configurationDetails': [
            {'type': 'Boutique IT Suite', 'carpetArea': '420 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹65 L (Final All-Inclusive)'},
            {'type': 'Corporate Office Floorplate', 'carpetArea': '1400 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.95 Cr (Final All-Inclusive)'},
            {'type': 'Retail Showroom Frontage', 'carpetArea': '2800 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.80 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Commercial',
        'possessionDate': 'December 2027',
        'image': 'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg',
        'images': [
            'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg'
        ],
        'imageAlt': 'Majestique Evolvus Commercial Plaza Kharadi',
        'heroImage': 'https://evolvus.majestiquelandmarks.com/assets/evolvus_hero_desktop.jpg',
        'heroImageAlt': 'Majestique Evolvus Corporate Offices',
        'description': 'Majestique Evolvus Commercial Plaza is an elite commercial business destination in Central Kharadi. Offering premium boutique office suites and high-street retail showrooms designed for tech enterprises, medical consulting, and retail brands under MahaRERA registration P52100054253.',
        'features': [
            'MahaRERA Registration: P52100054253',
            'Single Unified Final All-Inclusive Price',
            'Cumulative Usable Carpet Area without Balcony Subtractions',
            'Walking Distance to World Trade Center Kharadi',
            'Grade-A Corporate Amenities & Valet Parking'
        ],
        'amenities': [
            'Grand Corporate Reception Lobby', 'High-Speed Elevators', 'Cafeteria & Terrace Lounge',
            'Conference Rooms & Business Center', 'Basement Parking with EV Stations', 'CCTV Surveillance'
        ],
        'highlights': ['Central Kharadi Corporate Hub', 'High Capital Appreciation', 'Zero Commission Direct Mandate'],
        'reraId': 'P52100054253',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 14 Commercial Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-towers-commercial-kharadi',
        'title': 'Majestique Towers High-Street Commercial',
        'slug': 'majestique-towers-commercial-kharadi',
        'builderId': 'majestique-landmarks',
        'location': 'Near EON Free Zone, Kharadi',
        'city': 'Pune',
        'priceRange': '₹58 L - ₹3.20 Cr',
        'exactPrice': '₹58 L - ₹3.20 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['High-Street Retail', 'Executive Workspaces'],
        'configurationDetails': [
            {'type': 'Executive Workspace', 'carpetArea': '380 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹58 L (Final All-Inclusive)'},
            {'type': 'Retail Corner Shop', 'carpetArea': '950 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹1.45 Cr (Final All-Inclusive)'},
            {'type': 'Flagship Retail Boulevard', 'carpetArea': '2400 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹3.20 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Commercial',
        'possessionDate': 'December 2026',
        'image': 'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
        'images': [
            'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp'
        ],
        'imageAlt': 'Majestique Towers Commercial Kharadi',
        'heroImage': 'https://towers.majestiquelandmarks.com/assets/images/hero-desktop-v2.webp',
        'heroImageAlt': 'Majestique Towers Commercial Retail Boulevard',
        'description': 'Majestique Towers Commercial provides premium high-street commercial storefronts and executive workspaces catering to the massive corporate workforce of EON Free Zone and WTC Kharadi under MahaRERA registration P52100053786.',
        'features': [
            'MahaRERA Registration: P52100053786',
            '100% Final All-Inclusive Price Transparency',
            'Cumulative Carpet Area Enforced with Zero Balcony Deductions',
            'Direct Frontage on EON IT Park Access Corridor',
            'LegiScore Verified Commercial Title'
        ],
        'amenities': [
            'Double-Height Glass Frontage', 'Ample Customer Car Parking', '100% Power Backup',
            'Broadband Fiber Infrastructure', 'Fire Suppression Systems', '24x7 Security'
        ],
        'highlights': ['Footfall of 50,000+ IT Professionals', 'High Rental Demand', 'Ready Customer Base'],
        'reraId': 'P52100053786',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 4 Commercial Levels',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    },
    {
        'id': 'majestique-signature-commercial-balewadi',
        'title': 'Majestique Signature Commercial Hub',
        'slug': 'majestique-signature-commercial-balewadi',
        'builderId': 'majestique-landmarks',
        'location': 'Balewadi High Street, Balewadi',
        'city': 'Pune',
        'priceRange': '₹72 L - ₹4.50 Cr',
        'exactPrice': '₹72 L - ₹4.50 Cr (Final All-Inclusive)',
        'priceType': 'L',
        'configurations': ['Boutique Offices', 'Flagship Retail Stores'],
        'configurationDetails': [
            {'type': 'Boutique Office', 'carpetArea': '450 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹72 L (Final All-Inclusive)'},
            {'type': 'High Street Retail Showroom', 'carpetArea': '1250 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹2.10 Cr (Final All-Inclusive)'},
            {'type': 'Corporate Penthouse Office', 'carpetArea': '3200 sq.ft. (Cumulative Usable Area)', 'priceRange': '₹4.50 Cr (Final All-Inclusive)'}
        ],
        'status': 'Under Construction',
        'type': 'Commercial',
        'possessionDate': 'June 2026',
        'image': 'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
        'images': [
            'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp'
        ],
        'imageAlt': 'Majestique Signature Commercial Balewadi High Street',
        'heroImage': 'https://signaturetowers.majestiquelandmarks.com/Signature%20Towers%20by%20Majestique_files/hero-diwali-desktop.webp',
        'heroImageAlt': 'Majestique Signature Commercial Balewadi Architecture',
        'description': 'Majestique Signature Commercial Hub offers prime boutique corporate workspaces and flagship luxury retail spaces on Balewadi High Street under MahaRERA registration P52100046445. Features double-height road-facing retail, glass facades, and exceptional investor returns.',
        'features': [
            'MahaRERA Registration: P52100046445',
            '100% Final All-Inclusive Price - Zero Hidden Surcharges',
            'Cumulative Usable Carpet Area without Balcony Subtractions',
            'Direct Balewadi High Street Road Frontage',
            'LegiScore Institutional Title Grade AAA'
        ],
        'amenities': [
            'Valet Parking Facility', 'Grand Reception Lobby', 'High-Speed Elevators',
            'Rooftop Executive Lounge', 'EV Charging Stations', '24x7 Security & CCTV'
        ],
        'highlights': ['Balewadi High Street Prestige Address', 'High Footfall Corridor', 'Unbeatable ROI'],
        'reraId': 'P52100046445',
        'verificationStatus': 'Verified',
        'verificationSource': 'MahaRERA Official Authority Records & LegiScore Intelligence',
        'totalFloors': 'G + 6 Commercial Floors',
        'approvedBanks': ['State Bank of India', 'HDFC Bank Ltd', 'ICICI Bank Ltd']
    }
]

# 3. Generate Clickable SVG Vector QR Codes
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

print("Generating Clickable SVG QR codes for all Majestique projects...")
all_reras = set(p['reraId'] for p in MAJESTIQUE_PROJECTS)
for rera in all_reras:
    generate_clickable_qr(rera)
print(f"Generated QR codes for {len(all_reras)} unique RERA IDs.")

# 4. Update mockData.ts
with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
    mock_content = f.read()

# Add builder if not present
if 'majestique-landmarks' not in mock_content:
    builder_ts = ",\n" + json.dumps(MAJESTIQUE_BUILDER, indent=2)
    # Insert before closing bracket of BUILDERS
    builders_end_match = re.search(r'(export\s+const\s+BUILDERS\s*:\s*Builder\[\]\s*=\s*\[[\s\S]*?)(\s*\];)', mock_content)
    if builders_end_match:
        updated_builders = builders_end_match.group(1) + builder_ts + builders_end_match.group(2)
        mock_content = mock_content[:builders_end_match.start()] + updated_builders + mock_content[builders_end_match.end():]
        print("Added Majestique Landmarks to BUILDERS in mockData.ts.")
    else:
        print("Error: Could not locate BUILDERS array.")
else:
    print("Majestique Landmarks builder already present in mockData.ts.")

# Add projects
existing_ids = set(re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', mock_content))
new_projects = [p for p in MAJESTIQUE_PROJECTS if p['id'] not in existing_ids]

print(f"Found {len(new_projects)} new Majestique projects to append to PROJECTS.")

if new_projects:
    projects_ts = ",\n" + ",\n".join([json.dumps(p, indent=2) for p in new_projects])
    projects_end_match = re.search(r'(export\s+const\s+PROJECTS\s*:\s*Project\[\]\s*=\s*\[[\s\S]*?)(\s*\];)', mock_content)
    if projects_end_match:
        updated_projects = projects_end_match.group(1) + projects_ts + projects_end_match.group(2)
        mock_content = mock_content[:projects_end_match.start()] + updated_projects + mock_content[projects_end_match.end():]
        print("Successfully merged Majestique projects into PROJECTS array in mockData.ts.")
    else:
        print("Error: Could not locate export const PROJECTS array in mockData.ts.")

with open(MOCK_DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(mock_content)

print(f"✅ mockData.ts successfully updated with {len(new_projects)} Majestique Landmarks projects!")
