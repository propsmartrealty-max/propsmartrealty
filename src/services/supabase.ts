/**
 * DEPRECATED: Supabase has been decommissioned in favor of Cloudflare D1 & R2 Services.
 * This proxy delegates all legacy calls to the native Cloudflare Edge client.
 */
import { cloudflare } from './cloudflare';

export const supabase = cloudflare;
export default cloudflare;
