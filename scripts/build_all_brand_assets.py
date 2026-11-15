import os
import subprocess
import numpy as np
from PIL import Image

def main():
    paths_file = '/Users/vikasyewle/.gemini/antigravity/brain/49dfc398-8d39-4403-a360-9358a8d76041/scratch/paths.txt'
    with open(paths_file) as f:
        lines = f.readlines()
        w, h = lines[0].split()
        prop_d = lines[1].strip()
        smart_d = lines[2].strip()

    public_dir = '/Users/vikasyewle/Documents/desktop items/punepropertyvlog/punepropertyvloginside/public'
    img_dir = os.path.join(public_dir, 'images')
    os.makedirs(img_dir, exist_ok=True)

    # 1. Generate propsmart-logo.svg (Dark/Solid version)
    svg_solid = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill-rule="evenodd" clip-rule="evenodd">
  <path id="prop" d="{prop_d}" fill="#CE813D" />
  <path id="smart" d="{smart_d}" fill="#262425" />
</svg>'''
    with open(os.path.join(img_dir, 'propsmart-logo.svg'), 'w') as f:
        f.write(svg_solid)
    print("Wrote propsmart-logo.svg")

    # 2. Generate propsmart-logo-white.svg (White text version for dark hero/footer)
    svg_white = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" fill-rule="evenodd" clip-rule="evenodd">
  <path id="prop" d="{prop_d}" fill="#E2873E" />
  <path id="smart" d="{smart_d}" fill="#FFFFFF" />
</svg>'''
    with open(os.path.join(img_dir, 'propsmart-logo-white.svg'), 'w') as f:
        f.write(svg_white)
    print("Wrote propsmart-logo-white.svg")

    # 3. High-resolution rasterization via qlmanage
    tmp_svg = '/tmp/render_solid.svg'
    with open(tmp_svg, 'w') as f:
        f.write(svg_solid)
    subprocess.run(['qlmanage', '-t', '-s', '4096', '-o', '/tmp', tmp_svg], check=True)

    solid_png = Image.open('/tmp/render_solid.svg.png').convert('RGBA')
    arr = np.array(solid_png, dtype=float)
    dist = 255.0 - np.min(arr[:, :, :3], axis=2)
    mask = dist > 5
    y, x = np.where(mask)
    pad = 40
    crop_solid = solid_png.crop((max(0, x.min() - pad), max(0, y.min() - pad), min(solid_png.width, x.max() + pad), min(solid_png.height, y.max() + pad)))
    
    # Clean transparent alpha for solid
    rgb = np.array(crop_solid, dtype=np.uint8)[:, :, :3]
    gray = np.min(rgb, axis=2).astype(float)
    alpha = np.clip((255.0 - gray) / 255.0 * 1.08, 0, 1.0)
    alpha = (alpha * 255).astype(np.uint8)
    clean_solid = Image.fromarray(np.dstack([rgb, alpha]))
    clean_solid.save(os.path.join(img_dir, 'propsmart-logo.png'), 'PNG')
    print(f"Wrote propsmart-logo.png (4096px wide, {clean_solid.size})")

    # 4. Generate propsmart-logo-white.png (Identical geometry and alpha, colored for dark mode)
    arr_solid = np.array(clean_solid)
    prop_split_x = int(arr_solid.shape[1] * 0.49)
    white_arr = arr_solid.copy()

    # Smart region: from prop_split_x to end -> #FFFFFF
    smart_mask = np.zeros(arr_solid.shape[:2], dtype=bool)
    smart_mask[:, prop_split_x:] = arr_solid[:, prop_split_x:, 3] > 0
    white_arr[smart_mask, 0] = 255
    white_arr[smart_mask, 1] = 255
    white_arr[smart_mask, 2] = 255

    # Prop region: from 0 to prop_split_x -> #E2873E (RGB 226, 135, 62)
    prop_mask = np.zeros(arr_solid.shape[:2], dtype=bool)
    prop_mask[:, :prop_split_x] = arr_solid[:, :prop_split_x, 3] > 0
    white_arr[prop_mask, 0] = 226
    white_arr[prop_mask, 1] = 135
    white_arr[prop_mask, 2] = 62

    clean_white = Image.fromarray(white_arr)
    clean_white.save(os.path.join(img_dir, 'propsmart-logo-white.png'), 'PNG')
    print(f"Wrote propsmart-logo-white.png ({clean_white.size})")

    # 5. Icons: apple-touch-icon, favicon-32x32, favicon.ico
    # 512x512 square icon with clean white background and centered logo
    icon_512 = Image.new('RGBA', (512, 512), (255, 255, 255, 255))
    target_w = 440
    aspect = clean_solid.height / clean_solid.width
    target_h = int(target_w * aspect)
    logo_resized = clean_solid.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (512 - target_w) // 2
    pos_y = (512 - target_h) // 2
    icon_512.paste(logo_resized, (pos_x, pos_y), logo_resized)
    icon_512.save(os.path.join(public_dir, 'apple-touch-icon.png'))
    print("Wrote apple-touch-icon.png (512x512)")

    # Favicon 32x32
    fav_32 = icon_512.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32.save(os.path.join(public_dir, 'favicon-32x32.png'))
    fav_32.save(os.path.join(public_dir, 'favicon.ico'), format='ICO')
    print("Wrote favicon-32x32.png and favicon.ico")

if __name__ == '__main__':
    main()
