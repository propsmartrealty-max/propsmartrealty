import re
from bs4 import BeautifulSoup

with open('scratch/nandedcity_home.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = BeautifulSoup(html, 'html.parser')

reras = [
    'P52100051867', 'P52100051948', 'P52100047078', 'P52100032686',
    'P52100049984', 'P52100055134', 'P52100002425', 'PR1260002502527',
    'PR1260002501621', 'P52100079788', 'P52100021465', 'P52100021483',
    'P52100000385', 'P52100000288', 'P52100000292'
]

print("Looking up RERA numbers in homepage context:")
for r in reras:
    idx = 0
    found = False
    while True:
        pos = html.find(r, idx)
        if pos == -1:
            break
        found = True
        snippet = html[max(0, pos-200):min(len(html), pos+200)]
        clean_snip = re.sub(r'\s+', ' ', snippet)
        print(f"\n[{r}]:")
        print(f"  ... {clean_snip} ...")
        idx = pos + len(r)
    if not found:
        print(f"\n[{r}]: Not on homepage")
