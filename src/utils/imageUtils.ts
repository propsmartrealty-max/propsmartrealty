/**
 * Image optimization & resilient fallback utility for PROPSMART REALTY.
 */

export const PLACEHOLDER_PROPERTY = '/images/placeholder-property.svg';
export const PLACEHOLDER_BUILDER = '/images/builders/godrej.svg';

export const getOptimizedImageUrl = (
    url: string | undefined | null,
    width: number = 800,
    quality: number = 80,
    fallback: string = PLACEHOLDER_PROPERTY
): string => {
    if (!url || typeof url !== 'string' || url.trim() === '') {
        return fallback;
    }

    const trimmed = url.trim();

    // Prevent broken external placeholders
    if (trimmed.includes('placehold.co') || trimmed.includes('via.placeholder.com')) {
        return fallback;
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
        return fallback;
    }
};

export const getBlurHash = (_url: string) => {
    return "L6PZfSi_.AyE_3t7t7R**0o#DgR4";
};
