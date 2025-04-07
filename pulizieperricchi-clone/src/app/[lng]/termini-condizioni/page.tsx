"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PolicyPage from "@/components/PolicyPage";
import { useParams } from "next/navigation";

// Client-side translation function
const getTranslation = (lng: string) => {
  // This is a simple client-side implementation
  // In a real app, you would fetch translations based on the language
  return {
    t: (key: string) => key, // For now, just return the key
  };
};

const termsContent = [
  {
    title: "Termini e Condizioni",
    content: `Benvenuto sul sito web di Pulizie Per Ricchi. I presenti Termini e Condizioni governano l'utilizzo del nostro sito web e i servizi offerti da noi.

Utilizzando il nostro sito web e i nostri servizi, accetti di rispettare questi Termini e Condizioni. Ti preghiamo di leggerli attentamente.`
  },
  {
    title: "1. Accettazione dei Termini",
    content: `Accedendo al nostro sito web, confermi di aver letto, compreso e accettato di essere vincolato dai presenti Termini e Condizioni, dalla nostra Privacy Policy e da eventuali termini aggiuntivi specifici per determinati servizi.`
  },
  {
    title: "2. Servizi Offerti",
    content: `Pulizie Per Ricchi offre servizi di pulizia di lusso per residenze private, yacht, jet privati ed eventi esclusivi. Le specifiche dettagliate dei servizi, i costi e le modalità di erogazione sono oggetto di un accordo separato che viene stipulato direttamente con il cliente.`
  },
  {
    title: "3. Richieste di Preventivi",
    content: `Le richieste di preventivo effettuate tramite il nostro sito web sono soggette a verifica e conferma. Ci riserviamo il diritto di rifiutare richieste di servizio a nostra discrezione. Un preventivo ufficiale verrà fornito solo dopo un sopralluogo o una valutazione dettagliata delle esigenze del cliente.`
  },
  {
    title: "4. Diritti di Proprietà Intellettuale",
    content: `Tutti i contenuti presenti sul sito web, compresi testi, grafica, logo, immagini, così come la compilazione di questi (intesa come la raccolta, disposizione e assemblaggio), sono di proprietà di Pulizie Per Ricchi o dei suoi fornitori di contenuti e sono protetti dalle leggi sul copyright e sulla proprietà intellettuale.`
  },
  {
    title: "5. Limitazione di Responsabilità",
    content: `Nei limiti consentiti dalla legge, Pulizie Per Ricchi non sarà responsabile per danni diretti, indiretti, incidentali, consequenziali o punitivi derivanti dall'accesso o dall'utilizzo (o dall'impossibilità di accedere o utilizzare) questo sito web o qualsiasi contenuto in esso presente.`
  },
  {
    title: "6. Link a Siti Terzi",
    content: `Il nostro sito web può contenere link a siti web di terze parti. Questi link sono forniti unicamente per comodità. Pulizie Per Ricchi non ha alcun controllo su questi siti web e non è responsabile per i loro contenuti o le loro pratiche sulla privacy.`
  },
  {
    title: "7. Modifiche ai Termini",
    content: `Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi momento. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione sul sito web. L'uso continuato del sito dopo tali modifiche costituirà l'accettazione dei nuovi termini.`
  },
  {
    title: "8. Legge Applicabile",
    content: `Questi Termini e Condizioni sono regolati e interpretati in conformità con le leggi italiane, senza dare effetto a principi di conflitto di leggi.`
  },
  {
    title: "9. Contattaci",
    content: `Se hai domande riguardanti questi Termini e Condizioni, puoi contattarci all'indirizzo email: info@pulizieperricchi.it o telefonicamente al numero: +39 351 609 8598.`
  }
];

export default function TermsPage() {
  const params = useParams();
  const lng = params.lng as string || 'it';
  const [t, setT] = useState<any>((key: string) => key);

  useEffect(() => {
    // In a real app, this would load translations based on the language
    setT(() => getTranslation(lng).t);
  }, [lng]);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar t={t} />
      <PolicyPage
        title="Termini e Condizioni"
        sections={termsContent}
      />
      <Footer t={t} />
    </main>
  );
}
