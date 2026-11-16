import json
import os
import sys

mock_data_path = 'punepropertyvloginside/src/data/mockData.ts'
with open(mock_data_path, 'r', encoding='utf-8') as f:
    mock_content = f.read()

# Split mockData.ts cleanly
# Structure:
# import ...
# export const LOCATIONS: Locality[] = [ ... ];
# export const BUILDERS: Builder[] = [ ... ];
# export const PROJECTS: Project[] = [ ... ];

loc_split_token = 'export const BUILDERS: Builder[] = '
proj_split_token = 'export const PROJECTS: Project[] = '

parts1 = mock_content.split(loc_split_token)
header_and_locs = parts1[0]
builders_and_projects = parts1[1]

parts2 = builders_and_projects.split(proj_split_token)
builders_code = parts2[0]
projects_code = parts2[1]

# Load existing projects
# Remove trailing semicolons/whitespace for JSON loading
clean_projects_code = projects_code.strip()
if clean_projects_code.endswith(';'):
    clean_projects_code = clean_projects_code[:-1].strip()

projects = json.loads(clean_projects_code, strict=False)

# 1. Standardize project cities
for p in projects:
    pid = p['id']
    if pid in ('p-lodha-amara-thane', 'p-lodha-upper-thane', 'p-godrej-upavan-thane-extension', 'p-shapoorji-northern-lights-thane', 'p-paranjape-opulus-thane', 'p-runwal-gardens-dombivli'):
        p['city'] = 'Thane'
    elif pid in ('p-golf-crest-godrej-city-panvel', 'p-kolte-patil-la-vita'):
        p['city'] = 'Navi Mumbai'

# Import canonical localities
sys.path.append('punepropertyvloginside/scripts')
import test_match

localities = test_match.localities

# Add image and description fields to each locality if not present
for l in localities:
    slug = l['slug']
    l['image'] = f"/images/localities/{slug}.svg"
    if not os.path.exists(f"punepropertyvloginside/public/images/localities/{slug}.svg"):
        l['image'] = "/images/localities/default-locality.svg"
    l['price'] = f"₹{l['avgPriceSqft']/1000:.1f}k/sq.ft"
    if 'description' not in l:
        l['description'] = f"Prime {l['name']} corridor in {l['city']} featuring verified residential towers, high rental yields, and {l['appreciation_rate']}% annual capital appreciation."

# Compute exact project counts with alias matching
def match_proj_loc(p, loc):
    ploc = p.get('location', '').lower()
    pcity = p.get('city', '')
    lname = loc['name'].lower()
    lslug = loc['slug'].lower()
    lid = loc['id'].lower()
    
    # Same city priority
    if loc['city'] == pcity:
        if lname in ploc or ploc in lname or lslug in ploc or lid in ploc:
            return True
        # specific alias mappings
        if loc['id'] == 'bund-garden' and 'bund garden' in ploc:
            return True
        if loc['id'] == 'manjri' and 'manjari' in ploc:
            return True
        if loc['id'] == 'charholi' and 'charoli' in ploc:
            return True
        if loc['id'] == 'shivaji-nagar' and ('shivajinagar' in ploc or 'model colony' in ploc):
            return True
        if loc['id'] == 'kalyan-shilphata' and ('kalyan-bhiwandi' in ploc or 'kalyan' in ploc or 'dombivli' in ploc):
            return True
        if loc['id'] == 'upper-thane' and 'upper thane' in ploc:
            return True
        if loc['id'] == 'panvel' and 'panvel' in ploc:
            return True
        if loc['id'] == 'navi-mumbai' and 'navi mumbai' in ploc:
            return True
    return False

for l in localities:
    matching = [p for p in projects if match_proj_loc(p, l)]
    cnt = len(matching)
    l['projectCount'] = cnt
    l['count'] = cnt

# Format clean JSON
loc_json = json.dumps(localities, indent=2, ensure_ascii=False)
proj_json = json.dumps(projects, indent=2, ensure_ascii=False)

new_mock_content = (
    "import { Locality, Builder, Project } from '../types';\n\n"
    f"export const LOCATIONS: Locality[] = {loc_json};\n\n"
    f"export const BUILDERS: Builder[] = {builders_code}"
    f"export const PROJECTS: Project[] = {proj_json};\n"
)

with open(mock_data_path, 'w', encoding='utf-8') as f:
    f.write(new_mock_content)

print(f"Updated {mock_data_path} cleanly with {len(localities)} canonical citywise localities and {len(projects)} projects.")
