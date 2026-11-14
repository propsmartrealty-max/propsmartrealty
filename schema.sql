-- PROPSMART REALTY: Complete Cloudflare D1 Schema & Seed File
-- Run locally or in Cloudflare dashboard via: npx wrangler d1 execute propsmart-d1 --local --file=schema.sql

-- Include Schema
.read migrations/0001_initial_schema.sql

-- Include Seed
.read migrations/0002_seed_data.sql
