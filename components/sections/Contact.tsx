"use client";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import type { FormData } from "@/types";

/**
 * CONTACT SECTION
 * Formulario de contacto y información de ubicación
 */
export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    interest: "boda",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la llamada a una API
      // Por ahora, solo simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", interest: "boda", message: "" });

      // Reset success message después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 md:mb-8">
                Hablemos
              </h2>
              <p className="text-neutral-400 font-light leading-relaxed mb-8 md:mb-12 text-sm md:text-base">
                Las grandes historias comienzan con una conversación. Visita
                nuestro showroom o agenda una videollamada.
              </p>
              <div className="space-y-6 text-xs md:text-sm uppercase tracking-widest text-neutral-300">
                <div className="flex items-center gap-4 hover:text-amber-400 transition-colors cursor-pointer w-max">
                  <MapPin size={16} /> <span>Lomas de Chapultepec, CDMX</span>
                </div>
                <a
                  href="tel:+525588990000"
                  className="flex items-center gap-4 hover:text-amber-400 transition-colors cursor-pointer w-max"
                >
                  <Phone size={16} /> <span>+52 (55) 8899 0000</span>
                </a>
                <a
                  href="mailto:concierge@verso.com"
                  className="flex items-center gap-4 hover:text-amber-400 transition-colors cursor-pointer w-max"
                >
                  <Mail size={16} /> <span>concierge@verso.com</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <Reveal delay={200} className="bg-white/5 p-1 border border-white/10">
              <form
                onSubmit={handleSubmit}
                className="bg-[#0a0a0a] p-6 md:p-12 space-y-6 md:space-y-8"
              >
                {/* Name & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="group">
                    <label className="text-[10px] md:text-xs uppercase text-neutral-500 block mb-2 group-focus-within:text-amber-500 transition-colors">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-amber-500 transition-all font-serif text-base md:text-lg"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div className="group">
                    <label className="text-[10px] md:text-xs uppercase text-neutral-500 block mb-2 group-focus-within:text-amber-500 transition-colors">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-amber-500 transition-all font-serif text-base md:text-lg"
                      placeholder="Número de contacto"
                    />
                  </div>
                </div>

                {/* Interest Select */}
                <div className="group">
                  <label className="text-[10px] md:text-xs uppercase text-neutral-500 block mb-2 group-focus-within:text-amber-500 transition-colors">
                    Interés
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-amber-500 transition-all font-serif text-base md:text-lg appearance-none cursor-pointer rounded-none"
                  >
                    <option value="boda" className="bg-[#1a1a1a]">
                      Boda
                    </option>
                    <option value="corporativo" className="bg-[#1a1a1a]">
                      Corporativo
                    </option>
                    <option value="social" className="bg-[#1a1a1a]">
                      Social
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label className="text-[10px] md:text-xs uppercase text-neutral-500 block mb-2 group-focus-within:text-amber-500 transition-colors">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white focus:outline-none focus:border-amber-500 transition-all font-serif text-base md:text-lg resize-none"
                    placeholder="Cuéntanos brevemente sobre tu evento..."
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-2 rounded text-sm">
                    ✓ Mensaje enviado correctamente. Nos contactaremos pronto.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-2 rounded text-sm">
                    Error al enviar. Por favor intenta nuevamente.
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black py-4 md:py-5 uppercase tracking-[0.2em] hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-500 text-xs font-bold mt-4 md:mt-8"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
