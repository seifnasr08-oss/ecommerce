import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-mist mt-24">
      <div className="max-w-content mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <p className="font-display text-xl text-ink mb-2">Field &amp; Form</p>
          <p className="font-body text-sm text-slate max-w-xs">
            Considered goods for daily use. Built to last, not to trend.
          </p>
        </div>

        <div>
          <p className="font-body text-sm font-semibold text-ink mb-3">Shop</p>
          <ul className="space-y-2 font-body text-sm text-slate">
            <li><Link href="/products" className="hover:text-ink">All products</Link></li>
            <li><Link href="/products?category=clothing" className="hover:text-ink">Clothing</Link></li>
            <li><Link href="/products?category=electronics" className="hover:text-ink">Electronics</Link></li>
            <li><Link href="/products?category=accessories" className="hover:text-ink">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-body text-sm font-semibold text-ink mb-3">Store</p>
          <ul className="space-y-2 font-body text-sm text-slate">
            <li><Link href="/about" className="hover:text-ink">About</Link></li>
            <li><Link href="/cart" className="hover:text-ink">Cart</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-content mx-auto px-6 py-6 border-t border-line font-body text-xs text-slate">
        © {new Date().getFullYear()} Field &amp; Form. All rights reserved.
      </div>
    </footer>
  );
}
