import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import GallerySection from "@/components/home/GallerySection";
import AboutSection from "@/components/home/AboutSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import OrderStepsSection from "@/components/home/OrderStepsSection";
import ContactSection from "@/components/home/ContactSection";
import FloatingWhatsAppButton from "@/components/home/FloatingWhatsAppButton";

export default function Home() {
  const whatsappMessage = encodeURIComponent(
    "Ola! Gostaria de fazer uma encomenda de bolo personalizado."
  );
  const whatsappLink = `https://wa.me/258848074445?text=${whatsappMessage}`;

  return (
    <>
      <Navbar />
      <HeroSection whatsappLink={whatsappLink} />
      <GallerySection />
      <AboutSection />
      <TestimonialsSection />
      <OrderStepsSection whatsappLink={whatsappLink} />
      <ContactSection />
      <FloatingWhatsAppButton whatsappLink={whatsappLink} />

      <Footer />
    </>
  );
}
