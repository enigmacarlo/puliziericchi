"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PolicyPage from "@/components/PolicyPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Client-side translation function
const getTranslation = (lng: string) => {
  // This is a simple client-side implementation
  // In a real app, you would fetch translations based on the language
  return {
    t: (key: string) => key, // For now, just return the key
  };
};

const privacyContent = [
  {
    title: "Informativa sulla Privacy",
    content: "La presente informativa sulla privacy descrive come raccogliamo, utilizziamo e proteggiamo i vostri dati personali quando visitate il nostro sito web o utilizzate i nostri servizi."
  },
  {
    title: "1. Dati raccolti",
    content: `Raccogliamo i seguenti tipi di informazioni:

- Informazioni di contatto (nome, indirizzo email, numero di telefono)
- Dettagli della proprietà per cui vengono richiesti i servizi
- Preferenze relative ai servizi di pulizia
- Dati di navigazione e utilizzo del sito web`
  },
  {
    title: "2. Utilizzo dei dati",
    content: `Utilizziamo i vostri dati personali per:

- Fornire i nostri servizi di pulizia
- Rispondere alle vostre richieste e domande
- Personalizzare la vostra esperienza
- Migliorare il nostro sito web e i nostri servizi
- Inviare comunicazioni di marketing (solo con il vostro consenso)`
  },
  {
    title: "3. Protezione dei dati",
    content: "Adottiamo misure di sicurezza tecniche e organizzative per proteggere i vostri dati personali. Tutto il nostro personale è vincolato da accordi di riservatezza e riceve formazione sulla protezione dei dati."
  },
  {
    title: "4. Condivisione dei dati",
    content: "Non vendiamo, scambiamo o trasferiamo in altro modo i vostri dati personali a terzi senza il vostro consenso, eccetto quando necessario per fornire i servizi richiesti o quando richiesto dalla legge."
  },
  {
    title: "5. I vostri diritti",
    content: `Avete il diritto di:

- Accedere ai vostri dati personali
- Correggere eventuali dati inesatti
- Richiedere la cancellazione dei vostri dati
- Opporvi al trattamento dei vostri dati
- Richiedere la limitazione del trattamento
- Richiedere la portabilità dei dati`
  },
  {
    title: "6. Cookie",
    content: "Il nostro sito web utilizza cookie per migliorare la vostra esperienza di navigazione. Potete gestire le preferenze sui cookie attraverso le impostazioni del vostro browser."
  },
  {
    title: "7. Modifiche alla privacy policy",
    content: "Ci riserviamo il diritto di modificare questa politica sulla privacy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina."
  },
  {
    title: "8. Contatti",
    content: "Per qualsiasi domanda riguardante questa politica sulla privacy, potete contattarci all'indirizzo email: info@pulizieperricchi.it"
  },
  {
    title: "",
    content: "Ultimo aggiornamento: 06/04/2025"
  }
];

export default function PrivacyPolicy() {
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
        title="Privacy Policy"
        sections={privacyContent}
      />
      <Footer t={t} />
    </main>
  );
}
