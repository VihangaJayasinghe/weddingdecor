import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
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
        className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-[#020c1b] text-[#e6f1ff] overflow-x-hidden`}
      >
        <div className="bg-noise"></div>
        {children}
      </body>
    </html>
  );
}
