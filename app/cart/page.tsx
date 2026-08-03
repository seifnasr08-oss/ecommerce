"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/CartProvider";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-content mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-3xl italic text-ink mb-4">
          Your cart is empty
        </h1>
        <p className="font-body text-slate mb-8">
          Nothing here yet — browse the catalog to add something.
        </p>
        <Link
          href="/products"
          className="inline-block bg-ink text-paper font-body text-sm px-6 py-3 rounded-sm hover:bg-goldDark transition-colors"
        >
          Shop All
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="font-display text-3xl italic text-ink mb-8">Your Cart</h1>

      <div className="space-y-6">
        {items.map(({ product, quantity }) => (
          <div
            key={product.id}
            className="flex gap-4 items-center border-b border-line pb-6"
          >
            <div className="relative w-20 h-24 bg-mist rounded-sm overflow-hidden flex-shrink-0">
              <Image src={product.image} alt={product.name} fill className="object-cover" />
            </div>

            <div className="flex-1">
              <p className="font-body text-sm text-ink">{product.name}</p>
              <p className="font-body text-sm text-gold mt-1">
                {product.price.toLocaleString()} {product.currency}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="w-8 h-8 border border-line rounded-sm font-body text-ink hover:border-ink"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="font-body text-sm w-6 text-center">{quantity}</span>
              <button
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="w-8 h-8 border border-line rounded-sm font-body text-ink hover:border-ink"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeItem(product.id)}
              className="font-body text-sm text-slate hover:text-ink ml-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <p className="font-body text-lg text-ink">
          Total: <span className="text-gold">{totalPrice.toLocaleString()} EGP</span>
        </p>
        <button
          disabled
          title="Checkout isn't connected yet"
          className="font-body text-sm bg-mist text-slate px-6 py-3 rounded-sm cursor-not-allowed"
        >
          Checkout (coming soon)
        </button>
      </div>
    </div>
  );
}
