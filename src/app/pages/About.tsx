import { Camera, Heart, Sparkles, Target, Users, Award } from "lucide-react";
import { Link } from "react-router";

const vintagePhotos = [
  {
    src: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=600&q=80",
    alt: "Cámara analógica vintage",
    rotate: "-rotate-3",
    label: "Film & Soul"
  },
  {
    src: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80",
    alt: "Fotógrafo en acción",
    rotate: "rotate-2",
    label: "Captura el instante"
  },
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
    alt: "Setup fotográfico",
    rotate: "-rotate-1",
    label: "El arte de ver"
  },
  {
    src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&q=80",
    alt: "Rollo de película",
    rotate: "rotate-3",
    label: "Cada fotograma importa"
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    alt: "Cámara retro",
    tall: true
  },
  {
    src: "https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?w=800&q=80",
    alt: "Fotografía en blanco y negro",
    tall: false
  },
  {
    src: "https://images.unsplash.com/photo-1504703395950-b89145a5425b?w=800&q=80",
    alt: "Cuarto oscuro",
    tall: false
  },
  {
    src: "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&q=80",
    alt: "Fotógrafo vintage",
    tall: true
  },
  {
    src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    alt: "Lente de cámara",
    tall: false
  },
  {
    src: "https://images.unsplash.com/photo-1598908314732-07113901949e?w=800&q=80",
    alt: "Fotografía analógica",
    tall: false
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-[#F5F1EB]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")" }}>

      {/* Hero — collage polaroid */}
      <section className="relative overflow-hidden bg-[#2C1810] py-24">
        {/* Grain overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.png')", backgroundRepeat: "repeat" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Texto */}
            <div>
              <span
                className="inline-block text-[#C9A96E] text-sm tracking-[0.3em] uppercase mb-4"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Est. 2020 · Nuestra historia
              </span>
              <h1
                className="text-5xl md:text-7xl text-[#F5F1EB] mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-inter)', fontWeight: 700 }}
              >
                Pasión<br />
                <span className="italic text-[#C9A96E]">hecha</span><br />
                fotografía
              </h1>
              <p
                className="text-lg text-[#F5F1EB]/70 max-w-md"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                En Campli creemos que cada momento merece ser capturado con la mejor calidad —
                con el alma analógica y la precisión del presente.
              </p>
            </div>

            {/* Collage polaroid */}
            <div className="relative h-[420px]">
              {vintagePhotos.map((photo, i) => (
                <div
                  key={i}
                  className={`absolute bg-white p-3 pb-8 shadow-2xl ${photo.rotate} transition-transform hover:scale-105 hover:z-10 cursor-pointer`}
                  style={{
                    top: `${[0, 60, 130, 30][i]}px`,
                    left: `${[0, 160, 60, 280][i]}px`,
                    width: "200px",
                    zIndex: i + 1
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-36 object-cover sepia-[0.3] contrast-[1.05]"
                  />
                  <p className="text-center text-[#4A3428] text-xs mt-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {photo.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Galería mosaico */}
      <section className="py-16 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-[#4A3428]/50 text-xs tracking-[0.4em] uppercase mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              — a través del lente —
            </span>
            <h2 className="text-3xl text-[#4A3428]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
              Momentos que nos definen
            </h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[520px]">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-lg ${img.tall ? "row-span-2" : "row-span-1"} group relative`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover sepia-[0.25] contrast-[1.08] brightness-95 group-hover:sepia-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-[#2C1810]/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador decorativo */}
      <div className="flex items-center gap-4 max-w-7xl mx-auto px-6 py-4 opacity-30">
        <div className="flex-1 h-px bg-[#4A3428]" />
        <Camera className="w-4 h-4 text-[#4A3428]" />
        <div className="flex-1 h-px bg-[#4A3428]" />
      </div>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative border border-[#4A3428]/20 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                <Target className="w-full h-full text-[#4A3428]" />
              </div>
              <span className="text-[#4A3428]/40 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>01</span>
              <div className="w-10 h-px bg-[#C9A96E] mt-2 mb-6" />
              <h2 className="text-3xl text-[#4A3428] mb-4" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                Nuestra Misión
              </h2>
              <p className="text-lg text-[#4A3428]/70" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Democratizar la fotografía profesional ofreciendo equipos de alta calidad
                a precios accesibles, combinando innovación tecnológica con diseño elegante
                para empoderar a creadores de todos los niveles.
              </p>
            </div>

            <div className="relative border border-[#4A3428]/20 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
                <Sparkles className="w-full h-full text-[#4A3428]" />
              </div>
              <span className="text-[#4A3428]/40 text-xs tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-dm-sans)' }}>02</span>
              <div className="w-10 h-px bg-[#C9A96E] mt-2 mb-6" />
              <h2 className="text-3xl text-[#4A3428] mb-4" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                Nuestra Visión
              </h2>
              <p className="text-lg text-[#4A3428]/70" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Ser la marca líder en América Latina que inspire a las nuevas generaciones
                de fotógrafos, estableciendo un nuevo estándar de excelencia en equipamiento
                fotográfico y experiencia del cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F5F1EB]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-[#4A3428]/40 text-xs tracking-[0.4em] uppercase mb-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>— lo que nos mueve —</span>
            <h2 className="text-3xl md:text-4xl text-[#4A3428]" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
              Nuestros Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Camera, title: "Calidad Suprema", description: "No comprometemos la calidad. Cada producto pasa por rigurosos controles para garantizar excelencia.", num: "01" },
              { icon: Heart, title: "Pasión por el Arte", description: "Amamos la fotografía tanto como tú. Nuestro equipo está formado por fotógrafos apasionados.", num: "02" },
              { icon: Users, title: "Comunidad Primero", description: "Construimos una comunidad de creadores que se apoyan mutuamente y crecen juntos.", num: "03" },
              { icon: Sparkles, title: "Innovación Constante", description: "Siempre buscamos las últimas tecnologías para ofrecer productos de vanguardia.", num: "04" },
              { icon: Award, title: "Excelencia", description: "Nos esforzamos por superar expectativas en cada interacción con nuestros clientes.", num: "05" },
              { icon: Target, title: "Accesibilidad", description: "Creemos que la fotografía profesional debe estar al alcance de todos.", num: "06" },
            ].map((value, index) => (
              <div
                key={index}
                className="group relative border border-[#4A3428]/10 rounded-xl p-8 hover:border-[#C9A96E]/60 hover:shadow-lg transition-all duration-300 bg-white/50"
              >
                <span className="absolute top-6 right-6 text-[#4A3428]/10 text-4xl font-bold" style={{ fontFamily: 'var(--font-inter)' }}>{value.num}</span>
                <value.icon className="w-7 h-7 text-[#C9A96E] mb-5" />
                <h3 className="text-xl text-[#4A3428] mb-3" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="text-[#4A3428]/60 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#2C1810] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=1200&q=60')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Foto con borde vintage */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A96E]/40 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1553545985-1e0d8781d5db?w=800&q=80"
                alt="Nuestra historia"
                className="relative w-full h-[420px] object-cover rounded-lg sepia-[0.3] contrast-[1.1]"
              />
              {/* Etiqueta estilo polaroid */}
              <div className="absolute -bottom-5 left-6 bg-white px-4 py-2 shadow-lg -rotate-1">
                <p className="text-[#4A3428] text-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>Campli, 2020 ✦</p>
              </div>
            </div>

            {/* Texto */}
            <div>
              <span className="inline-block text-[#C9A96E] text-xs tracking-[0.4em] uppercase mb-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Nuestra Historia
              </span>
              <h2 className="text-4xl text-[#F5F1EB] mb-8" style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}>
                De un sueño a miles de <span className="italic text-[#C9A96E]">fotogramas</span>
              </h2>
              <div className="space-y-5 text-[#F5F1EB]/70" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                <p>
                  Campli nació en 2020 de la visión de un grupo de fotógrafos profesionales
                  que veían una brecha en el mercado: equipos de alta calidad a precios inaccesibles
                  para la mayoría de los creadores emergentes.
                </p>
                <p>
                  Decidimos cambiar eso. Comenzamos diseñando cámaras que combinaran tecnología
                  de punta con un diseño elegante y contemporáneo, sin comprometer la calidad
                  pero haciéndolas accesibles para más personas.
                </p>
                <p>
                  Hoy, miles de fotógrafos en toda América Latina confían en Campli para capturar
                  sus momentos más importantes. No solo construimos una marca — construimos
                  una comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1F3A40] text-[#F5F1EB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 600 }}
          >
            Únete a la familia Campli
          </h2>
          <p
            className="text-lg text-[#F5F1EB]/90 mb-8 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Descubre cómo nuestras cámaras pueden ayudarte a contar tus historias de manera única
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F1EB] text-[#1F3A40] rounded-lg hover:bg-white transition-all hover:shadow-xl hover:scale-105"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Explorar productos
          </Link>
        </div>
      </section>
    </div>
  );
}
