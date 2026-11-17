/**
 * Image optimization & resilient fallback utility for PROPSMART REALTY.
 * Ensures zero broken images and authentic luxury architectural visual representation.
 */

export const RESILIENT_ARCHITECTURAL_FALLBACKS: string[] = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=1200&q=80"
];

export const getResilientFallbackImage = (seed: string = 'propsmart', index: number = 0): string => {
    let hash = 0;
    const str = `${seed}-${index}`;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0;
    }
    const safeIdx = Math.abs(hash) % RESILIENT_ARCHITECTURAL_FALLBACKS.length;
    return RESILIENT_ARCHITECTURAL_FALLBACKS[safeIdx];
};

export const PLACEHOLDER_PROPERTY = RESILIENT_ARCHITECTURAL_FALLBACKS[0];
export const PLACEHOLDER_BUILDER = '';

export const getOptimizedImageUrl = (
    url: string | undefined | null,
    width: number = 800,
    quality: number = 80,
    fallback?: string
): string => {
    const defaultFallback = fallback || RESILIENT_ARCHITECTURAL_FALLBACKS[0];

    if (!url || typeof url !== 'string' || url.trim() === '') {
        return defaultFallback;
    }

    const trimmed = url.trim();

    // Prevent broken external placeholders or placeholder SVGs that look like blanks
    if (
        trimmed.includes('placehold.co') || 
        trimmed.includes('via.placeholder.com') ||
        trimmed.includes('placeholder-property.svg')
    ) {
        return getResilientFallbackImage(trimmed);
    }

    // Local assets or blobs
    if (trimmed.startsWith('/') || trimmed.startsWith('blob:') || trimmed.startsWith('data:')) {
        return trimmed;
    }

    try {
        // Cloudflare Image Resizing / Edge Storage URLs
        if (trimmed.includes('/api/storage/raw/')) {
            const separator = trimmed.includes('?') ? '&' : '?';
            return `${trimmed}${separator}width=${width}&quality=${quality}&format=webp`;
        }

        // Optimize Unsplash images with width & format params if missing
        if (trimmed.includes('images.unsplash.com') && !trimmed.includes('w=')) {
            const separator = trimmed.includes('?') ? '&' : '?';
            return `${trimmed}${separator}auto=format&fit=crop&q=${quality}&w=${width}`;
        }

        return trimmed;
    } catch {
        return defaultFallback;
    }
};

export const getBlurHash = (_url: string) => {
    return "L6PZfSi_.AyE_3t7t7R**0o#DgR4";
};
