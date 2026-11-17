#!/usr/bin/env python3
"""
Test generating embeddings for sample projects with Cloudflare Workers AI
"""
import urllib.request
import json

ACCOUNT_ID = "fbb39d51325df0f234958e2ec8e9c989"
OAUTH_TOKEN = "cfoat_ZX4m97RPzAO4axucJXDo2PWNb6ed7huE6-N4GimLC4I.dxGQV_A9SoTFFMJ1HqrA3XCiNsb8Xix1RWtRylEx1zg"
API_URL = f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/@cf/baai/bge-base-en-v1.5"

sample_texts = [
    "Godrej River Royale luxury 3 BHK Baner Mahalunge Pune price 1.35 Cr to 2.80 Cr",
    "Supreme Villagio luxury 4 BHK Somatane Pune price 2.10 Cr"
]

req = urllib.request.Request(
    API_URL,
    data=json.dumps({"text": sample_texts}).encode('utf-8'),
    headers={
        "Authorization": f"Bearer {OAUTH_TOKEN}",
        "Content-Type": "application/json"
    }
)

import ssl

ctx = ssl._create_unverified_context()
with urllib.request.urlopen(req, context=ctx) as resp:
    res = json.loads(resp.read().decode('utf-8'))
    vectors = res.get("result", {}).get("data", [])
    print(f"Generated {len(vectors)} vectors. First vector dimension: {len(vectors[0])}")
