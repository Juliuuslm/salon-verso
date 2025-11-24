"use client";

import { useContext } from "react";
import { ModalContext, ModalContextValue } from "@/components/providers/ModalProvider";

export function useModal(): ModalContextValue {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal debe ser usado dentro de ModalProvider");
  }
  return context;
}
