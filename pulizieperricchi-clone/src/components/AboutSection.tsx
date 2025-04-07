import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="section-padding bg-darkBg">
      <div className="container-custom">
        <h2 className="heading-lg text-white text-center mb-16">Chi Siamo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-6">
            <p className="text-gray-300">
              Pulizie Per Ricchi nasce dalla passione per l'eccellenza e dalla volontà di offrire un servizio senza compromessi.
              Crediamo profondamente che la pulizia sia un'arte, non un semplice lavoro.
            </p>

            <p className="text-gray-300">
              La nostra filosofia si basa su tre principi fondamentali: perfezione, discrezione e personalizzazione.
              Ogni residenza di lusso merita un trattamento esclusivo, calibrato sulle sue caratteristiche uniche e
              le preferenze del proprietario.
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

            <div className="pt-4">
              <Button
                asChild
                variant="outline"
                className="border-gold text-gold hover:text-white hover:border-white"
              >
                <Link href="/chi-siamo">
                  Scopri di Più
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <Image
              src="/images/about-1.jpg"
              alt="Interni di lusso"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
