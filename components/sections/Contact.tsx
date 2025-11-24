"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { useFormValidation } from "@/lib/hooks/useFormValidation";
import type { FormData } from "@/types";

/**
 * CONTACT SECTION
 * Formulario de contacto con validación en tiempo real
 * y mejor feedback visual
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

  const { errors, touched, validateForm, handleBlur, clearErrors } =
    useFormValidation();

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

    // Validar todo el formulario
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Aquí iría la llamada a una API
      // Por ahora, solo simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", interest: "boda", message: "" });
      clearErrors();

      // Reset success message después de 4 segundos
      setTimeout(() => setSubmitStatus("idle"), 4000);
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
              <h2 className="text-h2-fluid font-serif text-white mb-6 md:mb-8">
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
                {/* Personal Info Section */}
                <fieldset className="space-y-6 border-b border-white/10 pb-6">
                  <legend className="text-[10px] uppercase tracking-widest text-amber-500/70 block mb-4">
                    Información Personal
                  </legend>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Name Input */}
                    <div className="group">
                      <label
                        htmlFor="name"
                        className={`text-[10px] md:text-xs uppercase tracking-wider block mb-2 transition-colors ${
                          errors.name && touched.name
                            ? "text-red-400"
                            : "text-neutral-400 group-focus-within:text-amber-500"
                        }`}
                      >
                        Nombre {errors.name && touched.name && "*"}
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-transparent border-b py-3 md:py-4 text-white focus:outline-none transition-all font-serif text-base md:text-lg ${
                          errors.name && touched.name
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-white/20 focus:border-amber-500"
                        }`}
                        placeholder="Tu nombre completo"
                        aria-invalid={!!(errors.name && touched.name)}
                        aria-describedby={
                          errors.name && touched.name ? "name-error" : undefined
                        }
                      />
                      {errors.name && touched.name && (
                        <p
                          id="name-error"
                          className="text-red-400 text-xs mt-2 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone Input */}
                    <div className="group">
                      <label
                        htmlFor="phone"
                        className={`text-[10px] md:text-xs uppercase tracking-wider block mb-2 transition-colors ${
                          errors.phone && touched.phone
                            ? "text-red-400"
                            : "text-neutral-400 group-focus-within:text-amber-500"
                        }`}
                      >
                        Teléfono {errors.phone && touched.phone && "*"}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-transparent border-b py-3 md:py-4 text-white focus:outline-none transition-all font-serif text-base md:text-lg ${
                          errors.phone && touched.phone
                            ? "border-red-500/70 focus:border-red-500"
                            : "border-white/20 focus:border-amber-500"
                        }`}
                        placeholder="+52 (55) 8899 0000"
                        aria-invalid={!!(errors.phone && touched.phone)}
                        aria-describedby={
                          errors.phone && touched.phone ? "phone-error" : undefined
                        }
                      />
                      {errors.phone && touched.phone && (
                        <p
                          id="phone-error"
                          className="text-red-400 text-xs mt-2 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </fieldset>

                {/* Event Details Section */}
                <fieldset className="space-y-6 border-b border-white/10 pb-6">
                  <legend className="text-[10px] uppercase tracking-widest text-amber-500/70 block mb-4">
                    Detalles del Evento
                  </legend>

                  {/* Interest Select */}
                  <div className="group">
                    <label
                      htmlFor="interest"
                      className={`text-[10px] md:text-xs uppercase tracking-wider block mb-2 transition-colors ${
                        errors.interest && touched.interest
                          ? "text-red-400"
                          : "text-neutral-400 group-focus-within:text-amber-500"
                      }`}
                    >
                      Tipo de Evento {errors.interest && touched.interest && "*"}
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-transparent border-b py-3 md:py-4 text-white focus:outline-none transition-all font-serif text-base md:text-lg appearance-none cursor-pointer rounded-none ${
                        errors.interest && touched.interest
                          ? "border-red-500/70 focus:border-red-500"
                          : "border-white/20 focus:border-amber-500"
                      }`}
                      aria-invalid={!!(errors.interest && touched.interest)}
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
                    <label
                      htmlFor="message"
                      className={`text-[10px] md:text-xs uppercase tracking-wider block mb-2 transition-colors ${
                        errors.message && touched.message
                          ? "text-red-400"
                          : "text-neutral-400 group-focus-within:text-amber-500"
                      }`}
                    >
                      Cuéntanos sobre tu evento{" "}
                      {errors.message && touched.message && "*"}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={`w-full bg-transparent border-b py-3 md:py-4 text-white focus:outline-none transition-all font-serif text-base md:text-lg resize-none ${
                        errors.message && touched.message
                          ? "border-red-500/70 focus:border-red-500"
                          : "border-white/20 focus:border-amber-500"
                      }`}
                      placeholder="Cuéntanos brevemente sobre tu evento, cantidad de invitados, fecha tentativa..."
                      aria-invalid={!!(errors.message && touched.message)}
                      aria-describedby={
                        errors.message && touched.message ? "message-error" : undefined
                      }
                    ></textarea>
                    {errors.message && touched.message && (
                      <p
                        id="message-error"
                        className="text-red-400 text-xs mt-2 flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </fieldset>

                {/* Status Messages with Better Feedback */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/10 border border-green-500/40 text-green-300 px-4 py-3 rounded flex items-start gap-3 animate-in fade-in">
                    <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">¡Mensaje enviado!</p>
                      <p className="text-xs text-green-200 mt-1">
                        Responderemos en máximo 24 horas. Gracias por tu interés.
                      </p>
                    </div>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-500/10 border border-red-500/40 text-red-300 px-4 py-3 rounded flex items-start gap-3">
                    <AlertCircle size={20} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Error al enviar</p>
                      <p className="text-xs text-red-200 mt-1">
                        Por favor intenta nuevamente o contáctanos directamente.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative bg-white text-black py-4 md:py-5 uppercase tracking-[0.15em] hover:bg-amber-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 text-xs font-bold mt-6 md:mt-8 overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader size={16} className="animate-spin" />
                      Enviando solicitud...
                    </span>
                  ) : (
                    "Solicitar Cotización"
                  )}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
