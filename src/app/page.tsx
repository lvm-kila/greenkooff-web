import Benefits from "../components/Benefits";
import ComparisonTable from "../components/ComparisonTable";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Process from "../components/Process";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="scroll-smooth bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Benefits />
      <Plans />
      <ComparisonTable />
      <Process />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
