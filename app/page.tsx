import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroModal from "@/components/IntroModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <IntroModal />
      <Navbar />
      <Hero />
      <Stats />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
