export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "clothing" | "electronics" | "accessories";
  price: number; // in your currency's smallest common display unit, e.g. EGP
  currency: string;
  description: string;
  image: string;
  inStock: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
};
