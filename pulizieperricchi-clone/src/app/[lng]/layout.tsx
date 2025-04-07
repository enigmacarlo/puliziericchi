import type { Metadata } from "next";
import "@/app/globals.css";
import { Providers } from "../providers";
import { languages } from "../i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Pulizie Per Ricchi | Servizi di Pulizia di Lusso a Novi Ligure e Milano",
  description: "Servizi esclusivi di pulizia per clienti facoltosi: ville di lusso a Novi Ligure, Serravalle Scrivia, Milano, Portofino, yacht, jet privati ed eventi esclusivi. Servizio premium per l'élite italiana.",
  keywords: "pulizie di lusso, Novi Ligure, Serravalle Scrivia, Alessandria, Milano, Portofino, Costa Azzurra, McArthur Glen, ville di lusso, yacht, jet privati, servizi esclusivi, pulizie per milionari, pulizie alta gamma",
  authors: [{ name: "Pulizie Per Ricchi" }],
  creator: "Pulizie Per Ricchi",
  publisher: "Pulizie Per Ricchi",
  openGraph: {
    type: "website",
    title: "Pulizie Per Ricchi | Servizi di Pulizia di Lusso a Novi Ligure e Milano",
    description: "Servizi esclusivi di pulizia per clienti facoltosi: ville di lusso, yacht, jet privati ed eventi esclusivi in tutta Italia. Servizio premium per l'élite.",
    url: "https://www.pulizieperricchi.it",
    siteName: "Pulizie Per Ricchi",
    locale: "it_IT",
    images: [
      {
        url: "/images/villa-lusso.jpg",
        width: 1200,
        height: 630,
        alt: "Pulizie di lusso per ville esclusive a Novi Ligure e nelle zone più prestigiose d'Italia"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulizie Per Ricchi | Servizi di Pulizia di Lusso",
    description: "Servizi esclusivi di pulizia per clienti facoltosi: ville di lusso, yacht, jet privati ed eventi esclusivi. Non per tutti, solo per pochi.",
    images: ["/images/villa-lusso.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.pulizieperricchi.it",
    languages: {
      'it': 'https://www.pulizieperricchi.it/it',
      'en': 'https://www.pulizieperricchi.it/en',
      'fr': 'https://www.pulizieperricchi.it/fr',
    }
  }
};

export default function RootLayout({
  children,
  params: { lng }
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={lng === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`dark antialiased bg-darkBg min-h-screen text-white ${lng === 'ar' ? 'font-ar' : ''}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
