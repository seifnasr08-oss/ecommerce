"use client";

import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { Product } from "@/lib/types";

export function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  if (!product.inStock) {
    return (
      <button
        disabled
        className="font-body text-sm bg-mist text-slate px-6 py-3 rounded-sm cursor-not-allowed"
      >
        Sold out
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="font-body text-sm bg-ink text-paper px-6 py-3 rounded-sm hover:bg-goldDark transition-colors"
    >
      {added ? "Added ✓" : "Add to cart"}
    </button>
  );
}
