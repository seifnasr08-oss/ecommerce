import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getProductsByCategory } from "@/lib/products";

const categories = [
  { label: "All", value: "all" },
  { label: "Clothing", value: "clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Accessories", value: "accessories" },
];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category || "all";
  const filtered = getProductsByCategory(activeCategory);

  return (
    <div className="max-w-content mx-auto px-6 py-16">
      <h1 className="font-display text-3xl italic text-ink mb-8">Shop All</h1>

      <div className="flex gap-2 mb-10 flex-wrap">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={cat.value === "all" ? "/products" : `/products?category=${cat.value}`}
            className={`font-body text-sm px-4 py-2 rounded-full border transition-colors ${
              activeCategory === cat.value
                ? "bg-ink text-paper border-ink"
                : "border-line text-slate hover:border-ink hover:text-ink"
            }`}
          >
            {cat.label}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-slate">No products in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
