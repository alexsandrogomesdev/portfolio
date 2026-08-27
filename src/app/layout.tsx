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
  title: "My Portfolio",
  description: "My portfolio, alexsandrogomes.dev",
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
