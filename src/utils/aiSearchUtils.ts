import { ProjectFilters } from '../services/api';

const KNOWN_LOCALITIES = [
    'Hinjewadi', 'Baner', 'Balewadi', 'Wakad', 'Punawale', 'Tathawade', 
    'Aundh', 'Pashan', 'Bavdhan', 'Mahalunge', 'Bhugaon', 'Ravet', 
    'Kiwale', 'Mamurdi', 'Pimple Saudagar', 'Pimple Nilakh', 'Pimple Gurav', 
    'Chinchwad', 'Akurdi', 'Nigdi', 'Moshi', 'Charholi', 'Dighi', 'Dudulgaon', 
    'Kharadi', 'Viman Nagar', 'Kalyani Nagar', 'Koregaon Park', 'Hadapsar', 
    'Magarpatta', 'Wagholi', 'Keshavnagar', 'Mundhwa', 'Manjari', 'Shewalewadi', 
    'Undri', 'Pisoli', 'Handewadi', 'Kondhwa', 'NIBM', 'Wanowrie', 'Fatima Nagar', 
    'Mohammadwadi', 'Kothrud', 'Karve Nagar', 'Erandwane', 'Shivaji Nagar', 
    'Deccan', 'Senapati Bapat Road', 'Model Colony', 'Law College Road', 
    'Gokhale Nagar', 'Dahanukar Colony', 'Warje', 'Ambegaon', 'Sinhagad Road', 
    'Dhayari', 'Narhe', 'Katraj', 'Bibwewadi', 'Dhankawadi', 'Lonavala', 
    'Khandala', 'Alibaug', 'Karjat', 'Gahunje', 'Somatane', 'Talegaon', 'Mumbai',
    'Thane', 'Navi Mumbai', 'Chembur', 'Andheri', 'Bandra', 'Powai', 'Mulund'
];

const KNOWN_BUILDERS: Record<string, string> = {
    'godrej': 'b-godrej',
    'kolte patil': 'b-kolte-patil',
    'kolte-patil': 'b-kolte-patil',
    'kolte': 'b-kolte-patil',
    'life republic': 'b-kolte-patil',
    'gera': 'b-gera',
    'vtp': 'b-vtp',
    'lodha': 'b-lodha',
    'panchshil': 'b-panchshil',
    'pride purple': 'b-pride-purple',
    'pride': 'b-pride-purple',
    'kohinoor': 'b-kohinoor',
    'krisala': 'b-krisala',
    'supreme': 'b-supreme-universal',
    'supreme universal': 'b-supreme-universal',
    'rohan': 'b-rohan',
    'vilas javdekar': 'b-vilas-javdekar',
    'javdekar': 'b-vilas-javdekar',
    'nyati': 'b-nyati',
    'kasturi': 'b-kasturi',
    'mahindra': 'b-mahindra',
    'kumar': 'b-kumar',
    'bramhacorp': 'b-bramhacorp',
    'amanora': 'b-amanora',
    'joyville': 'b-joyville',
    'kalpataru': 'b-kalpataru',
    'sobha': 'b-sobha',
    'tata': 'b-tata',
    'shapoorji': 'b-shapoorji',
    'puravankara': 'b-puravankara',
    'runwal': 'b-runwal'
};

/**
 * Intelligent Natural Language Parser for Real Estate Queries
 * Converts conversational queries like "ready 3 bhk in hinjewadi under 1.2 cr"
 * into structured ProjectFilters with high precision.
 */
export function parseNaturalLanguageQuery(query: string): ProjectFilters {
    if (!query || typeof query !== 'string') return {};
    
    let working = query.trim();
    const filters: ProjectFilters = {};

    // 1. Extract BHK Configuration (e.g. "1 BHK", "2.5 BHK", "3 BHK", "4 BHK")
    const bhkMatch = working.match(/\b([1-6](?:\.5)?)\s*BHK\b/i);
    if (bhkMatch) {
        filters.configurations = [`${bhkMatch[1]} BHK`];
        working = working.replace(bhkMatch[0], ' ');
    } else {
        // Check "1RK" or "Studio"
        if (/\b(1\s*RK|studio)\b/i.test(working)) {
            filters.configurations = ['1 RK'];
            working = working.replace(/\b(1\s*RK|studio)\b/i, ' ');
        }
    }

    // 2. Extract Status (e.g. "ready to move", "ready", "new launch", "under construction")
    if (/\b(ready\s*to\s*move|ready\s*possession|ready\s*homes?|ready)\b/i.test(working)) {
        filters.status = 'Ready to Move';
        working = working.replace(/\b(ready\s*to\s*move|ready\s*possession|ready\s*homes?|ready)\b/i, ' ');
    } else if (/\b(new\s*launch|upcoming|pre\s*launch)\b/i.test(working)) {
        filters.status = 'New Launch';
        working = working.replace(/\b(new\s*launch|upcoming|pre\s*launch)\b/i, ' ');
    } else if (/\b(under\s*construction|ongoing)\b/i.test(working)) {
        filters.status = 'Under Construction';
        working = working.replace(/\b(under\s*construction|ongoing)\b/i, ' ');
    }

    // 3. Extract Budget Constraints (e.g. "under 1.2 cr", "below 80 lakhs", "under 75L")
    const maxBudgetMatch = working.match(/\b(?:under|below|less\s*than|within|upto|up\s*to)\s*(?:rs\.?|inr|₹)?\s*([0-9.]+)\s*(cr|crore|lakh|lakhs|lacs|l)\b/i);
    if (maxBudgetMatch) {
        const val = parseFloat(maxBudgetMatch[1]);
        const unit = maxBudgetMatch[2].toLowerCase();
        const maxLakhs = unit.startsWith('cr') ? val * 100 : val;
        filters.maxPrice = maxLakhs;
        working = working.replace(maxBudgetMatch[0], ' ');
    }

    const minBudgetMatch = working.match(/\b(?:above|more\s*than|min(?:imum)?|starting\s*from)\s*(?:rs\.?|inr|₹)?\s*([0-9.]+)\s*(cr|crore|lakh|lakhs|lacs|l)\b/i);
    if (minBudgetMatch) {
        const val = parseFloat(minBudgetMatch[1]);
        const unit = minBudgetMatch[2].toLowerCase();
        const minLakhs = unit.startsWith('cr') ? val * 100 : val;
        filters.minPrice = minLakhs;
        working = working.replace(minBudgetMatch[0], ' ');
    }

    // 4. Extract Property Type (e.g. "villas", "plots", "penthouse", "commercial", "flats", "apartments")
    if (/\b(villas?|row\s*house|bungalow)\b/i.test(working)) {
        filters.type = 'Residential';
        filters.configurations = filters.configurations || ['Villa'];
        working = working.replace(/\b(villas?|row\s*house|bungalow)\b/i, ' ');
    } else if (/\b(plots?|land)\b/i.test(working)) {
        filters.type = 'Plot';
        working = working.replace(/\b(plots?|land)\b/i, ' ');
    } else if (/\b(commercial|shops?|offices?)\b/i.test(working)) {
        filters.type = 'Commercial';
        working = working.replace(/\b(commercial|shops?|offices?)\b/i, ' ');
    }

    // 5. Extract Builder / Developer
    for (const [name, slug] of Object.entries(KNOWN_BUILDERS)) {
        const regex = new RegExp(`\\b${name}\\b`, 'i');
        if (regex.test(working)) {
            filters.builderSlug = slug;
            working = working.replace(regex, ' ');
            break;
        }
    }

    // 6. Extract Locality
    for (const loc of KNOWN_LOCALITIES) {
        const regex = new RegExp(`\\b${loc}\\b`, 'i');
        if (regex.test(working)) {
            filters.location = loc;
            working = working.replace(regex, ' ');
            break;
        }
    }

    // 7. Clean up leftover stopwords ("in", "at", "flats", "apartments", "homes", "near")
    const cleanTokens = working
        .replace(/\b(in|at|near|for|flats?|apartments?|homes?|properties|property|projects?|residences?|pune|mumbai)\b/gi, ' ')
        .replace(/[^a-zA-Z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter(t => t.length > 2);

    if (cleanTokens.length > 0) {
        filters.query = cleanTokens.join(' ');
    }

    return filters;
}
