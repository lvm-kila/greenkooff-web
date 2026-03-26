import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Location from "../components/Location";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Promotions from "../components/Promotions";

export default function Home() {
  return (
    <main className="scroll-smooth bg-white text-zinc-900">
      <Navbar />
      <Hero />
      <Promotions />
      <Categories />
      <Products />
      <Gallery />
      <Location />

      <section className="bg-emerald-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-8">
          <h2 className="text-3xl font-black md:text-5xl">¿Antojo? Pide ahora por WhatsApp</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-emerald-100">
            Haz tu pedido en segundos y recibe tu comida favorita donde estés en Los Andes.
          </p>
          <a
            href="https://wa.me/56912345678?text=Hola%20Greenkooff,%20quiero%20pedir%20ahora"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-2xl bg-black px-8 py-4 text-lg font-extrabold transition hover:scale-105 hover:bg-zinc-900"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/56912345678?text=Hola%20Greenkooff,%20quiero%20hacer%20un%20pedido"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Greenkooff"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-emerald-500 px-5 py-3 text-sm font-black text-white shadow-2xl shadow-emerald-900/40 transition hover:scale-110"
      >
        WhatsApp
      </a>

      <Footer />
    </main>
  );
}
