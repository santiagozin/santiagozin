import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santiago Zin",
  description: "Portfolio Santiago Zin — Fullstack developer, Buenos Aires",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body className="min-h-screen bg-paper font-ui text-ink">
        <div className="mx-auto min-h-screen max-w-[1440px] border-x-[3px] border-ink">
          {children}
        </div>
      </body>
    </html>
  );
}
