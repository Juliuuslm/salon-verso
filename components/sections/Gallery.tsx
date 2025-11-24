"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { GalleryImage } from "@/types";

const GALLERY_IMAGES: GalleryImage[] = [
  {
    url: "/images/gallery/gallery-1.jpg",
    title: "Ceremonia Bajo 5.5m de Altura",
  },
  {
    url: "/images/gallery/gallery-2.jpg",
    title: "Iluminación LED Programable",
  },
  {
    url: "/images/gallery/gallery-3.jpg",
    title: "Ambientación Personalizada",
  },
  {
    url: "/images/gallery/gallery-4.jpg",
    title: "Pista 120m² para 300 Personas",
  },
  {
    url: "/images/gallery/gallery-5.jpg",
    title: "Suite Nupcial con Espejo Pro",
  },
];

/**
 * GALLERY SECTION
 * Galería de imágenes con carousel automático, play/pause y navegación por thumbnails
 */
export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance carousel cuando isAutoPlay es true
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlay]);

  return (
    <section
      id="gallery"
      className="relative bg-[#0a0a0a] pb-20 md:pb-32 pt-12 overflow-hidden"
    >
      {/* Header */}
      <div className="container mx-auto px-6 mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 z-20 relative">
        <Reveal>
          <div>
            <h2 className="text-6xl md:text-9xl font-serif text-white/5 absolute -top-8 md:-top-12 left-0 select-none pointer-events-none">
              GALLERY
            </h2>
            <span className="text-amber-500 text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-2 md:mb-4">
              Nuestra Colección
            </span>
            <h3 className="text-h3-fluid text-white font-serif">
              Momentos
            </h3>
          </div>
        </Reveal>

        {/* Controls */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="p-2 border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-300 z-30 flex-shrink-0"
            aria-label={isAutoPlay ? "Pausar carrusel" : "Reproducir carrusel"}
            title={isAutoPlay ? "Pausar" : "Reproducir"}
          >
            {isAutoPlay ? <Pause size={16} /> : <Play size={16} />}
          </button>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
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

          {/* Slide Counter */}
          <div className="ml-auto md:ml-0 text-white/40 text-xs md:text-sm font-mono flex-shrink-0">
            {currentSlide + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="container mx-auto px-6 mb-6 md:mb-8">
        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2">
          {GALLERY_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                goToSlide(index);
                setIsAutoPlay(false);
              }}
              className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg border-2 transition-all duration-300 overflow-hidden ${
                index === currentSlide
                  ? "border-amber-400 ring-2 ring-amber-400/30"
                  : "border-white/10 hover:border-white/30"
              }`}
              aria-label={`Ir a slide ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
            >
              <Image
                src={GALLERY_IMAGES[index].url}
                alt={GALLERY_IMAGES[index].title}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
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
                <h2 className="text-h2-fluid font-serif text-white">
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
