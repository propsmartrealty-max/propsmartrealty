#!/usr/bin/env python3
"""
generate_favicons.py
Generates the authentic PROPSMART brand favicon assets from the exact 'p' vector in PropsmartLogo.
Creates:
- public/favicon.svg (vector, SVG 1.1)
- public/favicon-32x32.png (32x32 PNG)
- public/favicon-48x48.png (48x48 PNG)
- public/favicon-192x192.png (192x192 PNG)
- public/apple-touch-icon.png (512x512 PNG)
- public/favicon.ico (multi-resolution ICO with 16x16, 32x32, 48x48)
"""

import os
import shutil
import numpy as np
from PIL import Image, ImageDraw

# Root directory
ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(ROOT_DIR, "public")
DIST_DIR = os.path.join(ROOT_DIR, "dist")

# Exact 'p' path coordinates from PropsmartLogo:
# d="M0 764H85V590C111 606 153 622 208 622C346 622 432 544 432 362V349C432 165 336 108 229 108C168 108 115 130 86 158H81V118H0ZM201 553C151 553 106 537 85 519V215C106 199 151 181 206 181C295 181 345 218 345 352V374C345 504 291 553 201 553Z"

SCALE = 0.58
DX = 130.72
DY = 8.12

SVG_CONTENT = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="propsmart-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2873E" />
      <stop offset="100%" stop-color="#CE813D" />
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#propsmart-grad)" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    fill="#FFFFFF"
    d="M130.72 451.24H180.02V350.32C195.1 359.6 219.46 368.88 251.36 368.88C331.4 368.88 381.28 323.64 381.28 218.08V210.54C381.28 103.82 325.6 70.76 263.54 70.76C228.16 70.76 197.42 83.52 180.6 99.76H177.7V76.56H130.72ZM247.3 328.86C218.3 328.86 192.2 319.58 180.02 309.14V132.82C192.2 123.54 218.3 113.1 250.2 113.1C301.82 113.1 330.82 134.56 330.82 212.28V225.04C330.82 300.44 299.5 328.86 247.3 328.86Z"
  />
</svg>
"""

def eval_cubic_bezier(p0, p1, p2, p3, n=80):
    t = np.linspace(0, 1, n).reshape(-1, 1)
    return (1 - t)**3 * p0 + 3 * (1 - t)**2 * t * p1 + 3 * (1 - t) * t**2 * p2 + t**3 * p3

def get_glyph_polygons():
    # Outer contour
    outer_points = [
        np.array([0., 764.]),
        np.array([85., 764.]),
        np.array([85., 590.]),
    ]
    outer_points.append(eval_cubic_bezier([85., 590.], [111., 606.], [153., 622.], [208., 622.])[1:])
    outer_points.append(eval_cubic_bezier([208., 622.], [346., 622.], [432., 544.], [432., 362.])[1:])
    outer_points.append(np.array([[432., 349.]]))
    outer_points.append(eval_cubic_bezier([432., 349.], [432., 165.], [336., 108.], [229., 108.])[1:])
    outer_points.append(eval_cubic_bezier([229., 108.], [168., 108.], [115., 130.], [86., 158.])[1:])
    outer_points.append(np.array([[81., 158.], [81., 118.], [0., 118.]]))
    outer_poly = np.vstack(outer_points)

    # Inner contour (counter hole)
    inner_points = [
        eval_cubic_bezier([201., 553.], [151., 553.], [106., 537.], [85., 519.]),
        np.array([[85., 215.]]),
        eval_cubic_bezier([85., 215.], [106., 199.], [151., 181.], [206., 181.])[1:],
        eval_cubic_bezier([206., 181.], [295., 181.], [345., 218.], [345., 352.])[1:],
        np.array([[345., 374.]]),
        eval_cubic_bezier([345., 374.], [345., 504.], [291., 553.], [201., 553.])[1:],
    ]
    inner_poly = np.vstack(inner_points)
    return outer_poly, inner_poly

OUTER_POLY, INNER_POLY = get_glyph_polygons()

def render_icon(size: int, scale: float = SCALE, dx: float = DX, dy: float = DY, ss: int = 4) -> Image.Image:
    cs = size * ss
    rx = int(cs * (112.0 / 512.0))

    # Mask for squircle
    mask = Image.new('L', (cs, cs), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, cs - 1, cs - 1], radius=rx, fill=255)

    # Gradient background: #E2873E (226, 135, 62) to #CE813D (206, 129, 61)
    y_coords, x_coords = np.mgrid[0:cs, 0:cs]
    t = (x_coords + y_coords) / (2.0 * cs)
    c0 = np.array([226, 135, 62], dtype=np.float32)
    c1 = np.array([206, 129, 61], dtype=np.float32)
    rgb = (1 - t[..., None]) * c0 + t[..., None] * c1
    grad = np.zeros((cs, cs, 4), dtype=np.uint8)
    grad[..., :3] = rgb.astype(np.uint8)
    grad[..., 3] = 255
    bg_im = Image.new('RGBA', (cs, cs), (0, 0, 0, 0))
    bg_im.paste(Image.fromarray(grad), (0, 0), mask)

    # Scale polygons to canvas size
    s_total = scale * ss * (size / 512.0)
    dx_total = dx * ss * (size / 512.0)
    dy_total = dy * ss * (size / 512.0)

    outer_poly_scaled = OUTER_POLY * s_total + np.array([dx_total, dy_total])
    inner_poly_scaled = INNER_POLY * s_total + np.array([dx_total, dy_total])

    # Draw pure white glyph
    letter_mask = Image.new('L', (cs, cs), 0)
    ldraw = ImageDraw.Draw(letter_mask)
    ldraw.polygon([tuple(p) for p in outer_poly_scaled], fill=255)
    ldraw.polygon([tuple(p) for p in inner_poly_scaled], fill=0)

    letter_im = Image.new('RGBA', (cs, cs), (255, 255, 255, 255))
    bg_im.paste(letter_im, (0, 0), letter_mask)

    return bg_im.resize((size, size), Image.Resampling.LANCZOS)

def main():
    os.makedirs(PUBLIC_DIR, exist_ok=True)

    # 1. Write favicon.svg
    svg_path = os.path.join(PUBLIC_DIR, "favicon.svg")
    with open(svg_path, "w", encoding="utf-8") as f:
        f.write(SVG_CONTENT)
    print(f"Generated {svg_path}")

    # 2. Render PNG resolutions
    sizes = {
        "favicon-32x32.png": 32,
        "favicon-48x48.png": 48,
        "favicon-192x192.png": 192,
        "apple-touch-icon.png": 512,
    }

    images = {}
    for filename, size in sizes.items():
        im = render_icon(size)
        out_path = os.path.join(PUBLIC_DIR, filename)
        im.save(out_path, "PNG", optimize=True)
        images[size] = im
        print(f"Generated {out_path} ({size}x{size})")

    # 3. Generate favicon.ico (multi-resolution: 16, 32, 48)
    im16 = render_icon(16)
    ico_path = os.path.join(PUBLIC_DIR, "favicon.ico")
    im16.save(
        ico_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=[images[32], images[48]],
    )
    print(f"Generated {ico_path} (multi-res ICO: 16x16, 32x32, 48x48)")

    # 4. Also copy to dist if dist exists
    if os.path.exists(DIST_DIR):
        for fname in ["favicon.svg", "favicon-32x32.png", "favicon-48x48.png", "favicon-192x192.png", "apple-touch-icon.png", "favicon.ico"]:
            src = os.path.join(PUBLIC_DIR, fname)
            dst = os.path.join(DIST_DIR, fname)
            shutil.copy2(src, dst)
            print(f"Copied {fname} to {DIST_DIR}")

    print("All PROPSMART authentic favicon assets generated successfully!")

if __name__ == "__main__":
    main()
