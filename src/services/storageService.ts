/**
 * PROPSMART REALTY - Cloudflare R2 Object Storage Service
 * High-performance edge object storage replacing Supabase Storage.
 */
import { cloudflare } from './cloudflare';
import { compressImage } from '../utils/imageCompression';

export const uploadFile = async (file: File, bucket: string = 'website-assets'): Promise<string> => {
    try {
        if (!file) throw new Error("No file provided for upload");

        // Compress Image if applicable
        const compressedFile = await compressImage(file);

        const fileExt = compressedFile.name.split('.').pop() || 'jpg';
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { data, error } = await cloudflare.storage
            .from(bucket)
            .upload(filePath, compressedFile);

        if (error) {
            console.error("Cloudflare R2 Storage Upload Error:", error);
            throw error;
        }

        return data?.publicUrl || cloudflare.storage.from(bucket).getPublicUrl(filePath).data.publicUrl;
    } catch (error: any) {
        console.error('Error uploading to Cloudflare R2:', error.message || error);
        throw error;
    }
};

export const listFiles = async (bucket: string = 'website-assets', prefix: string = ''): Promise<{ name: string; url: string; created_at: string; size: number }[]> => {
    try {
        const { data, error } = await cloudflare.storage
            .from(bucket)
            .list(prefix);

        if (error) {
            throw error;
        }

        return data || [];
    } catch (error: any) {
        console.error('Error listing Cloudflare R2 files:', error.message || error);
        return [];
    }
};

export const deleteFile = async (fileName: string, bucket: string = 'website-assets'): Promise<void> => {
    try {
        const { error } = await cloudflare.storage
            .from(bucket)
            .remove([fileName]);

        if (error) throw error;
    } catch (error: any) {
        console.error('Error deleting file from Cloudflare R2:', error);
        throw error;
    }
};
