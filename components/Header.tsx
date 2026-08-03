"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="border-b border-line bg-paper sticky top-0 z-40">
      <div className="max-w-content mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-tight text-ink">
          Field &amp; Form
        </Link>

        <nav className="hidden sm:flex items-center gap-8 font-body text-sm text-slate">
          <Link href="/products" className="hover:text-ink transition-colors">
            Shop All
          </Link>
          <Link href="/products?category=clothing" className="hover:text-ink transition-colors">
            Clothing
          </Link>
          <Link href="/products?category=electronics" className="hover:text-ink transition-colors">
            Electronics
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
        </nav>

        <Link
          href="/cart"
          className="flex items-center gap-2 font-body text-sm text-ink"
          aria-label={`Cart, ${totalItems} item${totalItems === 1 ? "" : "s"}`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span>{totalItems}</span>
        </Link>
      </div>
    </header>
  );
}
