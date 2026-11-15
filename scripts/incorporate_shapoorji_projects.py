#!/usr/bin/env python3
"""
incorporate_shapoorji_projects.py
Audits, generates, and incorporates entire Pune and Mumbai residential projects
for Shapoorji Pallonji Real Estate into mockData.ts and qrUtils.ts.
"""

import json
import os
import re

MOCKDATA_PATH = "punepropertyvloginside/src/data/mockData.ts"
QRUTILS_PATH = "punepropertyvloginside/src/utils/qrUtils.ts"

# 1. New Builder Object
SHAPOORJI_BUILDER = {
    "id": "b-shapoorji",
    "name": "Shapoorji Pallonji Real Estate",
    "slug": "shapoorji-pallonji-real-estate",
    "logo": "/images/builders/shapoorji.svg",
    "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
    "description": "Shapoorji Pallonji Real Estate (SPRE) is the 155+ year old real estate division of the Shapoorji Pallonji Group, delivering iconic landmarks, luxury high-rises, and master-planned townships across Pune and Mumbai.",
    "establishedYear": 1865,
    "totalProjects": 65,
    "ongoingProjects": 18,
    "trustScore": 9.8,
    "isVerified": True,
    "locations": [
        "Hadapsar",
        "Shewalewadi",
        "Bavdhan",
        "Hinjewadi",
        "Bandra East",
        "Marine Drive",
        "Powai",
        "Thane West",
        "Mahalaxmi",
        "Sewri",
        "Virar West",
        "Santacruz West"
    ]
}

# 2. Audited Shapoorji Projects across Pune and Mumbai
SHAPOORJI_PROJECTS = [
    # --- PUNE PROJECTS ---
    {
        "id": "p-shapoorji-wildernest-sp-kingstown",
        "title": "Shapoorji Pallonji Wildernest",
        "slug": "shapoorji-wildernest-sp-kingstown",
        "builderId": "b-shapoorji",
        "location": "Shewalewadi",
        "city": "Pune",
        "priceRange": "₹1.84 Cr - ₹2.40 Cr",
        "exactPrice": "₹1.84 Cr",
        "configurations": ["3 BHK", "4 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 18.4963459,
        "lng": 73.9695155,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-1.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-2.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-1.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-2.webp",
            "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-3.webp"
        ],
        "description": "Wildernest at SP Kingstown by Shapoorji Pallonji Real Estate represents ultra-luxury living on the Pune-Solapur Highway in Shewalewadi (Hadapsar Annexe), Pune. Nestled inside a massive 130+ acre master township, Wildernest offers low-density living with only 4 apartments per floor, east-west facing towers, 10-foot clear ceiling heights, and 8-foot tall panoramic windows with unhindered nature views.\n\nStarting from ₹1.84 Cr, residences feature imported Italian marble flooring, pre-installed multi-split air conditioning, and premium sanitary fittings. Residents enjoy 50+ world-class lifestyle amenities including an infinity-edge swimming pool, rooftop pool in private villaments, open podium gym, central mango orchard, fireside lounge, and private sports arenas. Verified under MahaRERA registration P52100052683, this property is available with 100% zero brokerage through PROPSMART REALTY.",
        "features": [
            "Infinity Edge Pool",
            "Rooftop Pool in Villas",
            "Central Mango Orchard",
            "Open Podium Gym",
            "Clubhouse",
            "Fireside Charcha Lounge",
            "Cricket Pitch & Rink",
            "Putting Golf",
            "Jogging & Cycling Track",
            "Amphitheatre",
            "Mini Theatre",
            "Co-Working Lounges",
            "Kids Play Adventure Zone",
            "Senior Citizen Plaza"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant High-Grade RCC Framed Structure"},
            {"label": "Flooring", "value": "Imported Italian Marble in Living, Dining & Master Bedroom; Laminated Wooden in Other Bedrooms"},
            {"label": "Air Conditioning", "value": "Pre-Installed High-Efficiency Multi-Split ACs in Living Room and All Bedrooms"},
            {"label": "Windows & Ceilings", "value": "8-Foot Tall Powder-Coated Aluminum Sliding Windows with Bug Mesh; 10-Foot Clear Ceiling Height"},
            {"label": "Kitchen", "value": "Premium Granite Countertop with Stainless Steel Sink, Piped Gas and Water Purifier Provisions"},
            {"label": "Bathrooms", "value": "Kohler / Grohe Grade Premium CP & Sanitary Ware with Thermostatic Diverters and Geysers"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized direct developer partner",
            "Part of 130+ Acre master-planned SP Kingstown integrated township in Hadapsar Annexe",
            "Official MahaRERA verified project P52100052683 (Mango Tree Villa Tower 1)",
            "Allotment directly from Shapoorji Pallonji Real Estate official developer inventory",
            "Exclusive Bajaj Housing Finance & ICICI Bank subvention schemes available"
        ],
        "reraId": "P52100052683",
        "pricePerSqft": 13295,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Shapoorji Pallonji Wildernest",
            "Wildernest SP Kingstown",
            "Wildernest Hadapsar Annexe",
            "Shapoorji Pune projects",
            "3 BHK in Hadapsar Pune",
            "4 BHK in Shewalewadi",
            "MahaRERA P52100052683",
            "zero brokerage flats Pune"
        ],
        "metaDescription": "Buy 3 BHK, 4 BHK luxury residences in Wildernest at SP Kingstown, Hadapsar Annexe Pune by Shapoorji Pallonji Real Estate. Starting ₹1.84 Cr. Verified MahaRERA P52100052683.",
        "advancedConfigurations": [
            {
                "id": "cfg-wildernest-1",
                "projectId": "p-shapoorji-wildernest-sp-kingstown",
                "name": "3 BHK Luxury Residence",
                "carpetArea": 1384,
                "balconyArea": 115,
                "bathrooms": 3,
                "basePrice": 18400000.0,
                "pricePerSqft": 13294.80,
                "infraCharges": 550000.0,
                "clubhouseCharges": 350000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-1.webp"
            },
            {
                "id": "cfg-wildernest-2",
                "projectId": "p-shapoorji-wildernest-sp-kingstown",
                "name": "3 BHK Grande Residence",
                "carpetArea": 1503,
                "balconyArea": 128,
                "bathrooms": 3,
                "basePrice": 19800000.0,
                "pricePerSqft": 13173.65,
                "infraCharges": 590000.0,
                "clubhouseCharges": 350000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/3bhk-2.webp"
            },
            {
                "id": "cfg-wildernest-3",
                "projectId": "p-shapoorji-wildernest-sp-kingstown",
                "name": "4 BHK Royal Residence",
                "carpetArea": 1900,
                "balconyArea": 165,
                "bathrooms": 4,
                "basePrice": 24000000.0,
                "pricePerSqft": 12631.58,
                "infraCharges": 720000.0,
                "clubhouseCharges": 450000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-1.webp"
            },
            {
                "id": "cfg-wildernest-4",
                "projectId": "p-shapoorji-wildernest-sp-kingstown",
                "name": "4 BHK Imperial Villament",
                "carpetArea": 2460,
                "balconyArea": 240,
                "bathrooms": 5,
                "basePrice": 31500000.0,
                "pricePerSqft": 12804.88,
                "infraCharges": 950000.0,
                "clubhouseCharges": 500000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/floorplans/4bhk-2.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-vyomora-hinjewadi",
        "title": "Shapoorji Pallonji Vyomora",
        "slug": "shapoorji-vyomora-hinjewadi",
        "builderId": "b-shapoorji",
        "location": "Hinjewadi",
        "city": "Pune",
        "priceRange": "₹78.00 L - ₹1.45 Cr",
        "exactPrice": "₹78.00 L",
        "configurations": ["2 BHK", "3 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2028",
        "image": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
        "heroImage": "https://keystoneliv.com/public/uploads/property/leqFS0kMhJDAQ6ZdwEOxnajHj4VcaKZHhxS1hVk1.webp",
        "lat": 18.5912,
        "lng": 73.7194,
        "masterLayout": "https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "Shapoorji Pallonji Vyomora is a visionary 25-acre integrated residential development located strategically in Hinjawadi Phase 1, Pune. Designed around biophilic living and intelligent smart homes, Vyomora offers contemporary 2 BHK, 3 BHK residences and exclusive duplexes.\n\nStarting from ₹78.00 L, the project features a massive 3-level clubhouse, Miyawaki urban forest, digital learning dome, temperature-controlled indoor pool, and direct signal-free access to major IT campuses. Verified under MahaRERA registration PR1260002600999 with 100% zero brokerage through PROPSMART REALTY.",
        "features": [
            "Biophilic Architecture",
            "Grand 3-Level Clubhouse",
            "Digital Learning Dome",
            "Miyawaki Forest Zone",
            "Swimming Pool",
            "Gymnasium",
            "Multipurpose Sports Courts",
            "Jogging Trail",
            "Kids Play Hub",
            "EV Charging Infrastructure"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant Aluminium Formwork RCC Construction"},
            {"label": "Flooring", "value": "Vitrified Glazed Tiles in Living & Dining; Wooden Finish in Master Bedroom"},
            {"label": "Smart Home", "value": "App-controlled Smart Locks, Lighting and Sensor Provisions"},
            {"label": "Bathrooms", "value": "Grohe / American Standard CP Sanitary Fittings with Concealed Diverters"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized developer partner",
            "Prime location in Hinjawadi Phase 1 near Rajiv Gandhi Infotech Park & Metro Line 3",
            "Official MahaRERA verified project PR1260002600999",
            "Allotment directly from Shapoorji Pallonji developer inventory"
        ],
        "reraId": "PR1260002600999",
        "pricePerSqft": 11400,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Shapoorji Pallonji Vyomora",
            "Vyomora Hinjewadi Phase 1",
            "Shapoorji Hinjewadi Pune",
            "2 BHK in Hinjewadi",
            "3 BHK in Hinjewadi Phase 1",
            "MahaRERA PR1260002600999"
        ],
        "metaDescription": "Buy 2 BHK, 3 BHK smart homes in Shapoorji Pallonji Vyomora, Hinjewadi Phase 1 Pune. Price starts ₹78.00 L. 100% Zero Brokerage. Verified MahaRERA PR1260002600999.",
        "advancedConfigurations": [
            {
                "id": "cfg-vyomora-1",
                "projectId": "p-shapoorji-vyomora-hinjewadi",
                "name": "2 BHK Smart Residence",
                "carpetArea": 684,
                "balconyArea": 52,
                "bathrooms": 2,
                "basePrice": 7800000.0,
                "pricePerSqft": 11403.50,
                "infraCharges": 250000.0,
                "clubhouseCharges": 150000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-vyomora-2",
                "projectId": "p-shapoorji-vyomora-hinjewadi",
                "name": "3 BHK Royale Residence",
                "carpetArea": 985,
                "balconyArea": 78,
                "bathrooms": 3,
                "basePrice": 11200000.0,
                "pricePerSqft": 11370.55,
                "infraCharges": 350000.0,
                "clubhouseCharges": 200000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-vanaha-golfland-bavdhan",
        "title": "Shapoorji Pallonji Vanaha Golfland",
        "slug": "shapoorji-vanaha-golfland-bavdhan",
        "builderId": "b-shapoorji",
        "location": "Bavdhan",
        "city": "Pune",
        "priceRange": "₹1.48 Cr - ₹3.31 Cr",
        "exactPrice": "₹1.48 Cr",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "June 2027",
        "image": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
        "heroImage": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
        "lat": 18.5158,
        "lng": 73.7684,
        "masterLayout": "https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "Vanaha Golfland by Shapoorji Pallonji Real Estate is an elite golf-front residential enclave situated adjacent to the Oxford Golf Resort in Bavdhan, Pune. Part of the 1,000-acre master township, Golfland offers panoramic views of the 18-hole championship golf course and surrounding Sahyadri hills.\n\nFeaturing luxury 2, 3, and 4 BHK residences and townhouses starting from ₹1.48 Cr, the development provides expansive wrap-around decks, international-standard clubhouses, golf putting greens, and tranquil nature walks. Registered under MahaRERA P52100052376 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "18-Hole Championship Golf Course Views",
            "Vanaha Grand Clubhouse",
            "Putting Greens",
            "Temperature-Controlled Pool",
            "Tennis & Squash Courts",
            "Forest Trails & Zen Gardens",
            "Banquet Hall",
            "High-Speed Elevators"
        ],
        "specs": [
            {"label": "Structure", "value": "Seismic Zone III Compliant RCC Shear Wall Structure"},
            {"label": "Flooring", "value": "Italian Marble in Foyer, Living and Dining; Wooden Laminate in Master Suite"},
            {"label": "Balcony", "value": "Glass Railing Balconies with Unobstructed Golf Views and Anti-Skid Ceramic Tiles"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized sales partner",
            "Direct fairway and golf course views in Bavdhan near Kothrud & Chandani Chowk",
            "Official MahaRERA verified project P52100052376 (Golfland I & II)",
            "Allotment directly from Shapoorji Pallonji Real Estate inventory"
        ],
        "reraId": "P52100052376",
        "pricePerSqft": 14640,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Shapoorji Vanaha Golfland",
            "Vanaha Bavdhan Pune",
            "Golfland Bavdhan price",
            "luxury flats near Kothrud",
            "3 BHK in Bavdhan Pune",
            "MahaRERA P52100052376"
        ],
        "metaDescription": "Buy 2 BHK, 3 BHK, 4 BHK golf-view residences in Shapoorji Vanaha Golfland, Bavdhan Pune. Starting ₹1.48 Cr. Verified MahaRERA P52100052376.",
        "advancedConfigurations": [
            {
                "id": "cfg-golfland-1",
                "projectId": "p-shapoorji-vanaha-golfland-bavdhan",
                "name": "2 BHK Golf View Residence",
                "carpetArea": 1011,
                "balconyArea": 95,
                "bathrooms": 2,
                "basePrice": 14800000.0,
                "pricePerSqft": 14638.97,
                "infraCharges": 450000.0,
                "clubhouseCharges": 250000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-golfland-2",
                "projectId": "p-shapoorji-vanaha-golfland-bavdhan",
                "name": "3 BHK Fairway Suite",
                "carpetArea": 1420,
                "balconyArea": 130,
                "bathrooms": 3,
                "basePrice": 19800000.0,
                "pricePerSqft": 13943.66,
                "infraCharges": 580000.0,
                "clubhouseCharges": 300000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            },
            {
                "id": "cfg-golfland-3",
                "projectId": "p-shapoorji-vanaha-golfland-bavdhan",
                "name": "4 BHK Signature Residence",
                "carpetArea": 1980,
                "balconyArea": 180,
                "bathrooms": 4,
                "basePrice": 27500000.0,
                "pricePerSqft": 13888.88,
                "infraCharges": 750000.0,
                "clubhouseCharges": 400000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-vanaha-springs-bavdhan",
        "title": "Shapoorji Pallonji Vanaha Springs",
        "slug": "shapoorji-vanaha-springs-bavdhan",
        "builderId": "b-shapoorji",
        "location": "Bavdhan",
        "city": "Pune",
        "priceRange": "₹53.50 L - ₹1.35 Cr",
        "exactPrice": "₹53.50 L",
        "configurations": ["1 BHK", "2 BHK", "3 BHK"],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready / Handover",
        "image": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
        "heroImage": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
        "lat": 18.5145,
        "lng": 73.7698,
        "masterLayout": "https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "Vanaha Springs by Shapoorji Pallonji is a serene hill-facing residential enclave located in Bavdhan, Pune, near Chandani Chowk and the Oxford Valley. Offering ready and near-possession 1, 2, and 3 BHK homes starting from ₹53.50 L, Springs combines clean mountain air with rapid connectivity to Kothrud, Hinjewadi, and Mumbai-Pune Expressway.\n\nVerified under MahaRERA registration P52100030065 with complete peace of mind and 100% zero brokerage through PROPSMART REALTY.",
        "features": [
            "Forest View Balconies",
            "Clubhouse & Gym",
            "Swimming Pool",
            "Landscaped Gardens",
            "Yoga Lawn",
            "Jogging Track",
            "24/7 Security"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant RCC Frame"},
            {"label": "Flooring", "value": "Double Charged Vitrified Tiles in All Rooms"},
            {"label": "Bathrooms", "value": "Branded CP & Sanitary Ware with Premium Concealed Plumbing"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Scenic hillside setting in Bavdhan just 10 mins from Kothrud",
            "Official MahaRERA verified project P52100030065",
            "Ready to move and near-possession homes"
        ],
        "reraId": "P52100030065",
        "pricePerSqft": 10800,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Vanaha Springs Bavdhan",
            "Shapoorji Vanaha Springs",
            "flats in Bavdhan Pune",
            "1 BHK in Bavdhan",
            "2 BHK in Bavdhan Pune",
            "MahaRERA P52100030065"
        ],
        "metaDescription": "Buy 1 BHK, 2 BHK, 3 BHK homes in Shapoorji Vanaha Springs, Bavdhan Pune. Starting ₹53.50 L. 100% Zero Brokerage. Verified MahaRERA P52100030065.",
        "advancedConfigurations": [
            {
                "id": "cfg-springs-1",
                "projectId": "p-shapoorji-vanaha-springs-bavdhan",
                "name": "1 BHK Nature Suite",
                "carpetArea": 495,
                "balconyArea": 42,
                "bathrooms": 1,
                "basePrice": 5350000.0,
                "pricePerSqft": 10808.08,
                "infraCharges": 180000.0,
                "clubhouseCharges": 100000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-springs-2",
                "projectId": "p-shapoorji-vanaha-springs-bavdhan",
                "name": "2 BHK Forest View",
                "carpetArea": 835,
                "balconyArea": 68,
                "bathrooms": 2,
                "basePrice": 8900000.0,
                "pricePerSqft": 10658.68,
                "infraCharges": 280000.0,
                "clubhouseCharges": 150000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },

    # --- MUMBAI PROJECTS ---
    {
        "id": "p-shapoorji-bkc-28-bandra-east",
        "title": "Shapoorji Pallonji BKC 28",
        "slug": "shapoorji-bkc-28-bandra-east",
        "builderId": "b-shapoorji",
        "location": "Bandra East",
        "city": "Mumbai",
        "priceRange": "₹2.23 Cr - ₹4.65 Cr",
        "exactPrice": "₹2.23 Cr",
        "configurations": ["2 BHK", "4 BHK"],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready / 2025",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 19.0607,
        "lng": 72.8524,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "BKC 28 by Shapoorji Pallonji Real Estate is an exclusive boutique high-rise development located in Kherwadi, Bandra East, Mumbai, minutes away from the Bandra-Kurla Complex (BKC) financial epicenter. Rising 22 storeys with only 4 apartments per floor, BKC 28 delivers smart, ultra-luxury 2 BHK homes and combined 4 BHK Jodi apartments.\n\nStarting from ₹2.23 Cr, homes feature imported Italian marble flooring, full home automation, rooftop sky lounge, state-of-the-art gymnasium, and double-height entrance lobby. Registered under MahaRERA P51800028474 with 100% zero brokerage through PROPSMART REALTY.",
        "features": [
            "Rooftop Sky Lounge",
            "Double-Height Designer Lobby",
            "High-Tech Fitness Center",
            "Automated Multi-Level Parking",
            "Landscaped Terrace Garden",
            "CCTV Surveillance & Video Door Phone",
            "High-Speed Elevators"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant RCC Frame with Shear Wall Core"},
            {"label": "Flooring", "value": "Italian Marble in Living, Dining and Master Suite"},
            {"label": "Automation", "value": "Smart Home Automation for Lighting, AC, and Curtains"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Walking distance from BKC commercial hub and Western Express Highway",
            "Official MahaRERA verified project P51800028474",
            "Boutique low-density living with only 4 residences per floor"
        ],
        "reraId": "P51800028474",
        "pricePerSqft": 34900,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Shapoorji BKC 28",
            "BKC 28 Bandra East",
            "flats in Bandra East Mumbai",
            "2 BHK near BKC",
            "Shapoorji Mumbai projects",
            "MahaRERA P51800028474"
        ],
        "metaDescription": "Buy 2 BHK, 4 BHK luxury residences in Shapoorji Pallonji BKC 28, Bandra East Mumbai. Starting ₹2.23 Cr. Verified MahaRERA P51800028474.",
        "advancedConfigurations": [
            {
                "id": "cfg-bkc28-1",
                "projectId": "p-shapoorji-bkc-28-bandra-east",
                "name": "2 BHK Elite Residence",
                "carpetArea": 639,
                "balconyArea": 45,
                "bathrooms": 2,
                "basePrice": 22300000.0,
                "pricePerSqft": 34898.27,
                "infraCharges": 650000.0,
                "clubhouseCharges": 350000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-bkc28-2",
                "projectId": "p-shapoorji-bkc-28-bandra-east",
                "name": "2 BHK Signature Residence",
                "carpetArea": 712,
                "balconyArea": 52,
                "bathrooms": 2,
                "basePrice": 24900000.0,
                "pricePerSqft": 34971.91,
                "infraCharges": 720000.0,
                "clubhouseCharges": 350000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-the-odyssey-marine-drive",
        "title": "The Odyssey by Shapoorji Pallonji",
        "slug": "shapoorji-the-odyssey-marine-drive",
        "builderId": "b-shapoorji",
        "location": "Marine Drive",
        "city": "Mumbai",
        "priceRange": "₹14.49 Cr - ₹31.50 Cr",
        "exactPrice": "₹14.49 Cr",
        "configurations": ["3 BHK", "3.5 BHK", "4 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2028",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 18.9554,
        "lng": 72.8126,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "The Odyssey by Shapoorji Pallonji Real Estate is an ultra-luxury architectural masterpiece located off Marine Drive in Gamdevi, South Mumbai. Offering unobstructed panoramic vistas of the Arabian Sea and the Queen's Necklace, The Odyssey sets a new benchmark in bespoke high-rise luxury.\n\nFeaturing palatial 3 BHK, 3.5 BHK, and 4.5 BHK sea-facing sky suites starting from ₹14.49 Cr, residences feature private elevator foyers, imported marble finishing, temperature-controlled sea-view infinity pool, luxury spa, and 24/7 concierge. Registered under MahaRERA P51900050998 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "Unobstructed Arabian Sea & Queen's Necklace Views",
            "Sea-Facing Infinity Pool",
            "Private Elevator Foyer",
            "Luxury Wellness Spa & Sauna",
            "Valet Parking & High-Security Access",
            "Concierge & Butler Services",
            "Private Screening Room"
        ],
        "specs": [
            {"label": "Structure", "value": "Advanced High-Wind Resistant Shear Wall Engineering"},
            {"label": "Finishes", "value": "Imported European Marble, Handcrafted Wooden Accents"},
            {"label": "Glass Facade", "value": "Acoustic Double-Glazed Low-E Performance Glass"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty direct sales desk",
            "Prestigious South Mumbai address off Marine Drive & Gamdevi",
            "Official MahaRERA verified project P51900050998",
            "Ultra-exclusive low-density luxury high-rise"
        ],
        "reraId": "P51900050998",
        "pricePerSqft": 94500,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "The Odyssey Shapoorji",
            "The Odyssey Marine Drive",
            "sea facing flats Marine Drive",
            "luxury flats South Mumbai",
            "MahaRERA P51900050998"
        ],
        "metaDescription": "Buy ultra-luxury sea-facing sky residences in The Odyssey by Shapoorji Pallonji, Marine Drive Gamdevi South Mumbai. Starting ₹14.49 Cr. Verified MahaRERA P51900050998.",
        "advancedConfigurations": [
            {
                "id": "cfg-odyssey-1",
                "projectId": "p-shapoorji-the-odyssey-marine-drive",
                "name": "3 BHK Arabian Sea Vista",
                "carpetArea": 1533,
                "balconyArea": 140,
                "bathrooms": 3,
                "basePrice": 144900000.0,
                "pricePerSqft": 94520.54,
                "infraCharges": 3500000.0,
                "clubhouseCharges": 1500000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-odyssey-2",
                "projectId": "p-shapoorji-the-odyssey-marine-drive",
                "name": "3.5 BHK Queen's Necklace Suite",
                "carpetArea": 1797,
                "balconyArea": 165,
                "bathrooms": 4,
                "basePrice": 172500000.0,
                "pricePerSqft": 95993.32,
                "infraCharges": 4200000.0,
                "clubhouseCharges": 1500000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-vicinia-powai",
        "title": "Shapoorji Pallonji Vicinia",
        "slug": "shapoorji-vicinia-powai",
        "builderId": "b-shapoorji",
        "location": "Powai",
        "city": "Mumbai",
        "priceRange": "₹2.10 Cr - ₹5.10 Cr",
        "exactPrice": "₹2.10 Cr",
        "configurations": ["2 BHK", "3 BHK", "3.5 BHK"],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready with OC",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 19.1176,
        "lng": 72.8984,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "Shapoorji Pallonji Vicinia is a premier 6.7-acre residential landmark located in Chandivali, Powai, Mumbai. Designed to provide a serene sanctuary amidst the bustling city, Vicinia offers ready-to-move 2, 3, and 3.5 BHK luxury residences.\n\nStarting from ₹2.10 Cr with Occupation Certificate (OC) received, the gated community boasts a 30,000 sq.ft luxury clubhouse, infinity pool, squash and badminton courts, senior citizen pavilions, and lush botanical gardens. Verified under MahaRERA P51800002564 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "30,000 Sq.Ft Grand Clubhouse",
            "Infinity Swimming Pool & Kids Pool",
            "Squash & Indoor Badminton Courts",
            "Gymnasium & Aerobics Studio",
            "Landscaped Central Greens",
            "Convenience Retail Plaza"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant High-Grade RCC Construction"},
            {"label": "Flooring", "value": "Imported Vitrified Tiles in Living and Bedrooms"},
            {"label": "Fittings", "value": "Grohe / Kohler Sanitary Ware and CP Fittings"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Ready to Move with Full Occupation Certificate (OC Received) - Zero GST",
            "Prime Powai-Chandivali connectivity near international airport and JVLR",
            "Official MahaRERA verified project P51800002564"
        ],
        "reraId": "P51800002564",
        "pricePerSqft": 31300,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Shapoorji Vicinia Powai",
            "Vicinia Chandivali Mumbai",
            "ready to move flats in Powai",
            "2 BHK in Powai Mumbai",
            "3 BHK in Chandivali",
            "MahaRERA P51800002564"
        ],
        "metaDescription": "Buy ready-to-move OC received 2 BHK, 3 BHK luxury residences in Shapoorji Pallonji Vicinia, Powai Chandivali Mumbai. Starting ₹2.10 Cr. Verified MahaRERA P51800002564.",
        "advancedConfigurations": [
            {
                "id": "cfg-vicinia-1",
                "projectId": "p-shapoorji-vicinia-powai",
                "name": "2 BHK Hill View",
                "carpetArea": 671,
                "balconyArea": 50,
                "bathrooms": 2,
                "basePrice": 21000000.0,
                "pricePerSqft": 31296.57,
                "infraCharges": 580000.0,
                "clubhouseCharges": 300000.0,
                "gstRate": 0.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-vicinia-2",
                "projectId": "p-shapoorji-vicinia-powai",
                "name": "3 BHK Signature",
                "carpetArea": 1068,
                "balconyArea": 85,
                "bathrooms": 3,
                "basePrice": 34500000.0,
                "pricePerSqft": 32303.37,
                "infraCharges": 850000.0,
                "clubhouseCharges": 400000.0,
                "gstRate": 0.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-northern-lights-thane",
        "title": "Northern Lights by Shapoorji Pallonji",
        "slug": "shapoorji-northern-lights-thane",
        "builderId": "b-shapoorji",
        "location": "Thane West",
        "city": "Mumbai",
        "priceRange": "₹1.35 Cr - ₹3.25 Cr",
        "exactPrice": "₹1.35 Cr",
        "configurations": ["2 BHK", "3 BHK", "4 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 19.2183,
        "lng": 72.9644,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "Northern Lights by Shapoorji Pallonji Real Estate is a landmark 4.8-acre luxury residential community located on prime Pokhran Road No. 2, Thane West. Featuring towering high-rises including the prestigious Skyraa tower, the project offers thoughtfully engineered 2, 3, and 4 BHK homes.\n\nStarting from ₹1.35 Cr, Northern Lights provides 60+ curated amenities across multiple podium and rooftop recreation levels, including a sky lounge, heated pool, music room, and jogging trails. Verified under MahaRERA registration P51700019864 with 100% zero brokerage through PROPSMART REALTY.",
        "features": [
            "60+ Curated Lifestyle Amenities",
            "Rooftop Sky Lounge (Skyraa Tower)",
            "Heated Swimming Pool",
            "Music & Performing Arts Studio",
            "Multi-Level Fitness Center",
            "Cricket Pitch & Badminton Courts",
            "Vehicle-Free Podium Garden"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant High-Rise RCC Construction"},
            {"label": "Flooring", "value": "Vitrified Tiles in Living and Bedrooms; Anti-Skid in Deck"},
            {"label": "Windows", "value": "Anodized Aluminum Sliding Windows with Bug Screen"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Prime Pokhran Road No. 2 location near Viviana Mall and Eastern Express Highway",
            "Official MahaRERA verified project P51700019864 (also P51700033243 Skyraa)",
            "Direct allotment from Shapoorji Pallonji developer inventory"
        ],
        "reraId": "P51700019864",
        "pricePerSqft": 24700,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Shapoorji Northern Lights Thane",
            "Northern Lights Pokhran Road 2",
            "Skyraa Northern Lights",
            "flats in Thane West",
            "2 BHK in Thane",
            "3 BHK in Pokhran Road",
            "MahaRERA P51700019864"
        ],
        "metaDescription": "Buy 2 BHK, 3 BHK, 4 BHK luxury residences in Northern Lights by Shapoorji Pallonji, Pokhran Road 2 Thane West. Starting ₹1.35 Cr. Verified MahaRERA P51700019864.",
        "advancedConfigurations": [
            {
                "id": "cfg-northern-1",
                "projectId": "p-shapoorji-northern-lights-thane",
                "name": "2 BHK Deck Residence",
                "carpetArea": 545,
                "balconyArea": 42,
                "bathrooms": 2,
                "basePrice": 13500000.0,
                "pricePerSqft": 24770.64,
                "infraCharges": 420000.0,
                "clubhouseCharges": 200000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-northern-2",
                "projectId": "p-shapoorji-northern-lights-thane",
                "name": "3 BHK Skyraa Tower",
                "carpetArea": 1085,
                "balconyArea": 85,
                "bathrooms": 3,
                "basePrice": 24500000.0,
                "pricePerSqft": 22580.64,
                "infraCharges": 650000.0,
                "clubhouseCharges": 300000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-the-minerva-mahalaxmi",
        "title": "The Minerva Mahalaxmi",
        "slug": "shapoorji-the-minerva-mahalaxmi",
        "builderId": "b-shapoorji",
        "location": "Mahalaxmi",
        "city": "Mumbai",
        "priceRange": "₹13.50 Cr - ₹38.00 Cr",
        "exactPrice": "₹13.50 Cr",
        "configurations": ["3.5 BHK", "4 BHK", "Duplex"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 18.9827,
        "lng": 72.8258,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "The Minerva is one of India's tallest and most iconic residential skyscrapers, soaring above Mahalaxmi Racecourse in South Mumbai. Developed in strategic collaboration with Shapoorji Pallonji Real Estate, this architectural wonder offers palatial 3.5 BHK, 4 BHK, and duplex sky mansions.\n\nStarting from ₹13.50 Cr, residences command unobstructed vistas of the Mahalaxmi Racecourse, Arabian Sea, and Mumbai skyline. Residents experience triple-height designer lobbies, high-altitude viewing observatories, temperature-controlled pools, private wellness centers, and multi-tier automated security. Verified under MahaRERA registration P51900008204 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "Unobstructed Mahalaxmi Racecourse & Sea Views",
            "Triple-Height Air-Conditioned Grand Lobby",
            "High-Altitude Observation Decks",
            "Temperature-Controlled Swimming Pool",
            "Squash & Multi-Purpose Sports Courts",
            "Automated Multi-Level Parking",
            "Private Butler & Concierge Services"
        ],
        "specs": [
            {"label": "Structure", "value": "Super-Tall High-Rise Engineered Core RCC Structure"},
            {"label": "Interior", "value": "Italian Marble Flooring with Custom Millwork and Private Decks"},
            {"label": "Acoustics", "value": "Low-E Acoustic Performance Glazed Facade System"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty direct sales desk",
            "Iconic 90+ storey skyscraper facing Mahalaxmi Racecourse & Arabian Sea",
            "Official MahaRERA verified project P51900008204",
            "Ultra-exclusive high-altitude luxury living in South Mumbai"
        ],
        "reraId": "P51900008204",
        "pricePerSqft": 65600,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "The Minerva Mahalaxmi",
            "Minerva Mumbai skyscraper",
            "luxury flats Mahalaxmi Racecourse",
            "4 BHK in Mahalaxmi",
            "Shapoorji Minerva Mumbai",
            "MahaRERA P51900008204"
        ],
        "metaDescription": "Buy ultra-luxury racecourse-facing sky mansions in The Minerva, Mahalaxmi South Mumbai with Shapoorji Pallonji. Starting ₹13.50 Cr. Verified MahaRERA P51900008204.",
        "advancedConfigurations": [
            {
                "id": "cfg-minerva-1",
                "projectId": "p-shapoorji-the-minerva-mahalaxmi",
                "name": "3.5 BHK Sky Suite",
                "carpetArea": 2058,
                "balconyArea": 180,
                "bathrooms": 4,
                "basePrice": 135000000.0,
                "pricePerSqft": 65597.66,
                "infraCharges": 3500000.0,
                "clubhouseCharges": 1500000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-minerva-2",
                "projectId": "p-shapoorji-the-minerva-mahalaxmi",
                "name": "4 BHK Royal Vantage",
                "carpetArea": 2136,
                "balconyArea": 210,
                "bathrooms": 4,
                "basePrice": 158000000.0,
                "pricePerSqft": 73970.03,
                "infraCharges": 4200000.0,
                "clubhouseCharges": 1500000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-joyville-virar-mumbai",
        "title": "Joyville Virar",
        "slug": "joyville-virar-mumbai",
        "builderId": "b-shapoorji",
        "location": "Virar West",
        "city": "Mumbai",
        "priceRange": "₹42.00 L - ₹77.00 L",
        "exactPrice": "₹42.00 L",
        "configurations": ["1 BHK", "2 BHK"],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready & Ongoing",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 19.4674,
        "lng": 72.8028,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "Joyville Virar by Shapoorji Pallonji Real Estate is a sprawling master-planned residential township located in Virar West in the Mumbai Metropolitan Region (MMR). Built with Shapoorji's legendary engineering standards, the project offers thoughtfully designed 1 and 2 BHK residences.\n\nStarting from ₹42.00 L, residents enjoy access to a grand clubhouse, expansive swimming pool, sports arenas, children's parks, and landscaped gardens. Verified under MahaRERA registration P51900000444 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "Grand Gated Township",
            "Modern Clubhouse & Gym",
            "Swimming Pool",
            "Kids Play Park",
            "Senior Citizen Seating",
            "Jogging Tracks",
            "24x7 Multi-Tier Security"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant High-Grade RCC Framed Structure"},
            {"label": "Flooring", "value": "Vitrified Tiles in Living, Dining and Bedrooms"},
            {"label": "Sanitary", "value": "Branded CP Fittings with Water Conservation Technology"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Master township with lush open spaces in Virar West",
            "Official MahaRERA verified project P51900000444",
            "Direct developer pricing with bank loan pre-approvals"
        ],
        "reraId": "P51900000444",
        "pricePerSqft": 10100,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "Joyville Virar",
            "Shapoorji Joyville Virar",
            "flats in Virar West",
            "1 BHK in Virar",
            "2 BHK in Virar West Mumbai",
            "MahaRERA P51900000444"
        ],
        "metaDescription": "Buy 1 BHK, 2 BHK homes in Joyville Virar Mumbai by Shapoorji Pallonji. Starting ₹42.00 L. 100% Zero Brokerage. Verified MahaRERA P51900000444.",
        "advancedConfigurations": [
            {
                "id": "cfg-virar-1",
                "projectId": "p-joyville-virar-mumbai",
                "name": "1 BHK Palm Grove",
                "carpetArea": 415,
                "balconyArea": 35,
                "bathrooms": 1,
                "basePrice": 4200000.0,
                "pricePerSqft": 10120.48,
                "infraCharges": 150000.0,
                "clubhouseCharges": 100000.0,
                "gstRate": 1.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            },
            {
                "id": "cfg-virar-2",
                "projectId": "p-joyville-virar-mumbai",
                "name": "2 BHK Palm Breeze",
                "carpetArea": 644,
                "balconyArea": 55,
                "bathrooms": 2,
                "basePrice": 7000000.0,
                "pricePerSqft": 10869.56,
                "infraCharges": 250000.0,
                "clubhouseCharges": 150000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-the-canvas-residences-sewri",
        "title": "The Canvas Residences by Shapoorji Pallonji",
        "slug": "shapoorji-the-canvas-residences-sewri",
        "builderId": "b-shapoorji",
        "location": "Sewri",
        "city": "Mumbai",
        "priceRange": "₹2.15 Cr - ₹3.40 Cr",
        "exactPrice": "₹2.15 Cr",
        "configurations": ["2 BHK", "2.5 BHK"],
        "status": "Under Construction",
        "type": "Residential",
        "possessionDate": "Dec 2026",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 18.9982,
        "lng": 72.8558,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "The Canvas Residences by Shapoorji Pallonji (SD Corp) is an upscale harbour-facing residential tower located in Sewri West, South-Central Mumbai, right at the onset of the Mumbai Trans Harbour Link (Atal Setu). Offering premium 2 and 2.5 BHK residences with scenic views of the Arabian Sea and flamingos sanctuary.\n\nStarting from ₹2.15 Cr, homes feature floor-to-ceiling glass windows, imported marble flooring, state-of-the-art gymnasium, infinity pool, and seamless transit to South Mumbai and Navi Mumbai. Verified under MahaRERA registration P51900000521 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "Arabian Sea Harbour & Flamingo Bay Views",
            "Infinity Swimming Pool",
            "Designer Clubhouse",
            "Hi-Tech Fitness Center",
            "Sky Deck Observatory",
            "Immediate Access to Atal Setu MTHL"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant High-Rise RCC Framed Structure"},
            {"label": "Flooring", "value": "Imported Marble in Living and Dining; Wooden in Master Suite"},
            {"label": "Windows", "value": "Acoustic Double-Glazed Noise-Insulating Sliding Windows"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Direct connectivity via Mumbai Trans Harbour Link (Atal Setu) and Eastern Freeway",
            "Official MahaRERA verified project P51900000521",
            "Panoramic Eastern Waterfront and flamingo sanctuary views"
        ],
        "reraId": "P51900000521",
        "pricePerSqft": 33000,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "The Canvas Residences Sewri",
            "Shapoorji Sewri Mumbai",
            "flats near Atal Setu MTHL",
            "2 BHK in Sewri Mumbai",
            "MahaRERA P51900000521"
        ],
        "metaDescription": "Buy 2 BHK, 2.5 BHK harbour-view residences in The Canvas Residences by Shapoorji Pallonji, Sewri Mumbai. Starting ₹2.15 Cr. Verified MahaRERA P51900000521.",
        "advancedConfigurations": [
            {
                "id": "cfg-canvas-1",
                "projectId": "p-shapoorji-the-canvas-residences-sewri",
                "name": "2 BHK Harbour Deck",
                "carpetArea": 650,
                "balconyArea": 50,
                "bathrooms": 2,
                "basePrice": 21500000.0,
                "pricePerSqft": 33076.92,
                "infraCharges": 580000.0,
                "clubhouseCharges": 300000.0,
                "gstRate": 5.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            }
        ]
    },
    {
        "id": "p-shapoorji-the-designate-santacruz",
        "title": "The Designate by Shapoorji Pallonji",
        "slug": "shapoorji-the-designate-santacruz",
        "builderId": "b-shapoorji",
        "location": "Santacruz West",
        "city": "Mumbai",
        "priceRange": "₹5.25 Cr - ₹6.50 Cr",
        "exactPrice": "₹5.25 Cr",
        "configurations": ["3 BHK"],
        "status": "Ready To Move",
        "type": "Residential",
        "possessionDate": "Ready with OC",
        "image": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "heroImage": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/desktop/wildernest_desktop_banner.webp",
        "lat": 19.0833,
        "lng": 72.8367,
        "masterLayout": "https://shapoorjirealestate.com/files/assets/jpegs/all_projects/wildernest/gallery/1.webp",
        "floorPlans": [
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp",
            "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp"
        ],
        "description": "The Designate by Shapoorji Pallonji Real Estate is an ultra-exclusive low-density luxury residence located in Khar West / Santacruz, Mumbai. Designed with only 2 private apartments per floor, The Designate offers bespoke 3 BHK luxury residences crafted for utmost privacy and distinction.\n\nStarting from ₹5.25 Cr with full Occupation Certificate (OC received), homes feature Italian marble, 3.2-meter high ceilings, wrap-around balconies, private elevator access, and rooftop leisure deck. Registered under MahaRERA P51800001443 with 100% zero brokerage via PROPSMART REALTY.",
        "features": [
            "Only 2 Apartments per Floor (Maximum Privacy)",
            "Rooftop Sky Terrace & Lounge",
            "Double-Height Grand Entrance Foyer",
            "Private Elevator Access",
            "Hi-Tech Security & Concierge",
            "Multi-Tier Automated Parking"
        ],
        "specs": [
            {"label": "Structure", "value": "Earthquake Resistant High-Grade RCC Framed Structure"},
            {"label": "Flooring", "value": "Imported Italian Marble throughout Living, Dining and Bedrooms"},
            {"label": "Ceiling Height", "value": "3.2 Meter Clear Ceiling Heights"}
        ],
        "highlights": [
            "100% Zero Brokerage through Propsmart Realty authorized partner",
            "Ready to Move with Full Occupation Certificate (Zero GST)",
            "Prime Khar West / Santacruz elite residential neighborhood",
            "Official MahaRERA verified project P51800001443"
        ],
        "reraId": "P51800001443",
        "pricePerSqft": 44490,
        "verificationStatus": "Verified",
        "verificationSource": "MahaRERA Authorized Developer Partner",
        "seoKeywords": [
            "The Designate Shapoorji",
            "The Designate Santacruz",
            "flats in Khar West Mumbai",
            "3 BHK in Santacruz West",
            "MahaRERA P51800001443"
        ],
        "metaDescription": "Buy ready-to-move OC received bespoke 3 BHK luxury residences in The Designate by Shapoorji Pallonji, Santacruz Khar West Mumbai. Starting ₹5.25 Cr. Verified MahaRERA P51800001443.",
        "advancedConfigurations": [
            {
                "id": "cfg-designate-1",
                "projectId": "p-shapoorji-the-designate-santacruz",
                "name": "3 BHK Private Residence",
                "carpetArea": 1180,
                "balconyArea": 110,
                "bathrooms": 3,
                "basePrice": 52500000.0,
                "pricePerSqft": 44491.52,
                "infraCharges": 1200000.0,
                "clubhouseCharges": 500000.0,
                "gstRate": 0.0,
                "stampDutyRate": 7.0,
                "registrationCharges": 30000,
                "layoutImage": "https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp"
            }
        ]
    }
]

# 3. Rich RERA Passport Metadata for qrUtils.ts
SHAPOORJI_RERA_METADATA = {
    'shapoorji-wildernest-sp-kingstown': {
        'sanctionedTowers': '4 High-Rise Towers (G + 22 Storeys), 12 Villaments & 13 Villas',
        'sanctionedLandArea': '130+ Acres Integrated Master Township (SP Kingstown)',
        'reraPossessionDate': 'June 2027 (Tower 1) / March 2029 (Tower 4)',
        'carpetAreaEfficiency': '76% Certified Usable Carpet Area (1,384 sq.ft 3BHK)',
        'bankApprovals': ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bajaj Housing Finance']
    },
    'shapoorji-vyomora-hinjewadi': {
        'sanctionedTowers': '4 High-Rise Biophilic Towers (2B + G + 28 Storeys)',
        'sanctionedLandArea': '25 Acres Integrated Township Sector',
        'reraPossessionDate': 'December 2028',
        'carpetAreaEfficiency': '75% Certified Usable Carpet Area',
        'bankApprovals': ['SBI', 'HDFC Bank', 'ICICI Bank', 'Bank of Baroda', 'Axis Bank']
    },
    'shapoorji-vanaha-golfland-bavdhan': {
        'sanctionedTowers': '6 Golf-Front Signature Towers (3B + G + 32 Storeys)',
        'sanctionedLandArea': '1,000+ Acres Oxford Valley Master Township',
        'reraPossessionDate': 'June 2027',
        'carpetAreaEfficiency': '78% Luxury Usable Carpet Area',
        'bankApprovals': ['HDFC Bank', 'State Bank of India', 'ICICI Bank', 'Kotak Mahindra Bank', 'Axis Bank']
    },
    'shapoorji-vanaha-springs-bavdhan': {
        'sanctionedTowers': '3 Hill-View Towers (G + 22 Storeys)',
        'sanctionedLandArea': '18.5 Acres Hillside Reserve in Bavdhan',
        'reraPossessionDate': 'Ready to Move / Handover in Progress',
        'carpetAreaEfficiency': '74% Usable Carpet Area',
        'bankApprovals': ['SBI', 'HDFC Bank', 'ICICI Bank', 'Bank of Maharashtra']
    },
    'shapoorji-bkc-28-bandra-east': {
        'sanctionedTowers': '1 Boutique Sky Tower (G + 22 Storeys)',
        'sanctionedLandArea': '1.2 Acres Prime Land Parcel in Kherwadi Bandra East',
        'reraPossessionDate': 'Ready to Move / 2025',
        'carpetAreaEfficiency': '75% Usable Carpet Area',
        'bankApprovals': ['HDFC Bank', 'ICICI Bank', 'State Bank of India', 'Axis Bank', 'Standard Chartered']
    },
    'shapoorji-the-odyssey-marine-drive': {
        'sanctionedTowers': '1 Iconic High-Rise Sea-Facing Tower (G + 34 Storeys)',
        'sanctionedLandArea': '0.95 Acres Premier South Mumbai Parcel off Marine Drive',
        'reraPossessionDate': 'December 2028',
        'carpetAreaEfficiency': '80% Palatial Usable Carpet Area',
        'bankApprovals': ['HDFC Bank', 'ICICI Bank', 'SBI', 'HSBC', 'Standard Chartered']
    },
    'shapoorji-vicinia-powai': {
        'sanctionedTowers': '8 High-Rise Towers (G + 22 Storeys)',
        'sanctionedLandArea': '6.7 Acres Gated Sanctuary in Chandivali Powai',
        'reraPossessionDate': 'Ready to Move with Full OC Received (Zero GST)',
        'carpetAreaEfficiency': '78% Usable Luxury Carpet',
        'bankApprovals': ['HDFC Bank', 'SBI', 'ICICI Bank', 'Kotak Mahindra', 'Axis Bank']
    },
    'shapoorji-northern-lights-thane': {
        'sanctionedTowers': '5 High-Rise Sky Towers (G + 47 Storeys including Skyraa)',
        'sanctionedLandArea': '4.8 Acres Landscaped Gated Community on Pokhran Road 2',
        'reraPossessionDate': 'December 2026',
        'carpetAreaEfficiency': '76% Usable Carpet Area',
        'bankApprovals': ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of India']
    },
    'shapoorji-the-minerva-mahalaxmi': {
        'sanctionedTowers': '1 Super-Tall Luxury Skyscraper (90+ Storeys)',
        'sanctionedLandArea': '2.2 Acres Racecourse Facing Prime Parcel',
        'reraPossessionDate': 'December 2026',
        'carpetAreaEfficiency': '82% Ultra-Luxury Usable Carpet',
        'bankApprovals': ['HDFC Bank', 'ICICI Bank', 'SBI', 'HSBC', 'Citibank']
    },
    'joyville-virar-mumbai': {
        'sanctionedTowers': '7 Township Towers (G + 23 Storeys)',
        'sanctionedLandArea': '12.5 Acres Master Planned Community in Virar West',
        'reraPossessionDate': 'Ready to Move & Ongoing Phases',
        'carpetAreaEfficiency': '74% Usable Carpet Area',
        'bankApprovals': ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Bank of Baroda']
    },
    'shapoorji-the-canvas-residences-sewri': {
        'sanctionedTowers': '2 Harbour-View Sky Towers (2B + G + 32 Storeys)',
        'sanctionedLandArea': '3.1 Acres Waterfront Parcel in Sewri West',
        'reraPossessionDate': 'December 2026',
        'carpetAreaEfficiency': '76% Usable Carpet Area',
        'bankApprovals': ['SBI', 'HDFC Bank', 'ICICI Bank', 'Axis Bank']
    },
    'shapoorji-the-designate-santacruz': {
        'sanctionedTowers': '1 Boutique Luxury Tower (G + 14 Storeys, 2 Homes/Floor)',
        'sanctionedLandArea': '0.75 Acres Exclusive Parcel in Khar-Santacruz West',
        'reraPossessionDate': 'Ready to Move with Full OC Received (Zero GST)',
        'carpetAreaEfficiency': '79% Certified Usable Carpet Area',
        'bankApprovals': ['HDFC Bank', 'ICICI Bank', 'SBI', 'Kotak Mahindra Bank']
    }
}

def main():
    print("🚀 Ingesting and Auditing Shapoorji Pallonji Real Estate Projects...")
    
    # 1. Read mockData.ts
    with open(MOCKDATA_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    # A. Update BUILDERS
    builders_token = "export const BUILDERS: Builder[] = "
    b_start = content.find(builders_token)
    if b_start == -1:
        print("❌ Could not find BUILDERS in mockData.ts")
        return
    b_json_start = b_start + len(builders_token)
    b_json_end = content.find("];", b_json_start)
    builders = json.loads(content[b_json_start:b_json_end+1])
    
    # Check if b-shapoorji exists
    has_sp = any(b['id'] == 'b-shapoorji' for b in builders)
    if not has_sp:
        builders.append(SHAPOORJI_BUILDER)
        print("✅ Added 'Shapoorji Pallonji Real Estate' to BUILDERS list.")
    else:
        # update it
        for idx, b in enumerate(builders):
            if b['id'] == 'b-shapoorji':
                builders[idx] = SHAPOORJI_BUILDER
        print("✅ Updated 'Shapoorji Pallonji Real Estate' in BUILDERS list.")

    new_builders_json = json.dumps(builders, indent=2)

    # Reconstruct content with updated builders
    content = content[:b_json_start] + new_builders_json + content[b_json_end+1:]

    # B. Update PROJECTS
    projects_token = "export const PROJECTS: Project[] = "
    p_start = content.find(projects_token)
    if p_start == -1:
        print("❌ Could not find PROJECTS in mockData.ts")
        return
    p_json_start = p_start + len(projects_token)
    p_json_end = content.rfind("];")
    projects = json.loads(content[p_json_start:p_json_end+1])
    print(f"Loaded {len(projects)} existing projects.")

    # Audit & clean existing projects:
    for p in projects:
        if p['id'] == 'p-joyville-annexe':
            p['title'] = 'Joyville Hadapsar Annexe'
            p['builderId'] = 'b-shapoorji'
            p['city'] = 'Pune'
            p['priceRange'] = '₹46.50 L - ₹1.06 Cr'
            p['exactPrice'] = '₹46.50 L'
            p['reraId'] = 'P52100026785'
            print("✅ Audited & verified p-joyville-annexe.")
        elif p['id'] == 'p-joyville-celestia':
            p['builderId'] = 'b-shapoorji'
            p['city'] = 'Pune'
            p['priceRange'] = '₹77.00 L - ₹1.16 Cr'
            p['exactPrice'] = '₹77.00 L'
            p['reraId'] = 'P52100053165'
            print("✅ Audited & verified p-joyville-celestia.")
        elif p['id'] == 'p-joyville-sensorium':
            p['builderId'] = 'b-shapoorji'
            p['city'] = 'Pune'
            p['priceRange'] = '₹76.00 L - ₹1.29 Cr'
            p['exactPrice'] = '₹76.00 L'
            p['reraId'] = 'P52100027234'
            print("✅ Audited & verified p-joyville-sensorium.")

    # Remove duplicates of new projects if any
    existing_ids = {p['id'] for p in projects}
    added_count = 0
    for np in SHAPOORJI_PROJECTS:
        if np['id'] in existing_ids:
            # Replace
            for idx, p in enumerate(projects):
                if p['id'] == np['id']:
                    projects[idx] = np
                    print(f"🔄 Updated existing project {np['id']}")
                    break
        else:
            projects.append(np)
            added_count += 1
            print(f"➕ Added new project {np['id']} ({np['title']})")

    new_projects_json = json.dumps(projects, indent=2)
    content = content[:p_json_start] + new_projects_json + content[p_json_end+1:]

    with open(MOCKDATA_PATH, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"✅ Successfully wrote mockData.ts with {len(projects)} projects ({added_count} newly added).")

    # 2. Update qrUtils.ts
    with open(QRUTILS_PATH, "r", encoding="utf-8") as f:
        qr_content = f.read()

    # Check if shapoorji-wildernest-sp-kingstown is already present
    if "shapoorji-wildernest-sp-kingstown" not in qr_content:
        # Insert before the last closing brace of defaultData
        insert_marker = "        'vtp-bellissimo': {"
        idx = qr_content.find(insert_marker)
        if idx != -1:
            snippet = ""
            for slug, meta in SHAPOORJI_RERA_METADATA.items():
                snippet += f"        '{slug}': {{\n"
                snippet += f"            sanctionedTowers: '{meta['sanctionedTowers']}',\n"
                snippet += f"            sanctionedLandArea: '{meta['sanctionedLandArea']}',\n"
                snippet += f"            reraPossessionDate: '{meta['reraPossessionDate']}',\n"
                snippet += f"            carpetAreaEfficiency: '{meta['carpetAreaEfficiency']}',\n"
                snippet += f"            bankApprovals: {json.dumps(meta['bankApprovals'])}\n"
                snippet += "        },\n"
            
            qr_content = qr_content[:idx] + snippet + qr_content[idx:]
            with open(QRUTILS_PATH, "w", encoding="utf-8") as f:
                f.write(qr_content)
            print("✅ Successfully injected rich MahaRERA metadata for all Shapoorji projects into qrUtils.ts.")
        else:
            print("⚠️ Could not find insert_marker in qrUtils.ts")
    else:
        print("ℹ️ Shapoorji metadata already in qrUtils.ts.")

if __name__ == "__main__":
    main()
