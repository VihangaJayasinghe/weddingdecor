import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UpcomingEvents from "@/components/UpcomingEvents";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroModal from "@/components/IntroModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <IntroModal />
      <Navbar />
      <Hero />
      <UpcomingEvents />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
