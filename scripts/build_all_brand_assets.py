import os
import subprocess
import numpy as np
from PIL import Image
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.transformPen import TransformPen

def generate_master_brand_system():
    tt = TTFont('/System/Library/Fonts/AppleSDGothicNeo.ttc', fontNumber=2)
    glyph_set = tt.getGlyphSet()
    cmap = tt.getBestCmap()
    hmtx = tt['hmtx']

    # 1. Calculate precise bounding box of 'propsmart'
    curr_x = 0
    boxes = []
    for char in 'propsmart':
        gname = cmap[ord(char)]
        advance_width, _ = hmtx[gname]
        bp = BoundsPen(glyph_set)
        glyph_set[gname].draw(bp)
        if bp.bounds:
            x0, y0, x1, y1 = bp.bounds
            boxes.append((x0 + curr_x, y0, x1 + curr_x, y1))
        curr_x += advance_width
    
    min_x = min(b[0] for b in boxes)
    min_y = min(b[1] for b in boxes)
    max_x = max(b[2] for b in boxes)
    max_y = max(b[3] for b in boxes)

    vb_w = int(max_x - min_x)
    vb_h = int(max_y - min_y)

    print(f'Exact vector dimensions: {vb_w} x {vb_h} (aspect ratio: {vb_w / vb_h:.3f})')

    # 2. Extract SVG path commands transformed to SVG coordinates (x' = x - min_x, y' = max_y - y)
    def get_word_path(word, start_x):
        cx = start_x
        cmds = []
        for char in word:
            gname = cmap[ord(char)]
            advance_width, _ = hmtx[gname]
            path_pen = SVGPathPen(glyph_set)
            trans_pen = TransformPen(path_pen, (1, 0, 0, -1, cx - min_x, max_y))
            glyph_set[gname].draw(trans_pen)
            c = path_pen.getCommands()
            if c:
                cmds.append(c)
            cx += advance_width
        return ' '.join(cmds), cx

    prop_d, p_end = get_word_path('prop', 0)
    smart_d, total_x = get_word_path('smart', p_end)

    # 3. Write PropsmartLogo.tsx
    component_template = f'''import React from 'react';

interface PropsmartLogoProps {{
    isSolid?: boolean;
    className?: string;
    variant?: 'light' | 'dark' | 'auto';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}}

export const PropsmartLogo: React.FC<PropsmartLogoProps> = ({{
    isSolid = false,
    className = '',
    variant = 'auto',
    size = 'md',
}}) => {{
    // Color mode:
    // variant 'dark': for dark hero / footer backgrounds -> copper + pure white
    // variant 'light': for white / light backgrounds -> copper + dark charcoal
    // variant 'auto': dynamic based on isSolid (scrolled navbar)
    const isDarkBackground = variant === 'dark' || (variant === 'auto' && !isSolid);
    const propColor = isDarkBackground ? '#E2873E' : '#CE813D';
    const smartColor = isDarkBackground ? '#FFFFFF' : '#262425';

    const sizeClasses: Record<string, string> = {{
        sm: 'h-6 sm:h-7',
        md: 'h-8 sm:h-9 md:h-10',
        lg: 'h-10 sm:h-11 md:h-12',
        xl: 'h-12 sm:h-14 md:h-16',
    }};

    const heightClass = sizeClasses[size] || sizeClasses.md;

    return (
        <div className={{`flex items-center shrink-0 select-none ${{className}}`}}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 {vb_w} {vb_h}"
                className={{`${{heightClass}} w-auto max-w-none transition-all duration-300 block`}}
                fillRule="evenodd"
                clipRule="evenodd"
                role="img"
                aria-label="PROPSMART REALTY"
            >
                <title>PROPSMART REALTY</title>
                <path
                    id="prop"
                    d="{prop_d}"
                    fill={{propColor}}
                />
                <path
                    id="smart"
                    d="{smart_d}"
                    fill={{smartColor}}
                />
            </svg>
        </div>
    );
}};

export default PropsmartLogo;
'''
    component_path = '/Users/vikasyewle/Documents/desktop items/punepropertyvlog/punepropertyvloginside/src/components/Portal/PropsmartLogo.tsx'
    with open(component_path, 'w') as f:
        f.write(component_template)
    print("Updated PropsmartLogo.tsx with master vector geometry")

    # 4. Generate SVG master assets
    public_dir = '/Users/vikasyewle/Documents/desktop items/punepropertyvlog/punepropertyvloginside/public'
    img_dir = os.path.join(public_dir, 'images')
    os.makedirs(img_dir, exist_ok=True)

    svg_solid = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {vb_h}" fill-rule="evenodd" clip-rule="evenodd">
  <path id="prop" d="{prop_d}" fill="#CE813D" />
  <path id="smart" d="{smart_d}" fill="#262425" />
</svg>'''
    with open(os.path.join(img_dir, 'propsmart-logo.svg'), 'w') as f:
        f.write(svg_solid)

    svg_white = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w} {vb_h}" fill-rule="evenodd" clip-rule="evenodd">
  <path id="prop" d="{prop_d}" fill="#E2873E" />
  <path id="smart" d="{smart_d}" fill="#FFFFFF" />
</svg>'''
    with open(os.path.join(img_dir, 'propsmart-logo-white.svg'), 'w') as f:
        f.write(svg_white)
    print("Wrote propsmart-logo.svg and propsmart-logo-white.svg")

    # 5. Generate 4096px PNG via qlmanage
    tmp_svg = '/tmp/master_render.svg'
    with open(tmp_svg, 'w') as f:
        f.write(svg_solid)
    subprocess.run(['qlmanage', '-t', '-s', '4096', '-o', '/tmp', tmp_svg], check=True)

    solid_png = Image.open('/tmp/master_render.svg.png').convert('RGBA')
    arr = np.array(solid_png, dtype=float)
    dist = 255.0 - np.min(arr[:, :, :3], axis=2)
    mask = dist > 5
    y, x = np.where(mask)
    pad = 40
    crop_solid = solid_png.crop((max(0, x.min() - pad), max(0, y.min() - pad), min(solid_png.width, x.max() + pad), min(solid_png.height, y.max() + pad)))

    # Transparent RGBA for solid
    rgb = np.array(crop_solid, dtype=np.uint8)[:, :, :3]
    gray = np.min(rgb, axis=2).astype(float)
    alpha = np.clip((255.0 - gray) / 255.0 * 1.08, 0, 1.0)
    alpha = (alpha * 255).astype(np.uint8)
    clean_solid = Image.fromarray(np.dstack([rgb, alpha]))
    clean_solid.save(os.path.join(img_dir, 'propsmart-logo.png'), 'PNG')
    print(f"Wrote propsmart-logo.png ({clean_solid.size})")

    # 6. Generate propsmart-logo-white.png
    arr_solid = np.array(clean_solid)
    prop_split_x = int(arr_solid.shape[1] * (p_end / (max_x - min_x)))
    white_arr = arr_solid.copy()

    # Smart -> #FFFFFF
    smart_mask = np.zeros(arr_solid.shape[:2], dtype=bool)
    smart_mask[:, prop_split_x:] = arr_solid[:, prop_split_x:, 3] > 0
    white_arr[smart_mask, 0] = 255
    white_arr[smart_mask, 1] = 255
    white_arr[smart_mask, 2] = 255

    # Prop -> #E2873E (RGB 226, 135, 62)
    prop_mask = np.zeros(arr_solid.shape[:2], dtype=bool)
    prop_mask[:, :prop_split_x] = arr_solid[:, :prop_split_x, 3] > 0
    white_arr[prop_mask, 0] = 226
    white_arr[prop_mask, 1] = 135
    white_arr[prop_mask, 2] = 62

    clean_white = Image.fromarray(white_arr)
    clean_white.save(os.path.join(img_dir, 'propsmart-logo-white.png'), 'PNG')
    print(f"Wrote propsmart-logo-white.png ({clean_white.size})")

    # 7. Icons
    icon_512 = Image.new('RGBA', (512, 512), (255, 255, 255, 255))
    target_w = 440
    aspect = clean_solid.height / clean_solid.width
    target_h = int(target_w * aspect)
    logo_resized = clean_solid.resize((target_w, target_h), Image.Resampling.LANCZOS)
    pos_x = (512 - target_w) // 2
    pos_y = (512 - target_h) // 2
    icon_512.paste(logo_resized, (pos_x, pos_y), logo_resized)
    icon_512.save(os.path.join(public_dir, 'apple-touch-icon.png'))

    fav_32 = icon_512.resize((32, 32), Image.Resampling.LANCZOS)
    fav_32.save(os.path.join(public_dir, 'favicon-32x32.png'))
    fav_32.save(os.path.join(public_dir, 'favicon.ico'), format='ICO')
    print("Wrote apple-touch-icon.png, favicon-32x32.png, and favicon.ico")

if __name__ == '__main__':
    generate_master_brand_system()
