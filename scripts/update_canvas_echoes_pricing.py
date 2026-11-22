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

    for p in projects:
        if p["slug"] == "kolte-patil-life-republic-canvas":
            p["priceRange"] = "₹1.49 Cr - ₹2.25 Cr"
            p["exactPrice"] = "₹1.49 Cr"
            p["pricePerSqft"] = 13300
            for cfg in p.get("configurationDetails", []):
                if "3 BHK" in cfg["type"] and "3.5" not in cfg["type"]:
                    cfg["priceRange"] = "₹1.49 Cr*"
                elif "3.5 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹1.85 Cr*"
                elif "4 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹2.25 Cr*"
            print("Updated Canvas in featuredProjects.ts")

        if p["slug"] == "kolte-patil-life-republic-echoes":
            p["priceRange"] = "₹87.00 L - ₹1.05 Cr"
            p["exactPrice"] = "₹87.00 L"
            p["pricePerSqft"] = 11800
            for cfg in p.get("configurationDetails", []):
                if "2.5 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹1.05 Cr*"
                elif "2 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹87 Lacs*"
            print("Updated Echoes in featuredProjects.ts")

    with open(path, "w", encoding="utf-8") as f:
        f.write(prefix + json.dumps(projects, indent=2, ensure_ascii=False) + ";\n")


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

    for p in projects:
        if p.get("slug") == "kolte-patil-life-republic-canvas":
            p["priceRange"] = "₹1.49 Cr - ₹2.25 Cr"
            p["exactPrice"] = "₹1.49 Cr"
            p["pricePerSqft"] = 13300
            for cfg in p.get("configurationDetails", []):
                if "3 BHK" in cfg["type"] and "3.5" not in cfg["type"]:
                    cfg["priceRange"] = "₹1.49 Cr*"
                elif "3.5 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹1.85 Cr*"
                elif "4 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹2.25 Cr*"

            for adv in p.get("advancedConfigurations", []):
                if "3 BHK" in adv["name"] and "3.5" not in adv["name"]:
                    adv["basePrice"] = 14900000
                    adv["pricePerSqft"] = 13303.57
                elif "3.5 BHK" in adv["name"]:
                    adv["basePrice"] = 18500000
                    adv["pricePerSqft"] = 13309.35
                elif "4 BHK" in adv["name"]:
                    adv["basePrice"] = 22500000
                    adv["pricePerSqft"] = 13636.36

            if "metaDescription" in p:
                p["metaDescription"] = re.sub(
                    r"Prices from [^.]+\.",
                    "Prices from ₹1.49 Cr.",
                    p["metaDescription"]
                )

            for faq in p.get("faqs", []):
                if "price" in faq.get("question", "").lower() or "apartments in" in faq.get("question", "").lower():
                    faq["answer"] = re.sub(
                        r"start from [^ ]+ with",
                        "start from ₹1.49 Cr with",
                        faq["answer"]
                    )

        if p.get("slug") == "kolte-patil-life-republic-echoes":
            p["priceRange"] = "₹87.00 L - ₹1.05 Cr"
            p["exactPrice"] = "₹87.00 L"
            p["pricePerSqft"] = 11800
            for cfg in p.get("configurationDetails", []):
                if "2.5 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹1.05 Cr*"
                elif "2 BHK" in cfg["type"]:
                    cfg["priceRange"] = "₹87 Lacs*"

            for adv in p.get("advancedConfigurations", []):
                if "2.5 BHK" in adv["name"]:
                    adv["basePrice"] = 10500000
                    adv["pricePerSqft"] = 11931.81
                elif "2 BHK" in adv["name"]:
                    adv["basePrice"] = 8700000
                    adv["pricePerSqft"] = 11836.73

            if "metaDescription" in p:
                p["metaDescription"] = re.sub(
                    r"Prices from [^.]+\.",
                    "Prices from ₹87 Lacs*.",
                    p["metaDescription"]
                )

            for faq in p.get("faqs", []):
                if "price" in faq.get("question", "").lower() or "apartments in" in faq.get("question", "").lower():
                    faq["answer"] = re.sub(
                        r"start from [^ ]+ with",
                        "start from ₹87 Lacs* with",
                        faq["answer"]
                    )

    with open(path, "w", encoding="utf-8") as f:
        f.write(head + json.dumps(projects, indent=2, ensure_ascii=False) + ";\n")


def update_registry_json():
    path = "punepropertyvloginside/public/maharera-verification-registry.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    for item in data:
        if item.get("slug") == "kolte-patil-life-republic-canvas" or item.get("id") == "p-kolte-patil-life-republic-canvas":
            item["allInclusiveStartingPrice"] = "₹1.49 Cr - ₹2.25 Cr"
        if item.get("slug") == "kolte-patil-life-republic-echoes" or item.get("id") == "p-kolte-patil-life-republic-echoes":
            item["allInclusiveStartingPrice"] = "₹87.00 L - ₹1.05 Cr"
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Updated registry json")


def update_registry_csv():
    path = "punepropertyvloginside/public/maharera-verification-registry.csv"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    content = content.replace("₹1.18 Cr - ₹1.85 Cr", "₹1.49 Cr - ₹2.25 Cr")
    content = content.replace("₹51.50 L - ₹61.50 L", "₹87.00 L - ₹1.05 Cr")
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated registry csv")


if __name__ == "__main__":
    update_featured_projects()
    update_catalog("punepropertyvloginside/src/data/mockData.ts", "export const PROJECTS: Project[] = ")
    update_catalog("punepropertyvloginside/src/data/projectSummaries.ts", "export const PROJECT_SUMMARIES: Project[] = ")
    update_registry_json()
    update_registry_csv()
    print("All pricing updates completed successfully!")
