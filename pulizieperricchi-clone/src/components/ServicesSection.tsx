import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "ville",
    title: "Ville di Lusso",
    description: "Servizi di pulizia professionale per ville e residenze di prestigio, con particolare attenzione ai materiali pregiati e agli arredi di valore.",
    image: "/images/villa-lusso.jpg"
  },
  {
    id: "yacht",
    title: "Yacht e Barche",
    description: "Servizi dedicati alla pulizia e manutenzione di yacht e imbarcazioni di lusso, con soluzioni specifiche per contrastare gli effetti del sale marino.",
    image: "/images/yacht.jpg"
  },
  {
    id: "jet",
    title: "Jet Privati",
    description: "Servizi di pulizia specializzati per jet privati, con protocolli dedicati e prodotti specifici per le superfici aeronautiche.",
    image: "/images/private-jet.jpg"
  },
  {
    id: "eventi",
    title: "Eventi Esclusivi",
    description: "Per eventi di gala, matrimoni di lusso, premiere e occasioni speciali, offriamo servizi di pulizia pre e post evento con discrezione e rapidità.",
    image: "/images/evento-esclusivo.jpg"
  },
  {
    id: "manutenzione",
    title: "Manutenzione Programmata",
    description: "Programmi settimanali o mensili su misura per ambienti prestigiosi. Continuità di servizio e qualità garantita nel tempo per i nostri clienti.",
    image: "/images/villa-lusso.jpg"
  },
  {
    id: "personalizzati",
    title: "Servizi Personalizzati",
    description: "Ogni cliente è unico. Lo è anche il nostro intervento. Soluzioni esclusive per esigenze specifiche e richieste particolari.",
    image: "/images/yacht.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-black">
      <div className="container-custom">
        <h2 className="heading-lg text-white text-center mb-6">I Nostri Servizi Esclusivi</h2>
        <p className="subtitle text-center max-w-3xl mx-auto mb-16">
          Offriamo una gamma completa di servizi di pulizia di alta classe, pensati per una clientela che esige solo l'eccellenza.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-darkBg border border-gray-800 rounded-lg overflow-hidden group hover:border-gold transition-colors"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-md text-gold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-gold text-gold hover:text-white hover:border-white w-full"
                >
                  <Link href={`/servizi#${service.id}`}>
                    Scopri di più
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          >
            <Link href="/servizi">
              Esplora Tutti i Servizi
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
