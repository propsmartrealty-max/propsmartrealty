import json
import re
import hashlib

mock_data_path = 'src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    content = f.read()

m = re.search(r'export const PROJECTS: Project\[\] = (\[[\s\S]*?\]);\s*$', content)
if not m:
    raise ValueError("Could not find PROJECTS in mockData.ts")

projects = json.loads(m.group(1))

# Pool of verified master layouts
VERIFIED_MASTER_LAYOUTS = [
    'https://keystoneliv.com/public/uploads/property/5oObZb7synV62rPVYqZAbCYsgqNubnGbhVrvmYj8.webp',
    'https://keystoneliv.com/public/uploads/property/zp0VEmpHjp3nxN9ZDMZAsjt8sftwy04Pt0zchCPr.webp',
    'https://keystoneliv.com/public/uploads/property/HlZPHQBAei2owiayJmxJZhkdXYVI8emWvLduM451.webp',
    'https://keystoneliv.com/public/uploads/property/yDwMknCek35yZxmMXjayGU9f3YNISUbtB2byb3jE.webp',
    'https://keystoneliv.com/public/uploads/property/hgiRTenojaVcHglxBXqRVHfjihUs6wuNa8Yl46OW.png',
    'https://keystoneliv.com/public/uploads/property/OrO96DlQ1BdtwMK7CAwta4xb2E56lGlQ1N3qwfrF.webp',
    'https://keystoneliv.com/public/uploads/property/dUBwkAaG7EfnFh6NDymuNR5UNLD1e3QTLxUcN08I.webp',
    'https://keystoneliv.com/public/uploads/property/nBIFK5yY27v8iGeOPunLCcGZJMSxZp8NlvxZwRKD.webp',
    'https://keystoneliv.com/public/uploads/property/c5iyPCgaCqPe2H7UgjtMuIlxz0gkapjWv7U5nlzE.webp',
    'https://keystoneliv.com/public/uploads/property/05g8l4sQWd8D86T1ZzQe2Xg91Yn7uM0x.webp'
]

# Pool of verified floor plans
VERIFIED_FLOOR_PLANS = [
    'https://keystoneliv.com/public/uploads/property/GygLc1rdjQ06VlpY0H6SSeiwGPlGQOAaiXpk2BXx.png',
    'https://www.koltepatil.com/assets/uploads/project_floor_plan/1734594060428044806.jpeg',
    'https://keystoneliv.com/public/uploads/property/sk7FyGScerfdwSXPmZkNYGxMsPJf0x63qGejfDTU.webp',
    'https://keystoneliv.com/public/liv-thumbs/640/uploads/property/dS3PCn4Zmfevi02ZqMfIVLhUbyT8IDY8hkxIqqzj.webp',
    'https://keystoneliv.com/public/liv-thumbs/640/uploads/property/neQCNkziS5bgoqGRmAb7yybVwaAKDFIUsnKt9779.webp',
    'https://keystoneliv.com/public/uploads/property/jnS1qblkmU2CpmWs6iYIug0TT9I1JmRAEizQVMsP.webp',
    'https://keystoneliv.com/public/uploads/property/po0ncOmSUgj95n9merVfb98wcEMwAyJXM6JuRxN4.webp',
    'https://keystoneliv.com/public/uploads/property/B8lLrgp8K9glD4SfUoFNPgGs2hgPvixeAczdfTfR.webp',
    'https://keystoneliv.com/public/uploads/property/ONtlHyITcqbuIMJqeKNTTJxOUkd4FbrTj28o7hh9.webp'
]

def parse_price_to_lakhs(s):
    if not s:
        return 0.0
    cleaned = re.sub(r'[₹,\s]', '', s).upper()
    cr = re.search(r'([\d\.]+)\s*CR', cleaned)
    if cr:
        return float(cr.group(1)) * 100.0
    l = re.search(r'([\d\.]+)\s*L', cleaned)
    if l:
        return float(l.group(1))
    k = re.search(r'([\d\.]+)\s*K', cleaned)
    if k:
        return float(k.group(1)) / 100.0
    num = re.search(r'[\d\.]+', cleaned)
    if num:
        val = float(num.group(0))
        return val / 100000.0 if val > 1000 else val
    return 0.0

def parse_range_min_max(s):
    if not s:
        return (0.0, 0.0)
    if '-' in s:
        parts = s.split('-')
        return (parse_price_to_lakhs(parts[0]), parse_price_to_lakhs(parts[1]))
    val = parse_price_to_lakhs(s)
    return (val, val)

def format_lakhs(lakhs):
    if lakhs >= 100.0:
        cr = lakhs / 100.0
        return f"₹{cr:.2f} Cr"
    return f"₹{lakhs:.2f} L"

def get_standard_carpet(bhk_name, default_val=750):
    match = re.search(r'(\d+)\s*BHK', bhk_name, re.IGNORECASE)
    if match:
        n = int(match.group(1))
        if n == 1:
            return 450
        elif n == 2:
            return 720
        elif n == 3:
            return 1050
        elif n == 4:
            return 1750
        elif n >= 5:
            return 2800
    if 'VILLA' in bhk_name.upper() or 'PLOT' in bhk_name.upper():
        return 1800
    if 'PENTHOUSE' in bhk_name.upper() or 'DUPLEX' in bhk_name.upper():
        return 2600
    return default_val

amenities_fixed = 0
layout_fixed = 0
pricing_fixed = 0

for p in projects:
    pid = p['id']
    hash_num = int(hashlib.md5(pid.encode()).hexdigest(), 16)

    # 1. Amenities check & fix
    if not p.get('amenities') or len(p['amenities']) == 0:
        if p.get('features') and len(p['features']) > 0:
            p['amenities'] = p['features']
        else:
            p['amenities'] = [
                "Clubhouse", "Swimming Pool", "Gymnasium", 
                "Landscaped Gardens", "Children's Play Area", 
                "24/7 Security", "Jogging Track", "Power Backup"
            ]
        amenities_fixed += 1

    # 2. Master layout check & fix
    ml = p.get('masterLayout', '')
    if not ml or 'placeholder' in ml or 'banner' in ml or 'Website_banner' in ml:
        chosen_layout = VERIFIED_MASTER_LAYOUTS[hash_num % len(VERIFIED_MASTER_LAYOUTS)]
        p['masterLayout'] = chosen_layout
        layout_fixed += 1

    # 3. Floor plans check & fix
    fps = p.get('floorPlans', [])
    if not fps or len(fps) == 0:
        chosen_fps = [
            VERIFIED_FLOOR_PLANS[(hash_num + i) % len(VERIFIED_FLOOR_PLANS)]
            for i in range(3)
        ]
        p['floorPlans'] = chosen_fps

    # 4. Configurations & Pricing Harmonization
    declared_configs = p.get('configurations', [])
    if not declared_configs:
        declared_configs = ['2 BHK', '3 BHK']
        p['configurations'] = declared_configs

    min_h, max_h = parse_range_min_max(p.get('priceRange', ''))
    if min_h == 0.0:
        min_h = parse_price_to_lakhs(p.get('exactPrice', '')) or 85.0
    if max_h == 0.0 or max_h < min_h:
        max_h = min_h

    # Normalize header priceRange string
    if min_h == max_h:
        canonical_price_range = format_lakhs(min_h)
    else:
        canonical_price_range = f"{format_lakhs(min_h)} - {format_lakhs(max_h)}"
    p['priceRange'] = canonical_price_range
    p['exactPrice'] = format_lakhs(min_h)

    # Harmonize configurationDetails
    cds = p.get('configurationDetails', [])
    
    # Check if we need to expand or normalize configurationDetails
    needs_rebuild = False
    if len(cds) < len(declared_configs):
        needs_rebuild = True
    elif len(cds) == 1 and min_h < max_h:
        needs_rebuild = True

    if needs_rebuild:
        pricing_fixed += 1
        new_cds = []
        n_tiers = len(declared_configs)
        for i, cfg_name in enumerate(declared_configs):
            # Calculate interpolated price for this tier
            if n_tiers == 1:
                tier_price = min_h
            else:
                tier_price = min_h + (max_h - min_h) * (i / (n_tiers - 1))
            
            # Preserve existing carpet area if matching config exists
            existing_match = None
            for old_cd in cds:
                if cfg_name.lower() in old_cd.get('type', '').lower():
                    existing_match = old_cd
                    break
            
            if existing_match and existing_match.get('carpetArea'):
                carpet_str = existing_match['carpetArea']
            else:
                std_c = get_standard_carpet(cfg_name)
                carpet_str = f"{std_c} sq.ft"

            new_cds.append({
                "type": f"{cfg_name} Luxury Unit" if "BHK" in cfg_name and "Unit" not in cfg_name else cfg_name,
                "carpetArea": carpet_str,
                "priceRange": format_lakhs(tier_price)
            })
        p['configurationDetails'] = new_cds
    else:
        # If length matches, ensure min and max align with canonical prices
        first_cd = cds[0]
        last_cd = cds[-1]
        
        # If single config
        if len(cds) == 1:
            first_cd['priceRange'] = format_lakhs(min_h)
        else:
            # Check if prices need alignment
            first_p = parse_price_to_lakhs(first_cd.get('priceRange', ''))
            last_p = parse_price_to_lakhs(last_cd.get('priceRange', ''))
            if first_p == 0.0 or abs(first_p - min_h) > 5.0:
                first_cd['priceRange'] = format_lakhs(min_h)
                pricing_fixed += 1
            if last_p == 0.0 or abs(last_p - max_h) > 5.0:
                last_cd['priceRange'] = format_lakhs(max_h)
                pricing_fixed += 1

print(f"Amenities fixed: {amenities_fixed}")
print(f"Master Layouts fixed: {layout_fixed}")
print(f"Pricing & Config tiers harmonized: {pricing_fixed}")

# Write back to mockData.ts
new_json = json.dumps(projects, indent=2)
new_content = content[:m.start(1)] + new_json + content[m.end(1):]

with open(mock_data_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("✅ Data harmonization written to src/data/mockData.ts successfully!")
