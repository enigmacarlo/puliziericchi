import { useTranslation } from "../i18n";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default async function Home({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar t={t} />
      <HeroSection t={t} />
      <AboutSection t={t} />
      <ServicesSection t={t} />
      <TestimonialsSection t={t} />
      <FaqSection t={t} />
      <ContactSection t={t} />
      <Footer t={t} />
    </main>
  );
}
