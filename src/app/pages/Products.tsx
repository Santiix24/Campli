import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { Filter } from "lucide-react";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#4A3428] to-[#1F3A40] text-[#F5F1EB] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
          >
            Nuestros Productos
          </h1>
          <p
            className="text-lg text-[#F5F1EB]/90 max-w-2xl"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Explora nuestra colección completa de cámaras profesionales y encuentra el equipo perfecto para tu estilo
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-[#4A3428]/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-[#4A3428]" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? "bg-[#4A3428] text-[#F5F1EB] shadow-lg"
                      : "bg-[#F5F1EB] text-[#4A3428] hover:bg-[#4A3428]/10"
                  }`}
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 flex items-center justify-between">
            <p
              className="text-[#4A3428]/70"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Mostrando {filteredProducts.length} {filteredProducts.length === 1 ? 'producto' : 'productos'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-xl text-[#4A3428]/60"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                No se encontraron productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
