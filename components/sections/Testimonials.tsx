import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

/**
 * TESTIMONIALS SECTION
 * Sección de testimonios de clientes
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#0c0c0c] border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        <Reveal direction="up" className="max-w-4xl mx-auto">
          <div className="relative text-center">
            {/* Top decorative line */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

            <Quote className="w-8 h-8 md:w-12 md:h-12 text-amber-500/30 mx-auto mb-8 md:mb-12" />

            <h2 className="text-h3-fluid font-serif text-neutral-200 italic mb-8 md:mb-12 leading-relaxed">
              &quot;La sofisticación de VERSO no tiene comparación. Cada detalle,
              desde la iluminación hasta el servicio, fue ejecutado con
              precisión.&quot;
            </h2>

            {/* Author section with enhanced styling */}
            <div className="flex flex-col items-center gap-1">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent mb-4"></div>
              <span className="text-amber-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">
                Isabella & Jorge
              </span>
              <span className="text-neutral-500 text-[10px] md:text-xs font-light">
                Boda de Invierno, 2023
              </span>
            </div>

            {/* Bottom decorative line */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
