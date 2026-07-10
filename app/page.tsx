import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Timeline from "./components/Timeline";
import Events from "./components/EventCard";
import Schedule from "./components/Schedule";
import Venue from "./components/Venue";
import Registration from "./components/Registration";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Overview />
      <Events />
      <Schedule />
      <Timeline />
      <Venue />
      <Gallery />
      <Registration />
      <FAQ />
      <Footer />
    </main>
  );
}
