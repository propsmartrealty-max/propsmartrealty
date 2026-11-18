import urllib.request
import ssl
import re
import os
import json
from bs4 import BeautifulSoup
import xml.etree.ElementTree as ET

def parse_nanded_pages():
    ctx = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    url = "https://nandedcitypune.com/page-sitemap.xml"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
            xml_data = resp.read()
    except Exception as e:
        print(f"Error fetching page sitemap: {e}")
        return

    root = ET.fromstring(xml_data)
    # XML namespace for sitemaps is usually http://www.sitemaps.org/schemas/sitemap/0.9
    urls = []
    for elem in root.findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'):
        loc = elem.find('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')
        lastmod = elem.find('{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod')
        if loc is not None:
            urls.append({
                'loc': loc.text,
                'lastmod': lastmod.text if lastmod is not None else ''
            })

    print(f"Found {len(urls)} pages in page-sitemap.xml:")
    for u in urls:
        print(f"  {u['loc']} (lastmod: {u['lastmod']})")

    # Fetch each page and parse details
    pages_data = []
    for u in urls:
        page_url = u['loc']
        print(f"\nFetching {page_url}...")
        try:
            req_p = urllib.request.Request(page_url, headers=headers)
            with urllib.request.urlopen(req_p, context=ctx, timeout=15) as p_resp:
                html = p_resp.read().decode('utf-8', errors='ignore')
                
            soup = BeautifulSoup(html, 'html.parser')
            title = soup.title.string if soup.title else ""
            
            # Find RERA numbers
            reras = list(set(re.findall(r'(?:P\d{11}|(?:PR|PM|PC|PP)\d+|MahaRERA[^<\n\r]{0,80})', html, re.IGNORECASE)))
            
            # Find images (floor plans, layouts, banners)
            images = []
            for img in soup.find_all('img', src=True):
                src = img['src']
                if any(ext in src.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg']):
                    images.append(src)

            # Find PDFs
            pdfs = []
            for a in soup.find_all('a', href=True):
                href = a['href']
                if href.lower().endswith('.pdf'):
                    pdfs.append(href)

            # Find headings & text snippets
            headings = [h.get_text(strip=True) for h in soup.find_all(['h1', 'h2', 'h3'])]

            pages_data.append({
                'url': page_url,
                'title': title,
                'lastmod': u['lastmod'],
                'reras': reras,
                'headings': headings[:15],
                'images': images,
                'pdfs': pdfs
            })

            # Save html
            slug = page_url.strip('/').split('/')[-1] or 'home'
            with open(f"scratch/page_{slug}.html", "w") as f:
                f.write(html)

        except Exception as e:
            print(f"Error fetching {page_url}: {e}")

    with open("scratch/nanded_pages_summary.json", "w") as f:
        json.dump(pages_data, f, indent=2)
    print("\nSaved pages data to scratch/nanded_pages_summary.json")

if __name__ == '__main__':
    parse_nanded_pages()
