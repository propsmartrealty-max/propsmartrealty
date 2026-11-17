#!/usr/bin/env python3
"""
Exhaustive scraper for all official projects on https://iamkohinoor.com/
Extracts authentic imagery, RERA IDs, exact carpet sizes, configurations, and micro-locations.
"""
import urllib.request
import ssl
import re
import json
from bs4 import BeautifulSoup

ctx = ssl._create_unverified_context()

projects_meta = [
    {
        "slug": "satori-by-kohinoor",
        "url": "https://iamkohinoor.com/residential-projects/satori-by-kohinoor",
        "type": "residential",
        "default_rera": "P52100066472",
        "locality": "Mahalunge",
        "suburb": "West Pune",
        "canonical_name": "Satori by Kohinoor"
    },
    {
        "slug": "kohinoor-central-park",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-central-park",
        "type": "residential",
        "default_rera": "P52100056358",
        "locality": "Hinjewadi",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Central Park"
    },
    {
        "slug": "kohinoor-riverdale",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-riverdale",
        "type": "residential",
        "default_rera": "P52100056021",
        "locality": "Kharadi",
        "suburb": "East Pune",
        "canonical_name": "Kohinoor Riverdale"
    },
    {
        "slug": "kohinoor-woodshire",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-woodshire",
        "type": "residential",
        "default_rera": "P52100078709",
        "locality": "Bhugaon",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Woodshire"
    },
    {
        "slug": "kohinoor-boulevard-towers---uptown-avenue",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-boulevard-towers---uptown-avenue",
        "type": "residential",
        "default_rera": "P52100055120",
        "locality": "Punawale",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Boulevard Towers"
    },
    {
        "slug": "kohinoor-uptown-avenue",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-uptown-avenue",
        "type": "residential",
        "default_rera": "P52100055120",
        "locality": "Punawale",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Uptown Avenue"
    },
    {
        "slug": "kohinoor-viva-pixel---phase-i",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-viva-pixel---phase-i",
        "type": "residential",
        "default_rera": "P52100053030",
        "locality": "Dhanori",
        "suburb": "North Pune",
        "canonical_name": "Kohinoor Viva Pixel - Phase I"
    },
    {
        "slug": "kohinoor-viva-pixel---phase-ii",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-viva-pixel---phase-ii",
        "type": "residential",
        "default_rera": "P52100053308",
        "locality": "Dhanori",
        "suburb": "North Pune",
        "canonical_name": "Kohinoor Viva Pixel - Phase II"
    },
    {
        "slug": "kohinoor-viva-city",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-viva-city",
        "type": "residential",
        "default_rera": "P52100031852",
        "locality": "Dhanori",
        "suburb": "North Pune",
        "canonical_name": "Kohinoor Viva City"
    },
    {
        "slug": "kohinoor-westview-reserve",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-westview-reserve",
        "type": "residential",
        "default_rera": "P52100048589",
        "locality": "Punawale",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Westview Reserve"
    },
    {
        "slug": "kohinoor-abhimaan-homes",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-abhimaan-homes",
        "type": "residential",
        "default_rera": "P52100032485",
        "locality": "Talegaon Dabhade",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Abhimaan Homes"
    },
    {
        "slug": "kohinoor-kaleido-phase-2",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-kaleido-phase-2",
        "type": "residential",
        "default_rera": "P52100078107",
        "locality": "Wagholi",
        "suburb": "East Pune",
        "canonical_name": "Kohinoor Kaleido Phase 2"
    },
    {
        "slug": "kohinoor-royale-towers",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-royale-towers",
        "type": "residential",
        "default_rera": "P52100061033",
        "locality": "Hinjewadi",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Royale Towers"
    },
    {
        "slug": "regalia-towers",
        "url": "https://iamkohinoor.com/residential-projects/regalia-towers",
        "type": "residential",
        "default_rera": "P52100078271",
        "locality": "Wakad",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Regalia Towers"
    },
    {
        "slug": "kohinoor-avantara",
        "url": "https://iamkohinoor.com/residential-projects/kohinoor-avantara",
        "type": "residential",
        "default_rera": "P52100061984",
        "locality": "Wakad",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Avantara"
    },
    {
        "slug": "codename-gen-more",
        "url": "https://iamkohinoor.com/residential-projects/codename-gen-more",
        "type": "residential",
        "default_rera": "P52100055120",
        "locality": "Punawale",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Codename Gen More"
    },
    {
        "slug": "kohinoor-business-tower",
        "url": "https://iamkohinoor.com/commercial-project/kohinoor-business-tower",
        "type": "commercial",
        "default_rera": "P52100049202",
        "locality": "Mundhwa",
        "suburb": "East Pune",
        "canonical_name": "Kohinoor Business Tower"
    },
    {
        "slug": "kohinoor-business-tower---baner",
        "url": "https://iamkohinoor.com/commercial-project/kohinoor-business-tower---baner",
        "type": "commercial",
        "default_rera": "P52100079205",
        "locality": "Baner",
        "suburb": "West Pune",
        "canonical_name": "Kohinoor Business Tower Baner"
    },
    {
        "slug": "kohinoor-world-tower",
        "url": "https://iamkohinoor.com/commercial-project/kohinoor-world-tower",
        "type": "commercial",
        "default_rera": "P52100028796",
        "locality": "Pimpri",
        "suburb": "PCMC",
        "canonical_name": "Kohinoor World Tower"
    },
    {
        "slug": "kohinoor-world-tower-phase-2",
        "url": "https://iamkohinoor.com/commercial-project/kohinoor-world-tower-phase-2",
        "type": "commercial",
        "default_rera": "P52100066551",
        "locality": "Pimpri",
        "suburb": "PCMC",
        "canonical_name": "Kohinoor World Tower Phase 2"
    }
]

scraped_data = []

for item in projects_meta:
    url = item["url"]
    slug = item["slug"]
    print(f"Fetching {slug}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})
        with urllib.request.urlopen(req, context=ctx, timeout=25) as r:
            html = r.read().decode('utf-8')
            soup = BeautifulSoup(html, 'html.parser')
            
            # Title & Tagline
            h1 = soup.find('h1')
            tagline = h1.get_text(strip=True) if h1 else ""
            
            # Description
            meta_desc = ""
            m_desc = soup.find('meta', attrs={'name': 'description'})
            if m_desc and m_desc.get('content'):
                meta_desc = m_desc.get('content').strip()
            
            # Overview stats
            total_acres = ""
            carpet_range = ""
            total_towers = ""
            configurations_str = ""
            
            for li in soup.find_all(['li', 'div']):
                txt = li.get_text(' ', strip=True)
                if 'Total Area' in txt and not total_acres:
                    m = re.search(r'([\d\.]+)\s*(?:Total\s*Area|acres)', txt, re.I)
                    if m: total_acres = m.group(1)
                if 'Carpet Area' in txt and not carpet_range:
                    m = re.search(r'([\d\s\-]+)\s*(?:sq\.?\s*ft|Carpet)', txt, re.I)
                    if m: carpet_range = m.group(1).strip()
                if 'Total Towers' in txt and not total_towers:
                    m = re.search(r'(\d+)\s*(?:Total\s*Towers|Towers)', txt, re.I)
                    if m: total_towers = m.group(1)
                if 'Configuration' in txt and not configurations_str:
                    m = re.search(r'([^,]+(?:bed|bhk|commercial|office)[^,]+)', txt, re.I)
                    if m: configurations_str = m.group(1).replace('Configuration', '').strip()
            
            # MahaRERA
            rera_matches = re.findall(r'P521\d{8}', html)
            rera_id = rera_matches[0] if rera_matches else item["default_rera"]
            
            # Images
            media_images = []
            floor_plans = []
            amenities = []
            
            for img in soup.find_all('img'):
                src = img.get('src', '') or img.get('data-src', '')
                if not src: continue
                if src.startswith('/'): src = f"https://iamkohinoor.com{src}"
                
                # Check floor plans
                if any(x in src.lower() for x in ['plan', 'layout', 'unit']):
                    if src not in floor_plans and any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                        floor_plans.append(src)
                
                # Check media gallery / elevations
                if '/media/' in src and any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                    if not any(skip in src.lower() for skip in ['logo', 'icon', 'arrow', 'whatsapp', 'connectivity']):
                        if src not in media_images:
                            media_images.append(src)
                            
            # Amenities text
            for am in soup.find_all(['div', 'li', 'h4', 'span'], class_=re.compile(r'amenit', re.I)):
                txt = am.get_text(strip=True)
                if 3 < len(txt) < 40 and txt not in amenities and not any(skip in txt.lower() for skip in ['view', 'all', 'more', 'enquire']):
                    amenities.append(txt)
                    
            item_data = {
                "canonical_name": item["canonical_name"],
                "slug": slug,
                "url": url,
                "type": item["type"],
                "rera_id": rera_id,
                "locality": item["locality"],
                "suburb": item["suburb"],
                "tagline": tagline,
                "description": meta_desc,
                "total_acres": total_acres,
                "carpet_range": carpet_range,
                "total_towers": total_towers,
                "configurations_str": configurations_str,
                "media_images": media_images,
                "floor_plans": floor_plans,
                "amenities": amenities[:15]
            }
            scraped_data.append(item_data)
            print(f"✅ {item['canonical_name']} | RERA: {rera_id} | Acres: {total_acres} | Towers: {total_towers} | Carpet: {carpet_range} | Imgs: {len(media_images)}")
    except Exception as e:
        print(f"❌ Error scraping {slug}: {e}")

with open('punepropertyvloginside/scripts/kohinoor_full_scraped.json', 'w') as f:
    json.dump(scraped_data, f, indent=2)

print(f"\nAll done! Successfully scraped {len(scraped_data)} Kohinoor projects.")
