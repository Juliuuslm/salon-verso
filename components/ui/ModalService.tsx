"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Modal from "./Modal";
import { SERVICES_EXTENDED } from "@/lib/data/servicesExtended";
import {
  animateImageHover,
  animateImageHoverOut,
  animateCheckmarkDraw,
  animateListReveal,
  setupImageParallax,
} from "@/lib/animations/modalAnimations";

interface ModalServiceProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string | null;
  onContactClick?: () => void;
}

export default function ModalService({
  isOpen,
  onClose,
  serviceId,
  onContactClick,
}: ModalServiceProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const includeItemsRef = useRef<HTMLDivElement>(null);

  const service = serviceId ? SERVICES_EXTENDED[serviceId] : null;

  // Setup animations cuando se abre
  useEffect(() => {
    if (!isOpen || !service || !contentRef.current) return;

    // Setup parallax en hero image
    if (heroImageRef.current) {
      const cleanup = setupImageParallax(
        heroImageRef.current.querySelector("img") as HTMLElement,
        heroImageRef.current
      );
      return cleanup;
    }
  }, [isOpen, service]);

  // Animar checkmarks
  useEffect(() => {
    if (!isOpen || !includeItemsRef.current) return;

    setTimeout(() => {
      const checkmarks = includeItemsRef.current?.querySelectorAll("svg");
      if (checkmarks && checkmarks.length > 0) {
        animateCheckmarkDraw(checkmarks);
      }

      // Animar items de lista
      const items = includeItemsRef.current?.querySelectorAll(
        "[data-animation='fade-in']"
      );
      if (items && items.length > 0) {
        animateListReveal(items as NodeListOf<HTMLElement>, 0.3);
      }
    }, 100);
  }, [isOpen, service]);

  if (!service) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      ariaLabel={`Detalles de ${service.title}`}
    >
      <div ref={contentRef}>
        {/* Hero Image with Parallax */}
        <div ref={heroImageRef} className="relative w-full h-64 overflow-hidden bg-black">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-12 space-y-8">
          {/* Header */}
          <div data-animation="fade-in" className="space-y-2">
            <h2 className="text-h2-fluid font-serif text-white">{service.title}</h2>
            <p className="text-amber-500 text-sm uppercase tracking-widest font-light">
              {service.subtitle}
            </p>
            <div className="h-[1px] w-16 bg-gradient-to-r from-amber-500/50 to-transparent mt-4" />
          </div>

          {/* Long Description */}
          <div data-animation="fade-in" className="space-y-4">
            {service.longDescription.split("\n\n").map((paragraph, idx) => (
              <p
                key={idx}
                className="text-neutral-400 leading-relaxed text-base md:text-lg font-light"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Specs Grid */}
          <div data-animation="fade-in" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.specs.map((spec, idx) => (
              <div
                key={idx}
                className="border-l-2 border-amber-500/30 pl-4 hover:border-amber-500 transition-colors duration-300"
              >
                <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">
                  {spec.label}
                </p>
                <p className="text-base text-white font-light">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Servicios Incluidos */}
          <div data-animation="fade-in" className="space-y-6">
            <div>
              <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-amber-500" />
                Incluido en tu Experiencia
              </h3>
            </div>

            <div ref={includeItemsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.included.map((item, idx) => (
                <div key={idx} data-animation="fade-in" className="flex gap-3 group">
                  {/* Checkmark SVG with Animation */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      className="text-amber-500"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="text-neutral-400 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mini Gallery */}
          <div data-animation="fade-in" className="space-y-4">
            <h3 className="text-xl font-serif text-white flex items-center gap-2">
              <span className="w-6 h-[1px] bg-amber-500" />
              Galería
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {service.galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  className="relative h-32 rounded-sm overflow-hidden group cursor-pointer"
                  onMouseEnter={(e) =>
                    animateImageHover(e.currentTarget.querySelector("img") as HTMLElement)
                  }
                  onMouseLeave={(e) =>
                    animateImageHoverOut(e.currentTarget.querySelector("img") as HTMLElement)
                  }
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 z-10" />
                  <p className="absolute bottom-2 left-2 right-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {image.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies Badge */}
          {service.caseStudies && (
            <div data-animation="fade-in" className="border-t border-white/10 pt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <p className="text-sm text-neutral-400">
                <span className="text-amber-500 font-semibold">{service.caseStudies}</span>{" "}
                hablan de nosotros
              </p>
            </div>
          )}

          {/* CTAs Footer */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row gap-4">
            <button
              onClick={() => {
                onClose();
                onContactClick?.();
              }}
              className="flex-1 group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-[0.15em] text-sm hover:bg-amber-100 transition-all duration-300 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 w-0 bg-amber-600 transition-all duration-300 group-hover:w-full opacity-20" />
              <span className="relative z-10">Agendar Visita Privada</span>
            </button>

            <button
              onClick={onClose}
              className="flex-1 px-8 py-4 border border-white/20 text-white font-semibold uppercase tracking-[0.15em] text-sm hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300 rounded-sm"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
