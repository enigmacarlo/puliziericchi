import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "../../i18n";

export default async function ServicesPage({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng);

  // Service IDs for translation lookups
  const serviceIds = ["luxuryVillas", "yachts", "jets", "events", "maintenance", "custom"];

  // Map IDs to images
  const serviceImages: { [key: string]: string } = {
    "luxuryVillas": "/images/villa-lusso.jpg",
    "yachts": "/images/yacht.jpg",
    "jets": "/images/private-jet.jpg",
    "events": "/images/evento-esclusivo.jpg",
    "maintenance": "/images/villa-lusso.jpg",
    "custom": "/images/yacht.jpg"
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar t={t} />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/villa-lusso.jpg)'
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">{t('services.title')}</h1>
          <p className="subtitle max-w-3xl mx-auto">
            {t('services.description')}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          {serviceIds.map((serviceId, index) => (
            <div
              key={serviceId}
              id={serviceId}
              className={`py-16 ${
                index !== 0 ? "border-t border-gray-800" : ""
              }`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="heading-lg text-white mb-6">{t(`services.${serviceId}.title`)}</h2>
                  <p className="text-gray-300 mb-8">{t(`services.${serviceId}.description`)}</p>

                  <ul className="space-y-3 mb-8">
                    {/* Dynamically generate features from translations */}
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <li key={`${serviceId}-feature-${idx}`} className="flex items-start">
                        <span className="text-gold mr-2">✓</span>
                        <span className="text-gray-300">
                          {t(`services.${serviceId}.features.${idx}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="gold-gradient text-darkBg hover:opacity-90 transition-opacity"
                  >
                    <Link href="/contatti">
                      {t('nav.requestQuote')}
                    </Link>
                  </Button>
                </div>

                <div className={`relative h-[400px] md:h-[500px] overflow-hidden rounded-lg ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}>
                  <Image
                    src={serviceImages[serviceId]}
                    alt={t(`services.${serviceId}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">{t('services.customService')}</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            {t('services.customServiceDescription')}
          </p>
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          >
            <Link href="/contatti">
              {t('services.contactNow')}
            </Link>
          </Button>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
