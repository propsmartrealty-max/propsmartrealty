-- ==============================================================================
-- Cloudflare D1 Initial Schema Migration: PROPSMART REALTY
-- Edge-Native SQLite Relational Architecture
-- ==============================================================================

-- 1. BUILDERS Table
CREATE TABLE IF NOT EXISTS builders (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    logo TEXT,
    hero_image TEXT,
    description TEXT,
    established_year INTEGER,
    total_projects INTEGER,
    ongoing_projects INTEGER,
    trust_score REAL DEFAULT 9.0,
    is_verified INTEGER DEFAULT 1,
    mobile TEXT,
    experience INTEGER,
    locations TEXT, -- JSON array of locality names
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_builders_slug ON builders(slug);

-- 2. PROJECTS Table
CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    builder_id TEXT REFERENCES builders(id) ON DELETE SET NULL,
    location TEXT NOT NULL,
    price_range TEXT NOT NULL,
    exact_price TEXT,
    configurations TEXT, -- JSON array e.g. ["2 BHK", "3 BHK"]
    status TEXT CHECK (status IN ('Ready to Move', 'Under Construction', 'New Launch')),
    type TEXT CHECK (type IN ('Residential', 'Commercial', 'Plot')),
    possession_date TEXT,
    image TEXT,
    hero_image TEXT,
    master_layout TEXT,
    floor_plans TEXT, -- JSON array of image URLs
    description TEXT,
    features TEXT, -- JSON array of strings
    specs TEXT, -- JSON object
    highlights TEXT, -- JSON array of strings
    rera_id TEXT,
    price_per_sqft REAL,
    verification_status TEXT DEFAULT 'Verified' CHECK (verification_status IN ('Pending', 'Verified', 'Rejected')),
    verification_source TEXT,
    seo_keywords TEXT, -- JSON array
    meta_description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_location ON projects(location);
CREATE INDEX IF NOT EXISTS idx_projects_type ON projects(type);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_builder_id ON projects(builder_id);

-- 3. PROJECT CONFIGURATIONS Table (Granular Unit Pricing & Dimensions)
CREATE TABLE IF NOT EXISTS project_configurations (
    id TEXT PRIMARY KEY,
    project_id TEXT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    carpet_area INTEGER NOT NULL,
    balcony_area INTEGER DEFAULT 0,
    bathrooms INTEGER DEFAULT 1,
    base_price REAL NOT NULL,
    price_per_sqft REAL,
    infra_charges REAL DEFAULT 0,
    clubhouse_charges REAL DEFAULT 0,
    gst_rate REAL DEFAULT 5.0,
    stamp_duty_rate REAL DEFAULT 7.0,
    registration_charges REAL DEFAULT 30000,
    layout_image TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_configurations_project_id ON project_configurations(project_id);

-- 4. LOCALITIES Table
CREATE TABLE IF NOT EXISTS localities (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    avg_price_sqft REAL NOT NULL DEFAULT 8500,
    appreciation_rate REAL DEFAULT 7.5,
    image_url TEXT,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_localities_name ON localities(name);

-- 5. LEADS Table (Direct Inquiries & Property Listings)
CREATE TABLE IF NOT EXISTS leads (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT,
    type TEXT NOT NULL, -- 'Sell Property', 'Rent Out', 'Inquiry', 'Contact Us'
    property_type TEXT,
    location TEXT,
    price TEXT,
    message TEXT,
    status TEXT DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Qualified', 'Closed')),
    project_id TEXT,
    metadata TEXT, -- JSON object containing UTM tags, referrer, etc.
    ip_address TEXT,
    user_agent TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- 6. BANNERS Table
CREATE TABLE IF NOT EXISTS banners (
    id TEXT PRIMARY KEY,
    title TEXT,
    image_url TEXT NOT NULL,
    link TEXT,
    is_active INTEGER DEFAULT 1,
    sort_order INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_banners_sort_order ON banners(sort_order ASC);

-- 7. ADMINS Table (Hashed Authentication)
CREATE TABLE IF NOT EXISTS admins (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    role TEXT DEFAULT 'admin',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- ==============================================================================
-- Cloudflare D1 Seed Migration: PROPSMART REALTY
-- Default builders, projects, localities & admin
-- ==============================================================================

-- 1. Insert Localities
INSERT OR IGNORE INTO localities (id, name, avg_price_sqft, appreciation_rate, image_url, description) VALUES
('loc-1', 'Hinjewadi', 7800, 8.5, '/images/localities/hinjewadi.svg', 'Pune''s prime IT Hub with rapid infrastructure and metro connectivity.'),
('loc-2', 'Baner', 10500, 9.2, '/images/localities/baner.svg', 'Premium residential and commercial corridor of West Pune.'),
('loc-3', 'Wakad', 8200, 8.1, '/images/localities/wakad.svg', 'Thriving suburban residential hub adjacent to Mumbai-Pune Expressway.'),
('loc-4', 'Kharadi', 9600, 9.5, '/images/localities/kharadi.svg', 'East Pune''s IT epicentre hosting EON Free Zone and World Trade Center.'),
('loc-5', 'Balewadi', 9800, 8.9, '/images/localities/balewadi.svg', 'High-street retail, modern towers and sports infrastructure corridor.'),
('loc-6', 'Mahalunge', 7200, 10.1, '/images/localities/mahalunge.svg', 'Hi-tech smart city township cluster near Hinjewadi and Baner.'),
('loc-7', 'Pimple Nilakh', 9400, 7.8, '/images/localities/pimple-nilakh.svg', 'Exclusive green riverside residential enclave close to Aundh.'),
('loc-8', 'Wagholi', 6400, 7.4, '/images/localities/wagholi.svg', 'Rapidly developing eastern suburb with schools and township projects.'),
('loc-9', 'Tathawade', 7500, 8.4, '/images/localities/tathawade.svg', 'Educational hub with excellent access to Expressway and Wakad.'),
('loc-10', 'Bavdhan', 8900, 7.6, '/images/localities/bavdhan.svg', 'Scenic western suburb nestled near hills with connectivity to Kothrud.');

-- 2. Insert Builders
INSERT OR IGNORE INTO builders (id, name, slug, logo, hero_image, description, established_year, total_projects, ongoing_projects, trust_score, is_verified, locations) VALUES
('b-kolte-patil', 'Kolte-Patil Developers', 'kolte-patil-developers', '/images/builders/kolte-patil.svg', '/images/projects/kolte-patil-clubhouse.jpg', 'Over 3 decades of landmark creations defining Pune''s skyline.', 1991, 50, 15, 9.8, 1, '["Hinjewadi", "Wakad", "Pimple Nilakh"]'),
('b-godrej', 'Godrej Properties', 'godrej-properties', '/images/builders/godrej.svg', 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200', '125-year legacy of trust, excellence, and sustainable real estate development.', 1990, 85, 24, 9.7, 1, '["Hinjewadi", "Mahalunge", "Keshav Nagar"]'),
('b-vtp', 'VTP Realty', 'vtp-realty', '/images/builders/vtp-realty.svg', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200', 'Pune''s leading volume developer renowned for maximum usable space.', 2011, 35, 18, 9.5, 1, '["Mahalunge", "Kharadi", "Hinjewadi"]'),
('b-gera', 'Gera Developments', 'gera-developments', '/images/builders/gera.svg', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200', 'Pioneers of ChildCentric Homes with 5-year warranty on construction.', 1970, 40, 8, 9.6, 1, '["Kharadi", "Bavdhan", "Kalyani Nagar"]'),
('b-panchshil', 'Panchshil Realty', 'panchshil-realty', '/images/builders/panchshil.svg', 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200', 'Pune''s premier ultra-luxury developer behind Trump Towers and YOO Pune.', 2002, 25, 6, 9.9, 1, '["Kharadi", "Kalyani Nagar", "Wagholi"]'),
('b-kasturi', 'Kasturi Housing', 'kasturi-housing', '/images/builders/kasturi.svg', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200', 'Crafting bespoke luxury residences with timeless architectural finesse.', 1999, 18, 4, 9.6, 1, '["Balewadi", "Baner", "Wakad"]');

-- 3. Insert Flagship Projects
INSERT OR IGNORE INTO projects (id, title, slug, builder_id, location, price_range, configurations, status, type, possession_date, image, hero_image, description, rera_id, price_per_sqft, verification_status, features, specs, highlights) VALUES
(
    'p-kolte-patil-life-republic',
    'Kolte Patil Life Republic',
    'kolte-patil-life-republic',
    'b-kolte-patil',
    'Hinjewadi',
    '₹45 L - ₹1.2 Cr',
    '["1 BHK", "2 BHK", "3 BHK"]',
    'Under Construction',
    'Residential',
    'Dec 2026',
    '/images/projects/kolte-patil-life-republic.jpg',
    '/images/projects/kolte-patil-clubhouse.jpg',
    '400-acre integrated township in Hinjewadi offering world-class living with schools, hospitals, and Olympic-sized sports arenas.',
    'P52100028741',
    7200,
    'Verified',
    '["400-Acre Township", "Anisha Global School inside", "Multi-tier Security", "3 Clubhouses", "Olympic Swimming Pool"]',
    '{"structure": "Mivan Formwork Earthquake Resistant", "flooring": "800x800mm Vitrified Tiles", "doors": "Laminated Flush Doors", "fittings": "Grohe / American Standard"}',
    '["Direct developer pricing with zero brokerage", "Official MahaRERA sales mandate", "Walking distance from upcoming Metro Line 3"]'
),
(
    'p-godrej-woodsville',
    'Godrej Woodsville',
    'godrej-woodsville',
    'b-godrej',
    'Hinjewadi',
    '₹65 L - ₹1.15 Cr',
    '["2 BHK", "3 BHK"]',
    'Under Construction',
    'Residential',
    'March 2027',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200',
    'Forest-themed premium residences at Hinjewadi Phase 1 with 400+ trees and sky lounge overlooking the greenery.',
    'P52100046729',
    8400,
    'Verified',
    '["Forest Theme Park", "Sky Lounge at 32nd Floor", "EV Charging Stations", "Rooftop Infinity Pool"]',
    '{"structure": "Shear Wall Concrete", "flooring": "Italian Marble Finish Vitrified", "doors": "Teak Frame Designer Doors"}',
    '["Zero brokerage through Propsmart Realty", "Direct allotment from developer master inventory"]'
),
(
    'p-vtp-blue-waters',
    'VTP Blue Waters',
    'vtp-blue-waters',
    'b-vtp',
    'Mahalunge',
    '₹52 L - ₹1.45 Cr',
    '["1 BHK", "2 BHK", "3 BHK"]',
    'New Launch',
    'Residential',
    'Dec 2027',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    '100+ acre riverside township at the junction of Baner and Hinjewadi overlooking the Mula-Mutha river.',
    'P52100022067',
    7600,
    'Verified',
    '["Riverside Promenade", "Max Space Architecture", "Horse Riding Academy", "Podium Amenities"]',
    '{"structure": "Aluform Technology", "flooring": "Glazed Vitrified Tiles", "windows": "Powder Coated Aluminum"}',
    '["Direct developer launch mandate", "Smart home automation included free"]'
),
(
    'p-gera-planet-of-joy',
    'Gera Planet of Joy',
    'gera-planet-of-joy',
    'b-gera',
    'Kharadi',
    '₹88 L - ₹1.85 Cr',
    '["2 BHK", "3 BHK", "Duplex"]',
    'Under Construction',
    'Residential',
    'June 2026',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    'ChildCentric Homes in Upper Kharadi with learning academies coached by Mahesh Bhupathi, Shankar Mahadevan, and Shiamak Davar.',
    'P52100022416',
    9200,
    'Verified',
    '["Celebrity Academies Included", "5-Year Construction Warranty", "Temperature-controlled Pool"]',
    '{"structure": "RCC Framed", "flooring": "Vitrified Wooden Plank Finish", "electrical": "Schneider Modular"}',
    '["Exclusive Propsmart buyer benefits", "Pre-negotiated developer payment plans"]'
),
(
    'p-panchshil-towers',
    'Panchshil Towers',
    'panchshil-towers',
    'b-panchshil',
    'Kharadi',
    '₹2.5 Cr - ₹4.8 Cr',
    '["3.5 BHK", "4.5 BHK", "Penthouse"]',
    'Ready to Move',
    'Residential',
    'Ready',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200',
    'Iconic 130-meter high skyscrapers in Kharadi Annex with VRV air-conditioning, triple-height lobbies, and private elevators.',
    'P52100000412',
    12500,
    'Verified',
    '["VRV Air-conditioning", "Private Elevator Access", "Concierge Service", "75% Open Greenery"]',
    '{"structure": "Steel Composite High Rise", "flooring": "Imported Marble", "kitchen": "Modular German Poggenpohl"}',
    '["Ultra-luxury direct mandate", "VIP site visits arranged directly with builder management"]'
);

-- 4. Insert Project Configurations
INSERT OR IGNORE INTO project_configurations (id, project_id, name, carpet_area, balcony_area, bathrooms, base_price, price_per_sqft, infra_charges, clubhouse_charges) VALUES
('cfg-lr-1', 'p-kolte-patil-life-republic', '1 BHK Smart', 485, 45, 1, 4500000, 7200, 200000, 150000),
('cfg-lr-2', 'p-kolte-patil-life-republic', '2 BHK Premium', 735, 65, 2, 6800000, 7200, 250000, 150000),
('cfg-lr-3', 'p-kolte-patil-life-republic', '3 BHK Luxury', 1050, 95, 3, 9800000, 7200, 300000, 150000),
('cfg-gw-1', 'p-godrej-woodsville', '2 BHK Forest View', 760, 50, 2, 6500000, 8400, 250000, 200000),
('cfg-gw-2', 'p-godrej-woodsville', '3 BHK Luxe', 995, 80, 3, 11500000, 8400, 300000, 200000),
('cfg-vtp-1', 'p-vtp-blue-waters', '2 BHK Riverside', 720, 60, 2, 5800000, 7600, 200000, 150000),
('cfg-vtp-2', 'p-vtp-blue-waters', '3 BHK Grande', 1020, 85, 3, 8900000, 7600, 250000, 150000);

-- 5. Insert Default Seed Admin
-- Email: admin@propsmartrealty.com, Default Dev Password: 'Admin@Propsmart2026'
INSERT OR IGNORE INTO admins (id, email, password_hash, salt, role) VALUES
('admin-1', 'admin@propsmartrealty.com', 'a3f5e921d782163b7e41f6e4d588fa4b34b16279f06129849fa8619bc1638f29', 'propsmart_salt_2026', 'superadmin');
