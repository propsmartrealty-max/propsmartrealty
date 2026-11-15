import json, re

with open("scratch/sample_godrej_skyline.html", "r") as f:
    content = f.read()

json_lds = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', content, re.DOTALL)
print("Found", len(json_lds), "JSON-LD blocks")
for i, block in enumerate(json_lds):
    try:
        data = json.loads(block)
        if isinstance(data, dict):
            print(f"Block {i}: @type={data.get('@type')}, name={data.get('name')}")
            print(json.dumps(data, indent=2)[:500])
        elif isinstance(data, list):
            print(f"Block {i} (list of {len(data)} items):")
            for item in data:
                if isinstance(item, dict):
                    print(" -", item.get('@type'), item.get('name'))
    except Exception as e:
        print("Block", i, "err:", e)

title = re.search(r'<title>(.*?)</title>', content)
desc = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', content)
print("Title:", title.group(1) if title else None)
print("Desc:", desc.group(1) if desc else None)
