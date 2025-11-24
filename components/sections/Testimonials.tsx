"use client";

import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "Lo que más nos gustó fue la suite nupcial con ventanas enormes. Nos arreglamos con luz natural y el equipo nos avisó 10 minutos antes de cada momento importante. Cero estrés.",
    author: "Isabella & Jorge R.",
    event: "Diciembre 2023",
  },
  {
    id: "2",
    quote:
      "Necesitábamos un lugar que impresionara a 200 ejecutivos sin parecer ostentoso. Los techos altos y el sonido distribuido hicieron que las presentaciones se sintieran como TED Talks. Varios clientes nos preguntaron dónde fue.",
    author: "Magdalena C.",
    event: "Startup Summit 2024",
  },
  {
    id: "3",
    quote:
      "Queríamos boda íntima pero con pista para bailar. VERSO nos montó la cena en el lounge (60 personas) y después abrieron la pista principal. El DJ y la banda tocaron al mismo tiempo en diferentes espacios. Toda la noche sin parar.",
    author: "Carlos y Sofía M.",
    event: "Abril 2024",
  },
  {
    id: "4",
    quote:
      "Hicimos transmisión en vivo con 4 cámaras y el audio salió limpio sin rentar equipo extra. El WiFi de 1Gbps aguantó 300 dispositivos conectados simultáneamente. Nuestro equipo de IT quedó sorprendido.",
    author: "David M.",
    event: "Conferencia Tech 2023",
  },
  {
    id: "5",
    quote:
      "En octubre el clima estuvo impredecible. VERSO tiene clima por zonas, entonces tuvimos el cocktail en una temperatura y la pista más fresca. También coordinaron con nuestro fotógrafo sin que estuviéramos en medio.",
    author: "Valentina & Alejandro L.",
    event: "Octubre 2023",
  },
  {
    id: "6",
    quote:
      "Cumpleaños 50 de mi esposo. Queríamos elegante pero no formal. VERSO programó la iluminación en azul-dorado que combinaba con la decoración. El bartender creó un coctel signature con mezcal que fue todo un hit.",
    author: "Patricia R.",
    event: "Aniversario 2024",
  },
];

/**
 * TESTIMONIALS SECTION
 * Carrusel horizontal de 6 testimonios con diseño minimalista y elegante
 * Love Notes - Lo que dicen nuestros clientes
 */
export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#0c0c0c] border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Carousel Container */}
        <div className="relative">
          {/* Current Testimonial */}
          <Reveal direction="up" className="mb-16">
            <div className="relative text-center">
              {/* Top decorative line */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

              <Quote className="w-8 h-8 md:w-12 md:h-12 text-amber-500/30 mx-auto mb-8 md:mb-12" />

              {/* Quote Text with transition */}
              <div className="min-h-[200px] md:min-h-[160px] flex items-center justify-center">
                <h2
                  key={currentSlide}
                  className="text-h3-fluid font-serif text-neutral-200 italic leading-relaxed max-w-4xl mx-auto animate-fade-in"
                >
                  &quot;{TESTIMONIALS[currentSlide].quote}&quot;
                </h2>
              </div>

              {/* Author section with enhanced styling */}
              <div
                key={`author-${currentSlide}`}
                className="flex flex-col items-center gap-1 animate-fade-in"
              >
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mb-4"></div>
                <span className="text-amber-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">
                  {TESTIMONIALS[currentSlide].author}
                </span>
                <span className="text-neutral-500 text-[10px] md:text-xs font-light">
                  {TESTIMONIALS[currentSlide].event}
                </span>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
            </div>
          </Reveal>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-12 md:mt-16">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 z-20"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2 md:gap-3">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    index === currentSlide
                      ? "w-8 bg-amber-500"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Ir al testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-all duration-300 z-20"
              aria-label="Siguiente testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-8 text-white/40 text-xs md:text-sm font-mono">
            {currentSlide + 1} / {TESTIMONIALS.length}
          </div>
        </div>
      </div>
    </section>
  );
}
