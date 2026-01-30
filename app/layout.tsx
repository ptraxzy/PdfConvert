import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "KonversiPDF - Alat Konversi PDF Online Gratis",
  description: "Konversi, gabung, pisah, kompres, dan edit file PDF secara online dengan mudah dan gratis. Alat PDF profesional untuk semua kebutuhan Anda.",
  keywords: "konversi pdf, pdf to jpg, jpg to pdf, gabung pdf, pisah pdf, kompres pdf, edit pdf online",
  authors: [{ name: "KonversiPDF" }],
  openGraph: {
    title: "KonversiPDF - Alat Konversi PDF Online Gratis",
    description: "Konversi, gabung, pisah, kompres, dan edit file PDF secara online dengan mudah dan gratis.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

