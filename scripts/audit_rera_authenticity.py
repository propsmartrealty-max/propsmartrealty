import re
import json
from collections import Counter

def audit():
    with open('src/data/mockData.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    start_idx = content.find('export const PROJECTS: Project[] = [')
    if start_idx == -1:
        start_idx = content.find('export const PROJECTS = [')
    if start_idx == -1:
        print("Could not find start of PROJECTS")
        return

    # Find the end of PROJECTS
    next_export = content.find('\nexport const ', start_idx + 40)
    if next_export == -1:
        projects_str = content[start_idx:]
    else:
        projects_str = content[start_idx:next_export]

    # Let's extract all individual project objects using regex
    # Each project starts with {\n    "id": or { id:
    # Let's find every project by splitting on `\n  {`
    raw_projects = re.split(r'\n  \{', projects_str)
    print(f"Total raw splits: {len(raw_projects)}")

    parsed = []
    for raw in raw_projects:
        title_m = re.search(r'"title":\s*"([^"]+)"', raw)
        id_m = re.search(r'"id":\s*"([^"]+)"', raw)
        builder_m = re.search(r'"builderId":\s*"([^"]+)"', raw)
        loc_m = re.search(r'"location":\s*"([^"]+)"', raw)
        rera_m = re.search(r'"reraId":\s*"([^"]+)"', raw)
        
        if title_m and rera_m:
            parsed.append({
                "id": id_m.group(1) if id_m else "",
                "title": title_m.group(1),
                "builderId": builder_m.group(1) if builder_m else "",
                "location": loc_m.group(1) if loc_m else "",
                "reraId": rera_m.group(1)
            })

    print(f"Total successfully parsed projects: {len(parsed)}")

    rera_counts = Counter(p['reraId'] for p in parsed)
    print(f"Total unique RERA numbers: {len(rera_counts)}")

    # Check duplicates
    duplicates = {r: c for r, c in rera_counts.items() if c > 1}
    print(f"RERA numbers shared across multiple projects: {len(duplicates)}")
    print("\nTop 15 repeated RERA numbers:")
    for rera, count in sorted(duplicates.items(), key=lambda x: x[1], reverse=True)[:15]:
        titles = [p['title'] + " (" + p['location'] + ")" for p in parsed if p['reraId'] == rera]
        print(f"  {rera} (x{count}): {titles[:3]}")

    # Inspect suspicious patterns
    suspicious = []
    for p in parsed:
        r = p['reraId']
        # Check standard format
        if not re.match(r'^(?:P\d{11}|(?:PR|PM|PC|PP)\d+|A\d+)$', r):
            suspicious.append((p, "Format Mismatch"))
        elif re.search(r'00000|12345|99999|00001', r):
            suspicious.append((p, "Dummy/Placeholder digit pattern"))

    print(f"\nSuspicious pattern count: {len(suspicious)}")
    for p, reason in suspicious[:20]:
        print(f"  [{p['id']}] {p['title']} ({p['builderId']}, {p['location']}) -> {p['reraId']} [{reason}]")

if __name__ == '__main__':
    audit()
