#!/usr/bin/env python3
"""
Scrape all project details directly from https://iamkohinoor.com/
"""
import urllib.request
import re
import ssl
import json
from bs4 import BeautifulSoup

ctx = ssl._create_unverified_context()

urls = [
    "https://iamkohinoor.com/residential-projects/satori-by-kohinoor",
    "https://iamkohinoor.com/residential-projects/kohinoor-central-park",
    "https://iamkohinoor.com/residential-projects/kohinoor-riverdale",
    "https://iamkohinoor.com/residential-projects/kohinoor-woodshire",
    "https://iamkohinoor.com/residential-projects/kohinoor-boulevard-towers---uptown-avenue",
    "https://iamkohinoor.com/residential-projects/kohinoor-uptown-avenue",
    "https://iamkohinoor.com/residential-projects/kohinoor-viva-pixel---phase-i",
    "https://iamkohinoor.com/residential-projects/kohinoor-viva-pixel---phase-ii",
    "https://iamkohinoor.com/residential-projects/kohinoor-viva-city",
    "https://iamkohinoor.com/residential-projects/kohinoor-westview-reserve",
    "https://iamkohinoor.com/residential-projects/kohinoor-abhimaan-homes",
    "https://iamkohinoor.com/residential-projects/kohinoor-kaleido-phase-2",
    "https://iamkohinoor.com/residential-projects/kohinoor-royale-towers",
    "https://iamkohinoor.com/residential-projects/regalia-towers",
    "https://iamkohinoor.com/residential-projects/kohinoor-avantara",
    "https://iamkohinoor.com/residential-projects/codename-gen-more",
    "https://iamkohinoor.com/commercial-project/kohinoor-business-tower",
    "https://iamkohinoor.com/commercial-project/kohinoor-business-tower---baner",
    "https://iamkohinoor.com/commercial-project/kohinoor-world-tower",
    "https://iamkohinoor.com/commercial-project/kohinoor-world-tower-phase-2"
]

results = []

for url in urls:
    slug = url.split('/')[-1]
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=25) as r:
            html = r.read().decode('utf-8')
            soup = BeautifulSoup(html, 'html.parser')
            
            # Title
            h1 = soup.find('h1')
            title = h1.get_text(strip=True) if h1 else soup.title.string.split('|')[0].strip()
            
            # MahaRERA
            rera_matches = re.findall(r'P5\d{9,11}', html)
            rera_id = rera_matches[0] if rera_matches else ''
            
            # Location
            loc_matches = re.findall(r'(?:Location|at)\s*:?\s*([A-Za-z\s,]+)', html, re.IGNORECASE)
            
            # Images
            images = []
            for img in soup.find_all('img'):
                src = img.get('src', '')
                if src and ('uploads' in src or 'assets' in src or 'project' in src) and not any(x in src.lower() for x in ['logo', 'icon', 'arrow']):
                    if src.startswith('/'):
                        src = f"https://iamkohinoor.com{src}"
                    images.append(src)
            
            # Text / Amenities
            text = soup.get_text()
            
            # Detect BHKs
            bhks = list(set(re.findall(r'([1-5](?:\.5)?\s*BHK|[1-5](?:\.5)?\s*Bed)', html, re.IGNORECASE)))
            
            results.append({
                "url": url,
                "slug": slug,
                "title": title,
                "rera_id": rera_id,
                "bhks": bhks,
                "images_count": len(images),
                "images": images[:6],
                "page_title": soup.title.string if soup.title else ""
            })
            print(f"✅ {slug} -> Title: {title[:40]} | RERA: {rera_id} | BHKs: {bhks} | Imgs: {len(images)}")
    except Exception as e:
        print(f"❌ Error {url}: {e}")

with open("punepropertyvloginside/scripts/kohinoor_scraped_raw.json", "w") as f:
    json.dump(results, f, indent=2)

print(f"\nDone! Scraped {len(results)} projects.")
