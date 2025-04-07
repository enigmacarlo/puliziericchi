import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Villa sul mare a Portofino",
    category: "Ville di Lusso",
    image: "/images/villa-lusso.jpg"
  },
  {
    id: "gallery-2",
    title: "Yacht di lusso a Sanremo",
    category: "Yacht e Barche",
    image: "/images/yacht.jpg"
  },
  {
    id: "gallery-3",
    title: "Jet privato G650",
    category: "Jet Privati",
    image: "/images/private-jet.jpg"
  },
  {
    id: "gallery-4",
    title: "Evento esclusivo a Villa Balbiano",
    category: "Eventi Esclusivi",
    image: "/images/evento-esclusivo.jpg"
  },
  {
    id: "gallery-5",
    title: "Residenza storica in centro",
    category: "Ville di Lusso",
    image: "/images/about-2.jpg"
  },
  {
    id: "gallery-6",
    title: "Appartamento con vista",
    category: "Ville di Lusso",
    image: "/images/about-1.jpg"
  }
];

export default function GalleryPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/villa-lusso.jpg)'
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">Galleria</h1>
          <p className="subtitle max-w-3xl mx-auto">
            Alcuni dei nostri progetti più esclusivi
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
                  <span className="text-gold text-sm mb-2 block">{item.category}</span>
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
          <h2 className="heading-lg text-white mb-6">Vuoi far parte della nostra galleria?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Contattaci per un servizio personalizzato e trasforma la tua proprietà con il nostro
            servizio di pulizia di lusso. La perfezione in ogni dettaglio.
          </p>
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          >
            <Link href="/contatti">
              Richiedi Preventivo
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
