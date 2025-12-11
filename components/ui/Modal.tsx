"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useScrollContext } from "@/components/providers/ScrollProvider";
import { animateModalIn, animateModalOut } from "@/lib/animations/modalAnimations";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "fullscreen";
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  ariaLabel: string;
  className?: string;
}

const sizeClasses = {
  sm: "max-w-[400px]",
  md: "max-w-[600px]",
  lg: "max-w-[800px]",
  xl: "max-w-[1200px]",
  fullscreen: "w-screen h-screen max-w-none",
} as const;

export default function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  showCloseButton = true,
  ariaLabel,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const { pauseScroll, resumeScroll } = useScrollContext();

  // Guardar scrollY en un ref para restaurar después
  const scrollYRef = useRef<number>(0);

  // Bloquear scroll del body cuando el modal está abierto
  useLayoutEffect(() => {
    if (isOpen) {
      // Guardar posición del scroll ANTES de cualquier manipulación
      scrollYRef.current = window.scrollY;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      // Pausar Lenis (smooth scroll library)
      pauseScroll();

      // Remover transformaciones de Lenis
      document.documentElement.style.transform = "none";
      document.documentElement.style.width = "100%";
      document.documentElement.style.height = "100%";
      document.documentElement.style.overflow = "hidden";

      // Fijar el body para bloquear scroll de la página principal
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        // CLEANUP SEQUENCE - CRÍTICO PARA DESKTOP

        // PASO 1: Restaurar body PRIMERO (libera el layout)
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";

        // PASO 2: Restaurar HTML
        document.documentElement.style.transform = "";
        document.documentElement.style.width = "";
        document.documentElement.style.height = "";
        document.documentElement.style.overflow = "";

        // PASO 3: Restaurar scroll inmediatamente
        window.scrollTo(0, scrollYRef.current);

        // PASO 4: Esperar un frame antes de reactivar Lenis
        requestAnimationFrame(() => {
          resumeScroll();
        });
      };
    }
  }, [isOpen, pauseScroll, resumeScroll]);

  // Bloquear touchmove en overlay y áreas fuera del scroll container
  useEffect(() => {
    if (!isOpen) return;

    const handleTouchMove = (e: TouchEvent) => {
      const scrollContainer = scrollContainerRef.current;
      const modalContainer = modalRef.current;

      if (!scrollContainer || !modalContainer) return;

      const target = e.target as HTMLElement;

      // Permitir scroll si el touch está en el scroll container o sus hijos
      if (scrollContainer.contains(target)) {
        return;
      }

      // Bloquear si está en el overlay o fuera del modal
      if (!modalContainer.contains(target)) {
        e.preventDefault();
      }
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  // Animaciones con GSAP
  useEffect(() => {
    if (!modalRef.current || !overlayRef.current) return;

    if (isOpen) {
      timelineRef.current = animateModalIn(
        modalRef.current,
        overlayRef.current
      );
    } else {
      timelineRef.current = animateModalOut(
        modalRef.current,
        overlayRef.current
      );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isOpen]);

  // Keyboard handling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeOnEsc, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (firstFocusable) {
      firstFocusable.focus();
    }

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable?.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const content = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay - clickeable para cerrar */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/80 backdrop-blur-xl cursor-pointer pointer-events-auto"
        onClick={() => closeOnOverlayClick && onClose()}
        aria-hidden="true"
      />

      {/* Modal - pointer-events-auto para recibir eventos */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        className={`relative z-10 bg-[#0a0a0a] border border-white/10 rounded-sm overflow-hidden flex flex-col min-h-0 pointer-events-auto ${sizeClasses[size]} ${className || ""}`}
        style={{ maxHeight: "90dvh", willChange: "transform, opacity" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2 rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300"
            aria-label="Cerrar modal"
          >
            <X size={20} />
          </button>
        )}

        {/* Content - Scroll nativo con flexbox optimizado */}
        <div
          ref={scrollContainerRef}
          className="w-full flex-1 overflow-y-auto min-h-0 max-h-[90dvh]"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-y",
            WebkitTouchCallout: "none",
            overscrollBehavior: "contain",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
