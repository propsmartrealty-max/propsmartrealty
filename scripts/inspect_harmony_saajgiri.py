from bs4 import BeautifulSoup
import re
import json

def inspect_harmony():
    with open('scratch/page_harmony.html') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    print("=== HARMONY ===")
    print("Title:", soup.title.string if soup.title else '')
    
    # Extract all section texts
    sections = soup.find_all(['section', 'div'], class_=re.compile(r'banner|overview|config|floor|plan|amenit|spec|rera|price|about', re.I))
    for s in sections[:10]:
        text = s.get_text(separator=' ', strip=True)
        if len(text) > 20 and len(text) < 500:
            print("Section:", text)

    # Floor plans and images
    imgs = [img['src'] for img in soup.find_all('img', src=True)]
    print("\nHarmony Images:")
    for img in imgs:
        print(" ", img)

def inspect_saajgiri():
    with open('scratch/page_saajgiri.html') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    
    print("\n=== SAAJGIRI ===")
    print("Title:", soup.title.string if soup.title else '')
    
    # Extract all text mentioning BHK, sqft, price
    for p in soup.find_all(['p', 'h1', 'h2', 'h3', 'h4', 'span', 'div']):
        t = p.get_text(strip=True)
        if any(k in t.lower() for k in ['carpet', 'sq.ft', 'sqft', 'bhk', 'cr', 'lakh', 'starting']):
            if len(t) < 200:
                print("Text:", t)

    imgs = [img['src'] for img in soup.find_all('img', src=True)]
    print("\nSaajgiri Images:")
    for img in imgs:
        print(" ", img)

if __name__ == '__main__':
    inspect_harmony()
    inspect_saajgiri()
