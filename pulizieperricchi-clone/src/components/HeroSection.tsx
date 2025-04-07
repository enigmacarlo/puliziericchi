import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-24 md:py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/villa-lusso.jpg)'
      }}
    >
      <div className="container-custom text-center z-10">
        <h1 className="heading-xl text-white mb-4">
          Pulizie di Lusso <br />
          <span className="mt-2 md:mt-3 block">per Chi Pretende il Meglio</span>
        </h1>
        <p className="subtitle max-w-3xl mx-auto mb-8">
          Offriamo servizi di pulizia esclusivi per residenze di prestigio, yacht, jet privati e boutique di lusso.
          La perfezione in ogni dettaglio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity px-8 py-6 text-lg"
          >
            <Link href="/contatti">
              Richiedi Preventivo
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-gold text-gold hover:text-white hover:border-white px-8 py-6 text-lg"
          >
            <Link href="/servizi">
              Scopri i Servizi
            </Link>
          </Button>
        </div>
        <p className="text-gold mt-12 italic">Non per tutti</p>
        <p className="text-gold font-hargreeves text-xl mt-1">Solo per pochi</p>
      </div>
    </section>
  );
}
