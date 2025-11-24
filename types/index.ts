export interface NavLink {
  name: string;
  id: string;
}

import type { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface GalleryImage {
  url: string;
  title: string;
  alt?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  date: string;
}

export interface ContactInfo {
  location: string;
  phone: string;
  email: string;
}

export interface FormData {
  name: string;
  phone: string;
  interest: "boda" | "corporativo" | "social";
  message: string;
}
