import re
import json
from collections import Counter

def audit_all_projects():
    with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all project blocks
    # Using regex matching on project objects
    project_matches = re.finditer(r'\{\s*"id":\s*"([^"]+)"', content)
    
    projects = []
    for m in project_matches:
        start = m.start()
        # Find next project or array end
        next_m = re.search(r'\n  \{|\n\];', content[start+1:])
        end = start + 1 + next_m.start() if next_m else start + 3000
        block = content[start:end]
        
        id_m = re.search(r'"id":\s*"([^"]+)"', block)
        title_m = re.search(r'"title":\s*"([^"]+)"', block)
        slug_m = re.search(r'"slug":\s*"([^"]+)"', block)
        builder_m = re.search(r'"builderId":\s*"([^"]+)"', block)
        loc_m = re.search(r'"location":\s*"([^"]+)"', block)
        rera_m = re.search(r'"reraId":\s*"([^"]+)"', block)
        
        if id_m and title_m and rera_m:
            projects.append({
                'id': id_m.group(1),
                'title': title_m.group(1),
                'slug': slug_m.group(1) if slug_m else '',
                'builderId': builder_m.group(1) if builder_m else '',
                'location': loc_m.group(1) if loc_m else '',
                'reraId': rera_m.group(1)
            })

    print(f"Total projects extracted: {len(projects)}")
    
    # Check for duplicate RERA IDs
    rera_counts = Counter(p['reraId'] for p in projects)
    dupes = {r: c for r, c in rera_counts.items() if c > 1}
    print(f"Duplicate RERA IDs: {len(dupes)}")
    for r, c in dupes.items():
        matched = [p['title'] for p in projects if p['reraId'] == r]
        print(f"  {r} (x{c}): {matched}")

    # Check for sequential patterns or fake-looking numbers
    # Real MahaRERA numbers:
    # Legacy: P followed by 3-digit district (521, 518, 519, 517, 520, etc.) + 000 + 5-digit sequence (e.g. P52100050939)
    # MahaRERA 2.0: PR126... or PM126... (13-15 chars)
    # Let's check how many RERA numbers look like synthetic / mock / test data:
    suspicious = []
    for p in projects:
        r = p['reraId']
        # Check if the last 5 digits are 00001, 00002, or 12345, or sequential
        if re.search(r'0000\d$', r) or re.search(r'000\d{2}$', r):
            # check if last 5 digits are very low (e.g. 00001 to 00050)
            seq = r[-5:]
            if seq.isdigit() and int(seq) < 50:
                suspicious.append((p, f"Very low sequence number: {seq}"))
        # Check if RERA number was used for a builder that doesn't match
        # or non-standard format
        if not re.match(r'^(?:P\d{11}|(?:PR|PM|PC|PP)\d+|A\d+)$', r):
            suspicious.append((p, f"Invalid RERA format: {r}"))

    print(f"\nPotentially fake/synthetic RERA numbers: {len(suspicious)}")
    for p, reason in suspicious[:30]:
        print(f"  [{p['id']}] {p['title']} ({p['builderId']}, {p['location']}) -> {p['reraId']} [{reason}]")

if __name__ == '__main__':
    audit_all_projects()
