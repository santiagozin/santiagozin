import type { Metadata } from "next";
import "./globals.css";
import { Jura } from 'next/font/google'
import Navbar from "./navbar";
import { Analytics } from "@vercel/analytics/react"

const jura = Jura({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'], 
  })

export const metadata: Metadata = {
  title: "Santiago Zin",
  description: "Portfolio Santiago Zin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jura.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
