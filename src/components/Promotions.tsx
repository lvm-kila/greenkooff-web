import { promotions } from "../data/promotions";

export default function Promotions() {
  return (
    <section id="promociones" className="bg-zinc-50 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">Promociones</p>
            <h2 className="text-3xl font-black text-zinc-900 md:text-4xl">Ofertas que salen ahora</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {promotions.map((promo) => (
            <article
              key={promo.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative">
                <img src={promo.image} alt={promo.title} className="h-52 w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-extrabold text-white">
                  {promo.badge}
                </span>
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-extrabold text-zinc-900">{promo.title}</h3>
                <p className="text-sm text-zinc-600">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-emerald-600">{promo.price}</span>
                  <a
                    href="https://wa.me/56912345678?text=Hola%20Greenkooff,%20quiero%20esta%20promo"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-emerald-600"
                  >
                    Pedir
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
