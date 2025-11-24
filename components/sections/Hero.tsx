"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import StaggeredText from "@/components/ui/StaggeredText";

/**
 * HERO SECTION
 * Sección de inicio con imagen de fondo, efecto parallax y animaciones
 */
export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-32 md:py-0"
    >
      {/* Background with Parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translateY(${offsetY * 0.3}px) scale(1.1)`,
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
            alt="Salón Verso Luxury"
            fill
            className="object-cover"
            priority
            quality={85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full">
        <Reveal variant="blur" delay={200}>
          <div className="flex items-center justify-center gap-4 mb-6 opacity-90">
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-amber-200"></div>
            <p className="text-amber-100 tracking-[0.3em] md:tracking-[0.5em] uppercase text-[10px] md:text-xs font-light">
              The Art of Celebration
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-amber-200"></div>
          </div>
        </Reveal>

        <div className="mb-8 md:mb-12">
          <h1 className="text-h1-fluid font-serif text-white mix-blend-difference">
            <StaggeredText text="VERSO" />
          </h1>
          <Reveal variant="blur" delay={600}>
            <span className="block text-h3-fluid italic text-amber-200/90 font-light mt-2 md:mt-4 font-serif">
              Events & Venue
            </span>
          </Reveal>
        </div>

        <Reveal delay={800} variant="blur" direction="up">
          <p className="text-neutral-300 text-base md:text-xl mb-12 font-light max-w-xl mx-auto leading-relaxed px-4">
            Donde la arquitectura se encuentra con la elegancia. Un espacio
            atemporal para quienes buscan la excelencia.
          </p>
        </Reveal>

        <Reveal delay={1000} variant="blur">
          <button
            onClick={() => scrollToSection("contact")}
            className="group relative px-8 py-3 md:px-12 md:py-4 bg-transparent overflow-hidden rounded-sm border border-amber-500/30 hover:border-amber-400 transition-colors duration-500 mx-auto block"
          >
            <div className="absolute inset-0 w-0 bg-amber-600 transition-all duration-[600ms] ease-out group-hover:w-full opacity-10"></div>
            <div className="relative z-10 flex items-center justify-center gap-2 text-xs md:text-sm uppercase tracking-[0.25em] text-amber-100 group-hover:text-white transition-colors">
              Reservar{" "}
              <Sparkles
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
