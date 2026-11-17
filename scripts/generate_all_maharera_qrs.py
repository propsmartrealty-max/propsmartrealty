import json
import re
import os
import qrcode
import qrcode.image.svg

mock_data_path = 'src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
if not m:
    print("Could not find PROJECTS array")
    exit(1)

projects = json.loads(m.group(1))

os.makedirs('public/images/qr', exist_ok=True)
factory = qrcode.image.svg.SvgPathImage

generated = 0
for p in projects:
    rera_id = p.get('reraId', '').strip()
    if not rera_id:
        continue

    target_svg = f"public/images/qr/{rera_id}-qr.svg"
    verify_url = f"https://maharera.maharashtra.gov.in/?rera={rera_id}"
    
    # Generate SVG with qrcode
    img = qrcode.make(verify_url, image_factory=factory)
    img.save(target_svg)

    # Wrap inner SVG path in clickable <a> hyperlink inside the SVG so clicking opens MahaRERA
    with open(target_svg, 'r', encoding='utf-8') as sf:
        svg_content = sf.read()
    
    if '<a href=' not in svg_content:
        # Wrap <path> in <a href="..." target="_blank">
        svg_content = re.sub(
            r'(<path[^>]+>)',
            rf'<a href="{verify_url}" target="_blank" title="Verify {rera_id} on Official MahaRERA Portal">\1</a>',
            svg_content
        )
        with open(target_svg, 'w', encoding='utf-8') as sf:
            sf.write(svg_content)

    generated += 1

print(f"Generated and hyperlinked {generated} project QR SVGs in public/images/qr/")
