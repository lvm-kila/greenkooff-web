import { categories } from "../data/categories";

export default function Categories() {
  return (
    <section id="menu" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-600">Menú por categoría</p>
        <h2 className="mt-2 text-3xl font-black text-zinc-900 md:text-4xl">Elige tu antojo</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => (
            <article
              key={category.id}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-36 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-zinc-900">{category.name}</h3>
                <button className="mt-3 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-600">
                  Ver más
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
