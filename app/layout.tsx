import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const merriweather = Merriweather({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
});

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
      <body className={`${inter.variable} ${merriweather.variable} antialiased`}>
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
