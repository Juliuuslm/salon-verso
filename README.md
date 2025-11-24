# VERSO - Luxury Event Venue

Sitio web moderno y elegante para un salón de eventos de lujo construido con Next.js 15, TypeScript y tecnologías de punta.

## 🎨 Tech Stack

- **Framework**: Next.js 15 con App Router
- **Lenguaje**: TypeScript 5.9
- **Estilos**: Tailwind CSS v3.4
- **Animaciones**: GSAP + Lenis (smooth scrolling)
- **UI Components**: Lucide React Icons
- **Package Manager**: pnpm
- **Renderizado**: SSG + ISR (Static Generation with Incremental Static Regeneration)

## 📋 Características

### Componentes Principales

- **Navbar**: Navegación responsiva con efecto de scroll sticky
- **Hero Section**: Imagen de fondo con efecto parallax
- **About Section**: Layout responsivo con imagen y texto
- **Services Section**: Grid de 3 servicios (Bodas, Social, Corporate)
- **Gallery Section**: Carousel automático con navegación manual
- **Testimonials Section**: Sección de testimonios de clientes
- **Contact Section**: Formulario de contacto con validación
- **Footer**: Links de redes sociales y copyright

### Funcionalidades de UX

- Animaciones suaves al scroll (Lenis)
- Reveal animations con IntersectionObserver
- Staggered text animations
- Parallax effect en hero section
- Smooth scroll behavior
- Mobile-first responsive design
- Grain overlay texture

### SEO

- Metadata API de Next.js
- Open Graph tags
- Twitter Card meta tags
- robots.txt dinámico
- Sitemap XML
- JSON-LD para structured data

## 📁 Estructura del Proyecto

```
salon-verso/
├── app/
│   ├── layout.tsx              # Layout principal con metadata
│   ├── page.tsx                # Página home
│   ├── globals.css             # Estilos globales
│   └── sitemap.ts              # Sitemap dinámico
├── components/
│   ├── ui/                     # Componentes reutilizables
│   │   ├── GrainOverlay.tsx
│   │   ├── Reveal.tsx          # Componente de animación
│   │   └── StaggeredText.tsx
│   ├── sections/               # Secciones de la página
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── providers/
│       └── ScrollProvider.tsx   # Proveedor de Lenis
├── lib/
│   └── hooks/
│       └── useElementOnScreen.ts # Hook para IntersectionObserver
├── types/
│   └── index.ts                # TypeScript types/interfaces
├── public/
│   └── robots.txt
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Instalación y Setup

### Requisitos Previos

- Node.js 18+
- pnpm (o npm/yarn como alternativa)

### Pasos de Instalación

```bash
# Instalar dependencias
pnpm install

# Ejecutar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Ejecutar linter
pnpm lint

# Verificar tipos TypeScript
pnpm type-check
```

El sitio estará disponible en `http://localhost:3000`

## 🎯 Desarrollo

### Componentes Client vs Server

- **Server Components**: About, Services, Testimonials, Footer, Sitemap
- **Client Components**: Navbar, Hero, Gallery, Contact, ScrollProvider, Reveal, StaggeredText

### Agregar Nuevas Secciones

1. Crear componente en `components/sections/NewSection.tsx`
2. Importar en `app/page.tsx`
3. Agregar en la estructura de la página
4. Agregar link en el navbar si es necesario

### Actualizar Servicios/Galería

Modificar los arrays de datos en los componentes respectivos:

```typescript
// components/sections/Services.tsx
const SERVICES: Service[] = [
  // Agregar nuevos servicios aquí
];

// components/sections/Gallery.tsx
const GALLERY_IMAGES: GalleryImage[] = [
  // Agregar nuevas imágenes aquí
];
```

## 🎨 Personalización

### Colores

Los colores principales se definen en `tailwind.config.ts`:

```typescript
colors: {
  amber: { 500: '#f59e0b', ... },  // Color primario
  neutral: { ... },                 // Escala de grises
}
```

### Tipografía

- Serif: Playfair Display (headings)
- Sans: Inter (body text)

Se cargan automáticamente en `globals.css` desde Google Fonts.

### Animaciones

- **Duración estándar**: 1000ms
- **Easing**: cubic-bezier(0.2, 0.65, 0.3, 0.9)
- Configurable en componentes `Reveal` y `StaggeredText`

## 📊 Performance

### Optimizaciones Implementadas

- ✅ Image optimization con Next.js Image component
- ✅ Lazy loading de imágenes
- ✅ Code splitting automático
- ✅ CSS purging con Tailwind
- ✅ Minificación de assets
- ✅ Lenis para smooth scrolling optimizado
- ✅ IntersectionObserver para animaciones eficientes
- ✅ Static generation por defecto

### Core Web Vitals Target

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🔧 Configuración

### next.config.ts

Configuración de imágenes remotas, experimental features y optimizaciones.

### tailwind.config.ts

Tema de colores, tipografía extendida, animaciones personalizadas.

### tsconfig.json

Modo strict con path aliases (`@/*` para imports absolutos).

## 📝 Commits en Español

Todos los commits se realizan en español siguiendo la instrucción global del proyecto.

## 🚀 Deployment

### Vercel (Recomendado)

```bash
# Conectar con Vercel
vercel

# Deploy automático en push a main
```

### Docker

```bash
pnpm build
pnpm start
```

## 📚 Próximas Mejoras Potenciales

- [ ] Sistema de reservas con calendario
- [ ] CMS integrado (Contentful, Strapi)
- [ ] Soporte multi-idioma (i18n)
- [ ] Blog de eventos
- [ ] Sistema de galería dinámica
- [ ] Analytics avanzado
- [ ] Testing (Jest + React Testing Library)

## 📄 License

Propietario - Verso Venue 2024

## 👤 Autor

Construido por Claude Code para Verso Venue
