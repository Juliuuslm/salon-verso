import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * ABOUT SECTION
 * Sección de información sobre el salón
 */
export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-amber-900/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal direction="up" variant="blur">
              <h2 className="text-h2-fluid font-serif text-white mb-8 md:mb-12">
                Diseño <br />
                <span className="italic text-neutral-600">Sensorial</span>
              </h2>
              <div className="h-[1px] w-24 bg-amber-800/50 mb-8 md:mb-12"></div>
              <p className="text-neutral-400 leading-loose mb-8 text-base md:text-lg font-light">
                VERSO desafía lo convencional. Techos de doble altura y una
                acústica impecable envuelven a tus invitados en una atmósfera
                de exclusividad.
              </p>
              <p className="text-neutral-500 leading-loose font-light">
                La iluminación inteligente transforma el espacio según el ritmo
                de tu evento, pasando de la claridad del día a la intimidad de
                la noche.
              </p>
            </Reveal>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <Reveal
              delay={200}
              variant="blur"
              className="relative z-10 w-full"
            >
              <div className="relative overflow-hidden group w-full">
                {/* Decorative accent lines */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border border-amber-500/20 z-20"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border border-amber-500/20 z-20"></div>

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
                  alt="Interior Verso"
                  width={800}
                  height={700}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 700'%3E%3Crect fill='%23171717' width='800' height='700'/%3E%3C/svg%3E"
                  className="w-full h-[350px] md:h-[600px] lg:h-[700px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1500ms] ease-in-out scale-100 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-full h-full border border-white/5 z-0 transition-transform duration-1000 group-hover:translate-x-4 group-hover:translate-y-4"></div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
