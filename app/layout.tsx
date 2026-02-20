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
  title: "EVENTx | Unforgettable Experiences",
  description: "Modern event organizing company creating immersive moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden" suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} font-sans antialiased bg-[#000000] text-[#ffffff] overflow-x-hidden`}
      >
        <div className="bg-noise"></div>
        {children}
      </body>
    </html>
  );
}
