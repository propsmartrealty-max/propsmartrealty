#!/usr/bin/env python3
"""
Generate Workers AI embeddings and insert into Cloudflare Vectorize
for all Kohinoor Group projects.
"""
import json
import urllib.request
import ssl
import subprocess
import os

ACCOUNT_ID = os.environ.get("CLOUDFLARE_ACCOUNT_ID", "32570aba867d94f822caf72ecaeac780")
EMAIL = os.environ.get("CLOUDFLARE_EMAIL", "ourdigitalstory0@gmail.com")
KEY = os.environ.get("CLOUDFLARE_API_KEY", "")
API_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-base-en-v1.5"

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MOCK_DATA_PATH = os.path.join(BASE_DIR, 'src/data/mockData.ts')

with open(MOCK_DATA_PATH, 'r', encoding='utf-8') as f:
    content = f.read()

import re
m_prj = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
projects = json.loads(m_prj.group(1))

kohinoor_projects = [p for p in projects if p.get('builderId') == 'b-kohinoor']
print(f"Found {len(kohinoor_projects)} Kohinoor projects to embed.")

texts = []
for p in kohinoor_projects:
    configs_str = ", ".join(p.get("configurations", []))
    amenities_str = ", ".join(p.get("amenities", [])[:6])
    text = f"{p['title']} by Kohinoor Group in {p['location']}, Pune. {configs_str}. {p.get('priceRange', '')}. {p.get('type', 'Residential')}. MahaRERA: {p.get('reraId', '')}. {p.get('description', '')[:200]} Amenities: {amenities_str}."
    texts.append(text)

ctx = ssl._create_unverified_context()
req = urllib.request.Request(
    API_URL,
    data=json.dumps({"text": texts}).encode('utf-8'),
    headers={
        "X-Auth-Email": EMAIL,
        "X-Auth-Key": KEY,
        "Content-Type": "application/json"
    }
)

with urllib.request.urlopen(req, context=ctx, timeout=60) as r:
    res = json.loads(r.read().decode('utf-8'))
    vectors = res.get("result", {}).get("data", [])

print(f"Generated {len(vectors)} vectors (dimension {len(vectors[0])}).")

ndjson_path = os.path.join(BASE_DIR, "kohinoor_vectors.ndjson")
with open(ndjson_path, "w", encoding="utf-8") as out:
    for p, vec in zip(kohinoor_projects, vectors):
        record = {
            "id": p["id"],
            "values": vec,
            "metadata": {
                "title": p["title"],
                "slug": p["slug"],
                "location": p["location"],
                "builder": "Kohinoor Group",
                "price": p.get("priceRange", ""),
                "type": p.get("type", "Residential"),
                "status": p.get("status", "Under Construction"),
                "rera": p.get("reraId", "")
            }
        }
        out.write(json.dumps(record) + "\n")

print(f"Wrote NDJSON vectors to {ndjson_path}.")

# Insert into Cloudflare Vectorize
cmd = ["npx", "wrangler", "vectorize", "insert", "propsmart-vector-search", "--file=kohinoor_vectors.ndjson"]
print("Inserting vectors into Cloudflare Vectorize...")
res = subprocess.run(cmd, cwd=BASE_DIR, capture_output=True, text=True)
print(res.stdout)
if res.stderr:
    print(res.stderr)

print("✅ Cloudflare Vectorize indexing complete!")
