#!/bin/bash
# ==============================================================================
# Cloudflare D1 & R2 Setup Script for PROPSMART REALTY
# ==============================================================================

set -e

echo "🚀 Setting up Cloudflare Database & Infrastructure for PROPSMART REALTY..."

# 1. Create Cloudflare D1 Database if needed
echo "📦 Step 1: Provisioning Cloudflare D1 Database..."
npx wrangler d1 create propsmart-d1 || echo "ℹ️  D1 Database 'propsmart-d1' already exists or ready."

# 2. Run Local SQLite Migration for Development
echo "🔄 Step 2: Applying Migrations to Local D1 instance..."
npx wrangler d1 execute propsmart-d1 --local --file=migrations/0001_initial_schema.sql
npx wrangler d1 execute propsmart-d1 --local --file=migrations/0003_advanced_enterprise_d1.sql
npx wrangler d1 execute propsmart-d1 --local --file=migrations/0004_catalog_hardening.sql
npx wrangler d1 execute propsmart-d1 --local --file=migrations/0005_full_catalog_sync.sql

# 3. Create Cloudflare R2 Bucket
echo "🪣 Step 3: Provisioning Cloudflare R2 Storage Bucket..."
npx wrangler r2 bucket create propsmart-assets || echo "ℹ️  R2 Bucket 'propsmart-assets' already exists or ready."

echo "✅ Cloudflare D1 Database & R2 Storage Setup Complete!"
echo "To apply to production Cloudflare network, run:"
echo "  npx wrangler d1 execute propsmart-d1 --remote --file=migrations/0001_initial_schema.sql"
echo "  npx wrangler d1 execute propsmart-d1 --remote --file=migrations/0003_advanced_enterprise_d1.sql"
echo "  npx wrangler d1 execute propsmart-d1 --remote --file=migrations/0004_catalog_hardening.sql"
echo "  npx wrangler d1 execute propsmart-d1 --remote --file=migrations/0005_full_catalog_sync.sql"
