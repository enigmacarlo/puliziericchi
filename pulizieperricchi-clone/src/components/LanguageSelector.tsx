"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { languages } from "@/app/i18n/settings";
import { ChevronDown, Globe } from "lucide-react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  // Get current language from pathname
  const getCurrentLanguage = () => {
    // The format is /[lang]/route
    const segments = pathname.split('/');
    const langCode = segments[1];
    if (languages.includes(langCode)) {
      return langCode;
    }
    return 'it'; // Default to Italian
  };

  const currentLang = getCurrentLanguage();

  // Language display names
  const languageNames: { [key: string]: string } = {
    'it': 'Italiano',
    'en': 'English',
    'fr': 'Français',
    'de': 'Deutsch',
    'ar': 'العربية'
  };

  // Switch language
  const switchLanguage = (lang: string) => {
    if (lang === currentLang) {
      setIsOpen(false);
      return;
    }

    // Calculate the new path by replacing the language code
    let newPath = pathname;
    const segments = pathname.split('/');

    if (languages.includes(segments[1])) {
      // Replace the language segment
      segments[1] = lang;
      newPath = segments.join('/');
    } else {
      // Add language segment if it doesn't exist
      newPath = `/${lang}${pathname}`;
    }

    startTransition(() => {
      router.push(newPath);
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 px-2 py-1 rounded-md text-white hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={18} className="text-gold" />
        <span>{languageNames[currentLang]}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-darkBg border border-gray-800 rounded-md shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors ${
                lang === currentLang ? 'text-gold' : 'text-white'
              } ${lang === 'ar' ? 'text-right' : ''}`}
              onClick={() => switchLanguage(lang)}
              disabled={isPending}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
