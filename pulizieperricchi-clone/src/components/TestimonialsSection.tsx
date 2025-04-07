"use client";

import { useEffect, useState } from "react";

type Testimonial = {
  id: string;
  content: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    content: "Non avrei mai immaginato che una pulizia potesse trasformare così radicalmente la mia villa. Il team di Pulizie Per Ricchi ha superato ogni aspettativa, prestando attenzione a dettagli che non sapevo nemmeno esistessero.",
    author: "Marco Albertini",
    role: "Proprietario Villa a Portofino"
  },
  {
    id: "testimonial-2",
    content: "Dopo anni di insoddisfazione con vari servizi di pulizia, finalmente ho trovato qualcuno all'altezza del mio yacht. La loro competenza tecnica e la cura dei materiali pregiati sono impareggiabili.",
    author: "Giulia Montalto",
    role: "Proprietaria Yacht a Sanremo"
  },
  {
    id: "testimonial-3",
    content: "Il servizio post-evento al mio matrimonio è stato impeccabile. In poche ore hanno ripristinato la location come se la festa non ci fosse mai stata. Discrezione e professionalità al massimo livello.",
    author: "Alessandro e Francesca Rizzo",
    role: "Sposi - Eventi Esclusivi"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-darkBg">
      <div className="container-custom">
        <h2 className="heading-lg text-white text-center mb-16">Cosa Dicono i Nostri Clienti</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative px-8 py-10 bg-black/50 border border-gray-800 rounded-lg">
            {/* Quote marks */}
            <div className="absolute -top-6 left-8 text-gold text-7xl">"</div>
            <div className="absolute -bottom-6 right-8 text-gold text-7xl rotate-180">"</div>

            {/* Testimonial content */}
            <div className="min-h-[200px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-gray-300 italic mb-8">
                  {testimonials[currentIndex].content}
                </p>
                <div className="mt-6">
                  <h3 className="text-gold font-medium text-xl">
                    {testimonials[currentIndex].author}
                  </h3>
                  <p className="text-gray-400 mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full w-3 h-3 transition-all ${
                  index === currentIndex ? "bg-gold w-6" : "bg-gray-600"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
