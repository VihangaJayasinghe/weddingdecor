import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroModal from "@/components/IntroModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020c1b]">
      <IntroModal />
      <Navbar />
      <Hero />
      <Work />
      <Manifesto />
      <Contact />
      <Footer />
    </main>
  );
}
