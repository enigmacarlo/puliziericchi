import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Pulizie Per Ricchi | Impresa di Pulizie di Lusso",
  description: "Servizi esclusivi di pulizia per clienti facoltosi: ville di lusso, yacht, jet privati ed eventi esclusivi. Non per tutti, solo per pochi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className="dark antialiased bg-darkBg min-h-screen text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
