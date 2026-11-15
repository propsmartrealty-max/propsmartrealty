import os
import re
import json

def merge():
    with open('punepropertyvloginside/scripts/keystoneliv_scraped.json', 'r', encoding='utf-8') as f:
        keystone = json.load(f)

    mockdata_path = 'punepropertyvloginside/src/data/mockData.ts'
    with open(mockdata_path, 'r', encoding='utf-8') as f:
        mock_content = f.read()

    # Read project objects in PROJECTS array
    projects_start = mock_content.find('export const PROJECTS')
    if projects_start == -1:
        print("Could not find PROJECTS array in mockData.ts")
        return

    updated_count = 0
    new_master_count = 0
    new_plans_count = 0

    for slug, kdata in keystone.items():
        slug_str = f'"slug": "{slug}"'
        idx = mock_content.find(slug_str)
        if idx == -1:
            continue

        start_brace = mock_content.rfind('\n    {', 0, idx)
        if start_brace == -1:
            start_brace = mock_content.rfind('    {', 0, idx)
        if start_brace == -1:
            continue

        depth = 0
        end_brace = -1
        for i in range(start_brace, len(mock_content)):
            if mock_content[i] == '{':
                depth += 1
            elif mock_content[i] == '}':
                depth -= 1
                if depth == 0:
                    end_brace = i + 1
                    break

        if end_brace == -1:
            continue

        proj_block = mock_content[start_brace:end_brace]
        orig_block = proj_block

        # 1. Enrich Master Layout if available
        if kdata.get('masterLayout'):
            new_master = kdata['masterLayout']
            if '"masterLayout":' in proj_block:
                proj_block = re.sub(r'\"masterLayout\":\s*\"[^\"]*\"', lambda m: f'"masterLayout": "{new_master}"', proj_block)
            else:
                proj_block = re.sub(r'(\"image\":\s*\"[^\"]+\",)', lambda m: m.group(1) + f'\n      "masterLayout": "{new_master}",', proj_block)
            new_master_count += 1

        # 2. Enrich Floor Plans if available
        k_plans = [p['src'] for p in kdata.get('floorPlans', []) if p.get('src')]
        if k_plans and len(k_plans) > 0:
            plans_json = json.dumps(k_plans)
            if '"floorPlans":' in proj_block:
                proj_block = re.sub(r'\"floorPlans\":\s*\[[^\]]*\]', lambda m: f'"floorPlans": {plans_json}', proj_block)
            else:
                proj_block = re.sub(r'(\"image\":\s*\"[^\"]+\",)', lambda m: m.group(1) + f'\n      "floorPlans": {plans_json},', proj_block)
            new_plans_count += 1

        # 3. Enrich Brochure URL
        if kdata.get('brochureUrl'):
            b_url = kdata['brochureUrl']
            if '"brochureUrl":' in proj_block:
                proj_block = re.sub(r'\"brochureUrl\":\s*\"[^\"]*\"', lambda m: f'"brochureUrl": "{b_url}"', proj_block)
            else:
                proj_block = re.sub(r'(\"image\":\s*\"[^\"]+\",)', lambda m: m.group(1) + f'\n      "brochureUrl": "{b_url}",', proj_block)

        # 4. Enrich Google Map Embed URL
        if kdata.get('mapEmbed'):
            m_url = kdata['mapEmbed']
            if '"mapEmbedUrl":' in proj_block:
                proj_block = re.sub(r'\"mapEmbedUrl\":\s*\"[^\"]*\"', lambda m: f'"mapEmbedUrl": "{m_url}"', proj_block)
            else:
                proj_block = re.sub(r'(\"image\":\s*\"[^\"]+\",)', lambda m: m.group(1) + f'\n      "mapEmbedUrl": "{m_url}",', proj_block)

        # 5. Enrich FAQs for Google Real Estate Rich Results
        if kdata.get('faqs') and len(kdata['faqs']) > 0:
            faqs_list = [{'question': q, 'answer': a} for q, a in kdata['faqs'].items()]
            faqs_json = json.dumps(faqs_list)
            if '"faqs":' in proj_block:
                proj_block = re.sub(r'\"faqs\":\s*\[.*?\]', lambda m: f'"faqs": {faqs_json}', proj_block, flags=re.DOTALL)
            else:
                proj_block = re.sub(r'(\"features\":\s*\[[^\]]+\],)', lambda m: m.group(1) + f'\n      "faqs": {faqs_json},', proj_block)

        if proj_block != orig_block:
            mock_content = mock_content[:start_brace] + proj_block + mock_content[end_brace:]
            updated_count += 1

    with open(mockdata_path, 'w', encoding='utf-8') as f:
        f.write(mock_content)

    print(f"🎉 Updated {updated_count} projects in mockData.ts:")
    print(f"   - Enhanced Master Layouts: {new_master_count}")
    print(f"   - Enhanced Floor Plans: {new_plans_count}")

if __name__ == '__main__':
    merge()
