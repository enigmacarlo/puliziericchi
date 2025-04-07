import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

const services: Service[] = [
  {
    id: "ville",
    title: "Ville di Lusso",
    description: "Servizi di pulizia professionale per ville e residenze di prestigio, con particolare attenzione ai materiali pregiati e agli arredi di valore.",
    image: "/images/villa-lusso.jpg",
    features: [
      "Trattamenti specifici per marmi pregiati, legni antichi e tessuti delicati",
      "Pulizia approfondita di lampadari di cristallo e opere d'arte",
      "Manutenzione di piscine e aree esterne",
      "Trattamento e cura di pavimenti in marmo, parquet e pietre naturali",
      "Servizi su misura per case vacanza e seconde case"
    ]
  },
  {
    id: "yacht",
    title: "Yacht e Barche",
    description: "Servizi dedicati alla pulizia e manutenzione di yacht e imbarcazioni di lusso, con soluzioni specifiche per contrastare gli effetti del sale marino.",
    image: "/images/yacht.jpg",
    features: [
      "Pulizia e lucidatura di ponti in teak e superfici esterne",
      "Trattamento antimuffa e antiusura per tessuti e pelle",
      "Lucidatura di acciai e metalli contro la corrosione marina",
      "Sanificazione completa di cabine e aree comuni",
      "Servizi pre e post stagione di navigazione"
    ]
  },
  {
    id: "jet",
    title: "Jet Privati",
    description: "Servizi di pulizia specializzati per jet privati, con protocolli dedicati e prodotti specifici per le superfici aeronautiche.",
    image: "/images/private-jet.jpg",
    features: [
      "Pulizia e sanificazione di cabine e cockpit",
      "Trattamento speciale per pelle, alcantara e tessuti di alta gamma",
      "Lucidatura di superfici in legno pregiato e metalli",
      "Purificazione dei sistemi di aerazione",
      "Servizi pre e post volo disponibili 24/7"
    ]
  },
  {
    id: "eventi",
    title: "Eventi Esclusivi",
    description: "Per eventi di gala, matrimoni di lusso, premiere e occasioni speciali, offriamo servizi di pulizia pre e post evento con discrezione e rapidità.",
    image: "/images/evento-esclusivo.jpg",
    features: [
      "Preparazione e setup delle location prima dell'evento",
      "Servizio discreto di pulizia durante gli eventi",
      "Intervento rapido post-evento per il ripristino della location",
      "Gestione dei rifiuti e smaltimento ecosostenibile",
      "Coordinamento con i fornitori dell'evento"
    ]
  },
  {
    id: "manutenzione",
    title: "Manutenzione Programmata",
    description: "Programmi settimanali o mensili su misura per ambienti prestigiosi. Continuità di servizio e qualità garantita nel tempo per i nostri clienti.",
    image: "/images/villa-lusso.jpg",
    features: [
      "Piano di manutenzione personalizzato in base alle esigenze",
      "Staff dedicato e formato specificamente per la tua proprietà",
      "Report periodici sullo stato delle superfici e dei materiali",
      "Interventi programmati per minimizzare l'impatto sulla tua routine",
      "Accesso a servizi straordinari con priorità assoluta"
    ]
  },
  {
    id: "personalizzati",
    title: "Servizi Personalizzati",
    description: "Ogni cliente è unico. Lo è anche il nostro intervento. Soluzioni esclusive per esigenze specifiche e richieste particolari.",
    image: "/images/yacht.jpg",
    features: [
      "Consulenza personalizzata per esigenze specifiche",
      "Sviluppo di protocolli di pulizia su misura",
      "Formazione dello staff sui prodotti e tecniche richieste",
      "Flessibilità totale negli orari e nelle modalità di intervento",
      "Gestione completa di richieste straordinarie"
    ]
  }
];

export default function ServicesPage() {
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
          <h1 className="heading-xl text-white mb-4">I Nostri Servizi</h1>
          <p className="subtitle max-w-3xl mx-auto">
            Servizi esclusivi di pulizia per una clientela esigente
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-16 ${
                index !== 0 ? "border-t border-gray-800" : ""
              }`}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}>
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <h2 className="heading-lg text-white mb-6">{service.title}</h2>
                  <p className="text-gray-300 mb-8">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={`${service.id}-${feature.substring(0, 20)}`} className="flex items-start">
                        <span className="text-gold mr-2">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="gold-gradient text-darkBg hover:opacity-90 transition-opacity"
                  >
                    <Link href="/contatti">
                      Richiedi Preventivo
                    </Link>
                  </Button>
                </div>

                <div className={`relative h-[400px] md:h-[500px] overflow-hidden rounded-lg ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
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
          <h2 className="heading-lg text-white mb-6">Servizio Su Misura Per Te</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Non hai trovato esattamente ciò che stavi cercando? Contattaci per discutere le tue esigenze specifiche
            e creare un servizio personalizzato che risponda perfettamente alle tue necessità.
          </p>
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          >
            <Link href="/contatti">
              Contattaci Ora
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
