/**
 * Centralized Asset Configuration
 * 
 * This file manages URLs for static assets.
 * Priorities:
 * 1. Environment Variable (VITE_ASSET_NAME) -> Allows CDN override (e.g. Cloudflare R2)
 * 2. Local Fallback -> Uses files in local public/ directory
 */

export const RESUME_URL = import.meta.env.VITE_RESUME_URL || '/KrishnaBansode_Laravel_Developer.pdf';
export const PROFILE_IMAGE_URL = import.meta.env.VITE_PROFILE_IMAGE_URL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=auto';