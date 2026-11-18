import urllib.request
import ssl
import re
import os
import json
from bs4 import BeautifulSoup

def fetch_specific():
    ctx = ssl._create_unverified_context()
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }

    urls = [
        "https://nandedcitypune.com/harmony/",
        "https://nandedcitypune.com/saajgiri/",
        "https://nandedcitypune.com/destination-center-II/",
        "https://nandedcitypune.com/symphonyitpark/"
    ]

    for u in urls:
        print(f"\n======================================")
        print(f"Fetching {u}...")
        try:
            req = urllib.request.Request(u, headers=headers)
            with urllib.request.urlopen(req, context=ctx, timeout=15) as resp:
                html = resp.read().decode('utf-8', errors='ignore')
            slug = u.strip('/').split('/')[-1]
            with open(f"scratch/page_{slug}.html", "w") as f:
                f.write(html)
            print(f"Saved scratch/page_{slug}.html ({len(html)} bytes)")

            soup = BeautifulSoup(html, 'html.parser')
            print(f"Title: {soup.title.string if soup.title else ''}")
            
            # Find RERA
            reras = list(set(re.findall(r'(?:P\d{11}|(?:PR|PM|PC|PP)\d+|MahaRERA[^<\n\r]{0,80})', html, re.IGNORECASE)))
            print(f"RERAs: {reras}")

            # Find images
            images = [img['src'] for img in soup.find_all('img', src=True)]
            print(f"Images ({len(images)}):")
            for img in images:
                if any(x in img.lower() for x in ['plan', 'floor', 'layout', 'master', 'banner', 'rera', 'qr', 'elevation', 'hero', 'upload', '202']):
                    print(f"  {img}")

            # Find downloadable PDFs
            for a in soup.find_all('a', href=True):
                href = a['href']
                if any(ext in href.lower() for ext in ['.pdf', '.dwg']):
                    print(f"  Doc: {href}")

            # Text content
            text = soup.get_text()
            units = set(re.findall(r'(\d+(?:\.\d+)?\s*(?:BHK|sq\.?\s*ft|sqft|sqm|sq\.\s*m|Lakh|Crore|Cr|L))', text, re.IGNORECASE))
            print(f"Units/Mentions: {list(units)[:15]}")

        except Exception as e:
            print(f"Error fetching {u}: {e}")

if __name__ == '__main__':
    fetch_specific()
