import type { Metadata } from "next";
import { JetBrains_Mono, Inter, Playfair_Display } from "next/font/google";
import "../styles/globals.css";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
const playFairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alexsandro Gomes | Desenvolvedor Web Full Stack",
  description: "Portfólio de Alexsandro Gomes. Especialista em soluções de alto desempenho e infraestrutura escalável.",
  keywords: [
    "Desenvolvedor Full Stack",
    "JavaScript",
    "TypeScript",
    "Desenvolvimento Web",
    "Alexsandro Gomes",
    "alexsandrogomes.dev",
  ],
  authors: [{ name: "Alexsandro Gomes", url: "https://alexsandrogomes.dev" }],
  openGraph: {
    title: "Portfólio de Alexsandro Gomes",
    description: "Portfólio do desenvolvedor web full stack alexsandrogomes.dev",
    url: "https://alexsandrogomes.dev",
    siteName: "Alexsandro Gomes Dev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://alexsandrogomes.dev/images/photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Preview do portfólio de Alexsandro Gomes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexsandro Gomes | Desenvolvedor Full Stack",
    description: "Especialista em soluções web de alto desempenho.",
  },
};

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} ${inter.variable} ${playFairDisplay.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
