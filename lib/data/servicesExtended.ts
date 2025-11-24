/**
 * SERVICIOS EXPANDIDOS
 * Datos detallados para cada tipo de servicio en el modal
 */

export interface ServiceExtended {
  id: string;
  title: string;
  subtitle: string;
  longDescription: string;
  heroImage: string;
  specs: {
    label: string;
    value: string;
  }[];
  included: string[];
  galleryImages: {
    url: string;
    title: string;
  }[];
  caseStudies?: string; // "120+ bodas celebradas"
}

export const SERVICES_EXTENDED: Record<string, ServiceExtended> = {
  weddings: {
    id: "weddings",
    title: "Bodas & Nupcias",
    subtitle: "Techos de 5.5m, luz natural, y un equipo que cuida cada timing",
    longDescription: `Desde que te arreglas en la suite con luz natural hasta el último baile de la noche. En VERSO cada momento fluye sin que te preocupes por nada técnico.

VERSO entiende que tu día es la culminación de una historia. Por eso cada detalle, desde la iluminación hasta el servicio discreto, está diseñado para que disfrutes y solo sientas los momentos que importan.

Nuestro equipo de concierge coordina horarios, vendors y transiciones entre momentos. Tú disfrutas, nosotros ejecutamos.`,
    heroImage: "/images/gallery/gallery-1.jpg",
    specs: [
      { label: "Capacidad", value: "50-300 invitados" },
      { label: "Altura de Techos", value: "5.5m de piso a techo" },
      { label: "Acústica", value: "Sistema profesional 360°" },
      { label: "Iluminación", value: "LED inteligente customizable" },
      { label: "Espacios", value: "Suite nupcial, lounge, pista, bar" },
      { label: "Parking", value: "150+ lugares subterráneo" },
    ],
    included: [
      "Coordinación integral desde pre-evento hasta after-party",
      "Suite nupcial con espejo profesional y ambiente controlado",
      "Pista de baile de 120m² con sistema de sonido 360°",
      "Barra mixta con bartender profesional",
      "Lounge privado para cocktail hour",
      "Iluminación arquitectónica personalizada",
      "Sistema de climatización por zonas",
      "Catering gourmet (chef y personal de servicio)",
      "Montaje y desmontaje completo",
      "Acceso a 24h antes y después del evento",
      "Cobertura 360° sin puntos ciegos",
      "Seguridad y valet parking incluido",
    ],
    galleryImages: [
      {
        url: "/images/gallery/gallery-1.jpg",
        title: "Suite Nupcial",
      },
      {
        url: "/images/gallery/gallery-2.jpg",
        title: "Pista de Baile",
      },
      {
        url: "/images/gallery/gallery-3.jpg",
        title: "Ambientación",
      },
      {
        url: "/images/gallery/gallery-4.jpg",
        title: "Detalles",
      },
    ],
    caseStudies: "120+ bodas celebradas",
  },

  gala: {
    id: "gala",
    title: "Social & Gala",
    subtitle: "Sistema de sonido 360°, tres espacios conectados, energía todo la noche",
    longDescription: `Noches con energía real. El sistema de sonido está distribuido en los techos de 5.5m sin bocinas visibles. Tres espacios diferentes para que tus invitados circulen naturalmente.

En VERSO, sabemos que una gala es una experiencia sensorial donde el diseño funciona tan bien que se siente natural. Techos altos que dan amplitud, iluminación LED programable, acústica balanceada para conversación y música.

Tu evento social merece un escenario donde los invitados disfruten. Donde circulen entre ambientes diferentes. Donde la conversación fluye porque el ambiente está diseñado para eso.`,
    heroImage: "/images/gallery/gallery-2.jpg",
    specs: [
      { label: "Capacidad", value: "100-350 personas" },
      { label: "Pista de Baile", value: "120m² acústica perfecta" },
      { label: "Sistemas de Sonido", value: "Profesional multinivel" },
      { label: "Ambientación", value: "Lighting design dinámico" },
      { label: "Lounge Areas", value: "3 espacios diferenciados" },
      { label: "Barra", value: "Premium mixology setup" },
    ],
    included: [
      "Diseño de ambientación personalizado",
      "Sonido profesional para DJ o banda en vivo",
      "Sistema de iluminación dinámico con control remoto",
      "Múltiples espacios de lounge diferenciados",
      "Barra premium con bartender especializado",
      "Catering para cóctel y servicio",
      "Pista de baile de lujo",
      "Air conditioning por zonas",
      "Seguridad y control de asistencia",
      "Montaje de decoración y flores",
      "Coordinación de logística completa",
      "Estacionamiento valet prioritario",
    ],
    galleryImages: [
      {
        url: "/images/gallery/gallery-2.jpg",
        title: "Ambiente Gala",
      },
      {
        url: "/images/gallery/gallery-3.jpg",
        title: "Lounge Premium",
      },
      {
        url: "/images/gallery/gallery-4.jpg",
        title: "Detalles Luminosos",
      },
      {
        url: "/images/gallery/gallery-5.jpg",
        title: "Configuración Flexible",
      },
    ],
    caseStudies: "80+ eventos de gala",
  },

  corporate: {
    id: "corporate",
    title: "Corporate",
    subtitle: "Audio 4K, acústica de sala de conciertos, presentaciones sin distracciones",
    longDescription: `Tu mensaje merece un escenario profesional. Tenemos audio 4K con acústica optimizada para que cada palabra resuene, pantallas integradas sin cables visibles, WiFi 1Gbps para streaming en vivo.

En VERSO entendemos que un evento corporativo es tu oportunidad de posicionar tu mensaje profesionalmente. Los techos altos dan sensación de amplitud. La iluminación LED controlable por escena refuerza tu identidad visual. El catering ejecutivo servido en tiempos exactos.

No se trata de complejidad, sino de precisión. Cada elemento técnico desaparece en el fondo para que tu mensaje sea el protagonista.`,
    heroImage: "/images/gallery/gallery-4.jpg",
    specs: [
      { label: "Capacidad", value: "80-400 personas" },
      { label: "Audio/Video", value: "Sistema profesional 4K" },
      { label: "Iluminación", value: "LED controlable por escena" },
      { label: "Acústica", value: "Calidad sala de conciertos" },
      { label: "Espacios", value: "Main + breakout rooms" },
      { label: "Conectividad", value: "Fibra 1Gbps + WiFi 6" },
    ],
    included: [
      "Sala principal con escenario profesional",
      "Sistemas de audio/video 4K de grado broadcast",
      "Control de iluminación por escena",
      "Acústica optimizada para presentaciones",
      "Salas de breakout para sesiones paralelas",
      "Conectividad de internet de alta velocidad",
      "Catering de calidad ejecutiva",
      "Estacionamiento ejecutivo",
      "Coordinación técnica profesional",
      "Soporte de IT durante el evento",
      "Grabación y transmisión en vivo disponible",
      "Servicio de concierge dedicado",
    ],
    galleryImages: [
      {
        url: "/images/gallery/gallery-1.jpg",
        title: "Sala Principal",
      },
      {
        url: "/images/gallery/gallery-3.jpg",
        title: "Breakout Rooms",
      },
      {
        url: "/images/gallery/gallery-4.jpg",
        title: "Escenario Premium",
      },
      {
        url: "/images/gallery/gallery-5.jpg",
        title: "Tecnología Integrada",
      },
    ],
    caseStudies: "150+ eventos corporativos",
  },
};
