"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { GalleryImage } from "@/types";

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "https://images.unsplash.com/photo-1519225463359-191d4cf9ca3d?q=80&w=2070&auto=format&fit=crop",
    title: "Bodas de Ensueño",
  },
  {
    url: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop",
    title: "Cenas de Gala",
  },
  {
    url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop",
    title: "Decoración Floral",
  },
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    title: "Eventos Masivos",
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    title: "Detalles Únicos",
  },
];

/**
 * GALLERY SECTION
 * Galería de imágenes con carousel automático
 */
export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section
      id="gallery"
      className="relative bg-[#0a0a0a] pb-20 md:pb-32 pt-12 overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-8 md:mb-12 flex flex-row items-end justify-between z-20 relative">
        <Reveal>
          <div>
            <h2 className="text-6xl md:text-9xl font-serif text-white/5 absolute -top-8 md:-top-12 left-0 select-none pointer-events-none">
              GALLERY
            </h2>
            <span className="text-amber-500 text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-2 md:mb-4">
              Portafolio
            </span>
            <h3 className="text-2xl md:text-4xl text-white font-serif">
              Momentos
            </h3>
          </div>
        </Reveal>

        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 z-30"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 z-30"
            aria-label="Siguiente slide"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[50vh] md:h-[80vh] bg-[#050505]">
        {GALLERY_IMAGES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <Image
              src={slide.url}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-[10000ms] ease-linear ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
              priority={index === 0}
              quality={85}
            />

            {/* Slide Info */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-24 z-20 flex flex-col md:flex-row justify-between items-end">
              <div
                className={`transition-all duration-1000 delay-300 transform ${
                  index === currentSlide
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <p className="text-amber-400 text-[10px] md:text-xs uppercase tracking-[0.4em] mb-2 md:mb-4">
                  Verso Collection
                </p>
                <h2 className="text-3xl md:text-7xl font-serif text-white">
                  {slide.title}
                </h2>
              </div>

              <div className="text-white/30 text-xs md:text-sm font-mono mt-4 md:mt-0">
                {index + 1} / {GALLERY_IMAGES.length}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
