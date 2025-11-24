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
      "Desde el primer nervio en la suite nupcial hasta el último baile bajo las luces. Cada boda en VERSO es una película que se vive una sola vez.",
  },
  {
    id: "gala",
    icon: Music,
    title: "Social & Gala",
    description:
      "Noches que vibran. El sonido te envuelve sin que veas de dónde viene. Lounge que invitan a quedarse. Pistas que piden un baile más.",
  },
  {
    id: "corporate",
    icon: Users,
    title: "Corporate",
    description:
      "Tu mensaje merece un escenario a su altura. Tecnología invisible pero impecable. Catering que impresiona sin distraer de tu presentación.",
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
                          <li>✓ Coordinación de inicio a fin (sin que notes que estamos)</li>
                          <li>✓ Ambientación única para tu historia</li>
                          <li>✓ Catering que se convierte en conversación</li>
                        </>
                      )}
                      {service.title === "Social & Gala" && (
                        <>
                          <li>✓ Sonido que abraza sin ser visto</li>
                          <li>✓ Espacios que fluyen con tu ritmo</li>
                          <li>✓ Detalles que generan conversación</li>
                        </>
                      )}
                      {service.title === "Corporate" && (
                        <>
                          <li>✓ Tecnología que desaparece en el fondo</li>
                          <li>✓ Tu mensaje, brillante y claro</li>
                          <li>✓ Experiencia que impresiona</li>
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
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
