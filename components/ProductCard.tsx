import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] bg-mist overflow-hidden rounded-sm">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        {!product.inStock && (
          <span className="absolute top-3 left-3 bg-ink text-paper text-xs font-body px-2 py-1 rounded-sm">
            Sold out
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="font-body text-sm text-ink">{product.name}</h3>
        <p className="font-body text-sm text-gold mt-1">
          {product.price.toLocaleString()} {product.currency}
        </p>
      </div>
    </Link>
  );
}
