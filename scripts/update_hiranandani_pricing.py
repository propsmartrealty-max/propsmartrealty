#!/usr/bin/env python3
import json
import re

def update_featured_projects():
    path = "punepropertyvloginside/src/data/featuredProjects.ts"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    prefix_idx = content.find("export const FEATURED_PROJECTS: Project[] = ")
    prefix = content[:prefix_idx + len("export const FEATURED_PROJECTS: Project[] = ")]
    raw_json = content[len(prefix):].rstrip().rstrip(";")
    projects = json.loads(raw_json)

    updated = False
    for p in projects:
        if p["slug"] == "hiranandani-krisala-township" or p["id"] == "p-hiranandani-krisala-township":
            p["title"] = "Hiranandani Hinjewadi Township"
            p["priceRange"] = "₹79.00 L - ₹1.18 Cr"
            p["exactPrice"] = "₹79.00 L"
            p["pricePerSqft"] = 11566
            for cfg in p.get("configurationDetails", []):
                if "2 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹79 Lacs*"
                elif "3 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹1.18 Cr*"
            updated = True
            print("Updated Hiranandani in featuredProjects.ts")

    with open(path, "w", encoding="utf-8") as f:
        f.write(prefix + json.dumps(projects, indent=2, ensure_ascii=False) + ";\n")
    return updated


def update_catalog(path, marker):
    print(f"Updating {path}...")
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    marker_idx = content.find(marker)
    if marker_idx == -1:
        raise ValueError(f"Could not find marker {marker} in {path}")

    head = content[:marker_idx + len(marker)]
    raw_json = content[marker_idx + len(marker):].rstrip().rstrip(";")
    projects = json.loads(raw_json)

    count = 0
    for p in projects:
        if p.get("slug") in ["hiranandani-krisala-township", "hiranandani"] or p.get("id") in ["p-hiranandani-krisala-township", "p-hiranandani"]:
            p["title"] = "Hiranandani Hinjewadi Township"
            p["location"] = "Hinjewadi"
            p["priceRange"] = "₹79.00 L - ₹1.18 Cr"
            p["exactPrice"] = "₹79.00 L"
            p["pricePerSqft"] = 11566
            for cfg in p.get("configurationDetails", []):
                if "2 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹79 Lacs*"
                elif "3 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹1.18 Cr*"

            for spec in p.get("specs", []):
                if spec.get("label") == "Direct Starting Price":
                    spec["value"] = "₹79 Lacs*"

            for faq in p.get("faqs", []):
                if "starting price" in faq.get("question", "").lower() or "price" in faq.get("question", "").lower():
                    faq["answer"] = re.sub(
                        r"start from [^ ]+ - [^ ]+ with",
                        "start from ₹79 Lacs* - ₹1.18 Cr with",
                        faq["answer"]
                    )
                    faq["answer"] = re.sub(
                        r"start from [^ ]+ with",
                        "start from ₹79 Lacs* with",
                        faq["answer"]
                    )

            if "metaDescription" in p:
                p["metaDescription"] = re.sub(
                    r"Prices from [^.]+\.",
                    "Prices from ₹79 Lacs*.",
                    p["metaDescription"]
                )
            count += 1

    print(f"Updated {count} project entries in {path}")

    with open(path, "w", encoding="utf-8") as f:
        f.write(head + json.dumps(projects, indent=2, ensure_ascii=False) + ";\n")


def update_registry_json():
    path = "punepropertyvloginside/public/maharera-verification-registry.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    for item in data:
        if item.get("slug") in ["hiranandani-krisala-township", "hiranandani"] or item.get("id") in ["p-hiranandani-krisala-township", "p-hiranandani"]:
            item["title"] = "Hiranandani Hinjewadi Township"
            item["allInclusiveStartingPrice"] = "₹79.00 L - ₹1.18 Cr"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Updated registry json")


def update_registry_csv():
    path = "punepropertyvloginside/public/maharera-verification-registry.csv"
    with open(path, "r", encoding="utf-8") as f:
        lines = f.readlines()
    new_lines = []
    for line in lines:
        if "p-hiranandani" in line or "hiranandani-krisala-township" in line:
            line = re.sub(r"₹75\.00 L - ₹1\.12 Cr", "₹79.00 L - ₹1.18 Cr", line)
        new_lines.append(line)
    with open(path, "w", encoding="utf-8") as f:
        f.writelines(new_lines)
    print("Updated registry csv")


if __name__ == "__main__":
    update_featured_projects()
    update_catalog("punepropertyvloginside/src/data/mockData.ts", "export const PROJECTS: Project[] = ")
    update_catalog("punepropertyvloginside/src/data/projectSummaries.ts", "export const PROJECT_SUMMARIES: Project[] = ")
    update_registry_json()
    update_registry_csv()
    print("All Hiranandani Hinjewadi Township pricing updates completed successfully!")
