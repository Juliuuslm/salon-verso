"use client";

import { Star, Music, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useModal } from "@/lib/hooks/useModal";
import type { Service } from "@/types";

const SERVICES: Service[] = [
  {
    id: "weddings",
    icon: Star,
    title: "Bodas & Nupcias",
    description:
      "Desde que te arreglas en la suite con luz natural hasta el último baile de la noche. En VERSO cada momento fluye sin que te preocupes por nada técnico.",
  },
  {
    id: "gala",
    icon: Music,
    title: "Social & Gala",
    description:
      "Noches con energía real. Sistema de sonido 360° en techos de 5.5m sin bocinas visibles. Tres espacios diferentes para que tus invitados circulen toda la noche.",
  },
  {
    id: "corporate",
    icon: Users,
    title: "Corporate",
    description:
      "Tu mensaje merece un escenario profesional. Audio 4K con acústica de sala de conciertos, pantallas integradas sin cables visibles. Catering ejecutivo servido en tiempos exactos.",
  },
];

/**
 * SERVICES SECTION
 * Presenta los servicios principales del salón
 * Con modals interactivos para cada experiencia
 */
export default function Services() {
  const { openServiceModal } = useModal();

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0c0c0c]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-8">
          <Reveal variant="blur" className="w-full md:w-auto">
            <h2 className="text-h2-fluid font-serif text-white">
              Experiencias
            </h2>
          </Reveal>
          <Reveal delay={200} className="w-full md:w-auto">
            <p className="text-neutral-500 text-xs md:text-sm uppercase tracking-widest mt-4 md:mt-0">
              Diseñadas para Ti
            </p>
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Reveal key={service.id} delay={index * 100} className="h-full min-h-[400px]">
                <button
                  onClick={() => openServiceModal(service.id)}
                  className="w-full group relative bg-[#0a0a0a] p-8 md:p-12 h-full hover:bg-[#0f0f0f] transition-colors duration-700 flex flex-col justify-between text-left cursor-pointer border-0 outline-0"
                >
                  <div>
                    <div className="mb-8 md:mb-12 text-amber-600/50 group-hover:text-amber-400 transition-colors duration-700">
                      <IconComponent size={32} strokeWidth={1} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-700">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed mb-6 group-hover:text-neutral-300 transition-colors duration-700 text-sm md:text-base">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="text-xs text-neutral-500 space-y-2 mb-8">
                      {service.title === "Bodas & Nupcias" && (
                        <>
                          <li>✓ Coordinación completa (horarios, vendors, timings)</li>
                          <li>✓ Diseño de iluminación personalizado según tu paleta</li>
                          <li>✓ Catering gourmet con chef (mexicano o internacional)</li>
                        </>
                      )}
                      {service.title === "Social & Gala" && (
                        <>
                          <li>✓ Audio profesional 360° integrado en arquitectura</li>
                          <li>✓ 3 ambientes conectados: lounge, pista 120m², barra</li>
                          <li>✓ Elementos decorativos customizables</li>
                        </>
                      )}
                      {service.title === "Corporate" && (
                        <>
                          <li>✓ Sistema AV 4K, pantallas integradas, WiFi 6 de 1Gbps</li>
                          <li>✓ Acústica optimizada + pantallas sin puntos ciegos</li>
                          <li>✓ Catering ejecutivo + concierge dedicado</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-amber-500 transition-colors duration-700 flex items-center gap-2">
                      Explorar Experiencia{" "}
                      <ArrowRight
                        size={12}
                        className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </span>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
