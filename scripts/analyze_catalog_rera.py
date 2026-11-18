import json
import re

with open('src/data/mockData.ts', 'r') as f:
    content = f.read()

# Extract projects
splits = re.split(r'\n  \{', content)
projects = []
for s in splits[1:]:
    id_m = re.search(r'"id":\s*"([^"]+)"', s)
    title_m = re.search(r'"title":\s*"([^"]+)"', s)
    builder_m = re.search(r'"builderId":\s*"([^"]+)"', s)
    loc_m = re.search(r'"location":\s*"([^"]+)"', s)
    rera_m = re.search(r'"reraId":\s*"([^"]+)"', s)
    source_m = re.search(r'"verificationSource":\s*"([^"]+)"', s)
    status_m = re.search(r'"verificationStatus":\s*"([^"]+)"', s)
    
    if title_m and rera_m:
        projects.append({
            'id': id_m.group(1) if id_m else '',
            'title': title_m.group(1),
            'builderId': builder_m.group(1) if builder_m else '',
            'location': loc_m.group(1) if loc_m else '',
            'reraId': rera_m.group(1),
            'verificationSource': source_m.group(1) if source_m else '',
            'verificationStatus': status_m.group(1) if status_m else ''
        })

print(f"Total projects extracted: {len(projects)}")

# Let's categorize projects:
# Real verified projects vs dummy/placeholder
# How many have P521, P518, P519, P520, P517, etc.
by_prefix = {}
for p in projects:
    r = p['reraId']
    prefix = r[:4]
    by_prefix[prefix] = by_prefix.get(prefix, 0) + 1

print("\nRERA prefix distribution:")
for pref, c in sorted(by_prefix.items(), key=lambda x: x[1], reverse=True):
    print(f"  {pref}: {c}")

# Let's check builders in projects
by_builder = {}
for p in projects:
    b = p['builderId']
    by_builder[b] = by_builder.get(b, 0) + 1

print(f"\nTotal builders: {len(by_builder)}")
print("Top 15 builders by project count:")
for b, c in sorted(by_builder.items(), key=lambda x: x[1], reverse=True)[:15]:
    print(f"  {b}: {c}")
