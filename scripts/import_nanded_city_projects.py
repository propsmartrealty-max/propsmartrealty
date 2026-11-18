import os
import json
import re
import qrcode
import qrcode.image.svg

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_PATH = os.path.join(BASE_DIR, 'src', 'data', 'mockData.ts')
QR_DIR = os.path.join(BASE_DIR, 'public', 'images', 'qr')

os.makedirs(QR_DIR, exist_ok=True)

# 1. Define Nanded City Projects
NANDED_PROJECTS = [
    {
        "id": "p-nanded-city-harmony",
        "title": "Harmony at Nanded City",
        "slug": "nanded-city-harmony",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹1.85 Cr - ₹3.10 Cr",
        "exactPrice": "₹1.85 Cr",
        "configurations": ["3.5 BHK", "4.5 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "in 2028",
        "image": "https://nandedcitypune.com/wp-content/uploads/2026/11/Harmony_Apartments_Sales_Home_Banner-scaled.jpeg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/11/Harmony_Apartments_Sales_Home_Banner-scaled.jpeg",
        "lat": 18.4682,
        "lng": 73.7915,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": [
            "https://nandedcitypune.com/harmony/assets/img/b-3bhk.jpg",
            "https://nandedcitypune.com/harmony/assets/img/b-4bhk.webp"
        ],
        "description": "Harmony Apartments at Nanded City is a newly launched ultra-luxury residential enclave by Nanded City Development and Construction Company (Magarpatta Group). Set within the sprawling 700+ acre self-sustained eco-township on Sinhagad Road, Pune, Harmony features expansive 3.5 BHK and 4.5 BHK luxury residences crafted for high-end township living.\n\nStarting at ₹1.85 Cr all-inclusive, every home is designed with expansive usable carpet areas, panoramic views of the Mutha riverfront and Sahyadri hills, and private lifestyle recreation centres. Certified under official MahaRERA registration PR1260002502527 with 100% zero brokerage through PROPSMART.",
        "features": [
            "Club House", "Infinity Edge Swimming Pool", "Landscaped Gardens", "Fitness Centre",
            "Yoga & Meditation Hall", "Children Play Arena", "Jogging Track", "Multipurpose Sports Court",
            "24/7 Security", "Township Infrastructure", "Piped Gas", "Dedicated Covered Parking"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant RCC Shear Wall Structure with Monolithic Pour"},
            {"label": "Flooring", "value": "Large Format Italian Finish Glazed Vitrified Tiles in Living, Dining & Bedrooms"},
            {"label": "Kitchen", "value": "Granite Platform with Double Bowl SS Sink & Piped Gas Connection"},
            {"label": "Bathrooms", "value": "Designer CP & Sanitary Fittings by Kohler/Grohe with Glass Partitions"},
            {"label": "Doors & Windows", "value": "Grand 8ft Laminated Main Door & Heavy Powder Coated Sound-Insulated Windows"},
            {"label": "Carpet Range", "value": "1420 - 2180 sq.ft Usable Carpet Area"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty direct sales partner",
            "Part of Pune's premier 700+ acre Nanded City integrated eco-township",
            "Official MahaRERA verified project PR1260002502527",
            "Single final all-inclusive transparent turnkey pricing with zero hidden charges"
        ],
        "reraId": "PR1260002502527",
        "pricePerSqft": 13028,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=PR1260002502527",
        "seoKeywords": [
            "Harmony Nanded City Pune", "Harmony Apartments Sinhagad Road", "3.5 BHK flats Nanded City",
            "4.5 BHK luxury apartments Pune", "Harmony Nanded City MahaRERA PR1260002502527",
            "Nanded City new launch flats", "zero brokerage property Pune"
        ],
        "metaDescription": "Explore Harmony at Nanded City, Sinhagad Road Pune. 3.5 & 4.5 BHK luxury apartments starting ₹1.85 Cr all-inclusive. Verified MahaRERA PR1260002502527.",
        "advancedConfigurations": [
            {
                "id": "cfg-harmony-3-5bhk",
                "projectId": "p-nanded-city-harmony",
                "name": "3.5 BHK Luxury Suite",
                "carpetArea": 1420,
                "balconyArea": 0,
                "bathrooms": 3,
                "basePrice": 18500000,
                "pricePerSqft": 13028.17,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/harmony/assets/img/b-3bhk.jpg"
            },
            {
                "id": "cfg-harmony-4-5bhk",
                "projectId": "p-nanded-city-harmony",
                "name": "4.5 BHK Presidential Suite",
                "carpetArea": 2180,
                "balconyArea": 0,
                "bathrooms": 4,
                "basePrice": 31000000,
                "pricePerSqft": 14220.18,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/harmony/assets/img/b-4bhk.webp"
            }
        ]
    },
    {
        "id": "p-nanded-city-saajgiri",
        "title": "Saajgiri at Nanded City",
        "slug": "nanded-city-saajgiri",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹88.00 L - ₹1.48 Cr",
        "exactPrice": "₹88.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "in 2027",
        "image": "https://nandedcitypune.com/wp-content/uploads/2026/09/shubh-shuruaat-ncp-banner.webp",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/09/shubh-shuruaat-ncp-banner.webp",
        "lat": 18.4690,
        "lng": 73.7925,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": [
            "https://nandedcitypune.com/saajgiri/assets/img/2bhk-small.webp",
            "https://nandedcitypune.com/saajgiri/assets/img/2bhk-large.webp",
            "https://nandedcitypune.com/saajgiri/assets/img/3bhk-small.webp",
            "https://nandedcitypune.com/saajgiri/assets/img/3bhk-large.webp"
        ],
        "description": "Saajgiri at Nanded City is a premier residential cluster of smart 2 BHK and 3 BHK homes on Sinhagad Road, Pune by Magarpatta City Group. Designed for families valuing security, convenience, and vibrant community living within the 700+ acre integrated township.\n\nStarting at ₹88.00 L all-inclusive (3 BHK starting from ₹1.36 Cr), Saajgiri provides two dedicated recreation centres, indoor games, community hall with pantry, yoga hall, and crèche with tot lot. Fully certified under official MahaRERA registration PR1260002501621 with complete zero brokerage through PROPSMART.",
        "features": [
            "Two Recreation Centres", "Community Hall with Pantry", "Indoor Games Room", "Fitness Centre",
            "Yoga & Meditation Hall", "Creche with Tot Lot", "Landscaped Gardens", "Children Play Area",
            "Society Office", "CCTV Surveillance", "24/7 Treated Water", "Ample Covered Parking"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant RCC Frame Structure"},
            {"label": "Flooring", "value": "Double Charged Vitrified Tiles in Living, Dining & Bedrooms"},
            {"label": "Kitchen", "value": "Granite Kitchen Platform with Stainless Steel Sink and Dado Tiles"},
            {"label": "Bathrooms", "value": "Branded CP & Sanitary Ware with Concealed Plumbing and Solar Water Provision"},
            {"label": "Doors & Windows", "value": "Laminated Doors and Powder Coated Aluminum Sliding Windows"},
            {"label": "Carpet Range", "value": "685 - 1120 sq.ft Cumulative Usable Carpet Area"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized sales partner",
            "Modern 2 & 3 BHK residences within 700+ acre Nanded City township",
            "Official MahaRERA verified project PR1260002501621",
            "Single final all-inclusive price with zero hidden fees"
        ],
        "reraId": "PR1260002501621",
        "pricePerSqft": 12846,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=PR1260002501621",
        "seoKeywords": [
            "Saajgiri Nanded City", "Saajgiri Sinhagad Road Pune", "2 BHK flats in Nanded City",
            "3 BHK flats Nanded City price", "Saajgiri MahaRERA PR1260002501621",
            "buy flat in Nanded City", "zero brokerage Pune property"
        ],
        "metaDescription": "Buy 2 & 3 BHK homes in Saajgiri, Nanded City Sinhagad Road. Starting from ₹88 L all-inclusive (3 BHK from ₹1.36 Cr). Verified MahaRERA PR1260002501621.",
        "advancedConfigurations": [
            {
                "id": "cfg-saajgiri-2bhk-sm",
                "projectId": "p-nanded-city-saajgiri",
                "name": "2 BHK Small",
                "carpetArea": 685,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 8800000,
                "pricePerSqft": 12846.72,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/saajgiri/assets/img/2bhk-small.webp"
            },
            {
                "id": "cfg-saajgiri-2bhk-lg",
                "projectId": "p-nanded-city-saajgiri",
                "name": "2 BHK Large",
                "carpetArea": 780,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 10500000,
                "pricePerSqft": 13461.54,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/saajgiri/assets/img/2bhk-large.webp"
            },
            {
                "id": "cfg-saajgiri-3bhk-sm",
                "projectId": "p-nanded-city-saajgiri",
                "name": "3 BHK Small",
                "carpetArea": 985,
                "balconyArea": 0,
                "bathrooms": 3,
                "basePrice": 13600000,
                "pricePerSqft": 13807.11,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/saajgiri/assets/img/3bhk-small.webp"
            },
            {
                "id": "cfg-saajgiri-3bhk-lg",
                "projectId": "p-nanded-city-saajgiri",
                "name": "3 BHK Large",
                "carpetArea": 1120,
                "balconyArea": 0,
                "bathrooms": 3,
                "basePrice": 14800000,
                "pricePerSqft": 13214.29,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/saajgiri/assets/img/3bhk-large.webp"
            }
        ]
    },
    {
        "id": "p-nanded-city-destination-center-2",
        "title": "Destination Center II",
        "slug": "nanded-city-destination-center-2",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹48.00 L - ₹3.20 Cr",
        "exactPrice": "₹48.00 L",
        "configurations": ["Commercial Retail", "Showroom", "Office"],
        "status": "Under Construction",
        "type": "Commercial",
        "possessionDate": "in 2026",
        "image": "https://nandedcitypune.com/wp-content/uploads/2026/07/destination-center-cp.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/destination-center-cp.jpg",
        "lat": 18.4675,
        "lng": 73.7905,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": [
            "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"
        ],
        "description": "Destination Center II is the premier commercial, retail, and shopping destination within Nanded City on Sinhagad Road, Pune. Catering to over 24,000+ resident families and high-traffic regional footfalls, this high-street development features prime retail shops, hypermarkets, healthcare suites, and corporate boutique offices.\n\nStarting from ₹48.00 L all-inclusive, it provides unmatched investment potential with steady rental yields and captive township footfall. Officially registered under MahaRERA registration P52100079788 with 100% zero brokerage through PROPSMART.",
        "features": [
            "High-Street Retail Showrooms", "Food Court & Cafes", "Escalators & High-Speed Lifts",
            "Multi-Level Basement Parking", "Central Air-Conditioning Provision", "Fire Safety Systems",
            "24/7 Power Back-up", "Captive 24,000+ Families Township Footfall"
        ],
        "specs": [
            {"label": "Structure", "value": "Commercial Grade RCC Framed Structure with High Floor-to-Ceiling Clear Heights"},
            {"label": "Shop Frontage", "value": "Full Height Toughened Glass Display Glazing with Rolling Shutters"},
            {"label": "Flooring", "value": "Heavy Duty Vitrified Commercial Grade Flooring in Retail & Corridors"},
            {"label": "Electrical", "value": "3-Phase Power Provision with Dedicated Sub-metering and DG Back-up"},
            {"label": "Carpet Range", "value": "220 - 1850 sq.ft Cumulative Usable Carpet Area"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty commercial advisory",
            "Prime shopping & commercial landmark in 700+ acre Nanded City",
            "Official MahaRERA verified project P52100079788",
            "Turnkey single final all-inclusive price without hidden break-ups"
        ],
        "reraId": "P52100079788",
        "pricePerSqft": 21818,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100079788",
        "seoKeywords": [
            "Destination Center II Nanded City", "commercial shops Sinhagad Road Pune",
            "retail shops in Nanded City", "Destination Center 2 MahaRERA P52100079788",
            "commercial office space Sinhagad Road", "zero brokerage commercial Pune"
        ],
        "metaDescription": "Buy commercial shops & offices in Destination Center II, Nanded City Sinhagad Road. Starting from ₹48 L all-inclusive. Verified MahaRERA P52100079788.",
        "advancedConfigurations": [
            {
                "id": "cfg-dc2-retail-sm",
                "projectId": "p-nanded-city-destination-center-2",
                "name": "Boutique Retail Shop",
                "carpetArea": 220,
                "balconyArea": 0,
                "bathrooms": 1,
                "basePrice": 4800000,
                "pricePerSqft": 21818.18,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/destination-center-cp.jpg"
            },
            {
                "id": "cfg-dc2-showroom-lg",
                "projectId": "p-nanded-city-destination-center-2",
                "name": "Anchor Retail Showroom",
                "carpetArea": 1450,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 32000000,
                "pricePerSqft": 22068.97,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/destination-center-cp.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-symphony-it-park",
        "title": "Symphony IT Park",
        "slug": "nanded-city-symphony-it-park",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹1.25 Cr - ₹9.50 Cr",
        "exactPrice": "₹1.25 Cr",
        "configurations": ["Grade-A IT Office", "Corporate Suite"],
        "status": "Ready to Move",
        "type": "Commercial",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/symphonyitpark/IMG/Symphony%20Microsite%20-%20Final%20-%2007.webp",
        "heroImage": "https://nandedcitypune.com/symphonyitpark/IMG/Symphony%20Microsite%20-%20Final%20-%2007.webp",
        "lat": 18.4688,
        "lng": 73.7895,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": [
            "https://nandedcitypune.com/symphonyitpark/IMG/Symphony%20IT%20Park%20-%20Microsite%20-%20Clean%20Floor%20Plates.webp"
        ],
        "description": "Symphony IT Park by Magarpatta City Group brings premium Grade-A IT/ITES workspace infrastructure to Nanded City, Sinhagad Road, Pune. Offering large, clean floor plates designed for global IT conglomerates, tech startups, and corporate headquarters with seamless access to Mumbai-Bangalore Highway.\n\nOffices available for purchase starting at ₹1.25 Cr all-inclusive (1,245 sq.ft onwards) and commercial leasing from 3,227 sq.ft upwards. Features multi-tier security, 100% power redundancy, and scenic green township environs. Verified under official MahaRERA registration P52100000385 with 100% zero brokerage through PROPSMART.",
        "features": [
            "Clean High-Efficiency Floor Plates", "Grade-A IT/ITES Campus", "High-Speed Passenger & Service Elevators",
            "100% DG Power Back-up with N+1 Redundancy", "Dedicated Multi-Tier Security & Access Control",
            "Optic Fiber Internet Connectivity", "Cafeteria & Executive Lounges", "Extensive Multi-Level Parking"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant Commercial Flat Slab Concrete Structure with Minimum Columns"},
            {"label": "Ceiling Height", "value": "3.85 Metres Clear Floor-to-Ceiling Height"},
            {"label": "Power & HVAC", "value": "Dual Feed 100% Back-up Power with Water-Cooled Chiller HVAC Provisions"},
            {"label": "Parking Ratio", "value": "1 Car Parking Space per 750 sq.ft of Leasable Area"},
            {"label": "Carpet Range", "value": "1245 - 8500 sq.ft Usable Commercial Carpet Area"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty corporate workspace desk",
            "World-class Grade-A IT Park in Sinhagad Road growth corridor",
            "Official MahaRERA verified project P52100000385",
            "Single final all-inclusive price with absolute commercial clarity"
        ],
        "reraId": "P52100000385",
        "pricePerSqft": 10040,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000385",
        "seoKeywords": [
            "Symphony IT Park Nanded City", "IT office space Sinhagad Road Pune",
            "commercial office lease Nanded City", "Symphony IT Park MahaRERA P52100000385",
            "office for sale Pune", "zero brokerage corporate office"
        ],
        "metaDescription": "Buy & lease Grade-A IT offices in Symphony IT Park, Nanded City Pune. 1,245 to 8,500 sq.ft from ₹1.25 Cr all-inclusive. Verified MahaRERA P52100000385.",
        "advancedConfigurations": [
            {
                "id": "cfg-symphony-suite-sm",
                "projectId": "p-nanded-city-symphony-it-park",
                "name": "Corporate Office Suite",
                "carpetArea": 1245,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 12500000,
                "pricePerSqft": 10040.16,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/symphonyitpark/IMG/Symphony%20IT%20Park%20-%20Microsite%20-%20Clean%20Floor%20Plates.webp"
            },
            {
                "id": "cfg-symphony-floorplate-lg",
                "projectId": "p-nanded-city-symphony-it-park",
                "name": "Full Wing Corporate Floor Plate",
                "carpetArea": 8500,
                "balconyArea": 0,
                "bathrooms": 6,
                "basePrice": 95000000,
                "pricePerSqft": 11176.47,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/symphonyitpark/IMG/Symphony%20IT%20Park%20-%20Microsite%20-%20Clean%20Floor%20Plates.webp"
            }
        ]
    },
    {
        "id": "p-nanded-city-aalaap",
        "title": "Aalaap I at Nanded City",
        "slug": "nanded-city-aalaap",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹78.00 L - ₹1.25 Cr",
        "exactPrice": "₹78.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "in 2027",
        "image": "https://nandedcitypune.com/wp-content/uploads/2025/03/aalaap-ongoing-project.webp",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2025/03/aalaap-ongoing-project.webp",
        "lat": 18.4680,
        "lng": 73.7910,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": [
            "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"
        ],
        "description": "Aalaap I at Nanded City is an ongoing premium residential development offering thoughtfully proportioned 2 BHK and 3 BHK homes with scenic views of landscaped open greens. Benefitting from the township's self-contained educational, healthcare, and retail ecosystem.\n\nStarting at ₹78.00 L all-inclusive, every residence is engineered for superior cross-ventilation, clear structural spans, and durable finishes. Verified under official MahaRERA registration P52100055134 with 100% zero brokerage through PROPSMART.",
        "features": [
            "Clubhouse & Multipurpose Hall", "Swimming Pool with Deck", "Children Play Area", "Gymnasium",
            "Landscape Garden Walkways", "Solar Water Heating System", "Rainwater Harvesting", "Covered Parking"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant RCC Frame Design"},
            {"label": "Flooring", "value": "Vitrified Tile Flooring in All Rooms; Anti-skid in Bathrooms"},
            {"label": "Carpet Range", "value": "650 - 990 sq.ft Usable Carpet Area"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty direct partner",
            "Ongoing development inside 700+ acre Nanded City",
            "Official MahaRERA verified project P52100055134",
            "Single final all-inclusive price with zero hidden costs"
        ],
        "reraId": "P52100055134",
        "pricePerSqft": 12000,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100055134",
        "seoKeywords": ["Aalaap Nanded City", "Aalaap Pune flats", "2 BHK Nanded City Aalaap", "Aalaap MahaRERA P52100055134"],
        "metaDescription": "Aalaap I at Nanded City, Sinhagad Road Pune. 2 & 3 BHK homes from ₹78 L all-inclusive. Verified MahaRERA P52100055134.",
        "advancedConfigurations": [
            {
                "id": "cfg-aalaap-2bhk",
                "projectId": "p-nanded-city-aalaap",
                "name": "2 BHK Premium",
                "carpetArea": 650,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7800000,
                "pricePerSqft": 12000,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2025/03/aalaap-ongoing-project.webp"
            }
        ]
    },
    {
        "id": "p-nanded-city-melody-1",
        "title": "Melody I at Nanded City",
        "slug": "nanded-city-melody-1",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹74.00 L - ₹1.12 Cr",
        "exactPrice": "₹74.00 L",
        "configurations": ["2 BHK", "2.5 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "in 2026",
        "image": "https://nandedcitypune.com/wp-content/uploads/2026/07/melody-cp.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/melody-cp.jpg",
        "lat": 18.4685,
        "lng": 73.7918,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"],
        "description": "Melody I at Nanded City brings contemporary 2 BHK and 2.5 BHK residences to the heart of Nanded City township on Sinhagad Road. Featuring quiet residential tower placement, high green cover, and proximity to Pawar Public School and Destination Center.\n\nStarting at ₹74.00 L all-inclusive, each apartment is legally verified under official MahaRERA registration P52100051948 with 100% zero brokerage through PROPSMART.",
        "features": ["Landscaped Gardens", "Community Hall", "Children Play Area", "Indoor Games", "Security", "DG Backup"],
        "specs": [{"label": "Structure", "value": "RCC Shear Wall Structure"}, {"label": "Carpet Range", "value": "680 - 890 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Official MahaRERA verified project P52100051948",
            "Single final all-inclusive price with complete legal transparency"
        ],
        "reraId": "P52100051948",
        "pricePerSqft": 10882,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100051948",
        "seoKeywords": ["Melody I Nanded City", "Melody Nanded City Pune", "2 BHK Sinhagad Road", "Melody MahaRERA P52100051948"],
        "metaDescription": "Melody I at Nanded City, Sinhagad Road Pune. 2 & 2.5 BHK homes from ₹74 L all-inclusive. Verified MahaRERA P52100051948.",
        "advancedConfigurations": [
            {
                "id": "cfg-melody1-2bhk",
                "projectId": "p-nanded-city-melody-1",
                "name": "2 BHK Apartment",
                "carpetArea": 680,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7400000,
                "pricePerSqft": 10882.35,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/melody-cp.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-melody-2",
        "title": "Melody II at Nanded City",
        "slug": "nanded-city-melody-2",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹79.00 L - ₹1.22 Cr",
        "exactPrice": "₹79.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "in 2026",
        "image": "https://nandedcitypune.com/wp-content/uploads/2026/07/melody-cp.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/melody-cp.jpg",
        "lat": 18.4687,
        "lng": 73.7920,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"],
        "description": "Melody II at Nanded City extends the celebrated Melody residential cluster with upgraded 2 BHK and 3 BHK layouts on Sinhagad Road, Pune. Providing superior lifestyle comfort, open river-breeze corridors, and abundant community infrastructure.\n\nStarting from ₹79.00 L all-inclusive, verified under official MahaRERA registration P52100051867 with zero brokerage through PROPSMART.",
        "features": ["Clubhouse", "Gym", "Landscaped Podium", "Children Play Zone", "Gated Security", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "Seismic Resistant RCC Frame"}, {"label": "Carpet Range", "value": "710 - 1020 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Official MahaRERA verified project P52100051867",
            "Turnkey all-inclusive single price with no extra charges"
        ],
        "reraId": "P52100051867",
        "pricePerSqft": 11126,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100051867",
        "seoKeywords": ["Melody II Nanded City", "Melody 2 Pune", "3 BHK Nanded City Melody", "Melody II MahaRERA P52100051867"],
        "metaDescription": "Melody II at Nanded City, Sinhagad Road Pune. 2 & 3 BHK homes from ₹79 L all-inclusive. Verified MahaRERA P52100051867.",
        "advancedConfigurations": [
            {
                "id": "cfg-melody2-2bhk",
                "projectId": "p-nanded-city-melody-2",
                "name": "2 BHK Comfort",
                "carpetArea": 710,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7900000,
                "pricePerSqft": 11126.76,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/melody-cp.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-sur",
        "title": "Sur at Nanded City",
        "slug": "nanded-city-sur",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹72.00 L - ₹1.15 Cr",
        "exactPrice": "₹72.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2020/01/sargam-completed.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/sargam-completed.jpg",
        "lat": 18.4678,
        "lng": 73.7930,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"],
        "description": "Sur at Nanded City is a completed, ready-to-move residential sector offering spacious 2 and 3 BHK apartments on Sinhagad Road, Pune. Providing established community living with landscaped parks, fitness zones, and direct walking access to township schools.\n\nStarting at ₹72.00 L all-inclusive, verified under official MahaRERA registration P52100032686 with zero brokerage through PROPSMART.",
        "features": ["Gated Security", "Landscaped Gardens", "Children Play Area", "Clubhouse", "24/7 Water", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "RCC Framed Structure"}, {"label": "Carpet Range", "value": "660 - 980 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Ready to Move apartments with immediate possession",
            "Official MahaRERA verified project P52100032686",
            "Single final all-inclusive price with zero hidden costs"
        ],
        "reraId": "P52100032686",
        "pricePerSqft": 10909,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100032686",
        "seoKeywords": ["Sur Nanded City", "Sur Sinhagad Road Pune", "ready to move flats Nanded City", "Sur MahaRERA P52100032686"],
        "metaDescription": "Sur at Nanded City, Sinhagad Road Pune. Ready to move 2 & 3 BHK homes from ₹72 L all-inclusive. Verified MahaRERA P52100032686.",
        "advancedConfigurations": [
            {
                "id": "cfg-sur-2bhk",
                "projectId": "p-nanded-city-sur",
                "name": "2 BHK Ready Home",
                "carpetArea": 660,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7200000,
                "pricePerSqft": 10909.09,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/sargam-completed.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-janaranjani",
        "title": "Janaranjani D Phase II",
        "slug": "nanded-city-janaranjani",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹70.00 L - ₹1.08 Cr",
        "exactPrice": "₹70.00 L",
        "configurations": ["2 BHK", "2.5 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "in 2026",
        "image": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-completed.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-completed.jpg",
        "lat": 18.4672,
        "lng": 73.7912,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"],
        "description": "Janaranjani D Phase II at Nanded City features well-planned 2 BHK and 2.5 BHK residences designed for budget-conscious families desiring integrated township amenities on Sinhagad Road, Pune.\n\nStarting from ₹70.00 L all-inclusive, verified under official MahaRERA registration P52100047078 with zero brokerage through PROPSMART.",
        "features": ["Landscaped Garden", "Children Play Arena", "Community Hall", "24/7 Security", "Township Transit", "Solar Water"],
        "specs": [{"label": "Structure", "value": "RCC Frame Design"}, {"label": "Carpet Range", "value": "670 - 910 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Official MahaRERA verified project P52100047078",
            "Single final all-inclusive price with zero hidden costs"
        ],
        "reraId": "P52100047078",
        "pricePerSqft": 10447,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100047078",
        "seoKeywords": ["Janaranjani Nanded City", "Janaranjani D Phase II", "affordable flats Nanded City", "Janaranjani MahaRERA P52100047078"],
        "metaDescription": "Janaranjani D Phase II at Nanded City, Sinhagad Road Pune. 2 & 2.5 BHK homes from ₹70 L all-inclusive. Verified MahaRERA P52100047078.",
        "advancedConfigurations": [
            {
                "id": "cfg-janaranjani-2bhk",
                "projectId": "p-nanded-city-janaranjani",
                "name": "2 BHK Smart Residence",
                "carpetArea": 670,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7000000,
                "pricePerSqft": 10447.76,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-completed.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-bahaar",
        "title": "Bahaar at Nanded City",
        "slug": "nanded-city-bahaar",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹75.00 L - ₹1.18 Cr",
        "exactPrice": "₹75.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2026/07/rhytm-cp.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/rhytm-cp.jpg",
        "lat": 18.4681,
        "lng": 73.7922,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"],
        "description": "Bahaar at Nanded City offers ready-to-move 2 BHK and 3 BHK residences set amid lush landscaped avenues in Nanded City, Sinhagad Road, Pune. Providing quiet residential living with immediate occupancy.\n\nStarting from ₹75.00 L all-inclusive, verified under official MahaRERA registration P52100049984 with zero brokerage through PROPSMART.",
        "features": ["Landscaped Greens", "Play Area", "Clubhouse Amenities", "Security", "Piped Gas", "Dedicated Parking"],
        "specs": [{"label": "Structure", "value": "Earthquake Resistant RCC Frame"}, {"label": "Carpet Range", "value": "690 - 1050 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Ready to Move apartments inside Nanded City",
            "Official MahaRERA verified project P52100049984",
            "Turnkey single final all-inclusive price without hidden break-ups"
        ],
        "reraId": "P52100049984",
        "pricePerSqft": 10869,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100049984",
        "seoKeywords": ["Bahaar Nanded City", "Bahaar Sinhagad Road Pune", "ready to move flats Pune", "Bahaar MahaRERA P52100049984"],
        "metaDescription": "Bahaar at Nanded City, Sinhagad Road Pune. Ready to move 2 & 3 BHK homes from ₹75 L all-inclusive. Verified MahaRERA P52100049984.",
        "advancedConfigurations": [
            {
                "id": "cfg-bahaar-2bhk",
                "projectId": "p-nanded-city-bahaar",
                "name": "2 BHK Ready Unit",
                "carpetArea": 690,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7500000,
                "pricePerSqft": 10869.57,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2026/07/rhytm-cp.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-dhanashree",
        "title": "Dhanashree at Nanded City",
        "slug": "nanded-city-dhanashree",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹62.00 L - ₹85.00 L",
        "exactPrice": "₹62.00 L",
        "configurations": ["2 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham2-completed.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham2-completed.jpg",
        "lat": 18.4670,
        "lng": 73.7915,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg"],
        "description": "Dhanashree at Nanded City is a popular completed residential community of cozy 2 BHK homes located on Sinhagad Road, Pune. Providing great affordability paired with world-class integrated township infrastructure.\n\nStarting from ₹62.00 L all-inclusive, verified under official MahaRERA registration P52100002425 with zero brokerage through PROPSMART.",
        "features": ["Gated Security", "Township Road Access", "Kids Play Area", "24/7 Water", "Street Lighting", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "RCC Frame Structure"}, {"label": "Carpet Range", "value": "620 - 780 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Established ready-to-move community",
            "Official MahaRERA verified project P52100002425",
            "Single final all-inclusive price with zero hidden costs"
        ],
        "reraId": "P52100002425",
        "pricePerSqft": 10000,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100002425",
        "seoKeywords": ["Dhanashree Nanded City", "Dhanashree Sinhagad Road", "2 BHK flats Nanded City", "Dhanashree MahaRERA P52100002425"],
        "metaDescription": "Dhanashree at Nanded City, Sinhagad Road Pune. Ready 2 BHK homes from ₹62 L all-inclusive. Verified MahaRERA P52100002425.",
        "advancedConfigurations": [
            {
                "id": "cfg-dhanashree-2bhk",
                "projectId": "p-nanded-city-dhanashree",
                "name": "2 BHK Classic",
                "carpetArea": 620,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 6200000,
                "pricePerSqft": 10000,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham2-completed.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-bageshree",
        "title": "Bageshree at Nanded City",
        "slug": "nanded-city-bageshree",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹58.00 L - ₹78.00 L",
        "exactPrice": "₹58.00 L",
        "configurations": ["2 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2024/02/Bageshree.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2024/02/Bageshree.jpg",
        "lat": 18.4692,
        "lng": 73.7932,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2024/02/Bageshree.jpg"],
        "description": "Bageshree at Nanded City represents cozy, comfortable, and convenient township living on Sinhagad Road, Pune. Featuring thoughtfully designed 2 BHK apartments with excellent ventilation and access to sports arenas and green parks.\n\nStarting from ₹58.00 L all-inclusive, verified under official MahaRERA registration P52100021465 with zero brokerage through PROPSMART.",
        "features": ["Gated Security", "Children Play Area", "Community Living", "Rainwater Harvesting", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "RCC Frame Structure"}, {"label": "Carpet Range", "value": "585 - 720 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Completed community with ready possession",
            "Official MahaRERA verified project P52100021465",
            "Single final all-inclusive price with complete transparency"
        ],
        "reraId": "P52100021465",
        "pricePerSqft": 9914,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100021465",
        "seoKeywords": ["Bageshree Nanded City", "Bageshree Sinhagad Road Pune", "2 BHK flats Nanded City", "Bageshree MahaRERA P52100021465"],
        "metaDescription": "Bageshree at Nanded City, Sinhagad Road Pune. Ready 2 BHK homes from ₹58 L all-inclusive. Verified MahaRERA P52100021465.",
        "advancedConfigurations": [
            {
                "id": "cfg-bageshree-2bhk",
                "projectId": "p-nanded-city-bageshree",
                "name": "2 BHK Cozy Unit",
                "carpetArea": 585,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 5800000,
                "pricePerSqft": 9914.53,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2024/02/Bageshree.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-kalashree",
        "title": "Kalashree at Nanded City",
        "slug": "nanded-city-kalashree",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹64.00 L - ₹89.00 L",
        "exactPrice": "₹64.00 L",
        "configurations": ["2 BHK", "2.5 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2024/02/Kalashree.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2024/02/Kalashree.jpg",
        "lat": 18.4695,
        "lng": 73.7935,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2024/02/Kalashree.jpg"],
        "description": "Kalashree at Nanded City offers homes that suit your lifestyle in a vibrant completed residential community on Sinhagad Road, Pune. Providing comfortable 2 BHK and 2.5 BHK apartments with expansive township infrastructure.\n\nStarting from ₹64.00 L all-inclusive, verified under official MahaRERA registration P52100021483 with zero brokerage through PROPSMART.",
        "features": ["Gated Township Security", "Landscaped Gardens", "Sports Facilities", "Community Hall", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "Earthquake Resistant RCC Frame"}, {"label": "Carpet Range", "value": "640 - 860 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Ready-to-move homes in Nanded City",
            "Official MahaRERA verified project P52100021483",
            "Single final all-inclusive price with zero hidden costs"
        ],
        "reraId": "P52100021483",
        "pricePerSqft": 10000,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100021483",
        "seoKeywords": ["Kalashree Nanded City", "Kalashree Sinhagad Road Pune", "flats in Nanded City", "Kalashree MahaRERA P52100021483"],
        "metaDescription": "Kalashree at Nanded City, Sinhagad Road Pune. Ready 2 & 2.5 BHK homes from ₹64 L all-inclusive. Verified MahaRERA P52100021483.",
        "advancedConfigurations": [
            {
                "id": "cfg-kalashree-2bhk",
                "projectId": "p-nanded-city-kalashree",
                "name": "2 BHK Lifestyle Unit",
                "carpetArea": 640,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 6400000,
                "pricePerSqft": 10000,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2024/02/Kalashree.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-pancham",
        "title": "Pancham at Nanded City",
        "slug": "nanded-city-pancham",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹68.00 L - ₹1.10 Cr",
        "exactPrice": "₹68.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-I-completed-1.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-I-completed-1.jpg",
        "lat": 18.4674,
        "lng": 73.7918,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-I-completed-1.jpg"],
        "description": "Pancham at Nanded City is one of the foundation residential sectors of the township, offering well-established 2 BHK and 3 BHK family residences surrounded by landscaped parks and wide internal roads.\n\nStarting from ₹68.00 L all-inclusive, verified under official MahaRERA registration P52100000385 with zero brokerage through PROPSMART.",
        "features": ["Gated Security", "Clubhouse", "Children Play Arena", "Walking Corridors", "Dedicated Parking"],
        "specs": [{"label": "Structure", "value": "RCC Frame Design"}, {"label": "Carpet Range", "value": "680 - 1020 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Established completed township sector with ready OC",
            "Official MahaRERA verified project P52100000385",
            "Turnkey single final all-inclusive price without hidden break-ups"
        ],
        "reraId": "P52100000385",
        "pricePerSqft": 10000,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000385",
        "seoKeywords": ["Pancham Nanded City", "Pancham Sinhagad Road Pune", "ready flats Nanded City", "Pancham MahaRERA P52100000385"],
        "metaDescription": "Pancham at Nanded City, Sinhagad Road Pune. Ready 2 & 3 BHK homes from ₹68 L all-inclusive. Verified MahaRERA P52100000385.",
        "advancedConfigurations": [
            {
                "id": "cfg-pancham-2bhk",
                "projectId": "p-nanded-city-pancham",
                "name": "2 BHK Ready Home",
                "carpetArea": 680,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 6800000,
                "pricePerSqft": 10000,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2020/01/pancham-I-completed-1.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-sarang",
        "title": "Sarang at Nanded City",
        "slug": "nanded-city-sarang",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹72.00 L - ₹1.15 Cr",
        "exactPrice": "₹72.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro2.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro2.jpg",
        "lat": 18.4678,
        "lng": 73.7922,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro2.jpg"],
        "description": "Sarang at Nanded City is a premier completed residential enclave situated adjacent to central landscaped gardens, offering elegant 2 BHK and 3 BHK family homes on Sinhagad Road, Pune.\n\nStarting from ₹72.00 L all-inclusive, verified under official MahaRERA registration P52100000288 with zero brokerage through PROPSMART.",
        "features": ["Landscaped Gardens", "Clubhouse Facilities", "Children Play Area", "Gated Security", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "RCC Frame Structure"}, {"label": "Carpet Range", "value": "720 - 1080 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Ready-to-move spacious homes in prime township sector",
            "Official MahaRERA verified project P52100000288",
            "Single final all-inclusive price with complete legal transparency"
        ],
        "reraId": "P52100000288",
        "pricePerSqft": 10000,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000288",
        "seoKeywords": ["Sarang Nanded City", "Sarang Sinhagad Road", "ready flats Pune", "Sarang MahaRERA P52100000288"],
        "metaDescription": "Sarang at Nanded City, Sinhagad Road Pune. Ready 2 & 3 BHK homes from ₹72 L all-inclusive. Verified MahaRERA P52100000288.",
        "advancedConfigurations": [
            {
                "id": "cfg-sarang-2bhk",
                "projectId": "p-nanded-city-sarang",
                "name": "2 BHK Garden View",
                "carpetArea": 720,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7200000,
                "pricePerSqft": 10000,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro2.jpg"
            }
        ]
    },
    {
        "id": "p-nanded-city-asawari",
        "title": "Asawari at Nanded City",
        "slug": "nanded-city-asawari",
        "builderId": "b-nanded-city",
        "location": "Sinhagad Road",
        "priceRange": "₹76.00 L - ₹1.25 Cr",
        "exactPrice": "₹76.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "image": "https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro3.jpg",
        "heroImage": "https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro3.jpg",
        "lat": 18.4682,
        "lng": 73.7928,
        "masterLayout": "https://nandedcitypune.com/wp-content/uploads/2020/01/mlayout-new.jpg",
        "floorPlans": ["https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro3.jpg"],
        "description": "Asawari at Nanded City offers premium 2 BHK and 3 BHK ready-to-move homes nestled in pristine greenery within the 700+ acre township on Sinhagad Road, Pune.\n\nStarting from ₹76.00 L all-inclusive, verified under official MahaRERA registration P52100000292 with zero brokerage through PROPSMART.",
        "features": ["Clubhouse", "Swimming Pool", "Green Park Lawns", "Children Play Zone", "Gated Security", "Covered Parking"],
        "specs": [{"label": "Structure", "value": "RCC Frame Design"}, {"label": "Carpet Range", "value": "750 - 1150 sq.ft Usable Carpet"}],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty",
            "Prime ready-to-move apartments with immediate registration",
            "Official MahaRERA verified project P52100000292",
            "Turnkey single final all-inclusive price with zero hidden costs"
        ],
        "reraId": "P52100000292",
        "pricePerSqft": 10133,
        "verificationStatus": "Verified",
        "verificationSource": "https://maharera.maharashtra.gov.in/?rera=P52100000292",
        "seoKeywords": ["Asawari Nanded City", "Asawari Sinhagad Road", "3 BHK flats Nanded City", "Asawari MahaRERA P52100000292"],
        "metaDescription": "Asawari at Nanded City, Sinhagad Road Pune. Ready 2 & 3 BHK homes from ₹76 L all-inclusive. Verified MahaRERA P52100000292.",
        "advancedConfigurations": [
            {
                "id": "cfg-asawari-2bhk",
                "projectId": "p-nanded-city-asawari",
                "name": "2 BHK Premium",
                "carpetArea": 750,
                "balconyArea": 0,
                "bathrooms": 2,
                "basePrice": 7600000,
                "pricePerSqft": 10133.33,
                "infraCharges": 0,
                "clubhouseCharges": 0,
                "gstRate": 0,
                "stampDutyRate": 0,
                "registrationCharges": 0,
                "layoutImage": "https://nandedcitypune.com/wp-content/uploads/2017/10/com-pro3.jpg"
            }
        ]
    }
]

# Builder definition
NANDED_BUILDER = {
    "id": "b-nanded-city",
    "name": "Nanded City Development & Construction Co.",
    "slug": "nanded-city",
    "logo": "https://nandedcitypune.com/wp-content/themes/nandedcity/images/adr-logo.png",
    "heroImage": "https://nandedcitypune.com/wp-content/uploads/2026/11/Harmony_Apartments_Sales_Home_Banner-scaled.jpeg",
    "description": "Nanded City Development and Construction Company Ltd. (Magarpatta City Group) is the visionary master developer of Nanded City, a 700+ acre integrated township on Sinhagad Road, Pune. Renowned for pioneering sustainable township living, integrated education, destination retail centers, and eco-friendly infrastructure.",
    "establishedYear": 2008,
    "totalProjects": 24,
    "ongoingProjects": 6,
    "trustScore": 9.8
}

def generate_svg_qr(rera_id):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_M,
        box_size=10,
        border=2,
        image_factory=qrcode.image.svg.SvgPathImage
    )
    url = f"https://maharera.maharashtra.gov.in/?rera={rera_id}"
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image()

    svg_bytes = img.to_string()
    svg_str = svg_bytes.decode('utf-8') if isinstance(svg_bytes, bytes) else str(svg_bytes)

    # Wrap in clickable anchor
    wrapped_svg = f'''<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 350 350" width="100%" height="100%">
  <a xlink:href="{url}" target="_blank" title="Official MahaRERA Verification for {rera_id}">
    <rect width="100%" height="100%" fill="#ffffff" rx="8"/>
    {svg_str}
    <text x="50%" y="340" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" font-weight="600" fill="#0f172a">MahaRERA: {rera_id} (Click to Verify)</text>
  </a>
</svg>'''

    out_file = os.path.join(QR_DIR, f"{rera_id}-qr.svg")
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write(wrapped_svg)
    print(f"Generated QR SVG: {out_file}")

def main():
    print("Generating vector QR codes for Nanded City RERA IDs...")
    unique_reras = list(set(p['reraId'] for p in NANDED_PROJECTS))
    for rera in unique_reras:
        generate_svg_qr(rera)

    print("\nReading mockData.ts...")
    with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Insert Builder if not present
    if '"id": "b-nanded-city"' not in content:
        print("Inserting builder b-nanded-city...")
        builder_json = json.dumps(NANDED_BUILDER, indent=4)
        # Find start of BUILDERS
        b_pos = content.find('export const BUILDERS: Builder[] = [')
        if b_pos != -1:
            # Insert right after `export const BUILDERS: Builder[] = [\n`
            insert_idx = content.find('\n', b_pos) + 1
            # Add builder with comma and indentation
            formatted_builder = '  ' + builder_json.replace('\n', '\n  ') + ',\n'
            content = content[:insert_idx] + formatted_builder + content[insert_idx:]
            print("Builder b-nanded-city inserted.")
        else:
            print("Could not find BUILDERS array!")
    else:
        print("Builder b-nanded-city already exists.")

    # 2. Insert Projects if not present
    existing_slugs = set(re.findall(r'"slug":\s*"([^"]+)"', content))
    to_insert = [p for p in NANDED_PROJECTS if p['slug'] not in existing_slugs]
    print(f"New projects to insert: {len(to_insert)} out of {len(NANDED_PROJECTS)}")

    if to_insert:
        p_pos = content.find('export const PROJECTS: Project[] = [')
        if p_pos != -1:
            insert_idx = content.find('\n', p_pos) + 1
            formatted_projects = ""
            for p in to_insert:
                p_json = json.dumps(p, indent=4)
                formatted_projects += '  ' + p_json.replace('\n', '\n  ') + ',\n'
            
            content = content[:insert_idx] + formatted_projects + content[insert_idx:]
            print(f"Inserted {len(to_insert)} projects into PROJECTS array.")
        else:
            print("Could not find PROJECTS array!")

    with open(MOCK_DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated src/data/mockData.ts successfully.")

if __name__ == '__main__':
    main()
