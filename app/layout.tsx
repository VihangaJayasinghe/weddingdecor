import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Elegant Wedding Decor",
  description: "Transforming venues into dreamscapes with premium wedding decorations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-stone-50 text-stone-900 overflow-x-hidden`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
