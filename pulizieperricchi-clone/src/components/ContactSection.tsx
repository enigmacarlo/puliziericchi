"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    console.log(formData);
    alert("Richiesta inviata con successo! Ti contatteremo presto.");
  };

  return (
    <section className="section-padding bg-black" id="contatti">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-lg text-white mb-6">
              Richiedere un <span className="text-gold">Preventivo</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Siamo a tua disposizione per rispondere a qualsiasi domanda e per creare un servizio
              personalizzato in base alle tue esigenze. Compila il modulo o contattaci direttamente.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-400 text-lg">Telefono</h3>
                <a href="tel:+393516098598" className="text-gold text-xl hover:underline">
                  +39 351 609 8598
                </a>
              </div>

              <div>
                <h3 className="text-gray-400 text-lg">Email</h3>
                <a href="mailto:info@pulizieperricchi.it" className="text-gold text-xl hover:underline">
                  info@pulizieperricchi.it
                </a>
              </div>
            </div>
          </div>

          <div className="bg-darkBg p-8 rounded-lg border border-gray-800">
            <h3 className="heading-md text-gold mb-6">
              Richiedi informazioni o preventivo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Il tuo nome"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surname" className="text-white">Cognome</Label>
                  <Input
                    id="surname"
                    name="surname"
                    placeholder="Il tuo cognome"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="La tua email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-black/50 border-gray-700 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Telefono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Il tuo numero di telefono"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-700 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service" className="text-white">
                  Servizio di interesse
                </Label>
                <Select
                  name="service"
                  value={formData.service}
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger className="bg-black/50 border-gray-700 text-white">
                    <SelectValue placeholder="Seleziona un servizio" />
                  </SelectTrigger>
                  <SelectContent className="bg-darkBg text-white">
                    <SelectItem value="ville">Ville e residenze private</SelectItem>
                    <SelectItem value="showroom">Showroom e boutique</SelectItem>
                    <SelectItem value="eventi">Eventi di gala</SelectItem>
                    <SelectItem value="yacht">Yacht e jet privati</SelectItem>
                    <SelectItem value="sanificazione">Sanificazione professionale</SelectItem>
                    <SelectItem value="manutenzione">Manutenzione ordinaria</SelectItem>
                    <SelectItem value="personalizzato">Servizio personalizzato</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Messaggio</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Descrivi le tue esigenze"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-black/50 border-gray-700 text-white min-h-32"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  className="mt-1"
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacy" className="text-gray-300 text-sm">
                  Ho letto e accetto la{" "}
                  <a href="/privacy-policy" className="text-gold hover:underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              <Button
                type="submit"
                className="gold-gradient text-darkBg hover:opacity-90 transition-opacity w-full py-6"
              >
                Invia Richiesta
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
