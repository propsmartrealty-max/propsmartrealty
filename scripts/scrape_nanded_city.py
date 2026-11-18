import urllib.request
import ssl
import re
import os
import json
from bs4 import BeautifulSoup

def scrape_nanded_city():
    os.makedirs('scratch', exist_ok=True)
    ctx = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
    
    url = "https://nandedcitypune.com/"
    print(f"Fetching {url}...")
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=15) as response:
            html = response.read().decode('utf-8', errors='ignore')
            print(f"Fetched homepage ({len(html)} bytes)")
    except Exception as e:
        print(f"Error fetching homepage: {e}")
        return

    # Check for sitemap
    sitemap_urls = [
        "https://nandedcitypune.com/sitemap.xml",
        "https://nandedcitypune.com/sitemap_index.xml",
        "https://nandedcitypune.com/robots.txt"
    ]
    for sm in sitemap_urls:
        try:
            req_sm = urllib.request.Request(sm, headers=headers)
            with urllib.request.urlopen(req_sm, context=ctx, timeout=10) as resp:
                content = resp.read().decode('utf-8', errors='ignore')
                print(f"Found {sm} ({len(content)} bytes)")
                with open(f"scratch/{sm.split('/')[-1]}", "w") as f:
                    f.write(content)
        except Exception as e:
            print(f"Could not fetch {sm}: {e}")

    # Extract all links and RERA mentions from homepage
    soup = BeautifulSoup(html, 'html.parser')
    links = set()
    for a in soup.find_all('a', href=True):
        href = a['href']
        if 'nandedcitypune.com' in href or href.startswith('/'):
            links.add(href)

    print(f"Found {len(links)} links on homepage:")
    for l in sorted(links):
        print(" ", l)

    # Search for RERA patterns in homepage
    rera_matches = re.findall(r'(?:P521000\d{5}|PR126\d+|MahaRERA[^<\n\r]{0,100})', html, re.IGNORECASE)
    print("\nRERA matches on homepage:", set(rera_matches))

    # Save homepage html
    with open("scratch/nandedcity_home.html", "w") as f:
        f.write(html)

if __name__ == "__main__":
    scrape_nanded_city()
