import type { Metadata } from "next";
import { Oswald, Inter, Playfair_Display } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import Preloader from "@/components/Preloader";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zyn | Future of Design",
  description: "Futuristic graphic design agency creating immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} ${playfair.variable} font-sans antialiased bg-[#050505] text-[#f0f0f0] overflow-x-hidden`}
      >
        <Preloader />
        <div className="bg-noise"></div>
        {children}
      </body>
    </html>
  );
}
