"use client";

import GrainOverlay from "@/components/ui/GrainOverlay";
import ScrollProgress from "@/components/ui/ScrollProgress";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ScrollProvider from "@/components/providers/ScrollProvider";
import ModalService from "@/components/ui/ModalService";
import { useModal } from "@/lib/hooks/useModal";

export default function Home() {
  const { serviceModal, closeServiceModal } = useModal();

  return (
    <ScrollProvider>
      <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-amber-500/30 overflow-x-hidden antialiased relative">
        <GrainOverlay />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />

        {/* Service Modal */}
        <ModalService
          isOpen={serviceModal.isOpen}
          onClose={closeServiceModal}
          serviceId={serviceModal.serviceId}
          onContactClick={() => {
            closeServiceModal();
            const element = document.getElementById("contact");
            if (element) {
              const y = element.getBoundingClientRect().top + window.scrollY - 80;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        />
      </div>
    </ScrollProvider>
  );
}
