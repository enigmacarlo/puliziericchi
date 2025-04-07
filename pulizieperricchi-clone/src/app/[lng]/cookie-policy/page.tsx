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

const cookiePolicyContent = [
  {
    title: "Cookie Policy",
    content: `La presente Cookie Policy ha lo scopo di illustrare i tipi e le categorie di cookie, le finalità e le modalità di utilizzo dei cookie da parte di questo sito web, nonché di fornire indicazioni agli utenti circa le azioni per rifiutare o eliminare i cookie presenti sul sito.`
  },
  {
    title: "Che cosa sono i cookie?",
    content: `I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti in occasione di visite successive. I cookie sono utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati sia dal titolare del sito che si sta visitando, sia da terze parti.`
  },
  {
    title: "Tipologie di cookie utilizzate da questo sito",
    content: `Il nostro sito utilizza diverse tipologie di cookie, ciascuna con una specifica funzione. Di seguito sono riportate le caratteristiche dei cookie utilizzati.`
  },
  {
    title: "1. Cookie tecnici",
    content: `Questi cookie sono necessari per il corretto funzionamento del sito e per fornire i servizi offerti e richiesti dall'utente; senza questi cookie non sarebbe possibile fornire correttamente i servizi. I cookie tecnici utilizzati da questo sito consistono in:

- Cookie di navigazione o di sessione: garantiscono la normale navigazione e fruizione del sito web.
- Cookie di funzionalità: permettono all'utente la navigazione in funzione di una serie di criteri selezionati (ad esempio, la lingua) al fine di migliorare il servizio reso.`
  },
  {
    title: "2. Cookie analitici",
    content: `Sono cookie utilizzati per raccogliere e analizzare informazioni statistiche sugli accessi e le visite al sito web. In alcuni casi, associati ad altre informazioni quali le credenziali inserite per l'accesso ad aree riservate (il proprio indirizzo di posta elettronica e la password), possono essere utilizzati per profilare l'utente.

Questo sito utilizza Google Analytics con IP anonimizzato per raccogliere informazioni sull'utilizzo del sito. Google Analytics utilizza dei cookie per raccogliere e analizzare in forma anonima le informazioni sui comportamenti di utilizzo del sito. Tali informazioni vengono raccolte da Google Analytics, che le elabora allo scopo di redigere report riguardanti le attività sui siti web.`
  },
  {
    title: "3. Cookie di profilazione",
    content: `Sono i cookie utilizzati per tracciare la navigazione dell'utente in rete e creare profili sui suoi gusti, abitudini, scelte, ecc. Con questi cookie possono essere trasmessi al terminale dell'utente messaggi pubblicitari in linea con le preferenze già manifestate dallo stesso utente nella navigazione online.`
  },
  {
    title: "Come disabilitare i cookie",
    content: `È possibile negare il consenso all'utilizzo dei cookie selezionando l'impostazione appropriata sul proprio browser. Di seguito forniamo i link che spiegano come disabilitare i cookie per i browser più diffusi:

- Internet Explorer: https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies
- Google Chrome: https://support.google.com/chrome/answer/95647?hl=it
- Mozilla Firefox: https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie
- Apple Safari: https://support.apple.com/it-it/guide/safari/sfri11471/mac`
  },
  {
    title: "Aggiornamenti della Cookie Policy",
    content: `La presente Cookie Policy è soggetta ad aggiornamenti; gli utenti sono invitati a verificarne periodicamente il contenuto.`
  },
  {
    title: "Contatti",
    content: `Per qualsiasi domanda o chiarimento riguardo la nostra Cookie Policy, puoi contattarci all'indirizzo email: info@pulizieperricchi.it`
  }
];

export default function CookiePolicyPage() {
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
        title="Cookie Policy"
        sections={cookiePolicyContent}
      />
      <Footer t={t} />
    </main>
  );
}
