"use client";

import { createContext, useState, ReactNode } from "react";

export interface ModalContextValue {
  // Service Modal
  serviceModal: {
    isOpen: boolean;
    serviceId: string | null;
  };
  openServiceModal: (serviceId: string) => void;
  closeServiceModal: () => void;
}

export const ModalContext = createContext<ModalContextValue | undefined>(
  undefined
);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [serviceModal, setServiceModal] = useState({
    isOpen: false,
    serviceId: null as string | null,
  });

  const openServiceModal = (serviceId: string) => {
    setServiceModal({ isOpen: true, serviceId });
  };

  const closeServiceModal = () => {
    setServiceModal({ isOpen: false, serviceId: null });
  };

  const value: ModalContextValue = {
    serviceModal,
    openServiceModal,
    closeServiceModal,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
}
