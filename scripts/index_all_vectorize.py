#!/usr/bin/env python3
"""
Full Enterprise Vector Indexer for Cloudflare Vectorize
Indexes all 836 Propsmart Realty projects into 'propsmart-vector-search'
using Cloudflare Workers AI embeddings (@cf/baai/bge-base-en-v1.5, 768 dimensions)
"""

import os
import json
import time
import urllib.request
import ssl
import subprocess

ACCOUNT_ID = "fbb39d51325df0f234958e2ec8e9c989"
OAUTH_TOKEN = "cfoat_ZX4m97RPzAO4axucJXDo2PWNb6ed7huE6-N4GimLC4I.dxGQV_A9SoTFFMJ1HqrA3XCiNsb8Xix1RWtRylEx1zg"
API_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-base-en-v1.5"

def get_embeddings_batch(texts):
    ctx = ssl._create_unverified_context()
    req = urllib.request.Request(
        API_URL,
        data=json.dumps({"text": texts}).encode('utf-8'),
        headers={
            "Authorization": f"Bearer {OAUTH_TOKEN}",
            "Content-Type": "application/json"
        }
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, context=ctx, timeout=40) as resp:
                res = json.loads(resp.read().decode('utf-8'))
                vectors = res.get("result", {}).get("data", [])
                if len(vectors) == len(texts):
                    return vectors
                else:
                    print(f"Warning: Expected {len(texts)} vectors, got {len(vectors)}. Retrying...")
        except Exception as e:
            print(f"Attempt {attempt+1} failed: {e}. Retrying in 2s...")
            time.sleep(2)
    raise RuntimeError(f"Failed to generate embeddings for batch of {len(texts)}")

def main():
    json_path = "punepropertyvloginside/d1_projects_all.json"
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
        projects = data[0]["results"]

    total = len(projects)
    print(f"Loaded {total} projects from D1 dump.")

    ndjson_path = "punepropertyvloginside/vectors.ndjson"
    batch_size = 25
    total_written = 0

    print(f"Generating embeddings with Workers AI @cf/baai/bge-base-en-v1.5...")

    with open(ndjson_path, "w", encoding="utf-8") as out_f:
        for i in range(0, total, batch_size):
            batch = projects[i:i + batch_size]
            texts = []
            for p in batch:
                title = p.get('title') or ''
                builder = p.get('builder_name') or 'Top Developer'
                loc = p.get('location') or ''
                city = p.get('city') or 'Pune'
                price = p.get('price_range') or ''
                config = p.get('configurations') or ''
                amenities = p.get('amenities') or ''
                rera = p.get('rera_id') or ''
                desc = (p.get('description') or '')[:250]

                text = (
                    f"{title} by {builder} in {loc}, {city}. "
                    f"Configurations: {config}. Price Range: {price}. "
                    f"MahaRERA ID: {rera}. Amenities: {amenities}. {desc}"
                )
                texts.append(text)

            t0 = time.time()
            vectors = get_embeddings_batch(texts)
            elapsed = time.time() - t0

            for p, vec in zip(batch, vectors):
                record = {
                    "id": p["id"],
                    "values": vec,
                    "metadata": {
                        "title": p.get("title") or "",
                        "slug": p.get("slug") or "",
                        "city": p.get("city") or "Pune",
                        "location": p.get("location") or "",
                        "builder": p.get("builder_name") or "Top Developer",
                        "priceRange": p.get("price_range") or "",
                        "type": p.get("type") or "Residential",
                        "reraId": p.get("rera_id") or ""
                    }
                }
                out_f.write(json.dumps(record) + "\n")
                total_written += 1

            print(f"Progress: [{total_written}/{total}] embeddings generated ({elapsed:.2f}s)")
            time.sleep(0.1)

    print(f"\nAll {total_written} vectors generated successfully in {ndjson_path}!")
    print("Now inserting vectors into Cloudflare Vectorize index 'propsmart-vector-search'...")

    cmd = [
        "npx", "wrangler", "vectorize", "insert",
        "propsmart-vector-search",
        f"--file={ndjson_path}"
    ]
    res = subprocess.run(cmd, cwd="punepropertyvloginside", capture_output=True, text=True)
    print("Wrangler stdout:\n", res.stdout)
    if res.stderr:
        print("Wrangler stderr:\n", res.stderr)

if __name__ == "__main__":
    main()
