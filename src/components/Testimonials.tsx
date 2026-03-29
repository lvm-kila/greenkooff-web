import { TESTIMONIALS } from "../content/siteContent";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const impactSignals = [
  { label: "Horizonte de resultados", value: "4-8 semanas" },
  { label: "Modelo de trabajo", value: "Sprints quincenales" },
  { label: "Nivel de visibilidad", value: "KPIs en tiempo real" },
];

export default function Testimonials() {
  return (
    <section className="section-shell">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Resultados"
          title="Experiencias de equipos que profesionalizaron su crecimiento"
          subtitle="Casos representativos de empresas que mejoraron su operación comercial con una estructura integrada entre marketing y automatización."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <Reveal key={testimonial.company} delay={index * 80}>
                <figure className="card-premium h-full">
                  <blockquote className="text-base leading-7 text-slate-700">“{testimonial.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-slate-200 pt-4">
                    <p className="font-semibold text-slate-900">{testimonial.company}</p>
                    <p className="text-sm text-slate-600">{testimonial.person}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <aside className="card-premium h-full bg-gradient-to-b from-white to-blue-50/40">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">Señales de impacto</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">Operación más predecible, equipos más enfocados.</h3>
              <div className="mt-6 space-y-3">
                {impactSignals.map((item) => (
                  <div key={item.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-slate-800">{item.value}</p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
