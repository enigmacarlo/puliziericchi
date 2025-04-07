import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { useTranslation } from "../../i18n";

export default async function ContactPage({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar t={t} />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/contact-header-bg.jpg)'
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">{t('contact.title')}</h1>
          <p className="subtitle max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      <ContactSection t={t} />

      <Footer t={t} />
    </main>
  );
}
