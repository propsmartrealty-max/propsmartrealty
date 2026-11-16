-- ==============================================================================
-- Cloudflare D1 Migration 0004: Catalog Hardening & Official Brand Assets
-- PROPSMART REALTY
-- ==============================================================================

-- 1. Insert Reputed Developer Consortium
INSERT INTO builders (id, name, slug, logo, hero_image, description, established_year, total_projects, ongoing_projects, trust_score, is_verified, experience, locations)
VALUES (
  'b-reputed',
  'Reputed Builder',
  'reputed-builder',
  '/images/builders/a-reputed-west.svg',
  'https://punehome.in/storage/v1/object/public/project-media/projects/51014204-43f0-496a-847a-05447110109f/gallery/mt5m03g2-6kzuic.webp',
  'Reputed Developers and Consortiums delivering quality residential and commercial landmarks across prime growth corridors in Pune and Maharashtra.',
  2005, 46, 12, 9.4, 1, 20, '["Pune", "Charholi Budruk", "Wakad", "Hinjewadi", "Kharadi"]'
)
ON CONFLICT(id) DO UPDATE SET
  name=excluded.name,
  logo=excluded.logo,
  description=excluded.description;

-- 2. Official Corporate Logos for Top Developers
UPDATE builders SET logo = '/images/builders/panchshil-official.webp' WHERE id = 'b-panchshil';
UPDATE builders SET logo = '/images/builders/godrej.svg' WHERE id = 'b-godrej';
UPDATE builders SET logo = '/images/builders/kolte-patil-official.webp' WHERE id = 'b-kolte-patil';
UPDATE builders SET logo = '/images/builders/vtp-official.webp' WHERE id = 'b-vtp';
UPDATE builders SET logo = '/images/builders/lodha-official.svg' WHERE id = 'b-lodha';
UPDATE builders SET logo = '/images/builders/paranjape-official.webp' WHERE id = 'b-paranjape';
UPDATE builders SET logo = '/images/builders/kasturi.svg' WHERE id = 'b-kasturi';
UPDATE builders SET logo = '/images/builders/sobha-official.svg' WHERE id = 'b-sobha';
UPDATE builders SET logo = '/images/builders/tata-official.webp' WHERE id = 'b-tata';
UPDATE builders SET logo = '/images/builders/gera-official.webp' WHERE id = 'b-gera';
UPDATE builders SET logo = '/images/builders/amanora.svg' WHERE id = 'b-amanora';
UPDATE builders SET logo = '/images/builders/kalpataru-official.svg' WHERE id = 'b-kalpataru';
UPDATE builders SET logo = '/images/builders/bramhacorp-official.webp' WHERE id = 'b-bramhacorp';
UPDATE builders SET logo = '/images/builders/krisala-official.webp' WHERE id = 'b-krisala';
UPDATE builders SET logo = '/images/builders/goel-ganga-official.webp' WHERE id = 'b-goel-ganga';
UPDATE builders SET logo = '/images/builders/solitaire-official.webp' WHERE id = 'b-solitaire-group';
UPDATE builders SET logo = '/images/builders/tejraj-official.webp' WHERE id = 'b-tejraj-group';
UPDATE builders SET logo = '/images/builders/anp-corp-official.webp' WHERE id = 'b-anp-corp';
UPDATE builders SET logo = '/images/builders/rohan-official.webp' WHERE id = 'b-rohan';
UPDATE builders SET logo = '/images/builders/hiranandani-official.webp' WHERE id = 'b-hiranandani';
UPDATE builders SET logo = '/images/builders/della-official.webp' WHERE id = 'b-della';
UPDATE builders SET logo = '/images/builders/vilas-javdekar-official.webp' WHERE id = 'b-vilas-javdekar';
UPDATE builders SET logo = '/images/builders/mahindra-lifespaces-official.webp' WHERE id = 'b-mahindra';
UPDATE builders SET logo = '/images/builders/kumar-properties-official.webp' WHERE id = 'b-kumar';
UPDATE builders SET logo = '/images/builders/pride-purple-official.webp' WHERE id = 'b-pride-purple';
UPDATE builders SET logo = '/images/builders/supreme-universal-official.webp' WHERE id = 'b-supreme-universal';
UPDATE builders SET logo = '/images/builders/shapoorji.svg' WHERE id = 'b-shapoorji';
UPDATE builders SET logo = '/images/builders/mantra-official.svg' WHERE id = 'b-mantra-properties';
UPDATE builders SET logo = '/images/builders/nyati-official.webp' WHERE id = 'b-nyati';
UPDATE builders SET logo = '/images/builders/kohinoor-official.webp' WHERE id = 'b-kohinoor';

-- 3. Authentic High-Res WebP Media for ANP Projects
UPDATE projects SET
  image = '/images/projects/anp-atlantis/elevation.webp',
  hero_image = '/images/projects/anp-atlantis/elevation.webp',
  images = '["/images/projects/anp-atlantis/elevation.webp", "/images/projects/anp-atlantis/entrance-gate.webp", "/images/projects/anp-atlantis/swimming-pool.webp", "/images/projects/anp-atlantis/clubhouse-lawn.webp", "/images/projects/anp-atlantis/podium-amenities.webp", "/images/projects/anp-atlantis/living-room.webp", "/images/projects/anp-atlantis/master-bedroom.webp", "/images/projects/anp-atlantis/balcony-view.webp"]',
  master_layout = '/images/projects/anp-atlantis/master-layout.webp',
  floor_plans = '["/images/projects/anp-atlantis/floor-plan-2bhk.webp", "/images/projects/anp-atlantis/floor-plan-3bhk.webp", "/images/projects/anp-atlantis/floor-plan-4bhk.webp"]',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'p-anp-atlantis-balewadi';

UPDATE projects SET
  image = '/images/projects/anp-universe/elevation.webp',
  hero_image = '/images/projects/anp-universe/elevation.webp',
  images = '["/images/projects/anp-universe/elevation.webp", "/images/projects/anp-universe/entrance-gate.webp", "/images/projects/anp-universe/club-universe.webp", "/images/projects/anp-universe/infinity-pool.webp", "/images/projects/anp-universe/landscaped-greens.webp", "/images/projects/anp-universe/riverfront-aerial.webp", "/images/projects/anp-universe/entrance-roundabout.webp"]',
  master_layout = '/images/projects/anp-universe/master-layout.webp',
  floor_plans = '["/images/projects/anp-universe/floor-plan-3bhk.webp", "/images/projects/anp-universe/floor-plan-4bhk.webp"]',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'p-anp-universe-balewadi';

UPDATE projects SET
  image = '/images/projects/anp-autograph/elevation.webp',
  hero_image = '/images/projects/anp-autograph/elevation.webp',
  images = '["/images/projects/anp-autograph/elevation.webp", "/images/projects/anp-autograph/entrance-gate.webp", "/images/projects/anp-autograph/panoramic-towers.webp", "/images/projects/anp-autograph/podium-amenities.webp"]',
  master_layout = '/images/projects/anp-autograph/master-layout.webp',
  floor_plans = '["/images/projects/anp-autograph/floor-plan-2bhk.webp", "/images/projects/anp-autograph/floor-plan-3bhk.webp", "/images/projects/anp-autograph/floor-plan-4bhk.webp"]',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'p-anp-autograph-punawale';

-- 4. Authentic High-Res Media for Kolte Patil Life Republic Qrious
UPDATE projects SET
  image = '/images/projects/kolte-patil-life-republic/qrious-elevation.jpg',
  hero_image = '/images/projects/kolte-patil-life-republic/qrious-elevation.jpg',
  images = '["/images/projects/kolte-patil-life-republic/qrious-elevation.jpg", "/images/projects/kolte-patil-life-republic/qrious-clubhouse.jpg"]',
  updated_at = CURRENT_TIMESTAMP
WHERE id = 'p-kolte-patil-life-republic-qrious';

-- 5. Wire Joyville Projects to Dedicated Joyville Brand Portfolio
UPDATE projects SET builder_id = 'b-joyville', updated_at = CURRENT_TIMESTAMP
WHERE id IN ('p-joyville-annexe', 'p-joyville-celestia', 'p-joyville-sensorium', 'p-joyville-virar-mumbai');

-- 6. Clean Up Duplicate/Non-Builder Consortium Aliases
DELETE FROM builders WHERE id IN ('b-the-renowned-architect-arco', 'b-architect-hafeez-contractor', 'b-pride-group', 'b-kasturi-developers', 'b-vilas-javdekar-developer');
