export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1800&q=80"
        alt="Combo de comida rápida Greenkooff"
        className="h-[84vh] min-h-[560px] w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-center px-4 text-white md:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full bg-red-600 px-4 py-2 text-sm font-bold uppercase tracking-wide">
            Sabor brutal en Los Andes
          </p>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">
            Las mejores pizzas, burgers y combos en Los Andes
          </h1>
          <p className="mt-5 text-lg text-zinc-200 md:text-xl">
            Pide rápido por WhatsApp o retira en local.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#promociones"
              className="rounded-2xl bg-red-600 px-7 py-4 text-base font-extrabold shadow-xl shadow-red-900/40 transition hover:scale-105 hover:bg-red-500"
            >
              Ver promociones
            </a>
            <a
              href="https://wa.me/56912345678?text=Hola%20Greenkooff,%20quiero%20hacer%20un%20pedido"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/30 bg-white/10 px-7 py-4 text-base font-bold transition hover:scale-105 hover:bg-white/20"
            >
              Pedir por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            {[
              "Desde 2018",
              "Delivery / Retiro",
              "Los Andes",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
