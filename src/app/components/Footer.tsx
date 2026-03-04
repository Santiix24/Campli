import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/campli.png";

export function Footer() {
  return (
    <footer className="bg-[#4A3428] text-[#F5F1EB]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logo} alt="Campli" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-[#F5F1EB]/80 max-w-sm" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Conectando la pasión por la fotografía con equipos modernos y accesibles. 
              Captura tus momentos con la mejor tecnología.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2 hover:bg-[#F5F1EB]/10 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-[#F5F1EB]/10 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-[#F5F1EB]/10 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-[#F5F1EB]/10 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products"
                  className="text-[#F5F1EB]/80 hover:text-[#F5F1EB] transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#F5F1EB]/80 hover:text-[#F5F1EB] transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#F5F1EB]/80 hover:text-[#F5F1EB] transition-colors"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Contacto
            </h3>
            <ul className="space-y-2 text-[#F5F1EB]/80" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              <li>info@campli.com</li>
              <li>+52 55 1234 5678</li>
              <li>Ciudad de México</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#F5F1EB]/20 text-center text-[#F5F1EB]/60">
          <p style={{ fontFamily: 'var(--font-dm-sans)' }}>
            © 2026 Campli. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
