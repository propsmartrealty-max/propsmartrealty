-- Cloudflare D1 Advanced Enterprise Upgrade Migration
-- 1. Full-Text Search (FTS5) Engine for sub-millisecond BM25 keyword matching
CREATE VIRTUAL TABLE IF NOT EXISTS projects_fts USING fts5(
    id UNINDEXED,
    title,
    slug,
    builder_id,
    location,
    description,
    configurations,
    features,
    highlights,
    rera_id,
    tokenize = 'porter unicode61'
);

-- 2. Populate FTS5 index from current projects
DELETE FROM projects_fts;
INSERT INTO projects_fts(id, title, slug, builder_id, location, description, configurations, features, highlights, rera_id)
SELECT id, title, slug, builder_id, location, description, configurations, features, highlights, rera_id FROM projects;

-- 3. Automatic Synchronization Triggers
CREATE TRIGGER IF NOT EXISTS trg_projects_fts_insert AFTER INSERT ON projects BEGIN
    INSERT INTO projects_fts(id, title, slug, builder_id, location, description, configurations, features, highlights, rera_id)
    VALUES (new.id, new.title, new.slug, new.builder_id, new.location, new.description, new.configurations, new.features, new.highlights, new.rera_id);
END;

CREATE TRIGGER IF NOT EXISTS trg_projects_fts_delete AFTER DELETE ON projects BEGIN
    DELETE FROM projects_fts WHERE id = old.id;
END;

CREATE TRIGGER IF NOT EXISTS trg_projects_fts_update AFTER UPDATE ON projects BEGIN
    DELETE FROM projects_fts WHERE id = old.id;
    INSERT INTO projects_fts(id, title, slug, builder_id, location, description, configurations, features, highlights, rera_id)
    VALUES (new.id, new.title, new.slug, new.builder_id, new.location, new.description, new.configurations, new.features, new.highlights, new.rera_id);
END;

-- 4. High-Throughput Composite B-Tree Indexes
CREATE INDEX IF NOT EXISTS idx_projects_loc_type_status ON projects(location, type, status);
CREATE INDEX IF NOT EXISTS idx_projects_builder_id ON projects(builder_id);
CREATE INDEX IF NOT EXISTS idx_projects_rera_id ON projects(rera_id);
CREATE INDEX IF NOT EXISTS idx_projects_price_rate ON projects(price_per_sqft);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_cfg_project_id ON project_configurations(project_id);
