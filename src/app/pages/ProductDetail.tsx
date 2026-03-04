import { useParams, Link, useNavigate } from "react-router";
import { products } from "../data/products";
import { ArrowLeft, ShoppingCart, Check, Star } from "lucide-react";
import { ProductCard } from "../components/ProductCard";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-3xl text-[#4A3428] mb-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Producto no encontrado
          </h1>
          <Link
            to="/products"
            className="text-[#1F3A40] hover:underline"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Volver a productos
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F5F1EB]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[#4A3428]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[#4A3428]/70 hover:text-[#4A3428] transition-colors"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-xl"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <span
                  className="inline-block px-4 py-2 bg-[#1F3A40]/10 text-[#1F3A40] rounded-full mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {product.category}
                </span>
                <h1
                  className="text-4xl md:text-5xl text-[#4A3428] mb-4"
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
                >
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#1F3A40] text-[#1F3A40]"
                    />
                  ))}
                  <span
                    className="text-[#4A3428]/70 ml-2"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    (127 reseñas)
                  </span>
                </div>
                <p
                  className="text-lg text-[#4A3428]/80"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {product.description}
                </p>
              </div>

              <div className="border-t border-[#4A3428]/10 pt-6">
                <p
                  className="text-4xl text-[#4A3428] mb-6"
                  style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}
                >
                  ${product.price.toLocaleString('es-MX')} MXN
                </p>

                <div className="flex gap-4">
                  <button
                    className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A3428] text-[#F5F1EB] rounded-lg hover:bg-[#4A3428]/90 transition-all hover:shadow-xl"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Agregar al carrito
                  </button>
                  <button
                    className="px-8 py-4 bg-white text-[#4A3428] border border-[#4A3428]/20 rounded-lg hover:bg-[#4A3428]/5 transition-all"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3
                  className="mb-4 text-[#4A3428]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Características principales
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-[#4A3428]/80"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      <Check className="w-5 h-5 text-[#1F3A40] flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
            <h2
              className="text-2xl text-[#4A3428] mb-6"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
            >
              Especificaciones técnicas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="border-l-2 border-[#1F3A40] pl-4">
                  <p
                    className="text-sm text-[#4A3428]/60 mb-1 capitalize"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {key}
                  </p>
                  <p
                    className="text-[#4A3428]"
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}
                  >
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2
                className="text-3xl text-[#4A3428] mb-8"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
              >
                Productos relacionados
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
