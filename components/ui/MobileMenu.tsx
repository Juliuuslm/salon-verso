"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useScrollContext } from "@/components/providers/ScrollProvider";
import {
  animateMobileMenuIn,
  animateMobileMenuOut,
} from "@/lib/animations/mobileMenuAnimations";
import type { NavLink } from "@/types";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  activeSection,
  onNavigate,
}: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollYRef = useRef<number>(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const { pauseScroll, resumeScroll } = useScrollContext();

  // Scroll lock con useLayoutEffect - Se ejecuta ANTES del paint
  useLayoutEffect(() => {
    if (isOpen) {
      // Guardar scroll position
      scrollYRef.current = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      // Pausar Lenis PRIMERO
      pauseScroll();

      // Remover transformaciones de Lenis
      document.documentElement.style.transform = "none";
      document.documentElement.style.width = "100%";
      document.documentElement.style.height = "100%";
      document.documentElement.style.overflow = "hidden";

      // Fijar el body en la posición actual ANTES de que React pinte
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        // Restaurar estilos del HTML
        document.documentElement.style.transform = "";
        document.documentElement.style.width = "";
        document.documentElement.style.height = "";
        document.documentElement.style.overflow = "";

        // Restaurar estilos del body
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";

        // Restaurar scroll
        window.scrollTo(0, scrollYRef.current);

        // Reanudar Lenis
        resumeScroll();
      };
    }
  }, [isOpen, pauseScroll, resumeScroll]);

  // Animaciones con GSAP
  useEffect(() => {
    if (!menuRef.current || !overlayRef.current) return;

    if (isOpen) {
      timelineRef.current = animateMobileMenuIn(
        menuRef.current,
        overlayRef.current
      );
    } else {
      timelineRef.current = animateMobileMenuOut(
        menuRef.current,
        overlayRef.current
      );
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isOpen]);

  // Keyboard handling - ESC para cerrar
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableElements = menuRef.current.querySelectorAll(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

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

  const handleNavigateAndClose = (id: string) => {
    onClose();
    // Usar setTimeout para permitir que la animación de cierre complete
    setTimeout(() => {
      onNavigate(id);
    }, 150);
  };

  const content = (
    <div className="fixed inset-0 z-[9999]">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-[#0a0a0a] cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Container */}
      <div
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        className="relative z-10 flex flex-col justify-center items-center h-full pt-20"
        style={{ willChange: "opacity, transform" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white hover:text-amber-400 transition-colors z-[11]"
          aria-label="Cerrar menú"
        >
          <X size={28} />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-8">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                data-link
                onClick={() => handleNavigateAndClose(link.id)}
                className={`text-2xl font-serif transition-colors ${
                  isActive
                    ? "text-amber-400 font-bold"
                    : "text-white hover:text-amber-400"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
