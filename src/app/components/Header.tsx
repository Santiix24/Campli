import { Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/campli.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Inicio" },
    { path: "/products", label: "Productos" },
    { path: "/about", label: "Nosotros" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F1EB] border-b border-[#4A3428]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Campli" className="h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors duration-200 ${
                  isActive(link.path)
                    ? "text-[#4A3428]"
                    : "text-[#4A3428]/60 hover:text-[#4A3428]"
                }`}
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              className="p-2 hover:bg-[#4A3428]/5 rounded-lg transition-colors"
              aria-label="Carrito de compras"
            >
              <ShoppingCart className="w-5 h-5 text-[#4A3428]" />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-[#4A3428]/5 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#4A3428]" />
              ) : (
                <Menu className="w-5 h-5 text-[#4A3428]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-[#4A3428]/10">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-[#4A3428]"
                      : "text-[#4A3428]/60 hover:text-[#4A3428]"
                  }`}
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
