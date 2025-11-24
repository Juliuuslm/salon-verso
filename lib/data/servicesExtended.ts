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
    subtitle: "Suite, ceremonia, cocktail, baile. Todo en un solo espacio",
    longDescription: `VERSO coordina timings sin interrumpir. Mientras vives tu ceremonia, nuestro equipo ajusta iluminación, temperatura y sonido según el momento. No preguntamos, anticipamos.

Suite nupcial con espejo profesional y lighting. Pista de 120m² para 300 personas sin aglomeración. Cada espacio fluye al siguiente de manera natural.

El catering incluye degustación previa con el chef. Nuestro equipo responde en menos de 5 minutos a cualquier imprevisto. Eso es coordinación invisible.`,
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
    subtitle: "Sonido profesional, 3 lounges, pista de 120m²",
    longDescription: `En VERSO, una gala funciona porque el espacio está pensado para flujo: tres lounges diferenciados por iluminación, pista central de 120m², bar con visibilidad desde todos los ángulos. El diseño no compite con tu evento, lo sostiene.

Sonido distribuido en 8 puntos (no un altavoz central). Acústica sin rebotes que permiten conversación. Temperatura controlada por zonas. Barra con bartender especializado y 40+ opciones de spirits.

Nuestro equipo ajusta iluminación según el momento del evento. 12 horas de operación sin que baje la calidad del servicio.`,
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
    subtitle: "Acústica optimizada, A/V 4K, conectividad 1Gbps",
    longDescription: `En VERSO, un evento corporativo es una herramienta de comunicación. La acústica optimizada (inteligibilidad mayor a 95%) garantiza que 400 personas escuchen sin esfuerzo. Sin rebotes, sin zonas muertas.

Sistemas A/V broadcast 4K. Técnico dedicado durante todo el evento. Pantalla de 8m nítida. Fibra 1Gbps + backup 4G automático. Prueba de todo 24h antes.

Catering de calidad ejecutiva, sin distraer presentaciones. Breakout rooms disponibles para sesiones paralelas. Control de iluminación por escena (6 configuraciones predefinidas).`,
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
