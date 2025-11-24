"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import type { NavLink } from "@/types";

const NAV_LINKS: NavLink[] = [
  { name: "Inicio", id: "hero" },
  { name: "El Salón", id: "about" },
  { name: "Servicios", id: "services" },
  { name: "Galería", id: "gallery" },
  { name: "Love Notes", id: "testimonials" },
  { name: "Contacto", id: "contact" },
];

/**
 * NAVBAR COMPONENT
 * Navegación principal con efecto de scroll y menú móvil
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl py-4 border-white/5 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-xl md:text-2xl font-serif font-bold tracking-[0.2em] text-amber-50 hover:text-white transition-colors z-50 cursor-pointer"
        >
          VERSO
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 lg:space-x-12">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-neutral-400 hover:text-amber-100 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-amber-100 cursor-pointer z-50 p-2"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-500 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="text-2xl font-serif text-white hover:text-amber-400 transition-colors"
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
