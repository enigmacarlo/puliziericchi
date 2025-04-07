import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "../../i18n";

type GalleryItem = {
  id: string;
  title: string;
  categoryKey: string;
  image: string;
};

export default async function GalleryPage({
  params: { lng }
}: {
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng);

  // Gallery items with translation keys
  const galleryItems: GalleryItem[] = [
    {
      id: "gallery-1",
      title: "Villa sul mare a Portofino",
      categoryKey: "services.luxuryVillas.title",
      image: "/images/villa-lusso.jpg"
    },
    {
      id: "gallery-2",
      title: "Yacht di lusso a Sanremo",
      categoryKey: "services.yachts.title",
      image: "/images/yacht.jpg"
    },
    {
      id: "gallery-3",
      title: "Jet privato G650",
      categoryKey: "services.jets.title",
      image: "/images/private-jet.jpg"
    },
    {
      id: "gallery-4",
      title: "Evento esclusivo a Villa Balbiano",
      categoryKey: "services.events.title",
      image: "/images/evento-esclusivo.jpg"
    },
    {
      id: "gallery-5",
      title: "Residenza storica in centro",
      categoryKey: "services.luxuryVillas.title",
      image: "/images/about-2.jpg"
    },
    {
      id: "gallery-6",
      title: "Appartamento con vista",
      categoryKey: "services.luxuryVillas.title",
      image: "/images/about-1.jpg"
    }
  ];

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
          <h1 className="heading-xl text-white mb-4">{t('gallery.title')}</h1>
          <p className="subtitle max-w-3xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg border border-gray-800 bg-black/30 transition-all hover:border-gold"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-gold text-sm mb-2 block">{t(item.categoryKey)}</span>
                  <h3 className="text-white text-xl font-medium mb-4">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-black">
        <div className="container-custom text-center">
          <h2 className="heading-lg text-white mb-6">{t('gallery.joinGallery.title')}</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            {t('gallery.joinGallery.description')}
          </p>
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          >
            <Link href="/contatti">
              {t('nav.requestQuote')}
            </Link>
          </Button>
        </div>
      </section>

      <Footer t={t} />
    </main>
  );
}
