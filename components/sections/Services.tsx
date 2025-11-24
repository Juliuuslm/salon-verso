import { Star, Music, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { Service } from "@/types";

const SERVICES: Service[] = [
  {
    id: "weddings",
    icon: Star,
    title: "Bodas & Nupcias",
    description:
      "Coordinación integral. Desde la suite nupcial hasta el último baile, creamos una narrativa visual única.",
  },
  {
    id: "gala",
    icon: Music,
    title: "Social & Gala",
    description:
      "Atmósferas vibrantes. Audio de alta fidelidad oculto en la arquitectura y zonas lounge de diseño.",
  },
  {
    id: "corporate",
    icon: Users,
    title: "Corporate",
    description:
      "Presentaciones de impacto. Pantallas 4K, streaming global y catering ejecutivo de alto nivel.",
  },
];

/**
 * SERVICES SECTION
 * Presenta los servicios principales del salón
 */
export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#0c0c0c]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-white/5 pb-8">
          <Reveal variant="blur" className="w-full md:w-auto">
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Servicios
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
                <div className="group relative bg-[#0a0a0a] p-8 md:p-12 h-full hover:bg-[#0f0f0f] transition-colors duration-700 flex flex-col justify-between">
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
                          <li>✓ Coordinación completa del evento</li>
                          <li>✓ Ambientación personalizada</li>
                          <li>✓ Servicio de catering premium</li>
                        </>
                      )}
                      {service.title === "Social & Gala" && (
                        <>
                          <li>✓ Equipamiento audiovisual avanzado</li>
                          <li>✓ Diseño de ambientes</li>
                          <li>✓ Servicio especializado</li>
                        </>
                      )}
                      {service.title === "Corporate" && (
                        <>
                          <li>✓ Infraestructura técnica</li>
                          <li>✓ Streaming y conferencias</li>
                          <li>✓ Servicio ejecutivo</li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs uppercase tracking-widest text-white/40 group-hover:text-amber-500 transition-colors duration-700 flex items-center gap-2">
                      Conocer más{" "}
                      <ArrowRight
                        size={12}
                        className="-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
