"use client";

import { useState, useEffect } from "react";

/**
 * Hook para detectar qué sección está activa en el viewport
 * Usa IntersectionObserver para máxima performance
 *
 * Retorna el ID de la sección más visible en el viewport
 */
export function useActiveSectionDetection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Crear mapa de elementos y sus estados de visibilidad
    const sectionVisibility = new Map<string, number>();

    // Inicializar todos a 0
    sectionIds.forEach((id) => sectionVisibility.set(id, 0));

    // Configurar observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          // Guardar el porcentaje de intersección
          sectionVisibility.set(
            sectionId,
            entry.intersectionRatio
          );
        });

        // Encontrar la sección con mayor intersección
        let maxVisibleSection = "";
        let maxVisibility = 0;

        sectionVisibility.forEach((visibility, id) => {
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            maxVisibleSection = id;
          }
        });

        if (maxVisibleSection) {
          setActiveSection(maxVisibleSection);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    // Observar todas las secciones
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup
    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
      observer.disconnect();
    };
  }, [sectionIds]);

  return activeSection;
}
