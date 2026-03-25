import { products } from "../data/products";

const badgeStyles: Record<string, string> = {
  "Más vendido": "bg-red-600 text-white",
  Nuevo: "bg-emerald-500 text-white",
  Favorito: "bg-zinc-900 text-white",
};

export default function Products() {
  return (
    <section className="bg-zinc-100 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-red-600">Populares</p>
        <h2 className="mt-2 text-3xl font-black text-zinc-900 md:text-4xl">Lo que más piden hoy</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg shadow-zinc-900/10 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative">
                <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-extrabold ${badgeStyles[product.badge]}`}
                >
                  {product.badge}
                </span>
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-xl font-extrabold text-zinc-900">{product.name}</h3>
                <p className="text-sm text-zinc-600">{product.description}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xl font-black text-red-600">{product.price}</span>
                  <button className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-bold text-white transition group-hover:bg-red-600">
                    Agregar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
