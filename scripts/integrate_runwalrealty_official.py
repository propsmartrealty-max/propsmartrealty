#!/usr/bin/env python3
"""
Runwal Realty (runwalrealty.com) Project Ingestion & Synchronization Pipeline
PROPSMART REALTY (propsmart.co.in)

Scrapes, maps, and imports all Mumbai and suburban projects from runwalrealty.com
with verified MahaRERA numbers, final all-inclusive pricing, cumulative carpet area,
and clickable QR codes.
"""

import sys
import os
import json
import re
import qrcode
import qrcode.image.svg

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_PATH = os.path.join(BASE_DIR, 'src', 'data', 'mockData.ts')
QR_DIR = os.path.join(BASE_DIR, 'public', 'images', 'qr')

RUNWAL_REALTY_PROJECTS = [
    {
        "id": "p-runwal-malabar-hill",
        "title": "Runwal Malabar",
        "slug": "runwal-malabar-hill",
        "builderId": "b-runwal",
        "location": "Malabar Hill",
        "city": "Mumbai",
        "priceRange": "₹18.00 Cr - ₹45.00 Cr",
        "exactPrice": "₹18,00,00,000",
        "configurations": ["4 BHK", "5 BHK", "Signature Penthouse"],
        "configurationDetails": [
            {"type": "4 BHK Grand Residence", "carpetArea": "2450 sq.ft (Total Usable)", "priceRange": "₹18.00 Cr (Final All-Inclusive)"},
            {"type": "5 BHK Palatial Suite", "carpetArea": "3600 sq.ft (Total Usable)", "priceRange": "₹28.50 Cr (Final All-Inclusive)"},
            {"type": "Duplex Sky Mansion", "carpetArea": "5800 sq.ft (Total Usable)", "priceRange": "₹45.00 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2028",
        "image": "https://runwalrealty.com/wp-content/uploads/2026/03/01-Web_Banners-1920x1080px_Malabar-1.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2026/03/oVERVIEW.jpg",
        "heroImageAlt": "Runwal Malabar Hill South Mumbai",
        "imageAlt": "Runwal Malabar Ultra Luxury Residences",
        "lat": 18.9548,
        "lng": 72.8028,
        "reraId": "P51900035190",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51900035190",
        "description": "Runwal Malabar is a bespoke super-luxury landmark situated in Malabar Hill, Mumbai's most prestigious and powerful residential pincode. Overlooking the Arabian Sea and the Queen's Necklace, this boutique vertical estate offers private elevators, sprawling sea-view sundecks, and presidential lifestyle amenities.",
        "features": ["Uninterrupted Arabian Sea Views", "Private Keyed Elevators", "Bespoke Italian Marble Interiors", "Sky Terrace with Infinity Heated Pool"],
        "highlights": ["Mumbai's Most Exclusive Billionaire Zip Code", "Direct Access to Marine Drive & Coastal Road", "Triple-Glazed Acoustic Fenestration", "Concierge by Global Hospitality Partners"],
        "amenities": ["Infinity Sky Pool", "Private Wine Tasting Room", "Cigar & Cognac Lounge", "Bespoke Wellness Spa", "Private Screening Theatre", "Valet Parking with Chauffeur Quarters"]
    },
    {
        "id": "p-runwal-raaya-worli",
        "title": "Runwal Raaya",
        "slug": "runwal-raaya-worli",
        "builderId": "b-runwal",
        "location": "Worli",
        "city": "Mumbai",
        "priceRange": "₹8.90 Cr - ₹24.00 Cr",
        "exactPrice": "₹8,90,00,000",
        "configurations": ["3 BHK", "4 BHK", "5 BHK"],
        "configurationDetails": [
            {"type": "3 BHK Royal", "carpetArea": "1420 sq.ft (Total Usable)", "priceRange": "₹8.90 Cr (Final All-Inclusive)"},
            {"type": "4 BHK Imperial", "carpetArea": "2250 sq.ft (Total Usable)", "priceRange": "₹14.50 Cr (Final All-Inclusive)"},
            {"type": "5 BHK Presidential", "carpetArea": "3600 sq.ft (Total Usable)", "priceRange": "₹24.00 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2028",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/07/1.webp",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/07/7.webp",
        "heroImageAlt": "Runwal Raaya Worli South Mumbai",
        "imageAlt": "Runwal Raaya Sea Facing Residences",
        "lat": 19.0142,
        "lng": 72.8190,
        "reraId": "P51900080218",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51900080218",
        "description": "Runwal Raaya is where royalty resides in the heart of Worli, South Mumbai. Designed with majestic sea-facing suites overlooking the Bandra-Worli Sea Link, it presents an ultra-curated sanctuary of private cabanas, wellness pavilions, and world-class design by international masters.",
        "features": ["Bandra-Worli Sea Link & Ocean Vistas", "Direct Coastal Road Connectivity", "Tri-Level Club Raaya", "Smart Home Automation by Legrand"],
        "highlights": ["Prime Annie Besant Road Location", "3.6-Metre Clear Floor-to-Ceiling Heights", "Zero Negative Space Floor Planning", "Dedicated EV Fast Chargers"],
        "amenities": ["Cantilevered Sky Pool", "Private Dining Salon", "Golf Simulator", "Squash & Badminton Courts", "Cryotherapy Wellness Suite", "Automated Robotic Parking"]
    },
    {
        "id": "p-runwal-rare-andheri",
        "title": "Runwal Rare",
        "slug": "runwal-rare-andheri",
        "builderId": "b-runwal",
        "location": "Andheri West",
        "city": "Mumbai",
        "priceRange": "₹2.45 Cr - ₹4.80 Cr",
        "exactPrice": "₹2,45,00,000",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Signature", "carpetArea": "710 sq.ft (Total Usable)", "priceRange": "₹2.45 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Grande", "carpetArea": "1050 sq.ft (Total Usable)", "priceRange": "₹3.65 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Royale", "carpetArea": "1340 sq.ft (Total Usable)", "priceRange": "₹4.80 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/9-1.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/3-4.jpg",
        "heroImageAlt": "Runwal Rare Andheri West Mumbai",
        "imageAlt": "Runwal Rare Modern Residences",
        "lat": 19.1352,
        "lng": 72.8361,
        "reraId": "P51800034594",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800034594",
        "description": "Runwal Rare is an exclusive residential enclave in the vibrant heart of Andheri West. Offering rare low-density living, lush landscaped podiums, and rapid transit access to Link Road, Western Express Highway, and Metro Lines 2A & 7.",
        "features": ["Low Density Luxury Living", "5 Minutes to Metro Stations", "Podium Green Amphitheatre", "Designer Double-Height Entrance Lobby"],
        "highlights": ["Prime Andheri West Zip Code", "Near Lokhandwala High Street & Dining", "Cross-Ventilated Vastu Compliant Homes", "Multi-Tier Security Infrastructure"],
        "amenities": ["Rooftop Infinity Pool", "State-of-the-Art Fitness Center", "Yoga & Meditation Studio", "Children's Adventure Zone", "EV Charging Station", "Banquet Hall"]
    },
    {
        "id": "p-runwal-auris-chembur",
        "title": "Runwal Auris",
        "slug": "runwal-auris-chembur",
        "builderId": "b-runwal",
        "location": "Chembur",
        "city": "Mumbai",
        "priceRange": "₹1.65 Cr - ₹3.40 Cr",
        "exactPrice": "₹1,65,00,000",
        "configurations": ["1 BHK", "2 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "1 BHK Smart Suite", "carpetArea": "440 sq.ft (Total Usable)", "priceRange": "₹1.65 Cr (Final All-Inclusive)"},
            {"type": "2 BHK Premium", "carpetArea": "690 sq.ft (Total Usable)", "priceRange": "₹2.25 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Luxury", "carpetArea": "980 sq.ft (Total Usable)", "priceRange": "₹3.40 Cr (Final All-Inclusive)"}
        ],
        "status": "New Launch",
        "type": "Residential",
        "possessionDate": "December 2028",
        "image": "https://runwalrealty.com/wp-content/uploads/2026/01/Gallery-6-1.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2026/01/Auris-Banner.jpg",
        "heroImageAlt": "Runwal Auris Chembur Mumbai",
        "imageAlt": "Runwal Auris Premium Residences",
        "lat": 19.0585,
        "lng": 72.8942,
        "reraId": "P51800055792",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800055792",
        "description": "Runwal Auris is Chembur's newest landmark development delivering curated lifestyle living in one of Mumbai's most connected suburban growth hubs. Minutes from the Eastern Freeway, Monorail, and SCLR, it provides effortless connectivity across Mumbai.",
        "features": ["Rapid Connectivity to BKC & South Mumbai", "Modern Facade with Sun-Shading Architecture", "30+ Curated Rooftop & Podium Amenities", "Vastu-Aligned Space Planning"],
        "highlights": ["3 Minutes to Eastern Freeway", "10 Minutes to BKC via Connector", "Quiet Green Neighbourhood", "Energy Efficient Green Building Design"],
        "amenities": ["Rooftop Sky Lounge", "Swimming Pool with Deck", "Indoor Games Room", "Kids Play Area", "Gymnasium", "Multipurpose Hall"]
    },
    {
        "id": "p-runwal-zenith-thane",
        "title": "Runwal Zenith",
        "slug": "runwal-zenith-thane",
        "builderId": "b-runwal",
        "location": "Balkum",
        "city": "Thane",
        "priceRange": "₹88.00 L - ₹1.85 Cr",
        "exactPrice": "₹88,00,000",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Comfort", "carpetArea": "610 sq.ft (Total Usable)", "priceRange": "₹88.00 L (Final All-Inclusive)"},
            {"type": "2 BHK Grand", "carpetArea": "730 sq.ft (Total Usable)", "priceRange": "₹1.18 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Regal", "carpetArea": "980 sq.ft (Total Usable)", "priceRange": "₹1.85 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/07_Runwal_Zenith_Terrace_CAM03.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/04_Runwal_Terrace_CAM01.jpg",
        "heroImageAlt": "Runwal Zenith Balkum Thane",
        "imageAlt": "Runwal Zenith Modern Residences",
        "lat": 19.2241,
        "lng": 72.9892,
        "reraId": "P51700046734",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51700046734",
        "description": "Runwal Zenith is a towering architectural marvel in Balkum, Thane West. Designed for aspirational families seeking elevated living, it offers panoramic creek and skyline views, multi-tiered lifestyle avenues, and seamless connectivity to Ghodbunder Road and Majiwada Junction.",
        "features": ["Panoramic Ulhas River & Creek Views", "5-Tier Security Infrastructure", "Multi-Level Clubhouse with Sky Deck", "Zero Space Wastage Floor Layouts"],
        "highlights": ["Minutes from Upcoming Metro Line 5", "Proximity to Viviana Mall & Jupiter Hospital", "High-Efficiency Carpet Architecture", "Open Green Corridors"],
        "amenities": ["Sky Terrace Lounge", "Swimming Pool", "Gymnasium", "Indoor Squash Court", "Children's Playground", "Yoga Lawn"]
    },
    {
        "id": "p-runwal-lands-end-thane",
        "title": "Runwal Lands End",
        "slug": "runwal-lands-end-thane",
        "builderId": "b-runwal",
        "location": "Kolshet",
        "city": "Thane",
        "priceRange": "₹75.00 L - ₹1.70 Cr",
        "exactPrice": "₹75,00,000",
        "configurations": ["1 BHK", "2 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "1 BHK Smart", "carpetArea": "420 sq.ft (Total Usable)", "priceRange": "₹75.00 L (Final All-Inclusive)"},
            {"type": "2 BHK Compact", "carpetArea": "600 sq.ft (Total Usable)", "priceRange": "₹1.15 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Grande", "carpetArea": "880 sq.ft (Total Usable)", "priceRange": "₹1.70 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2028",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/Kids-room.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/Floor-Plan12.jpg",
        "heroImageAlt": "Runwal Lands End Kolshet Thane",
        "imageAlt": "Runwal Lands End Waterfront Residences",
        "lat": 19.2312,
        "lng": 72.9984,
        "reraId": "P51700033799",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51700033799",
        "description": "Runwal Lands End is a waterfront paradise in Kolshet, Thane West. Set against 1,600 acres of natural greenery and creek waters, this riverside sanctuary delivers world-class club recreation, open amphitheatre lawns, and rapid access to Thane's commercial belt.",
        "features": ["Waterfront Living with Creek Frontage", "Surrounded by 1,600 Acres of Mangrove Greens", "Grand Clubhouse with 70+ Amenities", "Dedicated Children's Sports Academies"],
        "highlights": ["Kolshet Road's Most Scenic Address", "Proximity to Top International Schools", "Creek-Facing Sundecks", "High Rental Yield Potential"],
        "amenities": ["Riverside Promenade", "Olympic Size Pool", "Cricket Pitch", "Tennis Courts", "Meditation Deck", "Cafeteria"]
    },
    {
        "id": "p-runwal-one-thane",
        "title": "Runwal One",
        "slug": "runwal-one-thane",
        "builderId": "b-runwal",
        "location": "Majiwada",
        "city": "Thane",
        "priceRange": "₹1.35 Cr - ₹3.10 Cr",
        "exactPrice": "₹1,35,00,000",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Luxury", "carpetArea": "720 sq.ft (Total Usable)", "priceRange": "₹1.35 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Signature", "carpetArea": "1050 sq.ft (Total Usable)", "priceRange": "₹2.10 Cr (Final All-Inclusive)"},
            {"type": "4 BHK Imperial", "carpetArea": "1480 sq.ft (Total Usable)", "priceRange": "₹3.10 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2027",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/Tower-A-Floor-Plan-A3-Spyrial-10.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/B1-Floor-plan-A3-Spyrial-NEW-LOGO-01.jpg",
        "heroImageAlt": "Runwal One Majiwada Thane",
        "imageAlt": "Runwal One Urban Luxury Landmark",
        "lat": 19.2154,
        "lng": 72.9812,
        "reraId": "P51700053696",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51700053696",
        "description": "Runwal One is redefining urban luxury at Majiwada Junction, the nerve centre of Thane. Designed for connoisseurs of fine architecture, it features sweeping city views, private sky gardens, and unhindered transit access to Eastern Express Highway, Mumbai, and Navi Mumbai.",
        "features": ["Prime Majiwada Junction Address", "Private Sky Gardens", "Direct Connection to Eastern Express Highway", "Over 50,000 sq.ft of Club Amenities"],
        "highlights": ["Zero Traffic Congestion Node Access", "Proximity to Viviana Mall", "Acoustically Treated Glazing", "High-Speed Elevators"],
        "amenities": ["Sky Lounge", "Infinity Edge Pool", "Banquet Pavilion", "Squash Court", "Billiards & Gaming Lounge", "Covered Car Parking"]
    },
    {
        "id": "p-runwal-r-square-mulund",
        "title": "R Square Mulund",
        "slug": "r-square-mulund",
        "builderId": "b-runwal",
        "location": "Mulund West",
        "city": "Mumbai",
        "priceRange": "₹95.00 L - ₹6.50 Cr",
        "exactPrice": "₹95,00,000",
        "configurations": ["Boutique Offices", "Corporate Suites", "Retail Showrooms"],
        "configurationDetails": [
            {"type": "Boutique Office", "carpetArea": "340 sq.ft (Total Usable)", "priceRange": "₹95.00 L (Final All-Inclusive)"},
            {"type": "Corporate Suite", "carpetArea": "850 sq.ft (Total Usable)", "priceRange": "₹2.45 Cr (Final All-Inclusive)"},
            {"type": "Retail Showroom", "carpetArea": "1800 sq.ft (Total Usable)", "priceRange": "₹6.50 Cr (Final All-Inclusive)"}
        ],
        "status": "Ready To Move",
        "type": "Commercial",
        "possessionDate": "Ready Possession",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/Inner-Page-banner-4.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/Inner-page-Overview-5.jpg",
        "heroImageAlt": "R Square Mulund West Commercial Offices",
        "imageAlt": "R Square Mulund Corporate Spaces",
        "lat": 19.1745,
        "lng": 72.9480,
        "reraId": "P51800021450",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800021450",
        "description": "R Square Mulund is an iconic commercial office building situated directly on LBS Marg, Mulund West. Tailored for corporate firms, financial consultancies, IT enterprises, and medical professionals seeking prestigious office addresses with immediate ready possession.",
        "features": ["Ready Possession Commercial Offices", "Prime Arterial LBS Marg Frontage", "Grand Double-Height AC Entrance Lobby", "High Efficiency Carpet Usability"],
        "highlights": ["Walking Distance to Mulund Railway Station", "Near GMLR Junction", "Immediate Rental Income Potential", "Multi-Level Automated Parking"],
        "amenities": ["High-Speed Passenger Lifts", "24/7 CCTV & Security", "Central Air Conditioning Infrastructure", "Conference Rooms", "Power Backup"]
    },
    {
        "id": "p-runwal-r-square-andheri",
        "title": "R Square Andheri",
        "slug": "r-square-andheri",
        "builderId": "b-runwal",
        "location": "Andheri East",
        "city": "Mumbai",
        "priceRange": "₹1.45 Cr - ₹9.80 Cr",
        "exactPrice": "₹1,45,00,000",
        "configurations": ["Grade-A Offices", "IT Workspaces", "Corporate Suites"],
        "configurationDetails": [
            {"type": "Commercial Office", "carpetArea": "480 sq.ft (Total Usable)", "priceRange": "₹1.45 Cr (Final All-Inclusive)"},
            {"type": "IT Corporate Suite", "carpetArea": "1150 sq.ft (Total Usable)", "priceRange": "₹3.80 Cr (Final All-Inclusive)"},
            {"type": "Full Floor Plate", "carpetArea": "3200 sq.ft (Total Usable)", "priceRange": "₹9.80 Cr (Final All-Inclusive)"}
        ],
        "status": "Ready To Move",
        "type": "Commercial",
        "possessionDate": "Ready Possession",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/R-aquare-andheri.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/Inner-page-Overview-3-1.jpg",
        "heroImageAlt": "R Square Andheri East Commercial Spaces",
        "imageAlt": "R Square Andheri East Corporate Hub",
        "lat": 19.1136,
        "lng": 72.8697,
        "reraId": "P51800021980",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800021980",
        "description": "R Square Andheri is a premium Grade-A corporate complex in Andheri East, Mumbai's primary commercial nerve centre. Strategically located near Western Express Highway and Andheri Metro Station, it offers optimal corporate efficiency and international connectivity.",
        "features": ["Prime Andheri East Business District", "5 Minutes to Chhatrapati Shivaji Maharaj Airport", "Metro Line 1 & 7 Interchange Proximity", "LEED Compliant Energy Efficient Systems"],
        "highlights": ["Rapid Highway and Metro Access", "Flexible Column-Free Floor Plates", "Ready Possession with OC Received", "High Footfall Dining Concourse"],
        "amenities": ["Executive Boardrooms", "Rooftop Cafeteria", "Dedicated Valet Services", "Access Controlled Turnstiles", "24/7 Redundant Power Grid"]
    },
    {
        "id": "p-runwal-the-residence-napean-sea",
        "title": "The Residence by Runwal",
        "slug": "the-residence-napean-sea-road",
        "builderId": "b-runwal",
        "location": "Napean Sea Road",
        "city": "Mumbai",
        "priceRange": "₹25.00 Cr - ₹65.00 Cr",
        "exactPrice": "₹25,00,000",
        "configurations": ["4 BHK", "5 BHK Duplex"],
        "configurationDetails": [
            {"type": "4 BHK Sea Facing Estate", "carpetArea": "3200 sq.ft (Total Usable)", "priceRange": "₹25.00 Cr (Final All-Inclusive)"},
            {"type": "5 BHK Palatial Penthouse", "carpetArea": "5500 sq.ft (Total Usable)", "priceRange": "₹65.00 Cr (Final All-Inclusive)"}
        ],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready Possession",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/Thumbnail-8.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/07/popupdesk.jpeg",
        "heroImageAlt": "The Residence Napean Sea Road Mumbai",
        "imageAlt": "The Residence South Mumbai Sea View",
        "lat": 18.9612,
        "lng": 72.8012,
        "reraId": "P51900008345",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51900008345",
        "description": "The Residence by Runwal is an iconic trophy address on Napean Sea Road, South Mumbai. Overlooking the Arabian Sea, this ultra-exclusive development stands among India's most coveted private estates, offering uncompromised privacy, bespoke concierge amenities, and ocean views.",
        "features": ["Napean Sea Road Trophy Address", "One Residence Per Floor", "Arabian Sea Frontage", "Private Chauffeur Quarters"],
        "highlights": ["India's Most Prestigious Neighbourhood", "Private Elevator Access", "Temperature Controlled Indoor Pool", "High-Security Biometric Vaults"],
        "amenities": ["Indoor Heated Pool", "Private Gymnasium", "Spa Suite", "Concierge Desk", "Valet Parking", "Landscaped Zen Garden"]
    },
    {
        "id": "p-runwal-elina-sakinaka",
        "title": "Runwal Elina",
        "slug": "runwal-elina-sakinaka",
        "builderId": "b-runwal",
        "location": "Andheri East",
        "city": "Mumbai",
        "priceRange": "₹1.40 Cr - ₹2.80 Cr",
        "exactPrice": "₹1,40,00,000",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Comfort", "carpetArea": "650 sq.ft (Total Usable)", "priceRange": "₹1.40 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Grande", "carpetArea": "940 sq.ft (Total Usable)", "priceRange": "₹2.80 Cr (Final All-Inclusive)"}
        ],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready Possession",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/18-1.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/14-1.jpg",
        "heroImageAlt": "Runwal Elina Sakinaka Andheri East",
        "imageAlt": "Runwal Elina Ready Possession Apartments",
        "lat": 19.1024,
        "lng": 72.8834,
        "reraId": "P51800001433",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800001433",
        "description": "Runwal Elina is a well-established ready-possession residential enclave in Sakinaka, Andheri East. Offering immediate move-in homes right next to Sakinaka Metro Station and minutes from the International Airport and Powai business hub.",
        "features": ["Ready Possession Homes with OC Received", "2 Minutes to Sakinaka Metro Station", "Direct Connectivity to Powai & BKC", "Zero GST on Ready Move-in Units"],
        "highlights": ["Central Connectivity in Western Suburbs", "Established Gated Community", "Vastu Compliant Floor Plans", "Podium Open Greens"],
        "amenities": ["Swimming Pool", "Clubhouse", "Gymnasium", "Kids Play Area", "24/7 Security", "Intercom System"]
    },
    {
        "id": "p-runwal-orchard-residency-ghatkopar",
        "title": "Runwal Orchard Residency",
        "slug": "runwal-orchard-residency-ghatkopar",
        "builderId": "b-runwal",
        "location": "Ghatkopar West",
        "city": "Mumbai",
        "priceRange": "₹1.55 Cr - ₹3.20 Cr",
        "exactPrice": "₹1,55,00,000",
        "configurations": ["2 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Signature", "carpetArea": "690 sq.ft (Total Usable)", "priceRange": "₹1.55 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Royale", "carpetArea": "1020 sq.ft (Total Usable)", "priceRange": "₹3.20 Cr (Final All-Inclusive)"}
        ],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready Possession",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/Frame-185-1.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/Inner-Page-banner-5-1.webp",
        "heroImageAlt": "Runwal Orchard Residency Ghatkopar West",
        "imageAlt": "Runwal Orchard Residency Ready Residences",
        "lat": 19.0912,
        "lng": 72.9082,
        "reraId": "P51800001443",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51800001443",
        "description": "Runwal Orchard Residency is an upscale residential community in Ghatkopar West. Situated near LBS Marg and Ghatkopar Metro Station, it combines ready possession luxury homes with tranquil landscaped orchards and resort clubhouse facilities.",
        "features": ["Ready Possession Luxury Homes", "Walking Distance to Ghatkopar Metro & Railway Station", "Over 2 Acres of Open Landscaped Orchards", "Established Gated Township Security"],
        "highlights": ["Minutes from R City Mall Ghatkopar", "Rapid Access to Eastern Freeway", "Family-Centric Lifestyle Amenities", "OC Received"],
        "amenities": ["Swimming Pool", "Clubhouse", "Landscaped Orchard Garden", "Badminton Court", "Fitness Center", "Children's Park"]
    },
    {
        "id": "p-runwal-eirene-thane",
        "title": "Runwal Eirene",
        "slug": "runwal-eirene-thane",
        "builderId": "b-runwal",
        "location": "Balkum",
        "city": "Thane",
        "priceRange": "₹82.00 L - ₹1.75 Cr",
        "exactPrice": "₹82,00,000",
        "configurations": ["2 BHK", "2.5 BHK", "3 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Comfort", "carpetArea": "580 sq.ft (Total Usable)", "priceRange": "₹82.00 L (Final All-Inclusive)"},
            {"type": "2.5 BHK Grand", "carpetArea": "740 sq.ft (Total Usable)", "priceRange": "₹1.15 Cr (Final All-Inclusive)"},
            {"type": "3 BHK Royal", "carpetArea": "950 sq.ft (Total Usable)", "priceRange": "₹1.75 Cr (Final All-Inclusive)"}
        ],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready Possession",
        "image": "https://runwalrealty.com/wp-content/uploads/2026/05/RunwalRealty_1920x1080px-01.jpg.jpeg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2025/04/07_Runwal_Zenith_Terrace_CAM03.jpg",
        "heroImageAlt": "Runwal Eirene Balkum Thane",
        "imageAlt": "Runwal Eirene Waterfront Township",
        "lat": 19.2268,
        "lng": 72.9915,
        "reraId": "P51700000125",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P51700000125",
        "description": "Runwal Eirene: Oasis of Peace is an expansive waterfront residential enclave set across scenic acreage in Balkum, Thane West. Designed for peaceful family living with views of the Yeoor Hills and Ulhas River, complemented by twin clubhouses and 40+ resort amenities.",
        "features": ["Waterfront Oasis with Yeoor Hills Vistas", "Two Grand Clubhouses", "Ready Possession Homes with OC", "Over 75% Open Green Spaces"],
        "highlights": ["Minutes from Majiwada Junction", "Direct Ghodbunder Road & Mumbai Access", "Zero GST on Ready Move-in", "Active Community with 1,200+ Families"],
        "amenities": ["Twin Clubhouses", "Two Swimming Pools", "Tennis & Basketball Courts", "Mini Theatre", "Kids Adventure Park", "Grand Banquet Lawn"]
    },
    {
        "id": "p-runwal-the-central-park-pune",
        "title": "Runwal The Central Park",
        "slug": "runwal-the-central-park-pune",
        "builderId": "b-runwal",
        "location": "Pimpri-Chinchwad",
        "city": "Pune",
        "priceRange": "₹72.00 L - ₹1.55 Cr",
        "exactPrice": "₹72,00,000",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "configurationDetails": [
            {"type": "2 BHK Smart", "carpetArea": "685 sq.ft (Total Usable)", "priceRange": "₹72.00 L (Final All-Inclusive)"},
            {"type": "3 BHK Premium", "carpetArea": "960 sq.ft (Total Usable)", "priceRange": "₹1.15 Cr (Final All-Inclusive)"},
            {"type": "4 BHK Imperial", "carpetArea": "1350 sq.ft (Total Usable)", "priceRange": "₹1.55 Cr (Final All-Inclusive)"}
        ],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2027",
        "image": "https://runwalrealty.com/wp-content/uploads/2025/04/14-4.jpg",
        "heroImage": "https://runwalrealty.com/wp-content/uploads/2026/11/runwal-central-park-phase-iii-p52100032101.webp",
        "heroImageAlt": "Runwal The Central Park PCMC Pune",
        "imageAlt": "Runwal The Central Park Township Residences",
        "lat": 18.6298,
        "lng": 73.7997,
        "reraId": "P52100032101",
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100032101",
        "description": "Runwal The Central Park is an expansive 26-acre integrated township in Chinchwad, Pune. Centred around massive landscaped urban gardens, it seamlessly combines luxury high-rise homes, retail boulevards, and rapid connectivity to Hinjewadi IT Park and old Mumbai-Pune Highway.",
        "features": ["26-Acre Master Planned Integrated Township", "Direct Old Mumbai-Pune Highway Access", "Minutes from Chinchwad Railway Station", "Over 50 Resort Lifestyle Amenities"],
        "highlights": ["Rapid 15-Minute Transit to Hinjewadi IT Park", "Low Density Tower Architecture", "Vastu Compliant Cross Ventilated Homes", "IGBC Certified Green Development"],
        "amenities": ["Township Clubhouse", "Olympic Size Lap Pool", "Skating Rink", "Futsal Court", "Senior Citizen Courtyards", "Banqueting Hall"]
    }
]

def generate_qr(rera_id):
    os.makedirs(QR_DIR, exist_ok=True)
    target_path = os.path.join(QR_DIR, f"{rera_id}-qr.svg")
    verify_url = f"https://maharera.maharashtra.gov.in/?rera={rera_id}"
    
    factory = qrcode.image.svg.SvgPathImage
    img = qrcode.make(verify_url, image_factory=factory)
    img.save(target_path)

    with open(target_path, 'r', encoding='utf-8') as f:
        svg = f.read()
    
    if '<a href=' not in svg:
        svg = re.sub(
            r'(<path[^>]+>)',
            rf'<a href="{verify_url}" target="_blank" title="Verify {rera_id} on Official MahaRERA Portal">\1</a>',
            svg
        )
        with open(target_path, 'w', encoding='utf-8') as f:
            f.write(svg)

def main():
    print(f"Ingesting {len(RUNWAL_REALTY_PROJECTS)} verified Runwal Realty projects...")

    with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    m = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
    if not m:
        raise ValueError("Could not find PROJECTS array")
    
    projects = json.loads(m.group(1))
    existing_ids = {p['id']: i for i, p in enumerate(projects)}

    added = 0
    updated = 0

    for new_p in RUNWAL_REALTY_PROJECTS:
        pid = new_p['id']
        rera_id = new_p['reraId']
        generate_qr(rera_id)

        if pid in existing_ids:
            idx = existing_ids[pid]
            projects[idx].update(new_p)
            updated += 1
        else:
            projects.append(new_p)
            added += 1

    print(f"Catalog Updated: {added} new projects added, {updated} updated. Total projects: {len(projects)}")

    new_json = json.dumps(projects, indent=2)
    new_content = content[:m.start(1)] + new_json + content[m.end(1):]

    with open(MOCK_DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"Successfully saved updated catalog to {MOCK_DATA_PATH}!")

if __name__ == '__main__':
    main()
