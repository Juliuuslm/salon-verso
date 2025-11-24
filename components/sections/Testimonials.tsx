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
      "Tuvimos 280 invitados en la pista y nadie se quejó del espacio. La altura de los techos marca la diferencia. Y la iluminación se ajustó en cada momento: ceremonia, cocktail, baile. Nada interrumpió el flujo.",
    author: "Isabella & Jorge",
    event: "Boda de Invierno, 2023",
  },
  {
    id: "2",
    quote:
      "Para una gala corporativa con 350 personas, lo importante es que suene claro. Podías estar en cualquier rincón y escuchabas sin esfuerzo. El bar nunca se vio saturado, los tres espacios fluyeron naturalmente.",
    author: "Magdalena Cortés",
    event: "Gala Corporativa, 2024",
  },
  {
    id: "3",
    quote:
      "No nos pidieron que coordináramos nada dos veces. El equipo anticipaba. La suite estaba lista, la iluminación cambió cuando nosotros queremos, el timing entre platos fue perfecto. Eso es lo que valoras después.",
    author: "Carlos & Sofía",
    event: "Boda Primavera, 2024",
  },
  {
    id: "4",
    quote:
      "Presentamos a 400 personas. Cada diapositiva se vio nítida, cada palabra se escuchó sin rebotes acústicos. Tenían un técnico manejando todo en tiempo real. Eso da tranquilidad cuando el contenido es crítico.",
    author: "David Morales",
    event: "Conferencia Ejecutiva, 2023",
  },
  {
    id: "5",
    quote:
      "Lo que nos sorprendió fue el bar. 40+ opciones, y el bartender no solo mezclaba, recomendaba. La pista de baile aguantó a 250 personas sin cansancio. Y a los 4am, todo seguía limpio. Eso cuenta.",
    author: "Valentina & Alejandro",
    event: "Boda Otoño, 2023",
  },
  {
    id: "6",
    quote:
      "Pasamos 12 horas en VERSO. Desde setup hasta después de medianoche. El equipo ajustó temperatura, sonido, iluminación sin que tuviéramos que pedir. Eso es coordinación invisible. Es lo que buscábamos.",
    author: "Patricia Ruiz",
    event: "Evento Privado, 2024",
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
