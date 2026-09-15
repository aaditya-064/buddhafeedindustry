/**
 * Image Configuration
 * 
 * Replace these placeholder URLs with actual company photographs.
 * All images should be placed in /public/images/ directory.
 * 
 * Recommended image sources:
 * - Hero: Company/factory exterior photograph
 * - Factory: Interior machinery, production line
 * - Agriculture: Livestock, farms, rural Nepal
 * - Products: Feed bags, grain close-ups
 * - Leadership: Director portraits (when available)
 */

export const images = {
  // Hero - Main company photograph
  hero: "/images/hero/company-factory.jpg",
  
  // Factory/Manufacturing
  factory: {
    exterior: "/images/factory/exterior.jpg",
    interior: "/images/factory/interior.jpg",
    machinery: "/images/factory/machinery.jpg",
    storage: "/images/factory/storage.jpg",
    silos: "/images/factory/silos.jpg",
  },
  
  // Agriculture/Livestock
  agriculture: {
    cattle: "/images/agriculture/cattle.jpg",
    poultry: "/images/agriculture/poultry.jpg",
    landscape: "/images/agriculture/landscape.jpg",
    farm: "/images/agriculture/farm.jpg",
  },
  
  // Products
  products: {
    shraddha: "/images/products/shraddha.jpg",
    sirjan: "/images/products/sirjan.jpg",
    saurya: "/images/products/saurya.jpg",
    girija: "/images/products/girija.jpg",
    feed: "/images/products/feed-closeup.jpg",
  },
  
  // Leadership (when photos available)
  leadership: {
    binduLal: "/images/leadership/director-1.jpg",
    subash: "/images/leadership/director-2.jpg",
    balBahadur: "/images/leadership/director-3.jpg",
  },
  
  // Fallback placeholder images (Unsplash)
  placeholders: {
    hero: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    factory: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
    factoryInterior: "https://images.unsplash.com/photo-1581093588401-fbb62a0a2d4e?w=1920&q=80",
    cattle: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1920&q=80",
    poultry: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1920&q=80",
    landscape: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1920&q=80",
    feed: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    storage: "https://images.unsplash.com/photo-1605712633648-54bb85d5e725?w=1920&q=80",
    silos: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    director: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
};

/**
 * Helper function to get image with fallback
 */
export function getImage(path: string, fallback?: string): string {
  // In production, check if local image exists, otherwise use fallback
  // For now, always use placeholders
  return fallback || images.placeholders.hero;
}
