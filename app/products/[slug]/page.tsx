import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <div className="max-w-content mx-auto px-6 py-16 grid sm:grid-cols-2 gap-12">
      <div className="relative aspect-[4/5] bg-mist rounded-sm overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div>
        <p className="font-body text-sm text-slate uppercase tracking-widest mb-2">
          {product.category}
        </p>
        <h1 className="font-display text-4xl italic text-ink mb-4">
          {product.name}
        </h1>
        <p className="font-body text-xl text-gold mb-6">
          {product.price.toLocaleString()} {product.currency}
        </p>
        <p className="font-body text-slate leading-relaxed mb-8">
          {product.description}
        </p>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
