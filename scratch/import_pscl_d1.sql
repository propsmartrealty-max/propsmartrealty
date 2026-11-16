INSERT OR REPLACE INTO localities (
    id, name, slug, city, zone, avg_price_sqft, project_count, appreciation_rate, tagline, description, is_featured, image_url
) VALUES (
    'khed-shivapur', 'Khed Shivapur', 'khed-shivapur', 'Pune', 'South & Central',
    5800, 8, 8.0,
    'Affordable Township & Pune-Bangalore Highway Hub', 'High-growth south corridor along NH-48 with major integrated residential townships like Happiness Hub and industrial logistics.', 1, '/images/localities/default-locality.svg'
);
INSERT OR REPLACE INTO localities (
    id, name, slug, city, zone, avg_price_sqft, project_count, appreciation_rate, tagline, description, is_featured, image_url
) VALUES (
    'karve-road', 'Karve Road', 'karve-road', 'Pune', 'South & Central',
    21000, 12, 9.0,
    'Erandwane, Deccan Gymkhana & Heritage Cultural Corridor', 'Prestigious central Pune corridor connecting Deccan Gymkhana, premier educational institutions, and luxury residential enclaves.', 1, '/images/localities/default-locality.svg'
);
INSERT OR REPLACE INTO localities (
    id, name, slug, city, zone, avg_price_sqft, project_count, appreciation_rate, tagline, description, is_featured, image_url
) VALUES (
    'bandra-east', 'Bandra East', 'bandra-east', 'Mumbai', 'Mumbai Western Suburbs',
    44000, 15, 10.5,
    'BKC Financial Epicenter & Sea Link Gateway', 'Prime Mumbai luxury enclave adjacent to the Bandra-Kurla Complex (BKC) with world-class dining, elite towers, and sea link access.', 1, '/images/localities/default-locality.svg'
);
INSERT OR REPLACE INTO localities (
    id, name, slug, city, zone, avg_price_sqft, project_count, appreciation_rate, tagline, description, is_featured, image_url
) VALUES (
    'andheri-west', 'Andheri West', 'andheri-west', 'Mumbai', 'Mumbai Western Suburbs',
    34000, 20, 9.8,
    'Lokhandwala, 4 Bungalows & Entertainment Capital', 'Vibrant western Mumbai corridor famous for media houses, luxury high-rises, metro connectivity, and coastal proximity.', 1, '/images/localities/default-locality.svg'
);
INSERT OR REPLACE INTO localities (
    id, name, slug, city, zone, avg_price_sqft, project_count, appreciation_rate, tagline, description, is_featured, image_url
) VALUES (
    'thane-west', 'Thane West', 'thane-west', 'Mumbai', 'MMR & Thane',
    23000, 28, 8.7,
    'Pokhran Road, Hiranandani Meadows & Yeoor Foothills', 'Premier Thane residential hub surrounded by Yeoor Hills, luxury lifestyle clubs, Viviana Mall, and metro connectivity.', 1, '/images/localities/default-locality.svg'
);
INSERT OR REPLACE INTO localities (
    id, name, slug, city, zone, avg_price_sqft, project_count, appreciation_rate, tagline, description, is_featured, image_url
) VALUES (
    'shrivardhan-diveagar', 'Shrivardhan-Diveagar', 'shrivardhan-diveagar', 'Alibaug', 'Coastal Konkan',
    4200, 6, 11.2,
    'Pristine Golden Sand Beaches & Coastal Villa Retreats', 'Celebrated Konkan coastal belt along the Arabian Sea featuring virgin beaches, marine forts, and gated holiday villa communities.', 1, '/images/localities/default-locality.svg'
);
INSERT OR REPLACE INTO builders (
    id, name, slug, description, established_year, total_projects, ongoing_projects, trust_score, is_verified, logo, hero_image
) VALUES (
    'b-paranjape', 'Paranjape Schemes', 'paranjape-schemes', 'Founded in 1987 by Shrikant and Shashank Paranjape, Paranjape Schemes (Construction) Ltd (PSCL) is one of Maharashtra''s most pioneering real estate developers with over 200 delivered projects, 20,000+ satisfied families, iconic mega townships like Blue Ridge (Hinjewadi) and Forest Trails (Bhugaon), and pioneer senior citizen living communities under the Athashri brand across Pune and Mumbai MMR.', 1987,
    200, 25, 9.7, 1,
    '/images/builders/paranjape.svg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-blue-ridge-promenade', 'Paranjape Blue Ridge - The Promenade', 'paranjape-blue-ridge-promenade', 'b-paranjape', 'Hinjewadi',
    'Pune', '₹1.80 Cr - ₹2.50 Cr', '₹1.80 Cr', 13677,
    '["3 BHK", "4 BHK"]', 'Under Construction', 'Residential',
    'December 2026', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200', 'The Promenade by Paranjape Schemes is a luxury waterfront high-rise development in the iconic 138-acre Blue Ridge Township, Hinjewadi Phase 1, Pune. Rising 32 storeys along the serene Mula riverfront, these limited-edition 3 and 4 BHK residences offer private elevator foyers, floor-to-ceiling glass balconies, Italian marble finishes, and unhindered river panoramas.

Residents enjoy access to Blue Ridge''s 9-hole golf course, private boat club & marina, multi-cuisine clubhouse, sports academy, and internal butterfly garden. Strategically located within walking distance of Pune''s major IT SEZs, international schools, and the upcoming Hinjewadi Metro Line 3 station. Verified under MahaRERA P52100029952 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Riverfront Promenade", "9-Hole Golf Course", "Boat Club & Marina", "Infinity Swimming Pool", "Clubhouse", "Gymnasium", "Tennis & Squash Courts", "24/7 Security"]', '[{"category": "Structure", "detail": "Earthquake resistant RCC framed structure with Mivan aluminum formwork"}, {"category": "Flooring", "detail": "Imported Italian marble in living and dining, wooden finish flooring in master suite"}, {"category": "Kitchen", "detail": "Granite counter platform with stainless steel sink and piped gas provision"}, {"category": "Bathrooms", "detail": "Grohe and Kohler sanitary fittings with glass shower cubicles and geysers"}]', 'P52100029952',
    1, 1, 'Buy 3 & 4 BHK in Paranjape Blue Ridge The Promenade, Hinjewadi Pune. Starts ₹1.80 Cr. 100% Zero Brokerage. Verified MahaRERA P52100029952.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-blue-ridge-altius', 'Paranjape Blue Ridge - The Altius', 'paranjape-blue-ridge-altius', 'b-paranjape', 'Hinjewadi',
    'Pune', '₹1.95 Cr - ₹4.00 Cr', '₹1.95 Cr', 14233,
    '["3 BHK", "4 BHK", "5 BHK"]', 'Under Construction', 'Residential',
    'December 2027', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200', 'The Altius (Tower 26) is the crown jewel architectural skyscraper within Paranjape Blue Ridge township in Hinjewadi, Pune. Soaring 36 storeys high, The Altius offers ultra-luxury 3, 4, and 5 BHK penthouses and grand residences designed for Pune''s corporate leadership and global CXOs.

Every home features panoramic views of the 9-hole golf course and river valley, double-height sundecks, home automation, and private sky lounges. Verified under MahaRERA P52100078116 with official direct builder allotment via PROPSMART REALTY.',
    '["Sky Lounge on 36th Floor", "Golf Course Facing", "Private Lift Lobbies", "Olympic Lap Pool", "Concierge Service", "Banquet Lawn", "Smart Home Automation"]', '[]', 'P52100078116',
    1, 1, 'Buy 3, 4, 5 BHK in Paranjape Blue Ridge The Altius, Hinjewadi Pune. Starts ₹1.95 Cr. MahaRERA P52100078116. Direct builder inventory with 0% Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-trident-towers', 'Paranjape Trident Towers', 'paranjape-trident-towers', 'b-paranjape', 'Hinjewadi',
    'Pune', '₹43.00 L - ₹80.00 L', '₹43.00 L', 8750,
    '["1 BHK", "2 BHK"]', 'Under Construction', 'Residential',
    'December 2026', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200', 'Trident Towers by Paranjape Schemes is a high-tech residential landmark located on the Hinjewadi-Wakad Link Road. Engineered with modern Mivan shuttering technology, these smart 1 & 2 BHK homes are crafted specifically for young IT and engineering professionals.

Featuring integrated work-from-home acoustic work pods, high-speed WiFi community hubs, a swimming pool, clubhouse, podium jogging loop, and 3-tier smart security. Located 3 minutes from Xion Mall and Hinjewadi Metro Station. Verified MahaRERA P52100029377 with 100% zero brokerage through PROPSMART REALTY.',
    '["WFH Acoustic Work Pods", "Podium Swimming Pool", "Clubhouse", "Gymnasium", "Multi-tier Security", "Children''s Play Park", "High Speed Elevators"]', '[]', 'P52100029377',
    1, 1, 'Buy 1 & 2 BHK in Paranjape Trident Towers, Hinjewadi Wakad Link Road. Starts ₹43.00 L. MahaRERA P52100029377. 0% Brokerage with PROPSMART REALTY.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-forest-trails-highgardens', 'Paranjape Forest Trails - Highgardens', 'paranjape-forest-trails-highgardens', 'b-paranjape', 'Bavdhan',
    'Pune', '₹87.00 L - ₹1.71 Cr', '₹87.00 L', 10480,
    '["2 BHK", "3 BHK", "4 BHK"]', 'Under Construction', 'Residential',
    'July 2028', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200', 'Highgardens is a premier hillside residential enclave inside the celebrated 190+ acre Forest Trails Township in Bhugaon, just minutes from Bavdhan and Chandani Chowk. Highgardens introduces private terrace garden residences that seamlessly blend indoor luxury with lush Sahyadri nature.

Residents enjoy direct access to The Cliff Lifestyle & Sports Club, an international equestrian horse-riding academy, 34,000 mature trees, walking trails, and Sri Sri Ravishankar Vidya Mandir school located right inside the township. Verified MahaRERA P52100053310 with official direct builder sales via PROPSMART REALTY.',
    '["Private Terrace Gardens", "The Cliff Lifestyle Club", "Equestrian Horse Riding Academy", "Heated Swimming Pool", "Tennis & Badminton Courts", "On-campus School", "Forest Trails Nature Walk"]', '[]', 'P52100053310',
    1, 1, 'Buy 2, 3, 4 BHK in Paranjape Forest Trails Highgardens, Bavdhan Bhugaon Pune. Starts ₹87.00 L. MahaRERA P52100053310. 100% Zero Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-forest-trails-canopy', 'Paranjape Forest Trails - The Canopy', 'paranjape-forest-trails-canopy', 'b-paranjape', 'Bavdhan',
    'Pune', '₹83.00 L - ₹1.21 Cr', '₹83.00 L', 9368,
    '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential',
    'December 2029', 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200', 'The Canopy (Sector R48) is a 24-storey high-rise biophilic residential tower nestled inside the 190-acre Forest Trails Township in Bhugaon, minutes from Bavdhan, Pune. Designed to sit under the verdant canopy of 34,000+ forest trees, every apartment offers cross ventilation and unobstructed valley perspectives.

Equipped with rooftop meditation decks, clubhouse, gym, and full membership to The Cliff sports facilities. Verified under MahaRERA registration P52100079518 with 0% brokerage via PROPSMART REALTY.',
    '["Biophilic Architecture", "Rooftop Yoga & Stargazing Deck", "Access to The Cliff Club", "Jogging Track", "Gymnasium", "Kids Adventure Area", "EV Charging Station"]', '[]', 'P52100079518',
    1, 1, 'Buy 2 & 3 BHK in Paranjape The Canopy at Forest Trails, Bavdhan Bhugaon Pune. Starts ₹83.00 L. MahaRERA P52100079518. Zero Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-rivolo-residences', 'Paranjape Forest Trails - The Rivolo Residences', 'paranjape-rivolo-residences', 'b-paranjape', 'Bavdhan',
    'Pune', '₹3.89 Cr - ₹5.70 Cr', '₹3.89 Cr', 15500,
    '["3 BHK", "4 BHK", "5 BHK"]', 'Under Construction', 'Residential',
    'December 2027', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200', 'The Rivolo Residences represents the pinnacle of private villa luxury in Pune. Set upon high hill ridges inside the Forest Trails Township near Bavdhan, each standalone villa features a private garden, personal plunge pool provision, multi-tier entertainment terraces, and bespoke luxury interiors.

Positioned in an exclusive gated cul-de-sac adjacent to the Forest Trails equestrian arena and The Cliff Club. Verified under MahaRERA registration P52100031560 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Private Hillside Villas", "Personal Landscaped Gardens", "Private Plunge Pool Provision", "The Cliff Club Privileges", "Equestrian Academy Access", "Double-height Living Rooms"]', '[]', 'P52100031560',
    1, 1, 'Luxury 3, 4, 5 BHK private villas in Paranjape The Rivolo Residences, Forest Trails Bavdhan. Starts ₹3.89 Cr. MahaRERA P52100031560. 0% Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-orchard-residences', 'Paranjape Forest Trails - The Orchard Residences', 'paranjape-orchard-residences', 'b-paranjape', 'Bavdhan',
    'Pune', '₹1.65 Cr - ₹2.40 Cr', '₹1.65 Cr', 11500,
    '["3 BHK", "4 BHK"]', 'Under Construction', 'Residential',
    'March 2029', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200', 'The Orchard Residences (Sector R40) offers spacious low-density villaments and grand apartments overlooking fragrant mango and fruit groves in Forest Trails, Bhugaon near Bavdhan. Offering expansive carpet areas from 2,100 to 2,400+ sq. ft., these homes are crafted for discerning multi-generational families.

Verified under MahaRERA registration P52100055710 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Orchard & Valley Views", "Low-Density Villaments", "Large Sundecks", "The Cliff Club Access", "Walking Trails", "Tennis Courts", "Multi-purpose Banquet"]', '[]', 'P52100055710',
    1, 0, 'Buy 3 & 4 BHK in Paranjape The Orchard Residences, Forest Trails Bavdhan Pune. Starts ₹1.65 Cr. MahaRERA P52100055710. 100% Zero Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-athashri-b3', 'Paranjape Athashri B3 - Forest Trails', 'paranjape-athashri-b3', 'b-paranjape', 'Bavdhan',
    'Pune', '₹80.00 L - ₹1.25 Cr', '₹80.00 L', 9200,
    '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential',
    'September 2029', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200', 'Athashri B3 is the newest landmark phase of Paranjape Schemes'' globally acclaimed Athashri senior living brand, situated inside the Forest Trails Township in Bhugaon near Bavdhan, Pune. Specially conceptualized for senior citizens, it incorporates barrier-free anti-skid architectural design, emergency grab-bars, 24x7 doctor & paramedic on-campus response, and full-service community dining.

Residents enjoy lively cultural clubs, yoga classes, physiotherapy centers, and peaceful green surroundings. Verified MahaRERA P52100077686 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["24/7 On-campus Doctor & Nurse", "Emergency Response Call Buttons", "Senior-friendly Non-skid Flooring", "Nutritious Community Dining Hall", "Physiotherapy & Wellness Center", "Library & Recreation Lounge", "Wheelchair Accessible Paths"]', '[]', 'P52100077686',
    1, 1, 'Senior Living in Pune: Paranjape Athashri B3 at Forest Trails Bavdhan. Starts ₹80.00 L. MahaRERA P52100077686. Direct builder partner PROPSMART REALTY.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-athashri-baner', 'Paranjape Athashri Baner', 'paranjape-athashri-baner', 'b-paranjape', 'Baner',
    'Pune', '₹50.00 L - ₹1.60 Cr', '₹50.00 L', 11500,
    '["1 BHK", "2 BHK"]', 'Ready to Move', 'Residential',
    'Ready to Move', 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=1200', 'Athashri Baner is Paranjape Schemes'' iconic pioneer retirement community on Pan Card Club Road, Baner, Pune. Established as India''s premier dedicated senior living habitat, Athashri Baner features specialized amenities like home-delivered meals, medical check-ups, housekeeping support, cultural clubs, and 24-hour security.

Located in prime Baner with seamless access to Balewadi High Street, top multi-specialty hospitals, and West Pune transit corridors. Verified MahaRERA P52100002667 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Assisted Living Services", "Doctor on Call & Nursing Aid", "Central Dining & Meal Delivery", "Activity Hall & Indoor Games", "Senior Safety Grab Rails", "Gated Security & CCTV"]', '[]', 'P52100002667',
    1, 1, 'Buy 1 & 2 BHK in Paranjape Athashri Baner Pune. Ready to Move senior living homes from ₹50.00 L. MahaRERA P52100002667. 0% Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-happiness-hub', 'Paranjape Happiness Hub', 'paranjape-happiness-hub', 'b-paranjape', 'Khed Shivapur',
    'Pune', '₹17.00 L - ₹45.00 L', '₹17.00 L', 5800,
    '["1 BHK", "2 BHK"]', 'Ready to Move', 'Residential',
    'Ready to Move', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1200', 'Happiness Hub by Paranjape Schemes is a sprawling 25-acre integrated affordable township situated on the Pune-Bengaluru Highway (NH-48) at Khed Shivapur, Varve Bk. Offering over 2,000 smart, budget-friendly 1 RK, 1 BHK, and 2 BHK residences, Happiness Hub brings township living within reach of first-time homebuyers.

Equipped with a grand clubhouse, cricket pitch, temple, multi-purpose sports courts, senior citizen park, landscaped gardens, and EV charging stations. Verified under MahaRERA registration P52100000303 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["25-Acre Gated Township", "Grand Clubhouse & Gym", "Cricket Pitch & Sports Court", "Temple & Meditation Deck", "Children''s Play Arena", "EV Charging Station", "Commercial Shopping Plaza"]', '[]', 'P52100000303',
    1, 1, 'Buy 1 & 2 BHK in Paranjape Happiness Hub, Khed Shivapur Pune. Ready homes start ₹17.00 L. MahaRERA P52100000303. 100% Zero Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-swapna-samrat', 'Paranjape Swapna Samrat', 'paranjape-swapna-samrat', 'b-paranjape', 'Karve Road',
    'Pune', '₹2.13 Cr - ₹3.43 Cr', '₹2.13 Cr', 21500,
    '["2 BHK", "3 BHK"]', 'Ready to Move', 'Residential',
    'Ready to Move', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200', 'Swapna Samrat is a boutique luxury residential address by Paranjape Schemes on Karve Road, Khilarewadi in Erandwane, right in the heart of Pune. Offering an elite collection of spacious 2 & 3 BHK residences, Swapna Samrat places you minutes from Deccan Gymkhana, FC Road, and Pune''s heritage cultural centers.

Featuring a rooftop swimming pool, landscaped party terrace, fitness gym, and advanced security systems. Verified under MahaRERA registration P52100000035 with 100% Zero Brokerage via PROPSMART REALTY.',
    '["Rooftop Swimming Pool", "Terrace Party Lawn", "Fitness Gymnasium", "Central Erandwane Location", "High-speed Elevators", "Covered Car Parking", "24/7 CCTV Surveillance"]', '[]', 'P52100000035',
    1, 1, 'Buy luxury 2 & 3 BHK in Paranjape Swapna Samrat, Karve Road Erandwane Pune. Starts ₹2.13 Cr. Ready to Move. MahaRERA P52100000035. 0% Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-gloria-grand', 'Paranjape Gloria Grand', 'paranjape-gloria-grand', 'b-paranjape', 'Bavdhan',
    'Pune', '₹61.00 L - ₹1.39 Cr', '₹61.00 L', 9800,
    '["2 BHK", "3 BHK"]', 'Ready to Move', 'Residential',
    'Ready to Move', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1200', 'Gloria Grand by Paranjape Schemes is a premier completed residential township situated in Bavdhan, Pune. Offering comfortable 2 and 3 BHK family apartments, Gloria Grand is celebrated for its lush greenery, serene environment, and excellent connectivity to Paud Road, Kothrud, and the Mumbai-Bangalore Highway.

Equipped with a grand clubhouse, swimming pool, kids playground, and multi-purpose sports courts. Verified under MahaRERA registration P52100001380 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Clubhouse & Gym", "Swimming Pool", "Children''s Play Area", "Landscaped Gardens", "Power Backup", "Covered Car Parking", "Prime Bavdhan Location"]', '[]', 'P52100001380',
    1, 0, 'Buy 2 & 3 BHK in Paranjape Gloria Grand, Bavdhan Pune. Starts ₹61.00 L. Ready to Move. MahaRERA P52100001380. 0% Brokerage with PROPSMART REALTY.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-athena-bandra', 'Paranjape Athena', 'paranjape-athena-bandra', 'b-paranjape', 'Bandra East',
    'Mumbai', '₹1.68 Cr - ₹4.69 Cr', '₹1.68 Cr', 42500,
    '["1 BHK", "2 BHK", "3 BHK", "4 BHK"]', 'Under Construction', 'Residential',
    'December 2027', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200', 'Paranjape Athena is a landmark luxury residential development in Bandra East, Mumbai. Situated near Teacher''s Colony and the Western Express Highway, Athena places you moments from the Bandra-Kurla Complex (BKC) and the Bandra-Worli Sea Link.

Featuring boutique 1, 2, 3, and 4 BHK residences with rooftop infinity pool, sky deck, state-of-the-art gymnasium, and automated puzzle parking. Verified MahaRERA P51800023608 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Rooftop Infinity Pool", "BKC Proximity (3 Mins)", "Sky Deck Lounge", "Designer Fitness Gym", "Automated Puzzle Parking", "Acoustic Glass Windows", "24/7 Concierge"]', '[]', 'P51800023608',
    1, 1, 'Buy 1, 2, 3, 4 BHK in Paranjape Athena, Bandra East Mumbai near BKC. Starts ₹1.68 Cr. MahaRERA P51800023608. 100% Zero Brokerage with PROPSMART REALTY.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-aspire-andheri', 'Paranjape Aspire', 'paranjape-aspire-andheri', 'b-paranjape', 'Andheri West',
    'Mumbai', '₹1.68 Cr - ₹5.19 Cr', '₹2.20 Cr', 34800,
    '["1 BHK", "2 BHK", "3 BHK", "4 BHK"]', 'Under Construction', 'Residential',
    'August 2027', 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1200', 'Paranjape Aspire is a 22-storey luxury high-rise tower located in SV Patel Nagar, 4 Bungalows, Andheri West, Mumbai. Offering meticulously designed 1, 2, 3, and 4 BHK residences with optimal space utilization, cross ventilation, and imported fittings.

Equipped with a rooftop recreation deck, fitness center, automated tower parking, and 24-hour smart surveillance. Located 5 minutes from DN Nagar Metro Station and Lokhandwala market. Verified under MahaRERA registration P51800045731 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["22-Storey High-Rise Tower", "Rooftop Recreation Deck", "Fitness Center", "Automated Tower Parking", "Metro Station Proximity (5 Mins)", "Grand Entrance Lobby", "CCTV Security"]', '[]', 'P51800045731',
    1, 1, 'Buy 1, 2, 3 BHK in Paranjape Aspire, Andheri West Mumbai. Starts ₹1.68 Cr. MahaRERA P51800045731. 100% Zero Brokerage with PROPSMART REALTY.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-opulus-thane', 'Paranjape Opulus', 'paranjape-opulus-thane', 'b-paranjape', 'Thane West',
    'Mumbai', '₹1.04 Cr - ₹2.26 Cr', '₹1.04 Cr', 23400,
    '["2 BHK", "3 BHK", "4 BHK"]', 'Under Construction', 'Residential',
    'September 2028', 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?auto=format&fit=crop&q=80&w=1200', 'Paranjape Opulus is a grand 4.8-acre high-rise luxury residential community in Manpada near Hiranandani Meadows, off Pokhran Road No. 2, Thane West. Rising against the scenic Yeoor Hills backdrop, Opulus features 2, 3, and 4 BHK lifestyle apartments with panoramic nature views.

Boasting a half-Olympic size swimming pool, grand clubhouse, co-working lounges, rooftop party lawn, badminton and squash courts, and multi-tier parking. Verified under MahaRERA registration P51700022773 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Half-Olympic Swimming Pool", "Yeoor Hills Views", "Grand Clubhouse & Gym", "Co-Working Hub with WiFi", "Badminton & Squash Courts", "Viviana Mall Proximity", "Rooftop Party Deck"]', '[]', 'P51700022773',
    1, 1, 'Buy 2, 3, 4 BHK in Paranjape Opulus, Manpada Pokhran Road Thane West. Starts ₹1.04 Cr. MahaRERA P51700022773. 100% Zero Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-shrivega-coastal', 'Paranjape Shrivega', 'paranjape-shrivega-coastal', 'b-paranjape', 'Shrivardhan-Diveagar',
    'Alibaug', '₹45.00 L - ₹95.00 L', '₹45.00 L', 4200,
    '["1 BHK", "2 BHK"]', 'Under Construction', 'Residential',
    'December 2026', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200', 'Paranjape Shrivega is a 39-acre gated seaside holiday villa and residential plot township situated along the picturesque Shrivardhan-Diveagar coastal highway at Shekhadi, Raigad, Maharashtra. Overlooking the azure Arabian Sea, Shrivega offers coastal cottages, second homes, and fully developed villa plots.

Amenities include a cliffside infinity swimming pool, seaside cafe, barbecue bay, organic kitchen garden, and yoga retreat pavilions. Just 10 minutes from Diveagar and Harihareshwar beaches. Verified MahaRERA P52000050339 with 100% Zero Brokerage through PROPSMART REALTY.',
    '["39-Acre Gated Seaside Estate", "Arabian Sea Views", "Cliffside Infinity Pool", "Seaside Cafe & BBQ Bay", "Organic Kitchen Garden", "Yoga & Wellness Pavilions", "24/7 Gated Security"]', '[]', 'P52000050339',
    1, 1, 'Sea-facing villas & plots in Paranjape Shrivega, Shrivardhan Diveagar Coast. Starts ₹45.00 L. MahaRERA P52000050339. 0% Brokerage.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-yuthika-baner', 'Paranjape Yuthika', 'paranjape-yuthika-baner', 'b-paranjape', 'Baner',
    'Pune', '₹97.00 L - ₹1.94 Cr', '₹97.00 L', 11200,
    '["2 BHK", "3 BHK"]', 'Ready to Move', 'Residential',
    'Ready to Move', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200', 'Paranjape Yuthika is a ready-to-move-in residential landmark in Veerbhadra Nagar, Baner, Pune. Built across extensive lush grounds, Yuthika offers 2 and 3 BHK family residences with dedicated club facilities, swimming pool, tennis court, and children''s activity zones.

Offering immediate possession in prime Baner with walking proximity to Baner High Street and direct highway access. Verified under MahaRERA registration with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Ready to Move", "Expansive Swimming Pool", "Tennis & Basketball Courts", "Modern Clubhouse", "Landscaped Central Park", "Children''s Play Area", "Covered Car Parking"]', '[]', 'P52100000035',
    1, 0, 'Buy 2 & 3 BHK in Paranjape Yuthika, Baner Pune. Ready to Move homes from ₹97.00 L. 100% Zero Brokerage with PROPSMART REALTY.'
);
INSERT OR REPLACE INTO projects (
    id, title, slug, builder_id, location, city, price_range, exact_price, price_per_sqft,
    configurations, status, type, possession_date, image, hero_image, description,
    features, specs, rera_id, is_verified, is_featured, meta_description
) VALUES (
    'p-paranjape-blue-ridge-golf-island', 'Paranjape Blue Ridge - Golf Island', 'paranjape-blue-ridge-golf-island', 'b-paranjape', 'Hinjewadi',
    'Pune', '₹1.25 Cr - ₹2.10 Cr', '₹1.25 Cr', 12200,
    '["2 BHK", "3 BHK"]', 'Ready to Move', 'Residential',
    'Ready to Move', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200', 'Golf Island is an exclusive enclave within the 138-acre Paranjape Blue Ridge Township in Hinjewadi, Pune. Overlooking the pristine greens of the 9-hole executive golf course and river waters, Golf Island offers ready-to-move 2 & 3 BHK luxury golf residences.

Residents enjoy full access to township amenities including the boat club, international school, SEZ towers, and health centers. Verified under MahaRERA registration with 100% Zero Brokerage through PROPSMART REALTY.',
    '["Direct Golf Course Views", "Riverfront Jogging Track", "Access to Blue Ridge Marina", "Grand Sports Complex", "Ready to Move In", "Multi-tier 24/7 Security"]', '[]', 'P52100000055',
    1, 1, 'Buy 2 & 3 BHK in Paranjape Blue Ridge Golf Island, Hinjewadi Pune. Ready to Move. Starts ₹1.25 Cr. 100% Zero Brokerage.'
);
