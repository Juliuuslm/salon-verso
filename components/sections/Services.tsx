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
      "Suite nupcial con espejo profesional. Pista de 120m² para 300 personas. Coordinación que anticipa cada momento sin que tengas que pedir.",
  },
  {
    id: "gala",
    icon: Music,
    title: "Social & Gala",
    description:
      "Sonido distribuido 360°. Tres lounges diferenciados por iluminación. Pista de baile con circulación fluida para 350 personas.",
  },
  {
    id: "corporate",
    icon: Users,
    title: "Corporate",
    description:
      "Audio 4K broadcast, pantalla de 8m, acústica optimizada para 400 personas. Técnico dedicado durante todo el evento.",
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
              Experiencias Bespoke
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
                          <li>✓ Suite nupcial con espejo profesional</li>
                          <li>✓ Coordinación de timings (nunca esperas)</li>
                          <li>✓ Chef in-house, menú degustación previa</li>
                        </>
                      )}
                      {service.title === "Social & Gala" && (
                        <>
                          <li>✓ Audio en 8 puntos (calidad homogénea)</li>
                          <li>✓ Tres áreas configurables: bar, lounge, pista</li>
                          <li>✓ Barra premium con 40+ spirits</li>
                        </>
                      )}
                      {service.title === "Corporate" && (
                        <>
                          <li>✓ Sistema A/V 4K con técnico dedicado</li>
                          <li>✓ Acústica optimizada (mayor a 95% inteligibilidad)</li>
                          <li>✓ Fibra 1Gbps + backup 4G automático</li>
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
