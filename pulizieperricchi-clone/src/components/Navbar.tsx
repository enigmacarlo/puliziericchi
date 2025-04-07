"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Servizi", href: "/servizi" },
  { name: "Galleria", href: "/galleria" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-darkBg py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="w-20 md:w-24">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Pulizie Per Ricchi"
              width={100}
              height={100}
              className="h-auto w-full object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="gold-gradient text-darkBg hover:opacity-90 transition-opacity"
          >
            <Link href="/contatti">
              Richiedi Preventivo
            </Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-darkBg z-40 p-4">
            <ul className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-gold transition-colors block py-2 text-xl"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Button
                  asChild
                  className="w-full gold-gradient text-darkBg hover:opacity-90 transition-opacity"
                >
                  <Link href="/contatti" onClick={() => setIsOpen(false)}>
                    Richiedi Preventivo
                  </Link>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
