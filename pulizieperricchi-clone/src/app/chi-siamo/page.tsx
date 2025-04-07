import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type Value = {
  id: string;
  title: string;
  description: string;
};

const values: Value[] = [
  {
    id: "esclusivita",
    title: "Esclusività",
    description: "Ci rivolgiamo esclusivamente a una clientela che apprezza e riconosce il valore del nostro lavoro. Questo ci permette di offrire un servizio senza compromessi, senza limitazioni di tempo o risorse."
  },
  {
    id: "eccellenza",
    title: "Eccellenza",
    description: "Non ci accontentiamo mai della mediocrità. Ogni dettaglio è studiato e curato, ogni angolo viene trattato con la massima attenzione, utilizzando prodotti e tecniche di altissima qualità."
  },
  {
    id: "discrezione",
    title: "Discrezione",
    description: "Lavoriamo con la massima riservatezza, rispettando la privacy dei nostri clienti. Il nostro personale è selezionato anche in base alla loro capacità di mantenere la massima discrezione."
  },
  {
    id: "affidabilita",
    title: "Affidabilità",
    description: "La nostra clientela sa di poter contare su di noi in ogni situazione. Rispettiamo sempre le tempistiche concordate e siamo in grado di intervenire anche con brevissimo preavviso."
  }
];

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative pt-40 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/about-header-bg.jpg)'
        }}
      >
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-4">Chi Siamo</h1>
          <p className="subtitle max-w-3xl mx-auto">
            La storia dietro l'esclusività dei nostri servizi di pulizia
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="heading-lg text-white mb-8">La Nostra Storia</h2>
              <p className="text-gray-300">
                Una volta avevamo un'impresa di pulizie "normale". Ma spesso la gente non riconosceva il valore
                del nostro lavoro e di questa nobile e umile professione.
              </p>
              <p className="text-gray-300">
                Abbiamo quindi scelto di dedicarci solo a chi paga molto bene e sa riconoscere il valore delle cose.
                Perché avere qualcuno che pulisce al posto tuo è un lusso. Un lusso che non tutti possono permettersi.
              </p>
              <blockquote className="border-l-4 border-gold pl-4 italic text-gold py-2">
                Pulizie per Ricchi è questo: Non per tutti. Solo per pochi.
              </blockquote>
              <p className="text-gray-300">
                Da quel momento, abbiamo rivoluzionato la nostra filosofia aziendale, specializzandoci in servizi
                di pulizia di altissimo livello per una clientela selezionata. Il nostro approccio è cambiato,
                concentrandoci esclusivamente sulla qualità senza compromessi e su un servizio personalizzato
                che risponde alle esigenze più esclusive.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/about-2.jpg"
                alt="Interni di lusso"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="heading-lg text-white text-center mb-16">I Nostri Valori</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.id}
                className="bg-darkBg border border-gray-800 p-8 rounded-lg"
              >
                <h3 className="heading-md text-gold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section-padding bg-darkBg">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
              <Image
                src="/images/about-1.jpg"
                alt="Interni di lusso"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="heading-lg text-white mb-8">La Nostra Filosofia</h2>
              <h3 className="text-gold text-2xl mb-4">Personalizzazione e Attenzione al Dettaglio</h3>
              <p className="text-gray-300">
                Pulizie Per Ricchi nasce dalla passione per l'eccellenza e dalla volontà di offrire un servizio senza compromessi.
                Crediamo profondamente che la pulizia sia un'arte, non un semplice lavoro.
              </p>
              <p className="text-gray-300">
                La nostra filosofia si basa su tre principi fondamentali: perfezione, discrezione e personalizzazione.
                Ogni residenza di lusso merita un trattamento esclusivo, calibrato sulle sue caratteristiche uniche e
                le preferenze del proprietario.
              </p>
              <p className="text-gray-300">
                Il nostro approccio esclusivo ci porta a limitare deliberatamente il numero di clienti che serviamo,
                per garantire a ciascuno un'attenzione impeccabile. Non siamo per tutti, siamo solo per chi desidera
                il meglio, senza compromessi.
              </p>
              <div className="pt-4">
                <Button
                  asChild
                  className="gold-gradient text-darkBg hover:opacity-90 transition-opacity"
                >
                  <Link href="/contatti">
                    Contattaci per un Servizio Personalizzato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
