import json

def enrich():
    with open('punepropertyvloginside/scripts/keystoneliv_scraped.json') as f:
        keystone = json.load(f)

    with open('punepropertyvloginside/src/data/mockData.ts') as f:
        text = f.read()

    start_token = 'export const PROJECTS: Project[] = '
    start_pos = text.find(start_token)
    if start_pos == -1:
        print("Could not find start_token")
        return

    json_start = start_pos + len(start_token)
    json_end = text.rfind('];')
    prefix = text[:json_start]
    json_part = text[json_start:json_end+1]
    suffix = text[json_end+1:]

    projects = json.loads(json_part)
    enriched_count = 0
    master_count = 0
    plans_count = 0
    faqs_count = 0

    for p in projects:
        slug = p.get('slug')
        k = keystone.get(slug)
        if not k:
            clean_slug = slug.replace('-phase-2', '').replace('-3', '')
            k = keystone.get(clean_slug)
        
        if not k:
            continue

        enriched_count += 1

        # 1. Master Layout
        if k.get('masterLayout'):
            p['masterLayout'] = k['masterLayout']
            master_count += 1
        elif not p.get('masterLayout') and k.get('plans'):
            for pl in k['plans']:
                if 'master' in pl.get('label', '').lower():
                    p['masterLayout'] = pl['src']
                    master_count += 1
                    break

        # 2. Floor plans
        k_plans = [pl['src'] for pl in k.get('floorPlans', []) if pl.get('src')]
        if k_plans:
            existing = p.get('floorPlans', [])
            combined = k_plans + [ep for ep in existing if ep not in k_plans]
            p['floorPlans'] = combined[:8]
            plans_count += 1

        # 3. FAQs (Cleaned for PROPSMART REALTY)
        if k.get('faqs'):
            faqs_list = []
            for q, a in k['faqs'].items():
                clean_a = a.replace('Keystone LIV', 'PROPSMART REALTY').replace('Keystone Liv', 'PROPSMART REALTY').replace('+91 70456 70457', '+91 93108 63636')
                faqs_list.append({'question': q, 'answer': clean_a})
            if faqs_list:
                p['faqs'] = faqs_list
                faqs_count += 1

        # 4. Brochure & Map
        if k.get('brochureUrl') and not p.get('brochureUrl'):
            p['brochureUrl'] = k['brochureUrl']
        if k.get('mapEmbed') and not p.get('mapEmbedUrl'):
            p['mapEmbedUrl'] = k['mapEmbed']

        # 5. Floors and Land Area
        if k.get('floorsAndAcres'):
            p['floorsAndAcres'] = k['floorsAndAcres']

    formatted_json = json.dumps(projects, indent=2)
    new_content = prefix + formatted_json + suffix

    with open('punepropertyvloginside/src/data/mockData.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"🎉 Successfully enriched mockData.ts:")
    print(f"   - Total projects enriched: {enriched_count}")
    print(f"   - Master Layouts enriched: {master_count}")
    print(f"   - Floor Plans enriched: {plans_count}")
    print(f"   - FAQs enriched: {faqs_count}")

if __name__ == '__main__':
    enrich()
