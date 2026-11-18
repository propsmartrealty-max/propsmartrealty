import json
import re

with open('scratch/nanded_pages_summary.json') as f:
    pages = json.load(f)

print(f"Total pages: {len(pages)}")

# Filter to key project pages
project_slugs = [
    'harmony', 'saajgiri', 'destination-center-ii', 'symphonyitpark',
    'bageshree', 'kalashree', 'pancham', 'sarang', 'asawari', 'sargam',
    'lalit', 'madhuvanti', 'mangal-bhairav', 'shubh-kalyan', 'new-projects',
    'ongoing-projects', 'completed-projects'
]

for p in pages:
    url = p['url'].lower().strip('/')
    slug = url.split('/')[-1]
    if any(s in url for s in project_slugs):
        print(f"\n======================================")
        print(f"Page: {p['url']}")
        print(f"Title: {p['title']}")
        print(f"RERAs: {p['reras']}")
        print(f"Headings: {p['headings']}")
        print(f"PDFs: {p['pdfs']}")
        print(f"Images count: {len(p['images'])}")
        # print some image samples
        for img in p['images']:
            if any(k in img.lower() for k in ['banner', 'plan', 'layout', 'floor', 'elevation', 'hero', 'upload', '202']):
                print(f"  Img: {img}")
