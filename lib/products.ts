import { Product } from "./types";

// Placeholder catalog. Swap in real products, prices, and images
// whenever you're ready — images.unsplash.com URLs are just stand-ins.
export const products: Product[] = [
  {
    id: "1",
    slug: "bomba-lamp",
    name: "Bomba lamp",
    category: "lamps",
    price: 2450,
    currency: "EGP",
    description:
      "A durable cotton-blend jacket built for daily wear, with a relaxed fit and reinforced stitching at the seams.",
    image:
      "/public/image/bomba.jpg",
    inStock: true,
  },
  {
    id: "2",
    slug: "cactus-lamp",
    name: "Cactus Lamp",
    category: "lamps",
    price: 1899,
    currency: "EGP",
    description:
      "Compact true-wireless earbuds with active noise cancellation and 30-hour total battery life.",
    image:
      "/public/image/cactus.jpg",
    inStock: true,
  },
  {
    id: "3",
    slug: "amwag-lamp",
    name: "Amwag Lamp",
    category: "lamps",
    price: 420,
    currency: "EGP",
    description:
      "Heavyweight canvas tote with leather handles, sized for daily carry or light grocery runs.",
    image:
      "/public/image/amwag.jpg",
    inStock: true,
  },
  {
    id: "4",
    slug: "modern-lamp",
    name: "Modern Lamp",
    category: "lamps",
    price: 2200,
    currency: "EGP",
    description:
      "Automatic movement, sapphire crystal, stainless steel case. No battery required.",
    image:
      "/public/image/modern.jpg",
    inStock: false,
  },
  {
    id: "5",
    slug: "desk-lamp",
    name: "Desk Lamp",
    category: "electronics",
    price: 990,
    currency: "EGP",
    description:
      "Adjustable LED desk lamp with three color temperatures and a USB charging port at the base.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    inStock: true,
  },
  {
    id: "6",
    slug: "knit-sweater",
    name: "Knit Sweater",
    category: "clothing",
    price: 1100,
    currency: "EGP",
    description:
      "Soft merino-blend sweater with ribbed cuffs, cut for a slightly oversized fit.",
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&q=80",
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === "all") return products;
  return products.filter((p) => p.category === category);
}
