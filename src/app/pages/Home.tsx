import { Link } from "react-router";
import { Camera, Zap, Award, Users, ArrowRight, Sparkles, Check, Quote, ChevronDown, Mail, Phone, MessageSquare } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { useState } from "react";

export function Home() {
  const featuredProducts = products.slice(0, 3);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const testimonials = [
    {
      name: "Ana García",
      role: "Fotógrafa de Bodas",
      image: "https://images.unsplash.com/photo-1618876561985-ff3a14af4cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHBob3RvZ3JhcGhlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzI2MzgzODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
      text: "Campli transformó mi forma de trabajar. La calidad de imagen es excepcional y el precio es increíblemente accesible. He capturado más de 50 bodas con mi X-Pro 3."
    },
    {
      name: "Carlos Mendoza",
      role: "Creador de Contenido",
      image: "https://images.unsplash.com/photo-1588420635201-3a9e2a2a0a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBtYW4lMjBjYW1lcmF8ZW58MXx8fHwxNzcyNjM4Mzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
      text: "Como YouTuber, necesitaba una cámara versátil para foto y video. La Creator Z superó todas mis expectativas. El autofocus es brutalmente rápido."
    },
    {
      name: "María Rodríguez",
      role: "Fotógrafa de Moda",
      image: "https://images.unsplash.com/photo-1708006247791-00eee9388480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMGNyZWF0aXZlfGVufDF8fHx8MTc3MjYzODM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=unsplash&utm_medium=referral",
      text: "La Studio Max es una bestia. Los 102MP me permiten hacer ediciones extremas sin perder calidad. Mis clientes están impresionados con los resultados."
    }
  ];

  const faqs = [
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, todos nuestros productos incluyen garantía de 2 años contra defectos de fabricación. Además, ofrecemos soporte técnico gratuito durante toda la vida útil del producto."
    },
    {
      question: "¿Hacen envíos a toda la República Mexicana?",
      answer: "Sí, realizamos envíos a todo México. Los envíos son gratuitos en compras mayores a $15,000 MXN. El tiempo de entrega es de 3-5 días hábiles."
    },
    {
      question: "¿Puedo probar la cámara antes de comprarla?",
      answer: "Tenemos showrooms en Ciudad de México, Guadalajara y Monterrey donde puedes probar nuestros productos. También ofrecemos 30 días de garantía de devolución si no quedas satisfecho."
    },
    {
      question: "¿Ofrecen financiamiento?",
      answer: "Sí, aceptamos pagos con tarjetas de crédito a 3, 6, 9 y 12 meses sin intereses. También trabajamos con opciones de financiamiento externas."
    },
    {
      question: "¿Las cámaras son nuevas o reacondicionadas?",
      answer: "Todos nuestros productos son 100% nuevos, sellados de fábrica y con garantía oficial. Nunca vendemos productos reacondicionados o usados."
    },
    {
      question: "¿Incluyen accesorios las cámaras?",
      answer: "Todas las cámaras incluyen cargador, batería, correa y cable USB. Los lentes y accesorios adicionales se venden por separado o en nuestros kits especiales."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío
    alert("¡Gracias por tu interés! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F5F1EB] via-[#F5F1EB] to-[#1F3A40]/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1F3A40]/10 rounded-full">
                <Sparkles className="w-4 h-4 text-[#1F3A40]" />
                <span className="text-sm text-[#1F3A40]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                  Innovación y Diseño
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl text-[#4A3428] leading-tight"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
              >
                Captura momentos{" "}
                <span className="text-[#1F3A40]">extraordinarios</span>
              </h1>
              <p
                className="text-lg text-[#4A3428]/80 max-w-lg"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Descubre la colección más completa de cámaras profesionales y accesibles.
                Desde mirrorless hasta analógicas, encuentra el equipo perfecto para tu visión creativa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A3428] text-[#F5F1EB] rounded-lg hover:bg-[#4A3428]/90 transition-all hover:shadow-xl hover:scale-105"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Explorar productos
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#4A3428] border border-[#4A3428]/20 rounded-lg hover:bg-[#4A3428]/5 transition-all"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Contactar asesor
                </a>
              </div>
              {/* Social Proof */}
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <p className="text-3xl text-[#4A3428]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}>
                    15,000+
                  </p>
                  <p className="text-sm text-[#4A3428]/60" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Clientes satisfechos
                  </p>
                </div>
                <div className="h-12 w-px bg-[#4A3428]/20"></div>
                <div>
                  <p className="text-3xl text-[#4A3428]" style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 600 }}>
                    4.9/5
                  </p>
                  <p className="text-sm text-[#4A3428]/60" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Calificación promedio
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1F3A40]/20 to-transparent rounded-2xl blur-3xl"></div>
              <img
                src={products[0].image}
                alt="Hero camera"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-[#4A3428]/40" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#4A3428] mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
            >
              ¿Por qué elegir Campli?
            </h2>
            <p
              className="text-lg text-[#4A3428]/70 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Combinamos tecnología de punta con diseño elegante para ofrecerte la mejor experiencia fotográfica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Camera,
                title: "Calidad Premium",
                description: "Equipos profesionales con la última tecnología en imagen"
              },
              {
                icon: Zap,
                title: "Innovación",
                description: "Características avanzadas que potencian tu creatividad"
              },
              {
                icon: Award,
                title: "Garantía Total",
                description: "Respaldo y soporte técnico en todos nuestros productos"
              },
              {
                icon: Users,
                title: "Comunidad",
                description: "Únete a miles de fotógrafos apasionados"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#F5F1EB] hover:bg-[#1F3A40]/5 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-[#1F3A40] rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#F5F1EB]" />
                </div>
                <h3
                  className="mb-2 text-[#4A3428]"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-[#4A3428]/70"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2
                className="text-3xl md:text-4xl text-[#4A3428] mb-4"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
              >
                Productos destacados
              </h2>
              <p
                className="text-lg text-[#4A3428]/70"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Nuestra selección de cámaras más populares
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center gap-2 text-[#1F3A40] hover:gap-3 transition-all"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ver todos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[#1F3A40]"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ver todos los productos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img
                src={products[4].image}
                alt="Campli Benefits"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2
                className="text-3xl md:text-4xl text-[#4A3428]"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
              >
                Experiencia profesional al alcance de todos
              </h2>
              <p
                className="text-lg text-[#4A3428]/80"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                En Campli democratizamos la fotografía profesional ofreciendo equipos de alta gama a precios accesibles sin comprometer la calidad.
              </p>
              <ul className="space-y-4">
                {[
                  "Tecnología de última generación",
                  "Financiamiento sin intereses",
                  "Envío gratis en compras +$15,000",
                  "30 días de garantía de devolución",
                  "Soporte técnico de por vida",
                  "Comunidad exclusiva de fotógrafos"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#1F3A40] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#F5F1EB]" />
                    </div>
                    <span
                      className="text-[#4A3428]"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#1F3A40] hover:gap-3 transition-all"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Conocer más sobre nosotros
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#4A3428] mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
            >
              Lo que dicen nuestros clientes
            </h2>
            <p
              className="text-lg text-[#4A3428]/70"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Historias reales de fotógrafos que confían en Campli
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <Quote className="w-10 h-10 text-[#1F3A40]/20 mb-4" />
                <p
                  className="text-[#4A3428]/80 mb-6"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p
                      className="text-[#4A3428]"
                      style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm text-[#4A3428]/60"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-[#4A3428] mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
            >
              Preguntas frecuentes
            </h2>
            <p
              className="text-lg text-[#4A3428]/70"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Resolvemos tus dudas más comunes
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#F5F1EB] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#4A3428]/5 transition-colors"
                >
                  <span
                    className="text-[#4A3428] pr-4"
                    style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A3428] flex-shrink-0 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p
                      className="text-[#4A3428]/70"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-[#F5F1EB]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl text-[#4A3428] mb-4"
              style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
            >
              ¿Tienes dudas? Contáctanos
            </h2>
            <p
              className="text-lg text-[#4A3428]/70"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Nuestros asesores están listos para ayudarte a encontrar la cámara perfecta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F3A40] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#F5F1EB]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#4A3428] mb-1"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Email
                    </h3>
                    <p
                      className="text-[#4A3428]/70"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      info@campli.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F3A40] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#F5F1EB]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#4A3428] mb-1"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Teléfono
                    </h3>
                    <p
                      className="text-[#4A3428]/70"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      +52 55 1234 5678
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1F3A40] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-[#F5F1EB]" />
                  </div>
                  <div>
                    <h3
                      className="text-[#4A3428] mb-1"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      Horario de atención
                    </h3>
                    <p
                      className="text-[#4A3428]/70"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      Lun - Vie: 9:00 - 18:00<br />
                      Sáb: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#4A3428] mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EB] border border-[#4A3428]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3A40] text-[#4A3428]"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#4A3428] mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#F5F1EB] border border-[#4A3428]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3A40] text-[#4A3428]"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#4A3428] mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#F5F1EB] border border-[#4A3428]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3A40] text-[#4A3428]"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#4A3428] mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-[#F5F1EB] border border-[#4A3428]/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F3A40] text-[#4A3428] resize-none"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#4A3428] text-[#F5F1EB] rounded-lg hover:bg-[#4A3428]/90 transition-all hover:shadow-xl"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F3A40] text-[#F5F1EB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
          >
            ¿Listo para comenzar tu viaje fotográfico?
          </h2>
          <p
            className="text-lg text-[#F5F1EB]/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Únete a nuestra comunidad de fotógrafos y descubre cómo Campli puede transformar tu forma de capturar el mundo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F5F1EB] text-[#1F3A40] rounded-lg hover:bg-white transition-all hover:shadow-xl hover:scale-105"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Explorar catálogo completo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F5F1EB] text-[#F5F1EB] rounded-lg hover:bg-[#F5F1EB]/10 transition-all"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Hablar con un asesor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
