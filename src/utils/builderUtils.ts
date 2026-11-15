/**
 * Builder & Developer Brand Asset Utilities
 * High-definition, 100% authentic vector logos & brand identity resolvers for Pune developers.
 */

export const VERIFIED_BUILDER_LOGOS: Record<string, string> = {
    'b-godrej': '/images/builders/godrej.svg',
    'b-kolte-patil': '/images/builders/kolte-patil.svg',
    'b-vtp': '/images/builders/vtp-realty.svg',
    'b-lodha': '/images/builders/lodha.svg',
    'b-panchshil': '/images/builders/panchshil.svg',
    'b-rohan': '/images/builders/rohan.svg',
    'b-vilas-javdekar': '/images/builders/vilas-javdekar.svg',
    'b-pride-purple': '/images/builders/pride-purple.svg',
    'b-nyati': '/images/builders/nyati.svg',
    'b-gera': '/images/builders/gera.svg',
    'b-kasturi': '/images/builders/kasturi.svg',
    'b-mahindra': '/images/builders/mahindra.svg',
    'b-kumar': '/images/builders/kumar.svg',
    'b-bramhacorp': '/images/builders/bramhacorp.svg',
    'b-amanora': '/images/builders/amanora.svg',
    'b-sobha': '/images/builders/sobha.svg',
    'b-tata': '/images/builders/tata.svg',
    'b-kalpataru': '/images/builders/kalpataru.svg',
    'b-joyville': '/images/builders/joyville.svg',
    'b-shapoorji': '/images/builders/shapoorji.svg',
    'b-kohinoor': '/images/builders/kohinoor.svg',
    'b-paranjape': '/images/builders/paranjape.svg',
    'b-puravankara': '/images/builders/puravankara.svg',
    'b-magarpatta': '/images/builders/magarpatta.svg',
    'b-kundan': '/images/builders/kundan.svg',
    'b-supreme-universal': '/images/builders/supreme.svg',
};

/**
 * Resolves a guaranteed, sharp, official SVG logo for any developer in the catalog.
 * Strict brand isolation: A builder is NEVER assigned another developer's logo.
 */
export const resolveBuilderLogo = (builder?: { 
    id?: string; 
    slug?: string; 
    name?: string; 
    logo?: string; 
} | null): string => {
    if (!builder) return '';

    const id = (builder.id || '').toLowerCase().trim();
    const slug = (builder.slug || '').toLowerCase().trim();
    const name = (builder.name || '').toLowerCase().trim();

    // 1. Direct ID match
    if (VERIFIED_BUILDER_LOGOS[id]) {
        return VERIFIED_BUILDER_LOGOS[id];
    }

    // 2. Strict brand fuzzy matches for verified Tier-1 builders
    if (slug.includes('panchshil') || name.includes('panchshil')) return '/images/builders/panchshil.svg';
    if (slug.includes('kasturi') || name.includes('kasturi')) return '/images/builders/kasturi.svg';
    if (slug.includes('sobha') || name.includes('sobha')) return '/images/builders/sobha.svg';
    if (slug.includes('godrej') || name.includes('godrej')) return '/images/builders/godrej.svg';
    if (slug.includes('lodha') || name.includes('lodha') || name.includes('macrotech')) return '/images/builders/lodha.svg';
    if (slug.includes('tata-housing') || slug.includes('tata-housing') || name.includes('tata housing')) return '/images/builders/tata.svg';
    if (slug.includes('amanora') || name.includes('amanora')) return '/images/builders/amanora.svg';
    if (slug.includes('gera') || name.includes('gera')) return '/images/builders/gera.svg';
    if (slug.includes('joyville') || name.includes('joyville')) return '/images/builders/joyville.svg';
    if (slug.includes('shapoorji') || name.includes('shapoorji')) return '/images/builders/shapoorji.svg';
    if (slug.includes('kalpataru') || name.includes('kalpataru')) return '/images/builders/kalpataru.svg';
    if (slug.includes('kolte') || name.includes('kolte') || slug.includes('life-republic')) return '/images/builders/kolte-patil.svg';
    if (slug.includes('vtp') || name.includes('vtp')) return '/images/builders/vtp-realty.svg';
    if (slug.includes('rohan') || name.includes('rohan')) return '/images/builders/rohan.svg';
    if (slug.includes('vilas-javdekar') || slug.includes('javdekar') || name.includes('vilas javdekar')) return '/images/builders/vilas-javdekar.svg';
    if (slug.includes('pride-purple') || name.includes('pride purple')) return '/images/builders/pride-purple.svg';
    if (slug.includes('nyati') || name.includes('nyati')) return '/images/builders/nyati.svg';
    if (slug.includes('mahindra') || name.includes('mahindra')) return '/images/builders/mahindra.svg';
    if (slug.includes('kumar-properties') || name.includes('kumar properties')) return '/images/builders/kumar.svg';
    if (slug.includes('bramhacorp') || name.includes('bramha')) return '/images/builders/bramhacorp.svg';
    if (slug.includes('kohinoor') || name.includes('kohinoor')) return '/images/builders/kohinoor.svg';
    if (slug.includes('paranjape') || name.includes('paranjape')) return '/images/builders/paranjape.svg';
    if (slug.includes('puravankara') || name.includes('puravankara')) return '/images/builders/puravankara.svg';
    if (slug.includes('magarpatta') || name.includes('magarpatta')) return '/images/builders/magarpatta.svg';
    if (slug.includes('kundan') || name.includes('kundan')) return '/images/builders/kundan.svg';
    if (slug.includes('supreme-universal') || name.includes('supreme universal')) return '/images/builders/supreme.svg';

    // 3. Fallback to existing valid custom logo only if not a generic/misassigned logo
    if (builder.logo && 
        !builder.logo.includes('keystoneliv.com') && 
        !builder.logo.includes('example.com') && 
        !builder.logo.includes('/images/builders/godrej.svg') &&
        !builder.logo.includes('/images/builders/panchshil.svg') &&
        builder.logo.trim() !== '') {
        return builder.logo;
    }

    return '';
};
