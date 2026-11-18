import os
import re
from bs4 import BeautifulSoup

pages = ['harmony', 'saajgiri', 'destination-center-ii', 'symphonyitpark', 'bageshree', 'kalashree', 'ongoing-projects', 'new-projects']

for p in pages:
    fname = f"scratch/page_{p}.html"
    if not os.path.exists(fname):
        print(f"File not found: {fname}")
        continue
    with open(fname, 'r', encoding='utf-8') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    print(f"\n==============================================")
    print(f"PAGE: {p}")
    print(f"Title: {soup.title.string if soup.title else ''}")
    
    # Text content containing BHK, carpet, sqft, price, rera
    text = soup.get_text()
    
    # Find all RERA lines
    rera_lines = [line.strip() for line in text.split('\n') if any(k in line.lower() for k in ['rera', 'p521', 'pr126'])]
    print("RERA Lines:")
    for rl in set(rera_lines):
        print(f"  {rl}")

    # Find all images
    imgs = [img['src'] for img in soup.find_all('img', src=True)]
    print("\nInteresting Images:")
    for img in imgs:
        if any(k in img.lower() for k in ['plan', 'floor', 'layout', 'master', 'banner', 'rera', 'qr', 'elevation', 'hero', '202']):
            print(f"  {img}")

    # Find downloadable brochures or pdfs
    for a in soup.find_all('a', href=True):
        href = a['href']
        if any(ext in href.lower() for ext in ['.pdf', '.dwg']):
            print(f"  Doc: {href}")

    # Search for carpet areas, configurations, price
    matches = re.findall(r'(\d+(?:\.\d+)?\s*(?:BHK|sq\.?\s*ft|sqft|sqm|sq\.\s*m|Lakh|Crore|Cr|L))', text, re.IGNORECASE)
    print("Units/Measurements mentioned:", set(matches[:20]))
