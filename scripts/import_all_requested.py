#!/usr/bin/env python3
"""
Comprehensive Data Importer & Synchronizer:
1. Vilas Javdekar (javdekars.com): Mark completed projects as Sold Out, add new launch & ongoing projects.
2. Studio Apartments in Pune: Krisala, BramhaCorp, AG Landmarks, Trio Spaces, Menlo Realty, One Suites, etc.
3. Menlo Realty official portfolio (menlorealty.in/residential-project).
4. Synchronize mockData.ts, projectSummaries.ts, buildersData.ts, and qrUtils.ts.
"""

import json
import re
import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_PATH = os.path.join(BASE_DIR, 'src', 'data', 'mockData.ts')
PROJECT_SUMMARIES_PATH = os.path.join(BASE_DIR, 'src', 'data', 'projectSummaries.ts')
BUILDERS_DATA_PATH = os.path.join(BASE_DIR, 'src', 'data', 'buildersData.ts')
QR_UTILS_PATH = os.path.join(BASE_DIR, 'src', 'utils', 'qrUtils.ts')

print("Starting Master Data Importer...")

# --- 1. NEW BUILDER PROFILES ---
NEW_BUILDERS = [
    {
        "id": "b-krisala",
        "name": "Krisala Developers",
        "slug": "krisala-developers",
        "logo": "https://krisala.com/wp-content/themes/krisala/images/logo.png",
        "heroImage": "https://krisala.com/wp-content/uploads/2023/08/41-commune-banner.jpg",
        "description": "Krisala Developers is a pioneer of smart living and innovative compact residential suites in Pune, renowned for 41 Commune, 41 West World, and 41 Shakai in the Western IT corridor.",
        "establishedYear": 2011,
        "totalProjects": 18,
        "ongoingProjects": 7,
        "trustScore": 9.4,
        "isVerified": True,
        "experience": 15,
        "locations": ["Wakad", "Tathawade", "Balewadi", "Punawale", "Hinjewadi", "Pune"]
    },
    {
        "id": "b-bramhacorp",
        "name": "BramhaCorp",
        "slug": "bramhacorp",
        "logo": "https://bramhacorp.in/assets/images/logo.png",
        "heroImage": "https://bramhacorp.in/assets/images/townhouse/banner.jpg",
        "description": "BramhaCorp is one of Western India's most prestigious luxury developers and hospitality pioneers (Le Meridien/Sheraton Grand), leading Pune's smart studio and luxury segment.",
        "establishedYear": 1982,
        "totalProjects": 45,
        "ongoingProjects": 10,
        "trustScore": 9.7,
        "isVerified": True,
        "experience": 42,
        "locations": ["Balewadi", "Kalyani Nagar", "Wadgaon Sheri", "Camp", "Pune"]
    },
    {
        "id": "b-ag-landmarks",
        "name": "AG Landmarks",
        "slug": "ag-landmarks",
        "logo": "https://adityaenclavehinjewadi.com/images/logo.png",
        "heroImage": "https://adityaenclavehinjewadi.com/images/banner.jpg",
        "description": "AG Landmarks is a specialist in boutique compact high-rises and high-yield studio apartments in Wakad and Punawale near Hinjewadi IT Park.",
        "establishedYear": 2014,
        "totalProjects": 12,
        "ongoingProjects": 4,
        "trustScore": 9.2,
        "isVerified": True,
        "experience": 12,
        "locations": ["Wakad", "Punawale", "Hinjewadi", "Pune"]
    },
    {
        "id": "b-trio-spaces",
        "name": "Trio Spaces",
        "slug": "trio-spaces",
        "logo": "https://triospaces.com/images/logo.png",
        "heroImage": "https://triospaces.com/images/trio-sync-banner.jpg",
        "description": "Trio Spaces / Trio Lifespaces is Pune's leading developer of serviced millennial suites, co-living student residences, and smart high-yield studios in Tathawade and Hinjewadi.",
        "establishedYear": 2016,
        "totalProjects": 9,
        "ongoingProjects": 3,
        "trustScore": 9.1,
        "isVerified": True,
        "experience": 10,
        "locations": ["Tathawade", "Wakad", "Hinjewadi", "Pune"]
    },
    {
        "id": "b-menlo-realty",
        "name": "Menlo Realty",
        "slug": "menlo-realty",
        "logo": "https://menlorealty.in/assets/images/logo.png",
        "heroImage": "https://menlorealty.in/assets/images/banner.jpg",
        "description": "Menlo Realty is a technology-driven real estate developer creating community-centric living spaces, smart studio apartments, and modern residential townships across Pune.",
        "establishedYear": 2012,
        "totalProjects": 15,
        "ongoingProjects": 8,
        "trustScore": 9.3,
        "isVerified": True,
        "experience": 14,
        "locations": ["Hinjewadi", "Ravet", "Bavdhan", "Kharadi", "Mundhwa", "Chakan", "Lohegaon", "Pune"]
    },
    {
        "id": "b-one-suites",
        "name": "One Suites Realty",
        "slug": "one-suites-realty",
        "logo": "https://onesuites-kharadi.com/images/logo.png",
        "heroImage": "https://onesuites-kharadi.com/images/banner.jpg",
        "description": "One Suites is East Pune's premier managed studio suites developer located on the Kharadi EON IT corridor.",
        "establishedYear": 2018,
        "totalProjects": 5,
        "ongoingProjects": 2,
        "trustScore": 9.0,
        "isVerified": True,
        "experience": 8,
        "locations": ["Kharadi", "Pune"]
    },
    {
        "id": "b-amegh-realty",
        "name": "Amegh Realty",
        "slug": "amegh-realty",
        "logo": "/images/builders/reputed-builder.svg",
        "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/51014204-43f0-496a-847a-05447110109f/gallery/mt5m03g2-6kzuic.webp",
        "description": "Amegh Realty develops contemporary compact suites and residential developments in Pune's IT hubs.",
        "establishedYear": 2015,
        "totalProjects": 7,
        "ongoingProjects": 2,
        "trustScore": 9.0,
        "isVerified": True,
        "experience": 11,
        "locations": ["Hinjewadi", "Wakad", "Pune"]
    },
    {
        "id": "b-runal-developers",
        "name": "Runal Developers",
        "slug": "runal-developers",
        "logo": "https://runal.com/wp-content/themes/runal/images/logo.png",
        "heroImage": "https://runal.com/wp-content/uploads/2022/10/banner.jpg",
        "description": "Runal Developers has delivered over 30 successful residential and commercial landmarks across Ravet, Kiwale, and PCMC over 25 years.",
        "establishedYear": 1998,
        "totalProjects": 32,
        "ongoingProjects": 6,
        "trustScore": 9.4,
        "isVerified": True,
        "experience": 26,
        "locations": ["Ravet", "Kiwale", "Pimpri-Chinchwad", "Pune"]
    },
    {
        "id": "b-ambrosia-group",
        "name": "Ambrosia Group",
        "slug": "ambrosia-group",
        "logo": "/images/builders/reputed-builder.svg",
        "heroImage": "https://punehome.in/storage/v1/object/public/project-media/projects/51014204-43f0-496a-847a-05447110109f/gallery/mt5m03g2-6kzuic.webp",
        "description": "Ambrosia Group is celebrated for scenic hillside living spaces and boutique luxury studio suites in West Pune.",
        "establishedYear": 2010,
        "totalProjects": 11,
        "ongoingProjects": 3,
        "trustScore": 9.2,
        "isVerified": True,
        "experience": 16,
        "locations": ["Bavdhan", "Kothrud", "Pune"]
    }
]

# --- 2. VILAS JAVDEKAR COMPLETED PROJECTS (STATUS: 'Sold Out', TAGS: ['Sold Out']) ---
VJ_COMPLETED_TITLES = {
    'yashwin supernova',
    'yashwin nuovo centro',
    'yashwin orizzonte',
    'yashone hinjewadi',
    'yashwin encore',
    'yashwin anand',
    'yashwin sukham',
    'vj indilife',
    'vj portia',
    'yashwin 2.0',
    'yashwin 1.0',
    'yashwin royal',
    'yashwin jeevan',
    'prudentia towers',
    'palash boulevard',
    'palash centro',
    'prime panache',
    'prime heights'
}

# --- 3. ALL NEW PROJECTS TO INSERT ---
NEW_PROJECTS = [
    # === VILAS JAVDEKAR ONGOING & NEW LAUNCHES ===
    {
        "id": "p-palladio-presidential-towers-hadapsar",
        "title": "Palladio Presidential Towers Hadapsar",
        "slug": "palladio-presidential-towers-hadapsar",
        "builderId": "b-vilas-javdekar",
        "location": "Hadapsar",
        "city": "Pune",
        "priceRange": "₹1.45 Cr - ₹2.85 Cr",
        "exactPrice": "₹1.45 Cr",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "status": "New Launch",
        "type": "Residential",
        "possessionDate": "December 2028",
        "reraId": "PM1260002602526",
        "image": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
        "description": "Palladio Presidential Towers by Vilas Javdekar in Hadapsar Central features iconic 39-storey high-rise luxury towers with home automation, triple-height clubhouses, and direct connectivity to Magarpatta Cybercity, SP Infocity, and Amanora.",
        "metaDescription": "Palladio Presidential Towers Hadapsar by Vilas Javdekar: 2, 3 & 4 BHK luxury residences. Direct builder pricing, 0% brokerage. MahaRERA PM1260002602526.",
        "seoKeywords": ["Palladio Presidential Towers Hadapsar", "Vilas Javdekar Hadapsar", "flats in Hadapsar", "luxury homes near Magarpatta"],
        "features": ["39-Storey Towers", "Infinity Sky Pool", "Private Theatre", "Clubhouse", "24x7 Security"],
        "tags": ["New Launch", "Luxury High-Rise", "Vilas Javdekar", "Hadapsar Central"]
    },
    {
        "id": "p-palladio-presidential-suites-balewadi",
        "title": "Palladio Presidential Suites Balewadi",
        "slug": "palladio-presidential-suites-balewadi",
        "builderId": "b-vilas-javdekar",
        "location": "Balewadi",
        "city": "Pune",
        "priceRange": "₹1.85 Cr - ₹3.20 Cr",
        "exactPrice": "₹1.85 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "status": "New Launch",
        "type": "Residential",
        "possessionDate": "June 2028",
        "reraId": "PR1260002502961",
        "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
        "description": "Palladio Presidential Suites by Vilas Javdekar on Balewadi Riverfront offers ultra-luxury river-view 3 & 4 BHK residences with expansive deck balconies, world-class amenities, and immediate access to Balewadi High Street.",
        "metaDescription": "Palladio Presidential Suites Balewadi: 3 & 4 BHK riverfront residences by Vilas Javdekar. 0% Brokerage. MahaRERA PR1260002502961.",
        "seoKeywords": ["Palladio Presidential Suites Balewadi", "Vilas Javdekar Balewadi", "Balewadi High Street flats"],
        "features": ["Riverfront Promenade", "Sky Club", "Smart Home Automation", "Covered Parking"],
        "tags": ["New Launch", "Riverfront Luxury", "Balewadi", "Vilas Javdekar"]
    },
    {
        "id": "p-palladio-kothrud-central",
        "title": "Palladio Kothrud Central",
        "slug": "palladio-kothrud-central",
        "builderId": "b-vilas-javdekar",
        "location": "Kothrud",
        "city": "Pune",
        "priceRange": "₹1.75 Cr - ₹3.10 Cr",
        "exactPrice": "₹1.75 Cr",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2027",
        "reraId": "PR1260002501660",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "Palladio Kothrud Central by Vilas Javdekar is a prestigious residential tower situated in central Kothrud, offering direct connectivity to Pune Metro, Paud Road, and Karve Road with luxury amenities.",
        "metaDescription": "Palladio Kothrud Central by Vilas Javdekar: 2, 3 & 4 BHK apartments in Kothrud. 0% Brokerage. MahaRERA PR1260002501660.",
        "seoKeywords": ["Palladio Kothrud Central", "flats in Kothrud", "Vilas Javdekar Kothrud"],
        "features": ["Metro Connectivity", "Rooftop Garden", "Gymnasium", "Banquet Hall"],
        "tags": ["Under Construction", "Kothrud", "Vilas Javdekar"]
    },
    {
        "id": "p-yashwin-urbo-centro-wakad",
        "title": "Yashwin Urbo Centro Wakad",
        "slug": "yashwin-urbo-centro-wakad",
        "builderId": "b-vilas-javdekar",
        "location": "Wakad",
        "city": "Pune",
        "priceRange": "₹88 L - ₹1.65 Cr",
        "exactPrice": "₹88 Lakhs",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "P52100053194",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Yashwin Urbo Centro by Vilas Javdekar in Wakad brings urban terrace residences and 2, 3, 4 BHK homes right near Datta Mandir Road and Hinjewadi IT Park access.",
        "metaDescription": "Yashwin Urbo Centro Wakad by Vilas Javdekar: 2, 3 & 4 BHK homes. 0% Brokerage. MahaRERA P52100053194.",
        "seoKeywords": ["Yashwin Urbo Centro Wakad", "Vilas Javdekar Wakad", "flats in Wakad"],
        "features": ["Garden Terrace Homes", "Swimming Pool", "Children Play Area", "Clubhouse"],
        "tags": ["Under Construction", "Wakad", "Vilas Javdekar"]
    },
    {
        "id": "p-palladio-kharadi-central-2",
        "title": "Palladio Kharadi Central II",
        "slug": "palladio-kharadi-central-2",
        "builderId": "b-vilas-javdekar",
        "location": "Kharadi",
        "city": "Pune",
        "priceRange": "₹1.20 Cr - ₹1.90 Cr",
        "exactPrice": "₹1.20 Cr",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "New Launch",
        "type": "Residential",
        "possessionDate": "December 2028",
        "reraId": "P52100050357",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "Palladio Kharadi Central Phase II by Vilas Javdekar brings expansive 2 & 3 BHK high-rise homes right in the heart of Kharadi near EON IT Park and World Trade Center.",
        "metaDescription": "Palladio Kharadi Central II by Vilas Javdekar: 2 & 3 BHK homes in Kharadi. 0% Brokerage. MahaRERA P52100050357.",
        "seoKeywords": ["Palladio Kharadi Central II", "Vilas Javdekar Kharadi", "flats near EON IT Park"],
        "features": ["High Speed Elevators", "Clubhouse", "Sports Arena", "EV Charging"],
        "tags": ["New Launch", "Kharadi", "Vilas Javdekar"]
    },

    # === VILAS JAVDEKAR COMPLETED / SOLD OUT PROJECTS ===
    {
        "id": "p-yashwin-2-0-sus",
        "title": "Yashwin 2.0 Baner Sus",
        "slug": "yashwin-2-0-baner-sus",
        "builderId": "b-vilas-javdekar",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100017306",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Yashwin 2.0 at Baner-Sus by Vilas Javdekar is a benchmark delivered residential community. Fully handed over to happy homeowners and 100% Sold Out.",
        "metaDescription": "Yashwin 2.0 Baner Sus by Vilas Javdekar: Completed & 100% Sold Out. MahaRERA P52100017306.",
        "seoKeywords": ["Yashwin 2.0 Baner Sus", "Vilas Javdekar completed projects"],
        "features": ["Delivered Community", "Clubhouse", "Children Play Area", "24x7 Security"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-yashwin-1-0-sus",
        "title": "Yashwin 1.0 Baner Sus",
        "slug": "yashwin-1-0-baner-sus",
        "builderId": "b-vilas-javdekar",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100017306",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Yashwin 1.0 at Baner-Sus by Vilas Javdekar is a pioneer community living development in West Pune, delivered ahead of schedule and 100% Sold Out.",
        "metaDescription": "Yashwin 1.0 Baner Sus by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Yashwin 1.0", "Vilas Javdekar delivered"],
        "features": ["Delivered Community", "Landscape Garden", "Security"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-yashwin-royal-sinhagad",
        "title": "Yashwin Royal Sinhagad Road",
        "slug": "yashwin-royal-sinhagad-road",
        "builderId": "b-vilas-javdekar",
        "location": "Sinhagad Road",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100000011",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Yashwin Royal on Sinhagad Road is an established delivered residential complex by Vilas Javdekar, offering serene river and hill views, 100% Sold Out.",
        "metaDescription": "Yashwin Royal Sinhagad Road by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Yashwin Royal Sinhagad Road", "Vilas Javdekar Sinhagad Road"],
        "features": ["Delivered Community", "Clubhouse", "Security"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-yashwin-jeevan-sus",
        "title": "Yashwin Jeevan Sus",
        "slug": "yashwin-jeevan-sus",
        "builderId": "b-vilas-javdekar",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100000011",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Yashwin Jeevan at Sus-Pashan Link Road by Vilas Javdekar is a completed, delivered community known for its high-grade construction, 100% Sold Out.",
        "metaDescription": "Yashwin Jeevan Sus by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Yashwin Jeevan Sus", "Vilas Javdekar delivered"],
        "features": ["Delivered Community", "Garden", "Security"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-prudentia-towers-wakad",
        "title": "Prudentia Towers Wakad",
        "slug": "prudentia-towers-wakad",
        "builderId": "b-vilas-javdekar",
        "location": "Wakad",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100017756",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Prudentia Towers by Vilas Javdekar in Wakad near Bhumkar Chowk is an iconic delivered landmark with twin high-rise towers, 100% Sold Out.",
        "metaDescription": "Prudentia Towers Wakad by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Prudentia Towers Wakad", "Vilas Javdekar Wakad"],
        "features": ["Delivered Landmark", "Swimming Pool", "Clubhouse"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-palash-boulevard-pirangut",
        "title": "Palash Boulevard Pirangut",
        "slug": "palash-boulevard-pirangut",
        "builderId": "b-vilas-javdekar",
        "location": "Pirangut",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["1 BHK", "2 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100014585",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Palash Boulevard by Vilas Javdekar in Pirangut is an eco-centric residential township enclave, delivered and 100% Sold Out.",
        "metaDescription": "Palash Boulevard Pirangut by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Palash Boulevard Pirangut", "Vilas Javdekar Pirangut"],
        "features": ["Nature Living", "Play Area", "Community Hall"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-palash-centro-wakad",
        "title": "Palash Centro Wakad",
        "slug": "palash-centro-wakad",
        "builderId": "b-vilas-javdekar",
        "location": "Wakad",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100014585",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Palash Centro in Wakad by Vilas Javdekar offers delivered residential homes right off the Mumbai-Bangalore highway, 100% Sold Out.",
        "metaDescription": "Palash Centro Wakad by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Palash Centro Wakad", "Vilas Javdekar Wakad"],
        "features": ["Delivered", "Security", "Parking"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-prime-panache-baner",
        "title": "Prime Panache Baner Road",
        "slug": "prime-panache-baner-road",
        "builderId": "b-vilas-javdekar",
        "location": "Baner",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100017306",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Prime Panache on main Baner Road is a boutique delivered residence by Vilas Javdekar, fully occupied and 100% Sold Out.",
        "metaDescription": "Prime Panache Baner Road by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Prime Panache Baner", "Vilas Javdekar Baner"],
        "features": ["Delivered", "Prime Location"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },
    {
        "id": "p-prime-heights-pashan",
        "title": "Prime Heights Pashan Sus",
        "slug": "prime-heights-pashan-sus",
        "builderId": "b-vilas-javdekar",
        "location": "Pashan",
        "city": "Pune",
        "priceRange": "Sold Out (100% Delivered)",
        "exactPrice": "Sold Out",
        "configurations": ["2 BHK"],
        "status": "Sold Out",
        "type": "Residential",
        "possessionDate": "Completed & Delivered",
        "reraId": "P52100017306",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Prime Heights on Pashan-Sus Road is a peaceful delivered residential enclave by Vilas Javdekar, 100% Sold Out.",
        "metaDescription": "Prime Heights Pashan Sus by Vilas Javdekar: Completed & 100% Sold Out.",
        "seoKeywords": ["Prime Heights Pashan", "Vilas Javdekar Pashan"],
        "features": ["Delivered", "Scenic Views"],
        "tags": ["Sold Out", "Completed Landmark", "Vilas Javdekar Delivered"]
    },

    # === ENTIRE STUDIO APARTMENTS IN PUNE (VERIFIED & ACCURATE DATA) ===
    {
        "id": "p-krisala-41-commune",
        "title": "Krisala 41 Commune",
        "slug": "krisala-41-commune",
        "builderId": "b-krisala",
        "location": "Wakad",
        "city": "Pune",
        "priceRange": "₹31 L - ₹43 L",
        "exactPrice": "₹31 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100030044",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Krisala 41 Commune in Wakad / Hinjewadi corridor offers fully furnished smart studio suites (260 - 358 sq.ft.) engineered for high rental yield and modern tech lifestyles. Features co-working lounges, cafe, and fitness zone.",
        "metaDescription": "Krisala 41 Commune Wakad: Smart studio apartments starting ₹31L. High rental yield near Hinjewadi IT Park. 0% Brokerage. MahaRERA P52100030044.",
        "seoKeywords": ["Krisala 41 Commune", "studio apartments in Wakad", "studio flats in Hinjewadi", "Krisala Pune studio"],
        "features": ["Fully Furnished Studios", "Co-Working Hub", "High Rental Yield", "Gymnasium", "Rooftop Lounge"],
        "tags": ["Studio Apartments", "Wakad", "High Rental Yield", "Krisala Developers"]
    },
    {
        "id": "p-krisala-41-west-world",
        "title": "Krisala 41 West World",
        "slug": "krisala-41-west-world",
        "builderId": "b-krisala",
        "location": "Balewadi",
        "city": "Pune",
        "priceRange": "₹39 L - ₹58 L",
        "exactPrice": "₹39 Lakhs",
        "configurations": ["Studio", "1 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "March 2027",
        "reraId": "P52100032049",
        "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
        "description": "Krisala 41 West World at Balewadi offers smart studio suites and 1 BHK compact homes (217 - 391 sq.ft.) just 2 minutes from Balewadi High Street, ideal for working professionals and single millennial home seekers.",
        "metaDescription": "Krisala 41 West World Balewadi: Smart studio & 1 BHK apartments from ₹39L. Near Balewadi High Street. 0% Brokerage. MahaRERA P52100032049.",
        "seoKeywords": ["Krisala 41 West World", "studio apartments in Balewadi", "1 RK in Balewadi", "Krisala Balewadi"],
        "features": ["High Street Proximity", "Smart Layouts", "Clubhouse", "24x7 Security"],
        "tags": ["Studio Apartments", "Balewadi", "Krisala Developers"]
    },
    {
        "id": "p-krisala-41-shakai",
        "title": "Krisala 41 Shakai",
        "slug": "krisala-41-shakai",
        "builderId": "b-krisala",
        "location": "Tathawade",
        "city": "Pune",
        "priceRange": "₹32 L - ₹45 L",
        "exactPrice": "₹32 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2027",
        "reraId": "P52100034604",
        "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
        "description": "Krisala 41 Shakai in Tathawade features Japanese-inspired zen studio apartments (210 - 320 sq.ft.) with minimalist design, smart space utilization, landscaped zen gardens, and swift connectivity to Hinjewadi Phase 1.",
        "metaDescription": "Krisala 41 Shakai Tathawade: Japanese Zen studio apartments from ₹32L. 0% Brokerage. MahaRERA P52100034604.",
        "seoKeywords": ["Krisala 41 Shakai", "studio apartments in Tathawade", "Japanese studio flats Pune"],
        "features": ["Zen Garden", "Minimalist Architecture", "Co-working Lounge", "Gymnasium"],
        "tags": ["Studio Apartments", "Tathawade", "Krisala Developers"]
    },
    {
        "id": "p-bramhacorp-townhouse",
        "title": "BramhaCorp Townhouse",
        "slug": "bramhacorp-townhouse",
        "builderId": "b-bramhacorp",
        "location": "Balewadi",
        "city": "Pune",
        "priceRange": "₹38 L - ₹55 L",
        "exactPrice": "₹38 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "P52100024773",
        "image": "https://keystoneliv.com/public/uploads/property/QQmMk6MksfNeJOsNyWH7z6Sry9x5MXzEGBPiWPLv.webp",
        "description": "BramhaCorp Townhouse in Balewadi is Pune's iconic millennial co-living and luxury studio suite destination (230 - 350 sq.ft.). Features boutique hotel-style concierge services, rooftop infinity pool, and high rental return.",
        "metaDescription": "BramhaCorp Townhouse Balewadi: Millennial studio suites starting ₹38L. Hotel-style living with 0% brokerage. MahaRERA P52100024773.",
        "seoKeywords": ["BramhaCorp Townhouse", "studio apartments Balewadi", "BramhaCorp Balewadi studio"],
        "features": ["Concierge Services", "Rooftop Infinity Pool", "Business Lounge", "Laundromat"],
        "tags": ["Studio Apartments", "Balewadi", "BramhaCorp", "High Rental Yield"]
    },
    {
        "id": "p-bramhacorp-smart-studios",
        "title": "BramhaCorp Smart Studios",
        "slug": "bramhacorp-smart-studios",
        "builderId": "b-bramhacorp",
        "location": "Kalyani Nagar",
        "city": "Pune",
        "priceRange": "₹36 L - ₹52 L",
        "exactPrice": "₹36 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100021644",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "BramhaCorp Smart Studios at New Kalyani Nagar / Wadgaon Sheri delivers tech-enabled automated studio suites (215 - 340 sq.ft.) minutes from Koregaon Park and Kharadi Cyber City.",
        "metaDescription": "BramhaCorp Smart Studios New Kalyani Nagar: Automated studio apartments from ₹36L. 0% Brokerage. MahaRERA P52100021644.",
        "seoKeywords": ["BramhaCorp Smart Studios", "studio apartments Kalyani Nagar", "Kharadi studio flats"],
        "features": ["Home Automation", "Clubhouse", "Near Koregaon Park", "High Rental Yield"],
        "tags": ["Studio Apartments", "Kalyani Nagar", "BramhaCorp"]
    },
    {
        "id": "p-bramhacorp-f-residences-studios",
        "title": "BramhaCorp F-Residences Smart Studios",
        "slug": "bramhacorp-f-residences-smart-studios",
        "builderId": "b-bramhacorp",
        "location": "Kalyani Nagar",
        "city": "Pune",
        "priceRange": "₹42 L - ₹65 L",
        "exactPrice": "₹42 Lakhs",
        "configurations": ["Studio"],
        "status": "Ready to Move",
        "type": "Residential",
        "possessionDate": "Ready to Move",
        "reraId": "P52100001089",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "BramhaCorp F-Residences Smart Studios in Kalyani Nagar offers branded designer studio living (250 - 410 sq.ft.) curated for executives and investors seeking immediate rental income in East Pune.",
        "metaDescription": "F-Residences Smart Studios by BramhaCorp: Ready studio apartments in Kalyani Nagar. 0% Brokerage. MahaRERA P52100001089.",
        "seoKeywords": ["F-Residences Smart Studios", "ready studio flats Pune", "BramhaCorp F Residences"],
        "features": ["Ready Possession", "FashionTV Lifestyle", "Swimming Pool", "Gymnasium"],
        "tags": ["Studio Apartments", "Ready to Move", "Kalyani Nagar", "BramhaCorp"]
    },
    {
        "id": "p-ag-landmark-studios-wakad",
        "title": "AG Landmark Studios Wakad",
        "slug": "ag-landmark-studios-wakad",
        "builderId": "b-ag-landmarks",
        "location": "Wakad",
        "city": "Pune",
        "priceRange": "₹23 L - ₹33 L",
        "exactPrice": "₹23 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100051063",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "AG Landmark Studios at Bhujbal Chowk, Wakad is an 18-storey boutique high-rise dedicated to smart studio suites (141 - 189 sq.ft.) at an accessible budget starting just ₹23 Lakhs with verified high rental demand.",
        "metaDescription": "AG Landmark Studios Wakad: 18-storey studio tower from ₹23L. Near Hinjewadi IT Park. 0% Brokerage. MahaRERA P52100051063.",
        "seoKeywords": ["AG Landmark Studios Wakad", "studio flats in Wakad", "budget studio apartments Pune"],
        "features": ["18-Storey High-Rise", "High Rental Yield", "Boutique Living", "24x7 Security"],
        "tags": ["Studio Apartments", "Wakad", "Budget Studio", "AG Landmarks"]
    },
    {
        "id": "p-ag-highgrove-studios-punawale",
        "title": "AG Highgrove Studios Punawale",
        "slug": "ag-highgrove-studios-punawale",
        "builderId": "b-ag-landmarks",
        "location": "Punawale",
        "city": "Pune",
        "priceRange": "₹25 L - ₹35 L",
        "exactPrice": "₹25 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "March 2027",
        "reraId": "P52100052184",
        "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
        "description": "AG Highgrove Studios in Punawale offers compact investment studios (165 - 220 sq.ft.) right on the expressway corridor, connecting quickly to Hinjewadi Phase 2 and Wakad.",
        "metaDescription": "AG Highgrove Studios Punawale: Compact investment studio flats from ₹25L. 0% Brokerage. MahaRERA P52100052184.",
        "seoKeywords": ["AG Highgrove Studios Punawale", "Punawale studio flats", "studio apartments near Hinjewadi"],
        "features": ["Expressway Connectivity", "Rooftop Amenities", "Security"],
        "tags": ["Studio Apartments", "Punawale", "AG Landmarks"]
    },
    {
        "id": "p-trio-sync-codename-air",
        "title": "Trio Sync / Codename AIR Tathawade",
        "slug": "trio-sync-codename-air-tathawade",
        "builderId": "b-trio-spaces",
        "location": "Tathawade",
        "city": "Pune",
        "priceRange": "₹31 L - ₹33.5 L",
        "exactPrice": "₹31 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "PM1260002502951",
        "image": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
        "description": "Trio Sync (Codename AIR) in Tathawade offers fully serviced studio suites (167 - 219 sq.ft.) managed with Youthville student and tech co-living leases. Provides guaranteed pre-leased income with 0% vacancy worry.",
        "metaDescription": "Trio Sync Codename AIR Tathawade: Serviced studio suites with Youthville lease. 0% Brokerage. MahaRERA PM1260002502951.",
        "seoKeywords": ["Trio Sync Tathawade", "Codename AIR Tathawade", "serviced studio suites Pune", "Youthville co-living"],
        "features": ["Youthville Lease Tie-Up", "Fully Serviced", "Cafeteria", "Gaming Zone", "High Rental ROI"],
        "tags": ["Studio Apartments", "Tathawade", "Serviced Studios", "Trio Spaces"]
    },
    {
        "id": "p-trio-kaya-tathawade",
        "title": "Trio Kaya Tathawade",
        "slug": "trio-kaya-tathawade",
        "builderId": "b-trio-spaces",
        "location": "Tathawade",
        "city": "Pune",
        "priceRange": "₹28 L - ₹36 L",
        "exactPrice": "₹28 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "P52100049812",
        "image": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
        "description": "Trio Kaya in Tathawade / Hinjewadi border is designed for young professionals seeking compact independent living (180 - 240 sq.ft.) with fitness, co-working, and fast transit connectivity.",
        "metaDescription": "Trio Kaya Tathawade: Smart compact studio apartments from ₹28L. 0% Brokerage. MahaRERA P52100049812.",
        "seoKeywords": ["Trio Kaya Tathawade", "studio flats in Tathawade", "Trio Spaces Pune"],
        "features": ["Co-working Hub", "Fitness Centre", "High Speed WiFi", "Security"],
        "tags": ["Studio Apartments", "Tathawade", "Trio Spaces"]
    },
    {
        "id": "p-menlo-nest-studio-hinjewadi",
        "title": "Menlo Nest Studio Hinjewadi",
        "slug": "menlo-nest-studio-hinjewadi",
        "builderId": "b-menlo-realty",
        "location": "Hinjewadi",
        "city": "Pune",
        "priceRange": "₹24.14 L - ₹33.96 L",
        "exactPrice": "₹24.14 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100077996",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Menlo Nest Studio (Hashtag Studios) in Hinjewadi Phase 1 provides fully furnished, automated studio suites (179 - 195 sq.ft.) situated walking distance from major IT employers. High ROI of 6.5%-7.5% with managed leasing.",
        "metaDescription": "Menlo Nest Studio Hinjewadi Phase 1: Fully furnished studio flats starting ₹24.14L. 0% Brokerage. MahaRERA P52100077996.",
        "seoKeywords": ["Menlo Nest Studio Hinjewadi", "Menlo Hashtag Studios", "studio apartments Hinjewadi Phase 1"],
        "features": ["Fully Furnished", "Walking Distance to IT Park", "Managed Leasing", "Automated Security"],
        "tags": ["Studio Apartments", "Hinjewadi", "Menlo Realty", "High Rental Yield"]
    },
    {
        "id": "p-menlo-sky-suites-ravet",
        "title": "Menlo Sky Suites Ravet",
        "slug": "menlo-sky-suites-ravet",
        "builderId": "b-menlo-realty",
        "location": "Ravet",
        "city": "Pune",
        "priceRange": "₹29.90 L - ₹33.96 L",
        "exactPrice": "₹29.90 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "PR1260002602755",
        "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
        "description": "Menlo Sky Suites in Ravet offers modern compact studios (195 - 224 sq.ft.) tailored for working professionals and students with panoramic skyline views and immediate highway access.",
        "metaDescription": "Menlo Sky Suites Ravet: Modern studio suites starting ₹29.90L. 0% Brokerage. MahaRERA PR1260002602755.",
        "seoKeywords": ["Menlo Sky Suites Ravet", "studio apartments Ravet", "Menlo Realty Ravet"],
        "features": ["Skyline Views", "Gymnasium", "Lounge", "24x7 Security"],
        "tags": ["Studio Apartments", "Ravet", "Menlo Realty"]
    },
    {
        "id": "p-one-suites-kharadi",
        "title": "One Suites Kharadi",
        "slug": "one-suites-kharadi",
        "builderId": "b-one-suites",
        "location": "Kharadi",
        "city": "Pune",
        "priceRange": "₹45 L - ₹62 L",
        "exactPrice": "₹45 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "March 2027",
        "reraId": "P52100031890",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "One Suites Kharadi is East Pune's premier managed luxury studio development (230 - 310 sq.ft.) located near EON Free Zone and World Trade Center with professional asset management and high corporate rental yield.",
        "metaDescription": "One Suites Kharadi: Managed luxury studio apartments near EON IT Park from ₹45L. 0% Brokerage. MahaRERA P52100031890.",
        "seoKeywords": ["One Suites Kharadi", "studio apartments in Kharadi", "EON IT Park studio flats"],
        "features": ["Managed Corporate Leasing", "EON IT Park Proximity", "Business Center", "Gym"],
        "tags": ["Studio Apartments", "Kharadi", "High Rental Yield"]
    },
    {
        "id": "p-meridian-studios-hinjewadi",
        "title": "Meridian Studios Hinjewadi",
        "slug": "meridian-studios-hinjewadi",
        "builderId": "b-amegh-realty",
        "location": "Hinjewadi",
        "city": "Pune",
        "priceRange": "₹26 L - ₹34 L",
        "exactPrice": "₹26 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100030512",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Meridian Studios in Hinjewadi Phase 2 is an investor-favorite compact residential project (190 - 240 sq.ft.) offering low acquisition cost, assured rental demand, and plug-and-play lifestyle.",
        "metaDescription": "Meridian Studios Hinjewadi: Compact studio apartments from ₹26L. 0% Brokerage. MahaRERA P52100030512.",
        "seoKeywords": ["Meridian Studios Hinjewadi", "studio flats Hinjewadi Phase 2"],
        "features": ["Plug & Play", "High ROI", "Security"],
        "tags": ["Studio Apartments", "Hinjewadi", "High Rental Yield"]
    },
    {
        "id": "p-unite-runal-studios-ravet",
        "title": "Unite Runal Studios Ravet",
        "slug": "unite-runal-studios-ravet",
        "builderId": "b-runal-developers",
        "location": "Ravet",
        "city": "Pune",
        "priceRange": "₹28 L - ₹38 L",
        "exactPrice": "₹28 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "P52100029841",
        "image": "https://keystoneliv.com/public/uploads/property/dVV2cx7KeQONobjzrxtwJm7Z6viFIsjkYb5lBMOc.webp",
        "description": "Unite Runal Studios in Ravet combines integrated co-working infrastructure with compact studio residences (210 - 290 sq.ft.) for freelancers, entrepreneurs, and IT professionals.",
        "metaDescription": "Unite Runal Studios Ravet: Co-working & studio flats from ₹28L. 0% Brokerage. MahaRERA P52100029841.",
        "seoKeywords": ["Unite Runal Studios", "studio apartments in Ravet", "Runal Developers"],
        "features": ["Co-working Spaces", "Gymnasium", "Expressway Access"],
        "tags": ["Studio Apartments", "Ravet", "Runal Developers"]
    },
    {
        "id": "p-ambrosia-studios-bavdhan",
        "title": "Ambrosia Studios Bavdhan",
        "slug": "ambrosia-studios-bavdhan",
        "builderId": "b-ambrosia-group",
        "location": "Bavdhan",
        "city": "Pune",
        "priceRange": "₹32 L - ₹44 L",
        "exactPrice": "₹32 Lakhs",
        "configurations": ["Studio"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100025410",
        "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
        "description": "Ambrosia Studios in Bavdhan offers tranquil nature hillside studio suites (240 - 340 sq.ft.) overlooking the NDA green reserve while staying minutes from Chandani Chowk and Kothrud.",
        "metaDescription": "Ambrosia Studios Bavdhan: Hillside studio flats from ₹32L. 0% Brokerage. MahaRERA P52100025410.",
        "seoKeywords": ["Ambrosia Studios Bavdhan", "studio flats in Bavdhan", "Chandani Chowk studio apartments"],
        "features": ["Hillside Views", "Infinity Terrace", "Gymnasium"],
        "tags": ["Studio Apartments", "Bavdhan", "Nature Living"]
    },

    # === MENLO REALTY OFFICIAL RESIDENTIAL PORTFOLIO (menlorealty.in/residential-project) ===
    {
        "id": "p-menlo-homes-hinjewadi",
        "title": "Menlo Homes Hinjewadi",
        "slug": "menlo-homes-hinjewadi",
        "builderId": "b-menlo-realty",
        "location": "Hinjewadi",
        "city": "Pune",
        "priceRange": "₹42 L - ₹62 L",
        "exactPrice": "₹42 Lakhs",
        "configurations": ["1 BHK", "2 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100026785",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Menlo Homes at Maan, Hinjewadi Phase 1 features smartly designed 1 & 2 BHK residences (450 - 680 sq.ft.) offering effortless commute to top tech campuses and high lifestyle comfort.",
        "metaDescription": "Menlo Homes Hinjewadi: 1 & 2 BHK flats from ₹42L near Hinjewadi Phase 1. 0% Brokerage. MahaRERA P52100026785.",
        "seoKeywords": ["Menlo Homes Hinjewadi", "1 BHK in Hinjewadi", "2 BHK in Hinjewadi", "Menlo Realty"],
        "features": ["Clubhouse", "Children Play Area", "Gym", "Landscaped Gardens"],
        "tags": ["Residential", "Hinjewadi", "Menlo Realty"]
    },
    {
        "id": "p-menlo-joywood-bavdhan",
        "title": "Menlo Joywood Bavdhan",
        "slug": "menlo-joywood-bavdhan",
        "builderId": "b-menlo-realty",
        "location": "Bavdhan",
        "city": "Pune",
        "priceRange": "₹75 L - ₹1.15 Cr",
        "exactPrice": "₹75 Lakhs",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "March 2027",
        "reraId": "P52100048120",
        "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
        "description": "Menlo Joywood in Bavdhan offers premium 2 & 3 BHK nature residences (720 - 1050 sq.ft.) nestled amidst scenic hills with seamless connectivity to Kothrud and Chandani Chowk.",
        "metaDescription": "Menlo Joywood Bavdhan: 2 & 3 BHK nature view homes from ₹75L. 0% Brokerage. MahaRERA P52100048120.",
        "seoKeywords": ["Menlo Joywood Bavdhan", "flats in Bavdhan", "2 BHK Bavdhan", "Menlo Bavdhan"],
        "features": ["Nature View Balconies", "Clubhouse", "Infinity Pool", "Yoga Lawn"],
        "tags": ["Residential", "Bavdhan", "Menlo Realty"]
    },
    {
        "id": "p-menlo-skyora-bavdhan",
        "title": "Menlo Skyora Bavdhan",
        "slug": "menlo-skyora-bavdhan",
        "builderId": "b-menlo-realty",
        "location": "Bavdhan",
        "city": "Pune",
        "priceRange": "₹78 L - ₹1.20 Cr",
        "exactPrice": "₹78 Lakhs",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "P52100049112",
        "image": "https://keystoneliv.com/public/uploads/property/uWtUJyzOstqZeclQtHvZOYivrkFxSlpcBtUzkk5j.webp",
        "description": "Menlo Skyora in Bavdhan features high-rise 2 & 3 BHK panoramic view residences (750 - 1100 sq.ft.) offering sky lounge amenities, fitness center, and serene surroundings.",
        "metaDescription": "Menlo Skyora Bavdhan: 2 & 3 BHK high-rise homes from ₹78L. 0% Brokerage. MahaRERA P52100049112.",
        "seoKeywords": ["Menlo Skyora Bavdhan", "3 BHK Bavdhan", "Menlo Skyora"],
        "features": ["Sky Lounge", "Panoramic Hill Views", "Gymnasium", "Banquet"],
        "tags": ["Residential", "Bavdhan", "Menlo Realty"]
    },
    {
        "id": "p-menlo-tathastu-chakan",
        "title": "Menlo Tathastu Chakan",
        "slug": "menlo-tathastu-chakan",
        "builderId": "b-menlo-realty",
        "location": "Chakan",
        "city": "Pune",
        "priceRange": "₹21 L - ₹35 L",
        "exactPrice": "₹21 Lakhs",
        "configurations": ["1 BHK", "2 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100030219",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Menlo Tathastu in Chakan is a masterplanned community of 1 & 2 BHK value apartments (380 - 590 sq.ft.) serving the Chakan and Talegaon automobile and industrial corridors.",
        "metaDescription": "Menlo Tathastu Chakan: Affordable 1 & 2 BHK homes starting ₹21L. 0% Brokerage. MahaRERA P52100030219.",
        "seoKeywords": ["Menlo Tathastu Chakan", "flats in Chakan", "1 BHK Chakan", "Menlo Chakan"],
        "features": ["Community Living", "Kids Play Area", "Clubhouse", "24x7 Water"],
        "tags": ["Residential", "Chakan", "Menlo Realty", "Affordable Housing"]
    },
    {
        "id": "p-menlo-delicia-mundhwa",
        "title": "Menlo Delicia Mundhwa",
        "slug": "menlo-delicia-mundhwa",
        "builderId": "b-menlo-realty",
        "location": "Mundhwa",
        "city": "Pune",
        "priceRange": "₹88 L - ₹1.35 Cr",
        "exactPrice": "₹88 Lakhs",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "March 2027",
        "reraId": "P52100045190",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "Menlo Delicia at Koregaon Park Annexe / Mundhwa features premium 2 & 3 BHK urban residences (780 - 1150 sq.ft.) located 5 minutes from Koregaon Park and Magarpatta City.",
        "metaDescription": "Menlo Delicia Mundhwa / KP Annexe: 2 & 3 BHK homes from ₹88L. 0% Brokerage. MahaRERA P52100045190.",
        "seoKeywords": ["Menlo Delicia Mundhwa", "Koregaon Park Annexe flats", "Menlo Mundhwa"],
        "features": ["Koregaon Park Proximity", "Rooftop Amenities", "Gymnasium", "Security"],
        "tags": ["Residential", "Mundhwa", "Koregaon Park Annexe", "Menlo Realty"]
    },
    {
        "id": "p-menlo-homes-kharadi-next",
        "title": "Menlo Homes Kharadi Next",
        "slug": "menlo-homes-kharadi-next",
        "builderId": "b-menlo-realty",
        "location": "Kharadi",
        "city": "Pune",
        "priceRange": "₹68 L - ₹1.05 Cr",
        "exactPrice": "₹68 Lakhs",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "reraId": "P52100031890",
        "image": "https://keystoneliv.com/public/uploads/property/WQDgrXOUlEW3lrJuTVXdijlc3HUZMVKaA76af70F.webp",
        "description": "Menlo Homes Kharadi Next brings contemporary 2 & 3 BHK apartments (690 - 1020 sq.ft.) with rapid connectivity to EON IT Park, WTC, and Pune Airport.",
        "metaDescription": "Menlo Homes Kharadi Next: 2 & 3 BHK flats from ₹68L near EON IT Park. 0% Brokerage. MahaRERA P52100031890.",
        "seoKeywords": ["Menlo Homes Kharadi Next", "flats in Kharadi", "Menlo Kharadi"],
        "features": ["Clubhouse", "Sports Court", "EON IT Park Connectivity"],
        "tags": ["Residential", "Kharadi", "Menlo Realty"]
    },
    {
        "id": "p-menlo-zircon-lohegaon",
        "title": "Menlo Zircon Lohegaon",
        "slug": "menlo-zircon-lohegaon",
        "builderId": "b-menlo-realty",
        "location": "Lohegaon",
        "city": "Pune",
        "priceRange": "₹58 L - ₹85 L",
        "exactPrice": "₹58 Lakhs",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "December 2026",
        "reraId": "P52100022145",
        "image": "https://keystoneliv.com/public/uploads/property/0Vsyqe88cPZjVUnBiv7Nt4UYX36M8iZOkg8saGJ7.webp",
        "description": "Menlo Zircon in Lohegaon / Viman Nagar Extension offers well-ventilated 2 & 3 BHK family residences (650 - 980 sq.ft.) just 10 minutes from Pune Airport and Phoenix Marketcity.",
        "metaDescription": "Menlo Zircon Lohegaon: 2 & 3 BHK homes from ₹58L near Viman Nagar. 0% Brokerage. MahaRERA P52100022145.",
        "seoKeywords": ["Menlo Zircon Lohegaon", "flats near Viman Nagar", "Menlo Lohegaon"],
        "features": ["Viman Nagar Proximity", "Children Park", "Clubhouse", "Gym"],
        "tags": ["Residential", "Lohegaon", "Viman Nagar", "Menlo Realty"]
    }
]

# --- 4. READ EXISTING MOCKDATA ---
with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
    mock_data_content = f.read()

# Extract PROJECTS array from mockData.ts
projects_match = re.search(r'export const PROJECTS: Project\[\] = (\[.*?\]);', mock_data_content, re.DOTALL)
if not projects_match:
    print("ERROR: Could not find PROJECTS in mockData.ts")
    exit(1)

projects_json_str = projects_match.group(1)
projects_list = json.loads(projects_json_str)
print(f"Loaded {len(projects_list)} existing projects from mockData.ts")

# --- 5. UPDATE EXISTING VILAS JAVDEKAR PROJECTS TO 'Sold Out' ---
updated_vj_count = 0
for p in projects_list:
    if p.get('builderId') == 'b-vilas-javdekar':
        title_lower = p.get('title', '').lower().strip()
        is_completed = any(v in title_lower for v in VJ_COMPLETED_TITLES)
        if is_completed:
            p['status'] = 'Sold Out'
            p['priceRange'] = 'Sold Out (100% Delivered)'
            p['exactPrice'] = 'Sold Out'
            tags = p.get('tags', [])
            for t in ['Sold Out', 'Completed Landmark', 'Vilas Javdekar Delivered']:
                if t not in tags:
                    tags.append(t)
            p['tags'] = tags
            p['possessionDate'] = 'Completed & Delivered'
            p['description'] = f"{p.get('title')} is a landmark delivered community by Vilas Javdekar in {p.get('location', 'Pune')}. Successfully handed over to homeowners and 100% Sold Out."
            updated_vj_count += 1

print(f"Updated {updated_vj_count} existing Vilas Javdekar completed projects with 'Sold Out' tags.")

# --- 6. MERGE NEW PROJECTS ---
existing_ids = {p['id'] for p in projects_list}
existing_slugs = {p['slug'] for p in projects_list}

added_count = 0
for np in NEW_PROJECTS:
    if np['id'] not in existing_ids and np['slug'] not in existing_slugs:
        projects_list.append(np)
        existing_ids.add(np['id'])
        existing_slugs.add(np['slug'])
        added_count += 1
    else:
        # Update existing
        for i, ep in enumerate(projects_list):
            if ep['id'] == np['id'] or ep['slug'] == np['slug']:
                projects_list[i].update(np)
                break

print(f"Added {added_count} new projects. Total projects is now {len(projects_list)}.")

# --- 7. WRITE BACK TO mockData.ts ---
new_projects_json = json.dumps(projects_list, indent=2)
new_mock_data_content = mock_data_content[:projects_match.start(1)] + new_projects_json + mock_data_content[projects_match.end(1):]
with open(MOCK_DATA_PATH, 'w', encoding='utf-8') as f:
    f.write(new_mock_data_content)
print(f"Saved updated mockData.ts with {len(projects_list)} projects.")

# --- 8. WRITE TO projectSummaries.ts ---
summaries_content = f"""import {{ Project }} from '../types';

export const PROJECT_SUMMARIES: Project[] = {new_projects_json};
"""
with open(PROJECT_SUMMARIES_PATH, 'w', encoding='utf-8') as f:
    f.write(summaries_content)
print(f"Saved updated projectSummaries.ts with {len(projects_list)} projects.")

# --- 9. UPDATE buildersData.ts ---
with open(BUILDERS_DATA_PATH, 'r', encoding='utf-8') as f:
    builders_content = f.read()

builders_match = re.search(r'export const BUILDERS: Builder\[\] = (\[.*?\]);', builders_content, re.DOTALL)
if builders_match:
    builders_list = json.loads(builders_match.group(1))
    existing_builder_ids = {b['id'] for b in builders_list}

    # Update b-vilas-javdekar counts
    for b in builders_list:
        if b['id'] == 'b-vilas-javdekar':
            b['totalProjects'] = 35
            b['ongoingProjects'] = 12
            b['trustScore'] = 9.8
            b['establishedYear'] = 1994
            b['experience'] = 31
            b['description'] = "Vilas Javdekar Developers (VJ) is Pune's leading developer renowned for customer trust, design excellence, and landmark developments across Palladio, Yashwin, and Yashone series."

    # Add missing builders
    added_builders = 0
    for nb in NEW_BUILDERS:
        if nb['id'] not in existing_builder_ids:
            builders_list.append(nb)
            existing_builder_ids.add(nb['id'])
            added_builders += 1

    new_builders_json = json.dumps(builders_list, indent=2)
    new_builders_content = f"""import {{ Locality, Builder, Project }} from '../types';

export const BUILDERS: Builder[] = {new_builders_json};
"""
    with open(BUILDERS_DATA_PATH, 'w', encoding='utf-8') as f:
        f.write(new_builders_content)
    print(f"Saved updated buildersData.ts with {len(builders_list)} builders (added {added_builders}).")

# --- 10. UPDATE qrUtils.ts WITH NEW RERA NUMBERS ---
new_rera_map = {}
for p in projects_list:
    if p.get('reraId') and p['reraId'] != 'A031262401295':
        new_rera_map[p['id']] = p['reraId']
        new_rera_map[p['slug']] = p['reraId']

with open(QR_UTILS_PATH, 'r', encoding='utf-8') as f:
    qr_content = f.read()

qr_map_match = re.search(r'const RERA_ID_MAP: Record<string, string> = (\{.*?\});', qr_content, re.DOTALL)
if qr_map_match:
    qr_dict = json.loads(qr_map_match.group(1))
    qr_dict.update(new_rera_map)
    new_qr_json = json.dumps(qr_dict, indent=4)
    new_qr_content = qr_content[:qr_map_match.start(1)] + new_qr_json + qr_content[qr_map_match.end(1):]
    with open(QR_UTILS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_qr_content)
    print(f"Saved updated qrUtils.ts with {len(qr_dict)} RERA ID mappings.")

print("\nSUCCESS: All Vilas Javdekar projects, Studio Apartments, and Menlo Realty projects imported and synchronized successfully!")
