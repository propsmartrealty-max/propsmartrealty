import json
import re

with open('src/data/mockData.ts', 'r') as f:
    content = f.read()

# Let's find all project blocks
# Each project has "id": ..., "title": ..., "reraId": ...
projects = []
for m in re.finditer(r'\{\s*"id":\s*"([^"]+)"', content):
    start = m.start()
    # find closing bracket of project (approx)
    end = content.find('\n  },', start)
    if end == -1:
        end = content.find('\n  }', start)
    block = content[start:end+5]
    
    id_val = m.group(1)
    title_m = re.search(r'"title":\s*"([^"]+)"', block)
    builder_m = re.search(r'"builderId":\s*"([^"]+)"', block)
    loc_m = re.search(r'"location":\s*"([^"]+)"', block)
    rera_m = re.search(r'"reraId":\s*"([^"]+)"', block)
    
    if title_m and rera_m:
        projects.append({
            'id': id_val,
            'title': title_m.group(1),
            'builderId': builder_m.group(1) if builder_m else '',
            'location': loc_m.group(1) if loc_m else '',
            'reraId': rera_m.group(1)
        })

print(f"Total projects found: {len(projects)}")

# Let's check which builders have mock or placeholder RERAs
# Look for consecutive numbers or patterns
suspicious_projects = []
for p in projects:
    r = p['reraId']
    # If rera ends with obvious mock series like 00001, 00002...
    # Or if rera is from another district or wrong format
    # In Maharashtra, Pune RERA is P521..., Mumbai Suburban P518..., Mumbai City P519..., Raigad P520..., Thane P517...
    # Check if a Pune project has a Mumbai RERA or vice-versa
    loc = p['location'].lower()
    pune_locs = ['baner', 'wakad', 'kharadi', 'hinjewadi', 'hadapsar', 'kothrud', 'balewadi', 'bavdhan', 'viman nagar', 'undri', 'magarpatta', 'sinhagad road', 'mahalunge', 'ravet', 'punawale', 'tathawade', 'chakan', 'moshi', 'kiwale', 'dhanori', 'mamurdi', 'marunji', 'charholi', 'nibm', 'kondhwa', 'bibwewadi', 'wanowrie', 'camp', 'shivajinagar', 'aundh', 'pashan', 'sensational', 'model colony', 'senapati bapat', 'kalyani nagar', 'koregaon park', 'mundhwa', 'keshav nagar', 'manjri', 'wagholi', 'pisoli', 'ambegaon', 'narhe', 'dhayari', 'warje', 'karve nagar', 'erandwane', 'parvati', 'sahakar nagar', 'gultekdi', 'swargate', 'padmavati', 'katraj', 'wadgaon', 'nanded city']
    
    is_pune = any(pl in loc for pl in pune_locs)
    if is_pune and not (r.startswith('P521') or r.startswith('PR126') or r.startswith('PM126') or r.startswith('PC126')):
        suspicious_projects.append((p, f"Location is in Pune ({p['location']}) but RERA is {r} (not P521/PR126)"))

print(f"\nSuspicious district mismatches: {len(suspicious_projects)}")
for p, reason in suspicious_projects[:25]:
    print(f"  {p['id']}: {p['title']} -> {reason}")
