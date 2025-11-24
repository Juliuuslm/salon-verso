"use client";

import { useState, useCallback } from "react";
import type { FormData } from "@/types";

export interface ValidationError {
  name?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

/**
 * Hook para validación de formulario en tiempo real
 * Retorna errors, touched fields y handlers
 */
export function useFormValidation() {
  const [errors, setErrors] = useState<ValidationError>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = useCallback(
    (name: keyof FormData, value: string): string | undefined => {
      switch (name) {
        case "name":
          if (!value.trim()) return "El nombre es requerido";
          if (value.trim().length < 3)
            return "El nombre debe tener al menos 3 caracteres";
          return undefined;

        case "phone":
          if (!value.trim()) return "El teléfono es requerido";
          // Validar formato: +52 (55) 8899 0000 o variaciones
          const phoneRegex = /^(\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3,4}[- ]?\d{3,4}$/;
          if (!phoneRegex.test(value.replace(/\s/g, "")))
            return "Teléfono inválido";
          return undefined;

        case "interest":
          if (!value) return "Debes seleccionar un tipo de evento";
          return undefined;

        case "message":
          if (!value.trim()) return "El mensaje es requerido";
          if (value.trim().length < 10)
            return "El mensaje debe tener al menos 10 caracteres";
          return undefined;

        default:
          return undefined;
      }
    },
    []
  );

  const validateForm = useCallback(
    (formData: FormData): ValidationError => {
      const newErrors: ValidationError = {};

      Object.entries(formData).forEach(([key, value]) => {
        const fieldName = key as keyof FormData;
        const error = validateField(fieldName, value);
        if (error) {
          newErrors[fieldName] = error;
        }
      });

      return newErrors;
    },
    [validateField]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof FormData;

      // Mark field as touched
      setTouched((prev) => ({ ...prev, [name]: true }));

      // Validate field
      const error = validateField(fieldName, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    },
    [validateField]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      const fieldName = name as keyof FormData;

      // Si el campo fue touched, validar en tiempo real
      if (touched[name]) {
        const error = validateField(fieldName, value);
        setErrors((prev) => ({
          ...prev,
          [name]: error,
        }));
      }
    },
    [touched, validateField]
  );

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  return {
    errors,
    touched,
    validateField,
    validateForm,
    handleBlur,
    handleChange,
    clearErrors,
  };
}
