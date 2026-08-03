import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="max-w-content mx-auto px-6 py-24 sm:py-32">
          <p className="font-body text-sm text-gold uppercase tracking-widest mb-4">
            New season
          </p>
          <h1 className="font-display text-5xl sm:text-6xl italic text-ink max-w-2xl leading-[1.1]">
            Goods built to outlast the trend cycle.
          </h1>
          <p className="font-body text-slate mt-6 max-w-md">
            A small, considered catalog of clothing, electronics, and everyday
            accessories — chosen for how long they last, not how fast they sell.
          </p>
          <Link
            href="/products"
            className="inline-block mt-8 bg-ink text-paper font-body text-sm px-6 py-3 rounded-sm hover:bg-goldDark transition-colors"
          >
            Shop the catalog
          </Link>
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-content mx-auto px-6 py-20">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-display text-2xl italic text-ink">Featured</h2>
          <Link href="/products" className="font-body text-sm text-slate hover:text-ink">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
