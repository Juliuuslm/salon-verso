import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  event: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "La sofisticación de VERSO no tiene comparación. Cada detalle, desde la iluminación hasta el servicio, fue ejecutado con precisión.",
    author: "Isabella & Jorge",
    event: "Boda de Invierno, 2023",
  },
  {
    id: "2",
    quote:
      "Un espacio que trasciende lo ordinario. La arquitectura, el diseño y la atención al detalle hacen de VERSO el lugar perfecto para celebrar.",
    author: "Magdalena Cortés",
    event: "Gala Corporativa, 2024",
  },
  {
    id: "3",
    quote:
      "Nuestro evento fue una experiencia inolvidable. El equipo de VERSO entendió perfectamente nuestra visión y la llevó a la realidad.",
    author: "Carlos & Sofía",
    event: "Boda Primavera, 2024",
  },
  {
    id: "4",
    quote:
      "La acústica impecable y los espacios versátiles de VERSO son incomparables. Perfectamente diseñado para eventos de clase mundial.",
    author: "David Morales",
    event: "Conferencia Ejecutiva, 2023",
  },
  {
    id: "5",
    quote:
      "Cada rincón de VERSO respira elegancia y exclusividad. Un lugar donde los detalles trascienden y crean momentos mágicos.",
    author: "Valentina & Alejandro",
    event: "Boda Otoño, 2023",
  },
  {
    id: "6",
    quote:
      "La iluminación inteligente, los espacios amplios y el servicio impecable hacen de VERSO un escenario inigualable para cualquier celebración.",
    author: "Patricia Ruiz",
    event: "Evento Privado, 2024",
  },
];

/**
 * TESTIMONIALS SECTION
 * Sección de testimonios de clientes (Love Notes)
 * Grid responsivo de 6 testimonios con diseño consistente
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-[#0c0c0c] border-t border-white/5"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <Reveal direction="up" className="mb-16 md:mb-24 text-center">
          <h2 className="text-h2-fluid font-serif text-white mb-4">
            Love Notes
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto font-light">
            Lo que nuestros clientes dicen sobre sus experiencias en VERSO
          </p>
        </Reveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal
              key={testimonial.id}
              delay={index * 100}
              direction="up"
              className="h-full"
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-amber-500/30 rounded-lg p-6 md:p-8 h-full flex flex-col justify-between transition-all duration-500 group overflow-hidden">
                {/* Decorative background */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-colors duration-500"></div>

                {/* Quote Icon */}
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-amber-500/40 mb-4 relative z-10" />

                {/* Quote Text */}
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic mb-6 relative z-10 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Divider */}
                <div className="h-[1px] w-6 bg-gradient-to-r from-amber-600/40 to-transparent mb-4 relative z-10"></div>

                {/* Author Info */}
                <div className="relative z-10">
                  <p className="text-amber-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">
                    {testimonial.author}
                  </p>
                  <p className="text-neutral-500 text-[10px] md:text-xs font-light mt-1">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
