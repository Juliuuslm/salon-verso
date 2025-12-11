import type { Metadata } from "next";
import "./globals.css";
import ModalProvider from "@/components/providers/ModalProvider";

export const metadata: Metadata = {
  title: "VERSO | Luxury Event Venue",
  description:
    "VERSO es un espacio de lujo y elegancia para bodas, eventos corporativos y celebraciones exclusivas en México.",
  keywords: [
    "salón de eventos",
    "bodas",
    "venue",
    "CDMX",
    "eventos corporativos",
    "lugar para eventos",
  ],
  authors: [{ name: "VERSO" }],
  creator: "VERSO Venue",
  publisher: "VERSO",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://verso-venue.com",
    siteName: "VERSO | Luxury Event Venue",
    title: "VERSO | Luxury Event Venue",
    description:
      "Donde la arquitectura se encuentra con la elegancia. Un espacio atemporal para quienes buscan la excelencia.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "VERSO Venue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSO | Luxury Event Venue",
    description:
      "Donde la arquitectura se encuentra con la elegancia. Un espacio atemporal para quienes buscan la excelencia.",
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/Favicons/Fav-icon-verso.png",
    apple: "/Favicons/Fav-icon-verso.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-[#0a0a0a] text-neutral-200 antialiased selection:bg-amber-500/30 overflow-x-hidden">
        <ModalProvider>
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
