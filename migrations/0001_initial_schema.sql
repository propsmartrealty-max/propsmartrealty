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
