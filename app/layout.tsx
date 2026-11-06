import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Lenguajes del Mundo Vivo | Comunicación en Animales, Plantas y Hongos",
  description: "Explora el estado de la investigación en comunicación animal, vegetal y fúngica. Comparador interactivo con evidencia científica.",
  keywords: "comunicación animal, bioacústica, señales químicas, redes de micelio, etología, biología",
  authors: [{ name: "Lenguajes del Mundo Vivo" }],
  openGraph: {
    title: "Lenguajes del Mundo Vivo",
    description: "Comunicación no humana: estado de la investigación científica",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
