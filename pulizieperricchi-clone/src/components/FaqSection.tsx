"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type Faq = {
  id: string;
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    id: "faq-1",
    question: "Quali sono i vantaggi di un servizio di pulizia professionale di lusso?",
    answer: "Un servizio di pulizia professionale di lusso offre numerosi vantaggi: personale altamente qualificato e selezionato, prodotti e tecniche di pulizia di alta qualità, attenzione maniacale ai dettagli, protocolli personalizzati per ogni tipo di materiale e superficie, massima discrezione e flessibilità negli orari. La differenza tra un servizio standard e uno di lusso è evidente fin dal primo intervento."
  },
  {
    id: "faq-2",
    question: "Come avviene il primo sopralluogo?",
    answer: "Il primo sopralluogo è gratuito e si svolge in modo discreto e professionale. Un nostro consulente visiterà la vostra proprietà per valutarne le caratteristiche, i materiali presenti e le vostre esigenze specifiche. In seguito, prepareremo un preventivo dettagliato e un piano di intervento personalizzato. La discrezione è garantita con un accordo di riservatezza che firmiamo prima di ogni sopralluogo."
  },
  {
    id: "faq-3",
    question: "Che prodotti utilizzate per la pulizia?",
    answer: "Utilizziamo esclusivamente prodotti di altissima qualità, selezionati per le loro performance eccellenti e per il minimo impatto ambientale. Per superfici delicate come marmi pregiati, legni antichi o tessuti di lusso, impieghiamo prodotti specifici e tecniche appropriate. Su richiesta, possiamo utilizzare prodotti biologici o ipoallergenici, e forniamo sempre la scheda tecnica completa dei prodotti utilizzati."
  },
  {
    id: "faq-4",
    question: "È possibile richiedere servizi aggiuntivi?",
    answer: "Assolutamente sì. Oltre ai servizi standard di pulizia, offriamo una vasta gamma di servizi aggiuntivi: sanificazione professionale, trattamenti antimuffa, pulizia di opere d'arte e oggetti di antiquariato, pulizia di tappeti pregiati, trattamenti per pavimenti di marmo o legno pregiato, e molto altro. Ogni servizio aggiuntivo viene eseguito da personale specializzato con competenze specifiche nel settore."
  },
  {
    id: "faq-5",
    question: "Come garantite la sicurezza e la privacy?",
    answer: "La sicurezza e la privacy dei nostri clienti sono priorità assolute. Tutto il nostro personale viene sottoposto a rigorosi controlli prima dell'assunzione e firma accordi di riservatezza. Utilizziamo sistemi di accesso sicuri per le proprietà e, se richiesto, possiamo operare in assenza dei proprietari con protocolli di sicurezza concordati. Inoltre, non divulghiamo mai informazioni sui nostri clienti e sulle proprietà che gestiamo."
  }
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="section-padding bg-darkBg">
      <div className="container-custom">
        <h2 className="heading-lg text-white text-center mb-16">Domande Frequenti</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left bg-black/30 hover:bg-black/50 transition-colors"
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaq === faq.id}
              >
                <h3 className="text-xl text-white font-medium">{faq.question}</h3>
                <span className="text-gold">
                  {openFaq === faq.id ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              {openFaq === faq.id && (
                <div className="p-6 bg-black/20 border-t border-gray-800">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
