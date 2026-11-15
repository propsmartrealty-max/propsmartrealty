#!/usr/bin/env python3
"""
Merge scraped Lodha and Godrej projects into mockData.ts
"""

import json
import os

MOCKDATA_PATH = "src/data/mockData.ts"
SCRAPED_PATH = "scripts/lodha_godrej_scraped.json"

def main():
    if not os.path.exists(SCRAPED_PATH):
        print(f"❌ {SCRAPED_PATH} not found.")
        return

    with open(SCRAPED_PATH, "r", encoding="utf-8") as f:
        new_projects = json.load(f)

    with open(MOCKDATA_PATH, "r", encoding="utf-8") as f:
        text = f.read()

    start_token = 'export const PROJECTS: Project[] = '
    start_pos = text.find(start_token)
    if start_pos == -1:
        print("❌ Could not find start_token")
        return

    json_start = start_pos + len(start_token)
    json_end = text.rfind('];')
    prefix = text[:json_start]
    json_part = text[json_start:json_end+1].strip()
    suffix = text[json_end+1:]

    existing_projects = json.loads(json_part)
    print(f"Loaded {len(existing_projects)} existing projects.")

    existing_slugs = {p["slug"]: i for i, p in enumerate(existing_projects)}

    added_count = 0
    updated_count = 0

    for np in new_projects:
        slug = np["slug"]
        if slug in existing_slugs:
            idx = existing_slugs[slug]
            existing_projects[idx].update(np)
            updated_count += 1
        else:
            existing_projects.append(np)
            added_count += 1

    print(f"Updated: {updated_count}, Added: {added_count}, Total now: {len(existing_projects)}")

    new_projects_json = json.dumps(existing_projects, indent=2)

    new_mockdata = prefix + new_projects_json + suffix

    with open(MOCKDATA_PATH, "w", encoding="utf-8") as f:
        f.write(new_mockdata)

    print(f"✅ Successfully written updated PROJECTS array to {MOCKDATA_PATH}")

if __name__ == "__main__":
    main()
