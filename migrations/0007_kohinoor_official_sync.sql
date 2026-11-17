-- Migration 0007: Official Kohinoor Group Complete Portfolio Sync
-- Sourced directly from https://iamkohinoor.com/ with authentic imagery and verified MahaRERA

UPDATE builders SET 
        hero_image = 'https://iamkohinoor.com//media/68667c95d42d6_satori-overview-1.webp',
        description = 'Kohinoor Group Pune is renowned for its 42-year legacy and Sada Sukhi Raho philosophy, delivering over 45 landmark residential and commercial projects across Pune prime corridors.',
        total_projects = 30,
        ongoing_projects = 14
    WHERE id = 'b-kohinoor';

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-satori', 'Kohinoor Satori', 'kohinoor-satori', 'b-kohinoor', 'Mahalunge', 'Pune', 
            '₹1.48 Cr - ₹3.35 Cr', '₹1.48 Cr', 
            '["3 BHK", "4 BHK", "4.5 BHK"]', 'Under Construction', 'Residential', '2028', 
            'https://iamkohinoor.com//media/68667c95d42d6_satori-overview-1.webp', 'https://iamkohinoor.com//media/68667c95d42d6_satori-overview-1.webp', '["https://iamkohinoor.com//media/68667c95d42d6_satori-overview-1.webp", "https://iamkohinoor.com//media/6850d5936cf95_satori-walkthrough.webp", "https://iamkohinoor.com//media/6a48e70077db9_image.jpg", "https://iamkohinoor.com//media/684ffe154c475_1(1).webp", "https://iamkohinoor.com//media/68500295dec01_2(1).webp", "https://iamkohinoor.com//media/685002bdebe55_3.webp", "https://iamkohinoor.com//media/685002dda694a_4.webp", "https://iamkohinoor.com//media/6850030243a03_5.webp"]', 'P52100066472', 
            'Kohinoor Satori is a sanctuary of zen-inspired luxury in New Baner-Mahalunge by Kohinoor Group. Spread across 6.04 acres with 7 grand towers, it offers expansive 3, 4 & 4.5 ''Legacy Edition'' automated homes where lush green surroundings meet Kohinoor''s iconic ''Sada Sukhi Raho'' philosophy.', '["Zen-Themed Landscaped Gardens", "Olympic-Length Temperature Controlled Pool", "Exclusive Sky Club & Meditation Deck", "Advanced Smart Home Automation", "Multi-Tier Biometric Security", "Children''s Sensory Play Arena", "Designer Banquet Hall & Private Dining", "EV Fast Charging Stations"]', '[{"type": "3 BHK", "carpetArea": "1,121 - 1,285 sq.ft.", "priceRange": "\u20b91.48 Cr - \u20b91.72 Cr"}, {"type": "4 BHK", "carpetArea": "1,680 - 1,850 sq.ft.", "priceRange": "\u20b92.25 Cr - \u20b92.55 Cr"}, {"type": "4.5 BHK", "carpetArea": "2,250 - 2,326 sq.ft.", "priceRange": "\u20b93.10 Cr - \u20b93.35 Cr"}]', 18.5772, 73.7438, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-central-park', 'Kohinoor Central Park', 'kohinoor-central-park', 'b-kohinoor', 'Hinjewadi', 'Pune', 
            '₹72 L - ₹1.15 Cr', '₹72 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2027', 
            'https://iamkohinoor.com//media/685054a5e7861_overview-img-28-5.webp', 'https://iamkohinoor.com//media/685054a5e7861_overview-img-28-5.webp', '["https://iamkohinoor.com//media/685054a5e7861_overview-img-28-5.webp", "https://iamkohinoor.com//media/6850552909d16_amenities-3(1).webp", "https://iamkohinoor.com//media/68505542bdae8_amenities-4(1).webp", "https://iamkohinoor.com//media/685055a6cd927_amenities-2(1).webp", "https://iamkohinoor.com//media/6852b334a3d8b_1.webp", "https://iamkohinoor.com//media/6852b34c741c9_2.webp", "https://iamkohinoor.com//media/6852b35f82c6d_3.webp"]', 'P52100056358', 
            'Kohinoor Central Park in Hinjewadi Phase 2 spans a massive 13.27-acre integrated lifestyle township featuring 10 residential towers. Designed for IT professionals with zero-waste layouts, world-class sports amenities, and high rental return potential.', '["Central Green Park & Urban Forest", "Club Central with Infinity Pool", "Indoor Badminton & Squash Courts", "Coworking Pods & Business Lounge", "Children''s Thematic Adventure Area", "Jogging & Cycling Track", "24/7 Security & CCTV Monitoring"]', '[{"type": "2 BHK", "carpetArea": "725 - 845 sq.ft.", "priceRange": "\u20b972 L - \u20b985 L"}, {"type": "3 BHK", "carpetArea": "980 - 1,087 sq.ft.", "priceRange": "\u20b998 L - \u20b91.15 Cr"}]', 18.5833, 73.718, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-riverdale', 'Kohinoor Riverdale', 'kohinoor-riverdale', 'b-kohinoor', 'Kharadi', 'Pune', 
            '₹75 L - ₹1.22 Cr', '₹75 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2028', 
            'https://iamkohinoor.com//media/6870aa47d60a7_riverdale-overview.webp', 'https://iamkohinoor.com//media/6870aa47d60a7_riverdale-overview.webp', '["https://iamkohinoor.com//media/6870aa47d60a7_riverdale-overview.webp", "https://iamkohinoor.com//media/68518adc1bdc6_1.webp", "https://iamkohinoor.com//media/68518ae8debca_2.webp", "https://iamkohinoor.com//media/68518af32af30_3.webp", "https://iamkohinoor.com//media/68518afd4673a_4.webp", "https://iamkohinoor.com//media/68518b087c3b3_5.webp", "https://iamkohinoor.com//media/685196b435171_2.webp"]', 'P52100056021', 
            'Wake up to breathtaking river views at Kohinoor Riverdale in New Kharadi. Spread over 4.98 acres with 5 premium towers, Riverdale offers thoughtfully engineered 2 & 3 Bed riverside homes minutes away from EON Free Zone, World Trade Centre, and upcoming metro line.', '["Riverside Promenade & Deck", "Infinity Pool overlooking River", "Signature Clubhouse & Gymnasium", "Reflexology Walkway & Zen Garden", "High-Speed Smart Elevators", "Dedicated Pet Park & Kid''s Play Zone"]', '[{"type": "2 BHK", "carpetArea": "697 - 785 sq.ft.", "priceRange": "\u20b975 L - \u20b986 L"}, {"type": "3 BHK", "carpetArea": "890 - 989 sq.ft.", "priceRange": "\u20b91.05 Cr - \u20b91.22 Cr"}]', 18.5538, 73.9472, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-woodshire', 'Kohinoor Woodshire', 'kohinoor-woodshire', 'b-kohinoor', 'Bhugaon', 'Pune', 
            '₹79 L - ₹1.88 Cr', '₹79 L', 
            '["2 BHK", "3 BHK", "4 BHK"]', 'Under Construction', 'Residential', '2028', 
            'https://iamkohinoor.com//media/68786ea99739c_woodshire-overview-2.webp', 'https://iamkohinoor.com//media/68786ea99739c_woodshire-overview-2.webp', '["https://iamkohinoor.com//media/68786ea99739c_woodshire-overview-2.webp", "https://iamkohinoor.com//media/68503f61b9a85_woodshire.webp", "https://iamkohinoor.com//media/687870b261f93_woodshire-amenity-2.webp", "https://iamkohinoor.com//media/6878711d1d0bf_woodshire-amenities-1.webp", "https://iamkohinoor.com//media/685198a8ebe76_gallery1.webp", "https://iamkohinoor.com//media/685198b3ec8db_gallery2.webp", "https://iamkohinoor.com//media/685198beba7c8_gallery3.webp", "https://iamkohinoor.com//media/685198c85ae38_gallery4.webp"]', 'P52100078709', 
            'Kohinoor Woodshire in Bhugaon near Bavdhan is a nature-inspired luxury residential retreat in West Pune. Nestled amidst rolling green hills across 3.77 acres with 5 towers, it offers peaceful 2, 3 & 4 Bed homes with clean air, forest trails, and city connectivity.', '["Forest Themed Landscape Trails", "Panoramic Valley View Clubhouse", "Infinity Swimming Pool & Kids Pool", "Open Air Amphitheatre", "Yoga & Meditation Lawn", "Modern Fitness Centre & Steam Room", "Multipurpose Sports Court"]', '[{"type": "2 BHK", "carpetArea": "794 - 840 sq.ft.", "priceRange": "\u20b979 L - \u20b986 L"}, {"type": "3 BHK", "carpetArea": "1,040 - 1,180 sq.ft.", "priceRange": "\u20b91.10 Cr - \u20b91.28 Cr"}, {"type": "4 BHK", "carpetArea": "1,420 - 1,546 sq.ft.", "priceRange": "\u20b91.65 Cr - \u20b91.88 Cr"}]', 18.502, 73.754, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-boulevard-towers', 'Kohinoor Boulevard Towers', 'kohinoor-boulevard-towers---uptown-avenue', 'b-kohinoor', 'Punawale', 'Pune', 
            '₹68 L - ₹1.38 Cr', '₹68 L', 
            '["2 BHK", "2.5 BHK", "3 BHK", "3 BHK Duplex"]', 'Under Construction', 'Residential', '2027', 
            'https://iamkohinoor.com//media/6acc7e7955f05_overviewboulevard.jpg', 'https://iamkohinoor.com//media/6acc7e7955f05_overviewboulevard.jpg', '["https://iamkohinoor.com//media/6acc7e7955f05_overviewboulevard.jpg", "https://iamkohinoor.com//media/6851a1106f8ec_1.webp", "https://iamkohinoor.com//media/6851a11ab8aba_2.webp", "https://iamkohinoor.com//media/6851a1240d739_3.webp", "https://iamkohinoor.com//media/6851a12d5f516_4.webp", "https://iamkohinoor.com//media/6851a13803571_5.webp", "https://iamkohinoor.com//media/6851a1496d3bd_1.webp"]', 'P52100055120', 
            'Kohinoor Boulevard Towers at Uptown Avenue in Punawale is a landmark 7.9-acre lifestyle hub in West Pune with 8 soaring towers. Offering premium 2, 2.5, 3 BHK & exclusive 3 BHK Duplex residences, seamlessly connected to Hinjewadi IT Park and Pune-Mumbai Expressway.', '["Grand Central Boulevard & Plaza", "Rooftop Infinity Edge Pool", "Sky Lounges & Viewing Decks", "High-Tech Fitness Centre", "Squash Court & Indoor Games Arena", "Kids Interactive Water Play Zone", "EV Charging Network"]', '[{"type": "2 BHK", "carpetArea": "723 - 785 sq.ft.", "priceRange": "\u20b968 L - \u20b976 L"}, {"type": "2.5 BHK", "carpetArea": "875 - 920 sq.ft.", "priceRange": "\u20b982 L - \u20b989 L"}, {"type": "3 BHK", "carpetArea": "1,050 - 1,120 sq.ft.", "priceRange": "\u20b999 L - \u20b91.08 Cr"}, {"type": "3 BHK Duplex", "carpetArea": "1,220 - 1,276 sq.ft.", "priceRange": "\u20b91.25 Cr - \u20b91.38 Cr"}]', 18.6315, 73.746, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-viva-pixel', 'Kohinoor Viva Pixel', 'kohinoor-viva-pixel', 'b-kohinoor', 'Dhanori', 'Pune', 
            '₹62 L - ₹1.25 Cr', '₹62 L', 
            '["2 BHK", "3 BHK", "4 BHK"]', 'Under Construction', 'Residential', '2027', 
            'https://iamkohinoor.com//media/6853b80c10ba3_pixel-overview.webp', 'https://iamkohinoor.com//media/6853b80c10ba3_pixel-overview.webp', '["https://iamkohinoor.com//media/6853b80c10ba3_pixel-overview.webp", "https://iamkohinoor.com//media/6870a96dbcd7b_pixel-2-overview.webp", "https://iamkohinoor.com//media/6852b63c963da_1.webp", "https://iamkohinoor.com//media/6852b64b85100_2.webp", "https://iamkohinoor.com//media/6852b657cf4bb_3.webp", "https://iamkohinoor.com//media/6852b6645dba7_4.webp"]', 'P52100053030', 
            'Kohinoor Viva Pixel in Dhanori features 6 residential towers offering smartly planned 2, 3 & 4 Bed homes with ultra-efficient carpet layouts, just minutes away from Pune International Airport, Viman Nagar, and Kalyani Nagar.', '["Designer Swimming Pool & Deck", "Club Pixel with Aerobics & Gym", "Landscaped Party Lawn & Gazebo", "Dedicated Senior Citizen Alcove", "Children''s Play Park & Sand Pit", "Full Power Backup for Essential Services"]', '[{"type": "2 BHK", "carpetArea": "780 - 845 sq.ft.", "priceRange": "\u20b962 L - \u20b970 L"}, {"type": "3 BHK", "carpetArea": "1,037 - 1,115 sq.ft.", "priceRange": "\u20b985 L - \u20b995 L"}, {"type": "4 BHK", "carpetArea": "1,240 - 1,280 sq.ft.", "priceRange": "\u20b91.15 Cr - \u20b91.25 Cr"}]', 18.588, 73.896, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-westview-reserve-punawale', 'Kohinoor Westview Reserve', 'kohinoor-westview-reserve-punawale-pune', 'b-kohinoor', 'Punawale', 'Pune', 
            '₹72 L - ₹1.18 Cr', '₹72 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2026', 
            'https://iamkohinoor.com//media/696b17018afa9_kohinoorwestviewreserve.jpg', 'https://iamkohinoor.com//media/696b17018afa9_kohinoorwestviewreserve.jpg', '["https://iamkohinoor.com//media/696b17018afa9_kohinoorwestviewreserve.jpg", "https://iamkohinoor.com//media/68565fe8e89c0_frame1100377344.webp", "https://iamkohinoor.com//media/6850552909d16_amenities-3(1).webp"]', 'P52100048589', 
            'Kohinoor Westview Reserve in Punawale / New Wakad spans 10 grand acres featuring 7 residential towers bordered by scenic nature reserves. Offering 2 & 3 BHK nature-rich homes with resort-style podium amenities.', '["Resort-Inspired Swimming Pool", "Club Westview & Banquet Hall", "Multi-Tier Security & Biometrics", "Tree-Lined Walking Trails", "Children''s Play Zone"]', '[{"type": "2 BHK", "carpetArea": "798 - 845 sq.ft.", "priceRange": "\u20b972 L - \u20b979 L"}, {"type": "3 BHK", "carpetArea": "1,050 - 1,244 sq.ft.", "priceRange": "\u20b998 L - \u20b91.18 Cr"}]', 18.6315, 73.746, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-abhimaan-talegaon', 'Kohinoor Abhimaan Homes', 'kohinoor-abhimaan-talegaon-pune', 'b-kohinoor', 'Talegaon Dabhade', 'Pune', 
            '₹28 L - ₹45 L', '₹28 L', 
            '["1 BHK", "2 BHK"]', 'Ready to Move', 'Residential', 'Ready to Move', 
            'https://iamkohinoor.com//media/695b79f557d47_abhimaan.jpg', 'https://iamkohinoor.com//media/695b79f557d47_abhimaan.jpg', '["https://iamkohinoor.com//media/695b79f557d47_abhimaan.jpg", "https://iamkohinoor.com//media/68517d348d271_kohinoor_abhimaan_homes_09.webp"]', 'P52100032485', 
            'Kohinoor Abhimaan Homes in Shirgaon / Talegaon Dabhade offers pocket-friendly 1 & 2 BHK homes with complete lifestyle amenities, excellent connectivity to Mumbai-Pune Expressway and Talegaon MIDC industrial belt.', '["Clubhouse & Fully Equipped Gym", "Swimming Pool & Kids Splash Pool", "Landscaped Green Gardens", "Indoor Games Room & Table Tennis", "Children''s Play Arena"]', '[{"type": "1 BHK", "carpetArea": "447 - 485 sq.ft.", "priceRange": "\u20b928 L - \u20b932 L"}, {"type": "2 BHK", "carpetArea": "590 - 649 sq.ft.", "priceRange": "\u20b939 L - \u20b945 L"}]', 18.73, 73.68, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-kaleido-wagholi', 'Kohinoor Kaleido Phase 2', 'kohinoor-kaleido-phase-2', 'b-kohinoor', 'Wagholi', 'Pune', 
            '₹68 L - ₹1.28 Cr', '₹68 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2028', 
            'https://iamkohinoor.com//media/69ef0da9cd1ec_kaleidooverviewimage.jpg', 'https://iamkohinoor.com//media/69ef0da9cd1ec_kaleidooverviewimage.jpg', '["https://iamkohinoor.com//media/69ef0da9cd1ec_kaleidooverviewimage.jpg", "https://iamkohinoor.com//media/6953f5304cce8_rerakaleidophase2.jpg"]', 'P52100078107', 
            'Kohinoor Kaleido Phase 2 in Wagholi / New Kharadi spans 14 acres with 7 grand towers. Offering urban 2 & 3 Bed homes equipped with 35+ lifestyle amenities and seamless access to Kharadi IT hub.', '["Grand Central Clubhouse", "Rooftop Swimming Pool", "Fitness Center & Crossfit Arena", "Tennis & Badminton Courts", "Kids Thematic Play Arena"]', '[{"type": "2 BHK", "carpetArea": "740 - 815 sq.ft.", "priceRange": "\u20b968 L - \u20b977 L"}, {"type": "3 BHK", "carpetArea": "1,040 - 1,359 sq.ft.", "priceRange": "\u20b998 L - \u20b91.28 Cr"}]', 18.58, 73.98, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-royale-towers', 'Kohinoor Royale Towers', 'kohinoor-royale-towers', 'b-kohinoor', 'Hinjewadi', 'Pune', 
            '₹76 L - ₹1.18 Cr', '₹76 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2027', 
            'https://iamkohinoor.com//media/6a05bee56c1ca_royaletowers.jpg', 'https://iamkohinoor.com//media/6a05bee56c1ca_royaletowers.jpg', '["https://iamkohinoor.com//media/6a05bee56c1ca_royaletowers.jpg", "https://iamkohinoor.com//media/6954b6c8b0c58_0190-blueridgehinjewadi-ext08.jpg", "https://iamkohinoor.com//media/6954b6e57b8b1_state-of-the-art-gym-0190-blueridgehinjewadi-21.jpg"]', 'P52100061033', 
            'Kohinoor Royale Towers in Hinjewadi Phase 1 features 2 exclusive high-rise towers across 3 acres. Designed for modern tech professionals with zero transit to prime IT campuses.', '["Sky Terrace Lounge", "Infinity Pool & Jacuzzi", "Modern Gym & Yoga Studio", "Tennis & Badminton Courts", "Children''s Play Park"]', '[{"type": "2 BHK", "carpetArea": "768 - 825 sq.ft.", "priceRange": "\u20b976 L - \u20b984 L"}, {"type": "3 BHK", "carpetArea": "990 - 1,083 sq.ft.", "priceRange": "\u20b91.02 Cr - \u20b91.18 Cr"}]', 18.5912, 73.7389, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-regalia-towers', 'Kohinoor Regalia Towers', 'kohinoor-regalia-towers', 'b-kohinoor', 'Wakad', 'Pune', 
            '₹78 L - ₹1.24 Cr', '₹78 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2028', 
            'https://iamkohinoor.com//media/694e701a1f594_0059-kohinoor-s.no.109-wakad-14.jpg', 'https://iamkohinoor.com//media/694e701a1f594_0059-kohinoor-s.no.109-wakad-14.jpg', '["https://iamkohinoor.com//media/694e701a1f594_0059-kohinoor-s.no.109-wakad-14.jpg", "https://iamkohinoor.com//media/694d1ad87ccdb_swimmingpool.jpeg", "https://iamkohinoor.com//media/694d1af04811a_theatre.jpeg", "https://iamkohinoor.com//media/694d1b04d075c_path.jpeg", "https://iamkohinoor.com//media/694d1b1bdca76_cowrkingspace.jpeg"]', 'P52100078271', 
            'Kohinoor Regalia Towers in Downtown Wakad spans 3.5 acres with 2 premium high-rise towers. Offering 2 & 3 Bed homes with bespoke architecture, coworking hubs, and private movie theatre.', '["Private Mini Movie Theatre", "Executive Coworking Space", "Temperature-Controlled Swimming Pool", "Fitness Hub & Steam Room", "Children''s Sensory Play Ground"]', '[{"type": "2 BHK", "carpetArea": "740 - 810 sq.ft.", "priceRange": "\u20b978 L - \u20b986 L"}, {"type": "3 BHK", "carpetArea": "980 - 1,076 sq.ft.", "priceRange": "\u20b91.08 Cr - \u20b91.24 Cr"}]', 18.5987, 73.766, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-avantara', 'Kohinoor Avantara', 'kohinoor-avantara', 'b-kohinoor', 'Wakad', 'Pune', 
            '₹79 L - ₹1.35 Cr', '₹79 L', 
            '["2 BHK", "3 BHK"]', 'Under Construction', 'Residential', '2027', 
            'https://iamkohinoor.com//media/69e86f63d908b_anantara_podium_view_post_davantara.jpg', 'https://iamkohinoor.com//media/69e86f63d908b_anantara_podium_view_post_davantara.jpg', '["https://iamkohinoor.com//media/69e86f63d908b_anantara_podium_view_post_davantara.jpg", "https://iamkohinoor.com//media/69c767e56e170_anantara_podium_view_final_highres.jpg", "https://iamkohinoor.com//media/69c767989acd0_25032026_post_highres.jpg", "https://iamkohinoor.com//media/69c767c715ba7_25032026_v2_post_highres.jpg"]', 'P52100061984', 
            'Kohinoor Avantara in Downtown Wakad spans 8.66 acres featuring 8 iconic residential towers. Designed for modern luxury with panoramic podium vistas, smart homes, and unbeatable walkability to high-street retail and schools.', '["Grand Elevated Podium Garden", "Clubhouse Avantara with Olympic-length Pool", "Fitness Hub & Aerobics Studio", "Badminton & Multi-Sport Courts", "Thematic Children''s Play Arena"]', '[{"type": "2 BHK", "carpetArea": "704 - 785 sq.ft.", "priceRange": "\u20b979 L - \u20b989 L"}, {"type": "3 BHK", "carpetArea": "980 - 1,087 sq.ft.", "priceRange": "\u20b91.15 Cr - \u20b91.35 Cr"}]', 18.5987, 73.766, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-business-tower-mundhwa', 'Kohinoor Business Tower', 'kohinoor-business-tower', 'b-kohinoor', 'Mundhwa', 'Pune', 
            '₹65 L - ₹8.50 Cr', '₹65 L', 
            '["Commercial Offices", "Retail Spaces"]', 'Ready to Move', 'Commercial', 'Ready to Move', 
            'https://iamkohinoor.com//media/68c7c012df26c_1--121.webp', 'https://iamkohinoor.com//media/68c7c012df26c_1--121.webp', '["https://iamkohinoor.com//media/68c7c012df26c_1--121.webp", "https://iamkohinoor.com//media/68565d3812d56_frame1100377335.webp", "https://iamkohinoor.com//media/68523182d8454_1.webp", "https://iamkohinoor.com//media/6852318cc180e_2.webp", "https://iamkohinoor.com//media/6852319669a27_3.webp"]', 'P52100049202', 
            'Kohinoor Business Tower (KBT) at Koregaon Park Annexe / Mundhwa is a Grade-A commercial landmark across 0.92 acres with 16 floors. Featuring double-height air-conditioned lobbies, high-speed elevators, and high rental yield potential.', '["Grand Triple-Height Entrance Lobby", "High-Speed Destination Elevators", "Ample Multi-Level Car Parking", "100% Power Backup & Advanced Fire Safety", "Cafeteria & Executive Breakout Zones"]', '[{"type": "Boutique Offices", "carpetArea": "450 - 850 sq.ft.", "priceRange": "\u20b965 L - \u20b91.25 Cr"}, {"type": "Corporate Suites", "carpetArea": "1,500 - 5,500 sq.ft.", "priceRange": "\u20b92.20 Cr - \u20b98.50 Cr"}]', 18.535, 73.923, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-business-tower-baner', 'Kohinoor Business Tower Baner', 'kohinoor-business-tower---baner', 'b-kohinoor', 'Baner', 'Pune', 
            '₹95 L - ₹13.50 Cr', '₹95 L', 
            '["Commercial Offices", "IT/ITES Spaces"]', 'Under Construction', 'Commercial', '2027', 
            'https://iamkohinoor.com//media/687f8a62e4396_kbt-baner-ocerview.webp', 'https://iamkohinoor.com//media/687f8a62e4396_kbt-baner-ocerview.webp', '["https://iamkohinoor.com//media/687f8a62e4396_kbt-baner-ocerview.webp", "https://iamkohinoor.com//media/68565d63793fa_frame1100377336.webp", "https://iamkohinoor.com//media/6853b4bf2f7a1_gallery1.webp", "https://iamkohinoor.com//media/6853b4cc600e0_gallery2.webp"]', 'P52100079205', 
            'Kohinoor Business Tower Baner is an iconic Grade A commercial hub spanning 2.44 acres with 22 floors right on Baner Main Road. Tailored for corporate headquarters, IT conglomerates, and premium retail brands.', '["LEED Certified Green Architecture", "Grand Glass-Faceted Facade", "High-Speed Smart Elevators", "Rooftop Business Sky Lounge", "Executive Meeting Rooms & Cafes"]', '[{"type": "Smart Offices", "carpetArea": "600 - 1,200 sq.ft.", "priceRange": "\u20b995 L - \u20b91.95 Cr"}, {"type": "Corporate Floors", "carpetArea": "2,000 - 8,000 sq.ft.", "priceRange": "\u20b93.20 Cr - \u20b913.50 Cr"}]', 18.559, 73.7868, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-world-tower-pimpri', 'Kohinoor World Tower', 'kohinoor-world-tower', 'b-kohinoor', 'Pimpri Chinchwad', 'Pune', 
            '₹75 L - ₹6.80 Cr', '₹75 L', 
            '["Commercial Offices", "Retail High-Street"]', 'Ready to Move', 'Commercial', 'Ready to Move', 
            'https://iamkohinoor.com//media/69ce1ae2a6408_newproject.jpg', 'https://iamkohinoor.com//media/69ce1ae2a6408_newproject.jpg', '["https://iamkohinoor.com//media/69ce1ae2a6408_newproject.jpg", "https://iamkohinoor.com//media/6852272db3112_1.webp", "https://iamkohinoor.com//media/68522737a1f70_2.webp", "https://iamkohinoor.com//media/68522741b5256_3.webp"]', 'P52100028796', 
            'Kohinoor World Tower (KWT) in Pimpri is PCMC''s premier integrated business destination directly on Old Mumbai-Pune Highway and adjacent to Pimpri Metro Station. Featuring 24 storeys of Grade-A office spaces and bustling high-street retail.', '["Direct Pimpri Metro Station Walkway Access", "Grand Air-Conditioned Central Atrium", "Multi-Tier High-Speed Lift Banks", "Integrated Food Court & High-Street Retail", "Multi-Level Basement Parking for 1000+ Cars"]', '[{"type": "Commercial Offices", "carpetArea": "500 - 3,500 sq.ft.", "priceRange": "\u20b975 L - \u20b95.50 Cr"}, {"type": "High-Street Retail", "carpetArea": "400 - 2,200 sq.ft.", "priceRange": "\u20b91.10 Cr - \u20b96.80 Cr"}]', 18.6279, 73.8009, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

INSERT INTO projects (
            id, title, slug, builder_id, location, city, price_range, exact_price, 
            configurations, status, type, possession_date, image, 
            hero_image, images, rera_id, description, amenities, configuration_details, lat, lng, is_verified
        ) VALUES (
            'p-kohinoor-world-tower-phase-2', 'Kohinoor World Tower Phase 2', 'kohinoor-world-tower-phase-2', 'b-kohinoor', 'Pimpri Chinchwad', 'Pune', 
            '₹1.20 Cr - ₹9.80 Cr', '₹1.20 Cr', 
            '["Commercial Offices", "IT Park Campuses"]', 'Under Construction', 'Commercial', '2028', 
            'https://iamkohinoor.com//media/687f7ce625f53_kwt-pimpri-ph2.webp', 'https://iamkohinoor.com//media/687f7ce625f53_kwt-pimpri-ph2.webp', '["https://iamkohinoor.com//media/687f7ce625f53_kwt-pimpri-ph2.webp", "https://iamkohinoor.com//media/685553e5752b9_1.webp", "https://iamkohinoor.com//media/685553ef1f4cf_2.webp", "https://iamkohinoor.com//media/685553f6b70d4_3.webp"]', 'P52100066551', 
            'Kohinoor World Tower Phase 2 expands the iconic KWT business district across 8.13 acres with 5 state-of-the-art corporate towers, setting a new benchmark for MNC headquarters in Pimpri Chinchwad.', '["Campus Style IT/Corporate Infrastructure", "Central Water Cascade & Plaza", "LEED Gold Rated Green Standards", "Rooftop Helipad & Sky Lounge", "Extensive EV Charging Infrastructure"]', '[{"type": "IT/Commercial Offices", "carpetArea": "800 - 6,500 sq.ft.", "priceRange": "\u20b91.20 Cr - \u20b99.80 Cr"}]', 18.6279, 73.8009, 1
        ) ON CONFLICT(id) DO UPDATE SET 
            title = excluded.title,
            slug = excluded.slug,
            location = excluded.location,
            price_range = excluded.price_range,
            exact_price = excluded.exact_price,
            configurations = excluded.configurations,
            status = excluded.status,
            type = excluded.type,
            possession_date = excluded.possession_date,
            image = excluded.image,
            hero_image = excluded.hero_image,
            images = excluded.images,
            rera_id = excluded.rera_id,
            description = excluded.description,
            amenities = excluded.amenities,
            configuration_details = excluded.configuration_details,
            lat = excluded.lat,
            lng = excluded.lng,
            is_verified = 1;

