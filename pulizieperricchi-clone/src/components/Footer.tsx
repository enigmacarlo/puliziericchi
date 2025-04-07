import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const linkGroups = [
  {
    title: "Link Rapidi",
    links: [
      { name: "Home", href: "/" },
      { name: "Servizi", href: "/servizi" },
      { name: "Galleria", href: "/galleria" },
      { name: "Chi Siamo", href: "/chi-siamo" },
      { name: "Contatti", href: "/contatti" },
    ],
  },
  {
    title: "I Nostri Servizi",
    links: [
      { name: "Ville di Lusso", href: "/servizi#ville" },
      { name: "Yacht e Barche", href: "/servizi#yacht" },
      { name: "Jet Privati", href: "/servizi#jet" },
      { name: "Eventi Esclusivi", href: "/servizi#eventi" },
      { name: "Servizi Personalizzati", href: "/servizi#personalizzati" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-darkBg text-white pt-12 border-t border-gray-800">
      {/* SEO Text Section */}
      <div className="container-custom mb-12">
        <h2 className="text-xl font-medium mb-4">Impresa di pulizie Novi Ligure - Servizi di pulizia professionali</h2>
        <p className="text-gray-400 mb-6">
          Pulizie Per Ricchi offre servizi di pulizia professionali a Novi Ligure e dintorni.
          La nostra impresa di pulizie a Novi Ligure è specializzata in servizi di pulizia di lusso
          per ville, appartamenti e uffici.
        </p>
        <h2 className="text-xl font-medium mb-4">Impresa di pulizie Serravalle Scrivia, Alessandria - Servizi esclusivi</h2>
        <p className="text-gray-400">
          Pulizie Per Ricchi è un'impresa di pulizie a Serravalle Scrivia e Alessandria
          che offre servizi esclusivi per chi pretende solo il meglio. La nostra impresa di pulizie
          opera in tutta la provincia di Alessandria con professionalità e discrezione.
        </p>
      </div>

      {/* Main Footer */}
      <div className="container-custom grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <Link href="/" className="block mb-4">
            <Image
              src="/images/logo.png"
              alt="Pulizie Per Ricchi"
              width={100}
              height={100}
              className="h-auto w-24 object-contain"
            />
          </Link>
          <p className="text-gray-400 mb-4">
            Servizi di pulizia esclusivi per chi non si accontenta della normalità.
            Non per tutti, solo per pochi.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Link Groups */}
        {linkGroups.map((group) => (
          <div key={group.title} className="col-span-1">
            <h4 className="text-gold font-medium mb-4">{group.title}</h4>
            <ul className="space-y-2">
              {group.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Information */}
        <div className="col-span-1">
          <h4 className="text-gold font-medium mb-4">Contattaci</h4>
          <div className="mb-3">
            <Link
              href="tel:+393516098598"
              className="text-gray-400 hover:text-white transition-colors"
            >
              +39 351 609 8598
            </Link>
          </div>
          <div>
            <Link
              href="mailto:info@pulizieperricchi.it"
              className="text-gray-400 hover:text-white transition-colors"
            >
              info@pulizieperricchi.it
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 Pulizie Per Ricchi. Tutti i diritti riservati.
            <a
              href="https://fuoridalguscio.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold ml-2 hover:underline"
            >
              powered by fuoridalguscio.net
            </a>
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/termini-condizioni"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Termini e Condizioni
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-500 text-sm hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
