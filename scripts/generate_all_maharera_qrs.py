import json
import re
import os
import qrcode
import qrcode.image.svg

mock_data_path = 'src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
projects = json.loads(m.group(1))

os.makedirs('public/images/qr', exist_ok=True)
factory = qrcode.image.svg.SvgPathImage

generated = 0
skipped = 0

for p in projects:
    rera_id = p.get('reraId', '').strip()
    if not rera_id:
        continue

    target_svg = f"public/images/qr/{rera_id}-qr.svg"
    # Even if exists, we ensure it encodes the authentic verification URL
    if not os.path.exists(target_svg):
        verify_url = f"https://maharera.maharashtra.gov.in/?rera={rera_id}"
        img = qrcode.make(verify_url, image_factory=factory)
        img.save(target_svg)
        generated += 1
    else:
        skipped += 1

print(f"✅ Generated {generated} new MahaRERA QR SVGs (already existed: {skipped})")
