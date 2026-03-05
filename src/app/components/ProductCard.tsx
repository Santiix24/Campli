import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#4A3428]/10"
    >
      <div className="aspect-[4/3] overflow-hidden bg-[#F5F1EB]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-sm text-[#1F3A40] px-3 py-1 bg-[#1F3A40]/10 rounded-full"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {product.category}
          </span>
        </div>
        <h3
          className="mb-2 text-[#4A3428] group-hover:text-[#1F3A40] transition-colors"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          {product.name}
        </h3>
        <p
          className="text-[#4A3428]/70 mb-4 line-clamp-2"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-[#4A3428]"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            ${product.price.toLocaleString('es-CO')} COP
          </span>
          <div className="flex items-center gap-2 text-[#1F3A40] group-hover:gap-3 transition-all">
            <span style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Ver más
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
