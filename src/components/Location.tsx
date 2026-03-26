const features = [
  { icon: "⚡", title: "Rapidez", text: "Pedidos listos en minutos y atención ágil todos los días." },
  { icon: "🔥", title: "Promociones", text: "Combos potentes con precios que realmente convienen." },
  { icon: "🍔", title: "Variedad", text: "Pizzas, burgers, completos, waffles y bebidas en un solo lugar." },
];

const mapsQuery = "O'Higgins 400, Los Andes, Chile";
const mapsHref =
  "https://www.google.com/maps/search/?api=1&query=O%27Higgins%20400%2C%20Los%20Andes%2C%20Chile";
const mapsEmbedSrc =
  "https://www.google.com/maps?q=O%27Higgins%20400%2C%20Los%20Andes%2C%20Chile&output=embed";

export default function Location() {
  return (
    <section id="ubicacion" className="bg-zinc-900 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-500">Sobre Greenkooff</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Comida rápida con sabor real</h2>
          <p className="mt-4 text-zinc-300">
            En Greenkooff ofrecemos comida rápida de calidad en Los Andes, con promociones constantes y atención rápida.
          </p>

          <div className="mt-6 space-y-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-lg font-bold">
                  <span className="mr-2">{feature.icon}</span>
                  {feature.title}
                </p>
                <p className="text-sm text-zinc-300">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-black">Ubicación y horario</h3>
          <p className="mt-4 text-zinc-200">📍 O&apos;Higgins 400, Los Andes, Chile</p>
          <p className="mt-2 text-zinc-200">🕒 Lun a Dom: 12:30 - 23:30 hrs</p>

          <div className="mt-6 overflow-hidden rounded-xl border border-white/20 bg-black/30">
            <iframe
              title={`Mapa de ${mapsQuery}`}
              src={mapsEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-56 w-full md:h-64"
            />
          </div>

          <a
            href={mapsHref}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-6 py-3 font-bold text-white transition hover:scale-105 hover:bg-emerald-500"
          >
            ¿Cómo llegar?
          </a>
        </div>
      </div>
    </section>
  );
}
