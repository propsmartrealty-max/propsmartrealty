import os
import re
import json
import ssl
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

def get_html(url):
    req = urllib.request.Request(
        url,
        headers={
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
        }
    )
    ctx = ssl._create_unverified_context()
    with urllib.request.urlopen(req, context=ctx, timeout=12) as resp:
        return resp.read().decode('utf-8', errors='ignore')

def extract_project_data(url):
    html = get_html(url)
    
    # 1. Parse pdData JSON
    pd_data = {}
    pd_match = re.search(r'<script[^>]*id=[\"\']pdData[\"\'][^>]*>(.*?)</script>', html, re.DOTALL)
    if pd_match:
        try:
            pd_data = json.loads(pd_match.group(1))
        except Exception:
            pass

    # 2. Parse FAQPage JSON-LD
    faq_data = {}
    faq_match = re.search(r'<script type=[\"\']application/ld\+json[\"\']>\s*({.*?\"@type\":\s*\"FAQPage\".*?})\s*</script>', html, re.DOTALL)
    if faq_match:
        try:
            faq_json = json.loads(faq_match.group(1))
            for entity in faq_json.get('mainEntity', []):
                q = entity.get('name', '').strip()
                a = entity.get('acceptedAnswer', {}).get('text', '').strip()
                faq_data[q] = a
        except Exception:
            pass

    # 3. Parse BreadcrumbList JSON-LD
    breadcrumb_data = []
    bc_match = re.search(r'<script type=[\"\']application/ld\+json[\"\']>\s*({.*?\"@type\":\s*\"BreadcrumbList\".*?})\s*</script>', html, re.DOTALL)
    if bc_match:
        try:
            bc_json = json.loads(bc_match.group(1))
            breadcrumb_data = [item.get('name') for item in bc_json.get('itemListElement', [])]
        except Exception:
            pass

    # Organize Extracted Fields
    result = {
        'keystoneUrl': url,
        'title': pd_data.get('project', ''),
        'builder': pd_data.get('developer', ''),
        'location': pd_data.get('location', ''),
        'mapEmbed': pd_data.get('map', ''),
        'brochureUrl': pd_data.get('brochure', ''),
        'plans': pd_data.get('plans', []),
        'photos': [p.get('src') for p in pd_data.get('photos', []) if p.get('src')],
        'faqs': faq_data,
        'breadcrumbs': breadcrumb_data
    }

    # Extract specific details from FAQ answers
    for q, a in faq_data.items():
        q_lower = q.lower()
        if 'price' in q_lower:
            result['priceText'] = a
        elif 'configuration' in q_lower:
            result['configText'] = a
        elif 'rera' in q_lower:
            # extract all P52... IDs
            reras = re.findall(r'P52\d{8}', a)
            if reras:
                result['reraId'] = reras[0]
                result['allReras'] = reras
        elif 'possession' in q_lower:
            result['possessionText'] = a
        elif 'floor' in q_lower:
            result['floorsAndAcres'] = a
        elif 'amenit' in q_lower:
            # extract amenities list
            amenity_match = re.search(r'include\s+([^.]+)', a, re.I)
            if amenity_match:
                amenities = [am.strip() for am in amenity_match.group(1).split(',')]
                result['amenities'] = [am for am in amenities if am and am.lower() != 'and more']
        elif 'loan' in q_lower or 'bank' in q_lower:
            result['banksText'] = a

    # Identify Master Layout vs Floor Plans from plans array
    master_layout = None
    floor_plans = []
    for plan in result['plans']:
        src = plan.get('src')
        label = plan.get('label', '')
        if not src:
            continue
        if 'master' in label.lower():
            if not master_layout:
                master_layout = src
        else:
            floor_plans.append({'src': src, 'label': label})

    result['masterLayout'] = master_layout
    result['floorPlans'] = floor_plans

    return result

def main():
    print("Scraping Keystone Liv Sitemap for Pune Projects...")
    sitemap_url = 'https://keystoneliv.com/sitemap_gz/propertydetail_0.xml'
    xml_content = get_html(sitemap_url)
    urls = re.findall(r'<loc>(https://keystoneliv\.com/buy/new/[^<]+)</loc>', xml_content)
    pune_urls = [u for u in urls if '-pune/' in u]
    print(f"Found {len(pune_urls)} Pune project URLs on Keystone Liv.")

    # Load local mockData to match
    mockdata_path = 'punepropertyvloginside/src/data/mockData.ts'
    with open(mockdata_path, 'r', encoding='utf-8') as f:
        mock_content = f.read()

    proj_text = mock_content[mock_content.find('export const PROJECTS'):]
    our_slugs = re.findall(r'\"slug\":\s*\"([^\"]+)\"', proj_text)
    print(f"Loaded {len(our_slugs)} projects from mockData.ts.")

    slug_to_url = {}
    for slug in our_slugs:
        clean_slug = slug.replace('-phase-2', '').replace('-3', '')
        for u in pune_urls:
            if slug in u or clean_slug in u:
                slug_to_url[slug] = u
                break

    print(f"Matched {len(slug_to_url)} projects for enrichment.")

    scraped_results = {}
    with ThreadPoolExecutor(max_workers=8) as executor:
        future_to_slug = {
            executor.submit(extract_project_data, url): slug 
            for slug, url in slug_to_url.items()
        }
        for future in as_completed(future_to_slug):
            slug = future_to_slug[future]
            try:
                data = future.result()
                scraped_results[slug] = data
                print(f"✅ Scraped: {slug} | Plans: {len(data['plans'])} | Master: {bool(data['masterLayout'])} | RERA: {data.get('reraId', 'N/A')}")
            except Exception as e:
                print(f"❌ Failed {slug}: {e}")

    output_file = 'punepropertyvloginside/scripts/keystoneliv_scraped.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(scraped_results, f, indent=2)
    print(f"\n🎉 Successfully saved {len(scraped_results)} scraped projects to {output_file}!")

if __name__ == '__main__':
    main()
