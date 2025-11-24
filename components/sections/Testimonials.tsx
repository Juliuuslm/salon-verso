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
        <Reveal direction="up" className="max-w-4xl mx-auto text-center">
          <Quote className="w-8 h-8 md:w-12 md:h-12 text-amber-700/30 mx-auto mb-8 md:mb-12" />
          <h2 className="text-h3-fluid font-serif text-neutral-300 italic mb-8 md:mb-12">
            &quot;La sofisticación de VERSO no tiene comparación. Cada detalle,
            desde la iluminación hasta el servicio, fue ejecutado con
            precisión.&quot;
          </h2>
          <div className="flex flex-col items-center gap-2">
            <span className="text-amber-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">
              Isabella & Jorge
            </span>
            <span className="text-neutral-600 text-[10px] md:text-xs">
              Boda de Invierno, 2023
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
